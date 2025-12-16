import React from 'react';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaHeart, 
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: 'about' },
      { name: 'Portfolio', href: 'portfolio' },
      { name: 'Contact', href: 'contact' },
      { name: 'Careers', href: 'careers' },
    ],
    services: [
      { name: 'Events', href: 'services' },
      { name: 'Social Media', href: 'services' },
      { name: 'Audio', href: 'services' },
      { name: 'Photo', href: 'services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  };

  const socialLinks = [
    { 
      Icon: FaWhatsapp, 
      href: 'https://wa.me/918224889744', 
      color: 'hover:bg-[#25D366]' 
    },
    { 
      Icon: FaInstagram, 
      href: 'https://www.instagram.com/trendingediitz?igsh=MW9ldXljd25qYThmZA==', 
      color: 'hover:bg-pink-600' 
    },
    { 
      Icon: FaFacebookF, // Replaced LinkedIn/Twitter with Facebook
      href: 'https://www.facebook.com/share/1K5m4RRo9c/', 
      color: 'hover:bg-blue-600' 
    },
    { 
      Icon: FaYoutube, 
      href: 'https://youtube.com/@trendingediitz?si=yWUP5OCuUnfk1s3t', 
      color: 'hover:bg-red-600' 
    }
  ];

    const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-10 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900">
              <span className="bg-sky-100 text-sky-600 border border-sky-200 px-2 py-1 rounded-lg text-xs uppercase tracking-wider">Trending</span>
              <span>Ediitz...</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We turn raw footage into cinematic masterpieces. Trusted by over 500+ creators and brands worldwide to deliver high-retention video content.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, color, href }, index) => (
                <a 
                  key={index} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 ${color} hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-sky-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a onClick={() => scrollToSection(link.href)} className="group cursor-pointer relative flex w-fit items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-sky-600">
                    <FaArrowRight className="text-xs text-sky-500 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-sky-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a onClick={() => scrollToSection(link.href)} className="group cursor-pointer relative flex w-fit items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-sky-600">
                    <FaArrowRight className="text-xs text-sky-500 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col justify-start lg:items-start">
            <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-sky-500 rounded-full"></span>
            </h3>
            <div className="space-y-4 w-full">
              
              {/* Phone */}
              <a href="tel:+918224889744" className="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Call Us</p>
                  <p className="text-sm md:text-base font-bold text-slate-800 group-hover:text-sky-600 transition-colors">+91 82248 89744</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:trendingediitz@gmail.com" className="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Us</p>
                  <p className="text-sm md:text-[14px] font-bold text-slate-800 group-hover:text-purple-600 transition-colors">trendingediitz@gmail.com</p>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-slate-500 text-sm text-center md:text-left font-medium">
              Copyright © {currentYear} Trending Ediitz Services. All rights reserved.
            </p>


            {/* Made With Love */}
            <div className="flex items-center gap-1 text-slate-400 text-sm font-medium">
              <span>Made with</span>
              <FaHeart className="text-rose-500 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;