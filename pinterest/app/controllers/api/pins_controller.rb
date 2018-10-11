class Api::PinsController < ApplicationController

  def index
    @pins = Pin.all
    render 'api/pins/index'
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.author_id = current_user.id
    if @pin.save
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find(params[:id])
    render 'api/pins/show'
  end

  def destroy
    @pin = current_user.pins.find(params[:id])
    if @pin.destroy
      render 'api/pins/show'
    else
      render json: ['Unable to delete pin.'], status: 404
    end
  end

  def pin_params
    params.require(:pin).permit(:comment, :url)
  end
end

# need changes here for AWS of image_url
# in create destroy methods and in params
