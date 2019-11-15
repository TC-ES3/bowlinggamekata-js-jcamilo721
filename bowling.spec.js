// bowling.spec.js
import Game from "./bowling";

test("gutter game", () => {
  const g = new Game();

  for (let i = 0; i < 20; i++) {
    g.roll(0);
  }
});
