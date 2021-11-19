const init = () => {
  const stage = new createjs.Stage('myCanvas');
  const shape = new createjs.Shape();

  // 赤い円
  shape.graphics.beginFill('#ff0000');
  shape.graphics.drawCircle(0, 0, 50);
  // 緑の円
  shape.graphics.beginFill('#00ff00');
  shape.graphics.drawCircle(100, 0, 50);
  // 青い円
  shape.graphics.beginFill('#0000ff');
  shape.graphics.drawCircle(200, 0, 50);

  shape.graphics.endFill();

  // x, y, 半径
  shape.x = 400;
  shape.y = 400;
  shape.rotation = 45;
  stage.addChild(shape);
  // shape 描画リストに追加する

  stage.update();
  // canvas を最新にする
};

window.addEventListener('load', init);
