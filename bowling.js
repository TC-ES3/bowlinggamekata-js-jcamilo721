export default class Game {
  _score = 0;
  _rolls = [];

  roll(pins) {
    this._score += pins;
    this._rolls.push(pins);
  }

  score() {
    let score = 0;
    for (let i = 0; i < this._rolls.length; i++) {
      score += this._rolls[i];
    }
    return score;
  }
}
