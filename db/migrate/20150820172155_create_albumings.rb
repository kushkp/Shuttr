class CreateAlbumings < ActiveRecord::Migration
  def change
    create_table :albumings do |t|

      t.timestamps null: false
    end
  end
end
