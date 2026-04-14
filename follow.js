var index = 0 ;
var btn1 = document.querySelector('.button1')
var btn2 = document.querySelector('.button2')
var img = document.querySelector('img')
var love= document.querySelector('i')
btn1.addEventListener('click',function(){

    if(index==0){
    btn1.innerHTML = 'following'
    btn1.style.backgroundColor ='lightgrey'
    btn1.style.fontsize = '5px'
index = 1 ;}
   
    else{
        btn1.innerHTML = 'Follow'
        btn1.style.backgroundColor = 'royalblue'
        index = 0 ;
    }

})
img.addEventListener('dblclick',function(){
    love.style.transform= ' translate(-50% ,-50% ) scale(1)'
    love.style.opacity = '0.9'
    
setTimeout(() => {


    love.style.transform= ' translate(-50% ,-50% ) scale(1)'
    love.style.opacity = '0.9'
    love.style.color = ' rgb(233, 17, 92)'
    
    }, 500);

setTimeout(() => {  
      love.style.transform= ' translate(-50% ,-50% ) scale(1)'
    love.style.opacity = '0'
     love.style.color = ' white'
    
}, 1000);


})
     btn2.addEventListener('click',function(){
          
     })



