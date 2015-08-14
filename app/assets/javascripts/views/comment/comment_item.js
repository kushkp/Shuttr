Shuttr.Views.CommentItem = Backbone.View.extend ({
  template: JST["comment/comment_item"],

  events: {
    "click .delete-comment" : "deleteComment"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ comment: this.model });
    this.$el.html(content);
    return this;
  },

  deleteComment: function(e) {
    e.preventDefault();
    this.model.destroy();
  }
});
