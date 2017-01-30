function initMap() {
  var fruitsOfDiversity = {lat: 45.590499, lng: -122.711121};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: fruitsOfDiversity
  });
  var marker = new google.maps.Marker({
    position: fruitsOfDiversity,
    map: map
  });
}
