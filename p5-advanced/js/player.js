class Player {

    constructor() {
        this.width = 100;
        this.height = 140;
        this.x = 0;
        // height of the canvas - height of the player
        this.y = height - this.height;
    }

    draw() {
        console.log('drawing player')
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}