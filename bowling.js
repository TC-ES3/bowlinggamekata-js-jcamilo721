export default class Game {
  _score = 0;
  _rolls = [];

  roll(pins) {
    this._score += pins;
    this._rolls.push(pins);
  }

  score() {
    return this._score;
  }
}
