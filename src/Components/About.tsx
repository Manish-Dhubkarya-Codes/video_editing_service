import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  const [timecode, setTimecode] = useState("00:04:23:12");

  // Timecode ticker logic
  useEffect(() => {
    const interval = setInterval(() => {
      const frames = Math.floor(Math.random() * 60);
      setTimecode(`00:04:23:${frames.toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden py-8 px-4 md:px-8 flex flex-col gap-6">
      
      {/* --- UI: Top Navigation (Mac OS / Modern App Style) --- */}
      <div className="w-full h-12 bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl flex justify-between items-center px-6 shadow-lg">
        <div className="flex items-center gap-6">
          {/* Window Controls */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-6 w-px bg-slate-700 mx-2" />
          {/* Menu Items */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <span className="hover:text-white cursor-pointer transition">Project</span>
            <span className="hover:text-white cursor-pointer transition">Edit</span>
            <span className="text-white cursor-pointer border-b-2 border-indigo-500">Workspace</span>
            <span className="hover:text-white cursor-pointer transition">Effects</span>
          </div>
        </div>
        
        {/* Right Status */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-300 text-xs font-mono font-bold">
            GPU: ACCELERATED
          </div>
          <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-white border border-slate-600">
            MD
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        
        {/* --- LEFT PANEL: PROGRAM MONITOR --- */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          
          {/* The Screen */}
          <div className="relative aspect-video bg-slate-950 rounded-xl border border-slate-700 shadow-2xl overflow-hidden group">
            
            {/* Monitor Header Overlay */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-30 bg-gradient-to-b from-black/60 to-transparent">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Program Sequence</span>
                <span className="font-bold text-white text-sm">Main_Intro_Final_v3.mp4</span>
              </div>
              <div className="font-mono text-xl text-white/90 drop-shadow-md tracking-wider">
                {timecode}
              </div>
            </div>

            {/* Content: "The Video" */}
            <div className="absolute inset-0 flex items-center justify-center p-12 bg-slate-900 relative">
               {/* Grid Pattern inside monitor */}
               <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
               />

               <div className="relative z-20 max-w-2xl text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 border border-rose-500/30 rounded-full text-rose-300 font-mono text-[10px] tracking-widest mb-6 animate-pulse">
                    <div className="w-2 h-2 bg-rose-500 rounded-full" />
                    RECORDING
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Visual Storyteller <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      & Post-Specialist.
                    </span>
                  </h2>
                  
                  <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                    Transforming raw footage into compelling narratives. I specialize in pacing, motion graphics, and color grading that retains audience attention.
                  </p>
               </div>
            </div>

            {/* Playback Progress Bar (Bottom of screen) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
               <div className="h-full w-1/3 bg-indigo-500 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform"></div>
               </div>
            </div>
          </div>

          {/* Transport Controls Bar */}
          <div className="flex justify-between items-center px-6 py-4 bg-slate-800 rounded-xl border border-slate-700/50 shadow-sm">
             <div className="flex gap-6 text-slate-500 font-mono text-xs">
                <div>
                    <span className="block text-[10px] text-slate-600">IN POINT</span>
                    <span>00:00:00:00</span>
                </div>
                <div>
                    <span className="block text-[10px] text-slate-600">DURATION</span>
                    <span>00:01:45:12</span>
                </div>
             </div>
             
             {/* Center Buttons */}
             <div className="flex items-center gap-6 text-slate-300">
                <button className="hover:text-white transition transform active:scale-95"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg></button>
                <button className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20 transform active:scale-95">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <button className="hover:text-white transition transform active:scale-95"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg></button>
             </div>

             <div className="flex items-center gap-3">
                 <div className="h-1 w-24 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-emerald-500 to-emerald-300"></div>
                 </div>
                 <span className="text-xs font-bold text-slate-500">VOL</span>
             </div>
          </div>
        </div>

        {/* --- RIGHT PANEL: ASSET BROWSER (Skills) --- */}
        <div className="lg:col-span-4 bg-slate-800 rounded-xl border border-slate-700/50 shadow-sm flex flex-col overflow-hidden h-full min-h-[450px]">
          {/* Panel Tab Header */}
          <div className="flex border-b border-slate-700">
            <div className="px-6 py-3 border-r border-slate-700 bg-slate-800 text-xs font-bold text-white border-t-2 border-t-indigo-500">
              Project Bin
            </div>
            <div className="px-6 py-3 border-r border-slate-700 bg-slate-900/50 text-xs font-medium text-slate-500 hover:text-slate-300 cursor-pointer transition">
              Effects Library
            </div>
          </div>
          
          {/* Search / Filter */}
          <div className="p-3 border-b border-slate-700/50 bg-slate-800">
             <div className="relative">
                <input type="text" disabled placeholder="Search assets..." className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500" />
                <svg className="w-3 h-3 absolute right-3 top-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             </div>
          </div>

          {/* List View */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
             <div className="grid grid-cols-4 px-2 py-1 text-[10px] font-bold text-slate-500 uppercase">
                <span className="col-span-2">Name</span>
                <span>Type</span>
                <span className="text-right">Size</span>
             </div>
            
            {/* Asset Items */}
            {[
              { name: "Premiere_Pro_2024", type: "APP", size: "2.4 GB", color: "text-purple-400", icon: "Pr" },
              { name: "After_Effects_VFX", type: "COMP", size: "1.8 GB", color: "text-indigo-400", icon: "Ae" },
              { name: "DaVinci_Resolve", type: "APP", size: "4.1 GB", color: "text-pink-400", icon: "Da" },
              { name: "Photoshop_Assets", type: "PSD", size: "500 MB", color: "text-blue-400", icon: "Ps" },
              { name: "Blender_3D_Models", type: "BLEND", size: "8.2 GB", color: "text-orange-400", icon: "Bl" },
              { name: "Sound_Design_SFX", type: "WAV", size: "12 GB", color: "text-emerald-400", icon: "Au" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-4 items-center px-2 py-2 hover:bg-slate-700/50 rounded cursor-pointer group transition-colors border border-transparent hover:border-slate-600/50">
                 <div className="col-span-2 flex items-center gap-3 overflow-hidden">
                    <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold bg-slate-900 border border-slate-700 ${item.color}`}>
                       {item.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white truncate">{item.name}</span>
                 </div>
                 <div className="text-[10px] text-slate-500 font-mono">{item.type}</div>
                 <div className="text-[10px] text-slate-500 font-mono text-right">{item.size}</div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="p-2 border-t border-slate-700 bg-slate-800 text-[10px] text-slate-500 flex justify-between">
            <span>6 Items Selected</span>
            <span>Total: 29.0 GB</span>
          </div>
        </div>

        {/* --- BOTTOM PANEL: TIMELINE (Stats) --- */}
        <div className="col-span-1 lg:col-span-12 bg-slate-800 border border-slate-700/50 rounded-xl h-64 flex flex-col relative overflow-hidden shadow-sm">
          
          {/* Timeline Controls (Left Side) */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-slate-800 border-r border-slate-700 z-20 flex flex-col pt-8">
             <div className="h-12 px-3 flex items-center justify-between border-b border-slate-700/50 bg-slate-700/20">
                <span className="text-xs font-bold text-slate-400">V2 <span className="text-[9px] font-normal opacity-50 ml-1">Experience</span></span>
                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-slate-600"></div></div>
             </div>
             <div className="h-12 px-3 flex items-center justify-between border-b border-slate-700/50 bg-slate-700/20">
                <span className="text-xs font-bold text-slate-400">V1 <span className="text-[9px] font-normal opacity-50 ml-1">Projects</span></span>
                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-slate-600"></div></div>
             </div>
             <div className="h-12 px-3 flex items-center justify-between border-b border-slate-700/50 bg-slate-700/20 mt-2">
                <span className="text-xs font-bold text-slate-400">A1 <span className="text-[9px] font-normal opacity-50 ml-1">Audio</span></span>
                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div></div>
             </div>
          </div>

          {/* Timeline Ruler */}
          <div className="h-8 bg-slate-900 border-b border-slate-700 ml-32 flex items-end overflow-hidden">
             {[...Array(40)].map((_, i) => (
               <div key={i} className="flex-1 border-l border-slate-700 h-2 relative">
                 {i % 5 === 0 && <span className="absolute -top-4 -left-1 text-[9px] text-slate-500 font-mono">00:0{i}</span>}
               </div>
             ))}
          </div>

          {/* Timeline Tracks Area */}
          <div className="flex-1 relative bg-slate-900/50 ml-32 py-2 space-y-[1px]">
            
            {/* Playhead (Red Line) */}
            <div className="absolute top-0 bottom-0 w-px bg-rose-500 z-30 left-[40%] animate-scanline">
               <div className="absolute -top-3 -translate-x-1/2 text-rose-500">
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="currentColor"><path d="M0.5 0H10.5V6L5.5 11L0.5 6V0Z" /></svg>
               </div>
            </div>

            {/* Track V2 */}
            <div className="h-12 w-full relative group bg-slate-800/30 border-b border-slate-700/30">
               <div className="absolute left-8 top-1 bottom-1 w-[40%] bg-purple-600/30 border border-purple-500/50 rounded-md flex items-center px-3 hover:brightness-110 cursor-pointer transition">
                  <span className="text-xs text-purple-100 font-medium truncate drop-shadow-sm">Hours_Rendered [10,000+]</span>
               </div>
            </div>

            {/* Track V1 */}
            <div className="h-12 w-full relative group bg-slate-800/30 border-b border-slate-700/30">
               <div className="absolute left-0 top-1 bottom-1 w-[25%] bg-indigo-600/30 border border-indigo-500/50 rounded-md flex items-center px-3 hover:brightness-110 cursor-pointer transition">
                  <span className="text-xs text-indigo-100 font-medium truncate drop-shadow-sm">Projects [250+]</span>
               </div>
               <div className="absolute left-[26%] top-1 bottom-1 w-[20%] bg-sky-600/30 border border-sky-500/50 rounded-md flex items-center px-3 hover:brightness-110 cursor-pointer transition">
                   <span className="text-xs text-sky-100 font-medium truncate drop-shadow-sm">Clients [100% Sat]</span>
               </div>
            </div>

             {/* Gap for separation */}
             <div className="h-2 w-full bg-transparent"></div>

            {/* Track A1 */}
            <div className="h-12 w-full relative group bg-slate-800/30 border-b border-slate-700/30">
               <div className="absolute left-0 right-0 top-1 bottom-1 mx-4 bg-emerald-900/20 border border-emerald-600/30 rounded-md flex items-center px-2">
                   <div className="flex items-center gap-[3px] w-full h-full opacity-60">
                      {[...Array(60)].map((_, i) => (
                        <div key={i} className="w-1 bg-emerald-500/60 rounded-full transition-all duration-300" style={{ height: `${20 + Math.random() * 80}%` }}></div>
                      ))}
                   </div>
               </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes scanline {
          0% { left: 5%; }
          50% { left: 75%; }
          100% { left: 5%; }
        }
        .animate-scanline {
          animation: scanline 12s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </section>
  );
};

export default About;