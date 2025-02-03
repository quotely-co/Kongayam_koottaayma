import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageModal = ({ images, currentIndex, onClose, onPrevious, onNext }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50 z-10"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50 z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <img 
          src={images[currentIndex]} 
          alt={`Gallery item ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
        />
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const images = [
    "/images/news2025.1.jpeg",
    "/images/news2025.2.jpeg",
    "/images/news2025.3.jpeg",
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
    "/images/image7.jpeg",
    "/images/image8.jpeg",
    "/images/image9.jpeg",
    "/images/image10.jpeg",
    "/images/image11.jpeg",
    "/images/image12.jpeg",
    "/images/image13.jpeg",
    "/images/image14.jpeg",
    "/images/image15.jpeg",
    "/images/image16.jpeg",
    "/images/image17.jpeg",
    "/images/image18.jpeg",
    "/images/image19.jpeg",
    "/images/image20.jpeg",
  ];

  const handlePrevious = () => {
    setSelectedIndex((current) => 
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((current) => 
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      {selectedIndex !== null && (
        <ImageModal 
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div 
              key={index}
              className="aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-md"
              onClick={() => setSelectedIndex(index)}
            >
              <img 
                src={src} 
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;