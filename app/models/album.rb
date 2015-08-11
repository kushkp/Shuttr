class Album < ActiveRecord::Base
  belongs_to(
    :owner,
    class_name: :user,
    primary_key: :id,
    foreign_key: :owner_id
  )

  has_many :photos

  validates :owner, :title, presence: true
end
