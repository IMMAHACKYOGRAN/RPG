class Player {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.inventory = [null, null, null, null, null];
    }

    update(url) {
        this.draw(url);
    }

    draw(url) {
        ctx.drawImage(url, this.x + viewport.offset[0], this.y + viewport.offset[1]);
    }
}