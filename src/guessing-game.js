class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.max = max;
    this.min = min;
  }

  guess() {
    this.guessNum = Math.round((this.max + this.min) / 2);
    return this.guessNum;
  }

  lower() {
    this.max = this.guessNum;
  }

  greater() {
    this.min = this.guessNum;
  }
}

module.exports = GuessingGame;
