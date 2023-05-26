import startGame from '../index.js';
import genRandomNum from '../genRandomNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const rulEvenGame = (num) => num % 2 === 0;

const rulQuestAndAns = () => {
  const numQuestion = genRandomNum(1, 50);
  const answer = rulEvenGame(numQuestion) ? 'yes' : 'no';
  return [numQuestion, answer];
};

const runEvenGame = () => {
  startGame(description, rulQuestAndAns);
};

export default runEvenGame;
