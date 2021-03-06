Shuttr.Models.Photo = Backbone.Model.extend ({
  urlRoot: "/api/photos",

  comments: function() {
    if (!this._comments) {
      this._comments = new Shuttr.Collections.Comments([], { photo: this });
    }

    return this._comments;
  },

  parse: function(response) {
    if (response.comments) {
      this.comments().set(response.comments, {  parse: true });
      delete response.comments;
    }

    return response;
  },

  search: function(opts) {
    var model = this,
        url = model.url() + '/search',
    options = {
      url: url,
      type: 'GET'
    };

    _.extend(options, opts);

    return (this.sync || Backbone.sync).call(this, null, this, options);
  }
});
