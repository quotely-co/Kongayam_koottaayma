import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Gallery = () => {
  const images = [
    "/images/video1.mp4",
    "/images/image1.jpeg",
    // "/images/image2.jpeg",
    "/images/image3.jpeg",
    // "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
    "/images/image7.jpeg",
    "/images/image8.jpeg",
    // "/images/image9.jpeg",
    // "/images/image10.jpeg",
    // "/images/image11.jpeg",
    // "/images/image12.jpeg",
    // "/images/image13.jpeg",
    // "/images/image14.jpeg",
    // "/images/image15.jpeg",
    // "/images/image16.jpeg",
    // "/images/image17.jpeg",
    // "/images/image18.jpeg",
    // "/images/image19.jpeg",
    // "/images/image20.jpeg"
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
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              <p>Event {index + 1}</p>
            </div>
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
