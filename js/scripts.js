//business logic



// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".find-plot-div").show();

  });
  // go submit

  // var mapOptions = {
  //     center: new google.maps.LatLng(37.7831,-122.4039),
  //     zoom: 12,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  // };
  //
  // new google.maps.Map(document.getElementById('map'), mapOptions);

  $("#fruits-of-diversity").click(function(event){
    $(".find-plot-div").hide();
    $(".plot-site").show();
  });
  // click on map location



});
