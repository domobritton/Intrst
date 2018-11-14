class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
    render 'api/boards/index'
  end

  def create
    @board = Board.new(board_params)
    @board.author_id = current_user.id
    if @board.save
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    render 'api/boards/show'
  end

  def update
    @board = current_user.boards.find(params[:id])
    if @board.update_attributes(board_params)
      render 'api/boards/show'
    else
      render json: ['Something went wrong. Cant update board'], status: 401
    end
  end

  def destroy
    @board = current_user.boards.find(params[:id])
    if @board.destroy
      render 'api/boards/show'
    else
      render json: ['Something went wrong. Cant delete board'], status: 401
    end
  end

  def board_params
    params.require(:board).permit(:title)
  end
end
