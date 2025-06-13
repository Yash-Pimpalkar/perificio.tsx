'use client'; // This directive is crucial for using React Hooks like useEffect and useState in Next.js

import React from 'react';

const page = () => {
    // Define the features data for Real Estate services
    const features = [
        {
            icon: '🔍', // Search/Discovery icon
            title: 'Expert Property Search',
            description: 'Access curated listings and off-market opportunities tailored to your investment goals, whether residential or commercial.'
        },
        {
            icon: '⚖️', // Balance/Legal icon
            title: 'Legal & Due Diligence',
            description: 'Navigate complex real estate regulations with our comprehensive legal and due diligence support, ensuring secure transactions.'
        },
        {
            icon: '💰', // Money bag icon
            title: 'Investment Advisory',
            description: 'Receive personalized advice on optimal real estate investment strategies, financing options, and market trends for maximum returns.'
        },
        {
            icon: '📈', // Growth chart icon
            title: 'Property Valuation & Analysis',
            description: 'Get accurate property valuations and detailed market analysis to make informed buying, selling, or leasing decisions.'
        },
        {
            icon: '🛠️', // Tools/Maintenance icon
            title: 'Property Management Support',
            description: 'From tenant acquisition to maintenance and rent collection, we offer support to simplify your property management.'
        },
        {
            icon: '🌐', // Globe/Network icon
            title: 'NRI Real Estate Services',
            description: 'Specialized assistance for Non-Resident Indians (NRIs) in buying, selling, and managing properties in India, ensuring compliance and ease.'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-inter text-gray-900">
            {/* Hero Section for Real Estate Page */}
            <section className="bg-gradient-to-br from-[#E0F2FE] to-[#BFDBFE] text-[#1D4ED8] py-16 md:py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold leading-tight mb-4 max-w-4xl mx-auto">
                        Your Trusted Partner in <span className="text-[#B91C1C]">Real Estate.</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 max-w-3xl mx-auto mb-8">
                        Navigate the property market with confidence. From investments to management, we guide you every step of the way.
                    </p>
                    <a href="#features" className="inline-block bg-[#B91C1C] hover:bg-[#DC2626] text-white font-montserrat font-semibold px-8 py-4 rounded-lg shadow-xl transition transform hover:scale-105 text-lg md:text-xl">
                        Discover Our Services
                    </a>
                </div>
            </section>

            {/* Features Section for Real Estate Services */}
            <section id="features" className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#1D4ED8] text-center mb-12">
                        Why Choose Perficio for Your <span className="text-[#B91C1C]">Property Needs?</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-5xl sm:text-6xl text-[#1D4ED8] mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-[#1D4ED8] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action/Contact Section */}
            <section className="py-12 md:py-16 bg-[#F0F8FF] text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-[#1D4ED8] mb-4">
                        Ready to Make Your Next Property Move?
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                        Schedule a consultation with our real estate experts to find the perfect property solution.
                    </p>
                    <a href="/contact" className="inline-block bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-montserrat font-semibold px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105 text-base md:text-lg">
                        Get Expert Real Estate Advice
                    </a>
                </div>
            </section>

            {/* Tailwind CSS Font Imports (ensure these are in your global CSS or in a <style> block) */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap');

                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                .font-montserrat {
                    font-family: 'Montserrat', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default page;