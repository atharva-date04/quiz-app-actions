import React from 'react';
import type { Question, UserAnswer } from '../types/quiz';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  userAnswers: UserAnswer[];
  questions: Question[];
  onRestart: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  score,
  totalQuestions,
  userAnswers,
  questions,
  onRestart
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getGrade = () => {
    if (percentage >= 80) return { title: 'Outstanding!', color: '#10b981' };
    if (percentage >= 60) return { title: 'Good Job!', color: '#3b82f6' };
    return { title: 'Keep Practicing!', color: '#ef4444' };
  };

  const grade = getGrade();

  return (
    <div className="result-card">
      <div className="result-header">
        <h2 style={{ color: grade.color }}>{grade.title}</h2>
        <p className="result-subtitle">Quiz Completed Successfully</p>
      </div>

      <div className="score-summary">
        <div className="score-circle" style={{ borderColor: grade.color }}>
          <span className="score-number">{score} / {totalQuestions}</span>
          <span className="score-percentage">{percentage}%</span>
        </div>
      </div>

      <div className="answers-breakdown">
        <h3>Question Summary</h3>
        <div className="summary-list">
          {questions.map((q, idx) => {
            const answer = userAnswers.find((a) => a.questionId === q.id);
            const isCorrect = answer?.isCorrect;

            return (
              <div key={q.id} className={`summary-item ${isCorrect ? 'item-correct' : 'item-incorrect'}`}>
                <div className="summary-header">
                  <span className="summary-q-num">Q{idx + 1}</span>
                  <span className="summary-q-text">{q.question}</span>
                </div>
                <div className="summary-details">
                  <p>
                    <strong>Your answer:</strong>{' '}
                    {answer?.selectedOption !== null && answer?.selectedOption !== undefined
                      ? q.options[answer.selectedOption]
                      : 'None (Timed out)'}
                  </p>
                  {!isCorrect && (
                    <p className="correct-answer-text">
                      <strong>Correct answer:</strong> {q.options[q.correctAnswer]}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="restart-btn" onClick={onRestart}>
        Start New Quiz
      </button>
    </div>
  );
};