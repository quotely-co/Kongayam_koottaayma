import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Gallery = () => {
  const images = [
    "/images/news2025.1.jpeg",
    "/images/news2025.2.jpeg",
    "/images/news2025.3.jpeg",
    "/images/image6.jpeg",
    "/images/image7.jpeg",
    "/images/image8.jpeg",
  ];

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-green-600">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-48 object-cover transition-transform transform hover:scale-105"
            />

          </div>
        ))}
      </div>

      {/* "Go to Gallery" Button */}
      <div className="text-center mt-6">
        <Link to="/gallery">
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
            Go to Gallery
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
