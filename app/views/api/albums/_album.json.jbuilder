json.(album, :id, :title, :url, :owner_id)

json.photos album.photos do |photo|
  json.partial! 'api/photos/photo', photo: photo
end
