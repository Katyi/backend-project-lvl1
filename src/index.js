import readlineSync from 'readline-sync';

const game = (task, gameData, name) => {
  console.log(`${task}`);
  for (let i = 0; i < 3; i += 1) {
    const gameData1 = gameData[i];
    const question = gameData1[0];
    const right = gameData1[1];
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

export { game, randNumber };
