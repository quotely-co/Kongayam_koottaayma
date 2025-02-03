import { useLocation } from "react-router-dom";

const NewsDetail = () => {
  const location = useLocation();
  const newsItem = location.state?.item;

  if (!newsItem) return <p className="text-center text-xl font-semibold text-red-500">News not found.</p>;

  // Extract banner image (first image) & gallery images (remaining)
  const bannerImage = newsItem.images?.[0]; 
  const galleryImages = newsItem.images?.slice(1); 

  return (
    <section className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Banner Image */}
      {bannerImage && (
        <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6">
          <img 
            src={bannerImage} 
            alt="Banner" 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Title & Description */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">{newsItem.title}</h1>
        <p className="text-gray-600 mb-4 text-lg">{newsItem.date}</p>
        <p className="text-gray-800 text-lg leading-relaxed">{newsItem.description}</p>
      </div>

      {/* Image Gallery */}
      {galleryImages && galleryImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {galleryImages.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`News Image ${index + 1}`} 
              className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewsDetail;
