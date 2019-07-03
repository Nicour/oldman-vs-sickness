'use strict';

function OldMan(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 30;
  this.width = 30;
  this.x = 40;
  this.y = this.canvas.height - this.height;
  this.floorY = 470;
  this.lives = 1;
  this.color = 'red';
  this.timeJumping = 0;
  this.jumpDuration = 17;
  this.jumpLenght = this.height * 3;
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