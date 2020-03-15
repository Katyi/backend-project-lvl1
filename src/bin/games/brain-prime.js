import { game, randNumber } from '../../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randNumber();
    let res = 'yes';
    for (let j = 2; j < number1; j += 1) {
      if (number1 % j === 0) res = 'no';
    }
    arr.push([number1, res]);
  }
  return arr;
};

const primeGame = (name) => game(task, gameData(), name);

export default primeGame;
