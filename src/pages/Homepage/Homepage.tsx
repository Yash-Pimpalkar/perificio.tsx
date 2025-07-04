
import { TPost } from '@/app/types';
import React from 'react'
import ViewBlogs from '@/components/Blogs/ViewBlogs';
import AnimatedSection from '@/components/AnimatedComponent/AnimatedSection';
import MovingImages from '@/components/HeroContainer/MovingImages';

interface MarketDataItem {
  name: string;
  price: number;
}

type MarketScrollerType = 'price' | 'custom';

interface MarketScrollerProps {
  data: MarketDataItem[];
  animationSpeed: number; // In seconds
  type: MarketScrollerType;
}
const getPosts = async (): Promise<TPost[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });

    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};


const Homepage = () => {


  // State for chatbot visibility


  const testimonials = [
    {
      quote: "Their team helped me structure my term and health cover optimally—saved tax and gave peace of mind.",
      author: "Arjun S.",
      role: "Entrepreneur"
    },
    {
      quote: "Comprehensive wealth management with a focus on tax efficiency. Exactly what I needed!",
      author: "Priya M.",
      role: "Senior Executive"
    },
    {
      quote: "The best part is their unbiased approach. They truly put their clients' interests first.",
      author: "Rahul K.",
      role: "Business Owner"
    }
  ];

  const services = [
    {
      title: 'Insurance Advisory',
      description: 'Term & Health Insurance | Tax-Benefit Focused',
      icon: '�️'
    },
    {
      title: 'Taxation Services',
      description: 'Income Tax | GST | International Tax | Tools',
      icon: '📊'
    },
    {
      title: 'Wealth Management',
      description: 'Investments | Retirement | Estate | NRI Desk',
      icon: '💰'
    }
  ];

  // Data for the rolling service ads
  const rollingServiceCards = [
    {
      mainService: 'Income Tax Return (ITR)',
      price: 'Starting ₹1000',
      tagline: 'Maximize Savings, Minimize Stress! Effortless & Accurate Filing.',
      icon: '📈'
    },
    {
      mainService: 'GST Return',
      price: 'Just ₹1000',
      tagline: 'Stay Compliant, Stay Ahead! Smooth & Timely GST Filing.',
      icon: '🧾'
    },
    {
      mainService: 'RERA Return',
      price: 'Only ₹500',
      tagline: 'Seamless Compliance for Your Real Estate Projects.',
      icon: '🏗️'
    }
  ];

  // New data for the blog posts
  const blogPosts = [
    {
      image: 'https://via.placeholder.com/400x250/1D4ED8/FFFFFF?text=Market+Notes+1', // Placeholder Image 1
      title: 'Market Morning Notes',
      date: '5th June 2025',
      category: 'Perficio Blog',
      excerpt: 'US indices closed mixed on Wednesday over weak economic data. Investors cautious amidst global tensions.'
    },
    {
      image: 'https://via.placeholder.com/400x250/B91C1C/FFFFFF?text=Market+Insights+2', // Placeholder Image 2
      title: 'Investing in ELSS: A Tax-Saving Guide',
      date: '4th June 2025',
      category: 'Perficio Blog',
      excerpt: 'ELSS (Equity Linked Savings Scheme) offers dual benefits of tax savings and wealth creation. Learn more...'
    },
    {
      image: 'https://via.placeholder.com/400x250/1D4ED8/FFFFFF?text=Financial+Tips+3', // Placeholder Image 3
      title: 'Decoding the Budget 2025',
      date: '3rd June 2025',
      category: 'Perficio Blog',
      excerpt: 'A comprehensive analysis of the key announcements in the latest Union Budget and their impact on you.'
    }
  ];

  // --- Market Watch Data ---
  // Initializing with dummy data so the scrollers are never empty on first load
  const initialCapitalData = [
    { name: 'AXISBANK', current: 105.50, change: 0.50, percentChange: 0.05, status: 'positive' },
    { name: 'BAJAJ-AUTO', current: 9555.00, change: 37.50, percentChange: 0.39, status: 'positive' },
    { name: 'BAJAJFINSV', current: 1980.70, change: 44.70, percentChange: 2.30, status: 'positive' },
    { name: 'BAJFINANCE', current: 9372.00, change: 438.00, percentChange: 4.90, status: 'positive' },
    { name: 'BEL', current: 281.90, change: -2.80, percentChange: -0.98, status: 'negative' },
    { name: 'BHARTIARTL', current: 1370.10, change: -8.70, percentChange: -0.63, status: 'negative' },
    { name: 'DRREDDY', current: 6500.00, change: 10.00, percentChange: 0.15, status: 'positive' },
    { name: 'GRASIM', current: 2300.00, change: -15.00, percentChange: -0.65, status: 'negative' },
  ];

  const initialMutualFundData = [
    { name: 'SBI Bluechip Fund', nav: 52.35, change: 0.15, percentChange: 0.29, status: 'positive' },
    { name: 'HDFC Mid-Cap Opp.', nav: 180.12, change: -0.50, percentChange: -0.28, status: 'negative' },
    { name: 'ICICI Pru. Flexicap', nav: 45.78, change: 0.30, percentChange: 0.66, status: 'positive' },
    { name: 'Mirae Asset Large Cap', nav: 70.05, change: 0.02, percentChange: 0.03, status: 'positive' },
    { name: 'Axis Small Cap', nav: 70.05, change: -0.02, percentChange: -0.03, status: 'negative' },
    { name: 'Kotak Equity Hybrid', nav: 70.05, change: 0.12, percentChange: 0.17, status: 'positive' },
    { name: 'Parag Parikh Flexi', nav: 70.05, change: 0.08, percentChange: 0.11, status: 'positive' },
    { name: 'Canara Robeco Bluechip', nav: 70.05, change: -0.05, percentChange: -0.07, status: 'negative' },
  ];

  const initialCurrencyData = [
    { name: 'USD/INR', rate: 83.50, change: -0.05, percentChange: -0.06, status: 'negative' },
    { name: 'EUR/INR', rate: 90.10, change: 0.12, percentChange: 0.13, status: 'positive' },
    { name: 'GBP/INR', rate: 106.20, change: 0.08, percentChange: 0.08, status: 'positive' },
    { name: 'JPY/INR', rate: 0.537, change: 0.001, percentChange: 0.19, status: 'positive' },
  ];


  const bannerImages = [
    { src: '/assets/gst-banner.png', url: '/services/gst' },
    { src: '/assets/itr-banner.png', url: '/services/itr' },
    { src: '/assets/rera-banner.png', url: '/services/rera' },
  ];





  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter relative">

      {/* Added relative for chatbot positioning */}
      {/* Dynamic Services Advertising Banner with Rolling Cards  */}
  
  <section className="">
    <MovingImages />
  </section>



<AnimatedSection>
      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-8 md:mb-12 text-[#1D4ED8]">
            What Our <span className="text-[#B91C1C]">Clients Say</span>
          </h2>

          <div className="overflow-x-auto hide-scrollbar">
            {/* Added group-hover to the parent of the scrolling div */}
            <div className="flex gap-4 md:gap-6 min-w-max px-2 sm:px-4 md:px-8 animate-scroll group-hover:[animation-play-state:paused]"
              style={{ animation: 'scroll 60s linear infinite' }}>
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <div key={index} className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition relative">
                  <div className="absolute top-3 right-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EFF6FF] text-[#1D4ED8] font-bold flex items-center justify-center mr-3 text-sm sm:text-base">
                      {testimonial.author.split(' ').map(word => word[0]).join('').toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
      <AnimatedSection>
      {/* Market Watch Section */}
      <section className="py-8 md:py-8 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <ViewBlogs />
        </div>
      </section>
      </AnimatedSection>
      {/* Blog/Knowledge Base Section */}


      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-[#F0F8FF]"> {/* Alice Blue background */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-6xl">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold text-[#1D4ED8] leading-tight mb-4">
              <span className="block">GOT QUESTIONS?</span>
              <span className="block text-[#B91C1C]">LET'S TALK!</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-md mx-auto md:mx-0">
              Schedule a <span className="font-bold">FREE</span> call with our expert Financial Advisor and gain personalized insights today.
            </p>
          </div>

          <div className="md:w-1/2 w-full max-w-lg bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex justify-center mb-4 sm:mb-6">
              <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" />
            </div>
            <hr className="mb-4 sm:mb-6" />

            <form className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name *</label>
                <input type="text" id="name" required placeholder="Your Name"
                  className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:ring-2 focus:ring-[#1D4ED8] outline-none text-sm" />
              </div>

              <div>
                <label htmlFor="mobile" className="block mb-1 text-sm font-medium text-gray-700">Mobile Number *</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2 sm:p-3">
                  <span className="mr-2 text-base sm:text-xl">🇮🇳</span>
                  <input type="tel" id="mobile" required placeholder="Enter your number"
                    className="w-full outline-none focus:ring-0 text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" required placeholder="your@email.com"
                  className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:ring-2 focus:ring-[#1D4ED8] outline-none text-sm" />
              </div>

              <div className="space-y-2">
                <label htmlFor="terms" className="flex items-center text-xs sm:text-sm text-gray-700">
                  <input type="checkbox" id="terms" className="mr-2 accent-[#1D4ED8]" required />
                  I agree to the <a href="#" className="text-[#1D4ED8] underline ml-1">Terms & Conditions</a> and <a href="#" className="text-[#1D4ED8] underline ml-1">Privacy Policy</a>
                </label>
              </div>


            </form>
          </div>
        </div>
      </section>

      {/* Floating Help Button */}

    </div>

  );
}

export default Homepage