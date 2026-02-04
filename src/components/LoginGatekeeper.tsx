import { useState, useRef } from 'react';
import { Lock, Heart, Sparkles } from 'lucide-react';

interface LoginGatekeeperProps {
  onUnlock: () => void;
}

const LoginGatekeeper = ({ onUnlock }: LoginGatekeeperProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.toLowerCase() === 'kako') {
      setIsUnlocking(true);
      setError(false);

      // Play the music - force it to work
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.loop = true;

        // Try to play immediately
        audioRef.current.play()
          .then(() => {
            console.log('Music playing!');
            // Store reference globally so it persists
            (window as any).globalAudio = audioRef.current;
          })
          .catch(error => {
            console.error('Music error:', error);
            // Retry after a short delay
            setTimeout(() => {
              if (audioRef.current) {
                audioRef.current.play().catch(console.error);
              }
            }, 100);
          });
      }

      // Delay to show the unlock animation
      setTimeout(() => {
        onUnlock();
      }, 1500);
    } else {
      setError(true);
      setPassword('');
      inputRef.current?.focus();

      // Remove shake after animation
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 px-4 ${
        isUnlocking ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, hsl(222 47% 3%) 0%, hsl(220 50% 8%) 50%, hsl(200 40% 5%) 100%)',
      }}
    >
      {/* Background Glow Effects - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-electric/15 rounded-full blur-[80px] md:blur-[120px] animate-cosmic-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-ice/15 rounded-full blur-[70px] md:blur-[100px] animate-cosmic-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-electric/10 rounded-full blur-[60px] md:blur-[90px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Image Container - Larger & Enhanced */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-40 pointer-events-none">
        <img
          src="/images/rem_and_vergil_login.png"
          alt="Rem and Vergil"
          className="max-w-3xl md:max-w-6xl w-full h-auto object-contain hero-login-image animate-pulse-glow scale-100 md:scale-110"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Login Box */}
      <div className={`relative z-10 w-full max-w-md mx-4 fade-in-scale ${error ? 'shake' : ''}`}>
        <div className="glass rounded-xl md:rounded-2xl p-6 sm:p-8 electric-border hover:shadow-glow-electric transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="relative">
                <Lock className="w-10 h-10 md:w-12 md:h-12 text-electric animate-pulse-glow" />
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-ice absolute -top-1 -right-1" />
              </div>
            </div>
            <h1 className="font-cinzel text-2xl sm:text-3xl font-bold glow-text text-foreground mb-2">
              The Gatekeeper
            </h1>
            <p className="text-muted-foreground font-rajdhani text-sm sm:text-base">
              Enter the secret to unlock the surprise...
            </p>
          </div>

          {/* Hint */}
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-6 p-2.5 md:p-3 rounded-lg bg-muted/30 border border-ice/20">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-ice" />
            <span className="text-ice-light font-rajdhani text-xs sm:text-sm">
              Hint: REM's Wifey
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="relative">
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter the secret..."
                className="w-full px-3 py-3 md:px-4 md:py-4 rounded-lg md:rounded-xl bg-cosmic-light/50 border border-electric/30
                         text-foreground placeholder-muted-foreground font-rajdhani text-base md:text-lg
                         focus:outline-none input-glow transition-all duration-300"
                autoFocus
              />
              {error && (
                <p className="absolute -bottom-5 md:-bottom-6 left-0 text-destructive text-xs sm:text-sm font-rajdhani">
                  Wrong password! Try again...
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isUnlocking}
              className="w-full py-3 md:py-4 rounded-lg md:rounded-xl font-cinzel font-semibold text-base md:text-lg
                       bg-gradient-electric text-primary-foreground
                       hover:shadow-glow-electric transition-all duration-300
                       btn-electric disabled:opacity-50 disabled:cursor-not-allowed
                       transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isUnlocking ? (
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                  Unlocking...
                </span>
              ) : (
                'Unlock the Gate'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-muted-foreground text-xs sm:text-sm font-rajdhani">
              "Love is the greatest power."
            </p>
            <p className="text-ice/60 text-[10px] sm:text-xs mt-1 font-rajdhani">
              — For Remmy 💙
            </p>
          </div>
        </div>
      </div>

      {/* Hidden Audio - Persistent */}
      <audio
        ref={audioRef}
        src="/bury_the_light.mp3"
        preload="auto"
        loop
        playsInline
        style={{ display: 'none' }}
      />
    </section>
  );
};

export default LoginGatekeeper;
