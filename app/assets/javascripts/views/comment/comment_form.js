Shuttr.Views.CommentForm = Backbone.View.extend ({
  template: JST["comment/form"],

  initialize: function() {
    $(document).on('keyup', this.handleKey.bind(this));
  },

  events: {
    "submit .new-comment-form" : "postComment"
  },

  render: function() {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    return this;
  },

  postComment: function(e) {
    e.preventDefault();
    this.saveComment();
  },

  handleKey: function(event) {
    if (event.keyCode === 13) {
      this.saveComment();
    }
  },

  saveComment: function() {
    var formdata = { body: this.$('textarea').val() };

    this.model.save(formdata, {
      success: function() {
        this.collection.add(this.model);
      }.bind(this),
      error: function() {
        console.log("save comment error");
      }
    });

    this.$('textarea').val('');
  }
});
