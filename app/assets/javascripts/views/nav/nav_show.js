Shuttr.Views.NavShow = Backbone.View.extend({
  template: JST['nav/navbar'],

  events: {
    "click .sign-out-link" : "signOut",
    "click .create-photo-btn" : "showNewPhotoForm"
  },

  initialize: function (options) {
    this.router = options.router;
    this.$rootEl = options.$rootEl;
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

    $.ajax({
      url: "session",
      type: 'DELETE',
      success: function() {
        console.log("Logged Out");
        window.location.href = "users/new";
      },
      error: function () {
        console.log("signOut error");
      }
    });
  },

  showNewPhotoForm: function() {
    var photo = new Shuttr.Models.Photo();
    var albums = new Shuttr.Collections.Albums();
    albums.fetch();
    var modal = new Shuttr.Views.PhotoNew({ model: photo, collection: albums });
    this.$rootEl.append(modal.$el);
    modal.render();
  }

});
