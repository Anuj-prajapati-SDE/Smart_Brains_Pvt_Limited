import React, { useState } from 'react'

const partnersData = [
 
  {
    id: 1,
    name: "State Skill Mission",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785359506/WhatsApp_Image_2026-07-29_at_5.17.17_PM_ju4xlh.jpg",
    companyName: "State Skill Mission Partnerships",
    companyDesc: "Empaneled with various State Skill Development Missions to empower youth across multiple states."
  },
  {
    id: 2,
    name: "Sector Skill Council",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785359605/WhatsApp_Image_2026-07-29_at_5.17.17_PM_b3kl7u.jpg",
    companyName: "Sector Skill Council Affiliations",
    companyDesc: "Aligned with national Sector Skill Councils for standardized curriculum and official certifications."
  },
  {
    id: 3,
    name: "Central Govt Schemes",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785359507/WhatsApp_Image_2026-07-29_at_5.17.17_PM_1_nqux0p.jpg",
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

      {/* Top Left Controls & Active Category Bar */}
      <div className="flex items-center justify-start border-b border-slate-200/80 dark:border-slate-800/80 pb-3 mb-6 w-full">
        {/* Left Side Buttons to Switch Images */}
        <div className="flex items-center justify-start shrink-0 w-full">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-start w-full">
            {partnersData.map((item, index) => {
              const isActive = activePartner === index
              return (
                <button
                  key={index}
                  onClick={() => setActivePartner(index)}
                  className={`relative pb-2.5 px-1 text-xs sm:text-sm font-extrabold transition-colors duration-300 group ${
                    isActive
                      ? "text-[#002a58] dark:text-[#a9c7ff]"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full bg-[#002a58] dark:bg-[#a9c7ff]"
                        : "w-0 bg-transparent group-hover:w-full group-hover:bg-[#002a58]/30 dark:group-hover:bg-[#a9c7ff]/30"
                    }`}
                  />
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

      {/* Outside Bottom Bar Section (Arrow Controls on Bottom Right) */}
      <div className="mt-4 flex items-center justify-end">
        {/* Arrow Buttons Outside Bottom Right */}
        <div className="flex items-center gap-2 shrink-0">
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

