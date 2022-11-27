// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
    console.log(scores);
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  let lates = [];
  for(let i = 0; i < scores.length; i++){ 
    total += scores[i]; 
    
  // BLANK[1]
    lates[i] = scores[i] / total;
    console.log(total);
    console.log(lates);
  



  arc(200, 200, 200, 200, 0, TWO_PI * lates[i], PIE);
  }
}
