Shuttr.Views.NavShow = Backbone.View.extend({
  template: JST['nav/navbar'],

  events: {
    "click .sign-out-link" : "signOut"
  },

  initialize: function (options) {
    this.router = options.router;
    this.listenTo(this.router, "route", this.handleRoute);
  },

  handleRoute: function(routeName, params) {
    this.$el.find(".active").removeClass("active");
    this.$el.find("." + routeName).addClass("active");
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  signOut: function(e) {
    e.preventDefault(); //Unnecessary?
  }

});
