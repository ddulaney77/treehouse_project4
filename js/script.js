$(document).ready(function() {
  $(".gallery").lightbox-plus-jquery ({
    delegate: 'a',
    type:'image',

    gallery: {
      enabled:true
    }
  })
})



$(".search").on("keyup", function() {
  const input =$(this).val().toLowerCase();
  $(".example-light").each(function() {

if ( $(this) ).attr("data-title").toLowerCase().search(new regExp(filter))< 0){
  $(this).hide();
} else {
  $(this).show();
}
});
});
