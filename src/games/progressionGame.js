import { game, randomInteger } from '../index.js';

const task = 'What number is missing in the progression?';

const collectGameData = () => {
  const limitOfAnswers = 3;
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const progression = [];
    const firstProgressionNumber = randomInteger();
    const difference = randomInteger();
    const progressionLimit = 9;
    const huddenNumberIndex = randomInteger(0, progressionLimit);
    progression.push(firstProgressionNumber);
    for (let j = 0; j < progressionLimit; j += 1) {
      progression.push(progression[j] + difference);
    }
    const res = progression[huddenNumberIndex];
    progression[huddenNumberIndex] = '..';
    const question = progression.join(' ');
    const answer = res.toString();
    gameData.push([question, answer]);
  }
  return gameData;
};

const progressionGame = () => game(task, collectGameData());

export default progressionGame;
