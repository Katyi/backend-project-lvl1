import { game, randNumber } from '../../index.js';

const task = 'What number is missing in the progression?';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const gameData = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const arr1 = [];
    const number1 = randNumber();
    const number2 = randNumber();
    const number3 = randomInteger(0, 9);
    arr1.push(number1);
    for (let j = 0; j < 9; j += 1) {
      arr1.push(arr1[j] + number2);
    }
    const res = arr1[number3];
    arr1[number3] = '..';
    const question = arr1.join(' ');
    const res1 = res.toString();
    arr.push([question, res1]);
  }
  return arr;
};

const progressionGame = (name) => game(task, gameData(), name);

export default progressionGame;
