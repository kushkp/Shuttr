Shuttr.Views.AlbumShow = Backbone.CompositeView.extend({
  template: JST["album/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.photos(), "sync", this.render);
    this.listenTo(this.model.photos(), "sync", this.addPhotos);
    this.listenTo(this.model.photos(), "add", this.addPhoto);
    this.listenTo(this.model.photos(), "remove", this.removePhoto);
    this.model.photos().each(this.addPhoto.bind(this));
  },

  events: {
    'click .grid-item' : 'launchPhotoShowModal'
  },

  render: function() {
    $("body").addClass("loading");
    var content = this.template({ album: this.model });
    this.$el.html(content);
    this.attachSubviews();
    this.callMasonry();
    return this;
  },

  addPhotos: function(photos) {
  },

  addPhoto: function(photo) {
    var photoItem = new Shuttr.Views.PhotoItem({ model: photo, inMyPhotos: true });
    this.addSubview(".photos", photoItem);
  },

  removePhotoItem: function(photo) {
    this.removeModelSubview(".photos", photo);
    this.reloadMasonry();
  },

  reloadMasonry: function (obj) {
    $('.grid').imagesLoaded(function() {
      this.$(".grid").masonry("reload");
    });
  },

  callMasonry: function() {
    var $container = this.$('.grid');

    $container.imagesLoaded(function() {
      $container.masonry({
        itemSelector: '.grid-item',
        columnWidth: 1
      });
      $("body").removeClass("loading");
    });
  },

  launchPhotoShowModal: function(e) {
    var photoId = $(e.currentTarget).find('img').data("id");
    var photos = new Shuttr.Collections.Photos();
    var photo = photos.getOrFetch(photoId);
    var modal = new Shuttr.Views.PhotoShow({ model: photo });
    $('body').append(modal.$el);
    modal.render();
  }
});
