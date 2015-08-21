Shuttr.Views.PhotoItem = Backbone.View.extend ({
  template: JST["photo/photo_item"],

  events: {
    "click .delete-photo" : "deletePhoto",
    "click .add-to-album" : "addToAlbum"
  },

  initialize: function(options) {
    this.inMyPhotos = options.inMyPhotos;
  },

  render: function() {
    var sizedUrl = this.findNewUrl();
    var content = this.template({ photo: this.model, inMyPhotos: this.inMyPhotos, url: sizedUrl });
    this.$el.html(content);
    return this;
  },

  calculateWidth: function() {
    var windowWidth = $(window).width();
    return (windowWidth - 30 - 30) / 3;
  },

  findNewUrl: function() {
    var width = Math.round(this.calculateWidth());
    var newUrl = this.model.get("url");
    if (newUrl.match(/\S+dydhzgrty\/image\/upload\//) !== null) {
       newUrl = newUrl.match(/\S+dydhzgrty\/image\/upload\//) + "c_scale,w_" +
                 width + newUrl.match(/dydhzgrty\/image\/upload\/\S+/)[0].slice(22);
    }

    return newUrl;
  },

  deletePhoto: function(e) {
    e.preventDefault();
    this.model.destroy();
  },

  addToAlbum: function(e) {
    e.preventDefault();
    var modal = new Shuttr.Views.AddToAlbum({
      model: this.model,
      albums: Shuttr.USER_ALBUMS
    });
    $('body').append(modal.$el);
    modal.render();
  }
});
