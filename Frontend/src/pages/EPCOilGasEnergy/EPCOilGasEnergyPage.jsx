import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const EPCOilGasEnergyPage = () => {
  const animRef = useScrollAnimation()

  const phases = [
    {
      num: "01",
      name: "Feasibility & FEED",
      duration: "Months 1 - 2",
      desc: "Front-End Engineering Design, GIS mapping, geological route profiling, and initial hazop compliance reports.",
      details: ["Soil Load Analysis", "Environmental Impact Clearance", "Hazop Stage 1"]
    },
    {
      num: "02",
      name: "Detailed Engineering",
      duration: "Months 3 - 5",
      desc: "Stress profiling of steel pipes, stress analysis of pipeline joints, DCS layout mapping, and valve node calculations.",
      details: ["ASME B31.3 Stress Check", "3D CAD Model Review", "PLC Logic Diagrams"]
    },
    {
      num: "03",
      name: "Procurement & Logistics",
      duration: "Months 6 - 8",
      desc: "Sourcing certified API 5L line pipes, high-pressure valves, and automated actuator assemblies from vetted manufacturers.",
      force: "Global Supply",
      details: ["API 5L Pipe Audits", "Actuator Factory Testing", "Just-In-Time Site Delivery"]
    },
    {
      num: "04",
      name: "Construction & Commission",
      duration: "Months 9 - 12",
      desc: "Trenching, pipeline welding, non-destructive testing (NDT), hydrostatic testing, SCADA integration, and plant startup.",
      details: ["Automatic Tig Welding", "100% Radiography Testing", "Hydro-Testing at 150 Bar"]
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-background dark:bg-[#0c0e0f] text-on-surface dark:text-white" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center bg-primary overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1600&auto=format&fit=crop"
            alt="Refinery columns at night"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-primary" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl text-white">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3 py-1 text-xs uppercase tracking-widest font-extrabold mb-4 rounded-md">
              Vertical Focus: EPC
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              EPC OIL, GAS &amp; <br/>ENERGY SOLUTIONS
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              Industrial pipelines, refining loops, storage arrays, and green-hydrogen facilities engineered under ASME, API, and ISO codes.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider">
                <span>Request Technical Consultation</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-4" data-animate="fade-up">
            <span className="text-[10px] uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold px-2.5 py-1 rounded bg-primary/5 dark:bg-[#a9c7ff]/10 inline-block">
              Execution Roadmap
            </span>
            <h2 className="text-3xl font-bold tracking-tight leading-tight uppercase font-serif text-primary dark:text-white">
              Our Turnkey Project Life Cycle
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              From FEED layout to hydro-testing and final Commissioning, we manage all phase gates with structural precision.
            </p>
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 hidden lg:block">
              <div className="text-5xl font-extrabold text-primary dark:text-[#a9c7ff]">100%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mt-1">Inspection Clearance Rate</div>
            </div>
          </div>

          {/* Right Column: Interactive Timeline List */}
          <div className="lg:col-span-8 relative pl-4 sm:pl-8 border-l-2 border-slate-200 dark:border-white/10 space-y-12">
            {phases.map((ph, idx) => (
              <div key={idx} className="relative group pl-6 sm:pl-10" data-animate="fade-up">
                {/* Timeline Node Icon */}
                <div className="absolute left-[-27px] sm:left-[-43px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-background dark:bg-[#080b0c] border-[3px] border-primary dark:border-[#a9c7ff] flex items-center justify-center font-mono text-[9px] sm:text-xs font-bold text-primary dark:text-white shadow-md group-hover:scale-110 transition-transform">
                  {ph.num}
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#111416] border border-slate-200/60 dark:border-white/5 group-hover:border-primary/20 dark:group-hover:border-white/10 transition-colors shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-[#a9c7ff] transition-colors">{ph.name}</h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-bold font-mono">{ph.duration}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-4">{ph.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-white/5">
                    {ph.details.map((det, dIdx) => (
                      <span key={dIdx} className="px-2.5 py-0.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] text-slate-600 dark:text-slate-300 font-medium">
                        {det}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Capabilities Table */}
      <section className="py-20 bg-surface-container-low dark:bg-[#111416]/50 border-t border-b border-slate-200 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="max-w-2xl mb-12" data-animate="fade-up">
            <span className="text-[10px] uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold">Engineering Specifications</span>
            <h2 className="text-2xl font-bold tracking-tight text-primary dark:text-white mt-1 uppercase">Standard Certifications &amp; Guidelines</h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 shadow-sm" data-animate="fade-up">
            <table className="w-full text-left border-collapse bg-white dark:bg-[#121517]">
              <thead>
                <tr className="bg-slate-50 dark:bg-[#111416] border-b border-slate-200 dark:border-white/10 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                  <th className="p-4 sm:p-5">Engineering Discipline</th>
                  <th className="p-4 sm:p-5">Applicable Codes</th>
                  <th className="p-4 sm:p-5">Quality Control Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-[#111416]/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-800 dark:text-white">Process Piping</td>
                  <td className="p-4 sm:p-5">ASME B31.3 / B31.4 / B31.8</td>
                  <td className="p-4 sm:p-5">Hydrostatic Proof Testing &amp; Joint Radiography</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-[#111416]/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-800 dark:text-white">Pipeline Manufacturing</td>
                  <td className="p-4 sm:p-5">API Spec 5L PSL 1 &amp; PSL 2</td>
                  <td className="p-4 sm:p-5">Ultrasonic NDT &amp; Yield Strength Mapping</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-[#111416]/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-800 dark:text-white">Automation &amp; Valves</td>
                  <td className="p-4 sm:p-5">IEC 61508 SIL 2 / API Spec 6D</td>
                  <td className="p-4 sm:p-5">Actuator Stroke Speed &amp; DCS Integration Audits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industrial Call to Action */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter">
        <div data-animate="scale-up" className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#002a58] to-[#00142e] border border-white/10 overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="relative z-10 text-white max-w-xl space-y-3">
            <h2 className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight">Need a structural consultation?</h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Consolidate your pipeline designs and construction phases with our ASME certified consulting engineers.
            </p>
          </div>
          <div className="relative z-10 mt-6 md:mt-0 shrink-0">
            <Link to="/contact-us" className="inline-block px-8 py-3.5 bg-white text-[#002a58] hover:bg-slate-200 transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg">
              Submit Tender Proposal
            </Link>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 -rotate-45 translate-x-32 -translate-y-32" />
        </div>
      </section>
    </main>
  )
}

export default EPCOilGasEnergyPage
