Shuttr.Views.PhotoShow = Backbone.CompositeView.extend ({
  template: JST["photo/show"],
  className: "photo-show-wrapper",

  initialize: function() {
    this.listenTo(this.model, "add sync", this.render);
    this.listenTo(this.model.comments(), "add reset", this.render);
    this.addCommentsIndex();
    this.addNewCommentForm();
    $(document).on('keyup', this.keyBinds.bind(this));
  },

  events: {
    'click .m-background' : 'clickAway',
    'click .close' : 'removeBtn',
    'click .post-comment-btn' : "render",
    'click div.photo-show-img' : "launchLargeModal",
    "click .add-to-album-background" : "clickAway"
  },

  render: function() {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    this.attachSubviews();
    this.$('textarea').focus();
    return this;
  },

  addCommentsIndex: function() {
    var commentsIndex = new Shuttr.Views.CommentsIndex({ collection: this.model.comments() });
    this.addSubview(".comment-index", commentsIndex);
  },

  addNewCommentForm: function() {
    var newComment = new Shuttr.Models.Comment({ photo_id: this.model.id });
    var newCommentForm = new Shuttr.Views.CommentForm({
      photo_id: this.model.id,
      model: newComment,
      collection: this.model.comments()
    });
    this.addSubview(".new-comment-form", newCommentForm);
  },

  keyBinds: function(event) {
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
  },

  launchLargeModal: function(e) {
    var modal = new Shuttr.Views.LargeModal({ model: this.model, collection: this.collection });
    $('body').append(modal.$el);
    modal.render();
    this.$el.css({ "-webkit-filter": "blur(3px)", "-moz-filter": "blur(3px)", "-o-filter": "blur(3px)", "-ms-filter": "blur(3px)", "filter": "blur(3px)" });
  }
});
