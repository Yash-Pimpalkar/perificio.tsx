"use client"
import React from 'react'
import Link from 'next/link';
const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* Hero Section - Adapted from FEMA page's hero with soft green gradient */}
        <section className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)', // Soft green gradient
          }}>
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 font-poppins leading-tight">
              The <span className="text-primaryBlue">National Competent Authority</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-inter max-w-3xl mx-auto mb-8">
              Ensuring compliance, oversight, and regulatory integrity for national development.
            </p>
            {/* Changed bg-primaryBlue to bg-blue-600 for a visible blue color */}
            <Link
              href="#areas-of-oversight" // You might want to link this to the "Areas of Oversight" section or another relevant page
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105"
            >
              Explore Key Functions
            </Link>
          </div>
        </section>

        {/* Our Mission & Key Responsibilities Section - Styled as a main content block */}
        <section className="py-8 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-8">
            {/* Mission Card */}
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                🎯 {/* Target icon */}
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                The National Competent Authority is dedicated to upholding national standards, fostering economic stability, and ensuring the protection of public interest through robust regulatory frameworks and diligent oversight. We strive for excellence in governance and transparency.
              </p>
            </div>
            {/* Responsibilities Card */}
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl sm:text-6xl mb-4 text-primaryBlue">
                ✅ {/* Checkmark icon */}
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                Key Responsibilities
              </h2>
              <ul className="list-none p-0 text-gray-600 space-y-2 text-sm sm:text-base text-left w-full">
                <li className="flex items-start gap-2"><span className="text-primaryBlue text-xl leading-none pt-0.5">▪</span> Policy formulation and implementation.</li>
                <li className="flex items-start gap-2"><span className="text-primaryBlue text-xl leading-none pt-0.5">▪</span> Regulatory compliance monitoring and enforcement.</li>
                <li className="flex items-start gap-2"><span className="text-primaryBlue text-xl leading-none pt-0.5">▪</span> Issuance of licenses, permits, and certifications.</li>
                <li className="flex items-start gap-2"><span className="text-primaryBlue text-xl leading-none pt-0.5">▪</span> International cooperation and standard alignment.</li>
                <li className="flex items-start gap-2"><span className="text-primaryBlue text-xl leading-none pt-0.5">▪</span> Public awareness and stakeholder engagement.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Areas of Oversight Section - Styled as a main content block */}
        <section id="areas-of-oversight" className="py-8 bg-white rounded-xl shadow-lg border border-gray-100"> {/* Added id="areas-of-oversight" for the explore button */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10 font-poppins">
            Areas of Oversight
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl sm:text-6xl mb-4 text-primaryBlue">
                💰 {/* Money Bag Icon */}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">Taxation Compliance</h3>
              <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                Ensuring adherence to national tax laws, revenue collection, and fiscal policies.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl sm:text-6xl mb-4 text-primaryBlue">
                🏦 {/* Bank Icon */}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">Wealth Management Regulation</h3>
              <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                Oversight of financial institutions, investment practices, and asset management.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl sm:text-6xl mb-4 text-primaryBlue">
                🛡️ {/* Shield Icon */}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">Insurance Sector Supervision</h3>
              <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                Regulation of insurance providers, policy frameworks, and consumer protection.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl sm:text-6xl mb-4 text-primaryBlue">
                📜 {/* Scroll/Document Icon */}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">Legal & Statutory Adherence</h3>
              <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                Monitoring compliance with various national laws and statutory requirements.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl sm:text-6xl mb-4 text-primaryBlue">
                🤝 {/* Handshake Icon */}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">Consumer Protection</h3>
              <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                Safeguarding consumer rights across regulated industries and services.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl sm:text-6xl mb-4 text-primaryBlue">
                🌍 {/* World Map Icon */}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">International Standards</h3>
              <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                Aligning national practices with global best practices and treaties.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section - Changed to a blue gradient */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 sm:p-10 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-poppins">
            Connect with the National Competent Authority
          </h2>
          <p className="text-gray-700 text-md sm:text-lg max-w-2xl mx-auto mb-8 font-inter">
            For official inquiries, guidance, or feedback, our team is ready to assist you.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact-nca"
              className="inline-block px-8 py-4 bg-red-600 text-white no-underline rounded-full font-bold
                text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 hover:bg-red-700 shadow-lg"
            >
              Contact the NCA
            </Link>
          </div>
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