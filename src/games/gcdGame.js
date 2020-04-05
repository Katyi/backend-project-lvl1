import { game, randomInteger } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const findGCD = (x, y) => (x ? findGCD(y % x, x) : y);

const collectGameData = () => {
  const limitOfAnswers = 3;
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const number1 = randomInteger();
    const number2 = randomInteger();
    const result = findGCD(number1, number2);
    const rightAnswer = result.toString();
    const question = `${number1} ${number2}`;
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

const gcdGame = () => game(task, collectGameData());

export default gcdGame;
