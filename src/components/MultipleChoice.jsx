import { useState, useEffect } from 'react';

export default function MultipleChoice({ choices, correctAnswer, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  // 문제가 바뀌면 (choices 변경) 상태 리셋
  useEffect(() => {
    setSelected(null);
    setRevealed(false);
  }, [choices]);

  const handleSelect = (choice) => {
    if (revealed) return;
    setSelected(choice);
    setRevealed(true);

    const isCorrect = choice === correctAnswer;
    // 즉시 콜백 → GameScreen에서 피드백/축하 바로 표시
    onAnswer(choice, isCorrect);
  };

  return (
    <div className="choices-grid">
      {choices.map((choice, index) => {
        let className = 'choice-btn';
        if (revealed) {
          if (choice === correctAnswer) className += ' correct';
          else if (choice === selected) className += ' wrong';
          else className += ' dimmed';
        }

        return (
          <button
            key={index}
            className={className}
            onClick={() => handleSelect(choice)}
            disabled={revealed}
          >
            <span className="choice-label">{String.fromCharCode(65 + index)}</span>
            <span className="choice-text">{choice}</span>
          </button>
        );
      })}
    </div>
  );
}
