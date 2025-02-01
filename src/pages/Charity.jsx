import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const Charity = () => {

  // Function to handle Google Pay redirection
  const handleGooglePay = () => {
    // Check if Google Pay app is available
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.indexOf("android") > -1;

    if (isAndroid) {
      // Deep link to Google Pay app
      window.location.href = 'upi://pay?pa=9744676504@ptaxis&pn=Charity%20Fund&mc=0000&tid=YOUR_TRANSACTION_ID&tr=YOUR_TRANSACTION_REF&tn=Charity%20Donation&am=&cu=INR&url=';
    } else {
      // Fallback to web URL
      window.location.href = 'https://pay.google.com/gp/p/ui/pay?tid=YOUR_TRANSACTION_ID';
    }
  };



  return (
    <section className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">ചാരിറ്റി ഫണ്ട്</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            ക്യാൻസർ, കിഡ്‌നി ഡയാലിസിസ്, മറ്റു മാരക രോഗങ്ങൾ, അപകടങ്ങൾ, വിവിധ ഓപ്പറേഷനുകൾ എന്നിവ മൂലം ചികിത്സയിലിരിക്കുന്ന നാട്ടിലെ അർഹതപ്പെട്ട കുടുംബങ്ങൾക്ക് ധനസഹായം നൽകുന്ന പദ്ധതിയാണ് കോങ്കയം കൂട്ടായ്‌മ ചാരിറ്റി ഫണ്ട്.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            ഇതിനകം നിർധനരായ നിരവധി കുടുംബങ്ങൾക്കാ ശ്വാസമായി ആറു വർഷമായി പ്രവർത്തിക്കുന്ന ഫണ്ടിലേക്ക് മെമ്പർമാരിൽ നിന്നും ഉദാരമതികളിൽ നിന്നും ലഭിക്കുന്ന സംഭാവനകൾ മാത്രമാണ് ഏക വരുമാന മാർഗം. രോഗികൾക്ക് സാന്ത്വന സ്‌പർശമായി നിരവധി പദ്ധതികൾ കൂട്ടായ്‌മയുടെ പരിഗണനയിലുണ്ട്.
          </p>
        </div>

        {/* Image */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src="/images/charity.jpg"
            alt="Charity Activities"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="bg-green-50 rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">ബാങ്ക് വിവരങ്ങൾ</h2>
        <p className="text-gray-800 text-lg mb-8 text-center">
          ഉദാരമതികളായ നിങ്ങളുടെ സംഭാവനകൾ കോങ്കയം കൂട്ടായ്മ ബാങ്ക് അക്കൗണ്ടിലോ കമ്മിറ്റി മെമ്പർമാരേയോ ഏൽപിക്കുവാൻ അഭ്യർത്ഥിക്കുന്നു.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bank Details Cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-700 mb-2">അക്കൗണ്ട് നമ്പർ</h3>
            <p className="text-green-600 font-mono text-lg">201211101000194</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-700 mb-2">IFSC കോഡ്</h3>
            <p className="text-green-600 font-mono text-lg">UTIBOSKCU78</p>
            <p className="text-sm text-gray-500">(fifth character ZERO)</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-700 mb-2">SWIFT കോഡ്</h3>
            <p className="text-green-600 font-mono text-lg">AXISINBB136</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-700 mb-2">MICR</h3>
            <p className="text-green-600 font-mono text-lg">676835153</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 md:col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-gray-700 mb-2">ബാങ്ക്</h3>
            <p className="text-green-600 text-lg">
              കോട്ടക്കൽ കോ-ഓപ്പറേറ്റീവ് അർബൻ ബാങ്ക്‌
            </p>
            <p className="text-green-600 text-lg">വടക്കേമണ്ണ ശാഖ</p>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="text-center mb-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">സഹായിക്കാൻ തയ്യാറാണോ?</h3>
        <p className="text-lg text-gray-700 mb-6">
          നിങ്ങളുടെ ഓരോ സംഭാവനയും ഒരു കുടുംബത്തിന് പ്രതീക്ഷയുടെ കിരണമാണ്
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleGooglePay}
            className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-lg flex items-center justify-center gap-2"
          >
            <img
              src="/api/placeholder/24/24"
              alt="Google Pay"
              className="w-6 h-6"
            />
            Google Pay വഴി സംഭാവന ചെയ്യൂ
          </button>
        </div>

        {/* Google Pay QR Code Image */}
        <div className="mt-8">
          <h4 className="text-xl text-green-700 mb-4">Google Pay QR Code</h4>
          <img
            src="/images/scanner.png" // Replace with your actual QR code image path
            alt="Google Pay QR Code"
            className="mx-auto rounded-lg shadow-lg w-64"
          />
        </div>
      </div>


    </section>
  );
};

export default Charity;