const init = () => {
  const stage = new createjs.Stage('myCanvas');
  const shape = new createjs.Shape();
  shape.graphics.beginFill('red');
  shape.graphics.drawCircle(0, 0, 100);

  shape.graphics.beginFill('pink');
  shape.graphics.beginStroke('white');
  shape.graphics.setStrokeStyle(15);
  shape.graphics.drawCircle(0, 0, 70);

  shape.graphics.endFill();

  // x, y, 半径
  shape.x = 400;
  shape.y = 400;
  shape.rotation = 360;
  shape.alpha = 0.7;
  shape.visible = true;
  shape.scale = 1.5;
  stage.addChild(shape);
  // shape 描画リストに追加する

  stage.update();
  // canvas を最新にする
};

window.addEventListener('load', init);
