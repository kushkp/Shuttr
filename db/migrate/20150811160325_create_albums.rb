class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :url
      t.integer :user_id, null: false
      t.timestamps null: false
    end

    add_index :albums, :title, unique: true
    add_foreign_key :albums, :users
  end
end
