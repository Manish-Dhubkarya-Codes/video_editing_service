import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Using specific icons for cleaner look

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    link: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      console.log(formData);
      setStatus('success');
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-12 md:py-24 bg-slate-50 font-sans min-h-screen flex items-center">
      
      {/* Background Blobs (Subtler) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* --- LEFT COLUMN: Header & Info --- */}
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
                  We respond within 24 hours. Skip the form? Reach us directly below.
                </p>
            </div>

            {/* Direct Contact Buttons - 2 Column Grid on Mobile */}
            <div className="grid grid-cols-2 gap-4 mb-8 lg:mb-0">
               <a href="https://wa.me/1234567890" className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-green-400 hover:shadow-md transition-all group cursor-pointer">
                  <FaWhatsapp className="text-3xl text-green-500 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-slate-800 text-sm">WhatsApp</span>
               </a>
               <a href="mailto:info@proedit.com" className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all group cursor-pointer">
                  <FaEnvelope className="text-3xl text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-slate-800 text-sm">Email</span>
               </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: The Form --- */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 relative overflow-hidden">
              
              {/* Success State */}
              {status === 'success' && (
                <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                   <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                   <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                   <p className="text-slate-500 mt-2 mb-6">We'll be in touch shortly.</p>
                   <button onClick={() => setStatus('idle')} className="text-indigo-600 font-bold hover:underline">Send another</button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email - Stack on Mobile, Row on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Name</label>
                    <input type="text" name="name" onChange={handleChange} required placeholder="John Doe" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Email</label>
                    <input type="email" name="email" onChange={handleChange} required placeholder="john@example.com" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" />
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Service</label>
                      <select name="project" onChange={handleChange} required className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none appearance-none">
                        <option value="">Select...</option>
                        <option value="YouTube">YouTube</option>
                        <option value="Shorts">Shorts/Reels</option>
                        <option value="Corporate">Corporate</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Budget</label>
                      <select name="budget" onChange={handleChange} required className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none appearance-none">
                        <option value="">Range...</option>
                        <option value="Low">&lt; $500</option>
                        <option value="Mid">$500 - $2k</option>
                        <option value="High">$2k+</option>
                      </select>
                   </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 ml-1">Project Details</label>
                  <textarea name="message" rows={3} onChange={handleChange} placeholder="Tell us about your goals..." className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none"></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors shadow-lg active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2">
                   {status === 'submitting' ? (
                     <span className="animate-pulse">Sending...</span>
                   ) : (
                     <>Send Request <span className="text-xl">→</span></>
                   )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
};

export default Contact;