class Player {
    constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
  
      this.image = new Image();
      this.image.src = 'images/gastly.png';
  
      this.posX = 50;
      this.posY = gameHeight * 0.98 - this.height ;
      this.posY0 = gameHeight * 0.98 - this.height ;
      this.vy = 1;
      this.gravity = 0.4;
      this.gameWidth = gameWidth;
  
      this.frames = 3;
      this.framesIndex = 0;
  
      this.keys = keys;
      this.bullets = [];
      //this.setListeners()
    }
}