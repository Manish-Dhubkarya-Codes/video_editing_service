import React, { useState } from 'react';
import { FaPlus, FaMinus, FaHeadset, FaEnvelope } from 'react-icons/fa';

const faqs = [
  { 
    question: 'What file formats do you accept?', 
    answer: 'We accept almost any video format including MP4, MOV, AVI, WMV, and PRORES. For the best results, we recommend sending the highest resolution source files you have available (1080p or 4K).' 
  },
  { 
    question: 'How long does the editing process take?', 
    answer: 'Our standard turnaround time is 24-48 hours for most projects. For complex edits or longer content (over 30 mins), it may take 3-5 days. If you are in a rush, we offer a "Priority 12-Hour" add-on at checkout.' 
  },
  { 
    question: 'What is included in a "Revision"?', 
    answer: 'A revision covers changes to cuts, text overlays, music choice, and sound mixing. It does not cover completely restarting the project with new footage or changing the original script/direction provided.' 
  },
  { 
    question: 'Do you sign Non-Disclosure Agreements (NDAs)?', 
    answer: 'Yes, absolutely. We work with high-profile clients and corporate brands where privacy is paramount. We are happy to sign your NDA before receiving any footage.' 
  },
  { 
    question: 'How do I transfer large video files to you?', 
    answer: 'Once you book a service, you will receive a secure upload link to our dedicated Google Drive / Dropbox server. You can also send us Frame.io links or WeTransfer links if you prefer.' 
  },
];

const FAQ: React.FC = () => {
  // -1 means no item is open by default. Change to 0 if you want the first one open.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Common Questions</span>
          <h2 className="text-4xl font-bold text-primary mt-3">Everything you need to know</h2>
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
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${
                    isOpen ? 'text-accent' : 'text-primary'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors duration-300 ${
                    isOpen ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </div>
                </button>

                {/* Answer Body (Animated Height) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-textLight leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* "Still Stuck" Box */}
        <div className="max-w-3xl mx-auto mt-12 bg-neutral rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
              <FaHeadset size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary">Still have questions?</h4>
              <p className="text-textLight text-sm">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            </div>
          </div>
          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors whitespace-nowrap"
          >
            <FaEnvelope /> Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;