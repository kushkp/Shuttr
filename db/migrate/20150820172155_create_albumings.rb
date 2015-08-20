class CreateAlbumings < ActiveRecord::Migration
  def change
    create_table :albumings do |t|
      t.integer :album_id, null: false
      t.integer :photo_id, null: false
      t.timestamps null: false
    end

    add_index :albumings, :album_id
    add_index :albumings, :photo_id
    add_foreign_key :albumings, :albums
    add_foreign_key :albumings, :photos
  end
end
