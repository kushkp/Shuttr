Shuttr.Views.Explore = Backbone.CompositeView.extend ({
  template: JST["photo/explore"],
  className: "explore-container",

  initialize: function () {
    this.rendered = false;
    this.listenTo(this.collection, "sync", this.reloadMasonry);
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
    this.listenForScroll();
    return this;
  },

  listenForScroll: function() {
    $(window).off("scroll");
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var view = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (view.collection.page_number < view.collection.total_pages) {
        view.collection.fetch({
          data: { page: view.collection.page_number + 1 },
          remove: false,
          success: function() {
            view.$('.grid').imagesLoaded(function() {
              view.reloadMasonry();
            });
          }
        });
      }
    }
  },

  reloadMasonry: function (obj) {
    $("body").addClass("loading");
    if (this.rendered) {
      // setTimeout(function() {
        this.$(".grid").masonry("reload");
        $("body").removeClass("loading");
      // }.bind(this), 50);
    }
  },

  addPhotoItem: function(photo) {
    var photoItem = new Shuttr.Views.PhotoItem({ model: photo, inMyPhotos: false });
    this.addSubview(".photos", photoItem, false);
  },

  callMasonry: function() {
    var view = this;
    var $container = this.$('.grid');

    $(document).ready(function() {
      $container.imagesLoaded(function() {
        setTimeout(function() {
          $container.masonry({
            itemSelector: '.grid-item',
            columnWidth: 1
          });
          $("body").removeClass("loading");
          this.rendered = true;
        }.bind(this), 3000);
      }.bind(this));
    }.bind(this));
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
