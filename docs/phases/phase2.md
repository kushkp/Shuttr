# Phase 2: Viewing Albums and Pictures

## Rails
### Models

### Controllers
Api::AlbumsController (create, destroy, index, show)
Api::PicturesController (create, destroy, show)

### Views
* albums/show.json.jbuilder

## Backbone
### Models
* Album (parses nested `pictures` association)
* Picture

### Collections
* Albums
* Pictures

### Views
* AlbumForm
* AlbumShow (composite view, contains PicturesIndex subview)
* PicturesIndex (composite view, contains PicturesIndexItem subviews)
* PicturesIndexItem
* PictureShow

## Gems/Libraries
