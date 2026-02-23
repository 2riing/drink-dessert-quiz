import { useEffect, useState } from 'react';

export default function Timer({ initialTime, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = timeLeft / initialTime;
  const isUrgent = timeLeft <= 30;

  return (
    <div className="timer">
      <div className="timer-text">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="timer-bar-track">
        <div
          className={`timer-bar-fill ${isUrgent ? 'urgent' : ''}`}
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  );
}
