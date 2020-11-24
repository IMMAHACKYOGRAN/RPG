class Player {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    draw(url) {
        ctx.drawImage(url, this.x, this.y);
    }
}