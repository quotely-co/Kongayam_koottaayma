const About = () => {
    return (
      <section className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Side - Image */}
          <img 
            src="https://source.unsplash.com/600x400/?charity,volunteer" 
            alt="Charity work" 
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          
          {/* Right Side - Content */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              We are a non-profit organization dedicated to providing resources, aid, and support to those in need.
              Our mission is to create a better world by helping underprivileged communities through education, healthcare, and financial aid.
            </p>
            <p className="text-lg text-gray-700">
              Join us in making a difference. Your support can help change lives and bring hope to millions.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  