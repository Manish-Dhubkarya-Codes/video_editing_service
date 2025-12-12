import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaBars, FaTimes, FaTerminal, FaChevronRight } from 'react-icons/fa';

// --- Utility: Scramble Text (Kept your logic, just styled) ---
const ScrambleText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text.split('').map((_, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span 
      onMouseEnter={scramble} 
      className={`inline-block font-mono font-semibold cursor-pointer ${className}`}
    >
      {displayText}
    </span>
  );
};

// --- Main Navbar Component ---
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 50 && latest > previous) {
      setIsScrolled(true);
    } else if (latest < 50) {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'pricing', label: 'ACCESS' },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation Variants for Mobile Menu Stagger
  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#020617] md:hidden flex flex-col items-center justify-center border-l border-[#00E6FF]/30"
          >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#00E6FF15_1px,transparent_1px),linear-gradient(to_bottom,#00E6FF15_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute cursor-pointer top-6 right-6 text-[#00E6FF] p-2 border border-[#00E6FF]/20 rounded-full hover:bg-[#00E6FF]/10 transition-colors"
            >
              <FaTimes size={24} />
            </button>

            <div className="flex flex-col gap-8 items-center z-10 w-full px-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  variants={linkVariants}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-center group relative"
                >
                    <span className="block text-xs text-[#00E6FF] font-mono mb-1 tracking-widest opacity-70">{`0${idx + 1}`}</span>
                    <span className="text-4xl font-black font-sans text-white group-hover:text-[#00E6FF] transition-colors tracking-tighter drop-shadow-[0_0_10px_rgba(0,230,255,0.3)]">
                        {link.label}
                    </span>
                    {/* Mobile Bottom Border Animation */}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#00E6FF] shadow-[0_0_15px_#00E6FF] transition-all duration-300 group-hover:w-1/2"></span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed left-0 right-0 z-40 flex justify-center transition-all duration-500 ${
          isScrolled ? 'pt-4' : 'pt-0'
        }`}
      >
        <div 
          className={`
            relative flex items-center justify-between px-6 transition-all duration-500 ease-out
            ${isScrolled 
              ? 'w-[95%] md:w-[85%] lg:w-[75%] h-16 bg-[#030813]/80 backdrop-blur-xl rounded-full border border-[#00E6FF]/30 shadow-[0_0_20px_rgba(0,230,255,0.15)]' 
              : 'w-full h-24 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent'
            }
          `}
        >
          {/* Animated Scanner Line (Appears when scrolled) */}
          <div className={`absolute bottom-0 left-0 w-full h-[1px] overflow-hidden ${isScrolled ? 'rounded-full' : ''}`}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#00E6FF] to-transparent animate-[shimmer_3s_infinite] opacity-50" />
          </div>

          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group pl-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden bg-cyan-950/30 border border-[#00E6FF]/30 rounded-sm group-hover:border-[#00E6FF] transition-colors duration-300">
              <FaTerminal size={18} className="text-[#00E6FF] relative z-10 drop-shadow-[0_0_5px_#00E6FF]" />
              {/* Logo Glitch Background */}
              <div className="absolute inset-0 bg-[#00E6FF] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg tracking-[0.2em] text-white leading-none drop-shadow-md group-hover:text-[#00E6FF] transition-colors">
                NEXUS
              </span>
              <span className="font-mono text-[10px] text-[#00E6FF] tracking-[0.4em]">
                SYSTEMS
              </span>
            </div>
          </div>

          {/* Desktop Links - THE REQUESTED ANIMATION STYLE */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group relative flex flex-col items-center justify-center py-2"
              >
                {/* Number Prefix (Floating) */}
                <span className="absolute -top-1 -right-3 text-[9px] text-[#00E6FF] opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-mono">
                   {`0${idx + 1}`}
                </span>

                <div className="flex items-center gap-2">
                   {/* Tiny Arrow Slide-in */}
                   <FaChevronRight className="text-[10px] text-[#00E6FF] opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                   
                   {/* Scramble Text */}
                   <ScrambleText 
                      text={link.label} 
                      className="text-gray-300 text-sm tracking-wide transition-colors duration-300 group-hover:text-[#00E6FF]" 
                   />
                </div>

                {/* THE REQUESTED BORDER: Expands width + Glows #00E6FF */}
                <span 
                    className="absolute -bottom-0 left-0 h-[2px] w-0 bg-[#00E6FF] shadow-[0_0_10px_#00E6FF] transition-all duration-300 group-hover:w-full"
                ></span>
              </button>
            ))}
          </div>

          {/* CTA Button - "Initialize" */}
          <div className="hidden md:flex pr-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="
                group relative cursor-pointer px-6 py-2 overflow-hidden rounded-sm
                border border-[#00E6FF]/30 bg-[#00E6FF]/5
                hover:border-[#00E6FF] hover:bg-[#00E6FF]/10 transition-all duration-300
                shadow-[0_0_10px_rgba(0,230,255,0.1)] hover:shadow-[0_0_20px_rgba(0,230,255,0.4)]
              "
            >
              <div className="relative z-10 flex items-center gap-2 text-[#00E6FF] font-mono text-xs font-bold tracking-widest group-hover:text-white transition-colors">
                INITIALIZE
                <FaChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </div>
              
              {/* Button Fill Animation */}
              <div className="absolute inset-0 bg-[#00E6FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 opacity-20"></div>

              {/* Corner Accents */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#00E6FF] transition-all duration-300 group-hover:w-full group-hover:h-full opacity-50" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#00E6FF] transition-all duration-300 group-hover:w-full group-hover:h-full opacity-50" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden cursor-pointer text-white p-2 hover:text-[#00E6FF] transition-colors bg-white/5 rounded-md border border-white/10 hover:border-[#00E6FF]/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Custom Styles for Animation */}
      <style>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
};

export default Navbar;