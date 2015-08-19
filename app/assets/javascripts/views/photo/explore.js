Shuttr.Views.Explore = Backbone.CompositeView.extend ({
  template: JST["photo/explore"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.reloadMasonry);
    this.listenTo(this.collection, "add", this.addPhotoItem);
    this.collection.each(this.addPhotoItem.bind(this));
  },

  events: {
    'click .grid-item' : 'launchPhotoShowModal'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this.callMasonry();
    return this;
  },

  reloadMasonry: function (obj) {
    if (obj !== this.collection) { return; }
    this.$(".grid").masonry("destroy");
    this.callMasonry();
  },

  addPhotoItem: function(photo) {
    var photoItem = new Shuttr.Views.PhotoItem({ model: photo, inMyPhotos: false });
    this.addSubview(".photos", photoItem);
  },

  callMasonry: function() {
    var $container = this.$('.grid');

    $container.imagesLoaded(function() {
      $container.masonry({
        itemSelector: '.grid-item',
        columnWidth: 1
        // percentPosition: true,
        // isResizable: true,
        // isAnimated: !Modernizr.csstransitions
      });
    });
  },

  launchPhotoShowModal: function(e) {
    var photoId = $(e.currentTarget).find('img').data("id");
    var photo = this.collection.getOrFetch(photoId);
    var modal = new Shuttr.Views.PhotoShow({ model: photo, collection: this.collection });
    $('body').append(modal.$el);
    modal.render();
  },

  launchCarousel: function(e) {
    // this.collection.each(function(photo) {
    //   var content = $('<div><img src="' + photo.escape('url') + '" alt=""</div>');
    //   $('.single-image').append(content);
    // });
    var $container = this.$('.single-item');
    $container.imagesLoaded(function() {
      $('.single-item').slick({
        // $('.grid').slick({
        // setting-name: setting-value
      });
    });
  }

});
