// bowling.spec.js
import Game from "./bowling";
let g;

beforeEach(() => (g = new Game()));

test("gutter game", () => {
  const pins = 0;
  const rolls = 20;
  for (let i = 0; i < rolls; i++) {
    g.roll(0);
  }

  expect(g.score()).toBe(pins);
});

test("all ones", () => {
  for (let i = 0; i < 20; i++) {
    g.roll(1);
  }

  expect(g.score()).toBe(20);
});
