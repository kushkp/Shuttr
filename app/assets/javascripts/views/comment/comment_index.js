Shuttr.Views.CommentsIndex = Backbone.CompositeView.extend ({
  template: JST["comment/index"],
  className: "",

  initialize: function () {
    this.listenTo(this.collection, "sync add", this.render);
    this.listenTo(this.collection, "add", this.addCommentItem);
    this.listenTo(this.collection, "remove", this.removeCommentItem);
    this.collection.each(this.addCommentItem.bind(this));
  },

  render: function() {
    var content = this.template({ comments: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addCommentItem: function(comment) {
    var commentItem = new Shuttr.Views.CommentItem({ model: comment });
    this.addSubview(".comments", commentItem);
  },

  removeCommentItem: function(comment) {
    this.removeModelSubview(".comments", comment);
  }

});
