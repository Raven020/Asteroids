

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//let acceleration = { x: 0, y: 0 };
let currentVelocity = { x: 200, y: 200 };
let inertia = { x: 0, y: 0 };
let rotation = 0;

const keysDown = {
    up: false,
    left: false,
    down: false,
    right: false,
};

function animate() {
    window.requestAnimationFrame(animate);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased)
    inertia = { x: currentVelocity.x * 0.001, y: currentVelocity.y * 0.001 };
    let acceleration = nextVel();
    //acceleration = { x: acceleration.x + inertia.x, y: acceleration.y + inertia.y };
    currentVelocity = { x: currentVelocity.x + acceleration.x, y: currentVelocity.y + acceleration.y };// add acceleration
    let x = currentVelocity.x;
    let y = currentVelocity.y;
    /*ctx.beginPath();
    ctx.clearRect(0, 0, 800, 800);
    //console.log(x);

    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.strokeStlye = 'blue';
    ctx.stroke();*/
    ctx.save();
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.translate(x, y);
    ctx.rotate(Math.sin(rotation));
    ctx.clearRect(0, 0, 800, 800);
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

}


function nextVel() {
    let acceleration = { x: 0, y: 0 };

    if (keysDown.up === true) {
        acceleration.y = -5;
    }
    if (keysDown.down === true) {
        acceleration.y = 5;
    }
    if (keysDown.right === true) {
        acceleration.x = 5;
    }
    if (keysDown.left === true) {
        acceleration.x = -5;
    }
    return acceleration;
}

function rotation() {
    if (rotation >= 360) {
        rotation -= 360;
    }
    else if (rotation < 0) {
        rotation += 360
    }


}



function keyPressed(e) {
    //console.log("Key Pressed " + e.keyCode);
    if (e.key === 'd') {
        keysDown.right = true;

    }
    if (e.key === 'a') {
        keysDown.left = true;

    }
    if (e.key === 'w') {
        keysDown.up = true;

    }
    if (e.key === 's') {
        keysDown.down = true;

    }


}

function keyReleased(e) {
    //console.log("Relased " + e.keyCode);
    if (e.key === 'd') {
        keysDown.right = false;
    }
    if (e.key === 'a') {
        keysDown.left = false;
    }
    if (e.key === 'w') {
        keysDown.up = false;
    }
    if (e.key === 's') {
        keysDown.down = false;
    }
}

window.requestAnimationFrame(animate);