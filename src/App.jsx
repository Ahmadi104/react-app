/* eslint-disable */
import { useState } from "react";

const questions = [
  {
    questionText: "What is the capital of Afghanistan?",
    answerOptions: [
      { answerText: "Herat", isCorrect: false },
      { answerText: "Kabul", isCorrect: true },
      { answerText: "Ghazni", isCorrect: false },
      { answerText: "Qandhar", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital of Pakistan?",
    answerOptions: [
      { answerText: "Karachi", isCorrect: false },
      { answerText: "Islamabad", isCorrect: true },
      { answerText: "Lahor", isCorrect: false },
      { answerText: "Qandhar", isCorrect: false },
    ],
  },
  {
    questionText: "What is the CEO of Tesla?",
    answerOptions: [
      { answerText: "Mark", isCorrect: false },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "None of them", isCorrect: false },
    ],
  },
  {
    questionText: "What is React js?",
    answerOptions: [
      { answerText: "Library", isCorrect: true },
      { answerText: "Language", isCorrect: false },
      { answerText: "Framework", isCorrect: false },
      { answerText: "Program", isCorrect: false },
    ],
  },
  {
    questionText: "What is the most famous sport in the world?",
    answerOptions: [
      { answerText: "Futsal", isCorrect: false },
      { answerText: "Volleyball", isCorrect: false },
      { answerText: "Running", isCorrect: false },
      { answerText: "Football", isCorrect: true },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setAnswered(false);
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold">Quiz Completed!</h1>
            <p className="mt-4">
              Your score is {score} out of {questions.length}.
            </p>
          </div>
        ) : (
          <>
            <div className="p-2 border rounded text-center font-bold mb-2 text-xl">
              Quiz App
            </div>
            <div className="text-center">
              {questions[currentQuestion].questionText}
            </div>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOption(index, option.isCorrect)}
                className={`block w-full p-2 mt-2 rounded shadow ${
                  answered
                    ? option.isCorrect
                      ? "bg-green-500"
                      : selectedAnswer === index
                      ? "bg-red-400"
                      : ""
                    : ""
                }`}
              >
                {option.answerText}
              </button>
            ))}
            <button
              onClick={nextQuestion}
              className={`${
                answered ? "bg-green-500" : "bg-green-200"
              } w-full mt-2 p-2 rounded block`}
              disabled={!answered}
            >
              Next question
            </button>
            <p className="text-center text-gray-400 text-sm mt-3">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
