import React from 'react';
import { FaCloudUploadAlt, FaClipboardList, FaMagic, FaRocket, FaChevronRight, FaChevronDown } from 'react-icons/fa';
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
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-bold tracking-wider uppercase text-sm">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">From Raw to Ready in 4 Steps</h2>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* CONNECTOR LINES (The "Road") */}
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10 rounded-full overflow-hidden">
            {/* Animated Progress Bar */}
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
          
          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute top-0 left-8 h-full w-1 bg-gray-100 -z-10 rounded-full overflow-hidden">
            {/* Animated Progress Bar for Mobile */}
            <motion.div
              className="w-full bg-gradient-to-b from-blue-400 to-blue-600"
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={stepVariants}
                whileHover="hover"
                className="relative group cursor-pointer"
              >
                
                {/* Icon Container */}
                <div className="flex md:justify-center mb-6">
                  <div className="relative">
                    {/* The Circle */}
                    <motion.div
                      className="w-16 h-16 md:w-24 md:h-24 bg-white border-4 border-gray-100 group-hover:border-blue-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 z-10"
                      whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                    >
                      <step.icon className="text-2xl md:text-4xl text-accent group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    
                    {/* Number Badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm"
                      whileHover={{ scale: 1.2 }}
                    >
                      {step.id}
                    </motion.div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="pl-20 md:pl-0 md:text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-textLight text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Arrow (Visual guide for vertical layout) */}
                {index !== steps.length - 1 && (
                  <motion.div
                    className="md:hidden absolute left-8 bottom-[-40px] transform -translate-x-1/2 text-gray-300"
                    initial={{ y: 0 }}
                    whileInView={{ y: [0, 10, 0] }}
                    viewport={{ once: false }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaChevronDown size={24} />
                  </motion.div>
                )}
                
                {/* Desktop Arrow (Visual guide between steps) */}
                {index !== steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-10 -right-6 text-gray-200 text-2xl"
                    initial={{ x: 0 }}
                    whileInView={{ x: [0, 10, 0] }}
                    viewport={{ once: false }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaChevronRight size={24} />
                  </motion.div>
                )}

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-gray-50 border border-gray-100 shadow-md">
            <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium text-gray-600">
              ⚡ avg turnaround: <span className="text-green-600 font-bold">24 Hours</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Workflow;