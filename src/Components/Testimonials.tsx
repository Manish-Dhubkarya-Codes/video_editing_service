import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaStar, FaPlay, FaQuoteLeft, FaChevronRight, FaChevronLeft, FaTimes } from 'react-icons/fa';

// --- Types ---
interface Testimonial {
  id: number;
  type: 'text' | 'video';
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content?: string;
  thumbnail?: string;
  videoUrl?: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    type: 'text',
    name: 'Sarah Jenkins',
    role: 'Lifestyle Vlogger',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: "ProEdit stepped in and matched my style perfectly. Now I upload 3x a week instead of 1x. Best investment ever.",
  },
  {
    id: 2,
    type: 'video',
    name: 'Mark Davis',
    role: 'Fitness Coach',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    thumbnail: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 3,
    type: 'text',
    name: 'TechStart Inc.',
    role: 'Marketing Team',
    avatar: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: "We needed a corporate promo in 24 hours. The team delivered a polished, broadcast-quality video with 4 hours to spare.",
  },
  {
    id: 4,
    type: 'video',
    name: 'Elena Rivera',
    role: 'Travel Influencer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    thumbnail: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=600',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 5,
    type: 'text',
    name: 'James Wright',
    role: 'Filmmaker',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    content: "The color grading service is top-notch. They saved some really poorly lit footage I had. Highly recommended.",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const timerRef =  useRef<ReturnType<typeof setInterval> | null>(null);
  const len = testimonials.length;
  const TRANSITION_DURATION = 500;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % len);
    setTimeout(() => setIsAnimating(false), TRANSITION_DURATION);
  }, [isAnimating, len]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + len) % len);
    setTimeout(() => setIsAnimating(false), TRANSITION_DURATION);
  }, [isAnimating, len]);

  useEffect(() => {
    if (isPaused || activeVideo) return;
    timerRef.current = setInterval(nextSlide, 3000); // Increased duration for better UX
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeVideo, nextSlide]);

  // --- Responsive 3D Config ---
  const getSlideClassName = (index: number) => {
    if (index === currentIndex) {
      // CENTER (Active)
      // Mobile: Centered, fully visible
      // Desktop: Centered, fully visible, flat rotation
      return "z-30 opacity-100 scale-100 translate-x-0 shadow-2xl pointer-events-auto [transform:perspective(1000px)_rotateY(0deg)_scale(1)]";
    }
    
    const prevIndex = (currentIndex - 1 + len) % len;
    const nextIndex = (currentIndex + 1) % len;

    if (index === prevIndex) {
      // LEFT WING
      // Mobile: Hidden (opacity 0) or stacked behind
      // Desktop: Visible, rotated, shifted left
      return "z-20 cursor-pointer opacity-0 pointer-events-none md:opacity-50 md:hover:opacity-80 md:pointer-events-auto md:[transform:perspective(1000px)_rotateY(20deg)_scale(0.85)_translateX(-60%)]";
    } 
    
    if (index === nextIndex) {
      // RIGHT WING
      // Mobile: Hidden (opacity 0) or stacked behind
      // Desktop: Visible, rotated, shifted right
      return "z-20 cursor-pointer opacity-0 pointer-events-none md:opacity-50 md:hover:opacity-80 md:pointer-events-auto md:[transform:perspective(1000px)_rotateY(-20deg)_scale(0.85)_translateX(60%)]";
    }

    // HIDDEN (Behind)
    return "z-10 opacity-0 pointer-events-none scale-50";
  };

  return (
    <section className="py-10 md:py-24 bg-linear-to-br from-indigo-50 via-white to-purple-50 overflow-hidden min-h-[600px] flex flex-col justify-center relative">
      
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            Creator Stories
          </h2>
          <p className="text-gray-500 text-base md:text-lg">See how we help channels grow.</p>
        </div>

        {/* --- CAROUSEL CONTAINER --- */}
        <div 
          className="relative h-[450px] md:h-[420px] max-w-sm md:max-w-5xl mx-auto flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* LEFT ARROW */}
          <button 
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-white/90 backdrop-blur-sm text-indigo-900 shadow-xl border border-indigo-50 hover:bg-indigo-600 hover:text-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* RIGHT ARROW */}
          <button 
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-white/90 backdrop-blur-sm text-indigo-900 shadow-xl border border-indigo-50 hover:bg-indigo-600 hover:text-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <FaChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* --- CARDS --- */}
          {testimonials.map((item, index) => {
             const className = getSlideClassName(index);
             const isCenter = index === currentIndex;

             return (
              <div 
                key={item.id}
                onClick={() => {
                   if (!isCenter && !isAnimating) {
                      if (index === (currentIndex - 1 + len) % len) prevSlide();
                      if (index === (currentIndex + 1) % len) nextSlide();
                   }
                }}
                className={`
                  absolute top-0 w-full 
                  max-w-[300px] md:max-w-[420px] 
                  aspect-4/5 md:aspect-video
                  transition-all duration-500 ease-in-out origin-center
                  ${className}
                `}
              >
                {/* Card Inner */}
                <div className={`
                    h-full w-full rounded-2xl md:rounded-3xl overflow-hidden border 
                    ${isCenter ? 'bg-white border-white ring-2 md:ring-4 ring-indigo-50/50 shadow-xl md:shadow-2xl' : 'bg-white/80 backdrop-blur-sm border-white/50 shadow-lg grayscale'}
                    transition-all duration-500
                `}>
                  
                  {item.type === 'video' ? (
                    // --- Video Card ---
                    <div 
                        className="relative h-full w-full group cursor-pointer" 
                        onClick={(e) => { if(isCenter) { e.stopPropagation(); setActiveVideo(item.videoUrl!); }}}
                    >
                      <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      
                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        {isCenter && (
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/60 group-hover:scale-110 transition-transform shadow-lg">
                            <FaPlay className="text-white ml-1 text-xl md:text-2xl" />
                          </div>
                        )}
                      </div>
                      
                      {/* Info Overlay */}
                       <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                         <h4 className="text-white font-bold text-base md:text-lg">{item.name}</h4>
                         <p className="text-gray-300 text-xs md:text-sm">{item.role}</p>
                       </div>
                    </div>
                  ) : (
                    // --- Text Card ---
                    <div className="h-full flex flex-col p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 relative overflow-y-auto custom-scrollbar">
                      <FaQuoteLeft className="text-indigo-100 text-4xl md:text-6xl absolute top-4 right-4 md:top-6 md:right-6" />
                      
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10 shrink-0">
                        <img src={item.avatar} alt={item.name} className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover shadow-sm ring-2 ring-white" />
                        <div>
                          <h4 className="text-gray-900 font-bold text-sm md:text-base">{item.name}</h4>
                          <p className="text-indigo-600 text-[10px] md:text-xs font-bold uppercase">{item.role}</p>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col relative z-10">
                        <p className="text-gray-600 text-sm md:text-lg leading-relaxed italic font-medium">
                            "{item.content}"
                        </p>
                      </div>

                       <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between shrink-0">
                         <div className="flex text-yellow-400 text-xs md:text-sm">
                          {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
                         </div>
                         <div className="text-[10px] md:text-xs text-gray-400 font-medium">Verified Client</div>
                       </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2  md:mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              disabled={isAnimating}
              onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAnimating(false), TRANSITION_DURATION);
              }}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-6 md:w-8 bg-indigo-600' : 'w-1.5 md:w-2 bg-indigo-200 hover:bg-indigo-400'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
            >
              <FaTimes size={20} />
            </button>
            <div className="relative pb-[56.25%]">
              <video controls autoPlay className="absolute top-0 left-0 w-full h-full">
                <source src={activeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

       <style>{`
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
         .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </section>
  );
};

export default Testimonials;