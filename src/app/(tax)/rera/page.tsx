// pages/rera.js OR components/RERATab.js (depending on your routing)
'use client'; // This directive is crucial for client-side functionality

import React from 'react';
// import Head from 'next/head'; // Uncomment if this is a top-level page in `pages/`

const page = () => {
  // Define the key points about RERA for customers
  const reraHighlights = [
    {
      title: 'Enhanced Buyer Protection',
      description: 'RERA safeguards homebuyers by ensuring transparency, accountability, and timely project delivery, protecting your investment.',
      icon: '🛡️', // Shield icon
    },
    {
      title: 'Mandatory Project Registration',
      description: 'All residential and commercial projects must be registered with RERA, ensuring legitimacy and detailed public disclosure.',
      icon: '📝', // Document/Clipboard icon
    },
    {
      title: 'Transparency in Information',
      description: 'Developers are legally bound to provide accurate project plans, layouts, government approvals, and completion timelines.',
      icon: '🔍', // Magnifying glass/Transparency icon
    },
    {
      title: 'Escrow Account Compliance',
      description: 'A minimum of 70% of buyer funds must be deposited into a separate escrow account, solely for project construction.',
      icon: '🏦', // Bank/Money icon
    },
    {
      title: 'Defined Carpet Area',
      description: 'RERA mandates the use of "carpet area" for pricing, ensuring buyers pay for the actual usable area within their apartment.',
      icon: '📏', // Ruler/Measurement icon
    },
    {
      title: 'Timely Project Completion',
      description: 'Developers face penalties for delays, and RERA provides mechanisms for compensation to buyers in case of project deferments.',
      icon: '⏰', // Clock/Timeliness icon
    },
    {
      title: 'Streamlined Grievance Redressal',
      description: 'RERA establishes a swift and effective dispute resolution mechanism, allowing homebuyers to file complaints against developers.',
      icon: '🏛️', // Pillar/Justice icon
    },
    {
      title: 'Accountability for Developers',
      description: 'RERA imposes strict liabilities and penalties on developers for non-compliance, ensuring greater responsibility.',
      icon: '✅', // Checkmark/Approval icon
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-900 overflow-hidden">
      {/* Head section for page metadata - only if this is a top-level page */}
      {/* <Head>
        <title>RERA Compliance & Regulation - Corporate Legal Services</title>
        <meta name="description" content="Understand the Real Estate (Regulation and Development) Act and its benefits." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* Hero Section for RERA */}
        <section className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #F0F9FF 0%, #D0EEF6 100%)', // Soft blue and light-blue gradient
          }}>
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 font-poppins leading-tight">
              RERA: Your Assurance in <span className="text-blue-700">Real Estate</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Empowering homebuyers and ensuring transparency in every property transaction.
            </p>
            <a href="#key-features" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105">
              Explore Key Features
            </a>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="key-features" className="py-8 bg-white rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10 font-poppins">
            Why RERA Matters For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
            {reraHighlights.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100"
              >
                <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-inter text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action / Consultation Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 sm:p-10 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-poppins">
            Need Expert Guidance on RERA?
          </h2>
          <p className="text-gray-700 text-md sm:text-lg max-w-2xl mx-auto mb-8 font-inter">
            Our legal experts provide comprehensive advice on RERA compliance, buyer rights, and dispute resolution.
          </p>
          <a href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105">
            Consult Our RERA Experts
          </a>
        </section>
      </main>

      {/* Global Font Imports (or define in styles/globals.css for better performance) */}
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
};

export default page;