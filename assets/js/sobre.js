var myAudio = document.getElementById("myAudio");
var isPlaying = tue;

function togglePlay() {
   if (isPlaying) {
      myAudio.pause()
   } else {
     myAudio.play();
   }
};

myAudio.onplaying = function() {
   isPlaying = true;
};
myAudio.onpause = function() {
   myAudio.currentTime = 0;
   isPlaying = false;
};