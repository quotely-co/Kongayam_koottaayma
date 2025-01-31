import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-lg mb-4">
          <p>If you have any questions, feel free to contact us at:</p>
          <p>Email: contact@charityorg.com</p>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          <p>&copy; 2025 CharityOrg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
