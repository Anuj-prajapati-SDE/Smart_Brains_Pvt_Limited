import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, 
  Users, 
  Layers, 
  ShieldCheck, 
  UserPlus, 
  Globe, 
  FolderKanban,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Clock
} from "lucide-react"

// Staffing SubMenu Section Components
import { ContractStaff } from '../StaffingSubMenu/ContractStaffing'
import { PermanentStaff } from "../StaffingSubMenu/PermanentStaffing"
import { RPOStaff } from "../StaffingSubMenu/RPO"
import { ManagedProvider } from "../StaffingSubMenu/ManagedServiceProvider"
import { Augmentation } from "../StaffingSubMenu/StaffAugmentation"
import { RemoteStaff } from "../StaffingSubMenu/RemoteIt"
import { ProjectStaff } from "../StaffingSubMenu/ProjectBased"

const staffingTabs = [
  { id: "Contract", label: "Contract", icon: FileText, desc: "Flexible On-Demand Talent" },
  { id: "Permanent", label: "Permanent", icon: Users, desc: "Long-Term Strategic Hires" },
  { id: "RPO", label: "RPO", icon: Layers, desc: "End-to-End Recruitment" },
  { id: "Managed Services", label: "Managed Services", icon: ShieldCheck, desc: "Total Workforce Governance" },
  { id: "Staff Augmentation", label: "Staff Augmentation", icon: UserPlus, desc: "Instant Team Capacity" },
  { id: "Remote IT Staff", label: "Remote IT Staff", icon: Globe, desc: "Global Engineering Talent" },
  { id: "Project Based", label: "Project Based", icon: FolderKanban, desc: "Outcome-Driven Teams" },
]

export function StaffingTabs() {
  const [activeTab, setActiveTab] = useState("Contract")

  return (
    <div className="w-full">
      {/* Sticky Tab Navigation Bar */}
      <section className="top-[80px] z-30 bg-white/95 dark:bg-[#0c0e0f]/95 backdrop-blur-md border-y border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-3">
            <div className="flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-slate-800 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black text-primary dark:text-[#a9c7ff] tracking-widest uppercase">
                Solutions
              </span>
            </div>

            <div className="flex gap-2 min-w-max">
              {staffingTabs.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-primary dark:text-[#a9c7ff] bg-primary/10 dark:bg-primary/25 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110 text-primary dark:text-[#a9c7ff]" : "text-slate-400"}`} />
                    <span>{item.label}</span>

                    {isActive && (
                      <motion.div
                        layoutId="activeStaffTab"
                        className="absolute inset-0 border-2 border-primary/40 dark:border-[#a9c7ff]/40 rounded-xl pointer-events-none"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content with Animated Fade-In */}
      <section className="min-h-[600px] transition-all">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {activeTab === "Contract" && <ContractStaff />}
            {activeTab === "Permanent" && <PermanentStaff />}
            {activeTab === "RPO" && <RPOStaff />}
            {activeTab === "Managed Services" && <ManagedProvider />}
            {activeTab === "Staff Augmentation" && <Augmentation />}
            {activeTab === "Remote IT Staff" && <RemoteStaff />}
            {activeTab === "Project Based" && <ProjectStaff />}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  )
}

const StaffingPage = () => {
  const animRef = useScrollAnimation()

  const quickStats = [
    { label: "Talent Pool", val: "50,000+", icon: Users },
    { label: "Placement Speed", val: "48 - 72 hrs", icon: Clock },
    { label: "SLA Retention", val: "94%", icon: TrendingUp },
    { label: "Compliance Assured", val: "100%", icon: CheckCircle2 },
  ]

  return (
    <main
      style={{ "--navbar-height": "88px" }}
      className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 selection:bg-primary/20 selection:text-primary transition-colors duration-300"
      ref={animRef}
    >
      {/* Hero Section */}
      <section className="relative min-h-[540px] flex items-center bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] text-white overflow-hidden py-16">
        {/* Background Image with Radial Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Smart Brains Human Capital & Technical Staffing"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/90 to-transparent" />
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
                <span>Smart Brains Human Capital Solutions</span>
              </div>

              <h1
                data-animate="fade-up"
                data-animate-delay="0.1"
                className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1] uppercase text-white"
              >
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">Technical Staffing</span> &amp; Talent Solutions
              </h1>

              <p
                data-animate="fade-up"
                data-animate-delay="0.2"
                className="text-base sm:text-lg text-slate-200 font-light mb-8 max-w-2xl leading-relaxed"
              >
                Augmenting engineering, EPC infrastructure, refinery operations, and digital IT ecosystems with rigorously vetted, fully compliant contract and permanent specialists.
              </p>

              {/* <div
                data-animate="fade-up"
                data-animate-delay="0.3"
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Request Talent Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#staffing-tabs-section"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#staffing-tabs-section')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white transition-all duration-300 font-semibold rounded-xl text-xs uppercase tracking-wider backdrop-blur-sm"
                >
                  <span>Explore 7 Delivery Models</span>
                </a>
              </div> */}
            </div>

            {/* Right Metric Highlights Box */}
            {/* <div className="lg:col-span-5" data-animate="fade-up" data-animate-delay="0.25">
              <div className="grid grid-cols-2 gap-4 bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl">
                {quickStats.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-[#a9c7ff]" />
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
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Staffing Interactive Tabs Section */}
      <div id="staffing-tabs-section">
        <StaffingTabs />
      </div>
    </main>
  )
}

export default StaffingPage
