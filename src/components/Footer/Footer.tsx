import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#032a5b] text-white px-6 md:px-20 pt-14 pb-20 text-sm font-inter overflow-hidden">

      {/* Background CTA Layer */}
    

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-10 relative">

        {/* Logo & Contact */}
        <div className="space-y-4">
          <img src="/logo-white.png" alt="Perificio Logo" className="w-32" />
          <p className="text-white/90 text-sm">📞 +91-9699 800 600</p>
          <p className="text-white/90 text-sm">✉️ online@perificio.com</p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-blue-400 transition-all duration-200">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition-all duration-200">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition-all duration-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition-all duration-200">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Taxation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">📄 Taxation</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white">Direct Tax</a></li>
            <li><a href="#" className="hover:text-white">Indirect Tax</a></li>
            <li><a href="#" className="hover:text-white">NCS</a></li>
            <li><a href="#" className="hover:text-white">RERA</a></li>
            <li><a href="#" className="hover:text-white">FEMA</a></li>
          </ul>
        </div>

        {/* Wealth */}
        <div>
          <h3 className="text-lg font-semibold mb-4">💼 Wealth</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white">Invest</a></li>
            <li><a href="#" className="hover:text-white">Real Estate</a></li>
            <li><a href="#" className="hover:text-white">NRI</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">🏢 About Us</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white">Safety Shield (Data Privacy)</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li>
              <div className="flex gap-3 mt-4">
                <img src="/google-play-badge.png" alt="Google Play" className="w-28" />
                <img src="/app-store-badge.png" alt="App Store" className="w-28" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/20 mt-12 pt-6 text-xs text-white/60 relative z-10">
        <p className="mb-4 leading-relaxed">
          Perificio Wealth Private Limited makes no warranties or representations on services provided. Investments are subject to market risk. Consult a certified financial advisor before acting on any information.
        </p>
        <p className="text-white/40 text-center">
          &copy; {new Date().getFullYear()} Perificio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
