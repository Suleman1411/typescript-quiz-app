import fs from 'fs';

export class QuizData {
  question!: string;
  answers!: string[];
  correctAnswer!: string;

  static loadQuizData(): QuizData[] {
    const data = JSON.parse(fs.readFileSync('quizData.json', 'utf8'));
    return data.map((item: QuizData) => {
      return Object.assign(new QuizData(), item);
    });
  }
}
