import readLineSync from 'readline-sync';

const greating = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

function quiz(questions, answers, user) {
  for (let i = 0; i < questions.length; i += 1) {
    const userAnswer = readLineSync.question(`${'Question:'} ${questions[i]}${'\nYour answer: '}`);
    if (userAnswer === answers[i]) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was '} '${answers[i]}'.${'\nLet\'s try again, '}${user}!`);
    }
  }
  return console.log(`${'Congratulations, '}${user}!`);
}
export { greating, quiz };
