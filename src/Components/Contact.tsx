import React, { useState } from 'react';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaPhoneAlt,
  FaPaperPlane,
  FaCopy,
  FaTimes
} from 'react-icons/fa'; 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    project: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  // --- 1. UPDATED SOCIAL LINKS ---
  const contactMethods = [
    { 
      id: 1, 
      icon: FaWhatsapp, 
      label: 'WhatsApp', 
      href: 'https://wa.me/918224889744', 
      color: 'text-green-500', 
      hoverBorder: 'hover:border-green-400' 
    },
    { 
      id: 2, 
      icon: FaInstagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/trendingediitz?igsh=MW9ldXljd25qYThmZA==', 
      color: 'text-pink-500', 
      hoverBorder: 'hover:border-pink-400' 
    },
    { 
      id: 3, 
      icon: FaFacebookF, 
      label: 'Facebook', 
      href: 'https://www.facebook.com/share/1K5m4RRo9c/', 
      color: 'text-blue-600', 
      hoverBorder: 'hover:border-blue-600' 
    },
    { 
      id: 4, 
      icon: FaYoutube, 
      label: 'YouTube', 
      href: 'https://www.youtube.com/@trendingediitz', 
      color: 'text-red-500', 
      hoverBorder: 'hover:border-red-500' 
    },
    { 
      id: 5, 
      icon: FaPhoneAlt, 
      label: 'Call Us', 
      href: 'tel:+918224889744', 
      color: 'text-indigo-600', 
      hoverBorder: 'hover:border-indigo-600' 
    },
    { 
      id: 6, 
      icon: FaEnvelope, 
      label: 'Email', 
      href: 'mailto:trendingediitz@gmail.com', 
      color: 'text-blue-400', 
      hoverBorder: 'hover:border-blue-400' 
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- GENERATE MESSAGE STRING ---
  const getFormattedMessage = () => {
    return `*New Project Request*\n\n` +
           `*Name:* ${formData.name}\n` +
           `*Email:* ${formData.email}\n` +
           `*Phone:* ${formData.phone}\n` +
           `*Service:* ${formData.project}\n` +
           `*Details:* ${formData.message}`;
  };

  // --- OPEN MODAL INSTEAD OF FAKE SUBMIT ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.name && formData.phone) {
      setShowModal(true);
    }
  };

  // --- HANDLE PLATFORM REDIRECT ---
  const handleSendToPlatform = (platform: 'whatsapp' | 'instagram' | 'facebook' | 'email') => {
    const message = getFormattedMessage();
    const encodedMessage = encodeURIComponent(message);
    
    let url = '';

    switch (platform) {
      case 'whatsapp':
        // WhatsApp API supports pre-filled text
        url = `https://wa.me/918224889744?text=${encodedMessage}`;
        window.open(url, '_blank');
        break;

      case 'email':
         // Mailto supports body text
        url = `mailto:trendingediitz@gmail.com?subject=New Project Request from ${formData.name}&body=${encodedMessage}`;
        window.open(url, '_blank');
        break;

      case 'instagram':
        // Instagram does NOT support URL text pre-fill. We copy to clipboard first.
        navigator.clipboard.writeText(message);
        setCopyStatus('Message Copied! Pasting in Instagram...');
        setTimeout(() => {
          window.open('https://www.instagram.com/trendingediitz?igsh=MW9ldXljd25qYThmZA==', '_blank');
          setShowModal(false);
          setCopyStatus('');
        }, 1500);
        return; 

      case 'facebook':
        // Facebook does NOT support URL text pre-fill. We copy to clipboard first.
        navigator.clipboard.writeText(message);
        setCopyStatus('Message Copied! Opening Facebook...');
        setTimeout(() => {
           window.open('https://www.facebook.com/share/1K5m4RRo9c/', '_blank');
           setShowModal(false);
           setCopyStatus('');
        }, 1500);
        return;
    }
    
    setShowModal(false);
  };

  return (
    <section id="contact" className="relative py-12 md:py-24 bg-slate-50 font-sans flex items-center">
      
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* --- LEFT COLUMN: Header & Social Grid --- */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <div className="mb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-3">
                  Contact Us
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                  Let's start a <br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">Project together.</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-lg max-w-md mx-auto lg:mx-0">
                  Fill out the form to generate your inquiry, then choose your preferred platform to send it.
                </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 lg:mb-0">
               {contactMethods.map((method) => (
                 <a 
                   key={method.id}
                   href={method.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`
                     flex flex-col items-center justify-center p-4 
                     bg-white border border-slate-200 rounded-2xl shadow-sm 
                     transition-all duration-300 group cursor-pointer
                     ${method.hoverBorder} hover:shadow-md hover:-translate-y-1
                   `}
                 >
                   <method.icon className={`text-2xl mb-2 transition-transform group-hover:scale-110 ${method.color}`} />
                   <span className="font-bold text-slate-700 text-xs">{method.label}</span>
                 </a>
               ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: The Form --- */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 relative overflow-hidden">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Name</label>
                    <input type="text" name="name" onChange={handleChange} required placeholder="Your Name" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" />
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Service</label>
                      <select name="project" onChange={handleChange} required className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none appearance-none">
                        <option value="">Select...</option>
                        <option value="YouTube Editing">YouTube Editing</option>
                        <option value="Reels/Shorts">Reels/Shorts</option>
                        <option value="Corporate">Corporate Video</option>
                        <option value="Other">Other</option>
                      </select>
                   </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        onChange={handleChange} 
                        required
                        placeholder="+91 00000 00000" 
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" 
                      />
                   </div>
                   <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Email</label>
                    <input type="email" name="email" onChange={handleChange} required placeholder="you@example.com" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Project Details</label>
                  <textarea name="message" rows={3} onChange={handleChange} placeholder="Tell us about your vision..." className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none"></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
                   Generate Request <span className="text-xl">→</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* --- PLATFORM SELECTION MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative border border-slate-100">
            
            {/* Modal Header */}
            <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Send Request via...</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-3">
              {copyStatus ? (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-pulse">
                  <FaCopy className="text-4xl text-green-500 mb-2"/>
                  <p className="font-bold text-slate-700">{copyStatus}</p>
                </div>
              ) : (
                <>
                  <p className="text-xs text-slate-500 mb-4 text-center">
                    Your message is ready! Choose a platform to send it.
                  </p>
                  
                  {/* WhatsApp Button */}
                  <button 
                    onClick={() => handleSendToPlatform('whatsapp')}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <FaWhatsapp className="text-xl" />
                      <span className="font-bold">WhatsApp</span>
                    </div>
                    <FaPaperPlane className="text-sm opacity-50 group-hover:opacity-100" />
                  </button>

                  {/* Instagram Button */}
                  <button 
                    onClick={() => handleSendToPlatform('instagram')}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-pink-50 text-pink-600 border border-pink-100 hover:bg-pink-600 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <FaInstagram className="text-xl" />
                      <span className="font-bold">Instagram</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-70 group-hover:text-white">(Auto-Copy & Open)</span>
                  </button>

                  {/* Facebook Button */}
                  <button 
                    onClick={() => handleSendToPlatform('facebook')}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all group"
                  >
                     <div className="flex items-center gap-3">
                      <FaFacebookF className="text-xl" />
                      <span className="font-bold">Facebook</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-70 group-hover:text-white">(Auto-Copy & Open)</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .animate-fade-in { animation: fadeIn 0.2s ease-out; }
        @keyframes fadeIn { from { opacity: 0; scale: 0.95; } to { opacity: 1; scale: 1; } }
      `}</style>
    </section>
  );
};

export default Contact;