class Obstacle {
    constructor(image) {
        this.image = image;
        // the coins should appear on the right side of the canvas
        this.x = width;
        this.y = (Math.random() * height) / 2.5;
        this.width = 50;
        this.height = 50;
    }

    collision(playerInfo) {
        console.log('collision', playerInfo);
    }

    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}