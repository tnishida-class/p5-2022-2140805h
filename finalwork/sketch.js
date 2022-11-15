// 最終課題を制作しよう

// function setup(){
//   createCanvas(windowWidth, windowHeight);
// }

// function draw(){
//   background(160, 192, 255);
// }

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }


let c;
let cs, cs1;

function setup() {
  createCanvas(400, 400);
  c = color(16, 16, 32);
  cs = [color(32, 32, 48, 64)];
  cs1 = [color(118, 209, 141, 128), color(255, 162, 208, 128), color(48, 179, 221, 128), color(255, 164, 42, 128)];

  background(16, 16, 32);
  ellipse(200, 200, 400);

  // fillTile(32, 10);
  // wheel(178, 30, 20, random(TWO_PI), true, cs[0]);

  fillHexagon(52);
  for (let i = 0; i < 12; i++) {
    const cx = 200 + (noise(i) - 0.5) * 20, cy = 200 + (noise(i) - 0.5) * 20;
    cultureWheel(130, 10, 20, random(TWO_PI), random(100) > 30, cs[i % cs.length], cx, cy);
  }
}

function wheel(r, step, dr, aoffset, direction, accent) {
  push();
  translate(200, 200);

  noStroke();
  const da = TWO_PI / step;
  const r1 = r - dr,
    r2 = r + dr;
  for (let i = 0; i < step; i++) {
    const theta = da * i + aoffset;
    const theta2 = direction ? theta - da * 0.5 : theta + da * 0.5;
    const theta3 = direction ? theta - da * 1.5 : theta + da * 1.5;
    const theta4 = direction ? theta - da : theta + da;
    fill(i % 2 == 0 ? c : 255);
    //    if (i % (step / 2 + 1) == 0) fill(accent);
    beginShape();
    vertex(r * cos(theta), r * sin(theta));
    vertex(r1 * cos(theta2), r1 * sin(theta2));
    vertex(r1 * cos(theta3), r1 * sin(theta3));
    vertex(r * cos(theta4), r * sin(theta4));
    vertex(r2 * cos(theta3), r2 * sin(theta3));
    vertex(r2 * cos(theta2), r2 * sin(theta2));
    endShape();
  }
  pop();
}

function cultureWheel(r0, step, dr, aoffset, direction, c, cx, cy) {
  push();
  translate(cx, cy);
  noStroke();

  let rs = [];
  for (let i = 0; i < step; i++) rs.push(r0 * random(0.9, 1.05));

  const da = TWO_PI / step;
  for (let i = 0; i < step; i++) {
    const r = rs[(i + 1) % step], r1 = r - dr, r2 = r + dr;
    const pr = rs[i], pr1 = pr - dr, pr2 = pr + dr;
    const theta = da * i + aoffset;
    const theta2 = direction ? theta - da * 0.5 : theta + da * 0.5;
    const theta3 = direction ? theta - da * 1.5 : theta + da * 1.5;
    const theta4 = direction ? theta - da : theta + da;
    fill(i % 2 == 0 ? c : color(255, 64));

    beginShape();
    vertex(r * cos(theta), r * sin(theta));
    vertex(r1 * cos(theta2), r1 * sin(theta2));
    vertex(pr1 * cos(theta3), pr1 * sin(theta3));
    vertex(pr * cos(theta4), pr * sin(theta4));
    vertex(pr2 * cos(theta3), pr2 * sin(theta3));
    vertex(r2 * cos(theta2), r2 * sin(theta2));
    endShape();
  }
  pop();
}

function fillTile(size, n) {
  push();
  noFill();
  noStroke();
  strokeWeight(2);
  const m = (width - size * n) / (n + 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const x = (size + m) * i + m;
      const y = (size + m) * j + m;
      if (squareDist(200, 200, x, y, size) < 180) {
        const randomColor = cs[floor(random(cs.length))];
        fill(randomColor);
        if (random(100) < 10) {} else {
          rect(x, y, size, size);
        }
      }
    }
  }
  pop();
}

function squareDist(x, y, sx, sy, size) {
  return dist(x, y, sx + size / 2, sy + size / 2);
}

function fillHexagon(r) {
  const d = r * sqrt(3);
  for (let x = 0; x < width; x += d) {
    for (let y = 0, count = 0; y < height; y += r * 1.5, count++) {
      const hx = count % 2 == 0 ? x : x + d / 2;
      hexagonIT(hx, y, r);
    }
  }
}

function hexagonIT(cx, cy, r) {
  push();
  noFill();
  for (let i = 0; i < 6; i++) {
    const theta = TWO_PI * i / 6 + HALF_PI;
    const theta2 = TWO_PI * (i + 1) / 6 + HALF_PI
    const x = cx + r * cos(theta);
    const y = cy + r * sin(theta);
    const x2 = cx + r * cos(theta2);
    const y2 = cy + r * sin(theta2);
    stroke(cs1[floor(random(cs1.length))]);
    strokeWeight(random(2, 20));
    line(x, y, x2, y2);
  }
  fill(cs1[floor(random(cs1.length))]);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(r);
  textFont("Arial");
  textStyle(BOLD);
  pop();
}

function hexagon(cx, cy, r) {
  push();
  noFill();
  stroke(cs[floor(random(cs.length))]);
  beginShape();
  for (let i = 0; i < 6; i++) {
    const theta = TWO_PI * i / 6 + HALF_PI;
    const x = cx + r * cos(theta);
    const y = cy + r * sin(theta);
    vertex(x, y);
  }
  endShape(CLOSE);
  fill(c);
  textAlign(CENTER, CENTER);
  textSize(r);
  textFont("Arial");
  textStyle(BOLD);
  text(randomCharacter("ITITITIT文化"), cx, cy);
  pop();
}

function randomCharacter(s) {
  return s[floor(random(s.length))];
}