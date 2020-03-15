import { game, randNumber } from '../../index.js';

const task = 'What is the result of the expression?';
const gameData = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randNumber();
    const number2 = randNumber();
    const opindex = [1, 2, 3];
    let question;
    let res;
    switch (opindex[i]) {
      case 1:
        res = number1 + number2;
        question = `${number1} + ${number2}`;
        break;
      case 2:
        res = number1 - number2;
        question = `${number1} - ${number2}`;
        break;
      case 3:
        res = number1 * number2;
        question = `${number1} * ${number2}`;
        break;
      default:
        break;
    }
    const res1 = res.toString();
    arr.push([question, res1]);
  }
  return arr;
};

const calcGame = (name) => game(task, gameData(), name);
export default calcGame;
