Shuttr.Views.PhotoShow = Backbone.CompositeView.extend ({
  template: JST["photo/show"],

  initialize: function() {
    this.listenTo(this.model, "add sync", this.render);
    this.listenTo(this.model.comments(), "sync add", this.render);
    this.addCommentsIndex();
    this.addNewCommentForm();
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
    var newComment = new Shuttr.Models.Comment();
    var newCommentForm = new Shuttr.Views.CommentsForm({
      model: newComment
    });
    this.addSubview(".new-comment-form", newCommentForm);
  }
});
