window.Shuttr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');

    var $rootEl = $(".main");

    var router = new Shuttr.Routers.Router({
      $rootEl: $rootEl
    });

    var nav = new Shuttr.Views.NavShow({
      router: router,
      $rootEl: $rootEl
    });

    $("#navbar").html(nav.render().$el);

    Backbone.history.start();
  }
};
