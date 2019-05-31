class RemoveSubCategoryValidation < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :subcategory_id, :integer, :null => true
  end
end
