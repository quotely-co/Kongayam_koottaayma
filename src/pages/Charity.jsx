const Charity = () => {
    return (
      <section className="container mx-auto p-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6 text-green-700">About Our Charity</h2>
  
        {/* Description */}
        <div className="text-lg text-gray-800 mb-6">
          <p>
            We are a non-profit organization dedicated to improving the lives of those in need. Through charitable donations, volunteer work, and community outreach, we aim to bring hope and support to the underprivileged. Every contribution makes a difference.
          </p>
        </div>
  
        {/* Charity Image */}
        <div className="mb-8">
          <img
            src="https://source.unsplash.com/600x400/?charity,donation"
            alt="Charity Event"
            className="w-full md:w-1/2 rounded-lg shadow-lg mx-auto"
          />
        </div>
  
        {/* Mission Statement */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-center text-green-700">Our Mission</h3>
          <p className="text-lg text-gray-800 text-center mt-4">
            Our mission is to provide assistance to communities in need by offering resources, support, and a sense of belonging. We work with local and international partners to ensure the sustainable development of those in need.
          </p>
        </div>
  
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">How You Can Help</h4>
          <p className="text-lg text-gray-700 mb-6">
            Your support matters! Whether through donations, volunteering, or spreading the word, every action contributes to making a positive impact.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    );
  };
  
  export default Charity;
  