import React, { useRef, useState, useEffect } from 'react';
import { 
  FaVideo, 
  FaPalette, 
  FaLaptopCode, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaBriefcase, 
  FaCheckCircle
} from 'react-icons/fa';

// --- Configuration ---
const PHONE_NUMBER = "918224889744"; 

// --- Data: Open Positions ---
const positions = [
  {
    id: 1,
    title: 'Video Editor',
    type: 'Remote / Freelance',
    salary: 'Project Based',
    icon: FaVideo,
    description: "Looking for editors proficient in Premiere Pro & After Effects. Must have a strong sense of pacing, storytelling, and experience with YouTube retention editing.",
    requirements: ['Premiere Pro', 'After Effects', 'Sound Design'],
    whatsappMessage: "Hi, I am interested in the Video Editor position. Here is my portfolio:"
  },
  {
    id: 2,
    title: 'Graphic Designer',
    type: 'Remote / Freelance',
    salary: 'Per Thumbnail/Asset',
    icon: FaPalette,
    description: "We need creative minds to design high CTR thumbnails and social media assets. Proficiency in Photoshop and an understanding of color theory is a must.",
    requirements: ['Photoshop', 'Typography', 'Visual Hierarchy'],
    whatsappMessage: "Hi, I want to apply for the Graphic Designer role. Sending my best work:"
  },
  {
    id: 3,
    title: 'Freelance Partner',
    type: 'Contract',
    salary: 'Revenue Share',
    icon: FaLaptopCode,
    description: "Are you an agency or an experienced freelancer? Let's partner up. We often have overflow work and look for reliable partners to handle scale.",
    requirements: ['Reliability', 'Quality Assurance', 'Timely Delivery'],
    whatsappMessage: "Hi, I am interested in a Freelance Partnership/Collaboration."
  },
];

const Careers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
  };

  // --- Scroll Detection Logic ---
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    // Find the center of the viewport/container
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    // Iterate through children to find the one closest to center
    Array.from(container.children).forEach((child, index) => {
        // Skip the spacer div at the end if it exists
        if (index >= positions.length) return;

        const item = child as HTMLElement;
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
        }
    });

    if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Run once on mount to determine initial state
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  return (
    <section id='careers' className="py-20 md:py-28 bg-gray-50 font-sans text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <FaBriefcase /> We are Hiring
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Join Our Creative Team
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We are always looking for talented editors and designers. Swipe to view roles.
          </p>
        </div>

        {/* --- Job Grid / Horizontal Scroll --- */}
        <div 
            ref={scrollRef} // Attached Ref
            className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar"
        >
          {positions.map((job) => (
            <div 
              key={job.id} 
              className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              {/* Top Decor Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon & Title */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <job.icon />
                </div>
                <span className="px-3 py-1 rounded bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                  {job.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
              <p className="text-blue-600 text-sm font-bold mb-6">{job.salary}</p>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-sm flex flex-col">
                {job.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {job.requirements.map((req, idx) => (
                  <span key={idx} className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100 whitespace-nowrap">
                    <FaCheckCircle className="text-green-500" /> {req}
                  </span>
                ))}
              </div>

              {/* Action Buttons Container */}
              <div className="flex flex-col gap-3 mt-auto">
                <a 
                  href={getWhatsAppLink(job.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Apply via WhatsApp</span>
                </a>

                <a 
                  href={`tel:+${PHONE_NUMBER}`}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition-all active:scale-95"
                >
                  <FaPhoneAlt className="text-sm" />
                  <span>Call for enquiry</span>
                </a>
              </div>

            </div>
          ))}
          
          {/* Spacer for mobile scroll padding */}
          <div className="w-2 md:hidden shrink-0"></div>
        </div>
        
        {/* Mobile Swipe Indicator Dots - DYNAMIC */}
        <div className="flex md:hidden justify-center gap-1.5 mt-2 transition-all duration-300">
            {positions.map((_, i) => (
                <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-gray-300'}`}
                ></div>
            ))}
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Careers;