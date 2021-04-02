const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas(600, 600)
    game.setup();
}

function draw() {
    game.draw();
}

function keyPressed() {
    console.log(keyCode)
    // spacebar makes the player jump
    if (keyCode === 32) {
        game.player.jump();
    }
}