var index = 0 
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var btm =document.querySelector(".b")
var gg =  50+ Math.floor(Math.random*50)
 btn.addEventListener('click',function(){
   
     btn.style.pointerEvents = 'none'

     var gg =  50+ Math.floor(Math.random()*50)

     
   var int = setInterval(() => {
   

         index++;
         btm.style.width= index +'%'
         h2.innerHTML = index+'%'
        


    }, gg);
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity =0.8
        
          console.log(`download has compeleted in ${gg/10} seconds`);
        }, gg*100);
    
        
})
