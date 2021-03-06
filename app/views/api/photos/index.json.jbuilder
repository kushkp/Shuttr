json.models do
  json.array!(@photos) do |photo|
    json.partial! 'api/photos/photo', photo: photo
  end
end

if @photos.total_pages
  json.page_number params[:page] || 1
  json.total_pages @photos.total_pages
end
