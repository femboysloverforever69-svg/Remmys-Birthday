import { useState, useRef, useEffect } from 'react';
import LoginGatekeeper from '../components/LoginGatekeeper';
import Celebration from '../components/Celebration';

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const celebrationRef = useRef<HTMLDivElement>(null);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  useEffect(() => {
    if (isUnlocked && celebrationRef.current) {
      // Smooth scroll with slight delay for better transition
      setTimeout(() => {
        celebrationRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [isUnlocked]);

  return (
    <div className="min-h-screen bg-background">
      {!isUnlocked && <LoginGatekeeper onUnlock={handleUnlock} />}
      
      {isUnlocked && (
        <div ref={celebrationRef}>
          <Celebration />
        </div>
      )}
    </div>
  );
};

export default Index;
