json.project do
    json.partial! 'api/projects/project', project: @project
end

json.creator do
    json.partial! 'api/users/user', user: @project.creator
end

json.category do
    json.extract! @project.category, :name
end