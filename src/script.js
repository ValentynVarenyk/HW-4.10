let count = 0;
let messageTimer;

function startMessages() {
    count = 0;

    messageTimer = setInterval(function() {
        count++;

        document.getElementById("messages").textContent =
            "Повідомлення №" + count;

        if (count === 5) {
            clearInterval(messageTimer);
        }
    }, 1000);
}



let position = 0;
let animationTimer;

function startAnimation() {
    position = 0;

    animationTimer = setInterval(function() {
        position += 10;

        document.getElementById("box").style.left =
            position + "px";

        if (position >= 500) {
            clearInterval(animationTimer);
        }
    }, 100);
}



let time = 10;
let score = 0;
let clicks = 0;
let gameTimer;

let gameButton = document.getElementById("game-button");

gameButton.onclick = function() {
    if (time > 0) {
        score++;
        clicks++;

        document.getElementById("score").textContent = score;
        document.getElementById("clicks").textContent = clicks;
    }
};

function startGame() {
    time = 10;
    score = 0;
    clicks = 0;

    gameButton.disabled = false;

    document.getElementById("time").textContent = time;
    document.getElementById("score").textContent = score;
    document.getElementById("clicks").textContent = clicks;

    clearInterval(gameTimer);

    gameTimer = setInterval(function() {
        time--;

        document.getElementById("time").textContent = time;

        if (time === 0) {
            clearInterval(gameTimer);

            gameButton.disabled = true;

            alert("Гру завершено! Очки: " + score);
        }
    }, 1000);
}



function startTimer() {
    let seconds = document.getElementById("seconds").value;

    if (seconds > 0) {
        setTimeout(function() {
            alert("Час вийшов!");
        }, seconds * 1000);
    } else {
        alert("Введіть кількість секунд");
    }
}