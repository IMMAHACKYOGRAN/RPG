class Viewport {
    constructor() {
        this.screen = [0, 0];
        this.startTile = [0, 0];
        this.endTile = [0, 0];
        this.offset = [0, 0];
    }

    update(px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px);
        this.offset[1] = Math.floor((this.screen[1] / 2) - py);

        var tile = [ Math.floor(px / 32), Math.floor(py / 32) ];

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 2) / 32);
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 2) / 32);

        if(this.startTile[0] < 0) { this.startTile[0] = 0; }
        if(this.startTile[1] < 0) { this.startTile[1] = 0; }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 2) / 32);
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 2) / 32);

        if(this.endTile[0] >= 24) { this.endTile[0] = 24; }
        if(this.endTile[1] >= 24) { this.endTile[1] = 24; }

    }
}