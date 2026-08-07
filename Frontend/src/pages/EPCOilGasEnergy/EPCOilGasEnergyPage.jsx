import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const EPCOilGasEnergyPage = () => {
  const animRef = useScrollAnimation()

  // State for Image 2 Service Explorer Tab Selection
  const [activeTab, setActiveTab] = useState(0)

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Image 1 Reference Data - Core Pillars
  const corePillars = [
    {
      id: "markets",
      title: "Markets",
      subtitle: "Energy Sector & Market Solutions",
      image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1200&auto=format&fit=crop",
      desc: "Smart Brains EPC delivers tailored, high value solutions across the entire energy value chain, grounded in engineering excellence, technology leadership, and proven project execution. We partner with leading global operators to optimize performance.",
      bullets: [
        "Downstream Refining & Petrochemicals",
        "Offshore Marine & Subsea Terminals",
        "Upstream Exploration & Gathering Loops",
        "Clean Energy & Decarbonization Hubs"
      ]
    },
    {
      id: "products-services",
      title: "Products & Services",
      subtitle: "Turnkey EPC & Engineering Portfolio",
      image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1200&auto=format&fit=crop",
      desc: "Our comprehensive portfolio of products and services is designed to support clients at every stage of the project lifecycle. From consulting, concept and FEED to EPC delivery, we combine leading technical capabilities with agile execution.",
      bullets: [
        "Turnkey EPCC Execution & Management",
        "High-Pressure Pipeline Networks (API 5L)",
        "DCS & SCADA Automated Control Nodes",
        "Subsea Loading Arms & Trestle Facilities"
      ]
    },
    {
      id: "technologies-innovation",
      title: "Technologies & Innovation",
      subtitle: "R&D, Decarbonization & Clean Tech",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop",
      desc: "Innovation is at the core of everything we do. By leveraging proprietary and licensed technologies, strategic partnerships, and continuous R&D at our labs, Smart Brains develops breakthrough solutions for a low-carbon future.",
      bullets: [
        "Digital Twin & Predictive CFD Simulation",
        "Green Hydrogen & Ammonia Production",
        "Carbon Capture, Utilization & Storage (CCUS)",
        "SIL-3 Rated Emergency Shutdown Systems"
      ]
    }
  ]

  // Image 2 Reference Data - Interactive Lifecycle & Services Matrix
  const servicesMatrix = [
    {
      id: "overview",
      navLabel: "GO TO SERVICES",
      title: "Comprehensive Energy Asset Services",
      subtitle: "Unlocking maximum value at every phase of your asset lifecycle",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
      desc: "Wherever you are on your energy journey, Smart Brains EPC has the expertise and experience to support. Find out how we unlock value at every stage of the energy asset life cycle through precision engineering, safety compliance, and operational efficiency.",
      features: [
        "End-to-End Asset Optimization",
        "Safety & Environmental HAZOP Assurance",
        "Cost-Efficient Procurement Networks",
        "24/7 Operations & Maintenance Support"
      ],
      ctaText: "GO TO SERVICES",
      badge: "LIFECYCLE OVERVIEW"
    },
    {
      id: "development",
      navLabel: "PROJECT DEVELOPMENT",
      title: "Feasibility & Front-End Engineering Design (FEED)",
      subtitle: "De-risking capital investments before site mobilization",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
      desc: "We perform comprehensive feasibility studies, GIS route mapping, soil load calculations, and conceptual design to lay a rock-solid foundation for complex energy projects.",
      features: [
        "ASME B31.3 & B31.8 Stress Profiling",
        "Environmental Impact Clearances",
        "3D CAD Model & Layout Reviews",
        "CAPEX / OPEX Financial Modeling"
      ],
      ctaText: "EXPLORE DEVELOPMENT",
      badge: "PHASE 01: DEVELOPMENT"
    },
    {
      id: "execution",
      navLabel: "PROJECT EXECUTION",
      title: "EPCC Construction & Turnkey Delivery",
      subtitle: "World-class project management with zero compromise on quality",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
      desc: "From procuring certified API 5L line pipes to automatic TIG welding, hydrostatic pressure testing at 150 Bar, and SCADA integration, our EPC execution ensures flawless site startup.",
      features: [
        "100% NDT Radiography Inspection",
        "Heavy Rigging & Lift Management",
        "Just-In-Time Supply Chain Audits",
        "Plant Startup & Hydro-Testing"
      ],
      ctaText: "DISCOVER EXECUTION",
      badge: "PHASE 02: EXECUTION"
    },
    {
      id: "training",
      navLabel: "TRAINING AND COMPETENCE",
      title: "Workforce Competence & Safety Academy",
      subtitle: "Building elite technical teams for high-risk industrial environments",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
      desc: "Our specialized technical skilling program equips engineers and operators with certified hands-on competencies in DCS operation, pressure vessel safety, and emergency response procedures.",
      features: [
        "Simulated Control Room Operations",
        "ISO 45001 Safety Management",
        "High-Pressure Valve Maintenance",
        "HAZOP Stage 1-3 Certification"
      ],
      ctaText: "VIEW TRAINING PROGRAMS",
      badge: "PHASE 03: COMPETENCE"
    },
    {
      id: "our-work",
      navLabel: "OUR WORK",
      title: "Flagship Megaprojects & Track Record",
      subtitle: "Demonstrated success across multi-billion dollar installations",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
      desc: "Explore our proven portfolio of refinery expansions, cross-country gas pipelines, offshore gathering platforms, and green hydrogen pilot facilities built for top global operators.",
      features: [
        "45+ Major EPC Contracts Completed",
        "99.8% On-Time Delivery Milestone Record",
        "Zero-LTI Safety Standard Compliance",
        "Multi-Country Logistics Network"
      ],
      ctaText: "EXPLORE OUR WORK",
      badge: "PORTFOLIO & CASE STUDIES"
    }
  ]

  // Phase Execution Data
  const phases = [
    {
      num: "01",
      name: "Feasibility & FEED",
      duration: "Months 1 - 2",
      desc: "Front-End Engineering Design, GIS mapping, geological route profiling, and initial HAZOP compliance reports.",
      details: ["Soil Load Analysis", "Environmental Clearance", "HAZOP Stage 1"]
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
      details: ["API 5L Pipe Audits", "Actuator Factory Testing", "JIT Site Delivery"]
    },
    {
      num: "04",
      name: "Construction & Commission",
      duration: "Months 9 - 12",
      desc: "Trenching, pipeline welding, non-destructive testing (NDT), hydrostatic testing, SCADA integration, and plant startup.",
      details: ["Automatic TIG Welding", "100% NDT Testing", "Hydro-Testing at 150 Bar"]
    }
  ]

  // Standards Compliance
  // const complianceStandards = [
  //   { code: "ASME B31.3 / B31.8", desc: "Chemical Plant & Transmission Piping Standards" },
  //   { code: "API 5L & API 610", desc: "Line Pipe Specification & Centrifugal Pumps" },
  //   { code: "ISO 9001 & 14001", desc: "Quality Management & Environmental Standards" },
  //   { code: "SIL-3 SCADA", desc: "High-Integrity Pressure Protection & Safety Systems" }
  // ]

  const activeServiceData = servicesMatrix[activeTab]

  return (
    <main className="mt-20 min-h-screen bg-background dark:bg-[#0c0e0f] text-on-surface dark:text-white" ref={animRef}>
      
      {/* =========================================================================
          HERO SECTION (Strictly Brand Theme #002a58)
         ========================================================================= */}
      <section className="relative min-h-[560px] flex items-center bg-primary overflow-hidden border-b border-outline-variant/10">
        {/* Background Image with Deep Primary Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-25 scale-105 transition-transform duration-1000"
            src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1800&auto=format&fit=crop"
            alt="Refinery plant at twilight"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001c3d] via-[#002a58]/95 to-[#002a58]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#004080]/30 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-gutter relative z-10 w-full py-16">
          <div className="max-w-3xl text-white">
            <div data-animate="fade-up" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#a9c7ff] px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-extrabold mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#a9c7ff] animate-pulse"></span>
              <span>Vertical Focus: EPC Oil, Gas &amp; Energy</span>
            </div>
            
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-none uppercase text-white">
              EPC Oil, Gas &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] via-sky-200 to-white">
                Energy Solutions
              </span>
            </h1>
            
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-base sm:text-lg text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
              Turnkey engineering, procurement, construction, and commissioning for industrial pipelines, refining loops, offshore terminals, and green-hydrogen facilities engineered under ASME, API, and ISO codes.
            </p>
            
            <div data-animate="fade-up" data-animate-delay="0.3" className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => {
                  setSelectedService(corePillars[0])
                  setIsModalOpen(true)
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary hover:bg-slate-100 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-extrabold rounded-full text-xs sm:text-sm uppercase tracking-wider group cursor-pointer"
              >
                <span>Request Technical Consultation</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              
              <a 
                href="#service-matrix"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all hover:scale-[1.02]"
              >
                <span>Explore Services Matrix</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex items-center justify-center mb-5 overflow-hidden border-b border-outline-variant/10">
       {/* Key Quick Stats Strip (White Background Cards) */}
          <div data-animate="fade-up" data-animate-delay="0.4" className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-[#161a24] text-slate-900 dark:text-white rounded-2xl p-5 shadow-xl border border-slate-100 dark:border-slate-800/80 border-l-4 border-l-primary dark:border-l-[#a9c7ff] transition-transform duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary dark:text-[#a9c7ff]">45+</div>
              <div className="text-xs uppercase font-extrabold text-slate-600 dark:text-slate-400 tracking-wider mt-1">Megaprojects Delivered</div>
            </div>

            <div className="bg-white dark:bg-[#161a24] text-slate-900 dark:text-white rounded-2xl p-5 shadow-xl border border-slate-100 dark:border-slate-800/80 border-l-4 border-l-primary dark:border-l-[#a9c7ff] transition-transform duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary dark:text-[#a9c7ff]">99.8%</div>
              <div className="text-xs uppercase font-extrabold text-slate-600 dark:text-slate-400 tracking-wider mt-1">On-Time Execution</div>
            </div>

            <div className="bg-white dark:bg-[#161a24] text-slate-900 dark:text-white rounded-2xl p-5 shadow-xl border border-slate-100 dark:border-slate-800/80 border-l-4 border-l-primary dark:border-l-[#a9c7ff] transition-transform duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary dark:text-[#a9c7ff]">0.00</div>
              <div className="text-xs uppercase font-extrabold text-slate-600 dark:text-slate-400 tracking-wider mt-1">LTI Safety Rate</div>
            </div>

            <div className="bg-white dark:bg-[#161a24] text-slate-900 dark:text-white rounded-2xl p-5 shadow-xl border border-slate-100 dark:border-slate-800/80 border-l-4 border-l-primary dark:border-l-[#a9c7ff] transition-transform duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary dark:text-[#a9c7ff]">$2.5B+</div>
              <div className="text-xs uppercase font-extrabold text-slate-600 dark:text-slate-400 tracking-wider mt-1">Capital Portfolio</div>
            </div>
          </div>
      </section>

      {/* =========================================================================
          IMAGE 1 REFERENCE SECTION: Professional White Background Card Grid
         ========================================================================= */}
      <section className="bg-white dark:bg-[#0c0e0f] text-on-surface dark:text-white py-20 px-4 sm:px-6 lg:px-gutter relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 dark:bg-primary-fixed-dim/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-container/5 dark:bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="mb-14 text-center max-w-3xl mx-auto" data-animate="fade-up">
            <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold bg-primary/10 dark:bg-white/10 px-3.5 py-1.5 rounded-full border border-primary/20 dark:border-white/15">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary dark:text-white mt-4 mb-3 font-headline-xl">
              Markets, Solutions &amp; Innovation
            </h2>
      
          </div>

          {/* 3-Card Grid Matching Image 1 Layout (White Cards with Shadow & Theme Accent) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-animate="stagger-up">
            {corePillars.map((pillar) => (
              <div 
                key={pillar.id}
                className="group bg-white dark:bg-[#161a24] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              >
                <div>
                  {/* Top Image Card with Curved Edges */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <span className="absolute bottom-3 left-3 bg-primary/95 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md shadow-sm">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Title and Circular Arrow Button Row */}
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white tracking-tight group-hover:text-primary-container dark:group-hover:text-[#a9c7ff] transition-colors">
                      <span className="underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4 group-hover:decoration-primary">
                        {pillar.title}
                      </span>
                    </h3>

                    {/* Circular Action Button */}
                    <button
                      onClick={() => {
                        setSelectedService(pillar)
                        setIsModalOpen(true)
                      }}
                      title={`View details for ${pillar.title}`}
                      className="w-10 h-10 rounded-full border border-primary/30 dark:border-slate-700 flex items-center justify-center text-primary dark:text-[#a9c7ff] group-hover:bg-primary group-hover:text-white dark:group-hover:bg-[#a9c7ff] dark:group-hover:text-primary transition-all duration-300 shrink-0 hover:scale-110 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </div>

                  {/* Paragraph Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-4">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bullets List Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <ul className="space-y-2">
                    {pillar.bullets.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#a9c7ff]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          IMAGE 2 REFERENCE SECTION: Interactive Service Explorer (Strict Theme Palette)
         ========================================================================= */}
      <section id="service-matrix" className="py-20 px-4 sm:px-6 lg:px-gutter bg-[#f8f9fa] dark:bg-[#11141c] text-on-surface dark:text-white border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Section Header */}
          <div className="mb-12" data-animate="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-[#a9c7ff]">
              Asset Lifecycle Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-white mt-1">
              Integrated EPC Services &amp; Solutions
            </h2>
          </div>

          {/* Image 2 Split Layout: Left Vertical Navigation & Right Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Sidebar Menu (Matching Image 2 vertical list with brand primary indicator |) */}
            <div className="lg:col-span-4 flex flex-col justify-start space-y-2 bg-white dark:bg-[#181c27] p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm" data-animate="fade-right">
              
              <div className="px-4 py-3 text-xs uppercase tracking-widest font-extrabold text-slate-400 border-b border-slate-100 dark:border-slate-800 mb-2">
                Navigation Menu
              </div>

              {servicesMatrix.map((item, idx) => {
                const isActive = activeTab === idx
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isActive 
                        ? 'bg-slate-100 dark:bg-slate-800/80 shadow-sm' 
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Brand Theme vertical bar indicator | */}
                      <span 
                        className={`font-black text-lg transition-colors ${
                          isActive ? 'text-primary dark:text-[#a9c7ff]' : 'text-slate-300 dark:text-slate-600 group-hover:text-primary'
                        }`}
                      >
                        |
                      </span>
                      
                      <span className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-colors ${
                        isActive ? 'text-primary dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                      }`}>
                        {item.navLabel}
                      </span>
                    </div>

                    {/* Right Arrow Icon */}
                    <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${
                      isActive 
                        ? 'text-primary dark:text-[#a9c7ff] translate-x-1' 
                        : 'text-slate-300 dark:text-slate-600 group-hover:translate-x-1 group-hover:text-slate-400'
                    }`}>
                      arrow_forward
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right Display Panel Container (Matching Image 2 content card) */}
            <div className="lg:col-span-8" data-animate="fade-left">
              <div className="bg-white dark:bg-[#161a24] border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl h-full flex flex-col justify-between">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Thumbnail Image */}
                  <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                    <img 
                      src={activeServiceData.image} 
                      alt={activeServiceData.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">
                      {activeServiceData.badge}
                    </span>
                  </div>

                  {/* Right Copy Block */}
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-[11px] uppercase tracking-widest font-extrabold text-primary dark:text-[#a9c7ff]">
                      Featured Capabilities
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tight leading-tight">
                      {activeServiceData.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                      {activeServiceData.desc}
                    </p>

                    {/* Features Checklist */}
                    <div className="pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeServiceData.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#a9c7ff]"></span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 4-Phase EPC Execution Framework
         ========================================================================= */}
      <section className="py-20 max-w-[1280px] mx-auto px-4 sm:px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-16" data-animate="fade-up">
          <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold">
            Standard Operating Lifecycle
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-primary dark:text-white mt-1">
            4-Phase Project Execution Framework
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-animate="stagger-up">
          {phases.map((phase) => (
            <div 
              key={phase.num}
              className="bg-white dark:bg-[#121620] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-primary dark:text-[#a9c7ff] group-hover:text-primary-container transition-colors">
                    {phase.num}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                    {phase.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {phase.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-4">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  {phase.details.map((d, i) => (
                    <div key={i} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-primary dark:text-[#a9c7ff]">check_circle</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Bottom CTA / RFP Banner (Strict Brand Theme)
         ========================================================================= */}
      <section className="py-5 px-4 sm:px-gutter max-w-[1280px] mx-auto text-center" data-animate="scale-up">
        <div className="bg-gradient-to-r from-[#001c3d] via-[#002a58] to-[#004080] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block bg-white/10 text-[#a9c7ff] border border-white/20 text-xs uppercase font-extrabold px-3.5 py-1 rounded-full mb-4">
              Get In Touch With Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase mb-4 tracking-tight">
              Ready to Kickstart Your Energy Project?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-8">
              Whether you need FEED studies, pipeline stress calculations, or full EPCC execution, Smart Brains is your trusted partner.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
            

              <Link
                to="/contact-us"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full transition-all text-xs sm:text-sm uppercase tracking-wider"
              >
                Contact Global Offices
              </Link>
            </div>
          </div>
        </div>
      </section>



    </main>
  )
}

export default EPCOilGasEnergyPage


