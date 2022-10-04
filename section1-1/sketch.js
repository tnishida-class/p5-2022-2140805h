function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(125, 15, 130);
  triangle(12,120,116,120,116,10);
  fill(237, 161, 187);
  triangle(0,108,106,108,106,0);
  strokeWeight(0)
  fill(0)
  triangle(8,105,103,105,103,8)
  fill(237,161,187);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
