var myvid = document.getElementById('landingvideo');

myvid.addEventListener('ended', function(e) {
  // get the active source and the next video source.
  // I set it so if there's no next, it loops to the first one
  var activesource = document.querySelector("#landingvideo source.active");
  var nextsource = document.querySelector("#landingvideo source.active + source") || document.querySelector("#landingvideo source:first-child");

  // deactivate current source, and activate next one
  activesource.className = "";
  nextsource.className = "active";

  // update the video source and play
  myvid.src = nextsource.src;
  myvid.play();
});



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("link");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
