import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaHeart, FaArrowRight } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Careers', href: '#' },
    ],
    services: [
      { name: 'YouTube Editing', href: '#' },
      { name: 'Social Media Reels', href: '#' },
      { name: 'Corporate Video', href: '#' },
      { name: 'Color Grading', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
              <span className="bg-accent text-white px-2 py-1 rounded-lg">Pro</span>
              <span>Edit Services</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We turn raw footage into cinematic masterpieces. Trusted by over 500+ creators and brands worldwide to deliver high-retention video content.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Company
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-accent hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                    {/* Tiny arrow appears on hover via CSS group typically, here simple logic */}
                    <FaArrowRight className="text-xs opacity-50" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-accent hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                    <FaArrowRight className="text-xs opacity-50" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Stay Updated
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get the latest video trends and editing tips delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
              <button className="w-full py-3 bg-accent hover:bg-blue-600 text-white font-bold rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              Copyright © {currentYear} ProEdit Services. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Made With Love */}
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;