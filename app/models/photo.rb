class Photo < ActiveRecord::Base
  validates :title, :url, :user_id, presence: true

  belongs_to :user
  has_many :comments
  has_many :albumings
  has_many :albums, through: :albumings

  def user_name
    user.name
  end
end
