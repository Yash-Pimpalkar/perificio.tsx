'use client'; // This directive is crucial for using React Hooks like useEffect and useState in Next.js

import React from 'react';

const page = () => {
    // Define the features data, similar to your screenshot content
    const features = [
        {
            icon: '📊', // You can use actual SVG/React Icons here if preferred
            title: 'Research You Can Rely On',
            description: 'Get access to innovative AI-Based investment guidance tools that give you in-depth insights, live data and live portfolio tracking to leave the guesswork out and help you make a wise investment decision.'
        },
        {
            icon: '⭐', // Changed to a star icon
            title: 'Invest In The Best',
            description: 'Choose from the top-performing mutual funds verified by recognized and reliable institutions like Morningstar and CRISIL.'
        },
        {
            icon: '💸', // Changed to money wings icon
            title: 'Invest At Zero Commission',
            description: 'The direct mutual fund service enables you to invest in 2500+ mutual funds across all the sectors at absolutely 0% commission.'
        },
        {
            icon: '📈', // Changed to a chart icon
            title: 'Portfolio Analysis Report',
            description: 'A reliable report that gives you complete clarity about the current performance of your portfolio along with its expected future performance.'
        },
        {
            icon: '🎯', // Target/Bullseye icon
            title: 'Goal-Based Portfolio',
            description: 'A customised combination of different funds curated to achieve your specific goals within the expected tenure.'
        },
        {
            icon: '🔄', // Refresh/Circular arrows icon
            title: 'Rebalancing and Restructuring',
            description: 'Constantly monitoring the performance of your investments and whenever required, making the necessary changes to ensure optimum performance.'
        },
        {
            icon: '🤝', // Handshake icon
            title: 'Choose The One That Meets Your Needs',
            description: 'From debt mutual funds, equity mutual funds, balanced funds, hybrid funds or more, choose the kind of mutual funds that match your requirements to achieve your financial goals.'
        },
        // Add more features as needed
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-inter text-gray-900">
            {/* Hero Section for Invest Page */}
            <section className="bg-gradient-to-br from-[#E0F2FE] to-[#BFDBFE] text-[#1D4ED8] py-16 md:py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold leading-tight mb-4 max-w-4xl mx-auto">
                        Smart Investing Made <span className="text-[#B91C1C]">Simple.</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 max-w-3xl mx-auto mb-8">
                        Unlock your financial potential with Perficio's expert guidance and advanced investment tools.
                    </p>
                    <a href="#features" className="inline-block bg-[#B91C1C] hover:bg-[#DC2626] text-white font-montserrat font-semibold px-8 py-4 rounded-lg shadow-xl transition transform hover:scale-105 text-lg md:text-xl">
                        Explore Our Features
                    </a>
                </div>
            </section>

            {/* Features Section - Similar to your screenshot */}
            <section id="features" className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#1D4ED8] text-center mb-12">
                        Why Choose Perficio for Your <span className="text-[#B91C1C]">Investments?</span>
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

            {/* Call to Action/Contact Section (Optional, you can link to your main contact) */}
            <section className="py-12 md:py-16 bg-[#F0F8FF] text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-[#1D4ED8] mb-4">
                        Ready to Grow Your Wealth?
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                        Connect with our financial advisors to create a personalized investment plan that aligns with your goals.
                    </p>
                    <a href="/contact" className="inline-block bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-montserrat font-semibold px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105 text-base md:text-lg">
                        Schedule a Consultation
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