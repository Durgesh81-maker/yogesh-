 let arr =[
    {
        team: 'RCB',
        primary:'purple',
        secondry:'red'
    },
    {
        team :'CSK',
        primary: 'green',
        secondry: 'blue'
    },
 
    { team: 'SRH',
        primary:'royal blue',
        secondry:'silver'
    },
    {   team: 'pbsk',
        primary:'gold',
        secondry:"royalblue"},
 ]
 var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')
btn.addEventListener('click',function(){
   var  winner =arr[ Math.floor (Math.random()*arr.length)]
    h1.innerHTML=winner.team
    h1.style.backgroundColor = winner.secondry
    main.style.backgroundColor = winner.primary

    

})