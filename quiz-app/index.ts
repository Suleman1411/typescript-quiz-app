import readline from 'readline';
import { Quiz } from './quiz';

const quiz = new Quiz();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  const currentQuestion = quiz.getCurrentQuestion();
  console.log(currentQuestion.question);
  currentQuestion.answers.forEach((answer, index) => {
    console.log(`${index + 1}. ${answer}`);
  });

  rl.question('Your answer (1-4): ', (input) => {
    const answerIndex = parseInt(input) - 1;
    if (quiz.answerQuestion(currentQuestion.answers[answerIndex])) {
      console.log('Correct!\n');
    } else {
      console.log('Incorrect. The correct answer is: ' + currentQuestion.correctAnswer + '\n');
    }

    if (quiz.nextQuestion()) {
      askQuestion();
    } else {
      console.log(`Quiz over! Your score: ${quiz.getScore()}`);
      rl.close();
    }
  });
}

askQuestion();
