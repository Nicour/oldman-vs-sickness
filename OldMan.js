'use strict';

function OldMan(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 20;
  this.width = 20;
  this.x = 20;
  this.y = this.canvas.height - this.height;
  this.lives = 1;
  this.velocity = 3;
  this.direction = 0;
  this.color = 'red';
};

OldMan.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
};

OldMan.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
};

OldMan.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
}