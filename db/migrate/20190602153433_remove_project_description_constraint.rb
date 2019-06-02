class RemoveProjectDescriptionConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :description, :string, :null => true
  end
end
