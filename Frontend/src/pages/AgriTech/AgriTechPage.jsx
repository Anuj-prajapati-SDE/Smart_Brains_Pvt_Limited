import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const AgriTechPage = () => {
  const animRef = useScrollAnimation()

  const workflow = [
    {
      step: "01",
      name: "Soil & Crop Sensors",
      desc: "NPK sensors, soil moisture probes, and leaf canopy spectrometers gather environmental data continuously.",
      tech: "IoT Hardware"
    },
    {
      step: "02",
      name: "Gateway Transmission",
      desc: "Data is packaged and transmitted over a local LoRaWAN network to regional base stations, saving battery consumption.",
      tech: "LoRaWAN Net"
    },
    {
      step: "03",
      name: "Cloud Dashboard",
      desc: "Our analytics platform processes values and alerts managers about irrigation volumes or fertilizer shifts.",
      tech: "SaaS Analytics"
    },
    {
      step: "04",
      name: "Automated Valves",
      desc: "Cloud alerts trigger solenoid drip irrigation valves and nutrient pumps automatically to balance soil moisture.",
      tech: "Actuator Loop"
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1600&auto=format&fit=crop"
            alt="Vertical hydroponic crops"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Modern AgriTech Verticals
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              AgriTech Solutions
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              Configuring automated greenhouses, IoT crop telemetry networks, and sustainable hydroponic setups for predictive harvests.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Configure SmartFarm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor-to-Cloud Telemetry Workflow */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-16" data-animate="fade-up">
          <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-bold">Telemetry Loops</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white mt-1 uppercase font-serif">SmartFarm Sensor Workflow</h2>
          <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" data-animate="stagger-up">
          {workflow.map((wk, idx) => (
            <div key={idx} className="bg-white dark:bg-[#121517] p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-black text-slate-100 dark:text-slate-800 font-mono group-hover:text-primary dark:group-hover:text-[#a9c7ff] transition-colors">
                    {wk.step}
                  </span>
                  <span className="bg-primary/5 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {wk.tech}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2 uppercase tracking-wide">
                  {wk.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {wk.desc}
                </p>
              </div>

              {/* Connecting arrow indicator for desktop (last card excluded) */}
              {idx < 3 && (
                <span className="material-symbols-outlined absolute right-[-16px] top-1/2 -translate-y-1/2 text-slate-200 dark:text-slate-800 text-[24px] hidden lg:block z-10">
                  arrow_forward
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AgriTechPage
