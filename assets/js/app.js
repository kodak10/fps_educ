
$(document).ready(function () {
  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        mouveDrag:false,
        autoplay:true,
        nav:true,
        dots:false,
        autoplayTimeout:6500,
        autoplayHoverPause:true,
        
        
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
  
  });
$(document).ready(function () {
 
    /*Testimonials 3columns*/
    $("#testimonial-slider").owlCarousel({
       items: 3,
       autoplay: 2500,
       autoplayHoverPause: true,
       loop: true,
       margin: 30,
       dots: true,
       nav: false,
       responsive: {
          0: {
             items: 1,
          },
          600: {
             items: 2,
          },
          320: {
             items: 3,
          },
       }
    });
 
 
 });

 document.getElementById("navbar-toggler").active
 window.onscroll = function () {

if (document.documentElement.scrollTop > 0) {
/*au scrool*/
document.getElementById("header").style.background = "#212529";
document.getElementById("navbar-toggler").style.background = "#fff";
document.getElementById("navbar").style.padding = "10px 0px";
}
else {
/*sans scrool*/
document.getElementById("header").style.background = "transparent";
document.getElementById("navbar-toggler").style.background = "transparent";
document.getElementById("navbar").style.padding = "20px 0px";

}


}
