import React, { useEffect } from 'react';

interface TimerProps {
  duration: number;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  onTimeUp: () => void;
  isActive: boolean;
}

export const Timer: React.FC<TimerProps> = ({
  duration,
  timeLeft,
  setTimeLeft,
  onTimeUp,
  isActive
}) => {
  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isActive, onTimeUp, setTimeLeft]);

  const progressPercentage = (timeLeft / duration) * 100;
  const isWarning = timeLeft <= 10;

  return (
    <div className="timer-container">
      <div className="timer-header">
        <span className="timer-label">Time Remaining</span>
        <span className={`timer-value ${isWarning ? 'warning' : ''}`}>
          {timeLeft}s
        </span>
      </div>
      <div className="timer-bar-bg">
        <div
          className={`timer-bar-fill ${isWarning ? 'warning' : ''}`}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};