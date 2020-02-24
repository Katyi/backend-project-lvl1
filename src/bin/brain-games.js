#!/usr/bin/env node
import readlineSync from 'readline-sync';
import evenGame from './games/brain-even.js';
import calcGame from './games/brain-calc.js';
import gcdGame from './games/brain-gcd.js';
import progressionGame from './games/brain-progression.js';
import gamePrime from './games/brain-prime.js';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
const games = ['Even number', 'Calculator', 'GDD', 'Arithmetic progression', 'Prime number'];
const Gamenumber = readlineSync.keyInSelect(games, 'Which game?: ');

if (Gamenumber === 0) evenGame(name);
if (Gamenumber === 1) calcGame(name);
if (Gamenumber === 2) gcdGame(name);
if (Gamenumber === 3) progressionGame(name);
if (Gamenumber === 4) gamePrime(name);
