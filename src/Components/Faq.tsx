import React, { useState } from 'react';
import { FaPlus, FaMinus, FaHeadset, FaWhatsapp } from 'react-icons/fa';

const faqs = [
  { 
    question: 'What types of videos do you edit?', 
    answer: 'We specialize in a wide range of formats including YouTube Vlogs, Instagram Reels/TikToks, Corporate Interviews, Real Estate tours, and Podcast post-production. Whether it is vertical short-form or long-form narrative, we can handle it.' 
  },
  { 
    question: 'How do I send my raw footage to you?', 
    answer: 'We use a streamlined cloud workflow. Once we start, we will provide a Google Drive or Dropbox folder for you to upload your raw files. We also accept links from WeTransfer, Frame.io, or any cloud storage you prefer.' 
  },
  { 
    question: 'Do you provide the stock footage and music?', 
    answer: 'Yes! We have subscriptions to premium stock libraries (like Artlist, Epidemic Sound, and Storyblocks). We will select royalty-free music and high-quality stock b-roll that fits your video’s mood perfectly, ensuring no copyright strikes.' 
  },
  { 
    question: 'What software do you use for editing?', 
    answer: 'Our team works primarily in Adobe Premiere Pro and After Effects for complex motion graphics. For color grading, we utilize DaVinci Resolve. We ensure industry-standard project files and 4K export quality.' 
  },
  { 
    question: 'What if I need revisions on the edit?', 
    answer: 'Your satisfaction is our priority. We include up to 2 rounds of revisions in our standard workflow. This covers changes to pacing, music, text overlays, and sound mixing. Major structural changes or new footage additions may require a separate fee.' 
  },
  // --- Payment & Money specific FAQ as requested ---
  { 
    question: 'What are your rates and payment terms?', 
    answer: 'Every project is unique, and we tailor our pricing to match your specific needs and volume. For custom quotes, billing inquiries, and payment arrangements, please contact us directly via WhatsApp or Call us at +1 (555) 123-4567.' 
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-xs md:text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">Production & Editing Queries</h2>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-accent bg-blue-50/30 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {/* Question Header (Clickable) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer flex items-center justify-between p-4 md:p-6 text-left focus:outline-none gap-4"
                >
                  <span className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                    isOpen ? 'text-accent' : 'text-primary'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 md:p-2 rounded-full shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isOpen ? <FaMinus size={12} className="md:w-3.5 md:h-3.5" /> : <FaPlus size={12} className="md:w-3.5 md:h-3.5" />}
                  </div>
                </button>

                {/* Answer Body (Animated Height) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 md:px-6 md:pb-6 text-sm md:text-base text-textLight leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* "Still Stuck" Box */}
        <div className="relative max-w-3xl mx-auto mt-12 bg-amber-50 border border-amber-100 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 borderRunner">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-sm text-accent shrink-0">
              <FaHeadset size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary">Need a custom quote?</h4>
              <p className="text-textLight text-sm mt-1 md:mt-0">
                For budget discussions and payment details, chat with our team.
              </p>
            </div>
          </div>

          <a 
            href="https://wa.me/918224889744" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#128C7E] transition-colors whitespace-nowrap text-sm md:text-base cursor-pointer shadow-lg"
          >
            <FaWhatsapp size={20} /> Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;