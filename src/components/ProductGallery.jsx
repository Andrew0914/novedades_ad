import { useState, useEffect } from "react";

export default function ProductGallery({
  images = [],
  isOpen = false,
  onClose = () => {},
  initialIndex = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (!isOpen || images.length === 0) {
    return null;
  }

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="gallery-close" onClick={onClose}>
          ✕
        </button>

        {/* Main Image */}
        <div className="gallery-main">
          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            className="gallery-main-image"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button className="gallery-nav gallery-prev" onClick={prevImage}>
                ❮
              </button>
              <button className="gallery-nav gallery-next" onClick={nextImage}>
                ❯
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="gallery-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="gallery-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`gallery-thumbnail ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToImage(index)}
              >
                <img src={image} alt={`Miniatura ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
