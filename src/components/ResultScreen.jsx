import ShareButton from './ShareButton';

function getReaction(score, total) {
  const ratio = score / total;
  if (ratio === 1) return { emoji: '👑', title: '카페 마스터!', sub: '완벽합니다! 바리스타 자격증 도전하세요!' };
  if (ratio >= 0.8) return { emoji: '☕', title: '카페 단골 인정!', sub: '거의 다 맞혔어요! 대단해요!' };
  if (ratio >= 0.6) return { emoji: '🧋', title: '카페 좀 아는 사람!', sub: '꽤 잘 알고 계시네요!' };
  if (ratio >= 0.4) return { emoji: '🍰', title: '카페 초보 탈출 중!', sub: '조금만 더 공부하면 돼요!' };
  if (ratio >= 0.2) return { emoji: '🥤', title: '카페 새내기!', sub: '카페 메뉴판을 좀 더 살펴봐요~' };
  return { emoji: '😅', title: '카페 문 앞에서 돌아간 사람', sub: '괜찮아요, 다시 도전해봐요!' };
}

export default function ResultScreen({ score, totalQuestions, answeredQuestions, onRestart }) {
  const percentage = ((score / totalQuestions) * 100).toFixed(0);
  const reaction = getReaction(score, totalQuestions);
  const correctCount = answeredQuestions.filter(q => q.isCorrect).length;
  const wrongCount = answeredQuestions.filter(q => !q.isCorrect).length;

  return (
    <div className="result-screen">
      <div className="result-header">
        <div className="reaction-emoji">{reaction.emoji}</div>
        <h1 className="reaction-title">{reaction.title}</h1>
        <p className="reaction-sub">{reaction.sub}</p>
      </div>

      <div className="score-card">
        <div className="score-main">
          <span className="score-number">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-total">{totalQuestions}</span>
        </div>
        <div className="score-percent">{percentage}%</div>
        <div className="score-stats">
          <div className="stat correct">
            <span className="stat-num">{correctCount}</span>
            <span className="stat-label">정답</span>
          </div>
          <div className="stat-divider" />
          <div className="stat wrong">
            <span className="stat-num">{wrongCount}</span>
            <span className="stat-label">오답</span>
          </div>
        </div>
      </div>

      <div className="result-actions">
        <ShareButton
          score={score}
          totalQuestions={totalQuestions}
          reactionTitle={reaction.title}
        />
        <button onClick={onRestart} className="btn btn-primary btn-large">
          다시 도전하기
        </button>
      </div>

      <div className="answer-review">
        <h2>정답 확인</h2>
        <div className="answer-list">
          {answeredQuestions.map((question, index) => (
            <div
              key={question.id}
              className={`review-item ${question.isCorrect ? 'correct' : 'incorrect'}`}
            >
              <div className="review-header">
                <span className="review-num">#{index + 1}</span>
                <span className="review-status">
                  {question.isCorrect ? '정답' : '오답'}
                </span>
              </div>
              <div className="review-body">
                <img src={question.image} alt={question.name} className="review-image" />
                <div className="review-info">
                  <div className="review-answer">
                    {question.name}
                  </div>
                  {!question.isCorrect && question.userAnswer && (
                    <div className="review-user-answer">
                      내 답: {question.userAnswer}
                    </div>
                  )}
                  {!question.isCorrect && !question.userAnswer && (
                    <div className="review-user-answer">건너뜀</div>
                  )}
                  {question.explanation && (
                    <div className="review-explanation">
                      {question.explanation}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
