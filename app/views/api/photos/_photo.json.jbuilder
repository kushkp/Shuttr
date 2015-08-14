json.(photo, :id, :title, :url, :album_id, :long, :lat)

json.comments photo.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
