window.Shuttr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    // new Shuttr.Routers.Router({});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Shuttr.initialize();
});