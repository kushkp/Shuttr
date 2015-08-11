# Phase 2: Viewing Album and Photo Indexes (~2 days)

## Rails
### Models

### Controllers
Api::AlbumsController (create, destroy, index, show)
Api::PhotosController (create, destroy, show)
PhotosController (create, new, destroy)

### Views
* albums/show.json.jbuilder
* albums/index.json.jbuilder
* photos.index.json.jbuilder

## Backbone
### Models
* Album (parses nested `photos` association)
* Photo

### Collections
* Albums
* Photos

### Views
* AlbumForm
* PhotosForm
* PhotosIndex (composite view, contains PhotosIndexItem subviews)
* PhotosIndexItem

## Gems/Libraries
