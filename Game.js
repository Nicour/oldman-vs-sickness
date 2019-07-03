'use strict';

function Game(canvas) {
  this.oldMan = null;
  this.sickness = [];
  this.medicine = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
};

Game.prototype.startGame = function () {

  this.oldMan = new OldMan(this.canvas);
  setInterval(() => {
    if(Math.random() > 0.8) {
      var newSickness = new Sickness(this.canvas);
      this.sickness.push(newSickness);  
      }
  }, 500)

  var loop = () => {
    this.update();
    this.clear();
    this.draw();
    this.checkCollisions();
    requestAnimationFrame(loop);
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
  this.sickness.forEach((sickness, index) => {
    var rightLeft = this.oldman.x + this.oldman.width >= sickness.x;
    var bottomTop = this.oldman.y + this.oldman.height >= sickness.y;

    if(rightLeft && bottomTop) {
      this.enemies.splice(index, 1);
      this.oldman.lives --;
      if(this.oldman.lives === 0) {
        this.isGameOver = true;
      }
    }
  });

  return true || false;
}

