class AddEstimatedDeliverytoRewards < ActiveRecord::Migration[5.2]
  def change
    add_column :rewards, :estimated_month, :string
    add_column :rewards, :estimated_year, :integer
  end
end
