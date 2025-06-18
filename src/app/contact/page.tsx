'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [popup, setPopup] = useState<{
    show: boolean;
    success: boolean;
    message: string;
  }>({ show: false, success: true, message: '' });

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || 'Something went wrong');

      setPopup({ show: true, success: true, message: 'Message sent successfully!' });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error: any) {
      setPopup({ show: true, success: false, message: error.message });
    }

    setTimeout(() => setPopup((prev) => ({ ...prev, show: false })), 3000);
  };
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">


{popup.show && (
        <div className="fixed top-5 right-5 z-50 bg-white border rounded-lg shadow-lg p-4 flex items-center gap-3 animate-bounce-in">
          {popup.success ? (
            <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <AiOutlineCloseCircle className="text-red-500 text-2xl" />
          )}
          <span className="text-sm text-gray-800 font-medium">{popup.message}</span>
        </div>
      )}
        {/* Hero Section */}
        <section
          className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #FDF7E7 0%, #FAEAB5 100%)',
          }}
        >
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 font-poppins leading-tight">
              Contact <span className="text-red-700">Perficio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              We're here to assist you with all your financial and legal needs. Reach out today!
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-100">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
                Our Details
              </h2>
              <p className="text-gray-700 text-lg font-inter mb-2">
                We're always ready to listen.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <span className="text-blue-600 text-3xl mr-4">📍</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 font-poppins">Visit Us</h3>
                  <p className="text-gray-600 font-inter">
                    [Your Firm Address Line 1],<br />
                    [Your Firm Address Line 2],<br />
                    [City, State, Pin Code], India.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <span className="text-blue-600 text-3xl mr-4">📞</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 font-poppins">Call Us</h3>
                  <p className="text-gray-600 font-inter">
                    <a href="tel:+91[Your Phone Number]" className="hover:underline">
                      +91 [Your Phone Number]
                    </a><br />
                    Available Mon-Fri, 9 AM - 6 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <span className="text-blue-600 text-3xl mr-4">📧</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 font-poppins">Email Us</h3>
                  <p className="text-gray-600 font-inter">
                    <a href="mailto:info@perficio.com" className="hover:underline">info@perficio.com</a><br />
                    We aim to respond within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-inner border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins text-center lg:text-left">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-poppins mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter"
                  required
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-poppins mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter"
                  required
                />
                 {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-poppins mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter"
                />
                   {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-poppins mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter"
                  required
                />
                   {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-poppins mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter"
                  required
                />
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold font-poppins py-3 rounded-md shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 font-poppins">
            Find Us on the Map
          </h2>
          <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?q=Mumbai+Maharashtra&z=10&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUsPage;
