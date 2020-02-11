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


