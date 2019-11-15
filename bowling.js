export default class Game {
  _rolls = [];

  roll(pins) {
    this._rolls.push(pins);
  }

  score() {
    const rolls = this._rolls;
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (rolls[frameIndex] == 10) {
        score += 10 + strikeBonus(rolls, frameIndex);
        frameIndex += 1;
      } else if (isSpare(rolls, frameIndex)) {
        let spare = spareBonus(rolls, frameIndex);
        score += 10 + spare;
        frameIndex += 2;
      } else {
        score = sumOfBallsInFrame(score, rolls, frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }
}
function spareBonus(rolls, frameIndex) {
  return rolls[frameIndex + 2];
}

function sumOfBallsInFrame(score, rolls, frameIndex) {
  score += rolls[frameIndex] + rolls[frameIndex + 1];
  return score;
}

function isSpare(rolls, frameIndex) {
  return rolls[frameIndex] + rolls[frameIndex + 1] == 10;
}

function strikeBonus(rolls, frameIndex) {
  return rolls[frameIndex + 1] + rolls[frameIndex + 2];
}
