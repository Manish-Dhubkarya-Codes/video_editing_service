import React, { useState, useEffect } from 'react';

// --- Icon Components (Unchanged) ---
const Icons = {
  Youtube: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
  ),
  Smartphone: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 16.5h10v2H7v-2zM7 4h10v11.5H7V4z"/></svg>
  ),
  Calendar: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2zM5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"/></svg>
  ),
  Heart: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  ),
  Mic: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
  ),
  Camera: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"/></svg>
  ),
  Play: () => (
    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
  ),
  Check: () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
  ),
  ArrowRight: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
  ),
};

// --- Data ---
const services = [
  {
    id: 0,
    title: 'Wedding Film',
    description: 'Cinematic storytelling capturing your most precious moments.',
    subCategories: [
      { name: 'Highlights', detail: '3-5 min cinematic summary.' },
      { name: 'Pre-Wedding', detail: 'Romantic couple shoot.' },
      { name: 'Teaser', detail: '1 min high-energy trailer.' },
      { name: 'Trailer', detail: 'Extended cinematic experience.' },
      { name: 'Invites', detail: 'Digital video invites.' }
    ],
    img: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Heart,
    color: 'bg-rose-500',
    text: 'text-rose-600',
    soft: 'bg-rose-50',
    border: 'border-rose-100'
  },
  {
    id: 1,
    title: 'Social Media',
    description: 'High-engagement short form content for growth.',
    subCategories: [
      { name: 'Insta/FB Reels', detail: 'Trend-focused editing.' },
      { name: 'Ads Videos', detail: 'High-conversion visuals.' },
      { name: 'Vlogs', detail: 'Daily story building.' }
    ],
    img: 'https://images.pexels.com/photos/5053835/pexels-photo-5053835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Smartphone,
    color: 'bg-fuchsia-500',
    text: 'text-fuchsia-600',
    soft: 'bg-fuchsia-50',
    border: 'border-fuchsia-100'
  },
  {
    id: 2,
    title: 'YouTube',
    description: 'Long form content production and channel management.',
    subCategories: [
      { name: 'Educational', detail: 'Clear visual explanations.' },
      { name: 'Tutorial', detail: 'Step-by-step guides.' },
      { name: 'Podcast', detail: 'Multi-cam syncing.' },
      { name: 'Docs', detail: 'Narrative storytelling.' },
      { name: 'Vlogs', detail: 'Engaging cuts.' },
      { name: 'Shorts', detail: 'Vertical repurposing.' }
    ],
    img: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Youtube,
    color: 'bg-red-600',
    text: 'text-red-600',
    soft: 'bg-red-50',
    border: 'border-red-100'
  },
  {
    id: 3,
    title: 'Events',
    description: 'Professional coverage for corporate and casual events.',
    subCategories: [
      { name: 'Highlights', detail: 'Recap of key speakers.' },
      { name: 'Reels', detail: 'Fast-paced snippets.' },
      { name: 'Journey', detail: 'Timeline showcase.' }
    ],
    img: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Calendar,
    color: 'bg-amber-500',
    text: 'text-amber-600',
    soft: 'bg-amber-50',
    border: 'border-amber-100'
  },
  {
    id: 4,
    title: 'Audio Editing',
    description: 'Crystal clear sound engineering and post-production.',
    subCategories: [
      { name: 'Voice Over', detail: 'Recording and cleaning.' },
      { name: 'Mixing', detail: 'Balancing levels.' },
      { name: 'Mastering', detail: 'Final polish.' }
    ],
    img: 'https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Mic,
    color: 'bg-indigo-500',
    text: 'text-indigo-600',
    soft: 'bg-indigo-50',
    border: 'border-indigo-100'
  },
  {
    id: 5,
    title: 'Photo Editing',
    description: 'High-end retouching and color grading services.',
    subCategories: [
      { name: 'Wedding', detail: 'Color correction.' },
      { name: 'Retouching', detail: 'Skin cleanup.' }
    ],
    img: 'https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Camera,
    color: 'bg-cyan-500',
    text: 'text-cyan-600',
    soft: 'bg-cyan-50',
    border: 'border-cyan-100'
  },
];

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState(0);
  const active = services.find(s => s.id === selectedId) || services[0];
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const triggerFlash = () => {
      setFlash(true);
      setTimeout(() => setFlash(false), 120); 
      const next = Math.random() * 4000 + 2000; 
      setTimeout(triggerFlash, next);
    };
    const t = setTimeout(triggerFlash, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id='services' className="relative w-full min-h-screen lg:min-h-[700px] bg-slate-50 overflow-hidden font-sans text-slate-800 flex items-center py-8 lg:py-0">
      
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 bg-blue-100 mix-blend-color-dodge transition-opacity duration-75 ${flash ? 'opacity-40' : 'opacity-0'} z-0`}></div>
        <div className={`absolute inset-0 bg-yellow-200 mix-blend-screen transition-opacity duration-150 ${flash ? 'opacity-20' : 'opacity-0'} z-0`}></div>

        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-2 rounded-full bg-linear-to-r from-indigo-600 via-blue-400 to-transparent opacity-0 animate-shooting-star"
            style={{
              top: `${Math.random() * 40}%`,
              left: `${Math.random() * 60 - 30}%`,
              width: `${Math.random() * 60 + 40}px`, 
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 1.5 + 2}s`
            }}
          />
        ))}

        <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-purple-300/30 rounded-full blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center relative z-10 w-full">
        
        {/* Header */}
        <div className="mb-6 lg:mb-10 text-center lg:text-left animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter mb-2">
              SERVICES<span className="text-blue-600">.</span>
            </h2>
            <p className="text-slate-500 text-xs lg:text-sm font-medium tracking-wide">
              EXPLORE OUR CREATIVE CATEGORIES
            </p>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 w-full">
          
          {/* LEFT: Navigation List (Carousel on Mobile) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible p-2 lg:pb-0 snap-x hide-scrollbar items-center lg:items-stretch lg:justify-center">
            
            {/* Mobile Swipe Hint */}
            <div className="lg:hidden flex flex-col items-center justify-center px-2 shrink-0 animate-bounce-horizontal text-blue-500/80">
                <Icons.ArrowRight />
                <span className="text-[9px] font-bold tracking-widest mt-1">SWIPE</span>
            </div>

            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`
                  relative p-3 lg:p-4 rounded-xl cursor-pointer text-left transition-transform duration-300 ease-out group overflow-hidden border snap-start shrink-0
                  min-w-[150px] lg:min-w-0 lg:w-full
                  ${selectedId === service.id 
                    ? `bg-white shadow-lg scale-[1.03] z-20 ring-1 ${service.border}` 
                    : 'bg-white/60 border-gray-200 hover:bg-white hover:shadow-md hover:border-gray-300 scale-100 text-slate-600 hover:text-slate-800'}
                `}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {selectedId === service.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shimmer"></div>
                )}
                
                <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-slate-200 to-slate-400 transition-all duration-500 ease-out ${selectedId === service.id ? 'w-full opacity-100' : 'w-0 opacity-0'}`}>
                    <div className={`h-full w-full ${service.color.replace('bg-', 'bg-gradient-to-r from-white/20 to-')}`}></div>
                </div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg transition-transform duration-300 ${selectedId === service.id ? service.soft + ' ' + service.text + ' rotate-0 scale-110' : 'bg-slate-100 text-slate-400 -rotate-12 scale-100 group-hover:rotate-0'}`}>
                      <service.Icon />
                    </div>
                    <span className={`font-bold tracking-tight text-xs lg:text-base transition-colors ${selectedId === service.id ? 'text-slate-800' : ''}`}>{service.title}</span>
                  </div>
                  
                  <div className={`transition-all duration-300 ease-out hidden sm:block ${selectedId === service.id ? 'translate-x-0 opacity-100 ' + service.text : '-translate-x-2 opacity-0'}`}>
                    <Icons.ArrowRight />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Detail Card (Fixed Height on All Screens) */}
          <div className="lg:col-span-8 perspective-1000 w-full">
             <div 
               key={active.id}
               // FIXED HEIGHTS: h-[500px] on mobile, h-[550px] on desktop to maintain "Small Card" look while fitting content
               className="w-full bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/60 overflow-hidden flex flex-col md:flex-row animate-spring-flip origin-center relative h-[500px] lg:h-[550px]"
             >
                {/* IMAGE HALF: Top 35% on mobile, Left 45% on Desktop */}
                <div className="w-full h-[35%] md:w-5/12 md:h-full relative overflow-hidden group shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                  <img 
                    src={active.img} 
                    alt={active.title}
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                  />
                  
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <button className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/50 hover:scale-110 hover:bg-white/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:animate-pulse-slow">
                        <Icons.Play />
                    </button>
                  </div>
                </div>

                {/* CONTENT HALF: Bottom 65% on mobile, Right 55% on Desktop */}
                <div className="w-full h-[65%] md:w-7/12 md:h-full p-5 lg:p-8 flex flex-col relative bg-gradient-to-br from-white to-slate-50">
                    
                   <div className={`absolute -right-8 -bottom-8 w-32 h-32 lg:w-40 lg:h-40 ${active.text} opacity-[0.04] rotate-12 scale-150 pointer-events-none transition-transform duration-700`}>
                      <active.Icon />
                   </div>

                   {/* Header Section (Non-scrolling) */}
                   <div className="mb-3 lg:mb-4 shrink-0 z-10 relative">
                        <h3 className="text-2xl lg:text-3xl font-black text-slate-800 mb-1 lg:mb-2 animate-slide-right-spring delay-75 leading-tight">{active.title}</h3>
                        <p className="text-slate-500 text-xs lg:text-sm font-medium leading-relaxed animate-slide-right-spring delay-100 line-clamp-2">
                            {active.description}
                        </p>
                   </div>
                   
                   {/* SCROLLABLE LIST CONTAINER */}
                   <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 pr-2 pb-2">
                        <h4 className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 sticky top-0 bg-white/95 backdrop-blur-sm py-2 z-20">
                            Includes
                        </h4>
                        
                        <div className="space-y-2 lg:space-y-3">
                            {active.subCategories.map((item, i) => (
                                <div 
                                    key={i} 
                                    className="group flex items-start p-2.5 lg:p-3 rounded-xl border border-slate-100 bg-white hover:border-slate-300 hover:shadow-md transition-colors duration-200 ease-out animate-slide-up-stagger transform-gpu"
                                    style={{ animationDelay: `${100 + (i*40)}ms`}}
                                >
                                    <div className={`mt-1.5 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full mr-3 shrink-0 ${active.color} ring-2 ring-white shadow-sm group-hover:scale-125 transition-transform duration-300`}></div>
                                    <div>
                                        <h5 className="text-xs lg:text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                                            {item.name}
                                        </h5>
                                        <p className="text-[10px] lg:text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                   </div>

                   {/* Bottom Gradient Mask */}
                   <div className="absolute bottom-0 left-0 right-0 h-6 lg:h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-20 rounded-br-2xl"></div>

                </div>
             </div>
          </div>

        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Modern Scrollbar */
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e2e8f0; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #cbd5e1; }

        .perspective-1000 { perspective: 1000px; }
        
        @keyframes bounce-horizontal {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(5px); }
        }
        .animate-bounce-horizontal { animation: bounce-horizontal 1.5s infinite; }

        @keyframes shooting-star {
            0% { transform: translateX(0) translateY(0) rotate(15deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateX(80vw) translateY(80vh) rotate(15deg); opacity: 0; }
        }
        .animate-shooting-star { animation: shooting-star linear infinite; }

        @keyframes spring-flip {
            0% { opacity: 0; transform: rotateY(-15deg) translateX(30px) scale(0.95); }
            60% { opacity: 1; transform: rotateY(2deg) translateX(-5px) scale(1.01); }
            100% { opacity: 1; transform: rotateY(0) translateX(0) scale(1); }
        }
        .animate-spring-flip { animation: spring-flip 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes slide-right-spring {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right-spring { animation: slide-right-spring 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }

        @keyframes slide-up-stagger {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-stagger { animation: slide-up-stagger 0.4s ease-out forwards; opacity: 0; }

        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 2s infinite linear; }
        
        @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(40px, -40px) scale(1.1); }
            66% { transform: translate(-30px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 15s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 5s; }

        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        
        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
      `}</style>
    </section>
  );
};

export default Services;