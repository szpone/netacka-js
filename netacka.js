// var WIDTH = 500, HEIGHT = 500;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');

var FPS = 60;
setInterval(update, 1000 / FPS);

var player = {
    position: { x: 0, y: 0 },
    speed: 2,
    angle: 45,
    left: false,
    right: false,
};

function update() {
    var dx = Math.cos(player.angle / 360 * 2 * Math.PI) * player.speed;
    var dy = Math.sin(player.angle / 360 * 2 * Math.PI) * player.speed;

    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.beginPath();
    player.position.x += dx;
    player.position.y += dy;
    ctx.moveTo(player.position.x, player.position.y);
    ctx.lineTo(player.position.x + dx, player.position.y + dy);
    ctx.stroke();

    if (player.left) {
        player.angle -= 3.5;
    } else if (player.right) {
        player.angle += 3.5;
    }
}


document.addEventListener('keydown', function (event) {
    var keyName = event.key;

    if (keyName === ',') {
        player.left = true;
    } else if (keyName === '.') {
        player.right = true;
    }
}, false);

document.addEventListener('keyup', function (event) {
    var keyName = event.key;
    if (keyName === ',') {
        player.left = false;
    } else if (keyName === '.') {
        player.right = false;
    }
}, false);
