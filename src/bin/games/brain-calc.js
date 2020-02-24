#!/usr/bin/env node
import { Game, randNumber, randomInteger } from '../../index.js';

const task = 'What is the result of the expression?';

const GameData = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randNumber();
    const number2 = randNumber();
    const opindex = randomInteger(1, 3);
    let question;
    let res;
    switch (opindex) {
      case 1:
        res = number1 + number2;
        question = `${number1} + ${number2}`;
        break;
      case 2:
        res = number1 - number2;
        question = `${number1} - ${number2}`;
        break;
      case 3:
        res = number1 * number2;
        question = `${number1} * ${number2}`;
        break;
      default:
        break;
    }
    const res1 = res.toString();
    arr.push([question, res1]);
  }
  return arr;
};

const calcGame = (name) => Game(task, GameData(), name);

export default calcGame;
