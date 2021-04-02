class Game {
    constructor() {
        this.backgroundImages;
        this.playerImage;
        this.coinImage;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
            { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 },
            { src: loadImage('assets/background/plx-5.png'), x: 0, speed: 4 }
        ]
        this.playerImage = loadImage('assets/player/bb8.gif');
        this.coinImage = loadImage('assets/coins/tile000.png');
    }
    draw() {
        clear();
        // console.log('game drawing');
        this.background.draw();
        this.player.draw();
        // frameCount is provided by P5
        // console.log(frameCount)
        if (frameCount % 60 === 0) {
            this.obstacles.push(new Obstacle(this.coinImage))
            console.log(this.obstacles);
        }
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw();
        })
        // this needs to be an arrow function otherwise the context of 'this'
        // will not be correct
        this.obstacles = this.obstacles.filter(obstacle => {
            // console.log(this)
            if (obstacle.collision(this.player) || obstacle.x < 0) {
                return false
            } else {
                return true
            }
        })
    }
}