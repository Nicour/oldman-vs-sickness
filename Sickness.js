'use strict';

function Sickness(canvas, randomY) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = this.canvas.width;
  this.y = 480;
  this.velocity = 5;
  this.direction = -1;
  this.color = 'black';
  this.width = 20;
  this.height = 20;
}

Sickness.prototype.move = function() {
  this.x = this.x + this.direction * this.velocity;
};

Sickness.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
};