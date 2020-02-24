#!/usr/bin/env node
import { Game, randNumber, randomInteger } from '../../index.js';

const task = 'What number is missing in the progression?';

const GameData = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const arr1 = [];
    const number1 = randNumber();
    const number2 = randNumber();
    const number3 = randomInteger(0, 9);
    arr1.push(number1);
    for (let j = 0; j < 9; j += 1) {
      arr1.push(arr1[j] + number2);
    }
    const res = arr1[number3];
    arr1[number3] = '..';
    const question = `${arr1[0]} ${arr1[1]} ${arr1[2]} ${arr1[3]} ${arr1[4]} ${arr1[5]} ${arr1[6]} ${arr1[7]} ${arr1[8]} ${arr1[9]}`;
    const res1 = res.toString();
    arr.push([question, res1]);
  }
  return arr;
};

const progressionGame = (name) => Game(task, GameData(), name);

export default progressionGame;
