import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700 ease-out"
        style={{ backgroundImage: "url('https://source.unsplash.com/featured/?charity')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-full text-center text-white space-y-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up">
            Make a Difference Today
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-gray-200 animate-fade-in-up delay-200">
            Join us in our mission to help those in need and create positive change in our community.
            Together, we can make the world a better place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up delay-300">
            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Donate Now
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300 border border-white/30">
              Learn More
            </button>
          </div>

          {/* Optional Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20 animate-fade-in-up delay-400">
            <div>
              <div className="text-3xl md:text-4xl font-bold">1000+</div>
              <div className="text-sm md:text-base text-gray-300">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-sm md:text-base text-gray-300">Communities Served</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-sm md:text-base text-gray-300">Commitment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default Hero;