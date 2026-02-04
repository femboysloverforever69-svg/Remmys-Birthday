import FloatingStickers from './FloatingStickers';
import SwordSlashes from './SwordSlashes';
import BirthdayCake from './BirthdayCake';
import VergilGallery from './VergilGallery';
import BirthdayLetter from './BirthdayLetter';
import { ChevronDown, Music, VolumeX, Volume2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Celebration = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Get the global audio reference
    const audio = (window as any).globalAudio || document.querySelector('audio');

    if (audio) {
      audioRef.current = audio;

      // Set loop to true to ensure continuous playback
      audio.loop = true;

      // Ensure it keeps playing
      const ensurePlayback = () => {
        if (audio.paused) {
          console.log('Restarting music...');
          audio.play().catch(err => {
            console.log('Audio playback prevented:', err);
          });
        }
      };

      // Immediate check
      ensurePlayback();

      // Add event listeners
      audio.addEventListener('ended', ensurePlayback);

      return () => {
        audio.removeEventListener('ended', ensurePlayback);
      };
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section 
      id="celebration" 
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(180deg, hsl(222 47% 5%) 0%, hsl(220 50% 8%) 50%, hsl(200 40% 5%) 100%)',
      }}
    >
      {/* Floating Stickers Background */}
      <FloatingStickers />

      {/* Vergil Sword Slashes */}
      <SwordSlashes />

      {/* Music Control - Enhanced */}
      <button
        onClick={toggleMute}
        className="fixed top-3 right-3 md:top-4 md:right-4 z-50 p-3 md:p-4 glass rounded-full
                   hover:shadow-glow-electric transition-all duration-500
                   flex items-center gap-1.5 md:gap-2 hover:scale-110 active:scale-95
                   animate-pulse-glow"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        <Music className="w-4 h-4 md:w-5 md:h-5 text-electric animate-pulse" />
        {isMuted ? (
          <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-ice" />
        ) : (
          <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-ice animate-float-gentle" />
        )}
      </button>

      {/* Welcome Header - Enhanced */}
      <div className="pt-12 md:pt-20 pb-6 md:pb-10 px-4 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold glow-text text-foreground mb-4 md:mb-6
                       hover:scale-105 transition-transform duration-500 leading-tight">
            Happiest Birthday to my Rem
          </h1>
          <p className="text-ice font-rajdhani text-lg sm:text-xl md:text-2xl lg:text-3xl animate-pulse-glow">
            A small gift for my precious Remmy
          </p>
        </div>

        <div className="mt-6 md:mt-10 animate-bounce">
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-electric mx-auto drop-shadow-[0_0_15px_rgba(0,180,255,0.8)]" />
        </div>
      </div>

      {/* Cake Section */}
      <div className="relative z-10">
        <BirthdayCake />
      </div>

      {/* Divider - Enhanced */}
      <div className="flex items-center justify-center py-8 md:py-12">
        <div className="w-2/3 md:w-1/3 h-0.5 bg-gradient-to-r from-transparent via-electric to-transparent animate-pulse-glow shadow-glow-electric" />
      </div>

      {/* Gallery Section */}
      <div className="relative z-10">
        <VergilGallery />
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center py-6 md:py-8">
        <div className="w-2/3 md:w-1/3 h-px bg-gradient-to-r from-transparent via-ice to-transparent" />
      </div>

      {/* Letter Section */}
      <div className="relative z-10">
        <BirthdayLetter />
      </div>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 text-center relative z-10">
        <div className="text-muted-foreground font-rajdhani text-xs sm:text-sm">
          <p>Made with 💙 for the most amazing person</p>
          <p className="mt-2 text-electric/50">
            "Bury the Light" plays in the background~
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Celebration;
