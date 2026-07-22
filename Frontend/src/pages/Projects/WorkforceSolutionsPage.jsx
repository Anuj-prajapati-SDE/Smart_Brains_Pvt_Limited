import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const WorkforceSolutionsPage = () => {
  const animRef = useScrollAnimation()

  const dispatches = [
    {
      client: "Larsen & Toubro Limited",
      domain: "EPC Piping & Construction",
      headcount: "300+ Engineers",
      location: "Southern Region Pipeline Blocks",
      metric: "98% Placement Timeline SLA Met"
    },
    {
      client: "Reliance Industries Infrastructure",
      domain: "Corporate Payrolling Svc",
      headcount: "1,200+ Subcontractors",
      location: "Jamnagar & Navi Mumbai Hubs",
      metric: "100% Statuary Tax Audit Compliance"
    },
    {
      client: "National Telecom Corporation",
      domain: "IT Support Help Desk",
      headcount: "150 Tech Associates",
      location: "Noida Head Office & Delhi Hub",
      metric: "Average Ramp-Up Time: 4 Days"
    },
    {
      client: "ONGC Refinery Unit",
      domain: "Shutdown Maintenance Crew",
      headcount: "450 Rig & Plant Crew",
      location: "Offshore Platforms & Refining Plant",
      metric: "Zero Incident Record Over 30 Days"
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
            alt="Workforce team"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Contract Cases
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              Workforce Deployments
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              Vetted personnel dispatches, payrolling case studies, and engineering group contracts for leading corporate infrastructure groups.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                augment Team Sourcing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatch Registry Table */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter">
        <div className="max-w-2xl mb-12" data-animate="fade-up">
          <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-bold">Case Registry</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white mt-1 uppercase font-serif">Staff Dispatch Log</h2>
          <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm" data-animate="fade-up">
          <table className="w-full text-left border-collapse bg-white dark:bg-[#121517]">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#111416] border-b border-slate-200 dark:border-slate-800 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                <th className="p-4 sm:p-5">Partner Client</th>
                <th className="p-4 sm:p-5">Staffing Discipline</th>
                <th className="p-4 sm:p-5">Headcount</th>
                <th className="p-4 sm:p-5">Region &amp; Operations</th>
                <th className="p-4 sm:p-5">Performance Metric</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {dispatches.map((d, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-[#111416]/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-800 dark:text-white">{d.client}</td>
                  <td className="p-4 sm:p-5">{d.domain}</td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-primary dark:text-[#a9c7ff]">{d.headcount}</td>
                  <td className="p-4 sm:p-5 text-slate-400">{d.location}</td>
                  <td className="p-4 sm:p-5 font-semibold text-slate-700 dark:text-slate-400">{d.metric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default WorkforceSolutionsPage
