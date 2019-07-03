'use strict';

function Game(canvas) {
  this.oldMan = null;
  this.sickness = [];
  this.medicine = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = null;
};

Game.prototype.startGame = function () {

  this.oldMan = new OldMan(this.canvas);
  setInterval(() => {
    if(Math.random() > 0.8) {
      var newSickness = new Sickness(this.canvas);
      this.sickness.push(newSickness);  
      }
  }, 300)

  var loop = () => {
    this.update();
    this.clear();
    this.draw();
    this.checkCollisions();
    if(!this.isGameOver) {
      requestAnimationFrame(loop);
    } else {
      this.onGameOver()
    };
  };

  loop();
};

Game.prototype.update = function update() {
    this.oldMan.updatePosition();
    this.sickness.forEach(function (sickness) {
      sickness.move();
  });
};

Game.prototype.clear = function clear() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function draw() {
  this.oldMan.draw();
  this.sickness.forEach(function (sickness) {
    sickness.draw();
  });
};

Game.prototype.checkCollisions = function() {
console.log(this.sickness);
this.sickness.forEach((sickness, index) => {
    var rightLeft = this.oldMan.x + this.oldMan.width >= sickness.x;
    var leftRight = this.oldMan.x <= sickness.x + sickness.width;
    var bottomTop = this.oldMan.y + this.oldMan.height >= sickness.y;

    if(rightLeft && bottomTop && leftRight) {
      this.sickness.splice(index, 1);
      this.oldMan.lives --;
      if(this.oldMan.lives === 0) {
        this.isGameOver = true;
      }
    }
  });

  return true || false;
}


Game.prototype.gameOverCallback = function(callback) {
  this.onGameOver = callback;
}