import React, { useState } from 'react';

interface SetupCardProps {
  totalAvailable: number;
  onStartQuiz: (count: number) => void;
}

export const SetupCard: React.FC<SetupCardProps> = ({
  totalAvailable,
  onStartQuiz,
}) => {
  const [questionCount, setQuestionCount] = useState<number>(10);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuestionCount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validCount = Math.max(10, Math.min(questionCount || 10, totalAvailable));
    onStartQuiz(validCount);
  };

  return (
    <div className="setup-card">
      <div className="setup-header">
        <h2>Quiz Setup</h2>
        <p>Choose the number of questions to test your skills (minimum 10).</p>
      </div>

      <form onSubmit={handleSubmit} className="setup-form">
        <div className="form-group">
          <label htmlFor="question-input">
            Number of Questions (10 - {totalAvailable}):
          </label>
          <input
            id="question-input"
            type="number"
            min={10}
            max={totalAvailable}
            value={questionCount}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-color)',
              color: 'var(--text-main)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
        </div>

        <div className="preset-group">
          <p className="preset-title">Quick Select:</p>
          <div className="preset-buttons">
            {[10, 20, 30, 50].map((preset) => (
              <button
                key={preset}
                type="button"
                className={`preset-btn ${questionCount === preset ? 'active' : ''}`}
                onClick={() => setQuestionCount(preset)}
              >
                {preset} Questions
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="start-btn">
          Start Quiz ({Math.max(10, Math.min(questionCount || 10, totalAvailable))} Questions)
        </button>
      </form>
    </div>
  );
};