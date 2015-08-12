Shuttr.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl || $(".main");
    this.albums = options.albums || new Shuttr.Collections.Albums();
    this.photos = options.photos || new Shuttr.Collections.Photos();
  },

  routes: {
    "" : "albumsIndex",
    "albums/new" : "albumNew",
    "albums/:id" : "albumShow",
    "photos/:id" : "photoShow"
  },

  albumsIndex: function() {
    this.albums.fetch();
    var view = new Shuttr.Views.AlbumsIndex({ collection: this.albums });
    this._swapView(view);
  },

  albumNew: function() {
    var album = new Shuttr.Models.Album();
    var view = new Shuttr.Views.AlbumForm({
      model: album,
      collection: this.albums
    });
    this._swapView(view);
  },

  albumShow: function(id) {
    var album = this.albums.getOrFetch(id);
    var view = new Shuttr.Views.AlbumShow({ model: album });
    this._swapView(view);
  },

  photoShow: function(id) {
    var photo = this.photos.getOrFetch(id);
    var view = new Shuttr.Views.PhotoShow({ model: photo });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
