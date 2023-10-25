"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const quizData_1 = require("./quizData");
class Quiz {
    constructor() {
        this.currentIndex = 0;
        this.score = 0;
        this.questions = [];
        this.questions = quizData_1.QuizData.loadQuizData();
    }
    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }
    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            return true;
        }
        return false;
    }
    answerQuestion(answer) {
        if (answer === this.getCurrentQuestion().correctAnswer) {
            this.score++;
            return true;
        }
        return false;
    }
    getScore() {
        return this.score;
    }
}
exports.Quiz = Quiz;
