window.onload = function() {

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