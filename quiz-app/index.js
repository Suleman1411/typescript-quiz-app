"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const quiz_1 = require("./quiz");
const quiz = new quiz_1.Quiz();
const rl = readline_1.default.createInterface({
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
        }
        else {
            console.log('Incorrect. The correct answer is: ' + currentQuestion.correctAnswer + '\n');
        }
        if (quiz.nextQuestion()) {
            askQuestion();
        }
        else {
            console.log(`Quiz over! Your score: ${quiz.getScore()}`);
            rl.close();
        }
    });
}
askQuestion();
