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


    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 160
    });



  }
};
