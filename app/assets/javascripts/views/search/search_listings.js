Shuttr.Views.SearchListings = Backbone.CompositeView.extend ({
  template: JST["search/search_listings"],
  className: "search-listings-container",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
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
    this.$(".grid").masonry("reload");
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
      });
    });
  },

  launchPhotoShowModal: function(e) {
    var photoId = $(e.currentTarget).find('img').data("id");
    var photo = this.collection.getOrFetch(photoId);
    var modal = new Shuttr.Views.PhotoShow({ model: photo, collection: this.collection });
    $('body').append(modal.$el);
    modal.render();
  }
});
