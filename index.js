let play = document.querySelector("#play");
let reset = document.querySelector("#reset");
let score = document.querySelector("#score");
let quads = document.querySelectorAll(".quad");
let info = document.querySelector(".info");

let scorePoints = 0;
let gamePattern = [];
let userPattern = [];
let gameStarted = false;

quads.forEach(quad => {
    quad.addEventListener("click", () => {
        // Ignore clicks if the game hasn't started
        if (!gameStarted) return;

        let index;
        if (quad.classList.contains("quad1")) index = 0;
        else if (quad.classList.contains("quad2")) index = 1;
        else if (quad.classList.contains("quad3")) index = 2;
        else if (quad.classList.contains("quad4")) index = 3;

        if (index !== undefined) {
            userPattern.push(index);
            quad.classList.add("pressed");
            setTimeout(() => quad.classList.remove("pressed"), 500);

            checkPattern();
        }
    });
});

play.addEventListener("click", () => {
    gameStarted = true;
    info.classList.add("hide");
    play.classList.add("hide");
    reset.classList.remove("hide");
    gameRun();
});

function gameRun() {
    scorePoints++;
    score.innerHTML = "Score : " + scorePoints;
    gamePattern.push(Math.floor(Math.random() * 4));
    userPattern = [];
    showPattern();
}

function showPattern() {
    gameStarted = false;  // Disable clicks during pattern display
    gamePattern.forEach((pattern, index) => {
        setTimeout(() => {
            quads[pattern].classList.add("pressed");
            setTimeout(() => quads[pattern].classList.remove("pressed"), 300);

            if (index === gamePattern.length - 1) {
                setTimeout(() => {
                    gameStarted = true; 
                }, 300); 
            }
        }, index * 600);
    });
}

function checkPattern() {
    for (let i = 0; i < userPattern.length; i++) {
        if (gamePattern[i] !== userPattern[i]) {
            resetGame();
            return;
        }
    }
    
    if (userPattern.length === gamePattern.length) {
        setTimeout(gameRun, 1000);
    }
}

function resetGame() {
    gameStarted = false;
    info.classList.remove("hide");
    play.classList.remove("hide");
    reset.classList.add("hide");
    scorePoints = 0;
    score.innerHTML = "Score : 0";
    gamePattern = [];
    userPattern = [];
}