import React from 'react';
import type { Question } from '../types/quiz';

interface QuestionCardProps {
  questionData: Question;
  selectedOption: number | null;
  isAnswered: boolean;
  onSelectOption: (index: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  selectedOption,
  isAnswered,
  onSelectOption,
}) => {
  const getOptionClassName = (index: number) => {
    if (!isAnswered) {
      return selectedOption === index ? 'option-btn selected' : 'option-btn';
    }

    if (index === questionData.correctAnswer) {
      return 'option-btn correct';
    }

    if (selectedOption === index && index !== questionData.correctAnswer) {
      return 'option-btn incorrect';
    }

    return 'option-btn disabled';
  };

  return (
    <div className="question-card">
      <h2 className="question-text">{questionData.question}</h2>
      <div className="options-grid">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClassName(index)}
            onClick={() => onSelectOption(index)}
            disabled={isAnswered}
          >
            <span className="option-prefix">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="option-label">{option}</span>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`feedback-box ${selectedOption === questionData.correctAnswer ? 'success' : 'error'}`}>
          {selectedOption === questionData.correctAnswer ? (
            <p><strong>Correct!</strong> Great job.</p>
          ) : selectedOption === null ? (
            <p><strong>Time's up!</strong> The correct answer was: <em>{questionData.options[questionData.correctAnswer]}</em></p>
          ) : (
            <p><strong>Incorrect!</strong> The correct answer was: <em>{questionData.options[questionData.correctAnswer]}</em></p>
          )}
        </div>
      )}
    </div>
  );
};