var WIDTH = 500, HEIGHT = 500;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');

var FPS = 60;
setInterval(update, 1000 / FPS);

var players = [
    {
        position: { x: 0, y: 0 },
        speed: 2,
        angle: 45,
        left: false,
        right: false,
        keys: [',', '.'],
        color: "rgb(95, 191, 63)",
        dead: false,
    },
    {
        position: { x: 0, y: 0 },
        speed: 2,
        angle: 45,
        left: false,
        right: false,
        keys: ['z', 'x'],
        color: "rgb(169, 49, 185)",
        dead: false,
    },
    {
        position: { x: 0, y: 0 },
        speed: 2,
        angle: 45,
        left: false,
        right: false,
        keys: ['q', 'w'],
        color: "rgb(15, 255, 211)",
        dead: false,
    }
];

function update() {
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        if (player.dead) {
            continue;
        }

        var dx = Math.cos(player.angle / 360 * 2 * Math.PI) * player.speed;
        var dy = Math.sin(player.angle / 360 * 2 * Math.PI) * player.speed;

        ctx.strokeStyle = player.color;
        ctx.lineWidth = 3;
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

        if (player.position.x <= 0 || player.position.y <= 0
            || player.position.x >= WIDTH || player.position.y >= HEIGHT) {
            player.dead = true;
        }
    }

    var debug = document.getElementById('debug');
    debug.innerText = 'player 0: ' +
        Math.round(players[0].position.x) +
        ', ' +
        Math.round(players[0].position.y);
}

function turn(keyName, value) {
    for (var i = 0; i < players.length; i++) {
        var playerKey = players[i].keys.indexOf(keyName);
        if (playerKey == 0) {
            players[i].left = value;
        } else if (playerKey == 1) {
            players[i].right = value;
        }
    }
}

document.addEventListener('keydown', function (event) {
    turn(event.key, true);
}, false);

document.addEventListener('keyup', function (event) {
    turn(event.key, false);
}, false);

