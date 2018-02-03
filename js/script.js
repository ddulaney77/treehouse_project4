$(document).ready(function() {

$("#lightbox").css("text-align", "center");

$(".search").on("keyup", function() {
  var input = $(this).val().toLowerCase();
  $(".example-light").each(function() {

if ( $(this).attr("data-title").toLowerCase().search(input)< 0){
  $(this).hide();
} else {
  $(this).show();
}
});
});
  });
