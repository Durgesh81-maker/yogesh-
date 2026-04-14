 var arr = ['I love you Aarti ji😘','I love you Aarti❤️','I love you😍','I love you aayu💕','I love you Aarti ji😘','I love you Aarti❤️','I love you😍','I love you aayu💕','I love you Aarti ji😘','I love you Aarti❤️','I love you😍','I love you aayu💕']
 var bt = document.querySelector('button')
 var main = document.querySelector('main')



var h1 = document.querySelector('h1')
var bt = addEventListener('click',function(){
     var index = 0;
     var interval = setInterval(() => {
        if(index>=arr.length){
            clearInterval(interval);
            return;
        }
     var h1 = document.createElement('h1'); 

     var x = Math.floor(Math.random()*80)
     var y = Math.floor(Math.random()*80)
     var z = Math.floor(Math.random()*45)
      var c1 = Math.floor(Math.random()*256)
  var c2 = Math.floor(Math.random()*256)
   var c3 = Math.floor(Math.random()*256)
 h1.style.color = `rgb(${c1},${c2},${c3})`
     h1.innerHTML = arr[index]
     h1.style.position= 'absolute';
     
     h1.style.top = x+'%'
       h1.style.left = y+'%'
       h1.style.rotate = z+ 'deg'
        
          main.appendChild(h1);
        setTimeout(() => {
            h1.remove();
            
        },5000);
        index++;
        
                
     }, 2000);
    });
          
