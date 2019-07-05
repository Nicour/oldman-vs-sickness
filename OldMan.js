'use strict';

function OldMan(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 60;
  this.width = 60;
  this.x = 60;
  this.y = this.canvas.height - this.height;
  this.floorY = 440;
  this.lives = 3;
  this.color = 'red';
  this.timeJumping = 0;
  this.jumpDuration = 15;
  this.jumpLenght = this.height * 3;
  this.img = new Image();
  this.img.src = './images/retirement.png'
};

OldMan.prototype.jump = function() {
  if (this.y === this.floorY) {
    this.y = this.y - this.jumpLenght;
    this.timeJumping = 0;
  }
};

OldMan.prototype.updatePosition = function() {
  if (this.y === this.floorY - this.jumpLenght) {
    if (this.timeJumping < this.jumpDuration) {
      this.timeJumping ++;
    } else {
      this.y = this.floorY;
      this.timeJumping = 0;
    }
  }
};

OldMan.prototype.draw = function() {
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
};

OldMan.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
};