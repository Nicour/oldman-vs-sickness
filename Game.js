'use strict';

function Game(canvas) {
  this.oldMan = null;
  this.sickness = [];
  this.medicine = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = null;
  this.gameSong = new Audio('./Music/RVDE -  90s Hammer TWB008.mp3');
};

Game.prototype.startGame = function () {
  this.gameSong.play()
  this.oldMan = new OldMan(this.canvas);
  setInterval(() => {
    if(Math.random() > 0.75) {
      var newSickness = new Sickness(this.canvas);
      this.sickness.push(newSickness);  
      } else if (Math.random() > 0.92) {
        var newMedicine = new Medicine(this.canvas);
        this.medicine.push(newMedicine);
      }
  }, 300);

  var loop = () => {
    this.update();
    this.clear();
    this.draw();
    this.updateLives();
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
      this.medicine.forEach(function (medicine) {
        medicine.move();
  });
    if(this.oldMan.lives < 13) {
    this.sickness.forEach(function (sickness) {
      sickness.move();
  });} else if(this.oldMan.lives >= 13 && this.oldMan.lives < 15){
    this.sickness.forEach(function (sickness) {
      sickness.moveFaster();
    });} else {
      this.sickness.forEach(function (sickness) {
        sickness.moveFastest();
      });}
};

Game.prototype.clear = function clear() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function draw() {
  this.oldMan.draw();
  this.medicine.forEach(function (medicine) {
    medicine.draw();
  });
  this.sickness.forEach(function (sickness) {
    sickness.draw();
  });
};

Game.prototype.checkCollisions = function() {
this.sickness.forEach((sickness, index) => {
    var rightLeft = this.oldMan.x + this.oldMan.width >= sickness.x;
    var leftRight = this.oldMan.x <= sickness.x + sickness.width;
    var bottomTop = this.oldMan.y + this.oldMan.height >= sickness.y;

    if(rightLeft && bottomTop && leftRight) {
      this.sickness.splice(index, 1);
      this.oldMan.lives = this.oldMan.lives - 3;
      if(this.oldMan.lives <= 0) {
        this.isGameOver = true;
        this.gameSong.pause();
      }
    }
  });

  this.medicine.forEach((medicine, index) => {
    var rightLeft = this.oldMan.x + this.oldMan.width >= medicine.x;
    var leftRight = this.oldMan.x <= medicine.x + medicine.width;
    var bottomTop = this.oldMan.y + this.oldMan.height >= medicine.y;

    if(rightLeft && bottomTop && leftRight) {
      this.medicine.splice(index, 1);
      this.oldMan.lives = this.oldMan.lives + 1;
      }
  });

  return true || false;
}

Game.prototype.updateLives = function() {
  var span = document.querySelector('.number-of-lives');
  span.innerHTML = this.oldMan.lives;
}

Game.prototype.gameOverCallback = function(callback) {
  this.onGameOver = callback;
}