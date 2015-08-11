Shuttr.Views.AlbumShow = Backbone.CompositeView.extend({
  template: JST["album/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ album: this.model });
    this.$el.html(content);
    // this.attachSubviews();
    return this;
  }
});
