Shuttr.Views.PhotoItem = Backbone.View.extend ({
  template: JST["photo/photo_item"],

  events: {
    "click .delete-photo" : "deletePhoto"
  },

  initialize: function(options) {
    this.inMyPhotos = options.inMyPhotos;
  },

  render: function() {
    var content = this.template({ photo: this.model, inMyPhotos: this.inMyPhotos });
    this.$el.html(content);
    return this;
  },

  deletePhoto: function(e) {
    e.preventDefault();
    this.model.destroy();
  }
});
