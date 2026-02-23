import { useEffect, useState } from 'react';

const EMOJIS = ['🎉', '🥳', '✨', '🌟', '💫', '🎊', '⭐', '🔥', '💯', '👏'];
const COLORS = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6eb4', '#a855f7', '#f97316'];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

export default function Celebration({ show }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!show) {
      setParticles([]);
      return;
    }

    const newParticles = [];

    // 컨페티 파티클 24개
    for (let i = 0; i < 24; i++) {
      newParticles.push({
        id: i,
        type: 'confetti',
        x: randomBetween(10, 90),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: randomBetween(0, 0.4),
        duration: randomBetween(1.0, 1.8),
        size: randomBetween(6, 12),
        rotation: randomBetween(0, 360),
        drift: randomBetween(-30, 30),
      });
    }

    // 이모지 파티클 5개
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        id: 100 + i,
        type: 'emoji',
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        x: randomBetween(15, 85),
        delay: randomBetween(0, 0.3),
        duration: randomBetween(1.2, 2.0),
        size: randomBetween(20, 32),
      });
    }

    setParticles(newParticles);
  }, [show]);

  if (!show || particles.length === 0) return null;

  return (
    <div className="celebration-overlay">
      {particles.map((p) =>
        p.type === 'confetti' ? (
          <div
            key={p.id}
            className="confetti-particle"
            style={{
              left: `${p.x}%`,
              '--color': p.color,
              '--delay': `${p.delay}s`,
              '--duration': `${p.duration}s`,
              '--size': `${p.size}px`,
              '--rotation': `${p.rotation}deg`,
              '--drift': `${p.drift}px`,
            }}
          />
        ) : (
          <div
            key={p.id}
            className="emoji-particle"
            style={{
              left: `${p.x}%`,
              '--delay': `${p.delay}s`,
              '--duration': `${p.duration}s`,
              fontSize: `${p.size}px`,
            }}
          >
            {p.emoji}
          </div>
        )
      )}
      <div className="celebration-text">NICE!</div>
    </div>
  );
}
