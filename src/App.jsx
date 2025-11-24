import { useState, useEffect, useRef } from "react";
import { products } from "./data";
import logo from "./assets/logo.png";
import whatsappIcon from "./assets/whatssap.png";
import facebookIcon from "./assets/facebook.png";
import mercadoIcon from "./assets/mercado.jpg";
import sheinIcon from "./assets/shein.png";
import metroIcon from "./assets/metro.png";
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
  const month = now.getMonth() + 1;
  const day = now.getDate();

  if (month <= 6) return "generic";
  if (month === 7 || month === 8 || (month === 9 && day <= 16))
    return "mexican";
  if ((month === 9 && day >= 17) || (month === 10 && day <= 20))
    return "halloween";
  if ((month === 10 && day >= 21) || month === 11 || month === 12)
    return "christmas";
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

  // Trigger emoji rain automatically when page loads
  useEffect(() => {
    if (currentTheme) {
      const timer = setTimeout(() => {
        triggerThemeEffects();
      }, 1000); // Wait 1 second after theme is set

      return () => clearTimeout(timer);
    }
  }, [currentTheme]);

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

  const triggerThemeEffects = () => {
    // Trigger rain and sound effects
    setShowRain(false);
    const showTimer = setTimeout(() => {
      setShowRain(true);
    }, 100);

    const hideTimer = setTimeout(() => {
      setShowRain(false);
    }, 6100);

    // Play theme sound
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
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

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa ver sus luces LED. ¿Podrían darme más información?",
    );
    window.open(`https://wa.me/5215512345678?text=${message}`, "_blank");
  };

  const callPhone = () => {
    window.open("tel:+5215512345678");
  };

  return (
    <div className={`container theme-${currentTheme}`}>
      <div className="header-section">
        <div className="logo-section">
          <div className="logo-container">
            <img src={logo} alt="Novedades A&D" className="logo" />
            <div className="led-ring">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`led-light led-${i}`}
                  style={{
                    "--rotation": `${i * 30}deg`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="title-section">
            <h1 className="header-title">Novedades A&D</h1>
            <p className="sub">✨ Especialistas en Luces LED ✨</p>
            <p className="location">
              📍 CDMX • Entregas en estaciones de metro Sábado y Domingo -
              🕒12:00 PM - 8:00 PM
            </p>
          </div>
          {currentThemeDisplay()}
        </div>
      </div>

      {/* Contact & Purchase Section - Condensed */}
      <div className="contact-purchase-condensed">
        <div className="contact-minimal">
          <h4>📞 Contacto</h4>
          <button className="whatsapp-compact" onClick={openWhatsApp}>
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="platform-icon-small"
            />
            WhatsApp: 551-234-5678
          </button>
        </div>
        <div className="purchase-minimal">
          <h4>🛒 Comprar en</h4>
          <div className="purchase-options">
            <a
              href="https://www.facebook.com/marketplace"
              target="_blank"
              rel="noopener noreferrer"
              className="purchase-item purchase-link"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="platform-icon-tiny"
              />
              Facebook
            </a>
            <a
              href="https://www.mercadolibre.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="purchase-item purchase-link"
            >
              <img
                src={mercadoIcon}
                alt="MercadoLibre"
                className="platform-icon-tiny"
              />
              MercadoLibre
            </a>
            <a
              href="https://shein.com"
              target="_blank"
              rel="noopener noreferrer"
              className="purchase-item purchase-link"
            >
              <img src={sheinIcon} alt="Shein" className="platform-icon-tiny" />
              Shein
            </a>
            <button
              onClick={openWhatsApp}
              className="purchase-item purchase-link metro-contact"
            >
              <img src={metroIcon} alt="Metro" className="platform-icon-tiny" />
              Metro CDMX
            </button>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}

      {/* Products Section */}
      <div className="products-section">
        <h2 className="section-title">Nuestros Productos</h2>
        <div className="grid">
          {products.map((p, index) => (
            <ProductCard key={`${p.id}-${index}`} p={p} theme={currentTheme} />
          ))}
        </div>
      </div>

      {/* Contact Section - Complete */}
      <div className="contact-section">
        <h2 className="contact-title">📞 Contáctanos para pedidos</h2>
        <div className="contact-buttons">
          <button className="whatsapp-btn" onClick={openWhatsApp}>
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="contact-icon-img"
            />
            <div className="contact-info">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-number">551-234-5678</span>
            </div>
          </button>
        </div>
        <div className="business-hours">
          <span className="hours-icon">🚇</span>
          <span className="hours-text">
            Entregas: Sábados y Domingos en estaciones de metro CDMX
          </span>
        </div>
        <div className="sales-info">
          <p>
            🛒 <strong>También vendemos en:</strong>
          </p>
          <p>• MercadoLibre México</p>
          <p>• Shein México</p>
          <p>• Facebook Marketplace</p>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="reviews-section">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <div className="reviews-grid">
          <div className="review">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              "Excelente calidad y muy buen precio. Las luces llegaron rápido y
              funcionan perfecto."
            </p>
            <span className="reviewer">- María G., Guadalajara</span>
          </div>
          <div className="review">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              "Muy recomendable, la atención es muy buena y me ayudaron a elegir
              las luces perfectas."
            </p>
            <span className="reviewer">- Carlos R., Monterrey</span>
          </div>
          <div className="review">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              "Compré para mi negocio y quedé muy satisfecha. Buena calidad y
              garantía."
            </p>
            <span className="reviewer">- Ana L., CDMX</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq">
            <h3>¿Hacen envíos a toda la República?</h3>
            <p>Sí, comprando a través de Shein o Mercado Libre</p>
          </div>
          <div className="faq">
            <h3>¿Qué garantía tienen los productos?</h3>
            <p>
              Los productos son revisados por nuestro equipo de calidad antes de
              ser enviados, tienes garantía en Mercado Libre y Shein. Si compras
              directamente te damos 15 días para que los revises.
            </p>
          </div>
          <div className="faq">
            <h3>¿Puedo ver los productos antes de comprar?</h3>
            <p>
              ¡Por supuesto! Puedes visitarnos o podemos enviarte videos por
              WhatsApp.
            </p>
          </div>
          <div className="faq">
            <h3>
              ¿En que estaciones del metro de la CDMX entregan y en que horario
              ?
            </h3>
            <p>
              Todas excepto la línea A, entregamos Sábados y Domingos
              únicamente, entre las 12:00 AM y 8:00 PM.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Novedades A&D</h3>
            <p>Tu tienda de confianza para luces LED</p>
            <p>📍 Ciudad de México</p>
            <p>📱 WhatsApp: 551-234-5678</p>
            <div className="metro-info">
              <p>
                🚇 <strong>Entregas en estaciones del metro CDMX</strong>
              </p>
              <p>📅 Sábados y Domingos únicamente</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Nuestro Servicio</h3>
            <div className="payment-info">
              <p>🧪 Productos probados antes de entrega</p>
              <p>📅 15 días para que los pruebes</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Síguenos o compra en:</h3>
            <p>
              <a
                href="https://www.facebook.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                📘 Facebook: Novedades A&D
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/novedades_ad"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                📷 Instagram: @novedades_ad
              </a>
            </p>
            <p>
              <a
                href="https://www.tiktok.com/@novedades_ad"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                📷 Tiktok: @novedades_ad
              </a>
            </p>
            <p>
              <a
                href="https://www.mercadolibre.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                🛒 MercadoLibre: Novedades A&D
              </a>
            </p>
            <p>
              <a
                href="https://shein.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                🛒 Shein: Novedades A&D
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Novedades A&D - Todos los derechos reservados</p>
        </div>
      </div>

      {/* Emoji Rain Effect */}
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

      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp" onClick={openWhatsApp}>
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        <span className="whatsapp-text">¡Escríbenos!</span>
      </div>

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
