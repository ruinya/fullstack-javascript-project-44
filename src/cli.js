import readlineSync from 'readline-sync';

const callName = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};

export default callName;
