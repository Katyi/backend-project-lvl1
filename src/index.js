import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  const randNumber = () => Math.ceil(Math.random() * 100);
  let i = 0;

  while (i !== 3) {
    const question = randNumber();
    let Correct = '';
    let Wrong = '';
    console.log(`Question: ${question}`);
    const UserRespond = readlineSync.question('Your answer: ');
    if (question % 2 === 0) {
      Correct = 'yes';
      Wrong = 'no';
    } else {
      Correct = 'no';
      Wrong = 'yes';
    }

    if (UserRespond === Correct) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${Wrong}' is wrong answer ;(. Correct answer was '${Correct}'. \nLet's try again, ${actual}!`);
      return;
    }
  }
  console.log(`Congratulations, ${actual}!`);
};

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('What is the result of the expression?');
  const randNumber1 = () => Math.ceil(Math.random() * 100);
  let i = 0;

  while (i !== 3) {
    const question1 = randNumber1();
    const question2 = randNumber1();
    const opindex = randomInteger(1, 3);
    let operator;
    let res;
    switch (opindex) {
      case 1:
        res = question1 + question2;
        operator = '+';
        break;
      case 2:
        res = question1 - question2;
        operator = '-';
        break;
      case 3:
        res = question1 * question2;
        operator = '*';
        break;
      default:
        break;
    }
    const res1 = res.toString();
    console.log(`Question: ${question1} ${operator} ${question2}`);
    const UserRespond1 = readlineSync.question('Your answer: ');
    if (UserRespond1 === res1) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${UserRespond1}' is wrong answer ;(. Correct answer was '${res}'. \nLet's try again, ${actual}!`);
      return;
    }
  }
  console.log(`Congratulations, ${actual}!`);
};

export { evenGame as default, askName, calcGame };
