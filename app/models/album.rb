class Album < ActiveRecord::Base
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :albumings, dependent: :destroy
  has_many :photos, through: :albumings
  has_many :comments, through: :photos

end
