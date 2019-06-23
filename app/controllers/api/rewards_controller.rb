class Api::RewardsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @rewards = Reward.find_by(project_id: reward_params["project_id"] })
    end

    def create
        @reward = Reward.new
        @reward.title = reward_params["title"]
        @reward.description = reward_params["description"]
        @reward.minimum_value = reward_params["minimum_value"]
        @reward.project_id = reward_params["project_id"]
        @reward.project = Project.find(reward_params["project_id"])

        if @reward.save
            render :show
        else
            render json: @reward.errors.full_messages, status: 401 
        end
    end

    def show
        @reward = Reward.find(params[:id])
    end

    def update
        @reward = Reward.find(params[:id])
        if @reward.update(reward_params)
            render :show
        else
            render json: @reward.errors.full_messages, status: 401
        end
    end

    def destroy
        @reward.destroy
        head :no_content
    end

    private
    def selected_reward
        Reward.find(params[:id])
    end

    def reward_params
        params.require(:reward).permit(
            :title, :description, :items, :project_id, :minimum_value,
            :quantity, :start_time, :end_time
        )
    end
end