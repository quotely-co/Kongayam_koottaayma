import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-200 text-black py-8">
            <div className="container mx-auto text-center">
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} className="text-black hover:text-green-600" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} className="text-black hover:text-green-600" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} className="text-black hover:text-green-600" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} className="text-black hover:text-green-600" />
                    </a>
                </div>

                {/* Contact Info */}
                <div className="text-lg mb-4">
                    <p>If you have any questions, feel free to contact us at:</p>
                    <p>Phone:</p>
                </div>

                {/* Copyright */}
                <div className="text-sm mb-4">
                    <p>&copy; 2025 Kongayam Koottaayma. All rights reserved.</p>
                </div>

                {/* Designed and Developed By */}
                <div className="text-sm text-gray-700">
                    <p>Designed and Developed by <a href="https://github.com/shaamiilll" target="_blank" className="text-green-600 hover:underline">Shamil A</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
