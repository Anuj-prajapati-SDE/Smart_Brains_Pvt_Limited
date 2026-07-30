import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const AgriTechPage = () => {
  const animRef = useScrollAnimation()

  const coreOfferings = [
    {
      id: 1,
      title: "HYDROPONICS FARM SOLUTIONS",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
      desc: "Complete setup of NFT systems, Dutch Buckets, Vertical Towers, Grow Bags and Indoor Farms for sustainable, high-yield crop production."
    },
    {
      id: 2,
      title: "GREENHOUSE INFRASTRUCTURE",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?q=80&w=800&auto=format&fit=crop",
      desc: "Design and construction of climate-controlled greenhouses and polyhouses for commercial agriculture, protecting crops against environmental extremes."
    },
    {
      id: 3,
      title: "FARM AUTOMATION & IOT INTEGRATION",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      desc: "Smart farm automation with IoT sensors, climate control systems and remote monitoring — giving complete control over irrigation, nutrients and climate."
    },
    {
      id: 4,
      title: "AGRI-TECH & BUSINESS ADVISORY",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop",
      desc: "Expert consulting in hydroponic farming systems, crop planning, nutrient management, pest control and project feasibility — helping home growers, farmers and commercial businesses grow smart and scale fast."
    },
    {
      id: 5,
      title: "TRAINING & EDUCATION PROGRAMS",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      desc: "Practical training, workshops and certification courses for students, professionals and farmers — learn soilless farming, polyhouse setup and advanced vertical farming operations with hands-on experience."
    },
    {
      id: 6,
      title: "URBAN FARMING SOLUTIONS",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop",
      desc: "Modular, space-saving hydroponic farming systems for rooftops, balconies, kitchens and offices — bringing fresh vertical farming and soilless farming solutions closer to homes and cities. Grow anywhere, always."
    },
    {
      id: 7,
      title: "UTILITY & POST-HARVEST SOLUTIONS",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
      desc: "Integrated hydroponic farm infrastructure including RO water systems, solar power units, cold storage and packaging lines — ensuring a seamless farm-to-market journey for commercial growers."
    },
    {
      id: 8,
      title: "HYDROPONICS EQUIPMENT MANUFACTURING",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      desc: "Precision-made hydroponic equipment including NFT channels, Dutch buckets, net pots, and vertical systems — crafted in-house using food-grade HDPE and PP for home and commercial use."
    },
    {
      id: 9,
      title: "RESEARCH & INNOVATION",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      desc: "Continuous R&D to develop soilless crop production methods, optimize system performance and advance sustainable greenhouse farming technologies for the future."
    }
  ]

  const services = [
    {
      id: "business-consulting",
      icon: "handshake",
      title: "Business Consulting Service",
      subtitle: "Advisory & Feasibility Studies",
      desc: "InHydro offers industry-leading business planning, advisory services, and feasibility studies to help hydroponic enterprises thrive.",
      highlights: ["Feasibility Study", "Crop Advisory"]
    },
    {
      id: "haas",
      icon: "eco",
      title: "Hydroponics As A Service (HaaS)",
      subtitle: "Zero CapEx Turnkey Farming",
      desc: "Get a fully managed hydroponic farm for a fixed monthly fee with zero initial investment or operational challenges.",
      highlights: ["Zero Upfront CapEx", "Fixed Monthly"]
    },
    {
      id: "om-service",
      icon: "engineering",
      title: "Operation and Maintenance (O&M)",
      subtitle: "Full Spectrum System Management",
      desc: "End-to-end system management from installation to daily operations, optimizing system performance and ROI.",
      highlights: ["Daily Operations", "ROI Optimization"]
    },
    {
      id: "agronomy-service",
      icon: "agriculture",
      title: "Agronomy Service To Farmers",
      subtitle: "Precision Crop & Nutrient Mgmt",
      desc: "Expert crop nutrient management, pest control, and growth monitoring to maximize sustainable yields.",
      highlights: ["Nutrient Precision", "Yield Maximization"]
    },
    {
      id: "training-service",
      icon: "school",
      title: "Hydroponics Training Service",
      subtitle: "Fundamental & Advanced Skilling",
      desc: "Comprehensive fundamental and advanced hydroponic training with hands-on learning for individuals and corporate clients.",
      highlights: ["Hands-On Labs", "Certification"]
    },
    {
      id: "amc-service",
      icon: "verified_user",
      title: "Annual Maintenance Contract (AMC)",
      subtitle: "Preventative & Peak Performance",
      desc: "Year-long preventative maintenance plan with regular technical visits to ensure peak system efficiency and zero downtime.",
      highlights: ["Year-Long Plan", "Tech Visits"]
    }
  ]

  const stats = [
    { value: "40%+", label: "Water & Energy Savings" },
    { value: "100%", label: "Automated Crop Telemetry" },
    { value: "24/7", label: "Real-Time Monitoring" },
    { value: "3x", label: "Higher Crop Yield Potential" }
  ]

  const advantages = [
    {
      icon: "water_drop",
      title: "Sustainable Resource Mgmt",
      desc: "Closed-loop hydroponic systems reduce water usage by up to 90% while recycling nutrients efficiently."
    },
    {
      icon: "insights",
      title: "Data-Driven Decisions",
      desc: "Continuous telemetry provides actionable insight for fertilizer balance, pH, and pest control."
    },
    {
      icon: "published_with_changes",
      title: "Turnkey Maintenance",
      desc: "Dedicated AMC and O&M packages guarantee high system uptime and hassle-free operation."
    },
    {
      icon: "military_tech",
      title: "Expert Agronomy Support",
      desc: "Seasoned agronomists deliver tailored crop recipes and continuous yield optimization."
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-background dark:bg-[#0c0e0f] text-on-surface dark:text-white" ref={animRef}>
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
              Your complete partner for hydroponic farming systems, greenhouse construction, vertical farming and soilless solutions.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Configure SmartFarm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-slate-100 dark:bg-[#121517] border-b border-slate-200/80 dark:border-white/5 py-8">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-animate="stagger-up">
            {stats.map((st, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#1a1e21] border border-slate-200/50 dark:border-white/5 shadow-sm">
                <div className="text-2xl sm:text-4xl font-black text-primary dark:text-[#a9c7ff] mb-1 font-mono">{st.value}</div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do! / Our Core Offerings Section (From Shared Images 1, 2 & 3) */}
      <section className="py-12 sm:py-16 max-w-[1280px] mx-auto px-gutter">
        {/* Section Header Centered */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white tracking-tight uppercase leading-tight font-serif">
            What We Do!
          </h2>
          <p className="text-base sm:text-lg font-bold text-primary/80 dark:text-[#a9c7ff] mt-1">
            Our Core Offerings:
          </p>
          <div className="w-14 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-3 rounded-full" />
        </div>

        {/* 9 Core Offerings Cards Grid (Narrower Width, Taller Height Frame) */}
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-animate="stagger-up">
            {coreOfferings.map((item) => (
              <div
                key={item.id}
                className="group bg-primary dark:bg-[#121517] rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Taller Card Image Header */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                </div>

                {/* Taller Card Bottom Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-primary dark:bg-[#121517] text-white min-h-[170px]">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white dark:text-white mb-2.5 text-center uppercase tracking-wide leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 dark:text-slate-300 font-light leading-relaxed text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hydroponics Business Services Section */}
      <section id="services" className="py-20 max-w-[1280px] mx-auto px-gutter border-t border-slate-200/60 dark:border-slate-800/40">
        <div className="text-center max-w-3xl mx-auto mb-16" data-animate="fade-up">
          <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            Commercial Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-primary dark:text-white uppercase font-serif">
            Services For Hydroponics Farming Business
          </h2>
          <div className="w-16 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-6 rounded-full" />
        </div>

        {/* 6 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate="stagger-up">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="group relative bg-white dark:bg-[#121517] rounded-2xl border border-slate-200/80 dark:border-white/10 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Decorative Highlight Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-container to-[#a9c7ff] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Row: Icon + Subtitle Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] flex items-center justify-center group-hover:bg-primary group-hover:text-white dark:group-hover:bg-[#a9c7ff] dark:group-hover:text-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-[30px]">{srv.icon}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">
                    {srv.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-[#a9c7ff] transition-colors leading-snug">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>

              {/* Highlights Pill Tags & Know More Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2 flex-wrap">
                {/* <div className="flex flex-wrap gap-1.5">
                  {srv.highlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary dark:text-[#a9c7ff] bg-primary/5 dark:bg-[#a9c7ff]/10 px-2.5 py-1 rounded-full uppercase tracking-wide"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary dark:bg-[#a9c7ff]" />
                      {hl}
                    </span>
                  ))}
                </div> */}

                <a
                  href="https://inhydro.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 dark:bg-[#a9c7ff]/10 hover:bg-primary hover:text-white dark:hover:bg-[#a9c7ff] dark:hover:text-primary text-primary dark:text-[#a9c7ff] rounded-lg text-xs font-bold transition-all ml-auto group/btn"
                >
                  <span>Know More</span>
                  <span className="material-symbols-outlined text-[15px] group-hover/btn:translate-x-0.5 transition-transform">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
  
      {/* Why Choose SmartBrains AgriTech */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter border-t border-slate-200/60 dark:border-slate-800/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5" data-animate="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-[#a9c7ff]">
              Why Choose SmartBrains
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary dark:text-white uppercase font-serif leading-tight">
              Pioneering High-Yield Hydroponic Excellence
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              We bridge traditional farming with cutting-edge automation, custom nutrient formulations, and year-round operational reliability.
            </p>

            <div className="pt-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white hover:bg-primary-container transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md"
              >
                <span>Schedule Feasibility Consultation</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" data-animate="stagger-up">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-white/5 shadow-sm hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">{adv.icon}</span>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-2 text-sm uppercase tracking-wide">
                  {adv.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pb-24 max-w-[1280px] mx-auto px-gutter" data-animate="fade-up">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary via-[#003b7a] to-primary overflow-hidden p-8 sm:p-12 text-white shadow-2xl flex flex-col items-center text-center">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
            <span className="material-symbols-outlined text-[320px]">agriculture</span>
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col items-center text-center">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-widest text-[#a9c7ff] mb-4">
              Get Started Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4 font-serif leading-tight">
              Ready To Modernize Your Hydroponic Enterprise?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 font-light mb-8 leading-relaxed">
              Connect with our team of agronomists and SmartFarm hardware specialists for custom HaaS plans, feasibility studies, and AMC contracts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="px-7 py-3.5 bg-white text-primary hover:bg-slate-100 transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg"
              >
                Contact AgriTech Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AgriTechPage
