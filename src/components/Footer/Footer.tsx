import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#032a5b] text-white px-6 md:px-20 py-12 text-sm">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        
        {/* Logo & Contact */}
        <div className="flex flex-col gap-4">
          <img src="/logo-white.png" alt="Perificio Logo" className="w-28" />
          <p className="text-white">+91-9699 800 600</p>
          <p className="text-white">online@perificio.com</p>
          <div className="flex gap-4 mt-2">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Taxation */}
        <div>
          <h3 className="font-semibold mb-4">Taxation</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Direct Tax</a></li>
            <li><a href="#" className="hover:underline">Indirect Tax</a></li>
            <li><a href="#" className="hover:underline">NCS</a></li>
            <li><a href="#" className="hover:underline">RERA</a></li>
            <li><a href="#" className="hover:underline">FEMA</a></li>
          </ul>
        </div>

        {/* Wealth */}
        <div>
          <h3 className="font-semibold mb-4">Wealth</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Invest</a></li>
            <li><a href="#" className="hover:underline">Real Estate</a></li>
            <li><a href="#" className="hover:underline">NRI</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Safety Shield (Data Privacy)</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li>
              <div className="flex gap-2 mt-2">
                <img src="/google-play-badge.png" alt="Google Play" className="w-24" />
                <img src="/app-store-badge.png" alt="App Store" className="w-24" />
              </div>
            </li>
          </ul>
        </div>

        
      </div>

      {/* Disclaimer & Footer Bottom */}
      <div className="border-t border-white/20 mt-10 pt-6 text-xs text-white/80">
        <p className="mb-4">
          Perificio Wealth Private Limited makes no warranties or representations on services provided. Investments are subject to market risk. Consult a certified financial advisor before acting on any information.
        </p>
        <p>
          &copy; {new Date().getFullYear()} Perificio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
