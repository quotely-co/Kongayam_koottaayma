import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">കോങ്കയം കൂട്ടായ്‌മ</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-800 leading-relaxed mb-4">
              കോഡൂർ പഞ്ചായത്തിലെ ചരിത്ര പാരമ്പര്യമുള്ള ഗ്രാമമാണ് കോങ്കയം. വിഖ്യാതമായ കോങ്കയം പള്ളിയും കടലുണ്ടിപ്പുഴയും കിളിയമണ്ണിൽ തറവാടും വളപ്പിൽ തൊടി ഭഗവതി ക്ഷേത്രവുമൊക്കെ നമ്മുടെ നാടിൻ്റെ പൈതൃകങ്ങളാണ്. സമാധാനവും സൗഹാർദവും കളിയാടുന്ന ഈ കൊച്ചുഗ്രാമത്തിൽ 2017 നവംബർ 5 ന് പിറവിയെടുത്ത ജനകീയ വേദിയാണ് കോങ്കയം കൂട്ടായ്‌മ.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              കോങ്കയം മഹല്ല് പരിധിയിലെ എല്ലാ ജാതി മത സാമൂഹ്യ രാഷ്ട്രീയ സാംസ്‌കാരിക വിഭാഗങ്ങൾക്കും പ്രാതിനിധ്യമുള്ള കോങ്കയം കൂട്ടായ്‌മ നാടിൻ്റെ പൊതുതാൽപര്യങ്ങൾ സംരക്ഷിക്കുന്നതിന് നേതൃത്വ പരമായ പങ്ക് വഹിക്കുന്ന ഒരു സംഘടനയാണ്. നവമാധ്യമ കൂട്ടായ്മ്‌മയായി പിറവിയെടുത്ത കോങ്കയം കൂട്ടായ്മ തെരെഞ്ഞെടുക്കപ്പെട്ട ഒരു കമ്മിറ്റിക്കു കീഴിൽ സംഘടനാ സംവിധാനത്തോടുകൂടിയാണ് പ്രവർത്തിച്ചു വരുന്നത്.
            </p>
            <p className="text-gray-800 leading-relaxed">
              ഇതിനകം നാടിൻ്റെ സാമൂഹ്യ സാംസ്‌കാരിക വിദ്യാഭ്യാസ കലാകായിക കാർഷിക മേഖലകളിലും ജീവകാരുണ്യ പ്രവർത്തനങ്ങളിലും സ്‌തുത്യർഹമായ സേവനങ്ങൾ കാഴ്ച്‌ചവെച്ചിട്ടുണ്ട്. കോങ്കയം കൂട്ടായ്‌മ യിൽ ഇപ്പോൾ 356 രജിസ്ട്രേഡ് മെമ്പർമാരുണ്ട്.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[400px] lg:h-[600px]">
          <img
            src="/images/AboutUs.jpeg"
            alt="Charity Event"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">നേതൃത്വം</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Core Leadership */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-4">
              <h3 className="text-xl font-semibold text-green-700">പ്രധാന ഭാരവാഹികൾ</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">പ്രസിഡന്റ്</span>
                  <span className="text-gray-600">തോരപ്പ മുസ്ഥഫ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">ജനറൽ സെക്രട്ടറി</span>
                  <span className="text-gray-600">ശിഹാബ് കരിമ്പൻ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">ട്രഷറർ</span>
                  <span className="text-gray-600">ഉമ്മർ എം.കെ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vice Presidents */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-4">
              <h3 className="text-xl font-semibold text-green-700">വൈസ് പ്രസിഡന്റുമാർ</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>നാസർ കബനി</li>
                <li>പരവത്ത് കുഞ്ഞിപ്പ SKB</li>
                <li>ബഷീർ ആമ്യൻ</li>
              </ul>
            </div>
          </div>

          {/* Secretaries */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-4">
              <h3 className="text-xl font-semibold text-green-700">സെക്രട്ടറിമാർ</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>PCH സാദിഖലി മാസ്റ്റർ</li>
                <li>TT അനീസ് ബാബു</li>
                <li>ജലാലുദ്ദീൻ സി.എച്ച്</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Members */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">എക്സിക്യൂട്ടീവ് മെമ്പർമാർ</h2>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "സുബൈർ പാറമ്മൽ",
                "PKS ഇസ്ഹാഖ്",
                "അബ്ദുറഹിമാൻ.C.H",
                "ഷരീഫ്.പി.കെ",
                "എ.പി. ഷാജഹാൻ",
                "കെ.ടി. ബാപ്പൻ",
                "അബ്ബാസ് കെ.എം",
                "അലവിക്കുട്ടി .എ",
                "പറവത്ത് ബഷീർ SKB",
                "ആമ്യൻ ശിഹാബുദ്ദീൻ",
                "ശിഹാബ് കുട്ടി കരിമ്പൻ",
                "പി. ഫാസിർ മാസ്റ്റർ",
                "മുഹമ്മദ് കുട്ടി. പി.കെ.",
                "സക്കീർ ഹുസൈൻ MP",
                "റഷീദ് ചോലയിൽ",
                "ഇബ്രാഹീം. MP",
                "മുജീബ് ചാത്തേരി",
                "അബ്ദുൽ കരീം പി.കെ",
                "മുർഷിദ്.എം.ടി.",
                "മനോജ് .T",
                "പി.കെ.എസ്. മുസ്ഥഫ ഹസൻ"
              ].map((member, index) => (
                <div key={index} className="p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;