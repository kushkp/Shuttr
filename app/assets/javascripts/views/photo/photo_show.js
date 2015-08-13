Shuttr.Views.PhotoShow = Backbone.CompositeView.extend ({
  template: JST["photo/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.addCommentsIndex();
  },

  render: function() {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    return this;
  },

  addCommentsIndex: function() {
    var commentsIndex = new Shuttr.Views.CommentsIndex({ collection: comments });
    this.addSubview(".comments", CommentsIndex);
  }
});
