import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Flame,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Factory,
  Compass,
  Hammer,
  GraduationCap,
  FolderGit2,
  Clock3,
  TrendingUp,
  HardHat,
  Zap,
  Activity,
  FileText,
  ChevronRight,
  Shield,
  Gauge,
  Droplets,
  Building,
  Check,
  PhoneCall
} from 'lucide-react'

// ─── Animation Presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function SectionBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 dark:bg-primary/25 text-primary dark:text-[#a9c7ff] border border-primary/20 dark:border-[#a9c7ff]/20 mb-4">
      <Sparkles className="w-3.5 h-3.5 text-primary dark:text-[#a9c7ff]" />
      {children}
    </span>
  )
}

function SectionHeading({ children, className = "", light = false }) {
  return (
    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight ${light ? "text-white" : "text-slate-900 dark:text-white"} ${className}`}>
      {children}
    </h2>
  )
}

const EPCOilGasEnergyPage = () => {
  const animRef = useScrollAnimation()
  const [activeTab, setActiveTab] = useState("feed")

  // Sector Solutions Data
  const sectors = [
    {
      id: "downstream",
      title: "Downstream & Refining",
      subtitle: "Petrochemicals & Processing Units",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop",
      desc: "Turnkey engineering for crude distillation, catalytic cracking, hydro-treating, and storage tank farm expansions with strict ASME adherence.",
      metrics: "12+ Refineries Modernized",
      tags: ["Hydro-Processing", "Petrochemical Loops", "Storage Terminals"]
    },
    {
      id: "pipelines",
      title: "Cross-Country Pipelines",
      subtitle: "High-Pressure Transmission Networks",
      icon: Gauge,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop",
      desc: "API 5L gas & hydrocarbon pipeline EPCC, horizontal directional drilling (HDD), automated valve stations, and SCADA telemetry.",
      metrics: "3,500+ km Installed",
      tags: ["API 5L Grade Pipes", "Automatic TIG Welding", "150-Bar Hydro-Testing"]
    },
    {
      id: "offshore",
      title: "Offshore & Marine Terminals",
      subtitle: "Subsea & Jetty Facilities",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop",
      desc: "Single point mooring (SPM), marine loading arms, offshore topside modules, and subsea tie-backs built to withstand harsh marine environments.",
      metrics: "15+ Marine Terminals",
      tags: ["SPM Systems", "Subsea Manifolds", "Jetty Loading Arms"]
    },
    {
      id: "cleantech",
      title: "Clean Tech & Decarbonization",
      subtitle: "Green Hydrogen & CCUS Hubs",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=900&auto=format&fit=crop",
      desc: "Engineering the energy transition with carbon capture (CCUS), green hydrogen electrolysis plants, and clean ammonia storage facilities.",
      metrics: "6 Active Pilot Hubs",
      tags: ["Green Hydrogen", "Carbon Capture (CCUS)", "Cryogenic Storage"]
    }
  ]

  // Interactive Lifecycle Matrix Data
  const lifecycleServices = {
    feed: {
      title: "Feasibility & Front-End Engineering Design (FEED)",
      badge: "Stage 01 • Conceptual & FEED",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
      tagline: "De-risking multi-million dollar capital investments before site groundbreak.",
      desc: "Our engineering teams perform comprehensive feasibility analyses, hydraulic simulations, route optimization, and rigorous HAZOP Stage 1-2 evaluations. We establish rock-solid design baselines to lock in accurate CAPEX estimates.",
      highlights: [
        "ASME B31.3 & B31.8 Pipeline Stress Profiling",
        "Geotechnical & GIS Corridor LiDAR Mapping",
        "Process Flow Diagrams (PFD) & P&IDs",
        "Environmental Impact Assessment (EIA)"
      ]
    },
    procurement: {
      title: "Global Strategic Procurement & Supply Chain",
      badge: "Stage 02 • Sourcing & QA",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
      tagline: "Sourcing certified API-grade line pipes and high-integrity equipment globally.",
      desc: "With established relationships across certified mill manufacturers worldwide, we orchestrate critical equipment sourcing, factory acceptance tests (FAT), and expedited international site logistics under strict quality audits.",
      highlights: [
        "API 5L Grade X65/X70 Pipe Mill Audits",
        "High-Pressure Ball & Gate Valve Inspections",
        "Third-Party Certified NDT & Material Testing",
        "Just-In-Time (JIT) Heavy Equipment Logistics"
      ]
    },
    construction: {
      title: "Turnkey EPCC Construction & Field Mobilization",
      badge: "Stage 03 • Site Construction",
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
      desc: "Full site execution from civil grading and trenching to mechanized orbital welding, field joint coating, and hydrostatic pressure testing at 150 Bar — governed by our zero-LTI safety protocols.",
      tagline: "World-class field execution with mechanized accuracy and zero safety compromise.",
      highlights: [
        "Automatic Mechanized Orbital TIG/MIG Welding",
        "100% NDT Radiography & Ultrasonic Scans",
        "Heavy Lift & Module Rigging Engineering",
        "Hydrostatic Pipeline Testing at 150 Bar"
      ]
    },
    commissioning: {
      title: "SCADA Automation & Plant Commissioning",
      badge: "Stage 04 • Startup & Handover",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
      tagline: "Seamless integration of DCS, ESD, and telemetry for flawless startup.",
      desc: "Deploying high-integrity pressure protection (SIL-3), SCADA control networks, pre-commissioning loop checks, and nitrogen purging to ensure safe, on-schedule commercial operations.",
      highlights: [
        "Distributed Control Systems (DCS) Integration",
        "SIL-3 Rated Emergency Shutdown (ESD)",
        "Nitrogen Purging & Gas-In Procedures",
        "24/7 Operations & Maintenance Handover"
      ]
    }
  }

  // 4-Phase Execution Framework
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
      desc: "Stress profiling of steel pipes, pipeline joints, DCS layout architecture, and valve node calculations.",
      details: ["ASME B31.3 Stress Check", "3D CAD Model Review", "PLC Logic Diagrams"]
    },
    {
      num: "03",
      name: "Procurement & Logistics",
      duration: "Months 6 - 8",
      desc: "Sourcing certified API 5L line pipes, high-pressure valves, and automated actuator assemblies.",
      details: ["API 5L Pipe Audits", "Actuator Factory Testing", "JIT Site Delivery"]
    },
    {
      num: "04",
      name: "Construction & Commission",
      duration: "Months 9 - 12",
      desc: "Trenching, pipeline welding, non-destructive testing (NDT), hydrostatic testing, and SCADA plant startup.",
      details: ["Automatic TIG Welding", "100% NDT Testing", "Hydro-Testing at 150 Bar"]
    }
  ]



  const activeService = lifecycleServices[activeTab]

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 transition-colors duration-300" ref={animRef}>
      
      {/* ─── 1. HERO BANNER ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] flex items-center bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] text-white overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1800&auto=format&fit=crop"
            alt="EPC Industrial Plant at Twilight"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/95 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div
                data-animate="fade-up"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#a9c7ff] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#a9c7ff]" />
                <span>Smart Brains EPC Industrial Division</span>
              </div>

              <h1
                data-animate="fade-up"
                data-animate-delay="0.1"
                className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1] uppercase text-white"
              >
                EPC Oil, Gas &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] via-sky-200 to-white">
                  Energy Solutions
                </span>
              </h1>

              <p
                data-animate="fade-up"
                data-animate-delay="0.2"
                className="text-base sm:text-lg text-slate-200 font-light mb-8 max-w-2xl leading-relaxed"
              >
                Turnkey engineering, procurement, construction, and commissioning for industrial pipelines, refining complexes, offshore marine terminals, and clean energy infrastructure built under ASME, API, and ISO codes.
              </p>

              <div
                data-animate="fade-up"
                data-animate-delay="0.3"
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#service-matrix"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white transition-all duration-300 font-semibold rounded-xl text-xs uppercase tracking-wider backdrop-blur-sm"
                >
                  <span>Explore Asset Lifecycle</span>
                </a>
              </div>
            </div>

            {/* Right Quick Metric Cards */}
            <div className="lg:col-span-5" data-animate="fade-up" data-animate-delay="0.25">
              <div className="grid grid-cols-2 gap-4 bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl">
                {[
                  { val: "45+", label: "Megaprojects Delivered", icon: HardHat },
                  { val: "99.8%", label: "On-Time Milestone Record", icon: Clock3 },
                  { val: "0.00", label: "LTI Safety Benchmark", icon: ShieldCheck },
                  { val: "$2.5B+", label: "Capital Portfolio Managed", icon: TrendingUp },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3 text-[#a9c7ff]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                          {item.val}
                        </div>
                        <div className="text-xs text-slate-300 font-medium mt-1">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. ENGINEERING STANDARDS & CODES SECTION ────────────────────────── */}
      <section className="relative bg-white dark:bg-[#10141e] border-y border-slate-200/80 dark:border-slate-800 py-10 transition-colors duration-300">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-[#a9c7ff]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary dark:text-[#a9c7ff] block">
                  Quality &amp; HSE Framework
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Global Engineering Codes &amp; Regulatory Compliances
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Certified Execution</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              {
                code: "ASME B31.3 / B31.8",
                title: "Process & Gas Piping",
                desc: "High-pressure transmission, hydraulic stress profiling, and refinery piping design.",
                tag: "Mechanical Design"
              },
              {
                code: "API 5L & API 610",
                title: "Line Pipes & Pumps",
                desc: "Certified Grade X65/X70 metallurgy, centrifugal pumping units, and API storage tanks.",
                tag: "Materials & API"
              },
              {
                code: "ISO 9001 / 14001 / 45001",
                title: "Integrated HSE & QA",
                desc: "Zero-harm environmental policies, ISO QA/QC traceability, and occupational safety.",
                tag: "HSE Management"
              },
              {
                code: "IEC 61508 / SIL-3",
                title: "SCADA & Safety Systems",
                desc: "High-integrity pressure protection (HIPPS), ESD logic, and DCS telemetry nodes.",
                tag: "Instrumentation"
              }
            ].map((std, i) => (
              <div
                key={i}
                className="group relative bg-slate-50/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 rounded-2xl p-5 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-primary/10 dark:bg-primary/20 text-primary dark:text-[#a9c7ff]">
                      {std.tag}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-primary dark:text-[#a9c7ff] opacity-80" />
                  </div>

                  <h4 className="text-base font-black text-slate-900 dark:text-white tracking-tight mb-1">
                    {std.code}
                  </h4>
                  <p className="text-xs font-bold text-primary dark:text-[#a9c7ff] mb-2">
                    {std.title}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {std.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 3. SECTOR CAPABILITIES MATRIX (4 Core Verticals) ────────────────── */}
      <section className="py-20 bg-slate-50/60 dark:bg-[#0c0e0f]/50 transition-colors duration-300">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-animate="fade-up">
            <SectionBadge>Market Domains</SectionBadge>
            <SectionHeading>Full-Spectrum Energy Infrastructure Engineering</SectionHeading>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Engineered with uncompromising precision across upstream, midstream, downstream, and clean technology hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec) => {
              const Icon = sec.icon
              return (
                <div
                  key={sec.id}
                  className="group bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 shadow-sm">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002a58]/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-2.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                        {sec.metrics}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3 text-primary dark:text-[#a9c7ff]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-primary dark:text-[#a9c7ff] font-semibold mb-3">
                      {sec.subtitle}
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                      {sec.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {sec.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. INTERACTIVE ASSET LIFECYCLE EXPLORER ────────────────────────── */}
      <section id="service-matrix" className="py-20 bg-white dark:bg-[#0c0e0f] transition-colors duration-300">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-animate="fade-up">
            <SectionBadge>Asset Lifecycle Governance</SectionBadge>
            <SectionHeading>End-to-End Turnkey Delivery Capabilities</SectionHeading>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Select any stage below to inspect our detailed engineering procedures and quality gates.
            </p>
          </div>

          {/* Segmented Tab Navigation Buttons */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {[
              { id: "feed", label: "01. Feasibility & FEED", icon: Compass },
              { id: "procurement", label: "02. Strategic Procurement", icon: ShieldCheck },
              { id: "construction", label: "03. EPCC Construction", icon: Hammer },
              { id: "commissioning", label: "04. SCADA & Commissioning", icon: Cpu },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                      : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#a9c7ff]" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Active Lifecycle Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Thumbnail */}
                <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002a58]/75 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md shadow">
                    {activeService.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-primary dark:text-[#a9c7ff]">
                    {activeService.tagline}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    {activeService.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                    {activeService.desc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Key Deliverables &amp; Code Checks:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeService.highlights.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary dark:text-[#a9c7ff] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── 5. 4-PHASE EXECUTION TIMELINE ─────────────────────────────────── */}
      <section className="py-20 bg-slate-50/60 dark:bg-[#0c0e0f]/50 transition-colors duration-300">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-animate="fade-up">
            <SectionBadge>Standardized Lifecycle</SectionBadge>
            <SectionHeading>4-Phase Turnkey Project Governance</SectionHeading>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Standard operating procedures delivering zero-LTI safety benchmarks and on-time commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-primary dark:text-[#a9c7ff]">
                      {phase.num}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-[#a9c7ff] rounded-lg">
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {phase.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="space-y-1.5">
                    {phase.details.map((d, i) => (
                      <div key={i} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary dark:text-[#a9c7ff]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. BOTTOM CTA / RFP BANNER ─────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-[#0c0e0f] transition-colors duration-300">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#a9c7ff] mb-4">
                EPC Industrial Partnerships
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
                Ready to Kickstart Your Energy Infrastructure Project?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base mb-8 font-light leading-relaxed">
                Whether you require FEED studies, pipeline stress calculations, or full turnkey EPCC site execution, Smart Brains is your trusted engineering partner.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Request an RFP Consultation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default EPCOilGasEnergyPage
