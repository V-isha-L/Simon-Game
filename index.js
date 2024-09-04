let play = document.querySelector("#play");
let reset = document.querySelector("#reset");
let score = document.querySelector("#score");
let quads = document.querySelectorAll(".quad");
let info = document.querySelector(".info");

let level = 0;
let winning = true;
let gamePattern = [];
let userPattern = [];


play.addEventListener("click",() => {
    gameStarted = true;
    info.classList.add("hide");
    play.classList.add("hide");
    reset.classList.remove("hide");

    function gameRun(winning) {
        level++;
        gamePattern.push(Math.floor(Math.random() * 4));
        showPattern();

    }

    quads.forEach(quad => {
        quad.addEventListener("click",() => {
            
        })
    })

})


function showPattern() {
    gamePattern.forEach(pattern => {
        quads[pattern].classList.add("pressed");
    })
}