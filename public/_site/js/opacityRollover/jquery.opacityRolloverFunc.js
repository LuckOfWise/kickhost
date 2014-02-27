(function($) {
$(function() {
 
  $('a img').opOver();
  $('#over2').wink();
  $('#over3').opOver(0.6,1.0);
  $('#over4').opOver(1.0,0.6,200,500);
  $('#over5').wink(200);
  $('#over6').wink('slow',0.2,1.0);
  $('#test1 .over ').opOver();
 
});
})(jQuery);