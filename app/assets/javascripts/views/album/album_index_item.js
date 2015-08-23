Shuttr.Views.AlbumIndexItem = Backbone.View.extend({
  template: JST["album/index_item"],
  className: "album-grid-item album-container",
  model: Shuttr.Models.Album,

  events: {
    "click .delete-album" : "deleteAlbum"
  },

  render: function() {
    var content = this.template({ album: this.model });
    this.$el.html(content);
    return this;
  },

  deleteAlbum: function(e) {
    e.preventDefault();
    
    bootbox.confirm(
      "Are you sure you want to delete this album?", function(result) {
        console.log(result);
        if (result === true) {
          this.model.destroy();
        }
      }.bind(this));
  }
});
