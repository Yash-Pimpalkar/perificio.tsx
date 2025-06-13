'use client'
import Chatbot from '@/components/ChatBot/ChatBot';
import React, { useEffect, useState } from 'react'




const Homepage = () => {
    // State for chatbot visibility
  const [showChatbot, setShowChatbot] = useState(false);

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

  const [capitalMarketData, setCapitalMarketData] = useState(initialCapitalData);
  const [mutualFundData, setMutualFundData] = useState(initialMutualFundData);
  const [currencyExchangeData, setCurrencyExchangeData] = useState(initialCurrencyData);
const bannerImages = [
  { src: '/assets/gst-banner.png', url: '/services/gst' },
  { src: '/assets/itr-banner.png', url: '/services/itr' },
  { src: '/assets/rera-banner.png', url: '/services/rera' },
];


  // ** API KEYS ARE NOW SET **
  const ALPHA_VANTAGE_API_KEY = 'W5P8D6BWTJSP0K59';
  const EXCHANGE_RATE_API_KEY = '652799a528644db32390372f'; // Assuming this is for ExchangeRate-API or similar

  useEffect(() => {
    const fetchCapitalMarketData = async () => {
      try {
        const symbols = ['IBM', 'AAPL', 'MSFT', 'GOOGL', 'AMZN']; // Examples of global stocks
        const fetchedStocks = [];

        for (const symbol of symbols) {
          const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`);
          const data = await response.json();

          if (data['Global Quote'] && data['Global Quote']['01. symbol']) {
            const quote = data['Global Quote'];
            const name = quote['01. symbol'];
            const current = parseFloat(quote['05. price']);
            const change = parseFloat(quote['09. change']);
            const percentChange = parseFloat(quote['10. change percent'].replace('%', ''));

            fetchedStocks.push({
              name: name,
              current: current,
              change: change,
              percentChange: percentChange,
              status: change >= 0 ? 'positive' : 'negative'
            });
          } else {
            console.warn(`Alpha Vantage: Could not fetch data for ${symbol}. Data:`, data);
          }
        }
        // Only update if fetched data is not empty, otherwise keep existing (dummy) data
        if (fetchedStocks.length > 0) {
          setCapitalMarketData(fetchedStocks);
        } else {
          console.warn("Alpha Vantage: No capital market data fetched, retaining dummy data.");
          setCapitalMarketData(initialCapitalData); // Revert to initial dummy if fetch fails
        }

      } catch (error) {
        console.error('Error fetching capital market data:', error);
        setCapitalMarketData(initialCapitalData); // Fallback to dummy data on network error
      }
    };

    const fetchMutualFundData = async () => {
      // Mutual fund data fetching logic (currently using dummy data)
      // This function can be expanded later if a suitable API is found.
      setMutualFundData(initialMutualFundData); // Always use dummy data for now
    };

    const fetchLiveCurrencyExchangeData = async () => {
      try {
        const currencyPairs = [
          { from: 'USD', to: 'INR' },
          { from: 'EUR', to: 'INR' },
          { from: 'GBP', to: 'INR' },
          { from: 'JPY', to: 'INR' }
        ];

        const fetchedCurrencies = [];
        for (const pair of currencyPairs) {
          // Using ExchangeRate-API for direct currency conversion
          const response = await fetch(`https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/pair/${pair.from}/${pair.to}`);
          const data = await response.json();

          if (data.result === 'success' && data.conversion_rate) {
            const rate = parseFloat(data.conversion_rate); // Ensure rate is a number

            // Simulating a small random change for dynamic appearance
            const simulatedChange = (Math.random() * 0.1 * (Math.random() > 0.5 ? 1 : -1));
            const simulatedPercentChange = (simulatedChange / rate) * 100;
            const status = simulatedChange >= 0 ? 'positive' : 'negative';

            fetchedCurrencies.push({
              name: `${pair.from}/${pair.to}`,
              rate: rate,
              change: simulatedChange,
              percentChange: simulatedPercentChange,
              status: status
            });
          } else {
            console.warn(`ExchangeRate-API: Could not fetch currency for ${pair.from}/${pair.to}. Data:`, data);
          }
        }

        // Only update if fetched data is not empty, otherwise keep existing (dummy) data
        if (fetchedCurrencies.length > 0) {
          setCurrencyExchangeData(fetchedCurrencies);
        } else {
          console.warn("ExchangeRate-API: No currency exchange data fetched, retaining dummy data.");
          setCurrencyExchangeData(initialCurrencyData); // Revert to initial dummy if fetch fails
        }

      } catch (error) {
        console.error('Error fetching live currency exchange data:', error);
        setCurrencyExchangeData(initialCurrencyData); // Fallback to dummy data on network error
      }
    };

    // Initial fetch
    fetchCapitalMarketData();
    fetchMutualFundData();
    fetchLiveCurrencyExchangeData();

    // Set up interval for continuous refresh
    // Be mindful of API rate limits!
    const interval = setInterval(() => {
      fetchCapitalMarketData();
      fetchMutualFundData();
      fetchLiveCurrencyExchangeData();
    }, 60000); // Refresh every 60 seconds (1 minute)

    return () => clearInterval(interval); // Clean up on unmount
  }, [ALPHA_VANTAGE_API_KEY, EXCHANGE_RATE_API_KEY]);

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

const MarketScroller: React.FC<MarketScrollerProps> = ({ data, animationSpeed, type }) => {
  const duplicatedData = [...data, ...data];

  if (duplicatedData.length === 0) {
    return (
      <div className="w-full text-center py-4 text-gray-500">
        No market data available.
      </div>
    );
  }

  return (
    <div
      className="whitespace-nowrap overflow-hidden"
      style={{
        animation: `scroll-left ${animationSpeed}s linear infinite`,
      }}
    >
      {duplicatedData.map((item, index) => (
        <span key={index} className="inline-block px-4">
          {type === 'price' ? `${item.name}: ₹${item.price.toFixed(2)}` : item.name}
        </span>
      ))}
    </div>
  );
};


  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter relative"> {/* Added relative for chatbot positioning */}
      {/* Dynamic Services Advertising Banner with Rolling Cards  */}
     <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 lg:px-20 py-12 md:py-16 bg-gradient-to-br from-[#E0F2FE] to-[#BFDBFE] text-[#1D4ED8] text-center">

  <div className="w-full overflow-hidden relative group py-4 md:py-8">
    <div
      className="flex gap-4 md:gap-8 min-w-max px-2 sm:px-4 md:px-8 animate-scroll-ads group-hover:[animation-play-state:paused]"
      style={{ animation: 'scroll-ads 60s linear infinite' }}
    >
      {[...bannerImages, ...bannerImages].map((banner, index) => (
       <a
  key={index}
  href={banner.url}
  className="w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[75vw] aspect-[16/9] flex-shrink-0 overflow-hidden rounded-xl"
  target="_self"
>
  <img
    src={banner.src}
    alt={`Banner ${index + 1}`}
    className="w-full h-full object-cover shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    loading="lazy"
  />
</a>

      ))}
    </div>
  </div>

  <a
    href="#contact"
    className="mt-8 md:mt-12 inline-block bg-[#B91C1C] hover:bg-[#DC2626] text-white font-montserrat font-semibold px-6 py-3 md:px-10 md:py-5 rounded-lg shadow-xl transition transform hover:scale-105 text-base md:text-lg"
  >
    Explore All Services & Get Started
  </a>
</section>


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

      {/* Market Watch Section */}
    

      {/* Blog/Knowledge Base Section */}
      <section className="py-12 md:py-20 bg-[#F8FAFC]"> {/* Very light gray background */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#1D4ED8] mb-8 md:mb-12">
            Knowledge Base
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 justify-items-center">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm overflow-hidden">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-40 sm:h-48 object-cover" />
                  {/* Perficio Name/Logo overlay */}
                  <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-800 border border-gray-200">
                    PERFICIO
                  </div>
                </div>
                <div className="p-4 sm:p-6 text-left">
                  <h3 className="text-lg sm:text-xl font-montserrat font-bold text-[#1D4ED8] mb-1 line-clamp-2">{post.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{post.date} - <span className="font-semibold">{post.category}</span></p>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="p-4 pt-0 text-right">
                  <a href="#" className="text-[#1D4ED8] hover:text-[#3B82F6] hover:underline font-semibold text-sm">Read More &rarr;</a>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="inline-block bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-montserrat font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 text-base">
            View All Blogs
          </a>
        </div>
      </section>

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

              <button type="submit" className="w-full bg-[#B91C1C] hover:bg-[#DC2626] text-white font-montserrat font-semibold py-2 sm:py-3 rounded-md shadow transition text-base">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating Help Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 bg-[#B91C1C] text-white p-4 rounded-full shadow-lg hover:bg-[#DC2626] transition-all duration-300 z-50 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#B91C1C] focus:ring-offset-2 flex items-center justify-center space-x-2 text-lg font-semibold px-6 py-3" // Adjusted styling for a wider button with text
        aria-label={showChatbot ? "Close Help" : "Open Help"}
      >
        {/* Help icon (simple question mark or speech bubble) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
        <span>Help</span>
      </button>

      {/* Chatbot Modal/Panel */}
      {showChatbot && (
        <div className="fixed bottom-24 right-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[450px] sm:h-[500px] md:h-[550px] bg-white rounded-lg shadow-2xl z-40 transition-transform transform origin-bottom-right duration-300 ease-out animate-slide-up">
          <Chatbot services={services} />
        </div>
      )}

      <style>
        {`
          /* Import Google Fonts */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap');

          /* Define custom font families */
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
          }

          /* Keyframes for continuous scrolling */
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-ads {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          /* This animation is used for all market data scrollers */
          @keyframes scroll-market-data {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Chatbot slide-up animation */
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-slide-up {
            animation: slide-up 0.3s ease-out forwards;
          }

          /* Hide scrollbar */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {


            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Line clamping utilities */
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>

  );}

export default Homepage