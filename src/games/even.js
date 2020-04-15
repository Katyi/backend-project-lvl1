import game from '../index.js';
import { randomInteger, limitOfAnswers } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const collectGameData = () => {
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const question = randomInteger();
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

const even = () => game(task, collectGameData);

export default even;
