import { game, randomInteger } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const collectGameData = () => {
  const limitOfAnswers = 3;
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const question = randomInteger();
    let rightAnswer;
    if (isEven(question)) rightAnswer = 'yes';
    else rightAnswer = 'no';
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

const evenGame = () => game(task, collectGameData());

export default evenGame;
