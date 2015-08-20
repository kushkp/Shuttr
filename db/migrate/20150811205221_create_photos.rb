class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.integer :user_id, null: false
      t.text :description
      t.float :long
      t.float :lat
      t.timestamps null: false
    end

    add_index :photos, [:title, :user_id], unique: true
    add_index :photos, :title
    add_index :photos, :user_id
    add_foreign_key :photos, :users
  end
end
