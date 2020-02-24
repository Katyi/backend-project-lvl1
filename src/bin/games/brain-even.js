#!/usr/bin/env node
import { Game, randNumber } from '../../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const GameData = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const number = randNumber();
    if (isEven(number)) arr.push([number, 'yes']);
    else arr.push([number, 'no']);
  }
  return arr;
};

const evenGame = (name) => Game(task, GameData(), name);

export default evenGame;