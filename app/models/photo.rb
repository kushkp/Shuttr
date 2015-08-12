class Photo < ActiveRecord::Base
  validates :album_id, :title, :url, :owner_id, presence: true

  belongs_to :album
  has_one :owner, through: :album, source: :owner

end
