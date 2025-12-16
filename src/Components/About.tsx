import React, { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const About: React.FC = () => {
  const [timecode, setTimecode] = useState("00:04:23:12");

  useEffect(() => {
    const interval = setInterval(() => {
      const frames = Math.floor(Math.random() * 60);
      setTimecode(`00:04:23:${frames.toString().padStart(2, "0")}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Restored Asset Data from the previous version
  const assets = [
    { name: "Premiere_Pro_2024", type: "APP", size: "2.4 GB", color: "text-purple-700 bg-purple-50" },
    { name: "After_Effects_VFX", type: "COMP", size: "1.8 GB", color: "text-indigo-700 bg-indigo-50" },
    { name: "DaVinci_Resolve", type: "APP", size: "4.1 GB", color: "text-pink-700 bg-pink-50" },
    { name: "Photoshop_Assets", type: "PSD", size: "500 MB", color: "text-blue-700 bg-blue-50" },
    { name: "Voice_Over_Rec", type: "VOI", size: "8.2 GB", color: "text-orange-700 bg-orange-50" },
    { name: "Sound_Design_SFX", type: "WAV", size: "12 GB", color: "text-emerald-700 bg-emerald-50" },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-white text-slate-700 font-sans py-12 px-4 md:px-8 flex flex-col items-center gap-8"
    >
      {/* --- VISUAL SHOWCASE HEADER (Restored Text) --- */}
      <div className="text-center max-w-4xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-slate-500 text-xs font-bold tracking-wider border border-slate-200 uppercase">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          Post-Production Suite
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
          About The Studio
        </h1>
        <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
          Transforming raw footage into compelling narratives. We specialize in pacing, 
          motion graphics, and color grading that retains audience attention. 
          We don't just cut clips; we craft immersive visual experiences.
        </p>
      </div>

      {/* --- THE "APP WINDOW" CONTAINER --- */}
      <div className="w-full max-w-[1600px] h-[85vh] bg-slate-50 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col relative ring-4 ring-slate-100">
        
        {/* --- APP BAR (Navigation) --- */}
        <div className="w-full h-14 bg-white border-b border-slate-200 flex justify-between items-center px-6 shrink-0 z-50">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/30" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/30" />
            </div>
            <div className="h-6 w-px bg-slate-200 mx-2" />
            <div className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-wide text-slate-400">
              <span className="hover:text-indigo-600 cursor-pointer transition">
                Project
              </span>
              <span className="text-indigo-600 cursor-pointer border-b-2 border-indigo-600 pb-4 -mb-4">
                Workspace
              </span>
              <span className="hover:text-indigo-600 cursor-pointer transition">
                Effects
              </span>
              <span className="hover:text-indigo-600 cursor-pointer transition">
                Export
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-md text-indigo-700 text-[10px] font-mono font-bold items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
              GPU: ACCELERATED
            </div>
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-xs font-bold text-slate-600 border border-slate-200">
              <FaRegUserCircle  size={20} />
            </div>
          </div>
        </div>

        {/* --- MAIN WORKSPACE GRID --- */}
        <div className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0 bg-slate-50/50">
          {/* --- LEFT COLUMN: PREVIEW MONITOR --- */}
          <div className="lg:col-span-8 flex flex-col gap-3 h-full min-h-0">
            {/* Monitor Frame */}
            <div className="flex-1 relative bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden group flex flex-col min-h-0">
              {/* Top Info Bar */}
              <div className="h-8 border-b border-slate-100 bg-white flex justify-between items-center px-4 z-20 shrink-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Program: Main_Intro_Final_v3.mp4
                </span>
                <div className="flex gap-4 font-mono text-[9px] text-slate-400">
                  <span>ZOOM: FIT</span>
                  <span>RES: 4K</span>
                </div>
              </div>

              {/* --- THE SCREEN CONTENT --- */}
              <div className="flex-1 relative bg-slate-100 flex items-center justify-center overflow-hidden isolate">
                {/* Layer 1: Technical Grids */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                
                {/* Layer 2: Safe Margins */}
                <div className="absolute inset-8 border border-indigo-400/20 pointer-events-none"></div>
                <div className="absolute inset-16 border border-dashed border-indigo-400/20 pointer-events-none"></div>

                {/* Layer 3: Tracking Points */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-slate-400/40 font-thin text-xl"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                  >
                    +
                  </div>
                ))}

                {/* Layer 5: Data Overlay */}
                <div className="absolute top-4 right-4 text-right font-mono text-[9px] text-slate-400 leading-tight z-10">
                  <p>X: 3840</p>
                  <p>Y: 2160</p>
                  <p className="text-indigo-600 font-bold mt-1">REC.709</p>
                </div>

                {/* Layer 6: MAIN CONTENT (Restored Text) */}
                 <div className="relative z-10 text-center p-8 max-w-3xl transform hover:scale-[1.01] transition-transform duration-500">
                  {/* Transform Box */}
                  <div className="absolute -inset-4 border border-sky-500/40 hidden group-hover:block pointer-events-none">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-sky-500"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-sky-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-sky-500"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-sky-500"></div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur border border-rose-200 rounded-full text-rose-600 font-mono text-[10px] tracking-widest mb-6 shadow-sm mx-auto">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
                    LIVE PREVIEW
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tighter leading-[0.9]">
                    VIDEO EDITING <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 animate-gradient-x bg-[length:200%_auto]">
                      ARCHITECT
                    </span>
                  </h2>

                  <div className="relative bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-slate-200 shadow-sm max-w-lg mx-auto">
<p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
  "Sculpting time and emotion from raw footage. I don't just cut clips; I
  craft immersive visual narratives where <span className="text-indigo-600 font-bold">rhythm meets impact</span>."
</p>
                  </div>
                </div>
              </div>

              {/* Scrubber */}
              <div className="h-1 w-full bg-slate-100 cursor-pointer relative z-20 shrink-0">
                <div className="w-[35%] h-full bg-indigo-500 relative"></div>
              </div>
            </div>

            {/* Transport Controls */}
            <div className="h-12 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-between px-6 shrink-0">
              <div className="w-24 font-mono text-indigo-600 font-bold text-sm">
                {timecode}
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <button className="hover:text-indigo-600 transition transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 16.07V7.93c0-.81-.91-1.28-1.54-.82l-5.36 4.07c-.57.43-.57 1.21 0 1.64l5.36 4.07c.63.46 1.54-.01 1.54-.82zm1.92-4.07l5.36-4.07c.63-.46 1.54.01 1.54.82v8.14c0 .81-.91 1.28-1.54.82l-5.36-4.07c-.57-.43-.57-1.21 0-1.64z" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-indigo-200 transition transform active:scale-95">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <button className="hover:text-indigo-600 transition transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.5 7.93v8.14c0 .81.91 1.28 1.54.82l5.36-4.07c.57-.43.57-1.21 0-1.64L7.04 7.11c-.63-.46-1.54.01-1.54.82zm13 0v8.14c0 .81-.91 1.28-1.54.82l-5.36-4.07c-.57-.43-.57-1.21 0-1.64l5.36-4.07c.63-.46 1.54.01 1.54.82z" />
                  </svg>
                </button>
              </div>

              <div className="w-24 flex justify-end gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-1.5 w-1 bg-emerald-400/80 rounded-sm" />
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: ASSETS (Restored Data) --- */}
          <div className="lg:col-span-4 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col overflow-hidden h-64 lg:h-auto min-h-0">
            <div className="flex border-b border-slate-100 shrink-0">
              <div className="px-4 py-2 border-b-2 border-indigo-500 text-xs font-bold text-indigo-700 bg-indigo-50/50">
                Project Bin
              </div>
              <div className="px-4 py-2 text-xs font-medium text-slate-400">
                Media Browser
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-1 scrollbar-hide">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[9px] font-bold text-slate-400 uppercase border-b border-slate-100">
                    <th className="py-2 pl-2">Name</th>
                    <th className="py-2">Type</th>
                    <th className="py-2 pr-2 text-right">Size</th>
                  </tr>
                </thead>
                <tbody className="text-[10px] font-medium text-slate-600">
                  {assets.map((item, i) => (
                    <tr
                      key={i}
                      className="group hover:bg-slate-50 border-b border-slate-50 transition-colors cursor-pointer"
                    >
                      <td className="py-2 pl-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-slate-200 border border-slate-300"></div>
                        <span className="group-hover:text-indigo-600 font-semibold truncate">
                          {item.name}
                        </span>
                      </td>
                      <td className="py-2">
                        <span className={`px-1 py-0.5 rounded text-[9px] font-bold ${item.color} border border-slate-100`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="py-2 pr-2 text-right font-mono text-slate-400">
                        {item.size}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-2 bg-slate-50 border-t border-slate-100 flex justify-between text-[10px] text-slate-400 font-medium shrink-0">
              <span>6 Items</span>
              <span>29.0 GB</span>
            </div>
          </div>

          {/* --- BOTTOM ROW: TIMELINE (Restored Data) --- */}
          <div className="lg:col-span-12 h-40 lg:h-48 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col overflow-hidden shrink-0">
            {/* Timeline Toolbar */}
            <div className="h-8 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-4 shrink-0">
              <span className="text-[10px] font-bold text-slate-600">
                Main_Sequence_01
              </span>
              <div className="h-3 w-px bg-slate-200"></div>
              <div className="flex gap-2 text-slate-400">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden relative">
              {/* Track Headers */}
              <div className="w-16 bg-slate-50 border-r border-slate-200 flex flex-col pt-4 z-20 shadow-sm shrink-0">
                <div className="h-8 border-b border-white flex flex-col justify-center px-2 bg-slate-100/50">
                  <span className="text-[9px] font-bold text-slate-500">V2</span>
                </div>
                <div className="h-8 border-b border-white flex flex-col justify-center px-2 bg-slate-100/50">
                  <span className="text-[9px] font-bold text-slate-500">V1</span>
                </div>
                <div className="h-8 border-b border-white flex flex-col justify-center px-2 bg-slate-100/50 mt-1">
                  <span className="text-[9px] font-bold text-slate-500">A1</span>
                </div>
              </div>

              {/* Timeline Content */}
              <div className="flex-1 relative bg-slate-100/30 overflow-hidden">
                {/* Ruler */}
                <div className="h-4 bg-white border-b border-slate-200 flex items-end">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 border-l border-slate-200 h-1.5 relative"
                    ></div>
                  ))}
                </div>

                {/* Playhead */}
                <div className="absolute top-0 bottom-0 w-px bg-rose-500 z-30 left-[35%]">
                  <div className="absolute top-0 bottom-0 w-full bg-rose-500/10"></div>
                </div>

                {/* Tracks */}
                <div className="pt-0">
                  {/* V2 - Hours Rendered */}
                  <div className="h-8 border-b border-slate-200/50 w-full relative">
                    <div className="absolute left-[35%] w-[25%] top-1 bottom-1 bg-purple-100 border border-purple-200 rounded flex items-center px-2">
                      <span className="text-[8px] font-semibold text-purple-700 truncate">
                        Hours_Rendered [10k+]
                      </span>
                    </div>
                  </div>
                  {/* V1 - Projects & Clients */}
                  <div className="h-8 border-b border-slate-200/50 w-full relative">
                    <div className="absolute left-0 w-[30%] top-1 bottom-1 bg-indigo-100 border border-indigo-200 rounded flex items-center px-2">
                      <span className="text-[8px] font-semibold text-indigo-700 truncate">
                        Projects [250+]
                      </span>
                    </div>
                    <div className="absolute left-[30%] w-[40%] top-1 bottom-1 bg-sky-100 border border-sky-200 rounded flex items-center px-2 border-l-2 border-l-sky-400">
                      <span className="text-[8px] font-semibold text-sky-700 truncate">
                        Clients [100% Sat]
                      </span>
                    </div>
                  </div>
                  {/* Gap */}
                  <div className="h-1 w-full bg-slate-200/30"></div>
                  {/* A1 - Audio Waveform */}
                  <div className="h-8 border-b border-slate-200/50 w-full relative mt-0">
                    <div className="absolute left-0 right-0 mx-2 top-1 bottom-1 bg-emerald-50 border border-emerald-100 rounded flex items-center px-2 overflow-hidden">
                      <div className="flex items-center gap-[1px] w-full h-full opacity-50">
                        {[...Array(100)].map((_, i) => (
                          <div
                            key={i}
                            className="w-0.5 bg-emerald-400 rounded-full"
                            style={{ height: `${Math.random() * 100}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;