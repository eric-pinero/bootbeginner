json.extract! project, :id, :category_name, :creator_id, :subtitle, :description, :location, :title, :category_id, :subcategory_id, :risks, :faqs, :length, :amount_received, :goal, :project_rewards, :project_pledges
debugger
if project.image.attached? 
    json.imageUrl url_for(project.image)
end
