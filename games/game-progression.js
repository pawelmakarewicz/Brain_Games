import { greating, quiz } from '../src/index.js';

function arrGenerator() {
  const arr = [Math.floor(Math.random() * 100)];
  const progressionNumber = Math.floor(Math.random() * 10);
  const itemNumber = 5;
  for (let i = 0; i <= itemNumber; i += 1) {
    arr.push(arr[i] + progressionNumber);
  }
  const hiddenPosition = Math.floor(Math.random() * (itemNumber - 1));
  const answer = arr[hiddenPosition].toString();
  const elementHide = '..';
  arr[hiddenPosition] = elementHide;
  const question = arr.join(' ');
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
}
function gameProgression() {
  const questionsAmount = 3;
  const questionsAndAnswers = Array.from(Array(questionsAmount)).map(() => arrGenerator());
  const questions = questionsAndAnswers.slice().map((item, index, array) => array[index][0]);
  const answers = questionsAndAnswers.slice().map((item, index, array) => array[index][1]);
  const userName = greating();
  const rule = 'What number is missing in the progression?';
  console.log(rule);
  return quiz(questions, answers, userName);
}

export default gameProgression;
