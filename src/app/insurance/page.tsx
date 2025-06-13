"use client";
import Head from "next/head";
import React from "react";
// Make sure you have installed react-icons: npm install react-icons
import { FaShieldAlt, FaHandshake, FaUserTie, FaStar, FaQuoteLeft, FaQuestionCircle, FaLightbulb, FaCheckCircle, FaChartLine, FaClipboardCheck, FaUsers, FaArrowRight, FaCalculator, FaFileContract, FaUserFriends, FaBalanceScale, FaGraduationCap, FaClipboardList } from "react-icons/fa"; // Imported all necessary icons, including new ones for the added sections
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  mobile: string;
  email: string;
  agreedToTerms: boolean;
}
const servicesData = [
  {
    title: "Term Insurance Planning",
    icon: <FaShieldAlt className="text-blue-700 text-4xl mb-4" />,
    points: [
      "Coverage analysis based on income, liabilities, and dependents",
      "Help with choosing high-claim-settlement insurers",
      "Structuring policies for tax benefit under Section 80C & 10(10D)",
    ],
  },
  {
    title: "Health Insurance Advisory",
    icon: <FaHandshake className="text-red-600 text-4xl mb-4" />,
    points: [
      "Guidance on individual vs family floater policies",
      "Integration with Section 80D tax savings",
      "Claim settlement assistance & document review",
    ],
  },
  {
    title: "Keyman & Corporate Insurance",
    icon: <FaUserTie className="text-blue-700 text-4xl mb-4" />,
    points: [
      "Structuring Keyman Insurance for business owners and directors",
      "Buy-sell agreement-based insurance planning",
      "Group Mediclaim advisory for employees",
    ],
  },
  {
    title: "Tax & Compliance Edge",
    icon: <FaFileContract className="text-red-600 text-4xl mb-4" />,
    points: [
      "Maximize deductions (80C, 80D, 80DD, 80U)",
      "Avoid claim rejections through proper disclosures",
      "Post-claim documentation and tax advisory",
    ],
  },
];

const howItWorksSteps = [
  {
    step: "1. Initial Consultation",
    icon: <FaUsers className="text-blue-700 text-4xl mb-4" />,
    description: "We begin with a free, no-obligation call to understand your financial goals, existing coverage, and specific needs.",
  },
  {
    step: "2. Personalized Analysis",
    icon: <FaChartLine className="text-red-600 text-4xl mb-4" />,
    description: "Our CA-led team conducts a thorough analysis of your financial situation, considering tax implications and future aspirations.",
  },
  {
    step: "3. Tailored Recommendations",
    icon: <FaLightbulb className="text-blue-700 text-4xl mb-4" />,
    description: "Receive unbiased recommendations on insurance products that perfectly align with your risk profile and financial objectives.",
  },
  {
    step: "4. Seamless Implementation & Support",
    icon: <FaClipboardCheck className="text-red-600 text-4xl mb-4" />,
    description: "We assist with documentation, policy setup, and provide ongoing support, including claim settlement assistance.",
  },
];

const toolsOfferings = [
  {
    name: "Term Cover Calculator (Income-based)",
    icon: <FaCalculator className="text-red-600 text-3xl" />,
  },
  {
    name: "80D Deduction Estimator",
    icon: <FaCalculator className="text-blue-700 text-3xl" />,
  },
  {
    name: "Premium Affordability Planner",
    icon: <FaCalculator className="text-red-600 text-3xl" />,
  },
];


const trustReasons = [
  {
    text: "We are not insurance sellers—we are your unbiased advisor.",
    icon: <FaBalanceScale className="text-blue-600 text-xl" /> // Icon for unbiased advice
  },
  {
    text: "CA-led opinion on financial impact, not just premium cost.",
    icon: <FaGraduationCap className="text-red-600 text-xl" /> // Icon for expert opinion
  },
  {
    text: "We assist in choosing, reviewing, and even claiming.",
    icon: <FaClipboardList className="text-blue-600 text-xl" /> // Icon for comprehensive assistance
  },
];

const testimonials = [
  {
    quote: "Perificio simplified our insurance planning. Their tax advice was invaluable!",
    author: "Ritu Sharma, Small Business Owner",
  },
  {
    quote: "Professional and thorough. I finally understand my policies thanks to them.",
    author: "Anil Kumar, Software Engineer",
  },
  {
    quote: "Excellent support during claims. Highly recommend their advisory services.",
    author: "Priya Singh, Homemaker",
  },
];

const faqs = [
  {
    question: "Why should I choose Perificio for insurance advisory?",
    answer: "At Perificio, our insurance advisory is led by Certified Accountants (CAs), ensuring you receive unbiased, tax-optimized, and expert advice tailored to your financial health. We prioritize your long-term security and provide end-to-end support.",
  },
  {
    question: "How do you help with tax savings on insurance?",
    answer: "We specialize in structuring your insurance policies to maximize deductions under various sections like 80C, 80D, 80DD, and 80U. Our advice helps you effectively reduce your taxable income while securing comprehensive coverage.",
  },
  {
    question: "What is the process for getting insurance advice?",
    answer: "Our process starts with a free initial consultation to understand your needs. Following this, we conduct a personalized analysis, provide tailored recommendations, and offer seamless assistance with implementation and ongoing support, including claim processes.",
  },
  {
    question: "Do you assist with claim settlements?",
    answer: "Yes, absolutely. We provide complete assistance with documentation review and guidance throughout the claim settlement process to ensure a hassle-free experience and avoid rejections due to procedural errors.",
  },
  {
    question: "Can you help with corporate and Keyman insurance?",
    answer: "Indeed. We offer specialized solutions for businesses, including structuring Keyman Insurance for critical personnel and directors, planning buy-sell agreement-based insurance, and advising on comprehensive group mediclaim policies for employees.",
  },
];


export default function page() {
  const [form, setForm] = useState<FormState>({
    name: '',
    mobile: '',
    email: '',
    agreedToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // Optional index for FAQ

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.agreedToTerms) {
      alert('Please agree to the Terms & Conditions and Privacy Policy.');
      return;
    }
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', mobile: '', email: '', agreedToTerms: false });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <>
      <Head>
        <title>Insurance Advisory | Perificio - Your Financial Protectors</title>
        <meta
          name="description"
          content="Personalized, tax-aligned insurance advice from CAs. Protect your income, family, and future with expert guidance from Perificio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/assets/abstract-shapes.svg')" }}></div>

          <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-blue-900">
              <span className="text-red-600">Protect</span> What You Have <span className="text-blue-700">Built</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Informed financial planning isn't complete without protection. We assist you in choosing tax-efficient, goal-aligned
              insurance products that safeguard your income, family, and future assets—without overpaying or overcommitting.
            </p>
            <a
              href="#contact-form-section"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-10 py-4 rounded-full shadow-lg transition transform hover:scale-105 duration-300 ease-in-out"
            >
              Book Free 15-Min Advisory Call <span className="ml-2 text-xl">📞</span>
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 md:ml-8 w-full max-w-lg z-10">
            <img
              src="/assets/Hero2.jpg"
              alt="Family protected by insurance, financial security"
              className="rounded-2xl shadow-xl w-full h-auto object-cover transform hover:scale-105 transition duration-300 ease-in-out border-4 border-blue-200"
            />
          </div>
        </section>

        {/* Introduction to Services Section (Kept as is, as it complements the new slogan) */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-12 bg-blue-50 text-center">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At Perificio, we provide **personalized and tax-optimized insurance solutions**, ensuring peace of mind for you and your loved ones. Our recommendations are always in your best interest.
          </p>
        </section>

        {/* New - Decide Right Insurance Mix CTA */}
        <section className="w-full bg-red-600 text-white py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need help deciding on the right insurance mix?
            </h2>
            <a
                href="#contact-form-section"
                className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-md transition transform hover:scale-105 duration-300 ease-in-out text-lg"
            >
                Book a free 15-min advisory call with our team today <FaArrowRight className="inline-block ml-2" />
            </a>
        </section>

        {/* Our Support/Services Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-white border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900">
            Our Support Includes
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-start text-left border border-gray-100 hover:shadow-lg transition duration-300 ease-in-out">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-blue-800 ml-3">{service.title}</h3>
                </div>
                <ul className="text-gray-700 list-disc list-inside text-base space-y-2">
                  {service.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-blue-100 border-t border-blue-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900">
            Our Simple Advisory Process
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-blue-300 hover:shadow-lg transition duration-300 ease-in-out">
                {step.icon}
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{step.step}</h3>
                <p className="text-gray-700 text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools We Offer Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-white border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900">
            Tools We Offer
          </h2>
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
            {toolsOfferings.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200 hover:shadow-lg transition duration-300 ease-in-out text-center"
              >
                {tool.icon}
                <span className="text-blue-800 font-medium text-lg">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>


        {/* Why Clients Trust Us Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-blue-100 border-t border-blue-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900">
            Why Clients Trust Us
          </h2>
          <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-1"> {/* Changed to 1 column for clearer presentation of bullet points */}
            {trustReasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-lg shadow-md p-6 border border-blue-300 hover:shadow-lg transition duration-300 ease-in-out"
              >
                {reason.icon}
                <span className="text-gray-800 font-medium text-lg">{reason.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-white border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition duration-300 ease-in-out">
                <FaQuoteLeft className="text-red-600 text-4xl mb-4" />
                <p className="italic text-gray-700 mb-4 flex-grow">"{testimonial.quote}"</p>
                <p className="font-semibold text-blue-700">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-blue-50 border-t border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100">
                <button
                  className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-blue-800 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <FaQuestionCircle className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180 text-red-600' : 'rotate-0 text-blue-600'}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-5 pb-5 text-gray-700 text-base border-t border-gray-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact-form-section"
          className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 bg-gray-50 flex flex-col md:flex-row items-center justify-center gap-12 font-inter"
        >
          {/* Left Section: Text Content */}
          <div className="md:w-1/2 text-center md:text-left max-w-lg">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-blue-900 mb-6 leading-tight">
              GOT QUESTIONS? <span className="text-red-600">LET'S TALK!</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Schedule a Call with Our Financial Advisor and Get Expert Insights Today!
            </p>
          </div>

          {/* Right Section: Contact Form */}
          <div className="md:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <div className="text-center mb-6">
              {/* Logo Placeholder */}
              <div className="mb-4">
                <span className="text-3xl font-montserrat font-extrabold text-[#1D4ED8]">Perficio</span>
              </div>
              <hr className="border-t border-gray-200" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-base font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-gray-700 text-base font-medium mb-2">
                  Mobile Number *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500 text-base">
                    IN +91
                  </span>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    placeholder="Enter your number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-base font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="agreedToTerms"
                  name="agreedToTerms"
                  checked={form.agreedToTerms}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreedToTerms" className="ml-2 text-gray-700 text-sm">
                  I agree to the{" "}
                  <a href="/terms-conditions" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-300 ease-in-out text-lg mt-4"
              >
                Continue
              </button>

              {submitted && (
                <p className="text-center text-green-600 font-semibold mt-4">
                  Your request has been sent successfully! We will contact you shortly.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}