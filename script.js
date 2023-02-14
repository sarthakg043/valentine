// Howler Js starts here
var bgmusic = new Howl({
  src: ["music.mp3"],
  // The above audio is taken from https://www.youtube.com/watch?v=kBsUwIfL8kU
  preload: true,
  onload: function(){
      console.log("Music has loaded");
  },
  onloaderror: function(){
      console.log("Music can't be loaded");
  },
  onplay: function(){
      console.log("Music has started");
  },
  onplayerror: function(){
      console.log("Music can't be played");
  },
  autoplay: true,
  volume: 1,
  loop: true,
  onend: function(){
      console.log("Music ended");
  }	
});


window.onload = function() {

  bgmusic.play();
    function getR() {
      var W = window.innerWidth;
      var H = window.innerHeight;
      var randomTop = Math.floor(Math.random() * (H-80) ); 
      var randomLeft = Math.floor(Math.random() * (W-80) );
      var listEmojis = ["💋","😘","😍","♥️","💔","💕","💖","⭐️","💏","🎁"];
      var nbrRandom = Math.floor(Math.random() * listEmojis.length );
      var newSpan = document.createElement("span");
      newSpan.textContent = listEmojis[nbrRandom] ;
      newSpan.style.top = randomTop + "px";
      newSpan.style.left = randomLeft + "px";
      document.body.appendChild(newSpan); 
    }	
    window.setInterval(getR, 100);
   
  }