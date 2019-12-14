const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    backgroundImage: 'images/pueblolavanda.png',
    fps: 60,
    framesCounter: 0,
    playerKeys: {
      TOP_KEY: 38,
      BOTTOM_KEY: 40,
      RIGHT_KEY: 39,
      LEFT_KEY: 37,
      SPACE: 32,
    },
    score: 0,

    init: function() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
  
      this.start();
    },

    start: function() {
        this.reset()
        this.interval = setInterval(() => {
          this.framesCounter++;
    
          this.clear();
          this.drawAll();
          //this.moveAll();
    
        //   this.clearObstacles()
        //   if(this.framesCounter % 70 === 0) this.generateObstacles()
        //   if(this.framesCounter % 100 === 0) this.score++;
        //   if(this.isCollision()) this.gameOver()
        //   if(this.framesCounter > 1000) this.framesCounter = 0;
        }, 1000/this.fps)
      },
    
      reset: function() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, 100, 100, this.width,this.height, this.playerKeys);
        // this.obstacles = [];
        // ScoreBoard.init(this.ctx, this.score)
      },
    
      clear: function() {
        this.ctx.clearRect(0, 0, this.width, this.height)
      },
    
      drawAll: function() {
        this.background.draw();
        this.player.draw(this.framesCounter);
        //this.obstacles.forEach(obstacle => obstacle.draw())
        //ScoreBoard.draw(this.score)
      },
    
      //moveAll: function() {
        //this.background.move()
        //this.player.move()
        //this.obstacles.forEach(obstacle => obstacle.move())
      //},
}