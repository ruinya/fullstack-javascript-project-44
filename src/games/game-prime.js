import startGame from '../index.js';
import genRandomNum from '../genRandomNum.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeLogic = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const rulQuestAndAns = () => {
  const question = genRandomNum(1, 30);
  const answer = primeLogic(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrimeGame = () => {
  startGame(description, rulQuestAndAns);
};

export default runPrimeGame;
