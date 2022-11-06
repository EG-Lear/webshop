class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  private

  def find_user
    User.find(session[:user_id])
  end

  def record_not_found
    render json: { errors: "User not logged in" }, status: :unauthorized
  end
end
