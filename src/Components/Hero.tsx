import React, { useEffect, useState, useRef } from 'react';
import { FaPlay, FaArrowRight, FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import EditingVideo from "../assets/Back.mp4"

// --- Data: Client Reviews ---
const REVIEWS_RAW = [
  { id: 1, name: "Sarah J.", role: "Content Creator", text: "The transition at 0:15 is pure magic. Retention skyrocketed!", img: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "TechFlow Inc.", role: "Marketing Agency", text: "Fastest turnaround we've seen. Color grading is cinema-grade.", img: "https://i.pravatar.cc/150?u=3" },
  { id: 3, name: "Marcus D.", role: "Documentary Lead", text: "You saved our raw footage. The sound design brought it to life.", img: "https://i.pravatar.cc/150?u=2" },
  { id: 4, name: "Luxe Estate", role: "Real Estate", text: "Crisp, professional, and on-brand. Our ads are finally converting.", img: "https://i.pravatar.cc/150?u=4" },
];

// Duplicate data 4 times to ensure we have enough buffer for the seamless loop reset
const REVIEWS = [...REVIEWS_RAW, ...REVIEWS_RAW, ...REVIEWS_RAW, ...REVIEWS_RAW];

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

  // --- JS-BASED INFINITE SCROLL LOGIC ---
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (isPaused) return;

      // 1. Handle Desktop Vertical Scroll
      if (desktopScrollRef.current) {
        const el = desktopScrollRef.current;
        // Scroll speed: 0.5px per frame
        el.scrollTop += 0.5; 
        // Seamless Reset: If we've scrolled past half the content height, jump back to 0
        // Since the 2nd half is a clone of the 1st half, the user sees no jump.
        if (el.scrollTop >= el.scrollHeight / 2) {
            el.scrollTop = 0;
        }
      }

      // 2. Handle Mobile Horizontal Scroll
      if (mobileScrollRef.current) {
        const el = mobileScrollRef.current;
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the loop
    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);


  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-24 pb-12 lg:py-0">
      
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={EditingVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-slate-100 via-slate-100/80 to-slate-100/40 lg:bg-linear-to-r lg:from-slate-50/95 lg:via-slate-50/50 lg:to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full w-full">
        
        {/* --- LEFT: Typography & CTA --- */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 min-w-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-sm animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-slate-600 tracking-widest uppercase">Accepting New Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter w-full">
            <span className="block opacity-0 animate-slide-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>VISUAL</span>
            <span className="block text-[35px] sm:text-[65px] lg:text-[70px] xl:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 animate-slide-in h-[1.1em] overflow-visible" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <DecryptText text="STORYTELLING" delay={500} />
            </span>
            <span className="block mt-2 sm:mt-4 text-[24px] sm:text-[45px] lg:text-[50px] xl:text-[70px] font-bold opacity-0 animate-slide-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <span className="text-slate-400 mr-3 text-[0.6em] align-middle font-medium tracking-normal">WITH</span>
                <span className="text-transparent satisfy-regular bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 inline-block pt-2 pl-2 pr-6 pb-5 -mb-3">
                <DecryptText text="AI Intelligence" delay={1200} />
                </span>
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-700 lg:text-slate-600 max-w-lg leading-relaxed font-medium opacity-0 animate-slide-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            We don't just edit videos; we engineer attention. High-end post-production for brands that demand cinematic excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto opacity-0 animate-slide-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <button onClick={() => scrollToSection('services')} className="group cursor-pointer relative px-8 py-4 bg-slate-900 text-white font-bold rounded-lg overflow-hidden shadow-xl transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-auto justify-center">
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">Take What’s Yours <FaArrowRight /></span>
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="px-8 cursor-pointer py-4 bg-white/60 backdrop-blur-sm border border-slate-300 text-slate-900 font-bold rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-3 w-full sm:w-auto">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><FaPlay className="text-xs ml-0.5" /></div>
              WATCH REEL
            </button>
          </div>
        </div>

        {/* --- RIGHT: Review Stream (Dual Mode) --- */}
        <div className="lg:col-span-5 relative w-full h-[150px] lg:h-[600px] flex justify-center">
            
            {/* MODE A: MOBILE HORIZONTAL SCROLL (< lg) */}
            <div 
                ref={mobileScrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="block lg:hidden w-full overflow-x-auto no-scrollbar mask-image-horizontal cursor-grab active:cursor-grabbing"
            >
                <div className="flex gap-4 w-max px-4">
                      {REVIEWS.map((review, idx) => (
                        <div key={`mob-${idx}`} className="w-[280px] bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50 shrink-0">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                  <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white" />
                                  <div className="text-left">
                                    <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
                                    <p className="text-[10px] text-blue-600 font-medium">{review.role}</p>
                                  </div>
                                </div>
                                <div className="flex text-yellow-400 text-[10px]"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                            </div>
                            <p className="text-slate-600 text-xs leading-relaxed font-medium text-left">"{review.text}"</p>
                        </div>
                      ))}
                </div>
            </div>

            {/* MODE B: DESKTOP 3D VERTICAL SCROLL (>= lg) */}
            <div className="hidden lg:block w-full h-full perspective-1000 relative">
               <div className="absolute inset-0 transform rotate-y-[-10deg] rotate-x-[5deg] preserve-3d w-full">
                 
                 {/* Floating Header */}
                 <div className="absolute -right-4 z-30 bg-white shadow-2xl p-4 rounded-xl border-l-4 border-blue-600 animate-bounce-slow pointer-events-none">
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
  
                 {/* JS Controlled Container 
                    - no-scrollbar: hides bar
                    - overflow-y-auto: allows native scroll interaction
                 */}
                 <div 
                    ref={desktopScrollRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="h-full overflow-y-auto no-scrollbar relative mask-image-linear space-y-5 pb-5"
                 >
                     {REVIEWS.map((review, idx) => (
                       <div key={`desk-${review.id}-${idx}`} className="bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300 group max-w-sm ml-auto mr-auto cursor-pointer">
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
                 <div className="absolute top-0 bottom-0 left-4 w-1 bg-linear-to-b from-transparent via-blue-400 to-transparent opacity-50 pointer-events-none"></div>
               </div>
            </div>

        </div>
      </div>

      <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 animate-fade-in" onClick={() => scrollToSection('about')}>
        <span className="text-[10px] font-bold tracking-[0.3em] text-[#FFFF00] uppercase">Scroll</span>
        <div className="w-0.5 h-8 lg:h-12 bg-slate-300 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 animate-scroll-drop rounded-full"></div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .mask-image-linear {
           mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
        .mask-image-horizontal {
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        @keyframes scroll-drop {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-drop { animation: scroll-drop 2s cubic-bezier(0.77, 0, 0.175, 1) infinite; }

        @keyframes slide-in {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in { animation-name: slide-in; animation-duration: 0.8s; }

        @keyframes bounce-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;