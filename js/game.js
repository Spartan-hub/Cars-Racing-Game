class Game {
  constructor() {}

  getState() {
    database.ref("gameState").on("value", function (data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }
  start() {
    if (gameState === 0) {
      player = new Player();
      form = new Form();
      player.getCount();
      form.display();
    }
    car1 = createSprite(100, 200);
    car2 = createSprite(300, 200);
    car3 = createSprite(500, 200);
    car4 = createSprite(700, 200);
    cars = [car1, car2, car3, car4];
    car1.addImage("car1", car1Image);
    car2.addImage("car2", car2Image);
    car3.addImage("car3", car3Image);
    car4.addImage("car4img", car4Image);
  }
  play() {
    form.hide();
    Player.GetPlayerInfo();
    console.log(allPlayer);
    background(backgroundImage);
    image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
    if (allPlayer !== undefined) {
      var index = 0;
      var x = 0;
      var y;
      for (var plr in allPlayer) {
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayer[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if (index === player.index) {
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
        }
      }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.update();
    }
    if (player.distance === 3800) {
      game.update(2);
    }
    drawSprites();
  }
}
