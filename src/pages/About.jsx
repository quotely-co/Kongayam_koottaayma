const About = () => {
    return (
      <section className="container mx-auto p-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">About Us</h2>
  
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              We are a non-profit organization committed to creating a better world for underserved communities. Our focus is on providing education, healthcare, and financial assistance to those in need.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our team works tirelessly to bring resources and opportunities to the most vulnerable populations around the world. With your help, we can make a lasting impact.
            </p>
            <p className="text-lg text-gray-700">
              Join us in our mission to spread kindness and help those who need it most. Your support makes all the difference!
            </p>
          </div>
  
          {/* Right Side - Image */}
          <img 
            src="https://source.unsplash.com/600x400/?charity,volunteer"
            alt="Charity Event"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
  
        {/* Additional Details Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-center text-blue-600">Our Mission</h3>
          <p className="text-lg text-gray-700 text-center mt-4">
            We strive to foster a compassionate world, one where education and resources are accessible to all. We believe in equality, empathy, and community-driven solutions.
          </p>
        </div>
  
        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">How You Can Help</h4>
          <p className="text-lg text-gray-700 mb-6">
            Whether through donations, volunteering, or spreading the word, there are many ways you can help us create a better world.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-lg">
            Get Involved
          </button>
        </div>
      </section>
    );
  };
  
  export default About;
  