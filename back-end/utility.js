export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - (min) + 1)) + (min);
}

export function userWin(enteredNumber, lastResult) {
    return (Math.floor((enteredNumber + lastResult) / 3)) <= 1
  }