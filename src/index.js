import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

const randNumber = () => Math.ceil(Math.random() * 100);

const evenGame = () => {
  const actual = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
  const actual = askName();
  console.log('What is the result of the expression?');
  let i = 0;

  while (i !== 3) {
    const question1 = randNumber();
    const question2 = randNumber();
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

const findGCD = (x, y) => (x ? findGCD(y % x, x) : y);

const gcdGame = () => {
  const actual = askName();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;

  while (i !== 3) {
    const question1 = randNumber();
    const question2 = randNumber();
    const res = findGCD(question1, question2);
    console.log(`Question: ${question1} ${question2}`);
    const UserRespond1 = readlineSync.question('Your answer: ');
    const res2 = res.toString();

    if (UserRespond1 === res2) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${UserRespond1}' is wrong answer ;(. Correct answer was '${res}'. \nLet's try again, ${actual}!`);
      return;
    }
  }
  console.log(`Congratulations, ${actual}!`);
};

const progressionGame = () => {
  const actual = askName();
  console.log('What number is missing in the progression?');
  let i = 0;

  while (i !== 3) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const number1 = randNumber();
    const number2 = randNumber();
    const number3 = randomInteger(0, 9);
    arr[0] = number1;
    for (let j = 0; j < 9; j += 1) {
      arr[j + 1] = arr[j] + number2;
    }
    const res = arr[number3];
    arr[number3] = '..';
    console.log(`Question: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]}`);
    const UserRespond1 = readlineSync.question('Your answer: ');
    const res2 = res.toString();

    if (UserRespond1 === res2) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${UserRespond1}' is wrong answer ;(. Correct answer was '${res}'. \nLet's try again, ${actual}!`);
      return;
    }
  }
  console.log(`Congratulations, ${actual}!`);
};

const primeGame = () => {
  const actual = askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;

  while (i !== 3) {
    const number1 = randNumber();
    let res = 'yes';
    for (let j = 2; j < number1; j += 1) {
      if (number1 % j === 0) {
        res = 'no';
      }
    }
    console.log(`Question: ${number1}`);
    const UserRespond1 = readlineSync.question('Your answer: ');

    if (UserRespond1 === res) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${UserRespond1}' is wrong answer ;(. Correct answer was '${res}'. \nLet's try again, ${actual}!`);
      return;
    }
    console.log(`Congratulations, ${actual}!`);
  }
};

export {
  evenGame as default,
  askName, calcGame, gcdGame,
  progressionGame, primeGame,
};
