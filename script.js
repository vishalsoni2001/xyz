$(document).ready(function() {
  
    // variables 
    var toTop = $('.to-top');
    // logic
    toTop.on('click', function() {
      $('html, body').animate({
        scrollTop: $('html, body').offset().top,
      });
    });
  
  });