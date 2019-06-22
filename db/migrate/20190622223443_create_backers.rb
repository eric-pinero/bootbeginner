class CreateBackers < ActiveRecord::Migration[5.2]
  def change
    create_table :backers do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.integer :reward_id
      t.integer :pledged_amount, null: false
      t.timestamps 
    end

    add_index :backers, [:user_id, :project_id], unique: true
  end
end
