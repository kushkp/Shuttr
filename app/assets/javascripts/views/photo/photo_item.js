Shuttr.Views.PhotoItem = Backbone.View.extend ({
  template: JST["photo/photo_item"],

  events: {
    "click .delete-photo" : "deletePhoto"
  },

  initialize: function(options) {
    this.inExplore = options.inExplore;
    // this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ photo: this.model, inExplore: this.inExplore });
    this.$el.html(content);
    return this;
  },

  deletePhoto: function(e) {
    e.preventDefault();
    this.model.destroy();
  }
});
