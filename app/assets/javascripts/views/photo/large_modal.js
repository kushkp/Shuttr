Shuttr.Views.LargeModal = Backbone.View.extend({
  template: JST['photo/large_modal'],
  className: 'gallery-modal',

  initialize: function () {
    $('body').keydown(this.keyBinds.bind(this));
    this.rendering = false;
  },

  events: {
    'click .next-image': 'displayNextImage',
    'click .prev-image': 'displayPreviousImage',
    'click .close-gallery-modal': 'hideModal'
  },

  keyBinds: function (e) {
    if (e.keyCode === 27) {
      this.hideModal();
    }

    if (e.keyCode === 39) {
        this.displayNextImage();
    } else if (e.keyCode === 37) {
      this.displayPreviousImage();
    }
  },

  hideModal: function (event) {
    $('.photo-show-wrapper').css({ "-webkit-filter": "blur(0px)", "-moz-filter": "blur(0px)", "-o-filter": "blur(0px)", "-ms-filter": "blur(0px)", "filter": "blur(0px)" });
    this.remove();
  },

  displayNextImage: function (event) {
    if (!this.rendering) {
      this.rendering = true;
      this.displayImage(1);
    }
  },

  displayPreviousImage: function (event) {
    if (!this.rendering) {
      this.rendering = true;
      this.displayImage(-1);
    }
  },

  displayImage: function (difference) {
    // if (!this.rendering) {
    //
    // }

    this.rendering = true;
    var currentImage = this.model;
    var nextImage = this.model;
    this.collection.forEach(function(photo, idx, allPhotos) {
      if (currentImage === photo) {
        var newIndex = idx + difference;

        if (newIndex > allPhotos.length - 1) {
          newIndex = 0;
        } else if (newIndex < 0) {
          newIndex = allPhotos.length - 1;
        }
        nextImage = allPhotos[newIndex];
        return;
      }
    });

    this.model = nextImage;
    this.render();
  },

  galleryImagePositioning: function () {
    var windowHeight = $(window).height();
    var imageHeight = windowHeight - 100;

    var windowWidth = $(window).width();
    var maxImageWidth = windowWidth - 100;

    //maximixes image size to window
    // this.$el.find('.active-image img').css('height', imageHeight);
    // this.$el.find('.active-image img').css('max-width', maxImageWidth);

  },

  render: function () {
    var content = this.template({
      photo: this.model
    });
    this.$el.html(content);

    this.galleryImagePositioning();

    $(window).resize(function () {
      this.galleryImagePositioning();
    }.bind(this));

    this.rendering = false;
    return this;
  }
});
