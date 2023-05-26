import startGame from '../index.js';
import genRandomNum from '../genRandomNum.js';

const description = 'What is the result of the expression?';
const actions = ['+', '-', '*'];

const calculateLogic = (action, valueFirst, valueSec) => {
  if (action === actions[0]) {
    return String(valueFirst + valueSec);
  }
  if (action === actions[1]) {
    return String(valueFirst - valueSec);
  }
  if (action === actions[2]) {
    return String(valueFirst * valueSec);
  }
  return `Undefined operator: '${action}'!`;
};

const rulQuestAndAns = () => {
  const valueFirst = genRandomNum(1, 50);
  const valueSec = genRandomNum(1, 50);
  const action = actions[genRandomNum(0, 3)];
  const question = `${valueFirst} ${action} ${valueSec}`;
  const answer = calculateLogic(action, valueFirst, valueSec);
  return [question, answer];
};

const runCalcGame = () => {
  startGame(description, rulQuestAndAns);
};

export default runCalcGame;
