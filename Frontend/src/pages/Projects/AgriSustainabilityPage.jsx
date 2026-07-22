import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const AgriSustainabilityPage = () => {
  const animRef = useScrollAnimation()

  const metrics = [
    {
      label: "Water Conservation Rate",
      value: "85% Savings",
      percentage: "w-[85%]",
      desc: "Accomplished through automated nutrient film techniques and drip lines.",
      color: "bg-emerald-500"
    },
    {
      label: "Crop Yield Improvement",
      value: "20% Gain",
      percentage: "w-[65%]",
      desc: "Driven by real-time LoRaWAN crop telemetry and NPK sensor diagnostics.",
      color: "bg-emerald-500"
    },
    {
      label: "Clean Energy Integration",
      value: "45 Solar Pumps",
      percentage: "w-[90%]",
      desc: "Delivered solar-powered micro-irrigation systems in water-stressed blocks.",
      color: "bg-emerald-500"
    }
  ]

  const projects = [
    {
      title: "Commercial Hydroponics Setup",
      client: "Haryana Agri-Grow Co",
      desc: "Installed automated NFT channels and smart lighting layouts to optimize nutrient intake.",
      tag: "Hydroponics"
    },
    {
      title: "IoT Sugarcane Soil Networks",
      client: "Western Sugar Cooperatives",
      desc: "Deployed 350 moisture probes to log parameters on mobile dashboards.",
      tag: "IoT Probes"
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1628352631548-d3e91122a632?q=80&w=1600&auto=format&fit=crop"
            alt="Farming field crops"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Sustainability Portfolios
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              Agri &amp; Eco Sustainability
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              Showcasing case studies on automated hydroponic greenhouses, soil telemetry, and solar utility networks.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Inquire Eco Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecological Progress Dials */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Progress Bars */}
          <div className="lg:col-span-7 space-y-6" data-animate="fade-up">
            <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-bold">Ecological Gauges</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white mt-1 uppercase font-serif">Environmental Savings Index</h2>
            <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mb-8 rounded-full" />
            
            <div className="space-y-6">
              {metrics.map((m, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wide">{m.label}</span>
                    <span className="font-mono font-bold text-primary dark:text-[#a9c7ff]">{m.value}</span>
                  </div>
                  {/* Progress track */}
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${m.color} ${m.percentage} rounded-full`} />
                  </div>
                  <p className="text-[10px] text-slate-400 font-light leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Case Profiles */}
          <div className="lg:col-span-5 space-y-6" data-animate="stagger-up">
            {projects.map((p, idx) => (
              <div key={idx} className="bg-white dark:bg-[#121517] p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block bg-primary/5 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 uppercase">
                  {p.tag}
                </span>
                <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-2 uppercase tracking-wide">{p.title}</h3>
                <span className="text-[10px] text-slate-400 block mb-2">Client: {p.client}</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AgriSustainabilityPage
