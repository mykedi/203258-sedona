$(function() {

  /*Button to top*/

    $(window).scroll(function() {
        if($(this).scrollTop() !=0) {
            $("#totop").fadeIn();
        } else {
            $("#totop").fadeOut();
        }
    });
    $("#totop").on("click", function() {
        $("body, html").animate({
            scrollTop: 0
        },300);
    });

    /*Smooth scroll to choose hotel*/

    $("#js-btn-scroll").on("click", function(e) {

      e.preventDefault();

      var hotelFormOffset = $("#js-form").offset().top;
      $("html, body").animate({
        scrollTop: hotelFormOffset
      }, 700);
    });
});
