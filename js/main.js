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


const introText = "JOSEPH"
const introText2 = "A Full Stack Developer."

let i = 0;
let j = 0
const speed = 60;

const writeIntro1 = () => {
  if (i < introText.length){
    document.querySelector("#intro1").innerHTML += introText.charAt(i);
    i++
    setTimeout(writeIntro1, speed)
  }
  else {
    setTimeout(writeIntro2, 50)
  }
}


const writeIntro2 = () => {
  if (j < introText2.length){
    document.querySelector("#intro2").innerHTML += introText2.charAt(j);
    j++
    setTimeout(writeIntro2, speed)
  }
}



window.onload = () => {
  writeIntro1()
}