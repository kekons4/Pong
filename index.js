import {
    Object
} from "./Components/Object.js";

import {
    Score
} from "./Components/Score.js";

import {
    Collision
} from "./Physics/Collision.js";

import {
    Message
} from "./Components/Message.js";
/**
Length of a tick in milliseconds. The denominator is your desired framerate.
e.g. 1000 / 20 = 20 fps,  1000 / 60 = 60 fps
*/
var tickLengthMs = 1000 / 60

/* gameLoop related variables */
// timestamp of each loop
var previousTick = Date.now()
// number of times gameLoop gets called
var actualTicks = 0

// Initialize Score Object
// const score = [0, 0];
const scores = new Score([0, 0]);

// Get Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Message
const msg = new Message("Keon Pourboghrat", canvas.width / 3.5, canvas.height / 2, "blue");

// Walls
const topWall = new Object(0, 0, canvas.width, 30, "grey", 0);
const bottomWall = new Object(0, canvas.height - 30, canvas.width, 30, "grey", 0);

// Paddles
const rect = new Object(15, (canvas.height / 2) - 50, 10, 100, "white", 10);
const test = new Object(canvas.width - 25, (canvas.height / 2) - 50, 10, 100, "white", 10);

//Ball
const ball = new Object((canvas.width / 2) - 10, (canvas.height / 2) - 10, 20, 20, "white", 5);

// Randomize where the ball starts
const startDirection = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
if (startDirection === 1) {
    setTimeout(() => {
        // start right
        ball.rightMotion = true;
    }, 2000);
} else {
    setTimeout(() => {
        // start left
        ball.leftMotion = true;
    }, 2000);
}

// Game Loop
var gameLoop = function () {
    var now = Date.now()

    actualTicks++
    if (previousTick + tickLengthMs <= now) {
        var delta = (now - previousTick) / 1000
        previousTick = now

        update(delta)

        //console.log('delta', delta, '(target: ' + tickLengthMs + ' ms)', 'node ticks', actualTicks)
        actualTicks = 0
    }

    if (Date.now() - previousTick < tickLengthMs - 16) {
        setTimeout(gameLoop)
    } else {
        setTimeout(gameLoop)
    }
}


/**
Update is normally where all of the logic would go. In this case we simply call
a function that takes 10 milliseconds to complete thus simulating that our game
had a very busy time.
*/
var update = function (delta) {
    //aVerySlowFunction(10)

    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Left Paddle key presses
    rect.detectMotion();

    // Right Paddle key presses
    test.detectMotion();

    // Ball motion
    ball.detectMotion();

    // Check if Collision has been detected
    Collision(rect, test, topWall, bottomWall, ball);

    //Reset Paddle's and ball positions after scoring
    if (ball.x < 0) {
        scores.scorePlayerTwo();
        ball.reset();
        rect.reset();
        test.reset();
        setTimeout(() => {
            ball.leftMotion = true;
        }, 2000);
    }
    if (ball.x >= canvas.width) {
        scores.scorePlayerOne();
        ball.reset();
        rect.reset();
        test.reset();
        setTimeout(() => {
            ball.rightMotion = true;
        }, 2000);
    }
    // Check Score
    if (scores.getPlayerOne() === 10) {
        msg.render("Player 1 Wins!");
        setTimeout(() => {
            scores.reset();
        }, 2000);
    } else if (scores.getPlayerTwo() === 10) {
        msg.render("Player 2 Wins!");
        setTimeout(() => {
            scores.reset();
        }, 2000);
    }

    topWall.render();
    bottomWall.render();

    scores.render();

    test.render();
    rect.render();

    ball.render();
}

// begin the loop !
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === "ArrowDown") {
        test.downMotion = true;
    } else if (keyName === "ArrowUp") {
        test.upMotion = true;
    }

    if (keyName === "w") {
        rect.upMotion = true;
    } else if (keyName === "s") {
        rect.downMotion = true;
    }
}, false);

document.addEventListener('keyup', (event) => {
    const keyName = event.key;

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === "ArrowDown") {
        test.downMotion = false;
    } else if (keyName === "ArrowUp") {
        test.upMotion = false;
    }

    if (keyName === "w") {
        rect.upMotion = false;
    } else if (keyName === "s") {
        rect.downMotion = false;
    }
}, false);

gameLoop()