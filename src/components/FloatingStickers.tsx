const FloatingStickers = () => {
  const stickers = [
    { src: '/images/rem/rem1.png', style: { top: '10%', left: '5%', width: '80px', mdWidth: '110px', lgWidth: '130px' } },
    { src: '/images/rem/rem2.png', style: { top: '30%', right: '8%', width: '70px', mdWidth: '90px', lgWidth: '110px' } },
    { src: '/images/rem/rem3.png', style: { bottom: '20%', left: '10%', width: '75px', mdWidth: '100px', lgWidth: '120px' } },
    { src: '/images/rem/rem4.png', style: { top: '60%', right: '5%', width: '65px', mdWidth: '85px', lgWidth: '100px' } },
    { src: '/images/rem/rem5.png', style: { bottom: '10%', right: '15%', width: '70px', mdWidth: '95px', lgWidth: '115px' } },
    { src: '/images/rem/rem6.png', style: { top: '5%', right: '25%', width: '60px', mdWidth: '80px', lgWidth: '95px' } },
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
            top: sticker.style.top,
            left: sticker.style.left,
            right: sticker.style.right,
            bottom: sticker.style.bottom,
            width: sticker.style.width,
            animationDelay: `${index * -3}s`,
            animationDuration: `${18 + index * 2}s`,
            filter: 'drop-shadow(0 0 15px hsl(195 100% 70% / 0.5))',
          }}
        />
      ))}
      <style>{`
        @media (min-width: 768px) {
          .sticker:nth-child(1) { width: ${stickers[0].style.mdWidth} !important; }
          .sticker:nth-child(2) { width: ${stickers[1].style.mdWidth} !important; }
          .sticker:nth-child(3) { width: ${stickers[2].style.mdWidth} !important; }
          .sticker:nth-child(4) { width: ${stickers[3].style.mdWidth} !important; }
          .sticker:nth-child(5) { width: ${stickers[4].style.mdWidth} !important; }
          .sticker:nth-child(6) { width: ${stickers[5].style.mdWidth} !important; }
        }
        @media (min-width: 1024px) {
          .sticker:nth-child(1) { width: ${stickers[0].style.lgWidth} !important; }
          .sticker:nth-child(2) { width: ${stickers[1].style.lgWidth} !important; }
          .sticker:nth-child(3) { width: ${stickers[2].style.lgWidth} !important; }
          .sticker:nth-child(4) { width: ${stickers[3].style.lgWidth} !important; }
          .sticker:nth-child(5) { width: ${stickers[4].style.lgWidth} !important; }
          .sticker:nth-child(6) { width: ${stickers[5].style.lgWidth} !important; }
        }
      `}</style>
    </div>
  );
};

export default FloatingStickers;
