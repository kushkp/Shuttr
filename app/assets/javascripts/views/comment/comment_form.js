Shuttr.Views.CommentForm = Backbone.View.extend ({
  template: JST["comment/form"],

  events: {
    "submit .new-comment-form" : "createComment"
  },

  render: function() {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    return this;
  },

  createComment: function() {

  }
});
