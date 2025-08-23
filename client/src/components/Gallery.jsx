import React, { useState, useEffect, useRef } from "react";
import gallery from "../data/gallery";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleOpen = (index) => setCurrentIndex(index);
  const handleClose = () => setCurrentIndex(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex !== null) {
        if (e.key === "ArrowLeft") handlePrev(e);
        if (e.key === "ArrowRight") handleNext(e);
        if (e.key === "Escape") handleClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  // Touch/swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchEndX.current - touchStartX.current > 50) handlePrev(e);
    if (touchStartX.current - touchEndX.current > 50) handleNext(e);
  };

  return (
    <div className="galleryContainer text-center mt-[200px] relative">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-primary relative my-10 inline-block">
        Our Gallery
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-600 mx-auto mt-2"></div>
      </h2>

      {/* Gallery Grid */}
      <div className="media-container">
        {gallery.map((file, index) => (
          <div
            className="media group overflow-hidden cursor-pointer"
            key={file.id}
            onClick={() => handleOpen(index)}
          >
            <img
              src={file.url}
              alt={`Gallery Image ${file.id}`}
              className="media-image transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Popup */}
      {currentIndex !== null && (
        <div
          className="popup-media flex items-center justify-center"
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Arrow */}
          <span
            className="popup-arrow left-5"
            onClick={(e) => { e.stopPropagation(); handlePrev(e); }}
          >
            &#10094;
          </span>

          {/* Image */}
          <img
            src={gallery[currentIndex].url}
            alt={`Gallery Image ${gallery[currentIndex].id}`}
            className="popup-image"
          />

          {/* Next Arrow */}
          <span
            className="popup-arrow right-5"
            onClick={(e) => { e.stopPropagation(); handleNext(e); }}
          >
            &#10095;
          </span>

          {/* Close Button */}
          <span
            className="popup-close"
            onClick={handleClose}
          >
            &times;
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
