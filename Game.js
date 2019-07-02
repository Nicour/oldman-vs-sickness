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

  this.player = new OldMan(this.canvas);

  var loop = function loop() {
      console.log('hey');
      requestAnimationFrame(loop);
    };
    loop();
  };

