export class Score {
    constructor(score) {
        this.score = score;
    }

    getPlayerOne() {
        return this.score[1];
    }

    getPlayerTwo() {
        return this.score[0];
    }

    scorePlayerOne() {
        this.score[0] += 1;
    }

    scorePlayerTwo() {
        this.score[1] += 1;
    }

    reset() {
        this.score[0] = 0;
        this.score[1] = 0;
    }

    render() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "grey";
        ctx.font = '40px serif';
        ctx.fillText(`${this.score[0].toString()} : ${this.score[1].toString()}`, 375, 75);
        return ctx;
    }
}