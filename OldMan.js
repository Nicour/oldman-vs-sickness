'use strict';

function OldMan(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 20;
  this.width = 20;
  this.x = 20;
  this.y = this.canvas.height;
  this.lives = 1;
  this.velocity = 3;
  this.direction = 0;
  this.color = 'black';
};

OldMan.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
};

