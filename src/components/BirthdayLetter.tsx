import { Heart, Sparkles, Gift } from 'lucide-react';

const BirthdayLetter = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Glow - Enhanced */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-ice/10 rounded-full blur-[150px] animate-cosmic-pulse" />
        <div className="w-[400px] h-[400px] bg-electric/5 rounded-full blur-[100px] animate-pulse-glow absolute" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Letter Container */}
        <div className="letter-container rounded-3xl p-8 md:p-12 fade-in-up hover:shadow-glow-ice transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-ice animate-pulse" />
              <Gift className="w-8 h-8 text-electric animate-float-gentle" />
              <Heart className="w-6 h-6 text-ice animate-pulse" />
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold glow-text text-foreground">
              A Letter For You
            </h2>
            <div className="w-24 h-1 bg-gradient-electric mx-auto mt-4 rounded-full" />
          </div>

          {/* Letter Content */}
          <div className="space-y-6 font-rajdhani text-lg text-foreground/90 leading-relaxed">
          <p className="text-ice text-xl">

              My Dear Remmy,

            </p>



            <p>

              Wishing you a very HAPPY BIRTHDAY✨, I hope u like this small website I tried to make.

              As an AI Geek and User, I tried my very best to make it look goodie,

              And I hope u like it 💌.

            </p>



            <p>

              I am very sorry to leave for my gae ass exams like that without notice.

              I missed you a lot, and I was very glad that my exams were not on your Birthday,

              And I got some days to try to make this small present for you🎀.

            </p>



            <p>

              Last year, when I didn't know about your birthday, I felt very gae and was feeling sad,

              That you had to remind me yourself about it, but this time I am glad I got my chance to wish you.

              I wish i can give you these kinda or even better presents which u deserve every upcoming year ♥.

            </p>



            <p>

             I pray our bond gets stronger and stronger every day. We share cute moments together, Match Pfp's,

             Play Games, Watch Cute Femboys & Hot Mommies with NOM NOM Abs hehe :), Talk more about stuff going on in our lives.

             Share everything and get to Know Each other more and more 💝.

            </p>

            <p className="text-ice">

              Remember: Eat a Lot. Drink a lot. Enjoy this precious day with Friends & Family 💕

            </p>

            <div className="pt-6 text-center">
              <p className="text-electric font-cinzel text-xl glow-text">
                Happy Birthday, My Sweet Remmy! 🎂✨
              </p>
              <p className="text-muted-foreground mt-4 italic">
                With all my love and cuddles,
              </p>
              <p className="text-ice font-semibold text-lg">
                Your Wifey 💙
              </p>
            </div>
          </div>

          {/* Decorative Footer */}
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(7)].map((_, i) => (
              <Sparkles
                key={i}
                className="w-5 h-5 text-electric/70 animate-pulse-glow"
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Final Quote */}
        <div className="text-center mt-12">
          <p className="text-ice/50 font-rajdhani text-sm">
            "I am your wifey... and I love you so much."
          </p>
          <p className="text-electric/50 font-rajdhani text-sm mt-2">
            "My heart belongs to you, I wubbb u Remmy Mwahhhhhh💖"
          </p>
        </div>
      </div>
    </section>
  );
};

export default BirthdayLetter;
