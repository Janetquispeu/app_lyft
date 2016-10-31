  
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
    zoom: 15,
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

  var dir = "";
  var latlng = new google.maps.LatLng(lat, lon);
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({"latLng": latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        dir = results[0].formatted_address;
      } else {
        dir = "No se ha podido obtener ninguna dirección en esas coordenadas.";
      }
    }
    $("#direccion").val(dir);
  });

$("#direccion").click(function(evento){
  $("#direccion").val("");
//   var dato=$("#direccion").val();

//   var watch_id = navigator.geolocation.watchPosition(function(objPosition)
//   {
//     // Procesar posición
//     var lon = objPosition.coords.longitude;
//     var lat = objPosition.coords.latitude;
//   }, function(objPositionError)
//   {
//     // Procesar errores
//   }, {
//     maximumAge: 75000,
//     timeout: 15000
//   });

//   document.getElementById.value("#direccion").onclick = function()
//   {
//     navigator.geolocation.clearWatch(watch_id);
//   };
// });
  
};

var funcionError = function (error) {
  console.log(error);
};

$(document).ready(cargarPagina);
  

