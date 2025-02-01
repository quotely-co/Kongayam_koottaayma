import React from 'react';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "കോങ്കയം കൂട്ടായ്മയുടെ വാർഷിക സമ്മേളനം",
      date: "2025 ഫെബ്രുവരി 02",
      description: "കോങ്കയം കൂട്ടായ്മയുടെ വാർഷിക സമ്മേളനം",
      imageUrl: "/images/news.jpeg", // Add image URL here
      isUpcoming: true // Flag to mark upcoming news
    },
    {
      id: 2,
      title: "ചാരിറ്റി ഫണ്ട് വിതരണം",
      date: "2024 ഫെബ്രുവരി 1",
      description: "രോഗികൾക്ക് സഹായധനം വിതരണം ചെയ്തു. 50 കുടുംബങ്ങൾക്ക് സഹായം ലഭിച്ചു.",
      imageUrl: "/path/to/your/image2.jpg", // Add image URL here
      isUpcoming: false
    },
    {
      id: 3,
      title: "മെഡിക്കൽ ക്യാമ്പ്",
      date: "2024 മാർച്ച് 10",
      description: "സൗജന്യ മെഡിക്കൽ ക്യാമ്പ് സംഘടിപ്പിച്ചു. 200-ലധികം പേർക്ക് പ്രയോജനം ലഭിച്ചു.",
      imageUrl: "/path/to/your/image3.jpg", // Add image URL here
      isUpcoming: true
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl ${item.isUpcoming ? 'opacity-75' : ''}`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.imageUrl || "/api/placeholder/800/600"} // Use image URL or fallback to placeholder
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <button 
                  className="text-green-600 font-semibold hover:text-green-700 transition duration-300 flex items-center"
                >
                  {item.isUpcoming ? "Coming Soon" : "Read More"} {/* Conditional text */}
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
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
