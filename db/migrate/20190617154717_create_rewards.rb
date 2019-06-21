class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.string  :title, null: false
      t.text    :description, null: false
      t.string  :items
      t.integer :project_id, null: false
      t.integer :minimum_value, null: false
      t.integer :quantity
      t.datetime :start_time
      t.datetime :end_time
      t.timestamps
    end

    add_index :rewards, :project_id
  end
end
