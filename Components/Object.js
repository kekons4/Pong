export class Object {
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.startSpeed = speed;
        this.startX = x;
        this.startY = y;
        this.rightMotion = false;
        this.leftMotion = false;
        this.upMotion = false;
        this.downMotion = false;
    }

    detectMotion() {
        if (this.leftMotion) {
            this.moveLeft();
        } else if (this.rightMotion) {
            this.moveRight();
        }
        if (this.downMotion) {
            this.moveDown();
        } else if (this.upMotion) {
            this.moveUp();
        }
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.speed = this.startSpeed;
        this.rightMotion = false;
        this.leftMotion = false;
        this.upMotion = false;
        this.downMotion = false;
    }

    render() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        return ctx;
    }
}

//module.exports = {
//Object
//};