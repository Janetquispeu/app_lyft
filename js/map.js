  
  var cargarPagina = function() {
  if (navigator.geolocation) { 
    // también se puede usar if ("geolocation" in navigator) {}
    navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  }

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  $('.button-collapse').sideNav({
      menuWidth: 500, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
};

var funcionExito = function(posicion) {
  var lat = posicion.coords.latitude;
  var lon = posicion.coords.longitude;
  var map=  new GMaps({
    div: '#map',
    zoom: 16,
    lat: lat,
    lng: lon,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false
  });
  map.addMarker({
    lat: lat,
    lng: lon,
    title: 'Lima',
    click: function(e) {
      alert('You clicked in this marker');
    }
  });
};

var funcionError = function (error) {
  console.log(error);
};

$(document).ready(cargarPagina);
  

