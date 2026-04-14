var img = document.querySelector("img")
var love = document.querySelector("i")

img.addEventListener('dblclick',function(){
love.style.opacity = "0.9"
love.style.transform = 'translate(-50% ,-50%) scale(1) rotate(0deg)'
setTimeout(() => {

    love.style.transform = 'translate(-50% ,-400%) scale(1) rotate(-60deg)'
 love.style.opacity ='0'
}, 1000);
setTimeout(() => {
    
   
    love.style.transform = 'translate(-50% ,-50%) scale(1) rotate(0deg)'
},1200);})