class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :url
      t.integer :owner_id, null: false
      t.timestamps null: false
    end

    add_index :albums, :title, unique: true
  end
end
