class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in

    def create
        @project = Project.new(project_params)
        @project.user_id = current_user.id
        @project.category_id = Category.find_by(title: params[:category]).id

        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 401 
        end
    end

    def show
        @project = selected_project
    end

    def edit
    end

    def update
        if @project.update(project_params)
            render: show
        else
            render json: @project.errors.full_messages, status: 401
    end

    def destroy
        @project.destroy
        head :no_content
    end

    private
    def selected_project
        Project.find(params[:id])
    end

    def project_params
        params.require(:project).permit(:category, :subtitle, :location)
    end
end