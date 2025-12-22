let colors = ["Red", "Green", "Blue"];
let currentColor = "";
let score = 0;

function newGame() {
    let random = Math.floor(Math.random() * colors.length);
    currentColor = colors[random];

    document.getElementById("colorBox").style.background = currentColor.toLowerCase();
    document.getElementById("result").innerText = "";
}

function checkColor(choice) {
    if (choice === currentColor) {
        document.getElementById("result").innerText = "✅ Correct!";
        score++;
        document.getElementById("score").innerText = score;
    } else {
        document.getElementById("result").innerText = "❌ Wrong! Try again";
    }
}

newGame();
