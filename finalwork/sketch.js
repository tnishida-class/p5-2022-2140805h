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

// (ジャンプする)
// // const g = 1;     // 重力（いろいろな値を試してみましょう）
// const jump = 20; // ジャンプ力（いろいろな値を試してみましょう）
// const ground = 20;
// const size = 20;

// let x, y, vy;

// function setup() {
//   createCanvas(400, 400);
  
//   x = width / 2;
//   y = height - ground - size / 2;
//   vy = 0;
// }

// function draw() {
//   background(220);
  
//   let gy = height - ground;
//   line(0, gy, width, gy); // 地面の線
  
//   ellipse(x, y, size, size);
  
//   y += vy;

  
//   if(y < height - ground - size / 2){ // 地面より上、つまり空中にいる
//     vy += g; // 下方向に重力の影響で加速する
//   }
//   else{
//     vy = 0;
//     y = height - ground - size / 2;
//   }
// }

// function mousePressed(){
//   if(y >= height - ground - size / 2){ // 地面にいるときだけジャンプできる（この条件をなくせば空中ジャンプが可能になります）
//     vy = -jump;     
//   }
// }

// (重力・床に弾む)
// let x, y, vx, vy;
// const g = 1; // 重力
// const vyMax = 30;

// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   x = width / 2;
//   y = height / 2;
//   vx = 2;
//   vy = 2;
// }

// function draw(){
//   background(160, 192, 255);
//   ellipse(x, y, 30);
//   x += vx;
//   y += vy;
//   vy += g; // 重力は「速度の変化量」
//   vy = constrain(vy, -vyMax, vyMax); // 速度が大きくなりすぎないように調整
//   if(y < 0 || y > height){ vy = -1 * vy; }
//   y = constrain(y, 0, height);
// }


let flowers = [];
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < flowers.length; i++){
    let f = flowers[i];
    flower(f.fx, f.fy, f.r);
    f.fx += f.vx;
    f.fy += f.vy;
  }
}

console.log(flowers.length)

// function mouseDragged(){
//   const dx = mouseX - pmouseX;
//   const dy = mouseY - pmouseY;
//   if(mag(dx, dy) > 5){
//     const f = { 
//       fx: mouseX, 
//       fy: mouseY, 
//       r: random(5, 30), 
//       vx: dx, 
//       vy: dy };
//     flowers.push(f);
//   }
// }


 

  function mouseClicked(){
   
    
      const f = { 
        fx: mouseX, 
        fy: mouseY, 
        r: random(5, 30), 
        vx: 8, 
        vy: constrain(8 + g, -vyMax, vyMax) };
      flowers.push(f);
    
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