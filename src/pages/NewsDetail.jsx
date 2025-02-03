import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Always set to auto when closing the modal
        document.body.style.overflow = 'auto';
      };
    }
  }, [image]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50"
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

  // Remove this effect as it's no longer needed
  // The ImageModal component will handle overflow states

  if (!newsItem) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-center text-xl font-semibold text-red-500 px-4">News not found.</p>
      </div>
    );
  }

  const bannerImage = newsItem.images?.[0];
  const galleryImages = newsItem.images?.slice(1);

  return (
    <div className="min-h-screen overflow-y-auto">
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
      
      <section className="container mx-auto px-4 py-4 sm:py-8 max-w-5xl">
        {/* Banner Image */}
        {bannerImage && (
          <div 
            className="w-full h-[300px] xs:h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mb-6 sm:mb-8 cursor-pointer"
            onClick={() => setSelectedImage(bannerImage)}
          >
            <img 
              src={bannerImage} 
              alt="Banner" 
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        )}

        {/* Title & Description */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">{newsItem.title}</h1>
          <p className="text-gray-600 mb-4 text-lg sm:text-xl">{newsItem.date}</p>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">{newsItem.description}</p>
        </div>

        {/* Image Gallery */}
        {galleryImages && galleryImages.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default NewsDetail;