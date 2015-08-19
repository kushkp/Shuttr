Shuttr.Views.AlbumForm = Backbone.View.extend({
  template: JST["album/form"],
  className: "new-album-form-wrapper",

  events: {
    "click create-album-btn" : "saveAlbum"
  },

  render: function() {
    var content = this.template({album: this.model});
    this.$el.html(content);
    this.$("input.album-title").focus();
    return this;
  },

  saveAlbum: function(e) {
    e.preventDefault();
    var formdata = $(e.delegateTarget).serializeJSON();
    var view = this;
    this.model.save(formdata, {
      success: function() {
        this.collection.add(this.model);
        view.remove();
      }.bind(this),
      error: function() {
        console.log("save album error");
      }
    });
  }
});
