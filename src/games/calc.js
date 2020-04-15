import game from '../index.js';
import { randomInteger, limitOfAnswers } from '../utils.js';

const task = 'What is the result of the expression?';

const collectGameData = () => {
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const number1 = randomInteger();
    const number2 = randomInteger();
    const operations = ['+', '-', '*'];
    const question = `${number1} ${operations[i]} ${number2}`;
    let result;
    switch (operations[i]) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        break;
    }
    const rightAnswer = result.toString();
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

const calc = () => game(task, collectGameData);

export default calc;
