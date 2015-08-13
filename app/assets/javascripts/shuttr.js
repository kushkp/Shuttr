window.Shuttr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new Shuttr.Routers.Router({
      $rootEl: $(".main")
    });
    Backbone.history.start();

  }
};
