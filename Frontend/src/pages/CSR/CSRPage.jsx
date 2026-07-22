import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const CSRPage = () => {
  const animRef = useScrollAnimation()

  const metrics = [
    { label: "Youth Trained & Placed", value: "6,800+", detail: "Empowering rural vocational graduates" },
    { label: "Women Scholars Support", value: "1,200+", detail: "STEM education and career entries" },
    { label: "Villages Solar Grid Connected", value: "35+", detail: "Off-grid green energy installations" },
    { label: "Community Pure Water Filters", value: "50+", detail: "Clean water utility set ups" }
  ]

  const stories = [
    {
      title: "Livelihood Skilling Campaigns in Eastern UP",
      desc: "SmartBrains set up dedicated, free-of-cost vocational training centers in rural blocks. We delivered accredited courses in electrical wiring, machine operation, and retail management, helping secure jobs for over 1,500 youth who completed the program.",
      stats: "1,500+ Rural Placements",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Women in Technology Skill Drives",
      desc: "Accelerating female representation in corporate and tech roles, our CSR sponsored scholarship programs deliver python scripting, database basics, and office administration skills to young college-going women in under-resourced districts.",
      stats: "85% Corporate Placed",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
            alt="Children smiling"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Social Impact Drives
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              Corporate Social Responsibility
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              Delivering measurable community welfare, vocational opportunities, and clean utilities under official corporate CSR mandates.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Co-Sponsor CSR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Grid */}
      <section className="py-16 max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-animate="stagger-up">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 p-6 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform">
              <div className="text-3xl font-black text-primary dark:text-[#a9c7ff] mb-1">{m.value}</div>
              <div className="text-xs font-bold text-slate-700 dark:text-white uppercase tracking-wider mb-2">{m.label}</div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Storytelling Blocks */}
      <section className="py-20 bg-white dark:bg-[#111416]/50 border-t border-b border-slate-200/60 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-gutter space-y-20">
          <div className="text-center max-w-2xl mx-auto" data-animate="fade-up">
            <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-bold">CSR Stories</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white mt-1 uppercase font-serif">Impact In Action</h2>
            <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
          </div>

          {stories.map((st, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`} data-animate="fade-up">
                {/* Image side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden aspect-video shadow-md border border-slate-200/20">
                    <img src={st.image} alt={st.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                      {st.stats}
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white leading-tight uppercase font-serif">
                    {st.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {st.desc}
                  </p>
                  <div className="pt-2">
                    <Link to="/contact-us" className="text-xs font-bold text-primary dark:text-[#a9c7ff] flex items-center gap-1.5 group hover:gap-2.5 transition-all uppercase tracking-wider">
                      <span>Collaborate On Similar Project</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
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

export default CSRPage
