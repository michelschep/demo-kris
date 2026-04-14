function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('canvas-container');
  background(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
}

function draw() {
  background(255);
  textSize(min(width, height) * 0.35);
  fill(0);
  text('Kris', width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
