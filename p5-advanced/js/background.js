class Background {
    draw() {
        game.backgroundImages.forEach(function (img) {
            img.x -= img.speed;
            image(img.src, img.x, 0, width, height)
            // this adds a second image
            image(img.src, img.x + width, 0, width, height)
            // if the image has moved completely out of the screen
            // we reset it to the starting value
            if (img.x <= - width) {
                img.x = 0;
            }
        })
        // console.log('this is the background drawing')
        // image(game.backgroundImages[0].src, 0, 0, width, height)
        // image(game.backgroundImages[1].src, 0, 0, width, height)
        // image(game.backgroundImages[2].src, 0, 0, width, height)
        // image(game.backgroundImages[3].src, 0, 0, width, height)
        // image(game.backgroundImages[4].src, 0, 0, width, height)
    }
}
