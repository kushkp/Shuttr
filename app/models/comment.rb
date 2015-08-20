class Comment < ActiveRecord::Base
  validates :user_id, :photo_id, :body, presence: true

  belongs_to :user
  belongs_to :photo

  def author_name
    user.alias
  end
end
