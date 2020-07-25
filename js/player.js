class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.distance = 0;
  }
  getCount() {
    database.ref("playerCount").on("value", (data) => {
      playerCount = data.val();
    });
  }
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }
  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
    });
  }
  static GetPlayerInfo() {
    database.ref("players").on("value", (data) => {
      allPlayer = data.val();
    });
  }
}
