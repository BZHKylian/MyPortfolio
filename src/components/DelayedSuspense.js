import React, { useEffect, useState } from 'react';

function DelayedFallback({ fallback, children, minDelay = 1000 }) {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(false);
    }, minDelay);

    return () => clearTimeout(timer);
  }, [minDelay]);

  return (
    <React.Suspense fallback={fallback}>
      {showFallback ? fallback : children}
    </React.Suspense>
  );
}

export default DelayedFallback;
