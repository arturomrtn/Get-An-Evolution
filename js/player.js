class Player {
    constructor(ctx, image, posX, posY, width, height, keys) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = image;

        this.posX = posX;
        this.posY = posY;
        //this.posY0 = gameHeight * 0.98 - this.height;
        this.vy = 1;
        //this.gravity = 0.4;
       // this.gameWidth = gameWidth;

        this.frames = 3;
        this.framesIndex = 0;

        this.keys = keys;
        this.keyState = {
            keyLeft: false,
            keyRight: false,
            keyUp: false,
            keyDown: false,
        }
        this.keyId = 0;
        this.orientation = "S";
        this.movement = false;

        this.bullets = [];
        this.setListeners()
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
      //  this.framesIndex * Math.floor(this.image.width / this.frames),
      //      0,
      //      Math.floor(this.image.width / this.frames),
//
      //      this.clearBullets()
      //  this.bullets.forEach(bullet => bullet.draw())
      //  this.animate(framesCounter)
    }
    //animate(framesCounter) {
        //if(framesCounter % 10 === 0) {
          //this.framesIndex++;
    
          //if(this.framesIndex > 2) this.framesIndex = 0;
        //}
      //}
    setListeners() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case this.keys.TOP_KEY:
                    this.posY -= 10;
                    break;
                case this.keys.SPACE:
                    this.shoot();
                    break;
                case this.keys.BOTTOM_KEY:
                    this.posY += 10;
                    break;
                case this.keys.RIGHT_KEY:
                    this.posX += 10;
                    break;
                case this.keys.LEFT_KEY:
                    this.posX -= 10;
                    break;
            }
        })
    }

shoot() {
    this.bullets.push(new Bullet(this.ctx, 10, this.posX, this.posY, this.width, this.height, this.posY0))
}

clearBullets() {
    this.bullets = this.bullets.filter(bullet => bullet.posX <= this.gameWidth)
}
}
