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
    var photoItem = new Shuttr.Views.PhotoItem({ model: photo });
    this.addSubview(".photos", photoItem);
  },

  callMasonry: function() {
    var $container = this.$('.grid');
    $container.prepend($("<div class='grid-sizer'></div>"));
    $container.imagesLoaded(function() {
      $container.masonry({
        itemSelector: '.grid-item',
        columnWidth: 10,
        percentPosition: true,
        isResizable: true,
        isAnimated: !Modernizr.csstransitions
      });
    });
  },

  launchPhotoShowModal: function(e) {
    var photoId = $(e.target).data("id");
    var photo = this.collection.getOrFetch(photoId);
    var modal = new Shuttr.Views.PhotoShow({ model: photo });
    $('body').append(modal.$el);
    modal.render();
  }
});
