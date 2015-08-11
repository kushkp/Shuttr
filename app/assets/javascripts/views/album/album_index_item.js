Shuttr.Views.AlbumIndexItem = Backbone.View.extend({
  template: JST["album/index_item"],
  model: Shuttr.Models.Album,
  tagName: "li",
  className: "album-index-item",

  render: function() {
    var content = this.template({ album: this.model });
    this.$el.html(content);
    return this;
  }
});
