json.(photo, :id, :title, :url, :long, :lat, :user_id, :description, :user_name)

json.comments photo.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
