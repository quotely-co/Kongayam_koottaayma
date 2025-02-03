import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      title: "കോങ്കയം കൂട്ടായ്മയുടെ വാർഷിക സമ്മേളനം",
      date: "2025 ഫെബ്രുവരി 01",
      description: "കോങ്കയം കൂട്ടായ്മയുടെ വാർഷിക സമ്മേളനം",
      images: ["/images/news.jpeg", "/images/news2025.1.jpeg", "/images/news2025.2.jpeg", "/images/news2025.3.jpeg"], // Multiple images
      isUpcoming: false,
    },
  ];


  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              onClick={() => navigate(`/news/${item.id}`, { state: { item } })}
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => navigate(`/news/${item.id}`, { state: { item } })} // Pass item data
                  className="text-green-600 font-semibold hover:text-green-700 transition duration-300 flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
