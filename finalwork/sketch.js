// 最終課題を制作しよう

// ≪メモ≫
// 四角じゃないところ（or四角のところ）をまとめて認識（座標を記憶する？）する方法ありますか
// 四角じゃないところからランダムに座標を決めて目標を置けるようにしたい
// 自作の関数は↑でできる？



let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);

  fill(0);
  rect(30, 20, 120, 150);

  fill(255);
  ellipse(x, y, 50);
  
  if(x-50 < 120 && y-50 < 150){
    textSize(32);
    text('game over', width / 2, height / 2);
    }
    else{
      if(keyIsDown(LEFT_ARROW)){ x -= 5; }
      if(keyIsDown(RIGHT_ARROW)){ x += 5; }
      if(keyIsDown(UP_ARROW)){ y -= 5; }
      if(keyIsDown(DOWN_ARROW)){ y += 5; }
    }
    
  }


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}