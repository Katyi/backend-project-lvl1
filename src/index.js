import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const game = (task, gameData) => {
  console.log(`${task}`);
  const limitOfAnswers = 3;
  for (let i = 0; i < limitOfAnswers; i += 1) {
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

const randomInteger = (min, max) => {
  if (min !== undefined && max !== undefined) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return Math.ceil(Math.random() * 100);
};

export { game, randomInteger };
