Shuttr.Views.AlbumForm = Backbone.View.extend({
  template: JST["album/form"],

  events: {
    "submit form" : "submit"
  },

  render: function() {
    var content = this.template({album: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function(e) {
    e.preventDefault();
    var formdata = $(e.currentTarget).serializeJSON();

    this.model.save(formdata, {
      success: function() {
        this.collection.add(this.model);
        Backbone.history.navigate("albums/", { trigger: true});
      }.bind(this),
      error: function() {
        console.log("error");
      }
    });
  }
});
