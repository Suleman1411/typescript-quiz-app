import { QuizData } from './quizData';

export class Quiz {
  private currentIndex: number = 0;
  private score: number = 0;
  private questions: QuizData[] = [];

  constructor() {
    this.questions = QuizData.loadQuizData();
  }

  getCurrentQuestion(): QuizData {
    return this.questions[this.currentIndex];
  }

  nextQuestion(): boolean {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      return true;
    }
    return false;
  }

  answerQuestion(answer: string): boolean {
    if (answer === this.getCurrentQuestion().correctAnswer) {
      this.score++;
      return true;
    }
    return false;
  }

  getScore(): number {
    return this.score;
  }
}
