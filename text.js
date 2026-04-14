var tum = document.querySelector('p')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrshuvwxyz";
    const text = tum.innerText
    let iteration = 0
tum.addEventListener('mouseenter',function(){
    setInterval(() => {
        

    const str =text.split('').map((char,index)=>{
        if (index<iteration) {
            return char  ;
            
        }
          return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")
    tum.innerText=str
    iteration+=0.5
    
    },30);
   
    
})