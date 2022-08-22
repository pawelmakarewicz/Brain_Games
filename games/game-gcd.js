import { greating, quiz } from '../src/index.js';

function gcd(a, b) {
  if (a === 0) { return b; }
  return gcd(b % a, a);
}

const findGcd = (string) => {
  const splitString = string.split(' ');
  const fisrtNumber = Number(splitString[0]);
  const secondNumber = Number(splitString[1]);
  const result = gcd(fisrtNumber, secondNumber);
  return result.toString();
};

function gameGsd() {
  const questionsAmount = 3;
  const questions = Array.from(Array(questionsAmount)).map(() => `${Math.floor(Math.random() * 100)} ${Math.floor(Math.random() * 100)}`);
  const answers = questions.map((item) => findGcd(item));
  const userName = greating();
  const rule = 'Find the greatest common divisor of given numbers.';
  console.log(rule);
  return quiz(questions, answers, userName);
}
export default gameGsd;
