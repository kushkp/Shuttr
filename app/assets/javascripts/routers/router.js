Shuttr.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl || $(".main");
    this.albums = options.albums || new Shuttr.Collections.Albums();
  },

  routes: {
    "" : "albumsIndex"
  },

  albumsIndex: function() {
    this.albums.fetch();
    var view = new Shuttr.Views.AlbumsIndex({ collection: this.albums });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
