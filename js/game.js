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
    level: 1,

    init: function () {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight - 10;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.start();
    },

    start: function () {
        this.reset()
        this.interval = setInterval(() => {
            this.framesCounter++;
            this.clear();
            this.drawAll();
            this.moveAll();
            this.clearEnemy();

            this.generateEnemy();
            this.generateEnemyTwo();
            this.generateArrive();
            //this.generateArriveTwo();
            if (this.isCollision(this.cubone)) this.gameOver();
        }, 1000 / this.fps)
    },

    reset: function () {
        this.background = new Background(this.ctx, 'images/pueblolavanda.png', this.width, this.height);
        this.player = new Player(this.ctx, 'images/gastly.png', 120, 120, 50, 50, this.playerKeys);
        this.cubone = [];
        this.arrives = [];
        this.marowak = [];
    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    drawAll: function () {
        this.background.draw();
        this.player.draw();
        this.cubone.forEach(elem => elem.draw());
    },

    drawMarowak: function () {
        this.marowak.forEach(elemm => elemm.draw());
    },

    moveAll: function () {
        this.cubone.forEach(elem => elem.move());
    },

    generateEnemy: function () {
        if (this.cubone.length <= 0) {
            this.cubone.push(new Enemy(this.ctx, 'images/cubone.png', 1100, 280, 50, 50))
        }
    },

    generateEnemyTwo: function () {
        if (this.marowak.length <= 0) {
            this.marowak.push(new EnemyTwo(this.ctx, 'images/marowak.png', 100, 280, 50, 50))
        }
    },


    generateArrive: function() {
        this.arrives = [new Arrive(this.ctx, 1100, 230, 20, 20)];
        if(this.isCollision(this.arrives)) {
            console.log("winner");
            this.background = new Background(this.ctx, 'images/torrepokemon.png', this.width, this.height);
            this.player = new Player(this.ctx, 'images/haunter.png', 580, 660, 50, 50, this.playerKeys);
            this.cubone = new Enemy(this.ctx, 'images/gengar.png', 700, 400, 50, 50);
            this.marowak = new EnemyTwo(this.ctx, 'images/marowak.png', 600, 500, 50, 50 );
            this.generateArriveTwo();
            //this.generateEnemyTwo();
            //this.drawMarowak();

            this.clear();
            this.clearEnemy();
        }
    },

    generateArriveTwo: function() {
        this.arrives = [new Arrive(this.ctx, 700, 100, 20, 20)];
        if(this.isCollision(this.arrives)) {
            console.log("winner");
            this.player = new Player(this.ctx, 'images/gengar.png', 400, 800, 50, 50, this.playerKeys);
            //this.generateEnemyTwo();
            //this.drawMarowak();

            this.clear();
            this.clearEnemy();
        }
    },

    clearEnemy: function () {
        if (this.cubone.length >= 2) {
            this.cubone.pop();
        }
    },

    isCollision: function (array) {
        return array.some(obs => (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY))
    },

    gameOver: function () {
        this.ctx.font = "bold 40px Arial";
        this.ctx.fillStyle = "dark";
        this.ctx.fillText("Game Over!", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
    },
}
