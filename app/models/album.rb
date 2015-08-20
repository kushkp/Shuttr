class Album < ActiveRecord::Base
  validates :title, :user_id, presence: true

  belongs_to :user

  has_many :photos
  has_many :comments, through: :photos, source: :comments
  has_many :albumings, dependent: :destroy

end
