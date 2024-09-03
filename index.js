let play = document.querySelector("#play");
let reset = document.querySelector("#reset");
let score = document.querySelector("#score");
let quads = document.querySelectorAll(".quad");
let info = document.querySelector(".info");

let level = 0;
let gameStarted = false;

play.addEventListener("click",() => {
    gameStarted = true;
    info.classList.add("hide");
    play.classList.add("hide");
})