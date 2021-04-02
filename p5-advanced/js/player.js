class Player {

    constructor() {
        this.gravity = 0.2;
        this.velocity = 0;
        this.width = 100;
        this.height = 140;
        this.x = 0;
        // height of the canvas - height of the player
        this.y = height - this.height;
    }

    draw() {
        // console.log('drawing player')
        // the gravity pushes the player down
        this.velocity += this.gravity;
        this.y += this.velocity;
        // this prevents the  player from moving further down thn where
        // the top left corner of the image should
        if (this.y >= height - this.height) {
            this.y = height - this.height;
        }
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }

    jump() {
        console.log('player jumping');
        this.velocity = - 13;
    }
}