import { useState, useMemo } from 'react';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import { quizData } from './data/gameData';
import './App.css';

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [gameState, setGameState] = useState('start');
  const [finalScore, setFinalScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  // Settings
  const [mode, setMode] = useState('multiple'); // 'multiple' | 'text'
  const [category, setCategory] = useState('all'); // 'all' | 'drink' | 'dessert'
  const [questionCount, setQuestionCount] = useState(10);

  const counts = useMemo(() => ({
    all: quizData.length,
    drink: quizData.filter(q => q.category === 'drink').length,
    dessert: quizData.filter(q => q.category === 'dessert').length,
  }), []);

  const startGame = () => {
    let pool = quizData;
    if (category !== 'all') {
      pool = quizData.filter(q => q.category === category);
    }
    const count = Math.min(questionCount, pool.length);
    const randomQuestions = shuffleArray(pool).slice(0, count).map(q => ({
      ...q,
      choices: shuffleArray(q.choices),
    }));
    setSelectedQuestions(randomQuestions);
    setGameState('playing');
    setFinalScore(0);
    setAnsweredQuestions([]);
  };

  const handleGameEnd = (score, answers) => {
    setFinalScore(score);
    setAnsweredQuestions(answers);
    setGameState('finished');
  };

  const restartGame = () => {
    setGameState('start');
    setFinalScore(0);
    setAnsweredQuestions([]);
    setSelectedQuestions([]);
  };

  return (
    <div className="app">
      <div className="galaxy-bg" />
      {gameState === 'start' && (
        <div className="start-screen">
          <div className="start-hero">
            <h1>카페 퀴즈</h1>
            <p className="start-subtitle">음료 & 디저트 이름 맞추기</p>
          </div>

          <div className="settings-card">
            <div className="setting-group">
              <label className="setting-label">퀴즈 모드</label>
              <div className="toggle-group">
                <button
                  className={`toggle-btn ${mode === 'multiple' ? 'active' : ''}`}
                  onClick={() => setMode('multiple')}
                >
                  객관식
                </button>
                <button
                  className={`toggle-btn ${mode === 'text' ? 'active' : ''}`}
                  onClick={() => setMode('text')}
                >
                  주관식
                </button>
              </div>
            </div>

            <div className="setting-group">
              <label className="setting-label">카테고리</label>
              <div className="toggle-group triple">
                <button
                  className={`toggle-btn ${category === 'all' ? 'active' : ''}`}
                  onClick={() => setCategory('all')}
                >
                  전체 ({counts.all})
                </button>
                <button
                  className={`toggle-btn ${category === 'drink' ? 'active' : ''}`}
                  onClick={() => setCategory('drink')}
                >
                  음료 ({counts.drink})
                </button>
                <button
                  className={`toggle-btn ${category === 'dessert' ? 'active' : ''}`}
                  onClick={() => setCategory('dessert')}
                >
                  디저트 ({counts.dessert})
                </button>
              </div>
            </div>

            <div className="setting-group">
              <label className="setting-label">문제 수</label>
              <div className="toggle-group triple">
                <button
                  className={`toggle-btn ${questionCount === 10 ? 'active' : ''}`}
                  onClick={() => setQuestionCount(10)}
                >
                  10문제
                </button>
                <button
                  className={`toggle-btn ${questionCount === 15 ? 'active' : ''}`}
                  onClick={() => setQuestionCount(15)}
                >
                  15문제
                </button>
                <button
                  className={`toggle-btn ${questionCount === 999 ? 'active' : ''}`}
                  onClick={() => setQuestionCount(999)}
                >
                  전체
                </button>
              </div>
            </div>
          </div>

          <button onClick={startGame} className="btn btn-primary btn-large start-btn">
            게임 시작
          </button>

          <div className="start-footer">
            <p>제한 시간 5분 | 이미지와 설명을 보고 이름을 맞혀보세요!</p>
          </div>
        </div>
      )}

      {gameState === 'playing' && (
        <GameScreen
          questions={selectedQuestions}
          mode={mode}
          onGameEnd={handleGameEnd}
        />
      )}

      {gameState === 'finished' && (
        <ResultScreen
          score={finalScore}
          totalQuestions={selectedQuestions.length}
          answeredQuestions={answeredQuestions}
          onRestart={restartGame}
        />
      )}
    </div>
  );
}

export default App;
