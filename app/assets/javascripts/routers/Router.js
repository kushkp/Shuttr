Shuttr.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl || $(".main");
    this.albums = options.albums;//|| new Shuttr.Collections.Albums();
  },

  routes: {
    "" : "index"
  },

  index: function() {
    // this.albums.fetch();
    // var view = new Shuttr.Views.AlbumsIndex({ collection: this.albums });
    // this.swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
