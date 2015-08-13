Shuttr.Views.PhotoIndex = Backbone.CompositeView.extend ({
  template: JST["photo/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPhotoItem);
    this.collection.each(this.addPhotoItem.bind(this));
  },

  render: function() {
    var content = this.template({ photos: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPhotoItem: function(photo) {
    var photoItem = new Shuttr.Views.PhotoItem({ model: photo });
    this.addSubview(".photos", photoItem);
  },

  callSalvatorre: function(photo) {
    var grid = document.querySelector('#grid');
    var item = document.createElement('article');

    salvattore.appendElements(grid, [item]);
    item.outerHTML = 'I’ve been appended!';
  },

  callMasonry: function() {
    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });
  }
});
