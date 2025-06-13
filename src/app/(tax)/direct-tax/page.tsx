"use client"
import React from 'react'
import Link from 'next/link';
const page = () => {
  const directTaxServices = [
    {
      title: 'Income Tax Return Filing',
      description: 'Hassle-free preparation and e-filing of ITRs.',
      icon: '📄', // Document icon
    },
    {
      title: 'Capital Gains Computation',
      description: 'Accurate calculation and advisory on capital gains.',
      icon: '📈', // Chart icon
    },
    {
      title: 'TDS Compliance (24Q, 26Q)',
      description: 'End-to-end support for TDS deductions and filings.',
      icon: '✔️', // Checkmark icon
    },
    {
      title: 'Advance Tax Management',
      description: 'Guidance on advance tax calculations and timely payments.',
      icon: '⏰', // Clock icon
    },
    {
      title: 'Tax Planning & Advisory',
      description: 'Strategic tax planning to minimize liabilities.',
      icon: '💡', // Lightbulb icon
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* Hero Section - Consistent with NCA/Indirect Tax pages */}
        <section className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)', // Soft green gradient
          }}>
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 font-poppins leading-tight">
              Direct Taxation Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-inter max-w-3xl mx-auto mb-8">
              Navigating the complex landscape of direct taxes requires expert knowledge and meticulous planning.
              At Tax Consulting, we offer precise and personalized solutions for individuals and businesses alike.
            </p>
            {/* The button is already set to bg-blue-600, which makes it blue. */}
            <Link
              href="#services" // You might want to link this to a specific section on the page or another relevant page
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105"
            >
              Explore Our Direct Tax Services
            </Link>
          </div>
        </section>

        {/* Highlighted Core Services List - Consistent with Indirect Tax / NCA pages */}
        <section id="services" className="py-8 bg-white rounded-xl shadow-lg border border-gray-100"> {/* Added id="services" for the explore button */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10 font-poppins">
            Our Expertise Includes:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
            {directTaxServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100"
              >
                <div className="text-5xl sm:text-6xl mb-4 text-primaryBlue">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section - Consistent with NCA/Indirect Tax pages */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 sm:p-10 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-poppins">
            Explore Our Comprehensive Direct Tax Solutions
          </h2>
          <p className="text-gray-700 text-md sm:text-lg max-w-2xl mx-auto mb-8 font-inter">
            Beyond the basics, our direct tax services delve into intricate details to ensure compliance and optimize your financial position.
            Partner with us for unparalleled expertise in direct taxation.
          </p>
          <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105">
            Learn More About Direct Tax
          </Link>
        </section>
      </main>

      {/* Global Font Imports (important if not handled globally in `globals.css`) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');

        .font-inter {
            font-family: 'Inter', sans-serif;
        }
        .font-poppins {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default page