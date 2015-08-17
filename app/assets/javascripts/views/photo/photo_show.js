Shuttr.Views.PhotoShow = Backbone.CompositeView.extend ({
  template: JST["photo/show"],
  className: "photo-show-wrapper",

  initialize: function() {
    this.listenTo(this.model, "add sync", this.render);
    this.listenTo(this.model.comments(), "sync change add reset remove", this.render);
    this.addCommentsIndex();
    this.addNewCommentForm();
    $(document).on('keyup', this.handleKey.bind(this));
    // TODO: Get page to rerender when add comment
  },

  events: {
    'click .m-background' : 'clickAway',
    'click .close' : 'removeBtn',
    'click .post-comment-btn' : "render"
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
  },

  handleKey: function(event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  removeBtn: function(event) {
    event.preventDefault();
    this.remove();
  },

  clickAway: function(event) {
    this.remove();
  }
});
