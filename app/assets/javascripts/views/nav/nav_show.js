Shuttr.Views.NavShow = Backbone.View.extend({
  template: JST['nav/navbar'],

  events: {
    "click .sign-out-link" : "signOut",
    "click .create-photo-btn" : "showNewPhotoForm",
    'click .search-submit' : 'search'
  },

  initialize: function (options) {
    this.router = options.router;
    this.$rootEl = options.$rootEl;
    this.photos = options.photos;
    this.listenTo(this.router, "route", this.handleRoute);
    $(document).on('keyup', this.keyBinds.bind(this));
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

  keyBinds: function(event) {
    if ((event.keyCode === 13) ||
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        (event.keyCode >= 65 && event.keyCode <= 90)) {
          this.search();
        }

    if (event.keyCode === 8 && this.$el.find('.search-input').val() === '') {
      this.restoreExplore();
    }
  },

  signOut: function(event) {
    event.preventDefault(); //Unnecessary?

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
  },

  search: function(event) {
    // event.preventDefault();
    var keyword = this.$el.find('.search-input').val();

    var photos = new Shuttr.Collections.Photos();
    photos.fetch({
      data: { search_data: keyword }
    });

    this.router.searchListings(photos);
  },

  // dynamicSearch: function(event) {
  //   // event.preventDefault();
  //   var keyword = this.$el.find('.search-input').val();
  //
  //
  //
  //
  //
  //   this.router.searchListings(photos);
  // },

  restoreExplore: function() {
    this.photos.fetch();
    this.router.explore({ collection: photos });
  }

});
