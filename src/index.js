// #!/usr/bin/env node
import readlineSync from 'readline-sync';

const Game = (task, GameData, name) => {
  console.log(`${task}`);
  for (let i = 0; i < 3; i += 1) {
    const GameData1 = GameData[i];
    const question = GameData1[0];
    const right = GameData1[1];
    console.log(`Question: ${question}`);
    const UserRespond = readlineSync.question('Your answer: ');

    if (right !== UserRespond) {
      console.log(`'${UserRespond}' is wrong answer ;(. Correct answer was '${right}'. \nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

const randNumber = () => Math.ceil(Math.random() * 100);

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const findGCD = (x, y) => (x ? findGCD(y % x, x) : y);

export {
  Game, randNumber, randomInteger, findGCD,
};
