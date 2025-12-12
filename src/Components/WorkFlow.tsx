import React from 'react';
import { FaCloudUploadAlt, FaClipboardList, FaMagic, FaRocket, FaChevronRight } from 'react-icons/fa';
import { motion, easeOut } from 'framer-motion';

const steps = [
  { 
    id: 1,
    icon: FaCloudUploadAlt, 
    title: 'Upload Footage', 
    description: 'Send us your raw files via Google Drive, Dropbox, or our secure upload link.' 
  },
  { 
    id: 2,
    icon: FaClipboardList, 
    title: 'Share Vision', 
    description: 'Fill out a quick brief. Tell us about the style, music, and pacing you want.' 
  },
  { 
    id: 3,
    icon: FaMagic, 
    title: 'Magic Happens', 
    description: 'We edit, color grade, and sound mix. You get a draft within 24-48 hours.' 
  },
  { 
    id: 4,
    icon: FaRocket, 
    title: 'Final Delivery', 
    description: 'Review the draft. Once approved, download your 4K video ready for posting.' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Compact on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-20"
        >
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm">How It Works</span>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mt-2">From Raw to Ready</h2>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* CONNECTOR LINE (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
          
          {/* Steps Container: Flex (Carousel) on Mobile, Grid on Desktop */}
          {/* 'hide-scrollbar' utility needs to be defined in CSS or use Tailwind plugin */}
          <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-12 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory px-2 md:px-0 scroll-smooth">
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative group min-w-[260px] md:min-w-0 snap-center first:pl-2 last:pr-2"
              >
                {/* Mobile Card Style (White box to contain content cleanly) */}
                <div className="bg-white md:bg-transparent border border-gray-100 md:border-none shadow-sm md:shadow-none rounded-2xl p-6 md:p-0 h-full flex flex-col md:block items-center text-center md:h-auto">
                  
                  {/* Icon Container */}
                  <div className="relative mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-24 md:h-24 bg-blue-50 md:bg-white border-none md:border-4 md:border-gray-100 md:group-hover:border-blue-400 rounded-full flex items-center justify-center md:shadow-lg transition-all duration-300 z-10 mx-auto">
                      <step.icon className="text-xl md:text-4xl text-blue-600" />
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-base font-bold border-2 md:border-4 border-white shadow-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Desktop Arrow (Visual guide between steps) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-6 text-gray-200 text-2xl z-0">
                      <FaChevronRight size={24} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile "Swipe" Hint (Optional visual cue) */}
          <div className="md:hidden flex justify-center mt-2 gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          </div>

        </motion.div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-20 text-center"
        >
           <p className="text-xs md:text-sm font-medium text-gray-500 bg-gray-100 inline-block px-4 py-1.5 rounded-full">
             ⚡ Avg turnaround: <span className="text-green-600 font-bold">24 Hours</span>
           </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Workflow;