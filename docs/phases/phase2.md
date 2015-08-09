# Phase 2: Viewing Album and Picture Indexes (~2 days)

## Rails
### Models

### Controllers
Api::AlbumsController (create, destroy, index, show)
Api::PicturesController (create, destroy, show)
PicturesController (create, new, destroy)

### Views
* albums/show.json.jbuilder
* albums/index.json.jbuilder
* pictures.index.json.jbuilder

## Backbone
### Models
* Album (parses nested `pictures` association)
* Picture

### Collections
* Albums
* Pictures

### Views
* AlbumForm
* PicturesForm
* PicturesIndex (composite view, contains PicturesIndexItem subviews)
* PicturesIndexItem

## Gems/Libraries
