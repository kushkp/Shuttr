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
