// var WIDTH = 500, HEIGHT = 500;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');

var FPS = 60;
setInterval(update, 1000 / FPS);

function update() {
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(100, 150);
    ctx.stroke();

}


