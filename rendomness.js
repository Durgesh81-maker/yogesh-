var btn = document.querySelector('button')
var b = document.querySelector('div')
btn.addEventListener('click',function(){
 var c1 = Math.floor(Math.random()*256)
  var c2 = Math.floor(Math.random()*256)
   var c3 = Math.floor(Math.random()*256)
 b.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// b.innerHTML = `rgb(${c1},${c2},${c3})`
})
