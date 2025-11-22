import { useState, useEffect, useRef } from "react";
import { products } from "./data";
import logo from "./assets/logo.png";
import ProductCard from "./components/ProductCard";
import mexicanSound from "./assets/sounds/mexican.m4a";
import halloweenSound from "./assets/sounds/halloween.mp3";
import christmasSound from "./assets/sounds/christmas.mp3";

const themes = {
  generic: {
    name: "Catálogo General",
    icon: "💡",
    colors: ["#4A90E2", "#7B68EE", "#FF6B9D"],
  },
  mexican: {
    name: "Fiesta Mexicana",
    icon: "🇲🇽",
    colors: ["#009639", "#FFFFFF", "#CE1126"],
  },
  halloween: {
    name: "Halloween",
    icon: "🎃",
    colors: ["#FF6B00", "#000000", "#8B008B"],
  },
  christmas: {
    name: "Navidad",
    icon: "🎄",
    colors: ["#8B0000", "#006400", "#B8860B"],
  },
};

const getThemeByDate = () => {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() returns 0-11, we want 1-12
  const day = now.getDate();

  // 01 Jan to 30 June - Generic theme
  if (month <= 6) {
    return "generic";
  }

  // 01 July to 16 Sep - Mexican party theme
  if (month === 7 || month === 8 || (month === 9 && day <= 16)) {
    return "mexican";
  }

  // 17 Sep to 20 Oct - Halloween theme
  if ((month === 9 && day >= 17) || (month === 10 && day <= 20)) {
    return "halloween";
  }

  // 21 Oct to 31 Dec - Christmas theme
  if ((month === 10 && day >= 21) || month === 11 || month === 12) {
    return "christmas";
  }

  // Fallback to generic
  return "generic";
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("generic");
  const [showRain, setShowRain] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const theme = getThemeByDate();
    setCurrentTheme(theme);
  }, []);

  // Remove automatic rain/sound on theme change since we'll trigger manually

  const getThemeSound = () => {
    switch (currentTheme) {
      case "mexican":
        return mexicanSound;
      case "halloween":
        return halloweenSound;
      case "christmas":
        return christmasSound;
      default:
        return null;
    }
  };

  const getDateRangeText = (theme) => {
    switch (theme) {
      case "generic":
        return "Ene-Jun";
      case "mexican":
        return "Jul-Sep 16";
      case "halloween":
        return "Sep 17-Oct 20";
      case "christmas":
        return "Oct 21-Dec";
      default:
        return "";
    }
  };

  const triggerThemeEffects = () => {
    // Trigger rain and sound effects without changing theme
    setShowRain(false);
    const showTimer = setTimeout(() => {
      setShowRain(true);
    }, 100);

    const hideTimer = setTimeout(() => {
      setShowRain(false);
    }, 6100);

    // Play theme sound
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  };

  const currentThemeDisplay = () => {
    return (
      <div className="theme-badge" onClick={triggerThemeEffects}>
        <div className="theme-emoji">{themes[currentTheme].icon}</div>
        <span className="theme-name">{themes[currentTheme].name}</span>
      </div>
    );
  };

  return (
    <div className={`container theme-${currentTheme}`}>
      <div className="decorative-lights">
        <div className="light-string">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`light light-${i % 5}`}></div>
          ))}
        </div>
      </div>

      <div className="header-section">
        <div className="logo-section">
          <img src={logo} alt="Novedades A&D 💖" className="logo" />
          <div className="title-section">
            <h1 className="header-title">Novedades A&D</h1>
            <p className="sub">✨ Catálogo de luces LED ✨</p>
          </div>
          {currentThemeDisplay()}
        </div>
      </div>

      <div className="grid">
        {products.map((p, index) => (
          <ProductCard key={`${p.id}-${index}`} p={p} theme={currentTheme} />
        ))}
      </div>

      {showRain && (
        <div className="emoji-rain" key={`rain-${currentTheme}`}>
          {[...Array(15)].map((_, i) => {
            let emoji = "✨";
            if (currentTheme === "mexican") emoji = ["🇲🇽", "🎉", "🌮"][i % 3];
            else if (currentTheme === "halloween")
              emoji = ["🎃", "👻", "🦇"][i % 3];
            else if (currentTheme === "christmas")
              emoji = ["🎄", "❄️", "🎁"][i % 3];
            else emoji = ["💡", "⭐", "✨"][i % 3];

            return (
              <div
                key={i}
                className="rain-drop"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                {emoji}
              </div>
            );
          })}
        </div>
      )}

      {/* Hidden theme-based audio */}
      {getThemeSound() && (
        <audio
          ref={audioRef}
          src={getThemeSound()}
          style={{ display: "none" }}
          preload="auto"
        />
      )}
    </div>
  );
}
