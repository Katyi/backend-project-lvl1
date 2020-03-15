import { game, randNumber } from '../../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const findGCD = (x, y) => (x ? findGCD(y % x, x) : y);

const gameData = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randNumber();
    const number2 = randNumber();
    const res = findGCD(number1, number2);
    const res1 = res.toString();
    const question = `${number1} ${number2}`;
    arr.push([question, res1]);
  }
  return arr;
};

const gcdGame = (name) => game(task, gameData(), name);

export default gcdGame;
