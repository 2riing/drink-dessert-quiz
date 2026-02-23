import { useState, useCallback, useEffect } from 'react';
import Timer from './Timer';
import MultipleChoice from './MultipleChoice';
import Celebration from './Celebration';

// 이미지 프리로드: 다음 N장을 미리 불러옴
function useImagePreloader(questions, currentIndex, ahead = 3) {
  useEffect(() => {
    for (let i = 1; i <= ahead; i++) {
      const next = currentIndex + i;
      if (next < questions.length) {
        const img = new Image();
        img.src = questions[next].image;
      }
    }
  }, [questions, currentIndex, ahead]);
}

export default function GameScreen({ questions, mode, onGameEnd }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [imageLoaded, setImageLoaded] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex >= questions.length - 1;

  // 다음 3장 이미지 미리 로딩
  useImagePreloader(questions, currentIndex, 3);

  // 문제 바뀌면 이미지 로딩 상태 체크 (캐시에 있으면 스켈레톤 스킵)
  useEffect(() => {
    const img = new Image();
    img.src = currentQuestion.image;
    if (img.complete) {
      setImageLoaded(true);
    } else {
      setImageLoaded(false);
    }
  }, [currentIndex, currentQuestion.image]);

  const processAnswer = useCallback((answer, isCorrect) => {
    const answeredQuestion = {
      ...currentQuestion,
      userAnswer: answer,
      isCorrect
    };

    const newScore = isCorrect ? score + 1 : score;
    const newAnswered = [...answeredQuestions, answeredQuestion];

    setFeedback(isCorrect ? 'correct' : 'wrong');

    const feedbackDelay = isCorrect ? 2500 : 1000;

    // 두 모드 모두 동일: 즉시 피드백 표시 → 딜레이 후 전환
    setTimeout(() => {
      if (isLastQuestion) {
        onGameEnd(newScore, newAnswered);
      } else {
        setAnimating(true);
        setTimeout(() => {
          setScore(newScore);
          setAnsweredQuestions(newAnswered);
          setCurrentIndex(currentIndex + 1);
          setUserAnswer('');
          setShowHint(false);
          setFeedback(null);
          setAnimating(false);
        }, 300);
      }
    }, feedbackDelay);
  }, [currentQuestion, currentIndex, score, answeredQuestions, isLastQuestion, onGameEnd, mode]);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!userAnswer.trim() || feedback) return;
    const isCorrect = userAnswer.trim().toLowerCase() === currentQuestion.name.toLowerCase();
    processAnswer(userAnswer.trim(), isCorrect);
  };

  const handleMultipleChoiceAnswer = useCallback((choice, isCorrect) => {
    processAnswer(choice, isCorrect);
  }, [processAnswer]);

  const handleSkip = () => {
    if (feedback) return;
    const answeredQuestion = {
      ...currentQuestion,
      userAnswer: '',
      isCorrect: false
    };

    const newAnswered = [...answeredQuestions, answeredQuestion];

    if (isLastQuestion) {
      onGameEnd(score, newAnswered);
    } else {
      setAnimating(true);
      setTimeout(() => {
        setAnsweredQuestions(newAnswered);
        setCurrentIndex(currentIndex + 1);
        setUserAnswer('');
        setShowHint(false);
        setFeedback(null);
        setAnimating(false);
      }, 300);
    }
  };

  const handleTimeUp = useCallback(() => {
    const remaining = questions.slice(currentIndex).map(q => ({
      ...q,
      userAnswer: '',
      isCorrect: false
    }));
    onGameEnd(score, [...answeredQuestions, ...remaining]);
  }, [questions, currentIndex, score, answeredQuestions, onGameEnd]);

  return (
    <div className="game-screen">
      <Celebration show={feedback === 'correct'} />
      <div className="game-header">
        <Timer initialTime={300} onTimeUp={handleTimeUp} />
        <div className="game-stats">
          <span className="progress-text">
            {currentIndex + 1} / {questions.length}
          </span>
          <span className="score-text">
            {score}점
          </span>
        </div>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className={`question-card ${animating ? 'exiting' : 'entering'}`}>
        <div className={`image-container${feedback === 'correct' ? ' correct-glow' : ''}`}>
          {!imageLoaded && <div className="image-skeleton" />}
          <img
            src={currentQuestion.image}
            alt="음료 또는 디저트"
            className={`question-image ${imageLoaded ? 'loaded' : ''}`}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
          />
          <span className={`category-badge ${currentQuestion.category}`}>
            {currentQuestion.category === 'drink' ? '음료' : '디저트'}
          </span>
        </div>

        <div className="description-box">
          <p>{currentQuestion.description}</p>
        </div>

        {feedback && mode === 'text' && (
          <div className={`feedback-banner ${feedback}`}>
            {feedback === 'correct' ? '정답!' : `오답! 정답: ${currentQuestion.name}`}
          </div>
        )}

        {mode === 'multiple' ? (
          <MultipleChoice
            choices={currentQuestion.choices}
            correctAnswer={currentQuestion.name}
            onAnswer={handleMultipleChoiceAnswer}
          />
        ) : (
          <>
            {showHint && (
              <div className="hint-display">
                <span className="hint-label">초성 힌트</span>
                <strong>{currentQuestion.hint}</strong>
              </div>
            )}

            <form onSubmit={handleTextSubmit} className="answer-form">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="정답을 입력하세요"
                className="answer-input"
                autoFocus
                disabled={!!feedback}
              />
              <div className="button-group">
                <button type="submit" className="btn btn-primary" disabled={!!feedback}>
                  제출
                </button>
                <button
                  type="button"
                  onClick={() => setShowHint(true)}
                  className="btn btn-hint"
                  disabled={showHint || !!feedback}
                >
                  힌트
                </button>
                <button
                  type="button"
                  onClick={handleSkip}
                  className="btn btn-skip"
                  disabled={!!feedback}
                >
                  건너뛰기
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
