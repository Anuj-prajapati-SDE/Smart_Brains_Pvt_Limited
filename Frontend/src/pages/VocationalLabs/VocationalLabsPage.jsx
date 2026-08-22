import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import CompanySlider from '../../components/CompanySlider'

import hpSamagraLogo from '../../assets/images/VocationalLabs/hp_samagra_shiksha_logo.png'
import hpVocationalLab from '../../assets/images/VocationalLabs/hp_vocational_lab_photo.png'


const VocationalLabsPage = () => {
  const animRef = useScrollAnimation()

  // Active State Tab for Government Case Studies (Image 3)
  const [activeCaseStudy, setActiveCaseStudy] = useState("himachal")

  // Active Sector Filter
  // const [activeSector, setActiveSector] = useState("all")

  // FAQ Accordion State
  // const [activeFaq, setActiveFaq] = useState(0)

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
      images: [
        {
          src: hpSamagraLogo,
          alt: "Samagra Shiksha, Govt.",
          title: "Samagra Shiksha, Govt",
          subtitle: "Official Education Partner & Scheme",
          tag: "CLIENT PARTNER"
        },
        {
          src: hpVocationalLab,
          alt: "Secondary Education Department Uttar Pradesh",
          title: "Secondary Education Department Uttar Pradesh",
          subtitle: "32 Allocated Government Schools",
          tag: "LAB INFRASTRUCTURE"
        }
      ],
     
    },
    
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
    { step: "01", title: "Vocational Lab", subtitle: "Policy & Sanction", icon: "handyman" },
    { step: "02", title: "ICT Lab", subtitle: "Scheme Oversight", icon: "computer" },
    { step: "03", title: "Science Lab", subtitle: "Turnkey Implementation", icon: "science" },
    { step: "04", title: "STEM Lab", subtitle: "NSQF Certified Staff", icon: "precision_manufacturing" },
    { step: "05", title: "Skill Development Lab", subtitle: "Lab Delivery", icon: "workspace_premium" },
    { step: "06", title: "Engineering Lab", subtitle: "Certified Youth", icon: "engineering" },
    // { step: "07", title: "Language Lab", subtitle: "Certified Youth", icon: "translate" },
    // { step: "08", title: "Robotics Lab", subtitle: "Certified Youth", icon: "smart_toy" },
    { step: "09", title: "Innovation Lab", subtitle: "Certified Youth", icon: "lightbulb" },
    { step: "10", title: "Healthcare Training Lab", subtitle: "Certified Youth", icon: "medical_services" },
    { step: "11", title: "Agriculture Training Lab", subtitle: "Certified Youth", icon: "agriculture" },
    // { step: "12", title: "Industrial Training Lab", subtitle: "Certified Youth", icon: "factory" },
    { step: "13", title: "Renewable Energy Lab", subtitle: "Certified Youth", icon: "solar_power" },
    { step: "14", title: "IT/ITeS", subtitle: "Certified Youth", icon: "terminal" },
    { step: "15", title: "Retail Lab", subtitle: "Certified Youth", icon: "storefront" },
    { step: "16", title: "Tourism & Hospitality", subtitle: "Certified Youth", icon: "travel_explore" },
    { step: "17", title: "Agriculture", subtitle: "Certified Youth", icon: "eco" },
    { step: "18", title: "Beauty and Wellness", subtitle: "Certified Youth", icon: "spa" },
    { step: "19", title: "BFSI", subtitle: "Certified Youth", icon: "account_balance" },
    { step: "20", title: "Management & Entrepreneurship", subtitle: "Certified Youth", icon: "business_center" },
    { step: "21", title: "Construction", subtitle: "Certified Youth", icon: "construction" },
    { step: "22", title: "Electronics and Hardware", subtitle: "Certified Youth", icon: "memory" },
    { step: "23", title: "Food Industry", subtitle: "Certified Youth", icon: "restaurant" },
    { step: "24", title: "Apparels, Made Ups and Home Furnishing", subtitle: "Certified Youth", icon: "checkroom" },
    { step: "25", title: "Power", subtitle: "Certified Youth", icon: "bolt" },
    { step: "26", title: "Plumbing", subtitle: "Certified Youth", icon: "plumbing" },
    { step: "27", title: "Automotive", subtitle: "Certified Youth", icon: "directions_car" },
  ]


  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-on-surface transition-colors duration-300 overflow-x-hidden" ref={animRef}>
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative py-12 lg:py-16 bg-primary text-white overflow-hidden border-b border-white/10">
      

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Heading & Overview */}
            <div className="lg:col-span-6 space-y-5">
              <div data-animate="fade-up" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-[#a9c7ff] backdrop-blur-md">
                {/* <span className="w-2 h-2 rounded-full bg-[#a9c7ff] animate-ping" /> */}
                <span>Vocational Labs, STEM Lab, ATL Lab</span>
              </div>

              <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Empowering Education Through Innovative Lab Solutions
              </h1>

               <p
                  data-animate="fade-up"
                  data-animate-delay="0.2"
                  className="text-base md:text-lg text-slate-300 font-light max-w-xl leading-relaxed"
                >
                 Creating innovative lab solutions that enhance practical learning, build technical skills, and prepare students for future careers.
                </p>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* 7. IMPACT STATISTICS COUNTER BANNER */}
      <section className="py-12 bg-white dark:bg-[#121517] border-t border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-animate="stagger-up">
            
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-[#a9c7ff]" data-count="597+">597+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase mt-1">Labs</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-[#a9c7ff]" data-count="1k">1k</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase mt-1">Training of Trainers</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-[#a9c7ff]" data-count="1013+">1013+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase mt-1">Schools</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-[#a9c7ff]" data-count="80+">250+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase mt-1">Vocational Trainers</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CASE STUDY & WORK ORDER DASHBOARD (Refactored from Image 3 & Image 2) */}
      <section id="case-studies" className="py-20 bg-slate-50 dark:bg-[#0c0e0f]">
        <div className="max-w-[1280px] mx-auto px-gutter">
          
          <div className="text-center max-w-3xl mx-auto mb-12" data-animate="fade-up">
            <span className="text-xs font-mono uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-extrabold block mb-1">
             Future Ready
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase">
             Inspiring Minds. Equipping Futures.
            </h2>
            <div className="w-16 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
          </div>

          {/* Detailed 3-Column Dashboard (Directly modeled from Image 3 Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" data-animate="stagger-up">
            
            {/* Column 1: Project Snapshot & Client Partner Showcase */}
            <div className="lg:col-span-4 bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-primary/10 text-primary dark:text-[#a9c7ff]">
                      <span className="material-symbols-outlined text-[20px]">assignment</span>
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                      Vocational Labs
                    </span>
                  </div>
                  {/* <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-[#a9c7ff]/10 dark:text-[#a9c7ff] font-bold uppercase tracking-wider">
                    {caseStudies[activeCaseStudy].state}
                  </span> */}
                </div>

                {/* Professional Two Images Section */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                    {caseStudies[activeCaseStudy].images.map((imgItem, idx) => (
                      <div 
                        key={idx}
                        className="group relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-[#181b1d] shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        {/* Image Container with Dark Gradient Overlay */}
                        <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                          <img 
                            src={imgItem.src} 
                            alt={imgItem.alt} 
                            className="w-full h-full object-[100% 100%] object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          {/* Badge Tag */}
                          {/* <div className="absolute top-2.5 left-2.5">
                            <span className="px-2.5 py-1 rounded-lg text-[9px] font-extrabold uppercase tracking-wider bg-primary text-white dark:bg-[#a9c7ff] dark:text-slate-950 shadow-md">
                              {imgItem.tag}
                            </span>
                          </div> */}
                        </div>

                        {/* Title & Subtitle Footer */}
                        <div className="p-3 bg-white dark:bg-[#121517] border-t border-slate-100 dark:border-slate-800/60">
                          <h4 className="text-xs font-extrabold text-slate-900 dark:text-white leading-snug">
                            {imgItem.title}
                          </h4>
                          {/* <p className="text-[10px] text-primary dark:text-[#a9c7ff] font-semibold mt-0.5">
                            {imgItem.subtitle}
                          </p> */}
                        </div>
                      </div>
                    ))}
                  </div>

                 
                </div>
              </div>
            </div>

            {/* Column 2: Implementation Approach & Delivery Workflow (Image 3 Diagram) */}
            <div className="lg:col-span-8 bg-primary text-white border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#a9c7ff] font-bold block">
                     LEARNING & SKILL SOLUTIONS
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-white">
                    Building Future-Ready Skills & Infrastructure
                    </h3>
                  </div>
                </div>

                {/* 6-Step Workflow Diagram Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {deliveryWorkflow.map((flow, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center flex flex-col items-center justify-center space-y-2 hover:bg-white/15 transition-all">
                  
                      <span className="material-symbols-outlined text-[24px] text-white">{flow.icon} </span>
                      <div>
                        <span className="text-[11px] font-bold text-white leading-tight block">{flow.title} </span>
                      </div>
                    </div>
                  ))}
                </div>
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
  
      <CompanySlider/>

    </main>
  )
}

export default VocationalLabsPage
