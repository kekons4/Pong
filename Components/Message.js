export class Message {
    constructor(msg, x, y, color) {
        this.msg = msg;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    render(msg) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.font = "72px serif";
        ctx.fillText(msg || this.msg, this.x, this.y);
        return ctx;
    }
}