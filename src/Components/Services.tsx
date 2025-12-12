import React, { useState, useEffect } from 'react';

// --- Icon Components (Unchanged) ---
const Icons = {
  Youtube: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
  ),
  Instagram: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  ),
  Briefcase: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5 0H9V4h6v2zm5 13H4V8h16v11z"/></svg>
  ),
  Heart: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  ),
  Recycle: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 21h-2v-2l11-14 2 2-11 14zm13.414-10l-2-2 1.586-1.586c.781-.781.781-2.047 0-2.828l-2.172-2.172c-.781-.781-2.047-.781-2.828 0l-1.586 1.586-2 2 4 4 3-3c.781-.781.781-2.047 0-2.828l-2.172-2.172c-.781-.781-2.047-.781-2.828 0l-1.586 1.586-2 2 4 4 4.586 4.586zM4 11H2v10c0 1.103.897 2 2 2h10v-2H4v-10z"/></svg>
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

// --- Data (Unchanged) ---
const services = [
  {
    id: 0,
    title: 'YouTube Growth',
    category: 'Long Form',
    description: 'Retention focused editing strategies.',
    deliverables: ['4K Render', 'Thumbnail', 'SEO Metadata'],
    price: '$50',
    img: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Youtube,
    color: 'bg-red-500',
    text: 'text-red-600',
    soft: 'bg-red-50'
  },
  {
    id: 1,
    title: 'Viral Reels',
    category: 'Short Form',
    description: 'High-pace edits for maximum engagement.',
    deliverables: ['9:16 Vertical', 'Captions', 'Trend Music'],
    price: '$20',
    img: 'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Instagram,
    color: 'bg-pink-500',
    text: 'text-pink-600',
    soft: 'bg-pink-50'
  },
  {
    id: 2,
    title: 'Corporate',
    category: 'Business',
    description: 'Clean visuals for company branding.',
    deliverables: ['Grading', 'Logo Anim', 'Voiceover'],
    price: '$100',
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Briefcase,
    color: 'bg-blue-600',
    text: 'text-blue-600',
    soft: 'bg-blue-50'
  },
  {
    id: 3,
    title: 'Wedding Film',
    category: 'Events',
    description: 'Emotional storytelling and color grading.',
    deliverables: ['Slow Motion', 'Music Lic', 'Speech Sync'],
    price: '$150',
    img: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Heart,
    color: 'bg-rose-500',
    text: 'text-rose-600',
    soft: 'bg-rose-50'
  },
  {
    id: 4,
    title: 'Repurpose',
    category: 'Socials',
    description: 'Turn one long video into many shorts.',
    deliverables: ['Resizing', 'Subtitles', 'Hooks'],
    price: '$40',
    img: 'https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Icon: Icons.Recycle,
    color: 'bg-emerald-500',
    text: 'text-emerald-600',
    soft: 'bg-emerald-50'
  },
];

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState(0);
  const active = services.find(s => s.id === selectedId) || services[0];
  const [flash, setFlash] = useState(false);

  // Advanced Random Lightning Logic
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
    <section id='services' className="relative w-full min-h-screen lg:h-[700px] bg-slate-50 overflow-hidden font-sans text-slate-800 flex items-center py-12 lg:py-0">
      
      {/* --- BACKGROUND ANIMATION LAYER (Unchanged) --- */}
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

      <div className="max-w-6xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center relative z-10 w-full">
        
        {/* Header */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter mb-2">
              SERVICES<span className="text-blue-600">.</span>
            </h2>
            <p className="text-slate-500 text-xs lg:text-sm font-medium tracking-wide">
              CONFIGURE YOUR WORKFLOW
            </p>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-5 w-full">
          
          {/* LEFT: Navigation List */}
          {/* UPDATED: Added items-center for mobile alignment to keep arrow centered with buttons */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 lg:justify-center overflow-x-auto pb-4 lg:pb-0 snap-x hide-scrollbar items-center lg:items-stretch">
            
            {/* --- NEW ANIMATED ARROW (Mobile Only) --- */}
            <div className="lg:hidden flex flex-col items-center justify-center px-2 shrink-0 animate-bounce-horizontal text-blue-500/80">
                <Icons.ArrowRight />
                <span className="text-[9px] font-bold tracking-widest mt-1">SWIPE</span>
            </div>

            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`
                  relative p-3 rounded-xl cursor-pointer text-left transition-all duration-300 group overflow-hidden border snap-center flex-shrink-0
                  min-w-[260px] lg:min-w-0 w-auto
                  ${selectedId === service.id 
                    ? 'bg-white border-blue-100 shadow-lg scale-[1.03] z-20 ring-1 ring-blue-200' 
                    : 'bg-gray-50 border-gray-200 hover:bg-white hover:shadow-md hover:border-gray-300 scale-100 text-slate-600 hover:text-slate-800'}
                `}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Active Shimmer */}
                {selectedId === service.id && (
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shimmer"></div>
                )}
                
                {/* Bottom Progress Bar */}
                <div className={`absolute bottom-0 left-0 h-2 bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out ${selectedId === service.id ? 'w-full' : 'w-0'}`}></div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg transition-all duration-300 ${selectedId === service.id ? service.soft + ' ' + service.text + ' rotate-0 scale-110' : 'bg-slate-100 text-slate-400 -rotate-12 scale-100 group-hover:rotate-0'}`}>
                      <service.Icon />
                    </div>
                    <span className={`font-bold tracking-tight text-sm lg:text-base transition-colors ${selectedId === service.id ? 'text-slate-800' : ''}`}>{service.title}</span>
                  </div>
                  
                  {/* Hide arrow on small mobile buttons to save space, show on desktop */}
                  <div className={`transition-all duration-300 ease-out hidden sm:block ${selectedId === service.id ? 'translate-x-0 opacity-100 text-blue-600' : '-translate-x-2 opacity-0'}`}>
                    <Icons.ArrowRight />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Detail Card */}
          <div className="lg:col-span-8 perspective-1000 w-full">
             <div 
               key={active.id}
               className="w-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/60 overflow-hidden flex flex-col md:flex-row animate-spring-flip origin-center relative min-h-[400px] md:h-[450px]"
             >
                {/* IMAGE HALF */}
                <div className="w-full md:w-5/12 relative overflow-hidden group h-52 md:h-auto shrink-0">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent z-10"></div>
                  <img 
                    src={active.img} 
                    alt={active.title}
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                  />
                  
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <button className="w-12 h-12 md:w-14 md:h-14 cursor-pointer bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/50 hover:scale-110 hover:bg-white/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-pulse-slow group-hover:animate-none">
                        <Icons.Play />
                    </button>
                  </div>

                  <div className="absolute top-4 left-4 z-20 animate-float-y">
                    <span className="bg-white/95 backdrop-blur text-slate-900 font-black text-xs md:text-sm px-3 py-1.5 rounded-lg shadow-lg border border-slate-100">
                        {active.price}
                    </span>
                  </div>
                </div>

                {/* CONTENT HALF */}
                <div className="w-full md:w-7/12 p-5 md:p-6 flex flex-col relative justify-center bg-linear-to-br from-white to-slate-50">
                    
                   <div className={`absolute -right-6 -bottom-6 w-32 h-32 md:w-40 md:h-40 ${active.text} opacity-[0.04] rotate-12 scale-150 pointer-events-none transition-transform duration-700`}>
                      <active.Icon />
                   </div>

                   <div className="relative z-10">
                        <div className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest mb-3 ${active.soft} ${active.text} animate-fade-in border border-transparent`}>
                            {active.category}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2 animate-slide-right-spring delay-75 leading-tight">{active.title}</h3>
                        
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-5 animate-slide-right-spring delay-100">
                            {active.description}
                        </p>
                        
                        {/* Deliverables */}
                        <div className="space-y-2 mb-6">
                            {active.deliverables.map((item, i) => (
                                <div key={i} className="flex items-center animate-slide-up-stagger" style={{ animationDelay: `${150 + (i*50)}ms`}}>
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 ${active.color} text-white shadow-sm ring-2 ring-white shrink-0`}>
                                        <Icons.Check />
                                    </div>
                                    <span className="font-semibold text-slate-600 text-xs">{item}</span>
                                </div>
                            ))}
                        </div>

                      {/* CTA Button */}
                      <button className={`
                        w-full cursor-pointer py-3 rounded-xl font-bold text-sm text-white shadow-lg transition-all duration-300
                        hover:shadow-xl hover:-translate-y-1 hover:brightness-110 active:scale-[0.98]
                        ${active.color} animate-fade-in delay-300 relative overflow-hidden group/btn
                      `}>
                          <span className="relative z-10">Select Plan</span>
                          <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-shimmer-fast bg-linear-to-r from-transparent via-white/20 to-transparent z-0"></div>
                      </button>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* --- ANIMATIONS & UTILS --- */}
      <style>{`
        /* Utility to hide scrollbar but keep functionality */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        .perspective-1000 { perspective: 1000px; }
        
        /* NEW: Horizontal Bounce for the Mobile Arrow */
        @keyframes bounce-horizontal {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(5px); }
        }
        .animate-bounce-horizontal {
            animation: bounce-horizontal 1.5s infinite;
        }

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
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-stagger { animation: slide-up-stagger 0.5s ease-out forwards; opacity: 0; }

        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 2s infinite linear; }
        
        @keyframes shimmer-fast {
            100% { transform: translateX(100%); }
        }
        .animate-shimmer-fast { animation: shimmer-fast 0.8s ease-out; }

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
        
        @keyframes float-y {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        .animate-float-y { animation: float-y 4s ease-in-out infinite; }

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