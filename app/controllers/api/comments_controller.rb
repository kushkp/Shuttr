class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comments_params)

    if @comment.save!
      render :show
    else
      render @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
    render :show
  end

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  private
    def comments_params
      params.require(:comment).permit(:photo_id, :body)
    end
end
