const Gallery = () => {
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

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt="Gallery" className="w-full h-48 object-cover rounded-lg shadow-md" />
        ))}
      </div>
    </section>
  );
};

// ✅ Ensure this is included
export default Gallery;
