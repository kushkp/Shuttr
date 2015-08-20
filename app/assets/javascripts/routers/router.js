Shuttr.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl || $(".main");
    this.albums = options.albums || new Shuttr.Collections.Albums();
    this.photos = options.photos || new Shuttr.Collections.Photos();
  },

  routes: {
    "" : "explore",
    "albums" : "albumsIndex",
    "albums/new" : "albumNew",
    "albums/:id" : "albumShow",
    "photos" : "photoIndex",
    "map" : "mapView"
  },

  explore: function() {
    this.photos.fetch();
    var view = new Shuttr.Views.Explore({ collection: this.photos });
    this._swapView(view);
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

  photoIndex: function() {
    this.photos.fetch({data: { owner_id: Shuttr.CURRENT_USER.id }, processData: true });
    var view = new Shuttr.Views.PhotoIndex({ collection: this.photos });
    this._swapView(view);
  },

  mapView: function() {
    this.photos.fetch();
    var view = new Shuttr.Views.MapContainer({ collection: this.photos });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  },

  searchListings: function(results) {
    var view = new Shuttr.Views.SearchListings({ collection: results });
    this._swapView(view);
  }
});
