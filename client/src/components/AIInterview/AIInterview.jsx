import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Wrapper from "./AIInterview.styles";
import { useAppContext } from "../../context/appContext";

const AIInterview = ({ jobId, position }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [interviewComplete, setInterviewComplete] = useState(false);
  const [score, setScore] = useState(0);
  const { displayAlert } = useAppContext();

  const questions = [
    {
      question: `Tell me about your relevant experience for this ${position} position?`,
      keyPoints: ["experience", "skills", "projects", "achievements"],
    },
    {
      question: "What are your key strengths and weaknesses?",
      keyPoints: ["strengths", "weaknesses", "improvement", "self-awareness"],
    },
    {
      question: "Why should we hire you for this position?",
      keyPoints: ["unique value", "contribution", "commitment", "fit"],
    },
  ];

  const handleAnswerSubmit = () => {
    if (!userAnswer.trim()) {
      displayAlert("Please provide an answer", "danger");
      return;
    }

    // Calculate score based on key points mentioned
    const questionKeyPoints = questions[currentQuestion].keyPoints;
    const answerScore = questionKeyPoints.reduce((score, point) => {
      return userAnswer.toLowerCase().includes(point.toLowerCase())
        ? score + 25
        : score;
    }, 0);

    setScore((prevScore) => prevScore + answerScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
    } else {
      setInterviewComplete(true);
    }
  };

  return (
    <Wrapper>
      <div className="interview-container">
        <div className="interview-header">
          <h3>AI Interview for {position}</h3>
          {!interviewComplete && (
            <p className="question-counter">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          )}
        </div>

        {!interviewComplete ? (
          <div className="question-section">
            <h4>{questions[currentQuestion].question}</h4>
            <textarea
              className="answer-input"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={5}
            />
            <div className="answer-controls">
              <button className="submit-btn" onClick={handleAnswerSubmit}>
                <FaPaperPlane /> Submit Answer
              </button>
            </div>
          </div>
        ) : (
          <div className="interview-complete">
            <h3>Interview Completed!</h3>
            <div className="final-score">
              <p>Your Score: {Math.round(score / questions.length)}%</p>
              <div className="score-feedback">
                {score / questions.length >= 75 ? (
                  <p className="good-score">
                    Excellent! You've performed very well in the interview.
                  </p>
                ) : score / questions.length >= 50 ? (
                  <p className="average-score">
                    Good effort! There's room for improvement.
                  </p>
                ) : (
                  <p className="low-score">
                    Consider preparing more thoroughly for future interviews.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default AIInterview;
