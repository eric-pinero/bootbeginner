class RenameBackersToPledges < ActiveRecord::Migration[5.2]
  def change
    rename_table :backers, :pledges
  end
end
