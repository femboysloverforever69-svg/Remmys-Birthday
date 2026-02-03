const SwordSlashes = () => {
  // Generate multiple sword slashes at different positions
  const slashes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: 10 + Math.random() * 80,
    top: 10 + Math.random() * 80,
    rotation: -60 + Math.random() * 120,
    delay: i * 0.5,
    type: i % 3, // Different animation types
  }));

  const judgmentCuts = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    left: 20 + Math.random() * 60,
    top: 20 + Math.random() * 60,
    delay: i * 1.5,
  }));

  const trailingSlashes = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    top: 15 + i * 15,
    delay: i * 0.8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Horizontal Vergil Slashes */}
      {slashes.map((slash) => (
        <div
          key={`slash-${slash.id}`}
          className="vergil-slash absolute"
          style={{
            left: `${slash.left}%`,
            top: `${slash.top}%`,
            transform: `rotate(${slash.rotation}deg)`,
            animationDelay: `${slash.delay}s`,
            animationDuration: `${1.8 + (slash.type * 0.3)}s`,
          }}
        />
      ))}

      {/* Judgment Cut Effects - Vertical/Cross Slashes */}
      {judgmentCuts.map((cut) => (
        <div
          key={`cut-${cut.id}`}
          className="judgment-cut-effect absolute"
          style={{
            left: `${cut.left}%`,
            top: `${cut.top}%`,
            animationDelay: `${cut.delay}s`,
          }}
        />
      ))}

      {/* Trailing Cross Slashes */}
      {trailingSlashes.map((trail) => (
        <div
          key={`trail-${trail.id}`}
          className="slash-trail absolute"
          style={{
            top: `${trail.top}%`,
            left: '-20%',
            animationDelay: `${trail.delay}s`,
          }}
        />
      ))}

      {/* Additional Accent Slashes - Faster, Brighter */}
      <div
        className="vergil-slash absolute"
        style={{
          top: '25%',
          left: '15%',
          transform: 'rotate(30deg)',
          animationDelay: '0.3s',
          animationDuration: '1.2s',
          filter: 'brightness(2)',
        }}
      />
      <div
        className="vergil-slash absolute"
        style={{
          top: '70%',
          right: '10%',
          transform: 'rotate(-50deg)',
          animationDelay: '1.5s',
          animationDuration: '1.5s',
          filter: 'brightness(1.8)',
        }}
      />
      <div
        className="judgment-cut-effect absolute"
        style={{
          top: '45%',
          left: '50%',
          animationDelay: '2s',
          animationDuration: '2.5s',
          filter: 'brightness(2.2)',
        }}
      />
    </div>
  );
};

export default SwordSlashes;
