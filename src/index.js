class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.mid = 0;
    this.cur = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.mid = Math.round((this.max + this.min) / 2);
    this.cur = this.mid;
    return this.cur;
  }

  lower() {
    this.max = this.cur;
    this.mid = Math.round(this.cur + this.min / 2);
    this.cur = this.mid;
    return this.cur;
  }

  greater() {
    this.min = this.cur;
    this.mid = Math.round(this.max + this.cur / 2);
    this.cur = this.mid;
    return this.cur;
  }
}

module.exports = GuessingGame;
