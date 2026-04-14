var aud = new Audio('./38.mp3')
var main = document.querySelector("main")
var h1 = document.querySelector("h1")
addEventListener('keydown', function(dets){
  if(dets.code==='KeyD'){
    aud.play();
  }
  
})