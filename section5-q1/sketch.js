// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  textSize(32);
  textFont('Georgia');
  balloon("I love keyakizaka46", 30, 50, 165, 5, 165);
}

function balloon(t, x, y, r, g, b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  // p = padding 文字と図形の隙間、margin = 図形と外の隙間
  
  fill(r, g, b);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  
  triangle(x + (w + p * 2) * 9 / 10 , y + h + p * 2, 
            x + w + p * 2, y + h + p * 2, 
            x + (w + p * 2) + 5,  y + ( h + p * 2) * 1.5)

  fill(250, 205, 250);
  text(t, x + p, y + (h + p * 2) * 2 / 3);
  // console.log(textDescent());
}
