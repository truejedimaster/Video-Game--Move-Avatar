let btnRespawn = document.getElementsByClassName("respawn")[0];
let btnMoveLeft = document.getElementsByClassName("move-left")[0];
let btnMoveRight = document.getElementsByClassName("move-right")[0];
let btnMoveUp = document.getElementsByClassName("move-up")[0];
let btnMoveDown = document.getElementsByClassName("move-down")[0];
let messageContainer = document.getElementsByClassName("message")[0];
let avatar = document.getElementsByClassName("avatar")[0];

let currentX = 30;
let currentY = 30;
let isMovable = true;
let isCollision = false;
const resetSteps = 30;
const numOfSteps = 30;


let check = {
    movingProcess: (steps, axis) => {
        if(check.getGameState() === true) {
            if(check.getCollision(steps, axis) === false) {
                axis(steps);
                error.resetMessage();
            } else {
                error.collision();
            }
        } else {
            error.notMovable();
        }
    },
    getGameState: () => {
        return isMovable;
    },
    setGameState: (n) => {
        isMovable = n;
    },
    getCollision: (checkSteps, checkAxis) => {
        newAxis = checkAxis === move.setXAxis ? currentX : currentY;
        let newSteps = newAxis + checkSteps;
        isCollision = newSteps < 0 ? true : false;
        return isCollision;
    },
    setCollision: (e) => {
        isCollision = e;
    }
}
let move = {
    respawn: (n) => {
        render.setXAxis(currentX = n);
        render.setYAxis(currentY = n);
        error.resetMessage();
    },
    setXAxis: (n) => {
        render.setXAxis(currentX += n);
    },
    setYAxis: (n) => {
        render.setYAxis(currentY += n);
    }
}
let render = {
    setXAxis: (n) => {
        avatar.style.left = n + "px";
    },
    setYAxis: (n) => {
        avatar.style.top = n + "px";
    }
}
let error = {
    setMessage: (e) => {
        messageContainer.innerHTML = e;
    },
    resetMessage: () => {
        error.setMessage("");
    },
    collision: () => {
        error.setMessage("You can not move that way.");
    },
    notMovable: () => {
        error.setMessage("You can not move.");
    }
}


btnRespawn.addEventListener("click", () => {
    move.respawn(resetSteps);
});
btnMoveLeft.addEventListener("click", () => {
    check.movingProcess(-numOfSteps, move.setXAxis);
});
btnMoveRight.addEventListener("click", () => {
    check.movingProcess(numOfSteps, move.setXAxis);
});
btnMoveUp.addEventListener("click", () => {
    check.movingProcess(-numOfSteps, move.setYAxis);
});
btnMoveDown.addEventListener("click", () => {
    check.movingProcess(numOfSteps, move.setYAxis);
});
