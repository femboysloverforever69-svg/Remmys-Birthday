const FloatingStickers = () => {
  const stickers = [
    { src: '/images/rem/rem1.png', style: { top: '10%', left: '5%', width: '130px' } },
    { src: '/images/rem/rem2.png', style: { top: '30%', right: '8%', width: '110px' } },
    { src: '/images/rem/rem3.png', style: { bottom: '20%', left: '10%', width: '120px' } },
    { src: '/images/rem/rem4.png', style: { top: '60%', right: '5%', width: '100px' } },
    { src: '/images/rem/rem5.png', style: { bottom: '10%', right: '15%', width: '115px' } },
    { src: '/images/rem/rem6.png', style: { top: '5%', right: '25%', width: '95px' } },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stickers.map((sticker, index) => (
        <img
          key={index}
          src={sticker.src}
          alt={`Rem sticker ${index + 1}`}
          className="sticker absolute transition-all duration-700 hover:scale-110"
          style={{
            ...sticker.style,
            animationDelay: `${index * -3}s`,
            animationDuration: `${18 + index * 2}s`,
            filter: 'drop-shadow(0 0 15px hsl(195 100% 70% / 0.5))',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStickers;
