class EnemyTwo {
    constructor(ctx, image, startPositionX, startPositionY, width, height) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = image;
        this.startPositionX = startPositionX;
        this.startPositionY = startPositionY;
        this.posX = startPositionX;
        this.posY = startPositionY;
        this.width = width;
        this.height = height;
        this.vX = 1;
        this.vY = 1;
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
    moveSecondEnemy() {
        this.posY -= this.vY
        if(Math.abs(this.startPositionY - this.posY) > 60) this.vY *= -1;
    }
}

