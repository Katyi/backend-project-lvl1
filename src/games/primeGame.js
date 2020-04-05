import { game, randomInteger } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const collectGameData = () => {
  const limitOfAnswers = 3;
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const question = randomInteger();
    let rightAnswer = 'yes';
    for (let j = 2; j < question; j += 1) {
      if (question % j === 0) rightAnswer = 'no';
    }
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

const primeGame = () => game(task, collectGameData());

export default primeGame;
