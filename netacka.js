// var WIDTH = 500, HEIGHT = 500;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');

var FPS = 60;
setInterval(update, 1000 / FPS);

var player = {
    position: { x: 0, y: 0 },
    speed: 2,
    angle: 45,
};

function update() {
    var dx = Math.sin(player.angle / 360 * 2 * Math.PI) * player.speed;
    var dy = Math.cos(player.angle / 360 * 2 * Math.PI) * player.speed;

    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.beginPath();
    player.position.x += dx;
    player.position.y += dy;
    ctx.moveTo(player.position.x, player.position.y);
    ctx.lineTo(player.position.x + dx, player.position.y + dy);
    ctx.stroke();

    if (Math.random() < 0.5) {
        player.angle -= 5;
    } else {
        player.angle += 5;
    }
}


