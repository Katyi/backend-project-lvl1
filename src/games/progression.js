import game from '../index.js';
import { randomInteger, limitOfAnswers } from '../utils.js';

const task = 'What number is missing in the progression?';

const collectGameData = () => {
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const progressionArr = [];
    const firstProgressionNumber = randomInteger();
    const difference = randomInteger();
    const progressionLimit = 9;
    const huddenNumberIndex = randomInteger(0, progressionLimit - 1);
    for (let j = 0; j < progressionLimit; j += 1) {
      progressionArr[j] = firstProgressionNumber + difference * j;
    }
    const res = progressionArr[huddenNumberIndex];
    progressionArr[huddenNumberIndex] = '..';
    const question = progressionArr.join(' ');
    const answer = res.toString();
    gameData.push([question, answer]);
  }
  return gameData;
};

const progression = () => game(task, collectGameData);

export default progression;
