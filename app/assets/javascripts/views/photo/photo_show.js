Shuttr.Views.PhotoShow = Backbone.CompositeView.extend ({
  template: JST["photo/show"],
  className: "photo-show-wrapper",

  initialize: function() {
    this.listenTo(this.model, "add sync", this.render);

    // remove sync change reset from model comments listenTo
    this.listenTo(this.model.comments(), "add reset", this.render);
    this.addCommentsIndex();
    this.addNewCommentForm();
    $(document).on('keyup', this.handleKey.bind(this));
  },

  events: {
    'click .m-background' : 'clickAway',
    'click .close' : 'removeBtn',
    'click .post-comment-btn' : "render",
    'click div.photo-show-img' : "launchLargeModal"
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
  },

  launchLargeModal: function(e) {
    // var photoId = $(e.currentTarget).find('img').data("id");
    // var photo = this.collection.getOrFetch(photoId);
    var modal = new Shuttr.Views.LargeModal({ model: this.model, collection: this.collection });
    $('body').append(modal.$el);
    modal.render();
    //
    // var $container = this.$('.single-item');
    // $container.imagesLoaded(function() {
    //   $('.single-item').slick({
    //     // $('.grid').slick
    //     // setting-name: setting-value
    //   });
    // });
  }
});
