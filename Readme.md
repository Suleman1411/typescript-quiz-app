# Space Quiz App

Welcome to the Space Quiz App repository! This simple Node.js and TypeScript application lets you create and take quizzes about space and Earth-related topics. This README will guide you on how to modify the `quizData.json` file to add more quiz questions. It also includes information about negative marking and the MIT License.

## Getting Started

1. Clone or download this repository to your local machine:

   ```bash
   git clone https://github.com/Suleman1411/typescript-quiz-app
   ```
2. Navigate directory

```bash
cd quiz-app
``` 

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the quiz app:

   ```bash
   node index.js
   ```

## Modifying `quizData.json`

The quiz questions and answers are stored in the `quizData.json` file. To add more quiz questions, follow these steps:

1. Open the `quizData.json` file in your favorite text editor.

2. Locate the JSON array that starts with `[` and ends with `]`. This array contains the existing quiz questions.

3. To add a new question, copy and paste the following template and fill in the details:

   ```json
   {
     "question": "Your question here",
     "answers": ["Answer option 1", "Answer option 2", "Answer option 3", "Answer option 4"],
     "correctAnswer": "Correct answer"
   }
   ```

   For example:

   ```json
   {
     "question": "What is the largest moon of Saturn?",
     "answers": ["Ganymede", "Io", "Enceladus", "Titan"],
     "correctAnswer": "Titan"
   }
   ```

4. Make sure to separate each question with a comma `,`.

5. Save the `quizData.json` file.

6. Restart the quiz app by running `npm start` to see the new questions in action.

## Negative Marking

This quiz app features negative marking. When a user answers a question incorrectly, their score is deducted by 1 point.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contribution

If you want to contribute more quiz questions or improve the application, feel free to fork this repository, make your changes, and submit a pull request.

Happy quizzing!
```
