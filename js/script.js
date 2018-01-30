

//filter


$(."search").on("keyup", function () {
  var filter =$(this).val().toLowerCase();


  $(."example-light").each( function () {

if ( $(this) ).attr('title').toLowerCase().search( new RegExp(filter))<0
  $(this).fadeOut();
} else {
  $(this).show();
}
});

});
