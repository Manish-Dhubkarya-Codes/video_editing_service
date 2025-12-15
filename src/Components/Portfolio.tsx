import React, { useState, useRef } from 'react';
import { FaPlay, FaTimes, FaArrowsAltH, FaBolt } from 'react-icons/fa';

// --- Data ---
// Removed categories array
const portfolioItems = [
  { 
    id: 2, 
    category: 'Reels', 
    title: 'Gym Motivation', 
    thumbnail: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    aspect: 'vertical'
  },
  { 
    id: 3, 
    category: 'Ads', 
    title: 'Nike Spec Ad', 
    thumbnail: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    aspect: 'video'
  },
  { 
    id: 4, 
    category: 'Wedding', 
    title: 'Italian Summer', 
    thumbnail: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    aspect: 'vertical'
  },
  { 
    id: 5, 
    category: 'Reels', 
    title: 'Bali Vlog', 
    thumbnail: 'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=800', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    aspect: 'vertical'
  },
  { 
    id: 6, 
    category: 'YouTube', 
    title: 'Gaming Highlights', 
    thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    aspect: 'video'
  },
   { 
    id: 7, 
    category: 'Ads', 
    title: 'Coffee Commercial', 
    thumbnail: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    aspect: 'video'
  },
];

const Portfolio: React.FC = () => {
  // Removed activeCategory state
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    }
  };

  return (
    <section id='portfolio' className="bg-neutral-50 min-h-screen py-20 px-4 md:px-8 font-sans text-neutral-800">
      
      {/* --- Compact Header --- */}
      <div className="max-w-[1600px] mx-auto mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
        <div>
          <h2 className="text-3xl font-black tracking-tighter uppercase mb-1 flex items-center gap-2">
            <FaBolt className="text-yellow-500 text-2xl" /> Work_Gallery
          </h2>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Speed • Rhythm • Impact</p>
        </div>

        {/* Removed Tab Switcher, added simple total count */}
        <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Displaying {portfolioItems.length} Projects
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* --- MAIN GRID (Masonry Style) --- */}
        <div className="lg:col-span-3">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {/* Mapping directly over portfolioItems now */}
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative w-full break-inside-avoid overflow-hidden rounded-lg cursor-pointer bg-neutral-200"
              >
                {/* Image */}
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Rush Overlay: Text appears ON the image, tight and compact */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200 ease-out">
                    <span className="inline-block px-1.5 py-0.5 bg-yellow-500 text-[10px] font-bold text-black uppercase mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white text-sm font-bold leading-tight">{item.title}</h3>
                  </div>
                  
                  {/* Center Play Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
                    <FaPlay className="text-3xl drop-shadow-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- COMPACT SIDEBAR: Before/After & Stats --- */}
        <div className="lg:col-span-1 flex flex-col gap-4">
            
           {/* Compact Before/After Module */}
           <div className="bg-white p-1 rounded-lg border border-neutral-200 shadow-sm h-64 relative group overflow-hidden select-none">
              <div 
                ref={sliderRef}
                className="relative w-full h-full rounded overflow-hidden cursor-col-resize"
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
              >
                {/* Labels */}
                <div className="absolute top-3 left-3 z-30 px-2 py-1 bg-black/70 text-white text-[9px] font-bold uppercase rounded-sm">Log (Raw)</div>
                <div className="absolute top-3 right-3 z-30 px-2 py-1 bg-blue-600/90 text-white text-[9px] font-bold uppercase rounded-sm">Graded</div>

                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}>
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-75" />
                </div>
                
                {/* Minimal Handle */}
                <div className="absolute top-0 bottom-0 w-1 bg-white z-20" style={{ left: `${sliderPosition}%` }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                      <FaArrowsAltH className="text-neutral-900 text-[10px]" />
                  </div>
                </div>
              </div>
           </div>

           {/* Quick Stats / Info (Compact) */}
           <div className="bg-neutral-900 text-white p-6 rounded-lg flex flex-col justify-center flex-1">
              <h3 className="text-xl font-black uppercase italic leading-none mb-4">Post-<br/>Production<br/>House.</h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                We specialize in high-retention editing. Tight cuts, perfect pacing, and aggressive color grading.
              </p>
              <button className="w-full cursor-pointer bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs uppercase py-3 rounded transition-colors flex items-center justify-center gap-2">
                Book Edit <FaBolt />
              </button>
           </div>

        </div>
      </div>

      {/* --- Snappy Video Modal --- */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className={`relative w-full bg-black shadow-2xl overflow-hidden rounded-md animate-in zoom-in-95 duration-200
              ${selectedItem.aspect === 'vertical' ? 'max-w-sm aspect-9/16' : 'max-w-5xl aspect-video'}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute cursor-pointer top-3 right-3 z-20 text-white/80 hover:text-white bg-black/50 hover:bg-red-600 p-2 rounded-full transition-colors"
            >
              <FaTimes />
            </button>
            <video controls autoPlay className="w-full h-full object-contain">
               <source src={selectedItem.video} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* Tailwind Utility for Masonry Hack & Animations */}
      <style>{`
        /* Masonry via CSS Columns */
        .columns-1 { column-count: 1; }
        .sm\\:columns-2 { column-count: 2; }
        .lg\\:columns-3 { column-count: 3; }
        .gap-4 { column-gap: 1rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
      `}</style>
    </section>
  );
};

export default Portfolio;