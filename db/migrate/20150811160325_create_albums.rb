class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :url
      t.timestamps null: false
    end

    add_index :albums, [:title, :user_id], unique: true
    add_foreign_key :albums, :users
  end
end
