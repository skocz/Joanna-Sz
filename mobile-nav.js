/*
 * Open the drawer when the menu ison is clicked.
 */
window.onload=function(){
  let menu = document.querySelector('#menu');
  let main = document.querySelector('main');
  let drawer = document.querySelector('.core-nav');

  menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
    console.log(e);
  });
  main.addEventListener('click', function() {
    drawer.classList.remove('open');
    console.log(e);
  });
    

  window.onscroll = function() {myFunction()};

  //var navbar = document.getElementById("navbar");
  var sticky = drawer.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky ) {
    } else {
      drawer.classList.remove("open");
    }
  }
}