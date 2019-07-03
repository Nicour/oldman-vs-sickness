'use strict';

function OldMan(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 20;
  this.width = 20;
  this.x = 20;
  this.y = this.canvas.height - this.height;
  this.floorY = 480;
  this.lives = 1;
  this.color = 'red';
  this.timeJumping = 0;

  this.jumpDuration = 10;
  this.jumpLenght = this.height * 2;
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
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
};

OldMan.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
};