json.(album, :id, :title, :url, :user_id)

json.photos album.photos do |photo|
  json.partial! 'api/photos/photo', photo: photo
end
