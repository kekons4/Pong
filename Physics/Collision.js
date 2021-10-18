export function Collision(rect, test, topWall, bottomWall, ball) {

    // Left Paddle Wall Collision
    if (rect.y <= topWall.y + topWall.height) {
        rect.y = topWall.y + topWall.height;
    }
    if (rect.y + rect.height >= bottomWall.y) {
        rect.y = bottomWall.y - ((bottomWall.height * 3) + 10);
    }

    // Right Paddle Wall Collision
    if (test.y <= topWall.y + topWall.height) {
        test.y = topWall.y + topWall.height;
    }
    if (test.y + test.height >= bottomWall.y) {
        test.y = bottomWall.y - ((bottomWall.height * 3) + 10);
    }

    // Ball Collision
    // When Right paddle is not moving
    if (ball.x + ball.width >= test.x && test.x + test.width >= ball.x && ball.y + ball.height >= test.y && test.y + test.height >= ball.y) {
        ball.rightMotion = false;
        ball.leftMotion = true;
        ball.upMotion = false;
        ball.downMotion = false;
        ball.speed += 1;
    }
    // When Left paddle is not moving
    if (ball.x + ball.width >= rect.x && rect.x + rect.width >= ball.x && ball.y + ball.height >= rect.y && rect.y + rect.height >= ball.y) {
        ball.rightMotion = true;
        ball.leftMotion = false;
        ball.upMotion = false;
        ball.downMotion = false;
        ball.speed += 1;
    }
    // When Right paddle is moving up
    if ((ball.x + ball.width >= test.x && test.x + test.width >= ball.x && ball.y + ball.height >= test.y && test.y + test.height >= ball.y) && test.upMotion) {
        ball.rightMotion = false;
        ball.leftMotion = true;
        ball.upMotion = true;
        ball.downMotion = false;
        ball.speed += 1;
    }
    // When right paddle is moving down
    if ((ball.x + ball.width >= test.x && test.x + test.width >= ball.x && ball.y + ball.height >= test.y && test.y + test.height >= ball.y) && test.downMotion) {
        ball.rightMotion = false;
        ball.leftMotion = true;
        ball.upMotion = false;
        ball.downMotion = true;
        ball.speed += 1;
    }

    // When Left paddle is moving up
    if ((ball.x + ball.width >= rect.x && rect.x + rect.width >= ball.x && ball.y + ball.height >= rect.y && rect.y + rect.height >= ball.y) && rect.upMotion) {
        ball.rightMotion = true;
        ball.leftMotion = false;
        ball.upMotion = true;
        ball.downMotion = false;
        ball.speed += 1;
    }
    // When Left paddle is moving down
    if ((ball.x + ball.width >= rect.x && rect.x + rect.width >= ball.x && ball.y + ball.height >= rect.y && rect.y + rect.height >= ball.y) && rect.downMotion) {
        ball.rightMotion = true;
        ball.leftMotion = false;
        ball.upMotion = false;
        ball.downMotion = true;
        ball.speed += 1;
    }

    //Ball Wall Collision
    // Ball is going left and up
    if (ball.y <= topWall.y + topWall.height && (ball.leftMotion && ball.upMotion)) {
        ball.rightMotion = false;
        ball.leftMotion = true;
        ball.upMotion = false;
        ball.downMotion = true;
        ball.speed += 1;
    }
    //Ball is going right and up
    if (ball.y <= topWall.y + topWall.height && (ball.rightMotion && ball.upMotion)) {
        ball.rightMotion = true;
        ball.leftMotion = false;
        ball.upMotion = false;
        ball.downMotion = true;
        ball.speed += 1;
    }
    // Ball is going left and down
    if (ball.y + ball.height >= bottomWall.y && (ball.leftMotion && ball.downMotion)) {
        ball.rightMotion = false;
        ball.leftMotion = true;
        ball.upMotion = true;
        ball.downMotion = false;
        ball.speed += 1;
    }
    //Ball is going right and down
    if (ball.y + ball.height >= bottomWall.y && (ball.rightMotion && ball.downMotion)) {
        ball.rightMotion = true;
        ball.leftMotion = false;
        ball.upMotion = true;
        ball.downMotion = false;
        ball.speed += 1;
    }
}