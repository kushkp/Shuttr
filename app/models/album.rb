class Album < ActiveRecord::Base
  validates :title, :user_id, presence: true

  # has_many :pictures
end
