////BE ////

function SecretPlot(plotName, latitude, longitude) {
  this.plotName = plotName;
  this.latitude = latitude;
  this.longitude = longitude;
}
var secretPlotGCO = new SecretPlot("Gabriel Community Orchard", 45.470266, -122.720072);
var secretPlotPCUCC = new SecretPlot("Parkrose Community United Church of Christ", 45.534277, -122.533966);
var secretPlotSCO = new SecretPlot("Sabin Community Orchard", 45.553035, -122.647525);
var secretPlotGTCO = new SecretPlot("Green Thumb Community Orchard",45.562162, -122.644807);
var secretPlotFOD = new SecretPlot("Fruits of Diversity Community Orchard", 45.590446, -122.711207);

var secretPlots= [secretPlotPCUCC, secretPlotGCO, secretPlotGTCO, secretPlotSCO, secretPlotFOD ];

/// sorts secretPlots Array by latitude to match labels.
secretPlots.sort(function(a, b){
    return a.latitude-b.latitude;
});

// console.log(secretPlots[0].plotName);
// console.log(secretPlots[1].plotName);
// console.log(secretPlots[2].plotName);
// console.log(secretPlots[3].plotName);
// console.log(secretPlots[4].plotName);

var locationNumber = 4;  /// later we can set this with locations.length
var locations = [
  {lat: secretPlots[4].latitude, lng:secretPlots[4].longitude},
  {lat: secretPlots[3].latitude, lng:secretPlots[3].longitude},
  {lat: secretPlots[2].latitude, lng:secretPlots[2].longitude},
  {lat: secretPlots[1].latitude, lng:secretPlots[1].longitude},
  {lat: secretPlots[0].latitude, lng:secretPlots[0].longitude},
  // {lat: secretPlots[locationNumber].latitude, lng:secretPlots[locationNumber].longitude},
  // {lat: secretPlots[locationNumber - 1].latitude, lng:secretPlots[locationNumber -1].longitude},
  // {lat: secretPlots[locationNumber-2].latitude, lng:secretPlots[locationNumber -2].longitude},
  // {lat: secretPlots[locationNumber -3].latitude, lng:secretPlots[locationNumber -3].longitude},
  // {lat: secretPlots[locationNumber -4].latitude, lng:secretPlots[locationNumber -4].longitude},
  // {lat: secretPlotGTCO.latitude, lng:secretPlotGTCO.longitude},
  // {lat: secretPlotSCO.latitude, lng:secretPlotSCO.longitude},
  // {lat: secretPlotPCUCC.latitude, lng:secretPlotPCUCC.longitude},
  // {lat: secretPlotGCO.latitude, lng: secretPlotGCO.longitude},
]

/// UI Maps ////
      function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(45.590604, -122.711207),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = [secretPlotFOD.plotName, secretPlotGTCO.plotName, secretPlotSCO.plotName,  secretPlotPCUCC.plotName, secretPlotGCO.plotName];
        // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
              position: new google.maps.LatLng(secretPlotFOD.latitude, secretPlotFOD.longitude),
              map: map
          };

          var mapSabinCommunityOrchard = {
              position: new google.maps.LatLng(secretPlotSCO.latitude, secretPlotSCO.longitude),
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
