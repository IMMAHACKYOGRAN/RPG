class Player {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    update(url) {
        this.draw(url);
    }

    draw(url) {
        ctx.drawImage(url, this.x + viewport.offset[0], this.y + viewport.offset[1]);
    }
}