import React, { useState } from 'react'

const partnersData = [
 
  {
    id: 1,
    name: "State Skill Mission",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780132733/Screenshot_319_xkuhku.png",
    companyName: "State Skill Mission Partnerships",
    companyDesc: "Empaneled with various State Skill Development Missions to empower youth across multiple states."
  },
  {
    id: 2,
    name: "Sector Skill Council",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780132739/Screenshot_320_jwbmki.png",
    companyName: "Sector Skill Council Affiliations",
    companyDesc: "Aligned with national Sector Skill Councils for standardized curriculum and official certifications."
  },
  {
    id: 3,
    name: "Central Govt Schemes",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780132747/Screenshot_321_rq4cua.png",
    companyName: "Central Govt Skill Projects & Schemes",
    companyDesc: "Executing flagship central government skill development initiatives and employment programs."
  },
  {
    id: 4,
    name: "Empanelment with PSUs",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780132756/Screenshot_322_mgyovw.png",
    companyName: "Empanelment with Leading PSUs",
    companyDesc: "Partnered with Public Sector Undertakings (PSUs) for CSR skilling and community development initiatives."
  }
];

const SkillingSlider = () => {
  const [activePartner, setActivePartner] = useState(0)

  const handlePrev = () => {
    setActivePartner((prev) => (prev - 1 + partnersData.length) % partnersData.length)
  }

  const handleNext = () => {
    setActivePartner((prev) => (prev + 1) % partnersData.length)
  }

  const activeData = partnersData[activePartner]

  return (
    <section
      className="max-w-[1280px] mx-auto px-gutter bg-surface scroll-mt-10 py-8"
      id="business"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8" data-animate="fade-up">
        <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-extrabold bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 px-3.5 py-1 rounded-md inline-block">
          Corporate Governance &amp; Accreditations
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002a58] dark:text-white uppercase tracking-tight mt-3">
          Our Associations &amp; Partnerships
        </h2>
      
        <div className="w-16 h-1 bg-gradient-to-r from-[#002a58] via-blue-500 to-[#a9c7ff] mx-auto mt-3 rounded-full" />
      </div>

      {/* Top Right Controls & Active Category Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4 mb-6 gap-3 w-full">
        
          {/* Right Side Buttons to Switch Images */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-start sm:justify-end shrink-0 w-full sm:w-auto">
          {/* Category Pill Buttons */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {partnersData.map((item, index) => {
              const isActive = activePartner === index
              return (
                <button
                  key={index}
                  onClick={() => setActivePartner(index)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-xs ${
                    isActive
                      ? "bg-[#002a58] dark:bg-[#a9c7ff] text-white dark:text-[#002a58] shadow-md scale-[1.02]"
                      : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Full-Width Image Panel (Medium Height Frame, White Background) */}
      <div className="w-full relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg bg-white dark:bg-[#121517] flex flex-col items-center justify-center min-h-[280px] sm:min-h-[360px] md:min-h-[440px] p-2 sm:p-3">
        {/* Main Large Image */}
        <img
          key={activePartner}
          src={activeData.largeImage}
          alt={activeData.name}
          className="w-full h-[280px] sm:h-[360px] md:h-[440px] object-contain transition-all duration-500"
        />
      </div>

      {/* Outside Bottom Bar Section (Info on Left, Arrow Controls on Bottom Right) */}
      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        {/* Arrow Buttons Outside Bottom Right */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 hover:bg-[#002a58] hover:text-white dark:hover:bg-[#a9c7ff] dark:hover:text-[#002a58] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center transition-all shadow-sm active:scale-95 group"
            title="Previous Image"
            aria-label="Previous Image"
          >
            <span className="material-symbols-outlined text-[22px] transition-transform group-hover:-translate-x-0.5">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 hover:bg-[#002a58] hover:text-white dark:hover:bg-[#a9c7ff] dark:hover:text-[#002a58] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center transition-all shadow-sm active:scale-95 group"
            title="Next Image"
            aria-label="Next Image"
          >
            <span className="material-symbols-outlined text-[22px] transition-transform group-hover:translate-x-0.5">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SkillingSlider

