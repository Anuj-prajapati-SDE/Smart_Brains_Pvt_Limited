import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const VocationalLabsPage = () => {
  const animRef = useScrollAnimation()

  // Active State Tab for Government Case Studies (Image 3)
  const [activeCaseStudy, setActiveCaseStudy] = useState("himachal")

  // Active Sector Filter
  const [activeSector, setActiveSector] = useState("all")

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(0)

  // Official Case Studies Data (Refactored from Image 2 & 3)
  const caseStudies = {
    himachal: {
      state: "Himachal Pradesh",
      scheme: "Samagra Shiksha & NSQF Vocational Programme",
      session: "Academic Session 2024-25 & 2025-26",
      schools: "32 Government Senior Secondary Schools",
      sectors: "Healthcare & Paramedical, IT-ITeS",
      tenderNo: "EDN-HP(SE)-08/2018-19-VTP-HP-Vol-II",
      workOrderDate: "13th January 2025",
      client: "Samagra Shiksha, Govt. of Himachal Pradesh",
      scope: [
        "Recruitment of Certified NSQF Vocational Trainers",
        "Appointment of Vocational Coordinators & SPOCs",
        "Implementation of NSQF Aligned Curriculum & Practical Delivery",
        "School-Level Academic Delivery & Student Assessments",
        "Strict Compliance, Monthly Reporting & Samagra Shiksha Coordination"
      ]
    },
    rajasthan: {
      state: "Rajasthan",
      scheme: "Rajasthan Council of School Education (RCSC) - Samagra Shiksha & PM SHRI",
      session: "Academic Session 2025-26 & 2026-27",
      schools: "State Government Senior Secondary Schools",
      sectors: "Automotive, Electronics, Apparel, Healthcare, IT-ITeS",
      tenderNo: "NIB No.: RSE2627A0220 / EOI 25/02/2026-27",
      workOrderDate: "Online Competitive Open Bid Approved",
      client: "Rajasthan Council of School Education (RCSC)",
      scope: [
        "Hands-on Skill Training & E-Content Digital Learning",
        "Industry Linkages & Entrepreneurship Seminars",
        "Career Guidance, Jobs & Higher Education Pathways",
        "Atmanirbhar Rajasthan Skill Development Initiative",
        "Equipment Maintenance & Quality Assurance Audits"
      ]
    }
  }

  // 6 Core Pillars (Image 2)
  const pillars = [
    {
      icon: "verified",
      title: "NEP 2020 Aligned",
      subtitle: "National Curriculum Standard",
      desc: "Seamlessly integrates vocational skilling with mainstream academic education as mandated by the National Education Policy 2020."
    },
    {
      icon: "construction",
      title: "Hands-on Skill Training",
      subtitle: "Practical Lab Environment",
      desc: "Provides students with direct exposure to industrial machines, healthcare simulators, robotic arms, and electronic test rigs."
    },
    {
      icon: "work_history",
      title: "Enhanced Employability",
      subtitle: "Career Ready Graduates",
      desc: "Prepares competitive, industry-ready youth with practical competencies required by top national and global employers."
    },
    {
      icon: "handshake",
      title: "Strong Industry Linkages",
      subtitle: "Certified Training Partners",
      desc: "Establishes structured career pathways, apprenticeship opportunities, and direct connections with corporate skill bodies."
    },
    {
      icon: "devices",
      title: "Digital & E-Content Learning",
      subtitle: "Interactive LMS & Modules",
      desc: "Combines physical lab practicals with rich 3D animation, interactive e-content, and digital skill evaluation platforms."
    },
    {
      icon: "groups",
      title: "Atmanirbhar Youth",
      subtitle: "Self-Reliant Future",
      desc: "Empowers students across rural and urban government schools with entrepreneurial mindsets and marketable technical trades."
    }
  ]

  // Implementation Delivery Flow Steps (Image 3)
  const deliveryWorkflow = [
    { step: "01", title: "Govt Council / Client", subtitle: "Policy & Sanction", icon: "account_balance" },
    { step: "02", title: "Samagra Shiksha", subtitle: "Scheme Oversight", icon: "school" },
    { step: "03", title: "SmartBrains VTP", subtitle: "Turnkey Implementation", icon: "verified_user" },
    { step: "04", title: "Trainer Recruitment", subtitle: "NSQF Certified Staff", icon: "badge" },
    { step: "05", title: "Govt Sr. Sec. Schools", subtitle: "Lab Delivery", icon: "domain" },
    { step: "06", title: "Skilled Students", subtitle: "Certified Youth", icon: "face" }
  ]

  // Comprehensive Vocational Disciplines / Sectors
  const disciplines = [
    {
      id: "healthcare",
      icon: "medical_services",
      title: "Healthcare & Paramedical",
      category: "Medical & Life Sciences",
      desc: "Anatomical models, patient simulation manikins, diagnostic equipment, ECG simulators, and nursing assistant practical stations.",
      features: ["NSQF Level 1 to 4 Certified", "Hospital-Grade Equipment", "First-Aid & Emergency Response"],
      target: "Government Senior Secondary Schools"
    },
    {
      id: "robotics",
      icon: "smart_toy",
      title: "Robotics, AI & Automation",
      category: "STEM & Future Tech",
      desc: "Programmable robotic arms, Arduino microcontrollers, IoT sensor arrays, Python programming suites, and ROS simulation tools.",
      features: ["Hands-on Coding Labs", "Sensor Interfacing", "Automated Control Circuits"],
      target: "Secondary & Senior Secondary Schools"
    },
    {
      id: "electronics",
      icon: "memory",
      title: "Makerspace Electronics",
      category: "Electrical Engineering",
      desc: "Digital oscilloscopes, temperature-controlled soldering stations, PCB fabrication kits, multi-meters, and component test benches.",
      features: ["Circuit Debugging", "Hardware Fabrication", "Electrical Safety Rigs"],
      target: "Polytechnic & School STEM Hubs"
    },
    {
      id: "mechanical",
      icon: "build",
      title: "Mechanical & Industrial Workshop",
      category: "Trades & Manufacturing",
      desc: "Certified arc welding shields, heavy carpentry workbenches, lathe/milling units, pipefitting setups, and safety enclosures.",
      features: ["Heavy Duty Workbenches", "Welding & Carpentry Tools", "Industrial Safety Certified"],
      target: "Vocational Workshops & ITIs"
    },
    {
      id: "automotive",
      icon: "directions_car",
      title: "Automotive Service & Repair",
      category: "Mobility Engineering",
      desc: "Engine cut-section models, gear transmission rigs, electrical wiring diagnostic boards, and pneumatic tool sets.",
      features: ["2W & 4W Engine Diagnostics", "Electrical Troubleshooting", "Hydraulic Lift Simulators"],
      target: "NSQF Automobile Trade"
    },
    {
      id: "it",
      icon: "computer",
      title: "IT-ITeS & Digital Cloud Lab",
      category: "Information Technology",
      desc: "High-performance computing workstations, networking rack setups, cybersecurity lab tools, and software development platforms.",
      features: ["Full-Stack Dev Workstations", "Network Cabling Testers", "Cloud Environment Setup"],
      target: "Digital India & School IT Labs"
    }
  ]

  // FAQ Items
  const faqList = [
    {
      question: "How does SmartBrains align vocational labs with NEP 2020 and NSQF standards?",
      answer: "All our laboratory setups, curriculum modules, and hardware equipment are designed strictly following the National Skill Qualification Framework (NSQF) Levels 1 to 4 and National Education Policy 2020 guidelines, ensuring government compliance and academic accreditation."
    },
    {
      question: "What is SmartBrains' role as an officially selected Vocational Training Provider (VTP)?",
      answer: "As an officially selected VTP under Samagra Shiksha schemes, SmartBrains handles end-to-end implementation including turnkey lab setup, hardware commissioning, NSQF-certified trainer recruitment, academic delivery, and compliance reporting to state education councils."
    },
    {
      question: "Can these vocational programs be customized for state government school tenders?",
      answer: "Yes, we tailor equipment specifications, sector blueprints (Healthcare, IT, Robotics, Electronics, Automotive), and trainer staffing according to specific state EOI/NIB tender guidelines and council parameters."
    },
    {
      question: "How is quality assurance and trainer performance monitored?",
      answer: "We deploy dedicated Vocational Coordinators and Single Points of Contact (SPOCs) who conduct regular school audits, track student attendance & practical logbooks, and submit monthly compliance reports to Samagra Shiksha officials."
    }
  ]

  const filteredDisciplines = activeSector === "all" 
    ? disciplines 
    : disciplines.filter(d => d.id === activeSector)

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-on-surface transition-colors duration-300 overflow-x-hidden" ref={animRef}>
      
      {/* 1. HERO BANNER SECTION (Refactored from Image 1 with Brand Palette) */}
      <section className="relative py-16 lg:py-24 bg-primary text-white overflow-hidden border-b border-white/10">
        
        {/* Ambient Corporate Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00152b] via-primary to-[#004080]" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#a9c7ff]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
          {/* Dot matrix grid texture */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(169,199,255,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Heading & Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div data-animate="fade-up" className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-[#a9c7ff] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#a9c7ff] animate-ping" />
                <span>Samagra Shiksha &amp; PM SHRI Scheme Partner</span>
              </div>

              <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
             Building Futures Through Skills & Technology
              </h1>

              <div data-animate="fade-up" data-animate-delay="0.2" className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 text-slate-200">
                  <span className="text-xs font-bold text-[#a9c7ff] uppercase tracking-wider block">Government Scheme Integration</span>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Implemented under <strong className="text-white font-semibold">'Samagra Shiksha – An Integrated Scheme for School Education'</strong> &amp; <strong className="text-white font-semibold">'PM SHRI Scheme'</strong>, this Centrally Sponsored Initiative prepares educated, employable, and competitive human resources across Government Senior Secondary Schools.
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <div data-animate="fade-up" data-animate-delay="0.3" className="pt-1 flex flex-wrap gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="material-symbols-outlined text-[18px] text-[#a9c7ff]">verified</span>
                  <span>NSQF Levels 1-4 Aligned</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="material-symbols-outlined text-[18px] text-[#a9c7ff]">domain</span>
                  <span>32+ Govt Schools Allotted</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="material-symbols-outlined text-[18px] text-[#a9c7ff]">workspace_premium</span>
                  <span>Officially Selected VTP</span>
                </div>
              </div>
            </div>

            {/* Right Photo Bento Grid (From Image 1) */}
            <div className="lg:col-span-6" data-animate="scale-up">
              <div className="grid grid-cols-2 gap-3.5 p-3.5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                
                {/* Photo 1: Computer & IT Lab */}
                <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden group border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                    alt="Vocational Computer Lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001b3d]/90 via-transparent to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-[10px] font-mono text-[#a9c7ff] uppercase font-bold">LAB MODEL 01</span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">IT &amp; Digital Skilling Hub</span>
                  </div>
                </div>

                {/* Photo 2: VR Technology Training */}
                <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden group border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=800&auto=format&fit=crop"
                    alt="VR Technology Training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001b3d]/90 via-transparent to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-[10px] font-mono text-[#a9c7ff] uppercase font-bold">LAB MODEL 02</span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">VR &amp; Experiential Tech</span>
                  </div>
                </div>

                {/* Photo 3: Healthcare Simulation Lab */}
                <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden group border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                    alt="Healthcare Vocational Lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001b3d]/90 via-transparent to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-[10px] font-mono text-[#a9c7ff] uppercase font-bold">LAB MODEL 03</span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Healthcare Simulation</span>
                  </div>
                </div>

                {/* Photo 4: Workshop Seminar */}
                <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden group border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
                    alt="Practical Workshop Training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001b3d]/90 via-transparent to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-[10px] font-mono text-[#a9c7ff] uppercase font-bold">LAB MODEL 04</span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Practical Skill Workshops</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OFFICIAL COMPLIANCE & SKILLING LIFECYCLE BANNER (Image 2) */}
      {/* <section className="bg-white dark:bg-[#121517] border-b border-slate-200/80 dark:border-slate-800/80 py-6 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
   
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary dark:text-[#a9c7ff] flex-shrink-0">
                <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                  Empowering Youth for a Skilled &amp; Employable Future
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Official Vocational Training Provider (VTP) Partner for State School Education Councils
                </p>
              </div>
            </div>

          
            <div className="flex flex-wrap items-center gap-2 bg-slate-50 dark:bg-[#181b1d] p-2 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a9c7ff]" />
                <span>01. Learn</span>
              </div>
              <span className="text-slate-400 font-bold hidden sm:inline">•</span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#004080] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                <span>02. Practice</span>
              </div>
              <span className="text-slate-400 font-bold hidden sm:inline">•</span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#00152b] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>03. Work</span>
              </div>
              <span className="text-slate-400 font-bold hidden sm:inline">•</span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#a9c7ff] text-[#001b3d] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#001b3d]" />
                <span>04. Grow</span>
              </div>
            </div>

          </div>
        </div>
      </section> */}
      
      {/* 7. IMPACT STATISTICS COUNTER BANNER */}
      <section className="py-12 bg-white dark:bg-[#121517] border-t border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-animate="stagger-up">
            
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-[#a9c7ff]" data-count="32+">32+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase mt-1">Govt Schools Allotted</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-[#a9c7ff]" data-count="100+">100+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase mt-1">NSQF Trainers Deployed</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-[#a9c7ff]" data-count="10,000+">10,000+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase mt-1">Students Trained</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-[#a9c7ff]" data-count="100%">100%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase mt-1">Audit Compliance</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CASE STUDY & WORK ORDER DASHBOARD (Refactored from Image 3 & Image 2) */}
      <section id="case-studies" className="py-20 bg-slate-50 dark:bg-[#0c0e0f]">
        <div className="max-w-[1280px] mx-auto px-gutter">
          
          <div className="text-center max-w-3xl mx-auto mb-12" data-animate="fade-up">
            <span className="text-xs font-mono uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold block mb-1">
              [ PROVEN EXPERIENCE &amp; GOVERNMENT WORK ORDERS ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase">
              Successful Programme Implementation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 font-light">
              Official implementation of NSQF Vocational Education Programme under Samagra Shiksha across Government Senior Secondary Schools.
            </p>
            <div className="w-16 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
          </div>

          {/* Interactive State Tab Switcher */}
          <div className="flex justify-center mb-10" data-animate="fade-up">
            <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <button
                onClick={() => setActiveCaseStudy("himachal")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCaseStudy === "himachal"
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-[#a9c7ff]"
                }`}
              >
                Himachal Pradesh (32 Schools)
              </button>
              <button
                onClick={() => setActiveCaseStudy("rajasthan")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCaseStudy === "rajasthan"
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-[#a9c7ff]"
                }`}
              >
                Rajasthan RCSC (Senior Sec Schools)
              </button>
            </div>
          </div>

          {/* Detailed 3-Column Dashboard (Directly modeled from Image 3 Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" data-animate="stagger-up">
            
            {/* Column 1: Project Snapshot */}
            <div className="lg:col-span-4 bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-primary/10 text-primary dark:text-[#a9c7ff]">
                      <span className="material-symbols-outlined text-[20px]">assignment</span>
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                      PROJECT SNAPSHOT
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                    APPROVED
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">CLIENT PARTNER:</span>
                    <span className="font-extrabold text-slate-900 dark:text-white leading-snug block">
                      {caseStudies[activeCaseStudy].client}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">SCHEME &amp; PROGRAMME:</span>
                    <span className="font-semibold text-primary dark:text-[#a9c7ff] block">
                      {caseStudies[activeCaseStudy].scheme}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">ALLOCATED SCHOOLS:</span>
                    <span className="font-extrabold text-slate-900 dark:text-white block">
                      {caseStudies[activeCaseStudy].schools}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">SECTORS &amp; TRADES:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300 block">
                      {caseStudies[activeCaseStudy].sectors}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">TENDER / NIB REFERENCE:</span>
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400 font-medium block">
                      {caseStudies[activeCaseStudy].tenderNo}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">{caseStudies[activeCaseStudy].session}</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span> Validated
                </span>
              </div>
            </div>

            {/* Column 2: Implementation Approach & Delivery Workflow (Image 3 Diagram) */}
            <div className="lg:col-span-8 bg-primary text-white border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#a9c7ff] font-bold block">
                      OUR IMPLEMENTATION APPROACH
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-white">
                      End-to-End Governance &amp; Delivery Workflow
                    </h3>
                  </div>
                  <span className="text-[10px] px-3 py-1 rounded-full bg-white/10 text-white font-mono hidden sm:inline-block">
                    NSQF COMPLIANT
                  </span>
                </div>

                {/* 6-Step Workflow Diagram Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {deliveryWorkflow.map((flow, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center flex flex-col items-center justify-center space-y-2 hover:bg-white/15 transition-all">
                      <span className="text-[10px] font-mono text-[#a9c7ff] font-bold">STEP {flow.step}</span>
                      <span className="material-symbols-outlined text-[24px] text-white">{flow.icon}</span>
                      <div>
                        <span className="text-[11px] font-bold text-white leading-tight block">{flow.title}</span>
                        <span className="text-[9px] text-slate-300 font-light block mt-0.5">{flow.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scope of Work Deliverables */}
                <div className="mt-6 pt-5 border-t border-white/15">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#a9c7ff] block mb-3">
                    Scope of Work &amp; Key Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                    {caseStudies[activeCaseStudy].scope.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-emerald-400 text-[18px] flex-shrink-0">check_circle</span>
                        <span className="font-light leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a9c7ff] gap-2">
                <span className="font-mono">OFFICIAL WORK ORDER: {caseStudies[activeCaseStudy].workOrderDate}</span>
                <span className="font-bold text-white">PROUD PARTNER IN BUILDING FUTURE-READY YOUTH</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CORE OBJECTIVES & SKILLING PILLARS (6 Cards - Refactored from Image 2) */}
      <section className="py-20 max-w-[1280px] mx-auto px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-14" data-animate="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold">
            STRATEGIC FRAMEWORK
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 uppercase">
            Pillars of Vocational Education
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 font-light">
            Empowering students with industry-relevant skills, practical labs, and career opportunities under Samagra Shiksha.
          </p>
          <div className="w-16 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="stagger-up">
          {pillars.map((pil, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary dark:bg-[#a9c7ff]" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/5 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] group-hover:scale-110 transition-transform flex-shrink-0">
                  <span className="material-symbols-outlined text-[28px]">{pil.icon}</span>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">{pil.subtitle}</span>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white uppercase tracking-wider">
                    {pil.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VOCATIONAL SECTORS & DISCIPLINES BLUEPRINTS */}
      <section className="py-20 bg-white dark:bg-[#111416] border-t border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-[1280px] mx-auto px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-12" data-animate="fade-up">
            <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold block mb-1">
              VOCATIONAL TRADES &amp; BLUEPRINTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white uppercase">
              Key Vocational Sectors Offered
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Turnkey laboratory hardware setups aligned with National Skill Qualification Framework (NSQF) specifications.
            </p>
            <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-3 rounded-full" />
          </div>

          {/* Sector Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" data-animate="fade-up">
            <button
              onClick={() => setActiveSector("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeSector === "all"
                  ? "bg-primary text-white shadow-md"
                  : "bg-slate-100 dark:bg-[#181b1d] text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              All Sectors
            </button>
            {disciplines.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveSector(d.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeSector === d.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-100 dark:bg-[#181b1d] text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {d.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Sector Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="stagger-up">
            {filteredDisciplines.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary dark:text-[#a9c7ff]">
                      <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-light mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary dark:text-[#a9c7ff] text-[16px]">check</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-primary dark:text-[#a9c7ff] uppercase tracking-wider">
                    {item.target}
                  </span>
                  <Link to="/contact-us" className="text-xs font-bold text-primary dark:text-[#a9c7ff] hover:underline flex items-center gap-1">
                    <span>Inquire</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 8. FAQ ACCORDION SECTION */}
      <section className="py-20 max-w-[1280px] mx-auto px-gutter">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="text-center" data-animate="fade-up">
            <span className="text-xs font-mono uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold block mb-1">
              [ FREQUENTLY ASKED QUESTIONS ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white uppercase">
              Samagra Shiksha &amp; Vocational FAQ
            </h2>
            <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-3 pt-4" data-animate="fade-up">
            {faqList.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all ${
                    isOpen 
                      ? 'border-primary/50 shadow-md bg-white dark:bg-[#121517]' 
                      : 'border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#121517]'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 flex justify-between items-center text-left text-xs md:text-sm font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-[#a9c7ff] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary dark:text-[#a9c7ff]' : 'text-slate-400'}`}>
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-48 border-t border-slate-100 dark:border-slate-800/60 p-4' : 'max-h-0 p-0'
                    }`}
                  >
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 9. BOTTOM HIGH-CONVERSION CTA RIBBON */}
      <section className="py-14 bg-primary text-white border-t border-white/10 mb-14">
        <div className="max-w-[1280px] mx-auto px-gutter text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-widest text-[#a9c7ff]">
            <span>Turnkey VTP Implementation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
            Partner with SmartBrains for State Vocational Execution
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Supporting state education councils, government senior secondary schools, and private institutions under Samagra Shiksha &amp; PM SHRI schemes.
          </p>
        </div>
      </section>

    </main>
  )
}

export default VocationalLabsPage
