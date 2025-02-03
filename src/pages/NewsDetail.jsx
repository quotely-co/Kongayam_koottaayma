import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

const ImageModal = ({ image, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!image) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50"
      >
        <X size={24} className="sm:w-8 sm:h-8" />
      </button>
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src={image} 
          alt="Full screen view" 
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

const NewsDetail = () => {
  const location = useLocation();
  const newsItem = location.state?.item;
  const [selectedImage, setSelectedImage] = useState(null);

  if (!newsItem) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-center text-xl font-semibold text-red-500 px-4">News not found.</p>
      </div>
    );
  }

  // Extract banner image (first image) & gallery images (remaining)
  const bannerImage = newsItem.images?.[0];
  const galleryImages = newsItem.images?.slice(1);

  return (
    <>
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
      
      <section className="container mx-auto px-4 py-4 sm:py-8 max-w-5xl">
        {/* Banner Image */}
        {bannerImage && (
          <div 
            className="w-full h-48 xs:h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg mb-4 sm:mb-6 cursor-pointer"
            onClick={() => setSelectedImage(bannerImage)}
          >
            <img 
              src={bannerImage} 
              alt="Banner" 
              className="w-full h-full object-cover hover:opacity-95 transition-opacity"
            />
          </div>
        )}

        {/* Title & Description */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 text-center mb-4 sm:mb-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-green-700 mb-2 sm:mb-4">{newsItem.title}</h1>
          <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">{newsItem.date}</p>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">{newsItem.description}</p>
        </div>

        {/* Image Gallery */}
        {galleryImages && galleryImages.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-[4/3] cursor-pointer group overflow-hidden rounded-lg shadow-md"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`News Image ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default NewsDetail;