import { greating, quiz } from '../src/index.js';

function gameEven() {
  const numberAmount = 3;
  const questions = Array.from(Array(numberAmount)).map(() => Math.floor(Math.random() * 100));
  const answers = questions.map((item) => ((item % 2 === 0) ? 'yes' : 'no'));
  const userName = greating();
  const rule = console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return quiz(questions, answers, userName);
}

export { gameEven };
