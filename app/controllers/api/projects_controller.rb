class Api::ProjectsController < ApplicationController
    # before_action :ensure_logged_in
    
    def index
        if params[:search]
            @projects = Project.search(params[:search])
            render :index
        else
            @projects = Project.all

            render :index
        end
    end

    def create
        @project = Project.new
        @project.subtitle = project_params["subtitle"]
        @project.location = project_params["location"]
        @project.category_id = Category.find_by(name: project_params["categoryName"]).id
        @project.creator_id = current_user.id

        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 401 
        end
    end

    def show
        @project = Project.find(params[:id])
    end

    def update
        @project = Project.find(params[:id])
        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 401
        end
    end

    def destroy
        @project = Project.find(params[:id])
        if @project.destroy
            render :remove
        else
            render json: @project.errors.full_messages, status: 422
          end
      
    end

    private
    def selected_project
        Project.find(params[:id])
    end

    def project_params
        params.require(:project).permit(
            :categoryName, :subtitle, :location, 
            :page, :category_id, :creator_id, 
            :title, :description, :subcategory_id, 
            :risks, :faqs, :length, :amount_received, :goal,
            :image, :project_rewards, :project_pledges, :creator_name
        )
    end
end