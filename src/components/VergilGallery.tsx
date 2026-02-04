import { Sparkles, Heart, Star, Zap } from 'lucide-react';

const VergilGallery = () => {
  const vergilImages = [
    '/images/vergil/vergil1.png',
    '/images/vergil/vergil2.png',
    '/images/vergil/vergil3.png',
    '/images/vergil/vergil4.png',
    '/images/vergil/vergil5.png',
    '/images/vergil/vergil6.png',
  ];

  const birthdayBoy = [
    { src: '/images/birthday/boy1.png', title: 'My Sexy Boy', subtitle: 'Looking absolutely adorable with kuḥl' },
    { src: '/images/birthday/boy2.png', title: 'Cutu Remmyyy 💙', subtitle: 'So cute eating that appol 🍎 nom nom' },
    { src: '/images/birthday/boy3.png', title: 'The Moggerrr', subtitle: 'Looking absolutely stunning ✨' },
  ];

  return (
    <section className="py-12 md:py-20 px-4 relative">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16 fade-in-up">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-electric animate-pulse-glow" />
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold glow-text text-foreground">
            My Sweet Remmy
          </h2>
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-electric animate-pulse-glow" />
        </div>
        <p className="text-ice font-rajdhani text-base md:text-lg">
          Protected by Vergil with Love and Care Hehe :)
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {birthdayBoy.map((boy, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-4 md:gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            } fade-in-up`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {/* Left Vergil Guard - Visible on all screens */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <img
                  src={vergilImages[index * 2]}
                  alt="Vergil Guard"
                  className="w-24 h-auto md:w-32 lg:w-44 object-contain opacity-80 md:opacity-90
                           group-hover:opacity-100 transition-all duration-700 float filter
                           drop-shadow-[0_0_15px_rgba(0,180,255,0.6)]
                           md:drop-shadow-[0_0_25px_rgba(0,180,255,0.7)]
                           hover:drop-shadow-[0_0_40px_rgba(0,180,255,1)]
                           hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-electric/30 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            </div>

            {/* Center - Birthday Boy Photo */}
            <div className="flex-grow max-w-lg w-full">
              <div className="vergil-guard rounded-xl md:rounded-2xl overflow-hidden p-1 hover:shadow-glow-electric transition-all duration-500">
                <div className="relative overflow-hidden rounded-lg md:rounded-xl group">
                  <img
                    src={boy.src}
                    alt={boy.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover transform group-hover:scale-110
                             transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Photo Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1 md:mb-2">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-ice" />
                      <h3 className="font-cinzel text-lg md:text-2xl font-bold glow-text text-foreground">
                        {boy.title}
                      </h3>
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-ice" />
                    </div>
                    <p className="text-ice/80 font-rajdhani text-sm md:text-base">{boy.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center gap-3 md:gap-4 mt-3 md:mt-4">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 text-electric/60"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Right Vergil Guard - Visible on all screens */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <img
                  src={vergilImages[index * 2 + 1]}
                  alt="Vergil Guard"
                  className="w-24 h-auto md:w-32 lg:w-44 object-contain opacity-80 md:opacity-90
                           group-hover:opacity-100 transition-all duration-700 float-reverse filter
                           drop-shadow-[0_0_15px_rgba(0,180,255,0.6)]
                           md:drop-shadow-[0_0_25px_rgba(0,180,255,0.7)]
                           hover:drop-shadow-[0_0_40px_rgba(0,180,255,1)]
                           hover:scale-110"
                  style={{ animationDelay: '-2s' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-electric/30 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="text-center mt-16">
        <Heart className="w-6 h-6 text-electric mx-auto mb-4" />
        <p className="text-ice/60 font-rajdhani italic text-lg">
          "I need more power... to protect what's precious!"
        </p>
        <p className="text-muted-foreground text-sm mt-1">— Vergil, watching over our sweet Remmy</p>
      </div>
    </section>
  );
};

export default VergilGallery;
