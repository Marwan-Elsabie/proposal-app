import { useState, useEffect } from "react";
import "./App.css";
import confetti from "canvas-confetti";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "65%", left: "55%" });

  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  // 🎉 CONFETTI LOGIC (fires once)
  useEffect(() => {
    if (!accepted) return;

    const duration = 2500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 6,
        spread: 100,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, [accepted]);

  if (accepted) {
    return (
      <div className="container">
        <h1>Biliyordum 😌</h1>
        <p>Bensiz yaşayamazsın ❤️</p>

        <img
          src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
          alt="celebration"
          style={{ width: "320px", borderRadius: "20px" }}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Mutlu Sevgililer Günü ve Yıldönümümüz ❤️</h1>
      <h2>Benimle evlenir misin?</h2>

      <button className="yesBtn" onClick={() => setAccepted(true)}>
        Evet 💍
      </button>

      <button
        className="noBtn"
        style={{ top: noPosition.top, left: noPosition.left }}
        onMouseEnter={moveNoButton}
        onTouchStart={moveNoButton}
      >
        Hayır 😈
      </button>
    </div>
  );
}

export default App;
