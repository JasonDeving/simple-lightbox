var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");
//  add an image to overlay append adds
$overlay.append($image);
//  add an caption to end
$overlay.append($caption);
//  Add overlay
$("body").append($overlay);


//  Caputre the click event on a link to an image
$("#imageGallery a").click(function(e){
  e.preventDefault();
  var href = $(this).attr("href");
  //  update overlay with the image linked in the link
  $image.attr("src", href);
  //  show the overlay
  $overlay.show();
  // Get childs alt atrribute to set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

// when overlay is clicked
$overlay.click(function(){
    // hide the overlay
  $overlay.hide();
});
  