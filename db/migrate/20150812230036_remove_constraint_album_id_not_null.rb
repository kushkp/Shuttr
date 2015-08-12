class RemoveConstraintAlbumIdNotNull < ActiveRecord::Migration
  def change
    change_column :photos, :album_id, :integer, null: true
  end
end
