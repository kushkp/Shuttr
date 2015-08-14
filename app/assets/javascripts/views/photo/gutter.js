Shuttr.Views.PhotoGutter = Backbone.CompositeView.extend ({
  template: JST['photo/gutter'],

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPhotoItem);
    this.listenTo(this.collection, "remove", this.removePhotoItem);
    this.collection.each(this.addPhotoItem.bind(this));
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPhotoItem: function(photo) {
    var photoItem = new Shuttr.Views.PhotoItem({ model: photo });
    this.addSubview(".gutter-photo-index", photoItem);
  },

  removePhotoItem: function(photo) {
    this.removeModelSubview(".gutter-photo-index", photo);
  }
});
