"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizData = void 0;
const fs_1 = __importDefault(require("fs"));
class QuizData {
    static loadQuizData() {
        const data = JSON.parse(fs_1.default.readFileSync('quizData.json', 'utf8'));
        return data.map((item) => {
            return Object.assign(new QuizData(), item);
        });
    }
}
exports.QuizData = QuizData;
