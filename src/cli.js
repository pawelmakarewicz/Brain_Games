import readLineSync from "readline-sync"
const  greating = () => {
    let userName = readLineSync.question('May I have your name? ');
    return console.log('Hello, ' + userName + '!');
}
export {greating};

