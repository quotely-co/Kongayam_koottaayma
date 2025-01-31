const Contact = () => {
    return (
      <section className="container mx-auto p-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Contact Us</h2>
  
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-4">
              We would love to hear from you! Whether you have questions, feedback, or want to get involved, feel free to reach out.
            </p>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">Email:</p>
              <p className="text-gray-700">contact@charityorg.com</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">Phone:</p>
              <p className="text-gray-700">+1 (800) 123-4567</p>
            </div>
          </div>
  
          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Enter your message" 
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
  
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  