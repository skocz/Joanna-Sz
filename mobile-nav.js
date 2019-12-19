/*
 * Open the drawer when the menu ison is clicked.
 */
window.onload=function(){
  let menu = document.querySelector('#menu');
  let main = document.querySelector('main');
  let drawer = document.querySelector('.nav-items');
  let navHeight = document.querySelector('nav');

  menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    navHeight.classList.toggle('mobile-height');
    e.stopPropagation();
    console.log(e);
  });
  main.addEventListener('click', function() {
    drawer.classList.remove('open');
    navHeight.classList.remove('mobile-height');
    console.log(e);
  });
    

  window.onscroll = function() {myFunction()};

  //var navbar = document.getElementById("navbar");
  var sticky = drawer.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky ) {
    } else {
      drawer.classList.remove("open");
      navHeight.classList.remove('mobile-height');
    }
  }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}