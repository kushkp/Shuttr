class Albuming < ActiveRecord::Base
  validates :album_id, :photo_id, presence: true

  belongs_to :albums
  belongs_to :photos
  belongs_to :user, through: :albums
end
