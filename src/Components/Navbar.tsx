import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: '01 // ABOUT' },
    { id: 'services', label: '02 // SERVICES' },
    { id: 'portfolio', label: '03 // PORTFOLIO' },
    { id: 'pricing', label: '04 // ACCESS' },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 transition-opacity duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {navLinks.map((link) => (
          <button 
            key={link.id} 
            onClick={() => scrollToSection(link.id)}
            className="text-xl font-mono text-white tracking-widest hover:text-accent hover:animate-pulse"
          >
            {link.label}
          </button>
        ))}
      </div>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out animate-slide-down ${
          scrolled 
            ? 'top-4 mx-4 md:mx-auto max-w-6xl rounded-none md:rounded-full bg-[#030813]/90 backdrop-blur-md border border-accent/20 shadow-[0_0_30px_rgba(0,240,255,0.1)] py-3' 
            : 'top-0 w-full bg-[#030813]/60 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
        <div className="relative px-6 flex justify-between items-center overflow-hidden rounded-full">
          
          {/* Scanner Effect (Only visible when scrolled for a cleaner top view, or always if you prefer) */}
          <div className={`animate-scan ${!scrolled ? 'opacity-30' : 'opacity-100'}`}></div>

          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group z-10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 clip-angle group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
              <div className="w-2 h-2 bg-accent rotate-45 group-hover:animate-spin-fast shadow-[0_0_10px_var(--color-accent)]"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-widest text-white leading-none group-hover:text-accent transition-colors duration-300">NEXUS</span>
              <span className="font-mono text-[10px] text-gray-400 tracking-[0.3em] group-hover:text-white transition-colors duration-300">SYSTEMS</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 z-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-xs font-mono text-gray-400 hover:text-white transition-colors duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Glitch hover effect line */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-secondary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-75 ease-out"></span>
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2 bg-accent/5 border border-accent/50 text-accent font-mono text-xs tracking-widest hover:bg-accent hover:text-black transition-all duration-300 clip-angle-button hover:shadow-[0_0_20px_var(--color-accent)] active:scale-95"
            >
              INITIALIZE_CHAT
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-10 text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-accent mb-1.5 transition-all duration-300 shadow-[0_0_8px_var(--color-accent)] ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-4 ml-auto h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-accent mt-1.5 transition-all duration-300 shadow-[0_0_8px_var(--color-accent)] ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;