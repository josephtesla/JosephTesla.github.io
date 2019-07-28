(function($) {
  $("#actionbtn1").click(function(){
    console.log("its working")
    $(".portfolio-slider").fadeOut(350);
    $("#portfolio-modal-1").fadeIn(500)
    window.location.href = "#portfolio-modal-1"
  })

  $("#actionbtn2").click(function(){
    $(".portfolio-slider").fadeOut(350);
    $("#portfolio-modal-2").fadeIn(500)
    window.location.href = "#portfolio-modal-2"
  })
 
  $("#actionbtn3").click(function(){
    $(".portfolio-slider").fadeOut(350);
    $("#portfolio-modal-3").fadeIn(500)
    window.location.href = "#portfolio-modal-3"

  })
 
  $("#actionbtn4").click(function(){
    $(".portfolio-slider").fadeOut(350);
    $("#portfolio-modal-4").fadeIn(500)
    window.location.href = "#portfolio-modal-4"

  })

  $(".portfolio-modal-dismiss").click(function (e) {
    e.preventDefault();
    $(".portfolio-modal").fadeOut(350);
    $("#portfolio").fadeIn(412);
    window.location.href = "#portfolio"
  })
 
 
})(jQuery); // End of use strict
