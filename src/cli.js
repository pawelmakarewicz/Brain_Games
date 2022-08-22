import readLineSync from 'readline-sync';

const greating = () => {
  const userName = readLineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};
export default greating;
