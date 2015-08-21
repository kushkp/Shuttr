window.Shuttr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');

    var $rootEl = $(".main");
    Shuttr.USER_ALBUMS = new Shuttr.Collections.Albums().fetch();
    var photos = new Shuttr.Collections.Photos().fetch();

    var router = new Shuttr.Routers.Router({
      $rootEl: $rootEl,
      photos: photos,
      albums: Shuttr.USER_ALBUMS
    });

    var nav = new Shuttr.Views.NavShow({
      router: router,
      $rootEl: $rootEl,
      photos: photos
    });

    $("#navbar").html(nav.render().$el);

    Backbone.history.start();
  }
};
