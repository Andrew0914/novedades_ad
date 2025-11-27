import { useState } from "react";
import BuyButton from "./BuyButton";
import ProductGallery from "./ProductGallery";
import whatsappIcon from "../assets/whatssap.png";
import { businessInfo } from "../data";

export default function ProductCard({ p, theme = "mexican" }) {
  const [showGallery, setShowGallery] = useState(false);

  // Use the image array from product data
  const galleryImages = p.img || [];

  const openGallery = () => {
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const openWhatsAppProduct = () => {
    const message = encodeURIComponent(
      `Desde página web 🌎 - ¡Hola! Me interesa el producto: ${p.name} - $${p.price} MXN. ¿Podrían darme más información?`,
    );
    window.open(
      `https://wa.me/${businessInfo.whatsapp}?text=${message}`,
      "_blank",
    );
  };

  return (
    <>
      <div className={`card theme-card-${theme}`}>
        <div className="card-image-container">
          <img
            src={p.img?.[0]}
            alt={p.name}
            className="card-img"
            onClick={openGallery}
          />
          <div className="image-overlay">
            <span className="view-photos">📷 Ver más fotos</span>
          </div>
        </div>

        <div className="card-content">
          <h3 className="card-title">{p.name}</h3>

          <div className="price-section">
            <div className="price">${p.price} MXN</div>
          </div>

          {/* Key Features - More prominent */}
          <div className="main-features">
            <ul className="card-features">
              {p.features.map((f, index) => (
                <li key={`${p.id}-${index}`}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="additional-info">
            <div className="info-item">
              <span className="info-icon">💯</span>
              <span className="info-text">Producto Garantizado</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📅</span>
              <span className="info-text">15 días para que lo pruebes</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="card-contact">
          <button
            className="whatsapp-product-btn"
            onClick={openWhatsAppProduct}
          >
            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
            <div className="whatsapp-content">
              <span className="whatsapp-label">Preguntar por WhatsApp</span>
              <span className="whatsapp-subtitle">Respuesta inmediata</span>
            </div>
          </button>
        </div>

        {/* Buy Buttons */}
        <div className="card-buttons">
          {p.shein && <BuyButton url={p.shein} type="shein" />}
          {p.mercado && <BuyButton url={p.mercado} type="mercado" />}
        </div>
      </div>

      <ProductGallery
        images={galleryImages}
        isOpen={showGallery}
        onClose={closeGallery}
        initialIndex={0}
      />
    </>
  );
}
