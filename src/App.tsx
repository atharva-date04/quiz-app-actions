import React, { useState, useCallback } from 'react';
import { quizQuestions } from './data/questions';
import type { Question, UserAnswer, QuizStatus } from './types/quiz';
import { Header } from './components/Header';
import { SetupCard } from './components/SetupCard';
import { Timer } from './components/Timer';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';

const QUESTION_TIMER_SECONDS = 30;

export const App: React.FC = () => {
  const [quizStatus, setQuizStatus] = useState<QuizStatus>('setup');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(QUESTION_TIMER_SECONDS);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const startQuiz = (questionCount: number) => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, quizQuestions.length));

    setActiveQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(QUESTION_TIMER_SECONDS);
    setUserAnswers([]);
    setQuizStatus('active');
  };

  const currentQuestion = activeQuestions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;

    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOption: optionIndex,
        isCorrect
      }
    ]);
  };

  const handleTimeUp = useCallback(() => {
    if (isAnswered) return;

    setIsAnswered(true);
    setSelectedOption(null);

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOption: null,
        isCorrect: false
      }
    ]);
  }, [isAnswered, currentQuestion]);

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(QUESTION_TIMER_SECONDS);
    } else {
      setQuizStatus('completed');
    }
  };

  const handleEndQuiz = () => {
    setQuizStatus('completed');
  };

  const handleRestartQuiz = () => {
    setQuizStatus('setup');
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        {quizStatus === 'setup' && (
          <SetupCard
            totalAvailable={quizQuestions.length}
            onStartQuiz={startQuiz}
          />
        )}

        {quizStatus === 'active' && currentQuestion && (
          <div className="quiz-box">
            <div className="quiz-top-bar">
              <span className="score-badge">Score: {score}</span>
              <Timer
                duration={QUESTION_TIMER_SECONDS}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                onTimeUp={handleTimeUp}
                isActive={!isAnswered}
              />
            </div>

            <ProgressBar
              current={currentIndex + 1}
              total={activeQuestions.length}
            />

            <QuestionCard
              questionData={currentQuestion}
              selectedOption={selectedOption}
              isAnswered={isAnswered}
              onSelectOption={handleSelectOption}
            />

            <div className="action-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                type="button"
                onClick={handleEndQuiz}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                End Quiz
              </button>

              {isAnswered && (
                <button
                  className="next-btn"
                  onClick={handleNextQuestion}
                >
                  {currentIndex + 1 === activeQuestions.length
                    ? 'View Results'
                    : 'Next Question →'}
                </button>
              )}
            </div>
          </div>
        )}

        {quizStatus === 'completed' && (
          <ResultCard
            score={score}
            totalQuestions={userAnswers.length || activeQuestions.length}
            userAnswers={userAnswers}
            questions={activeQuestions.slice(0, userAnswers.length)}
            onRestart={handleRestartQuiz}
          />
        )}
      </main>
    </div>
  );
};

export default App;