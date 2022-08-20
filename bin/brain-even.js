#!/usr/bin/env node
import readLineSync, { question } from 'readline-sync';

console.log('Welcome to the Brain Games!');
const greating = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const userName = greating();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const numberAmount = 3;
const numbers = Array.from(Array(numberAmount)).map(() => Math.floor(Math.random() * 100));
const answers = numbers.map((item) => ((item % 2 === 0) ? 'yes' : 'no'));

function game() {
  for (let i = 0; i < numberAmount; i += 1) {
    const userAnswer = readLineSync.question(`${'Question:'} ${numbers[i]}${'\nYour answer: '}`);
    if (userAnswer === answers[i]) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was '} '${answers[i]}'.${'\nLet\'s try again, '}${userName}!`);
    }
  }
  return console.log(`${'Congratulations, '}${userName}!`);
}
game();
