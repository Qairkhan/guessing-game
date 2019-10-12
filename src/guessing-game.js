class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min=min;
        this.max=max;

    }

    guess() {
        this.average = Math.round((this.min + this.max) / 2);
        return this.average;
    }

    lower() {
        this.max = this.average;
    }

    greater() {

    }
}

module.exports = GuessingGame;
