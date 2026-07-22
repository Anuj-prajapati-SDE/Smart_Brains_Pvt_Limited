import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const VocationalLabsPage = () => {
  const animRef = useScrollAnimation()

  const setupSteps = [
    {
      step: "01",
      title: "Spatial Audit & Design",
      desc: "Our design engineers map electrical outlets, safety corridors, equipment spacings, and ventilation setups for academic spaces.",
      duration: "Weeks 1 - 2"
    },
    {
      step: "02",
      title: "Structural Installation",
      desc: "Installing heavy laboratory benches, CNC machine anchoring bases, 3D printing exhaust units, and safety cages.",
      duration: "Weeks 3 - 5"
    },
    {
      step: "03",
      title: "Hardware Commissioning",
      desc: "Delivering, mounting, and verifying all equipment: robotic arms, micro-controllers, electrical scopes, and welding rigs.",
      duration: "Weeks 6 - 8"
    },
    {
      step: "04",
      title: "Curriculum Integration & Training",
      desc: "Providing textbooks, software licenses, and running practical lab seminars for school instructors and ITI trainers.",
      duration: "Weeks 9 - 10"
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1562774053-401d73a9a90c?q=80&w=1600&auto=format&fit=crop"
            alt="School training center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Academic Infrastructure
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              Vocational &amp; STEM Labs
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              turnkey setups of state-of-the-art STEM hubs, electronics makerspaces, and heavy-discipline carpentry/welding workshops.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Inquire Setup Blueprints
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Setup Roadmap */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-16" data-animate="fade-up">
          <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-bold">Turnkey Phases</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white mt-1 uppercase font-serif">Lab Commissioning Roadmap</h2>
          <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-animate="stagger-up">
          {setupSteps.map((st, idx) => (
            <div key={idx} className="bg-white dark:bg-[#121517] p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative">
              <div>
                <div className="flex justify-between items-center mb-4 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <span className="text-2xl font-black text-primary dark:text-[#a9c7ff] font-mono">
                    {st.step}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold font-mono uppercase">
                    {st.duration}
                  </span>
                </div>
                
                <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-2 uppercase tracking-wide">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Blueprint Blue Cards */}
      <section className="py-20 bg-white dark:bg-[#111416]/50 border-t border-b border-slate-200/60 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-animate="stagger-up">
            {/* Robotics blueprint */}
            <div className="p-6 rounded-2xl bg-primary text-white border border-white/5 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4">precision_manufacturing</span>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-2">Robotics &amp; AI Blueprint</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  High-speed computational nodes, Arduino starter kits, robotic arms, sensor integration circuits, and open-source ROS simulation systems.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#a9c7ff] tracking-widest mt-6">Ages 14+ / Higher Education</span>
            </div>

            {/* Electronics makerspace blueprint */}
            <div className="p-6 rounded-2xl bg-[#111416] text-white border border-white/5 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4">electric_bolt</span>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-2">Makerspace Electronics</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Soldering stations, digital oscilloscopes, breadboard assemblies, basic component organizers, and micro-chip testers.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mt-6">Ages 12+ / Secondary Schools</span>
            </div>

            {/* Heavy vocational blueprint */}
            <div className="p-6 rounded-2xl bg-[#111416] text-white border border-white/5 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4">carpentry</span>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-2">Vocational Workshop</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Heavy workbenches, certified welding shields, table saws, plumbing setups, and comprehensive industrial safety equipment.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mt-6">ITI / Polytechnic Alignment</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default VocationalLabsPage
