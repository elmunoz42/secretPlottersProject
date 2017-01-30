//business logic

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".find-plot-div").show();

  });
  // go submit
  $("#fruits-of-diversity").click(function(event){
    $(".find-plot-div").hide();
    $(".plot-site").show();
  });
});
