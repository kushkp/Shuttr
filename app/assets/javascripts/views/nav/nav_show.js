Shuttr.Views.NavShow = Backbone.View.extend({
  template: JST['nav/navbar'],

  events: {
    "click .sign-out-link" : "signOut",
    "click .create-photo-btn" : "showNewPhotoForm",
    "keyup .search-input" : "keyBinds"
  },

  initialize: function (options) {
    this.router = options.router;
    this.$rootEl = options.$rootEl;
    this.photos = options.photos;
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

  keyBinds: function(event) {
    if ((event.keyCode === 13) ||
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        (event.keyCode >= 65 && event.keyCode <= 90)) {
          event.preventDefault();
          this.dynamicSearch();
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
    // var albums = new Shuttr.Collections.Albums();
    // albums.fetch();
    // var modal = new Shuttr.Views.PhotoNew({ model: photo, collection: albums });
    var modal = new Shuttr.Views.PhotoNew({ model: photo, collection: this.photos });
    this.$rootEl.append(modal.$el);
    modal.render();
  },

  // search: function(event) {
  //   event.preventDefault();
  //   var keyword = this.$el.find('.search-input').val();
  //
  //   var photos = new Shuttr.Collections.Photos();
  //   photos.fetch({
  //     data: { search_data: keyword }
  //   });
  //
  //   this.router.searchListings(photos);
  // },

  dynamicSearch: function() {
    var keyword = this.$el.find('.search-input').val().toLowerCase();
    var re = new RegExp(keyword);

    var searchResults = new Shuttr.Collections.Photos();
    this.photos.each(function(photo) {
      if (re.test(photo.get('title').toLowerCase()) ||
          re.test(photo.get('description').toLowerCase()) ||
          re.test(photo.get('user_name').toLowerCase())) {
            searchResults.add(photo);
          }
    });

    this.router.searchListings(searchResults);
  },

  restoreExplore: function() {
    this.photos.fetch();
    Backbone.history.navigate("#", {trigger: true});
    this.router.explore({ collection: this.photos });
  }

});
