import { useState } from "react";
import BuyButton from "./BuyButton";
import ProductGallery from "./ProductGallery";

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
        </div>

        <div className="card-content">
          <h3 className="card-title">{p.name}</h3>
          <p className="price">${p.price} MXN</p>

          <ul className="card-features">
            {p.features.map((f, index) => (
              <li key={`${p.id}-${index}`}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="card-buttons">
          <BuyButton url={p.shein} type="shein" />
          <BuyButton url={p.mercado} type="mercado" />
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
