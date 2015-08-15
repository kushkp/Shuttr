Shuttr.Views.PhotoGutterItem = Backbone.View.extend ({
  template: JST["photo/gutter_item"],
  className: 'gutter-item',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    return this;
  }
});