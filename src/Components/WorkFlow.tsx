import React from 'react';
import { 
  FaFileImport, 
  FaClipboardList, 
  FaCut, 
  FaPhotoVideo, 
  FaMagic, 
  FaRocket, 
  FaChevronRight,
} from 'react-icons/fa';
import { motion, easeOut } from 'framer-motion';

const steps = [
  { 
    id: 1,
    icon: FaFileImport, 
    title: 'Project Receive', 
    description: 'We receive your raw footage and assets via our secure cloud servers.' 
  },
  { 
    id: 2,
    icon: FaClipboardList, 
    title: 'Analysis Req.', 
    description: 'We review your creative brief to understand the style and objectives.' 
  },
  { 
    id: 3,
    icon: FaCut, 
    title: 'Rough Edit', 
    description: 'Initial assembly of the narrative structure and story flow.' 
  },
  { 
    id: 4,
    icon: FaPhotoVideo, 
    title: 'Final Edit', 
    description: 'Fine-tuning the pacing, transitions, and visual lock.' 
  },
  { 
    id: 5,
    icon: FaMagic, 
    title: 'Magic Happens', 
    description: 'Advanced color grading, sound design, and VFX application.' 
  },
  { 
    id: 6,
    icon: FaRocket, 
    title: 'Delivered', 
    description: 'Final high-quality render sent to you, ready for publishing.' 
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20"
        >
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm">Process</span>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mt-2">From Raw to Ready</h2>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Changed amount to ensure it triggers earlier
          variants={containerVariants}
        >
          {/* CONNECTOR LINE (Visible only on XL screens where items are in 1 row) */}
          <div className="hidden xl:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
          
          {/* GRID LOGIC FIXED:
             - Mobile: Flex (Scrollable)
             - Tablet/Laptop (md/lg): Grid 3 Columns (2 Rows) -> Ensures all 6 are visible
             - Large Desktop (xl): Grid 6 Columns (1 Row)
          */}
<div
  className="
    flex
    md:grid
    md:grid-cols-3
    md:grid-rows-2
    xl:grid-cols-6
    xl:grid-rows-1
    gap-6 lg:gap-8
    overflow-x-auto
    md:overflow-visible
    pb-8 md:pb-0
    snap-x snap-mandatory
    px-2 md:px-0
  "
>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative group min-w-[280px] md:min-w-0 snap-center first:pl-2 last:pr-2"
              >
                {/* Card Container */}
                <div className="bg-white md:bg-transparent border border-gray-100 md:border-none shadow-sm md:shadow-none rounded-2xl p-6 md:p-0 h-full flex flex-col md:block items-center text-center md:h-auto">
                  
                  {/* Icon Container */}
                  <div className="relative mb-4 md:mb-6">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-blue-50 md:bg-white border-none md:border-4 md:border-gray-100 md:group-hover:border-blue-400 rounded-full flex items-center justify-center md:shadow-lg transition-all duration-300 z-10 mx-auto">
                      <step.icon className="text-2xl lg:text-3xl text-blue-600" />
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-blue-600 text-white w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-base font-bold border-2 lg:border-4 border-white shadow-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Logic: 
                      - Hidden on Mobile 
                      - On XL (1 Row): Show Right Arrow on all except last
                      - On MD/LG (2 Rows): Show Right Arrow on items 1,2,4,5. Show Down arrow on 3? Or just hide arrows for cleaner look on grid.
                      (Simplifying: Only showing arrows on XL screens to prevent visual clutter in grid mode)
                  */}
                  {index !== steps.length - 1 && (
                    <div className="hidden xl:block absolute top-10 -right-4 text-gray-200 text-xl z-0">
                      <FaChevronRight />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile "Swipe" Hint */}
          <div className="md:hidden flex justify-center mt-4 gap-1">
              {[...Array(6)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i===0 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;