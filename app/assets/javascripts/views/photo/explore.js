Shuttr.Views.Explore = Backbone.CompositeView.extend ({
  template: JST["photo/explore"],
  className: "explore-container",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPhotoItem);
    this.collection.each(this.addPhotoItem.bind(this));
  },

  events: {
    'click .grid-item' : 'launchPhotoShowModal'
  },

  render: function() {
    $("body").addClass("loading");
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
    this.addSubview(".photos", photoItem, true);
  },

  callMasonry: function() {
    var $container = this.$('.grid');


    $(document).ready(function() {
      $container.imagesLoaded(function() {
        $container.masonry({
          itemSelector: '.grid-item',
          columnWidth: 1
        });
        $("body").removeClass("loading");
      });
    });
  },

  launchPhotoShowModal: function(e) {
    if (e.target.tagName === "BUTTON") { return; }
    var photoId = $(e.currentTarget).find('img').data("id");
    var photo = this.collection.getOrFetch(photoId);
    var modal = new Shuttr.Views.PhotoShow({ model: photo, collection: this.collection });
    $('body').append(modal.$el);
    modal.render();
  }
});
