window.Shuttr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');



    var router = new Shuttr.Routers.Router({
      $rootEl: $(".main")
    });

    var nav = new Shuttr.Views.NavShow({
      router: router
    });

    $("#navbar").html(nav.render().$el);

    Backbone.history.start();
  }
};
