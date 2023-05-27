window.onload = function() {
  var audioPlayer = document.getElementById("audioPlayer");
  var playlist = document.getElementById("playlist");

  // Play the selected song when a playlist item is clicked
  playlist.addEventListener("click", function(e) {
    e.preventDefault();
    var songUrl = e.target.getAttribute("href");
    audioPlayer.src = songUrl;
    audioPlayer.play();
  });
};