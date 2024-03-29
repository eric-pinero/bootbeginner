class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = selected_user
    end

    private
    def selected_user
        User.find(params[:id])
    end
    def user_params
        params.require(:user).permit(:username, :email, :password )
    end
end

def lower(string)
    string.to_str.downcase
end