Shuttr.Views.PhotoGutterItem = Backbone.View.extend ({
  template: JST["photo/gutter_item"],
  className: 'gutter-item',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var sizedUrl = this.findNewUrl();
    var content = this.template({ photo: this.model, url: sizedUrl });
    this.$el.html(content);
    return this;
  },

  findNewUrl: function() {
    var height = 95;
    var newUrl = this.model.get("url");
    if (newUrl.match(/\S+dydhzgrty\/image\/upload\//) !== null) {
       newUrl = newUrl.match(/\S+dydhzgrty\/image\/upload\//) + "c_scale,h_" +
                 height + newUrl.match(/dydhzgrty\/image\/upload\/\S+/)[0].slice(22);
    }

    return newUrl;
  },
});
