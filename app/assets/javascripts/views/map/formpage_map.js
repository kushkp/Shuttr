Shuttr.Views.FormPageMap = Backbone.View.extend ({

  attributes: {
    id: "formpage-map-canvas"
  },

  render: function() {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 12
    };

    this._map = new google.maps.Map(this.el, mapOptions);
  }

});
