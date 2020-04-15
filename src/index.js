import readlineSync from 'readline-sync';
import { limitOfAnswers } from './utils.js';

const game = (task, collectGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${task}`);
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const gameData = collectGameData();
    const [question, rightAnswer] = gameData[i];
    console.log(`Question: ${question}`);
    const UserRespond = readlineSync.question('Your answer: ');

    if (rightAnswer !== UserRespond) {
      console.log(`'${UserRespond}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
