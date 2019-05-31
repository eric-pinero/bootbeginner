class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string  :title, null: false
      t.string  :subtitle, null: false
      t.integer :creator_id, null: false
      t.integer :category_id, null: false
      t.integer :subcategory_id, null: false
      t.text    :description, null: false
      t.text    :risks, null: false
      t.text    :faqs, null: false
      t.integer :length, null: false
      t.integer :amount_received, null: false
      t.integer :goal, null: false
      t.timestamps
    end

    add_index :projects, :creator_id
    add_index :projects, :category_id
    add_index :projects, :subcategory_id

  end
end
