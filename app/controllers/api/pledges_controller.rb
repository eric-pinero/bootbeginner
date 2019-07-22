class Api::PledgesController < ApplicationController
    before_action :ensure_logged_in

    def create
        @pledge = Pledge.new
        @pledge.user_id = current_user.id
        @pledge.project_id = pledge_params["project_id"]
        @pledge.reward_id = pledge_params["reward_id"]
        @pledge.pledged_amount = pledge_params["pledged_amount"]
        if @pledge.save
            render :show
        else
            render json: @pledge.errors.full_messages, status: 401 
        end
    end

    def show
        @pledge = Pledge.find(params[:id])
    end

    def update
        @pledge = Pledge.find(params[:id])
        if @pledge.update(pledge_params)
            render :show
        else
            render json: @pledge.errors.full_messages, status: 401
        end
    end

    def destroy
        @pledge.destroy
        head :no_content
    end

    private
    def selected_pledge
        Pledge.find(params[:id])
    end

    def pledge_params
        params.require(:pledge).permit(
            :project_id, :reward_id, :pledged_amount            
        )
    end
end