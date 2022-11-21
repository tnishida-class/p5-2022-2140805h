// 最終課題を制作しよう

// （めも）
// クリックしたらポーンって花が出るようにしたい
// 花の輪郭をarc？で付けたい


// （作品の要件）
// 繰り返し・条件分岐を意味ある形で使っていること
// →→flower関数で繰り返し
// setup, draw 以外に自作の関数を最低１つ作り、意味ある形で使っていること
// →→flower関数作った
// 以下の３要素のうちの少なくとも１つがあること
// 配列を使っている
// アニメーションをする部分がある
// マウスかキーボードで何かしらの操作ができる
// →→ポーンって出るようにしたら多分全部使う

let flowers = [];
const g = 0.8; // 重力
const vyMax = 30;
let fr = 30;

function setup(){
  
  createCanvas(windowWidth, windowHeight);
  
}

function draw(){
  frameRate(fr);
  background(1, 15, 41);
  
  for(let i = 0; i < flowers.length; i++){
  let f = flowers[i];
  flower(f.x, f.y, f.r);
 
  f.x += f.vx;
  f.y += f.vy;
  f.vy += g; // 重力は「速度の変化量」
  f.vy = constrain(f.vy, -vyMax, vyMax); 

    if(f.y > windowWidth / 2){
      f.vx += random(-1,1);
    }

  }

  if(mouseIsPressed == true){ 
    const f = { x: mouseX, y: mouseY, r: random(5, 20), vx:random(-2, 2) , vy: random(-10, -3) };
    flowers.push(f);
  }
 
  

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}



function flower(fx, fy, r){
  
  // ellipse(fx, fy, r);
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
  // for(var i = 0; i < 5; i++){
  //   let theta = TWO_PI * i * 2 / 5 - HALF_PI;
  //   let x = fx + cos(theta) * r / 2;
  //   let y = fy + sin(theta) * r / 2;
  //   vertex(x,y);
  //   noFill();
  //   ellipse(x, y, r);
  // }
}


// pushとpopがあることで、
// ngmarkだけにnoFillとstrokeWeightが反映されるようになる。
// pushとpopを除くと、starに対しても反映される。