'use strict';

function Sickness(canvas, randomY) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = this.canvas.width;
  this.y = 470;
  this.velocity = 8;
  this.direction = -1;
  this.color = 'black';
  this.width = 30;
  this.height = 30;
  this.img = new Image();
  this.img.src = './images/graveyard.png'
}

Sickness.prototype.move = function() {
  this.x = this.x + this.direction * this.velocity;
};

Sickness.prototype.draw = function() {
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
};