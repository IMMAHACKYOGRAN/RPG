//Imports
var player = new Player(3*32, 4*32, 32), viewport = new Viewport();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 500//352; // Your width here!
canvas.height = 500//352; // Your height here!
var width = canvas.width,
    height = canvas.height;

var debugMode = true;

var scaled_size = 32;
var sprite_size = 32;
var columns     = 24;
var rows        = 24;
var playerWalk1 = new Image();
playerWalk1.src = './textures/entities/player/player-walk1.png';

function update() {
    viewport.update(player.x + 16, player.y + 16);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
    handleKeys();
    renderMap(testMap.mapArr);
    player.update(playerWalk1);
    drawDebug();
    requestAnimationFrame(update);
}

var tile_sheet = new Image();
tile_sheet.src = './textures/tiles/tileset.png';
function renderMap(map) {
    for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; x ++) {

        for (let y = viewport.startTile[1]; y < viewport.endTile[1]; y ++) {

            ctx.imagesmoothingenabled = false;
            let value = map[y * columns + x];
            let tile_x = x * scaled_size;
            let tile_y = y * scaled_size;
            ctx.drawImage(tile_sheet, value * sprite_size, 0, sprite_size, sprite_size, tile_x + viewport.offset[0], tile_y + viewport.offset[1], 32, 32);

        }
    }
}

var held_directions = [];
var speed = 2.5;
function handleKeys() {
    const held_direction = held_directions[0];
    if (held_direction) {
        if (held_direction === directions.right) {player.x += speed;}
        if (held_direction === directions.left) {player.x -= speed;}
        if (held_direction === directions.down) {player.y += speed;}
        if (held_direction === directions.up) {player.y -= speed;}
    }
}

const directions = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
}

const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
    
    87: directions.up,
    65: directions.left,
    68: directions.right,
    83: directions.down
}

document.addEventListener('keydown', (e) => {
    var dir = keys[e.which];
    if (dir && held_directions.indexOf(dir) === -1) {
       held_directions.unshift(dir)
    }
});
 
document.addEventListener('keyup', (e) => {
    var dir = keys[e.which];
    var index = held_directions.indexOf(dir);
    if (index > -1) {
       held_directions.splice(index, 1)
    }
});

window.addEventListener('load', () => {
    viewport.screen = [width, height];
    update();
});

function drawDebug() {
    if(debugMode) {
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.rect(player.x, player.y, player.size, player.size);
        ctx.stroke();
    }
}
