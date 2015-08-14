Shuttr.Views.CommentItem = Backbone.View.extend ({
  template: JST["comment/comment_item"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ comment: this.model });
    this.$el.html(content);
    return this;
  }
});
