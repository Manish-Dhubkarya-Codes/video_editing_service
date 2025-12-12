import React, { useState, useRef } from 'react';
import { FaCheck, FaTimes, FaQuestionCircle, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data (Unchanged) ---
const plans = [
  {
    name: 'Starter',
    description: 'Perfect for new creators testing the waters.',
    priceMonthly: 99,
    priceYearly: 79,
    features: [
      'Up to 5 min video duration',
      '48-hour turnaround',
      '1 Video per month',
      '2 Revisions per video',
      'Basic Color Correction',
      'Thumbnail Included'
    ],
    notIncluded: ['Motion Graphics', 'Source Files', 'Dedicated Account Manager'],
  },
  {
    name: 'Professional',
    description: 'For growing channels needing consistent quality.',
    priceMonthly: 199,
    priceYearly: 159,
    features: [
      'Up to 15 min video duration',
      '24-hour turnaround',
      '4 Videos per month',
      'Unlimited Revisions',
      'Advanced Color Grading',
      'Motion Graphics & SFX',
      'Thumbnail + A/B Testing'
    ],
    notIncluded: ['Source Files', 'Dedicated Account Manager'],
  },
  {
    name: 'Agency',
    description: 'Maximum scale for businesses and heavy uploaders.',
    priceMonthly: 499,
    priceYearly: 399,
    features: [
      'Unlimited duration',
      '12-hour priority turnaround',
      'Unlimited Videos',
      'Unlimited Revisions',
      'Cinema Grade Editing',
      'Full Motion Graphics',
      'Source Files Included',
      'Dedicated Account Manager'
    ],
    notIncluded: [],
  }
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes, there are no long-term contracts for monthly plans. You can cancel or pause your subscription at any time." },
  { q: "What happens if I don't use all my videos?", a: "Unused video credits roll over to the next month for up to 3 months." },
  { q: "How do I send my files?", a: "We provide a dedicated Google Drive folder or you can use Frame.io for seamless feedback and file transfer." },
];

// --- Components ---

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Ref for the scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to specific card
  const scrollToCard = (index: number) => {
    setSelectedIndex(index); // Also select the card
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index] as HTMLElement;
      if (card) {
        // Scroll to center of the specific card
        const containerCenter = scrollContainerRef.current.clientWidth / 2;
        const cardCenter = card.clientWidth / 2;
        const scrollLeft = card.offsetLeft - containerCenter + cardCenter;
        
        scrollContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNextCard = (currentIndex: number) => {
    const nextIndex = currentIndex + 1 >= plans.length ? 0 : currentIndex + 1;
    scrollToCard(nextIndex);
  };

  return (
    <section id="pricing" className="py-10 md:py-24 bg-slate-50 relative overflow-hidden min-h-screen font-sans">
      
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-400/20 rounded-full blur-[80px] md:blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-400/20 rounded-full blur-[80px] md:blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight"
          >
            Simple, Transparent <span className="text-blue-600">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your creative needs. No hidden fees.
          </motion.p>

          {/* --- Toggle Switch --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <span className={cn("text-sm font-bold transition-colors", !isYearly ? 'text-slate-900' : 'text-slate-400')}>Monthly</span>
            
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative cursor-pointer w-16 h-8 bg-slate-200 rounded-full p-1 transition-colors hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <motion.div 
                layout 
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={cn("w-6 h-6 bg-blue-600 rounded-full shadow-md", isYearly && "ml-auto")} 
              />
            </button>
            
            <span className={cn("text-sm font-bold transition-colors", isYearly ? 'text-slate-900' : 'text-slate-400')}>
              Yearly <span className="text-blue-600 text-xs bg-blue-100 px-2 py-0.5 rounded-full ml-1">-20%</span>
            </span>
          </motion.div>
        </div>

        {/* --- Pricing Cards Container --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          // UPDATED: Flex on mobile (horizontal scroll), Grid on Desktop
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 items-stretch mb-16 md:mb-24 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar px-2 md:px-0"
        >
          {plans.map((plan, index) => {
            const isSelected = selectedIndex === index;
            
            return (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } }
                }}
                whileHover={{ y: -10 }} // Only works on desktop hover
                onClick={() => setSelectedIndex(index)}
                // UPDATED: min-width for mobile cards
                className={cn(
                  "relative bg-white rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col shrink-0 snap-center",
                  "w-[85vw] md:w-auto", // Mobile width vs Desktop width
                  isSelected 
                    ? 'border-blue-500 shadow-2xl z-10 md:scale-105 ring-4 ring-blue-500/10' 
                    : 'border-slate-100 shadow-lg hover:border-blue-200 hover:shadow-xl'
                )}
              >
                {/* --- TOP RIGHT ARROW (Mobile Only) --- */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextCard(index);
                  }}
                  className="md:hidden absolute top-4 right-4 z-20 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm active:scale-95 transition-transform animate-pulse"
                >
                  <FaArrowRight size={12} />
                </button>

                {/* Popular Badge */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20, scale: 0.8 }}
                      animate={{ opacity: 1, y: -24, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute left-0 right-0 mx-auto w-fit top-0 z-20"
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                        Most Popular
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-6 md:p-8 flex flex-col h-full">
                  <h3 className={cn("text-2xl font-black", isSelected ? 'text-blue-600' : 'text-slate-900')}>{plan.name}</h3>
                  <p className="text-slate-500 text-sm mt-2 min-h-10">{plan.description}</p>
                  
                  {/* Price Animation */}
                  <div className="mt-6 mb-8 h-16 md:h-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isYearly ? "year" : "month"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                          ${isYearly ? plan.priceYearly : plan.priceMonthly}
                        </span>
                        <span className="text-slate-400 font-medium">/mo</span>
                        {isYearly && (
                          <motion.p 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            className="text-xs text-green-600 font-bold mt-1 bg-green-50 inline-block px-2 py-1 rounded"
                          >
                            Billed ${plan.priceYearly * 12} yearly
                          </motion.p>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-full py-3 md:py-4 rounded-xl font-bold text-sm transition-all duration-300",
                      isSelected
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                        : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                    )}
                  >
                    {isSelected ? 'Get Started Now' : 'Choose ' + plan.name}
                  </motion.button>

                  {/* Features */}
                  <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">What's included</p>
                    <ul className="space-y-3 md:space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start text-sm text-green-600"
                        >
                          <FaCheck className={cn("mt-0.5 mr-3 shrink-0", isSelected ? 'text-blue-600' : 'text-slate-400')} />
                          <span className="text-slate-700">{feature}</span>
                        </motion.li>
                      ))}
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400 opacity-60">
                          <FaTimes className="mt-0.5 mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto px-2 md:px-0">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-center text-slate-900 mb-8"
          >
            Frequently Asked Questions
          </motion.h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-800 flex items-start md:items-center gap-3 text-sm md:text-base">
                    <FaQuestionCircle className="text-blue-500 mt-1 md:mt-0 shrink-0" />
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-slate-400 text-xs shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 md:px-6"
                    >
                      <div className="pb-4 pl-7 md:pl-8 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 text-sm md:text-base">Need a custom enterprise solution?</p>
            <a href="#contact" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1 group text-sm md:text-base">
              Contact our Sales Team 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

      </div>

      {/* Hide scrollbar utility for the horizontal deck */}
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

export default Pricing;