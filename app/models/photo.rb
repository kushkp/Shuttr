class Photo < ActiveRecord::Base
  belongs_to :album
  has_one :owners, through: :album, source: :owner

  validates :album, :title, :url, presence: true
end
