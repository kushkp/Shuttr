class Album < ActiveRecord::Base
  validates :title, :owner_id, presence: true

  # has_many :pictures
end
