const About = () => {
    return (
        <section className="container mx-auto p-6">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-6 text-green-700">About Us</h2>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Side - Text Content */}
                <div className="md:w-1/2">
                    <p className="text-lg text-gray-800 text-center mt-4">
                        കോഡൂർ പഞ്ചായത്തിലെ ചരിത്ര പാരമ്പര്യമുള്ള ഗ്രാമമാണ് കോങ്കയം. വിഖ്യാതമായ കോങ്കയം പള്ളിയും കടലുണ്ടിപ്പുഴയും കിളിയമണ്ണിൽ തറവാടും വളപ്പിൽ തൊടി ഭഗവതി ക്ഷേത്രവുമൊക്കെ നമ്മുടെ നാടിൻ്റെ പൈതൃകങ്ങളാണ്. സമാധാനവും സൗഹാർദവും കളിയാടുന്ന ഈ കൊച്ചുഗ്രാമത്തിൽ 2017 നവംബർ 5 ന് പിറവിയെടുത്ത ജനകീയ വേദിയാണ് കോങ്കയം കൂട്ടായ്‌മ.

                        കോങ്കയം മഹല്ല് പരിധിയിലെ എല്ലാ ജാതി മത സാമൂഹ്യ രാഷ്ട്രീയ സാംസ്‌കാരിക വിഭാഗങ്ങൾക്കും പ്രാതിനിധ്യമുള്ള കോങ്കയം കൂട്ടായ്‌മ നാടിൻ്റെ പൊതുതാൽപര്യങ്ങൾ സംരക്ഷിക്കുന്നതിന് നേതൃത്വ പരമായ പങ്ക് വഹിക്കുന്ന ഒരു സംഘടനയാണ്.

                        നവമാധ്യമ കൂട്ടായ്മ്‌മയായി പിറവിയെടുത്ത കോങ്കയം കൂട്ടായ്മ തെരെഞ്ഞെടുക്കപ്പെട്ട ഒരു കമ്മിറ്റിക്കു കീഴിൽ സംഘടനാ സംവിധാനത്തോടുകൂടിയാണ് പ്രവർത്തിച്ചു വരുന്നത്.

                        ഇതിനകം നാടിൻ്റെ സാമൂഹ്യ സാംസ്‌കാരിക വിദ്യാഭ്യാസ കലാകായിക കാർഷിക മേഖലകളിലും ജീവകാരുണ്യ പ്രവർത്തനങ്ങളിലും സ്‌തുത്യർഹമായ സേവനങ്ങൾ കാഴ്ച്‌ചവെച്ചിട്ടുണ്ട്. കോങ്കയം കൂട്ടായ്‌മ യിൽ ഇപ്പോൾ 356 രജിസ്ട്രേഡ് മെമ്പർമാരുണ്ട് .
                    </p>
                </div>

                {/* Right Side - Image */}
                <img
                    src="/images/AboutUs.jpeg"
                    alt="Charity Event"
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
            </div>

            {/* Additional Details Section */}
            {/* <div className="mt-12">
                <h3 className="text-3xl font-semibold text-center text-green-700">Our Mission</h3>
                <p className="text-lg text-gray-800 text-center mt-4">
                    We strive to foster a compassionate world, one where education and resources are accessible to all. We believe in equality, empathy, and community-driven solutions.
                </p>
            </div> */}

            {/* Call to Action Section */}
            {/* <div className="mt-12 text-center">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">How You Can Help</h4>
                <p className="text-lg text-gray-800 mb-6">
                    Whether through donations, volunteering, or spreading the word, there are many ways you can help us create a better world.
                </p>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg">
                    Get Involved
                </button>
            </div> */}

            {/* Malayalam Text Section */}
            {/* <div className="mt-12">
                <h3 className="text-3xl font-semibold text-center text-green-700">എന്താണ് ഞങ്ങളുടെ ദൗത്യങ്ങൾ</h3>
                <p className="text-lg text-gray-800 text-center mt-4">
                    ഞങ്ങൾ ഒരു ദയാലുവായ ലോകം സൃഷ്‌ടിക്കാൻ ശ്രമിക്കുന്നു, എവിടെ വിദ്യാഭ്യാസവും വിഭവങ്ങളും എല്ലാരും ലഭ്യമാണ്. നമുക്ക് തുല്യവും, കരുണയുമുള്ള, സമുദായ-ചാലിതമായ പരിഹാരങ്ങൾ വിശ്വസിക്കുന്നു.
                </p>
            </div> */}
        </section>
    );
};

export default About;
