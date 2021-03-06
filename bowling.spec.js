// bowling.spec.js
import Game from "./bowling";
let g;

beforeEach(() => (g = new Game()));

function rollMany(rolls, pins) {
  for (let i = 0; i < rolls; i++) {
    g.roll(pins);
  }
}

function rollSpare() {
  g.roll(5);
  g.roll(5);
}

test("gutter game", () => {
  const pins = 0;
  const rolls = 20;
  rollMany(rolls, pins);

  expect(g.score()).toBe(pins);
});

test("all ones", () => {
  rollMany(20, 1);

  expect(g.score()).toBe(20);
});

test("one spare", () => {
  rollSpare();
  g.roll(3);

  rollMany(17, 0);
  expect(g.score()).toBe(16);
});

test("one strike", () => {
  g.roll(10); // strike
  g.roll(3);
  g.roll(4);

  rollMany(16, 0);
  expect(g.score()).toBe(24);
});

test("perfect game", () => {
  rollMany(12, 10);
  expect(g.score()).toBe(300);
});
