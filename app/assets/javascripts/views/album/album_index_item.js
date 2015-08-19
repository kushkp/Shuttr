Shuttr.Views.AlbumIndexItem = Backbone.View.extend({
  template: JST["album/index_item"],
  className: "album-grid-item album-container",
  model: Shuttr.Models.Album,

  render: function() {
    var content = this.template({ album: this.model });
    this.$el.html(content);
    return this;
  }
});
