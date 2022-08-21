import { greating, quiz } from '../src/index.js';

const calc = (string) => {
  const splitString = string.split(' ');
  const fisrtNumber = Number(splitString[0]);
  const secondNumber = Number(splitString[2]);
  const operationSymbol = splitString[1];
  let result;
  if (operationSymbol === '+') {
    result = fisrtNumber + secondNumber;
  } else if (operationSymbol === '-') {
    result = fisrtNumber - secondNumber;
  } else if (operationSymbol === '*') {
    result = fisrtNumber * secondNumber;
  }
  return result.toString();
};
function gameCalc() {
  const questionsAmount = 3;
  const operations = ['+', '-', '*'];
  const questions = Array.from(Array(questionsAmount)).map(() => `${Math.floor(Math.random() * 20)} ${operations[Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 20)}`);
  const answers = questions.map((item) => calc(item));
  const userName = greating();
  const rule = console.log('What is the result of the expression?');
  return quiz(questions, answers, userName);
}
export { gameCalc };
