import React from 'react';

const coreValues = [
  {
    id: "trust",
    num: "01",
    tag: "FOUNDATION",
    title: "Trust",
    description: "We shall believe in our employees and other stakeholders.",
    glowColor: "bg-blue-500/5 dark:bg-blue-500/5 group-hover:bg-blue-500/10 dark:group-hover:bg-[#a9c7ff]/10",
    icon: (
      <svg className="w-6 h-6 transition-all duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Shield */}
        <path d="M50 15c8-1 12 3 12 11c0 8-5 13-12 18-7-5-12-10-12-18c0-8 4-12 12-11z" />
        {/* Shield Checkmark */}
        <path d="M46 25l3 3 5-5" strokeWidth="2.5" />
        {/* Hand */}
        <path d="M22 51h12c5 0 8 2 12 4.5l14 4.5c4 1 8 0 8-4s-3-5-6-5.5H48" />
        <path d="M22 51v10h4a2 2 0 002-2v-8" />
      </svg>
    )
  },
  {
    id: "courage",
    num: "02",
    tag: "DRIVE",
    title: "Courage",
    description: "We shall embrace news and businesses.",
    glowColor: "bg-indigo-500/5 dark:bg-indigo-500/5 group-hover:bg-indigo-500/10 dark:group-hover:bg-[#a9c7ff]/10",
    icon: (
      <svg className="w-6 h-6 transition-all duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Curved hand base */}
        <path d="M35 32v12c0 12 8 20 18 20s18-8 18-20V34" />
        {/* Vertical fingers */}
        <path d="M44 38V18M52 38V13M60 38V18" />
        {/* Thumb */}
        <path d="M35 42c3-4 7-4 10 0l2 2" />
      </svg>
    )
  },
  {
    id: "commitment",
    num: "03",
    tag: "PROMISE",
    title: "Commitment",
    description: "We shall stand by our promises and adhere to high standards of business.",
    glowColor: "bg-purple-500/5 dark:bg-purple-500/5 group-hover:bg-purple-500/10 dark:group-hover:bg-[#a9c7ff]/10",
    icon: (
      <svg className="w-6 h-6 transition-all duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Cuff */}
        <path d="M22 42h5v22h-5z" />
        {/* Thumbs up body */}
        <path d="M27 48h22c3 0 5-2 5-5 0-6 4-15 9-18 2-1 5 1 4 4l-4 14h14c4 0 6 2 6 5v4c0 3-2 5-4 7l-8 11c-2 2-5 3-7 3H27" />
      </svg>
    )
  }
];

const AboutCoreValues = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f8f9fa] to-white dark:from-[#080b0c] dark:to-[#0c0e0f] border-b border-outline-variant/20 overflow-hidden">
      {/* Decorative background blur blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#002a58]/3 dark:bg-[#a9c7ff]/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/3 dark:bg-blue-400/2 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
        {/* Section Header */}
        <div className="relative text-center max-w-3xl mx-auto mb-14" data-animate="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 text-[9.5px] font-extrabold uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#002a58] dark:bg-[#a9c7ff] animate-pulse" />
            Our Core Pillars
          </div>
          <h3 className="font-headline-lg text-xl sm:text-2xl md:text-3xl text-[#002a58] dark:text-white mt-1.5 font-black tracking-tight uppercase leading-snug">
            OUR CORE VALUES DEFINE THE JOURNEY THAT IS, HAS BEEN, AND{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002a58] via-blue-600 to-[#a9c7ff] dark:from-[#a9c7ff] dark:to-white font-black">
              ALWAYS WILL BE
            </span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[#002a58] via-blue-600 to-[#a9c7ff] dark:from-[#a9c7ff] dark:to-white mx-auto mt-4 rounded-full shadow-xs" />
        </div>

        {/* Values Cards Grid - Staggered Scroll Animations */} 
        <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="group relative flex flex-col items-start text-left p-6 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/60 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-[#002a58]/40 dark:hover:border-[#a9c7ff]/40 transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Dynamic top highlight indicator line */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#002a58] via-blue-600 to-[#a9c7ff] dark:from-[#a9c7ff] dark:to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Watermark Number: Subtle Outline */}
              <span className="absolute top-4 right-5 text-3xl font-black text-slate-100 dark:text-slate-800/40 group-hover:text-[#002a58]/20 dark:group-hover:text-[#a9c7ff]/30 group-hover:scale-110 transition-all duration-300 font-mono tracking-tighter pointer-events-none select-none">
                {value.num}
              </span>

              {/* Flex Header with Icon and Title */}
              <div className="flex items-center gap-3.5 mb-4 pr-8">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#002a58]/8 dark:bg-[#a9c7ff]/12 border border-slate-200/50 dark:border-slate-800/80 text-[#002a58] dark:text-[#a9c7ff] group-hover:bg-[#002a58] group-hover:text-white dark:group-hover:bg-[#a9c7ff] dark:group-hover:text-[#002a58] group-hover:rotate-6 transition-all duration-300 shadow-xs shrink-0">
                  <div className="w-5.5 h-5.5 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <span className="block text-[8.5px] tracking-widest font-extrabold text-slate-400 dark:text-slate-500 uppercase">
                    {value.tag}
                  </span>
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-800 dark:text-white group-hover:text-[#002a58] dark:group-hover:text-[#a9c7ff] transition-colors duration-300 leading-tight mt-0.5">
                    {value.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCoreValues;
