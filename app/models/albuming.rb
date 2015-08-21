class Albuming < ActiveRecord::Base
  validates :album_id, :photo_id, presence: true

  belongs_to :album
  belongs_to :photo
  has_one :user, through: :album
end
