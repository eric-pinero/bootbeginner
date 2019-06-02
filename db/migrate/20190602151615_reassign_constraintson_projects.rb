class ReassignConstraintsonProjects < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :title, :string, :null => true
    change_column :projects, :risks, :string, :null => true
    change_column :projects, :faqs, :string, :null => true
    change_column :projects, :length, :integer, :null => true
    change_column :projects, :amount_received, :integer, :null => true
    change_column :projects, :goal, :integer, :null => true
    add_column :projects, :launched?,:boolean, :default => false

  end
end
