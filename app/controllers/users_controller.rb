class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.alias == nil || @user.alias == ""
      @user.alias = "guest#{rand(999999999)}"
    end

    if @user.avatar_url == nil || @user.avatar_url == ""
      @user.avatar_url == "http://res.cloudinary.com/dydhzgrty/image/upload/c_scale,w_50/v1440092203/blank-avatar_r9sqmu.png"
    end

    if @user.save
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
  end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end
end
