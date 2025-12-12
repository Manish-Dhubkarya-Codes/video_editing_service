import React, { useEffect, useState } from 'react';
import { FaPlay, FaArrowRight, FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

// --- Data: Client Reviews ---
const REVIEWS = [
  { id: 1, name: "Sarah J.", role: "Content Creator", text: "The transition at 0:15 is pure magic. Retention skyrocketed!", img: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "TechFlow Inc.", role: "Marketing Agency", text: "Fastest turnaround we've seen. The color grading is cinema-grade.", img: "https://i.pravatar.cc/150?u=3" },
  { id: 3, name: "Marcus D.", role: "Documentary Lead", text: "You saved our raw footage. The sound design brought it to life.", img: "https://i.pravatar.cc/150?u=2" },
  { id: 4, name: "Luxe Estate", role: "Real Estate", text: "Crisp, professional, and on-brand. Our ads are finally converting.", img: "https://i.pravatar.cc/150?u=4" },
];

// --- Helper: Decrypt Text ---
const DecryptText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [display, setDisplay] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    
    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplay(text.split('').map((_, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(startAnimation, delay);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [text, delay]);

  return <span>{display}</span>;
};

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        {/* The Video Source - Removed opacity on video tag for brightness */}
        <video 
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>

        {/* The "Gradient Mask" - FIXED: Made much more transparent on the right side */}
        {/* Note: Changed bg-linear-to-r to bg-gradient-to-r for standard Tailwind support */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-50/95 via-slate-50/50 to-transparent"></div>
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full w-full">
        
        {/* --- LEFT: Typography & CTA --- */}
        {/* Added min-w-0 to prevent flexbox blowout */}
        <div className="lg:col-span-7 text-left space-y-8 min-w-0">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-sm animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">Accepting New Projects</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter wrap-break-words">
            <span className="block opacity-0 animate-slide-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>VISUAL</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 animate-slide-in h-[1.1em] overflow-visible" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
               <DecryptText text="STORYTELLING" delay={500} />
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium opacity-0 animate-slide-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            We don't just edit videos; we engineer attention. High-end post-production for brands that demand cinematic excellence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-slide-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-slate-900 text-white font-bold rounded-lg overflow-hidden shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                START EDITING <FaArrowRight />
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-300 text-slate-900 font-bold rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FaPlay className="text-xs ml-0.5" />
              </div>
              WATCH REEL
            </button>
          </div>
        </div>

        {/* --- RIGHT: 3D Review Stream --- */}
        {/* Added w-full and overflow-hidden to parent to contain the 3D element */}
        <div className="lg:col-span-5 relative h-[600px] perspective-1000 hidden lg:block w-full">
           
           {/* The "Glass Pane" Container */}
           <div className="absolute inset-0 transform rotate-y-[-10deg] rotate-x-[5deg] preserve-3d w-full">
             
             {/* Floating Header */}
             <div className="absolute -top-12 -right-4 z-30 bg-white shadow-2xl p-4 rounded-xl border-l-4 border-blue-600 animate-bounce-slow">
                 <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/150?u=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="client"/>)}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">100+ Happy Clients</p>
                        <div className="flex text-yellow-400 text-xs"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                    </div>
                 </div>
             </div>

             {/* The Infinite Scroll Track */}
             <div className="h-full overflow-hidden relative mask-image-linear">
               <div className="animate-infinite-scroll space-y-5 pb-10 w-full">
                 {/* Duplicating array for seamless loop */}
                 {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, idx) => (
                   <div 
                     key={`${review.id}-${idx}`}
                     className="bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300 group max-w-sm ml-auto mr-auto"
                   >
                     <div className="flex justify-between items-start mb-3">
                       <div className="flex items-center gap-3">
                         <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white" />
                         <div>
                           <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
                           <p className="text-xs text-blue-600 font-medium">{review.role}</p>
                         </div>
                       </div>
                       <FaQuoteLeft className="text-slate-200 text-xl group-hover:text-blue-200 transition-colors" />
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed font-medium">"{review.text}"</p>
                     <div className="mt-3 flex items-center gap-1 text-[10px] text-green-600 bg-green-50 w-fit px-2 py-1 rounded-md">
                         <FaCheckCircle /> Verified Project
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Decorative timeline line */}
             <div className="absolute top-0 bottom-0 left-4 w-1 bg-linear-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>
           </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 animate-fade-in"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Scroll to Explore</span>
        <div className="w-0.5 h-12 bg-slate-200 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 animate-scroll-drop rounded-full"></div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .rotate-y-n10 { transform: rotateY(-10deg); }
        
        .mask-image-gradient {
           mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }

        @keyframes infinite-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); } 
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-drop {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-drop {
          animation: scroll-drop 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }

        @keyframes slide-in {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in {
            animation-name: slide-in;
            animation-duration: 0.8s;
        }

        @keyframes bounce-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
           animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;