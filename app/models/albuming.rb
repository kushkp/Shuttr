class Albuming < ActiveRecord::Base
  validates :album_id, :photo_id

  belongs_to :albums
  belongs_to :photos

end
