class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :url
      t.timestamps null: false
    end

    add_index :albums, :title, unique: true
  end
end
