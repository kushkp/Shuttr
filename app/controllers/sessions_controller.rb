class SessionsController < ApplicationController
  def create
      @user = User.find_by_credentials(
                  params[:user][:email],
                  params[:user][:password])

      if @user.nil?
        flash.now[:errors] = ["Invalid login credentials"]
        render :new
      else
        login(@user)
        redirect_to root_url
      end
    end

    def new
      @user = User.new
    end

    def destroy
      logout
      render json: current_user, status: 200
    end
end
