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
        // get the middel x and y of the obstacle
        const obstacleX = this.x + this.width / 2;
        const obstacleY = this.y + this.height / 2;
        // get the middel x and y of the player
        const playerX = playerInfo.x + playerInfo.width / 2;
        const playerY = playerInfo.y + playerInfo.height / 2;

        // then use the p5 function dist() to calculate the distance
        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            return false;
        } else {
            // we have a collision
            game.player.score += 10;
            return true;
        }
    }

    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}