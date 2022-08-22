import { greating, quiz } from '../src/index.js';

const iter = (number, divider = 2) => {
  if (number === 1) {
    return number;
  }
  if (number % divider === 0) {
    return divider;
  }
  return iter(number, divider + 1);
};
function isPrime(num) {
  const div = iter(num);
  return div === num ? 'yes' : 'no';
}

function gamePrime() {
  const questionsAmount = 3;
  const questions = Array.from(Array(questionsAmount)).map(() => Math.floor(Math.random() * 100));
  const answers = questions.map((number) => isPrime(number));
  const userName = greating();
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(rule);
  return quiz(questions, answers, userName);
}

export { gamePrime };
