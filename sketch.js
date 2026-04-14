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

  const cx = width / 2;
  const cy = height / 2;

  // Left half — red
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(0, 0, cx, height);
  drawingContext.clip();
  fill('#E63946');
  text('Kris', cx, cy);
  drawingContext.restore();

  // Right half — blue
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(cx, 0, cx, height);
  drawingContext.clip();
  fill('#457B9D');
  text('Kris', cx, cy);
  drawingContext.restore();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
