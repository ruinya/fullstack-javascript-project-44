import startGame from '../index.js';
import genRandomNum from '../genRandomNum.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdLogic = (numOne, numTwo) => {
  if (!numTwo) {
    return numOne;
  }
  return gcdLogic(numTwo, numOne % numTwo);
};

const rulQuestAndAns = () => {
  const valueFirst = genRandomNum(1, 100);
  const valueSec = genRandomNum(1, 100);
  const question = `${valueFirst} ${valueSec}`;
  const answer = String(gcdLogic(valueFirst, valueSec));
  return [question, answer];
};

const runGcdGame = () => {
  startGame(description, rulQuestAndAns);
};

export default runGcdGame;
