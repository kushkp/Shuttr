Shuttr.Views.PhotoIndex = Backbone.CompositeView.extend ({
  template: JST["photo/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPhotoItem);
    this.listenTo(this.collection, "remove", this.removePhotoItem);
    this.collection.each(this.addPhotoItem.bind(this));
  },

  render: function() {
    var content = this.template({ photos: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    this.callMasonry();
    return this;
  },

  addPhotoItem: function(photo) {
    var photoItem = new Shuttr.Views.PhotoItem({ model: photo });
    this.addSubview(".photos", photoItem);
  },

  removePhotoItem: function(photo) {
    this.removeModelSubview(".photos", photo);
  },

  // callMasonry: function() {
  //   // $('.grid').append("div").addClass("grid-sizer");
  //   var $grid = $('.grid').masonry({
  //     itemSelector: '.grid-item',
  //     percentPosition: true,
  //     columnWidth: '.grid-sizer'
  //   });
  //   $grid.imagesLoaded().progress( function() {
  //       $grid.masonry();
  //   });
  // }

  callMasonry: function() {
    var $container = $('.grid');

    $container.imagesLoaded( function() {
      $container.masonry({
        itemSelector: '.grid-item',
        columnWidth: 10,
        isResizable: true,
        isAnimated: !Modernizr.csstransitions,
      });
    });
  }
  //
  // callSalvatorre: function(photo) {
  //   var grid = document.querySelector('#grid');
  //   var item = document.createElement('article');
  //
  //   salvattore.appendElements(grid, [item]);
  //   item.outerHTML = 'I’ve been appended!';
  // }
});
