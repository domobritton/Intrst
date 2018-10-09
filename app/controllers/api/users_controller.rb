class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
  end

  def update
    @user = User.find(current_user.id)

    if @user.update_attributes(user_params)
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :firstname, :lastname, :image_url)
  end
end
