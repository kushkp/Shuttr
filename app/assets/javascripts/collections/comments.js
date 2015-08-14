Shuttr.Collections.Comments = Backbone.Collection.extend ({
  url: '/api/comments',
  model: Shuttr.Models.Comment,

  initialize: function(model, options) {
    this.photo = options.photo;
  }
});
