import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700 ease-out"
        style={{ 
          backgroundImage: "url('/images/background.jpeg')" // Replace with your image path
        }}
      >
        {/* Overlay with emerald tint */}
        <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-full text-center text-white space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
            Kongayam Koottaayma
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-lg md:text-xl lg:text-2xl text-emerald-50 animate-fade-in-up">
            Together we can build a stronger community
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 mt-12 animate-fade-in-up">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-100">20+</div>
              <div className="text-sm md:text-base text-emerald-50/90">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-100">500+</div>
              <div className="text-sm md:text-base text-emerald-50/90">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-100">100%</div>
              <div className="text-sm md:text-base text-emerald-50/90">Community Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
    </section>
  );
};

export default Hero;