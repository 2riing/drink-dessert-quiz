import { useEffect, useRef } from 'react';

export default function AdBanner({ slot, format = 'auto' }) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense not loaded
    }
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
