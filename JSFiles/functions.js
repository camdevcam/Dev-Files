(function($){ 

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".headbannr0, .headbannr, .headbannr1, .headbannr2,.headbannr3, .headbannr4, .headbannr5").addClass("bgposi");

  } else if (scroll <= 50) {
    $(".headbannr0, .headbannr, .headbannr1, .headbannr2,.headbannr3, .headbannr4, .headbannr5").removeClass("bgposi");

  }
});

})(jQuery);

$(document).ready(function() {


// function animateFade(elm, timers, cb) {
//      var index = 0;
//      var animateFn = function() {
//        if(timers.length > index) {
//           var timer = timers[index++];
//           elm.delay(timer[0]).fadeIn(timer[1], animateFn);
//        } else if(cb && typeof cb === 'function') {
//           cb();
//        }
//      };

//      animateFn();
//   }
    $(".mobi_horiz br").remove();

    if ($(window).width() > 770) {
        $('#secondary').removeClass('mobilenav');
        $('#secondary').show();
    }
    document.querySelector(".cd-primary-nav-trigger")
        .addEventListener("click", function () {
        document.querySelector(".cd-menu-icon").classList.toggle("is-clicked");
    });

  $('.nav-toggle').click(function() {
    $('#secondary').toggle('slow', function() {
      // Animation complete.
          $('#secondary').addClass('mobilenav');
          $('#content.site-content').toggleClass('margin')
          $('#logo').hide();
    });
  });

  // $('.learnwhat').delay(500).fadeIn(1500);
  // $('.learnwhat').delay(2000).fadeOut(500);
  // $('.seeresults').delay(5000).fadeIn(1500);
  // $('.seeresults').delay(500).fadeOut(500);
  // $('.personalsolution').delay(9000).fadeIn(1500);
  // $('.personalsolution').delay(500).fadeOut(500);

var play = function(){
  $('.learnwhat').delay(500).fadeIn(1500);
  $('.learnwhat').delay(2000).fadeOut(500);
  $('.seeresults').delay(5000).fadeIn(1500);
  $('.seeresults').delay(500).fadeOut(500);
  $('.personalsolution').delay(9000).fadeIn(1500);
  $('.personalsolution').delay(500).fadeOut(500, play);
  }
play();

  setTimeout(function Pulse(){
    	$(".learnmorescroll").addClass("pulse");
    }, 2000);

    setTimeout(function removePulse(){
    	$(".learnmorescroll").removeClass("pulse");
    }, 5000);

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});                                                         

});
