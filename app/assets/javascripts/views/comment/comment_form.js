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

  createComment: function(e) {
    e.preventDefault();

    this.model.save({
      body: this.$('textarea').val()
    }, { wait: true });

    this.$('textarea').val('');
  }
});
