class Photo < ActiveRecord::Base
  validates :title, :url, :owner_id, presence: true

  has_many :comments
  belongs_to :album
  belongs_to(
    :owner,
    class_name: :User,
    foreign_key: :owner_id,
    primary_key: :id
  )

  def owner_name
    owner.name
  end
end
