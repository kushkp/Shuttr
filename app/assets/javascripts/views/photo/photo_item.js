Shuttr.Views.PhotoItem = Backbone.View.extend ({
  template: JST["photo/photo_item"],

  events: {
    "click .delete-photo" : "deletePhoto"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    return this;
  },

  deletePhoto: function(e) {
    e.preventDefault();
    this.model.destroy();
  }
});
