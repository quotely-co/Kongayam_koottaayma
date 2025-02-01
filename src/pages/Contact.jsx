import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+919876543210', '_blank'); // Replace with actual number
  };

  return (
    <section className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">ബന്ധപ്പെടുക</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* WhatsApp Card */}
        <div 
          onClick={handleWhatsAppClick}
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl transition-shadow"
        >
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">വാട്സ്ആപ്പ്</h3>
          <p className="text-gray-600">ഞങ്ങളുമായി വാട്സ്ആപ്പിലൂടെ ബന്ധപ്പെടുക</p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
            വാട്സ്ആപ്പ് ചാറ്റ്
          </button>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <Phone className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">ഫോൺ</h3>
          <p className="text-gray-600">+91 98765 43210</p>
          <p className="text-gray-600">+91 98765 43211</p>
        </div>

        {/* Address Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">വിലാസം</h3>
          <p className="text-gray-600">
            കോങ്കയം കൂട്ടായ്മ
            <br />
            കോങ്കയം, കോഡൂർ പഞ്ചായത്ത്
            <br />
            മലപ്പുറം, കേരള
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-12">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1503987444858!2d76.06996357223545!3d11.027340530530749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64aafdc83a1b5%3A0x9c125e312d0cb6e4!2sKongayam%20Juma%20Masjid!5e0!3m2!1sen!2sin!4v1738451711395!5m2!1sen!2sin"
            className="w-full h-full rounded-lg"
            style={{ minHeight: '400px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Office Hours */}
      {/* <div className="bg-green-50 rounded-lg shadow-lg p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">ഓഫീസ് സമയം</h3>
        <div className="space-y-2 text-gray-700">
          <p>തിങ്കൾ - ശനി: രാവിലെ 9:30 - വൈകുന്നേരം 5:30</p>
          <p>ഞായർ: അവധി ദിവസം</p>
        </div>
      </div> */}
    </section>
  );
};

export default Contact;