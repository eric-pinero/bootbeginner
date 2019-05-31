class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in
    def new
        @project = Project.new
        render :new
    end

    def create
        @project = Project.new(project_params)
        @project.user_id = current_user.id
        @project.category_id = Category.find_by(title: params[:category]).id

        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def show
        @project = selected_project
    end

    def edit
    end

    def update
    end

    def destroy
    end

    private
    def selected_project
        Project.find(params[:id])
    end

    def project_params
        params.require(:project).permit(:title, :subtitle, :category, :description, :risks, :faqs, :length, :goal)
    end
end