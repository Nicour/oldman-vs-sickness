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

  var loop = () => {
    this.update();
    this.clear();
    this.draw();
    requestAnimationFrame(loop);
  };

  loop();
};

Game.prototype.update = function update() {
    this.oldMan.updatePosition();
};

Game.prototype.clear = function clear() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function draw() {
  this.oldMan.draw();
};

