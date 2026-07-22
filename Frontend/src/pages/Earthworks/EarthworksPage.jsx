import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const EarthworksPage = () => {
  const animRef = useScrollAnimation()

  const geoLayers = [
    {
      level: "Layer 1: Structural Slab",
      height: "0m - 1.5m Depth",
      density: "High-grade concrete (M30+ Class)",
      use: "Distributes vertical loads across subterranean piles.",
      bg: "bg-slate-500"
    },
    {
      level: "Layer 2: Micro Pile Anchor",
      height: "1.5m - 12m Depth",
      density: "High-tensile steel casing (API standards)",
      use: "Reinforced load bearing steel rods locked in structural grout.",
      bg: "bg-amber-700"
    },
    {
      level: "Layer 3: Bedrock Bedting",
      height: "12m+ Depth",
      density: "High density granite/shale bedrock layers",
      use: "Tension anchors driven directly into rock bedrock grids.",
      bg: "bg-zinc-700"
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-background dark:bg-[#0c0e0f] text-on-surface dark:text-white" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-15"
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
            alt="Drilling rig"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-primary" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full text-white">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Heavy Foundations &amp; Grading
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              Construction &amp; Earthworks
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              Geotechnical engineering, micro-piling, deep structural excavations, and slope stabilization for energy &amp; civil projects.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-primary hover:bg-slate-200 transition-all font-bold rounded-xl text-xs uppercase tracking-wider">
                <span>Submit RFP Inquiry</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Geotechnical Layering Stack */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Explanatory copy */}
          <div className="lg:col-span-5 space-y-4" data-animate="fade-up">
            <span className="text-[10px] uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold">Geotech Layouts</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary dark:text-white uppercase font-serif">Subterranean Foundation Blueprint</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              We design layered geotechnical load paths combining micro-piles with bedrock anchors. This prevents load shears in shifting terrains or high-vibration power plants.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-white/5">
              <div>
                <div className="text-3xl font-black text-primary dark:text-[#a9c7ff]">0</div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Shear Incidents Reported</span>
              </div>
              <div>
                <div className="text-3xl font-black text-primary dark:text-[#a9c7ff]">15m+</div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Depth Capacity</span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Geotech Layering blocks */}
          <div className="lg:col-span-7 flex flex-col gap-4" data-animate="stagger-up">
            {geoLayers.map((lay, idx) => (
              <div key={idx} className="relative overflow-hidden p-6 rounded-2xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-[#111416] hover:border-primary/20 dark:hover:border-white/10 transition-all group shadow-sm">
                {/* Visual Depth bar on left */}
                <div className={`absolute left-0 top-0 bottom-0 w-2 ${lay.bg}`} />
                
                <div className="pl-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-[#a9c7ff] transition-colors uppercase text-sm tracking-wide">
                      {lay.level}
                    </h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-bold font-mono">{lay.height}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">Density Specification</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-2">{lay.density}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-light leading-relaxed">{lay.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default EarthworksPage
