class StaticPagesController < ApplicationController
  # after_initialize :require_login #HELP: is this how to prevent backbone app from loading without login?

  def root
    if logged_in?
      render :root
    else
      redirect_to new_session_url
    end
  end
end
