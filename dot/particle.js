function particle() {
  this.loc = {
    x: random(0, width),
    y: random(0, height)
  };
  this.vel = {

  }
}
particle.prototype.display = function () {
  noStroke();
  fill(0, 153, 90);
  ellipse(this.loc.x, this.loc.y, 10, 10);
};
particle.prototype.move = function () {

};
