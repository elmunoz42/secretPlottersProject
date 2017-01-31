////BE ////

function SecretPlot(plotName, latitude, longitude) {
  this.plotName = plotName;
  this.latitude = latitude;
  this.longitude = longitude;
}

var secretPlotFOD = new SecretPlot("Fruits of Diversity Community Orchard", 45.553110, -122.646701);
var secretPlotSCO = new SecretPlot("Sabin Community Orchard", 45.590604, -122.711207);
var locations = [
  {lat: secretPlotFOD.latitude, lng:secretPlotFOD.longitude},
  {lat: secretPlotSCO.latitude, lng:secretPlotSCO.longitude},
  {lat: -33.727111, lng: 150.371124},
  {lat: -33.848588, lng: 151.209834},
  {lat: -33.851702, lng: 151.216968},
  {lat: -34.671264, lng: 150.863657},
  {lat: -35.304724, lng: 148.662905},
  {lat: -36.817685, lng: 175.699196},
  {lat: -36.828611, lng: 175.790222},
  {lat: -37.750000, lng: 145.116667},
  {lat: -37.759859, lng: 145.128708},
  {lat: -37.765015, lng: 145.133858},
  {lat: -37.770104, lng: 145.143299},
  {lat: -37.773700, lng: 145.145187},
  {lat: -37.774785, lng: 145.137978},
  {lat: -37.819616, lng: 144.968119},
  {lat: -38.330766, lng: 144.695692},
  {lat: -39.927193, lng: 175.053218},
  {lat: -41.330162, lng: 174.865694},
  {lat: -42.734358, lng: 147.439506},
  {lat: -42.734358, lng: 147.501315},
  {lat: -42.735258, lng: 147.438000},
  {lat: -43.999792, lng: 170.463352}
]
/// UI Maps ////
      function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(45.590604, -122.711207),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

          // markers and info windows
          var mapFruitsOfDiversity = {
              position: new google.maps.LatLng(45.590604, -122.711207),
              map: map
          };

          var mapSabinCommunityOrchard = {
              position: new google.maps.LatLng(45.553110, -122.646701),
              map: map
          };

            var marker = new google.maps.Marker(mapFruitsOfDiversity);
            marker.setMap(map);
            var marker2 = new google.maps.Marker(mapSabinCommunityOrchard);
            marker.setMap(map);

            var infoWindowOptionsFOD = {
                content: 'Fruits of Diversity Community Orchard <br>Plot stats: <br>plot size: big <br>fruits: apples '
            };
            var infoWindowOptionsSCO = {
                content: 'Sabin Community Orchard <br>Plot stats: <br>plot size: big <br>fruits: apples '
            };

            var infoWindowFOD = new google.maps.InfoWindow(infoWindowOptionsFOD);
            google.maps.event.addListener(marker,'click',function(e){

              infoWindowFOD.open(map, marker);

            });
            var infoWindowSCO = new google.maps.InfoWindow(infoWindowOptionsSCO);
            google.maps.event.addListener(marker2,'click',function(e){

              infoWindowSCO.open(map, marker2);

            });

      }
      //init map
