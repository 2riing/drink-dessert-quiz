import { useState } from 'react';

export default function ShareButton({ score, totalQuestions, reactionTitle }) {
  const [copied, setCopied] = useState(false);

  const shareText = `☕ 카페 음료 & 디저트 퀴즈 결과!\n\n${reactionTitle}\n${totalQuestions}문제 중 ${score}문제 정답! (${((score / totalQuestions) * 100).toFixed(0)}%)\n\n나도 도전해보기:`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '카페 음료 & 디저트 퀴즈 결과!',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        fallbackCopy();
      }
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText + ' ' + window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API not available
    }
  };

  return (
    <button className="share-btn" onClick={handleShare}>
      {copied ? '복사 완료!' : '결과 공유하기'}
    </button>
  );
}
