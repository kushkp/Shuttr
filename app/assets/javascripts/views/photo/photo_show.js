Shuttr.Views.PhotoShow = Backbone.CompositeView.extend ({
  template: JST["photo/show"],

  initialize: function() {
    this.listenTo(this.model, "add sync", this.render);
    this.listenTo(this.model.comments(), "sync change add reset remove", this.render);
    this.addCommentsIndex();
    this.addNewCommentForm();
    // TODO: Get page to rerender when add comment
  },

  render: function() {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addCommentsIndex: function() {
    var commentsIndex = new Shuttr.Views.CommentsIndex({ collection: this.model.comments() });
    this.addSubview(".comment-index", commentsIndex);
  },

  addNewCommentForm: function() {
    var newComment = new Shuttr.Models.Comment({ photo_id: this.model.id });
    var newCommentForm = new Shuttr.Views.CommentForm({
      model: newComment
    });
    this.addSubview(".new-comment-form", newCommentForm);
  }
});
