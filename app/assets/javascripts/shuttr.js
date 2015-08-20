window.Shuttr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');

    var $rootEl = $(".main");
    var photos = new Shuttr.Collections.Photos();

    var router = new Shuttr.Routers.Router({
      $rootEl: $rootEl,
      photos: photos
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
