class AddColsPhotoOwnerIdNameDesc < ActiveRecord::Migration
  def change
    add_column :users, :name, :string, null: false, default: "unknown"
    add_column :photos, :owner_id, :integer, null: false, default: 1
    add_column :photos, :description, :text
  end
end
