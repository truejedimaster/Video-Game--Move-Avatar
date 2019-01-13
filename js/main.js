let btnMoveLeft = document.getElementsByClassName("move-left")[0];
let btnMoveRight = document.getElementsByClassName("move-right")[0];
let btnMoveUp = document.getElementsByClassName("move-up")[0];
let btnMoveDown = document.getElementsByClassName("move-down")[0];
let avatar = document.getElementsByClassName("avatar")[0];

let xAxis = 0;
let yAxis = 0;

const move = {
    left: () => {
        console.log("left");
    },
    right: () => {
        console.log("right");
    },
    up: () => {
        console.log("up");
    },
    down: () => {
        console.log("down");
    }
}

btnMoveLeft.addEventListener("click", () => {
    move.left();
});
btnMoveRight.addEventListener("click", () => {
    move.right();
});
btnMoveUp.addEventListener("click", () => {
    move.up();
});
btnMoveDown.addEventListener("click", () => {
    move.down();
});
