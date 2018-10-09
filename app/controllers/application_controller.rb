class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json
  
  helper_method :current_user, :logged_in?
  before_action :underscore_params!

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  private
  def underscore_params!
    params.deep_transform_keys!(&:underscore)
  end
end
