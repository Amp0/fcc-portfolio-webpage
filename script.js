$(function () {
  /* -- Scroll to section on click -- */

  // About
  $("#button-about").click(function (){
    $('html,body').clearQueue();
    $('html,body').animate({
      scrollTop: $('main').offset().top-50
    }, 'slow');
  });
  // Portfolio
  $("#button-portfolio").click(function(){
    $('html,body').clearQueue();
    $('html, body').animate({
      scrollTop: $('#section-portfolio').offset().top-50
    }, 'slow');
  });
  // Contact
  $("#button-contact").click(function (){
    $('html,body').clearQueue();
    $('html, body').animate({
      scrollTop: $('#section-contact').offset().top-50
    }, 'slow');
  });

  /* -- Detect scroll level -- */
  $(window).scroll(function() {
    if($(window).scrollTop() >= 0 && $(window).scrollTop() < $('#section-presentation').height()) {
      $("#button-about").parent().addClass("active");
      $("#button-portfolio").parent().removeClass("active");
      $("#button-contact").parent().removeClass("active");
    }
    else if($(window).scrollTop() >= $('#section-presentation').height() && $(window).scrollTop() < $(window).height()-250) {
      $("#button-about").parent().removeClass("active");
      $("#button-portfolio").parent().addClass("active");
      $("#button-contact").parent().removeClass("active");
    }
    else {
      $("#button-about").parent().removeClass("active");
      $("#button-portfolio").parent().removeClass("active");
      $("#button-contact").parent().addClass("active");
    }
  });

  /* -- Fun action -- */

  $('#rotate-fun').click(function () {
    $('img').addClass("rotate");
  });

  $("#color-fun").click(function () {
    $('img').removeClass("rotate");
    $('main').addClass("bg-color");
    $('body').addClass("burp-font");
    $('img').addClass("border-img");
  });

  $("#repair-not-fun").click(function () {
    $('img').removeClass("rotate");
    $('main').removeClass("bg-color");
    $('body').removeClass("burp-font");
    $('img').removeClass("border-img");
  });
});
