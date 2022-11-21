// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;
let fr = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 4;
  vy = 4;
}

function draw(){
  background(160, 192, 255);
  frameRate(fr);
  flower(x, y, 20, 20);
}
  


function mouseClicked(){
  
  while(x < windowWidth && y < windowHeight){
  x += vx;
  y += vy;
  
  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);
  }
 }


function flower(fx, fy, r){
  
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = fx + cos(theta) * r / 2;
    let y = fy + sin(theta) * r / 2;
    vertex(x,y);
    fill(248, 166, 243);
    push();
    noStroke();
    ellipse(x, y, r);
    pop();
  }
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
