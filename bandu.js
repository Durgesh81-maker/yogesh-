
let player = document.getElementById("player");
let obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", function(event){

    if(event.code === "Space"){
        
        if(!player.classList.contains("jump")){
            
            player.classList.add("jump");

            setTimeout(function(){
                player.classList.remove("jump");
            },500);

        }
    }

});

let checkDead = setInterval(function(){

    let playerBottom =
    parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));

    let obstacleRight =
    parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

    if(obstacleRight > 600 && obstacleRight < 650 && playerBottom < 40){

        alert("Game Over");

        obstacle.style.animation = "none";
    }

},10);