class Player {
    constructor(ctx, width, height, gameWidth, gameHeight, keys) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
  
      this.image = new Image();
      this.image.src = 'images/gastly.png';
  
      this.posX = 100;
      this.posY = gameHeight * 0.98 - this.height ;
      this.posY0 = gameHeight * 0.98 - this.height ;
      this.vy = 1;
      //this.gravity = 0.4;
      this.gameWidth = gameWidth;
  
      this.frames = 3;
      this.framesIndex = 0;
  
      this.keys = keys;
      //this.bullets = [];
      //this.setListeners()
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        //   this.framesIndex * Math.floor(this.image.width / this.frames),
        //   0,
        //   Math.floor(this.image.width / this.frames),
          
          //this.clearBullets()
          //this.bullets.forEach(bullet => bullet.draw())
          //this.animate(framesCounter)
      }
}