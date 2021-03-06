Shuttr.Views.PhotoGutter = Backbone.CompositeView.extend ({
  template: JST['photo/gutter'],
  className: 'test-class',

    events: {
      // 'click .gutter-item-img' : 'launchPhotoShowModal'
    },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPhotoItem);
    this.listenTo(this.collection, "remove", this.removePhotoItem);
    this.collection.each(this.addPhotoItem.bind(this));
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this.callScroller();
    return this;
  },

  addPhotoItem: function(photo) {
    var photoItem = new Shuttr.Views.PhotoGutterItem({ model: photo });
    this.addSubview(".gutter-photo-index", photoItem);
  },

  removePhotoItem: function(photo) {
    this.removeModelSubview(".gutter-photo-index", photo);
  },


  launchPhotoShowModal: function(e) {
    var photoId = $(e.currentTarget).data("id");
    var photo = this.collection.getOrFetch(photoId);
    var modal = new Shuttr.Views.PhotoShow({ model: photo });
    $('body').append(modal.$el);
    modal.render();
  },

  callScroller: function() {
    (function($){
        $(window).load(function(){
            $(".gutter-photo-index").mThumbnailScroller({
               axis:"x", type:"hover-50", live: true,
               markup: {
                 buttonsHTML: {
                   up:"&uarr;", //HTML up-arrow code
                   down:"<img src='...' />", //a custom image
                   left:">", //plain text
                   right:"&rarr;" //HTML right-arrow code
                 } }
            });
        });
    })(jQuery);
  }
});
