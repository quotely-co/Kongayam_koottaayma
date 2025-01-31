const Gallery = () => {
    const images = [
      "https://source.unsplash.com/featured/?charity",
      "https://source.unsplash.com/featured/?volunteer",
      "https://source.unsplash.com/featured/?donation",
      "https://source.unsplash.com/featured/?helping"
    ];
  
    return (
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img key={index} src={src} alt="Gallery" className="w-full h-48 object-cover rounded-lg shadow-md"/>
          ))}
        </div>
      </section>
    );
  };
  
  // ✅ Ensure this is included
  export default Gallery;
  