import { game, randomInteger } from '../index.js';

const task = 'What is the result of the expression?';

const collectGameData = () => {
  const limitOfAnswers = 3;
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const number1 = randomInteger();
    const number2 = randomInteger();
    const opindex = ['+', '-', '*'];
    let question;
    let result;
    switch (opindex[i]) {
      case '+':
        result = number1 + number2;
        question = `${number1} + ${number2}`;
        break;
      case '-':
        result = number1 - number2;
        question = `${number1} - ${number2}`;
        break;
      case '*':
        result = number1 * number2;
        question = `${number1} * ${number2}`;
        break;
      default:
        break;
    }
    const rightAnswer = result.toString();
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

const calcGame = () => game(task, collectGameData());

export default calcGame;
