import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaPlay, FaCheckCircle, FaTimes } from 'react-icons/fa';

// Types for TypeScript clarity
type TestimonialType = 'text' | 'video';

interface Testimonial {
  id: number;
  type: TestimonialType;
  name: string;
  role: string;
  avatar: string; // URL for user image
  rating: number;
  content?: string; // For text reviews
  thumbnail?: string; // For video reviews
  videoUrl?: string; // For video reviews
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    type: 'text',
    name: 'Sarah Jenkins',
    role: 'Lifestyle Vlogger (150k Subs)',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: "I was drowning in editing work. ProEdit stepped in and matched my style perfectly. Now I upload 3x a week instead of 1x. Best investment ever.",
  },
  {
    id: 2,
    type: 'video',
    name: 'Mark D.',
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
    content: "We needed a corporate promo in 24 hours for a conference. The team delivered a polished, broadcast-quality video with 4 hours to spare. Incredible speed.",
  },
  {
    id: 4,
    type: 'video',
    name: 'Elena R.',
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
    role: 'Documentary Filmmaker',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    content: "The color grading service is top-notch. They managed to save some really poorly lit footage I had. Highly recommended for technical fixes.",
  },
  {
    id: 6,
    type: 'text',
    name: 'Emily Chen',
    role: 'E-commerce Brand Owner',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: "Our ad conversion rate went up 40% after using their 'Viral Shorts' package. They know exactly what hooks the audience.",
  },
];

const Testimonials: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">Trusted by Creators & Brands</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400 text-xl">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span className="text-gray-600 font-medium">5.0 Average Rating</span>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="h-full">
              
              {/* --- VIDEO CARD --- */}
              {item.type === 'video' ? (
                <div 
                  onClick={() => setActiveVideo(item.videoUrl!)}
                  className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img 
                    src={item.thumbnail} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                      <FaPlay className="text-white ml-1" />
                    </div>
                  </div>

                  {/* Content Bottom */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full border-2 border-white" />
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.name}</h4>
                        <p className="text-gray-300 text-xs">{item.role}</p>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs text-white">
                      <FaPlay size={10} /> Video Review
                    </div>
                  </div>
                </div>
              ) : (
                
                /* --- TEXT CARD --- */
                <div className="bg-neutral p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col relative">
                  <FaQuoteLeft className="text-accent/10 text-6xl absolute top-6 right-6" />
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                    <div>
                      <h4 className="text-primary font-bold">{item.name}</h4>
                      <p className="text-textLight text-xs">{item.role}</p>
                    </div>
                  </div>

                  <div className="flex text-yellow-400 text-sm mb-4">
                    {Array(item.rating).fill(0).map((_, i) => <FaStar key={i} />)}
                  </div>

                  <p className="text-gray-600 leading-relaxed italic relative z-10 flex-grow">
                    "{item.content}"
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-2 text-green-600 text-sm font-semibold">
                    <FaCheckCircle /> Verified Client
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-textLight mb-4">Join 500+ happy creators.</p>
          <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors shadow-lg">
            Start Your Project
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-10 bg-black/50 p-2 rounded-full transition-colors"
            >
              <FaTimes size={20} />
            </button>
            {/* Vertical Video Aspect Ratio Container */}
            <div className="relative pb-[177%]"> 
              <video controls autoPlay className="absolute top-0 left-0 w-full h-full object-cover">
                <source src={activeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;