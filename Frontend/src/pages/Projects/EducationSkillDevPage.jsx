import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const EducationSkillDevPage = () => {
  const animRef = useScrollAnimation()

  const milestones = [
    {
      year: "PMKVY State-Wide Network",
      title: "6,500+ Rural Youth Certified",
      desc: "SmartBrains set up and managed 24 certified skill academies. We delivered courses in CNC operation, basic electronics, and logistics, helping place rural vocational graduates with national manufacturing firms.",
      details: ["24 Training Centers", "Placements in L&T, TATA", "92% Pass Rate"]
    },
    {
      year: "STEAM School Integrations",
      title: "15 Innovation Laboratories Equipped",
      desc: "Configured advanced makerspaces in premium secondary schools (Millennium & Parevartan networks). Sourced and installed 3D printers, CNC routers, laser engravers, and robotic arms, supporting hands-on student projects.",
      details: ["3D Printing & Coding", "Teacher Mentorships", "12,000+ Students Sourced"]
    },
    {
      year: "Power Grid Safety Coaching",
      desc: "Collaborated with National Power Grid Corp to design offline training modules and process safety checklists for engineers on substation safety.",
      title: "450 Power Engineers Upskilled",
      details: ["Substation Safety Manuals", "HMI Simulation Labs", "SLA Audited Outcomes"]
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
            alt="Study seminar"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Academic Cases
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              Education &amp; Skilling Portfolios
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              turnkey setups of secondary school STEM makerspaces and state-level vocational training programs.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                augment Academic Setup
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Milestone Block Timeline */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter space-y-16">
        <div className="text-center max-w-2xl mx-auto mb-16" data-animate="fade-up">
          <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-bold">Milestones Log</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white mt-1 uppercase font-serif">Program Achievements</h2>
          <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-12">
          {milestones.map((ml, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div key={idx} className={`flex flex-col lg:flex-row gap-8 items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`} data-animate="fade-up">
                {/* Milestone Year Box */}
                <div className="w-full lg:w-1/3 bg-primary text-white p-8 rounded-3xl flex flex-col justify-between border border-white/5 shadow-sm">
                  <div>
                    <span className="text-xs text-[#a9c7ff] font-bold uppercase tracking-widest block mb-2">// CATEGORY</span>
                    <h3 className="text-lg font-black uppercase font-mono tracking-tight leading-tight">{ml.year}</h3>
                  </div>
                  <span className="text-[10px] text-slate-300 uppercase tracking-widest mt-6 block">SLA Compliant Delivery</span>
                </div>

                {/* Milestone Details Box */}
                <div className="w-full lg:w-2/3 bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 p-8 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white uppercase mb-2">{ml.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">{ml.desc}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                    {ml.details.map((det, dIdx) => (
                      <span key={dIdx} className="bg-primary/5 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] text-[10px] font-semibold px-3 py-1 rounded-full">
                        {det}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default EducationSkillDevPage
