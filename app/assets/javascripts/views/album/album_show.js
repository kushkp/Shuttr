Shuttr.Views.AlbumShow = Backbone.CompositeView.extend({
  template: JST["album/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.photos(), "add", this.addPhoto);
    this.model.photos().each(this.addPhoto.bind(this));
  },

  render: function() {
    var content = this.template({ album: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPhoto: function(photo) {
    var photoItem = new Shuttr.Views.PhotoItem({ model: photo });
    this.addSubview(".photos", photoItem);
  }

});
