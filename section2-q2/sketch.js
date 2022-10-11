// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i + j) % 2 == 0){
      fill(255);
      rect(size * i, size * j, size * (i + 1), size * (j + 1));
    }
    else{
      fill(160);
      rect(size * i, size * j, size * (i + 1), size * (j + 1));
      fill(255, 0, 0);
      ellipse(size * (i + 0.5), size * (j + 0.5), 5);
    }
    
    
    }
  }
}
