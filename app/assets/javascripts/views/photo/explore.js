Shuttr.Views.Explore = Backbone.CompositeView.extend ({
  template: JST["photo/explore"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPhotoItem);
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

  callMasonry: function() {
    this.$('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200
    });
  //   var container = document.querySelector('.grid');
  //   var masonry = new Masonry(container, {
  //   columnWidth: 200,
  //   itemSelector: '.grid-item'
  // });
  }
});
