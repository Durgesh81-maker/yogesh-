var btn = document.querySelector('button')
var main = document.querySelector('main')
          btn.addEventListener('click',function(){
 var div = document.createElement('h1')
 var arr = ['durgesh','yogesh','ganesh','hariom','patel']
 var x = Math.random()*100
 var y = Math.random()*100
  var r = Math.random()*360
 

 var c1 = Math.random()*256
  var c2 = Math.random()*256
   var c3 = Math.random()*256
   var c4 = Math.floor(Math.random()*arr.length)
  div.innerHTML= arr[c4]
  
div.style.position = 'absolute'
div.style.left = x +'%'
div.style.top = y +'%'
div.style.rotate = r +'deg'
div.style.color = `rgb(${c1},${c2},${c3})`

div.style.fontSize = '1.5rem'
main.appendChild(div)

})