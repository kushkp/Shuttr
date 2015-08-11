class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
      t.string :url, null: false
      t.decimal :long, precision: 8, scale: 5
      t.decimal :lat, precision: 7, scale: 5
      t.timestamps null: false
    end

    add_index :photos, [:title, :album_id], unique: true
    add_foreign_key :photos, :albums
  end
end
