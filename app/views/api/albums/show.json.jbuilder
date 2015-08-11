json.(@album, :id, :title, :owner_id, :url)

json.photos @album.photos do |photo|
  json.partial! 'api/photos/photo', photo: photo
end
