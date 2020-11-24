const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 352; // Your width here!
canvas.height = 352; // Your height here!
var width = canvas.width,
    height = canvas.height;

var player = new Player(160, 160, 32);

var scaled_size = 32;
var sprite_size = 32;
var columns     = 24;
var rows        = 24;
var playerWalk1 = new Image();
playerWalk1.src = './textures/entities/player/player-walk1.png';

function update() {
    renderMap();
    player.draw(playerWalk1);
    requestAnimationFrame(update);
}

var tile_sheet = new Image();
tile_sheet.src = './textures/tiles/tileset.png';
function renderMap() {
    for (let x = 0; x < columns; x ++) {

        for (let y = 0; y < rows; y ++) {

            ctx.imagesmoothingenabled = false;
            let value = testMap[y * columns + x]; 
            let tile_x = x * scaled_size;
            let tile_y = y * scaled_size;
            ctx.drawImage(tile_sheet, value * sprite_size, 0, sprite_size, sprite_size, tile_x, tile_y, 32, 32);

        }
    }
}

window.addEventListener('load', () => {
    update();
});

document.addEventListener('keydown', e => {
    if(e.code === 37) {
        player.x -= 5;
    }
});
