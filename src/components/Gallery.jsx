const Gallery = () => {
    const images = [
      "https://source.unsplash.com/featured/?charity",
      "https://source.unsplash.com/featured/?volunteer",
      "https://source.unsplash.com/featured/?donation",
      "https://source.unsplash.com/featured/?help",
      "https://source.unsplash.com/featured/?event",
      "https://source.unsplash.com/featured/?giving"
    ];
  
    return (
      <section className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-48 object-cover transition-transform transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <p>Event {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Gallery;
  