Shuttr.Views.CommentsIndex = Backbone.CompositeView.extend ({
  template: JST["comments/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addCommentItem);
    this.collection.each(this.addCommentItem.bind(this));
  },

  render: function() {
    var content = this.template({ comments: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addCommentItem: function() {
    var commentItem = new Shuttr.Views.CommentItem({ model: comment });
    this.addSubview(".comments", commentItem);
  }

});
