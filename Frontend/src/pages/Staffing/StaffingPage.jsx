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
  Clock,
  ChevronRight,

  Cpu,
  Boxes,
  Lightbulb,
  Puzzle,
  ThumbsUp,
  Network,
  Award,
  Palette,
  Cloud,
  Headphones,
  Database,
  ShieldAlert,
  Code2,
  Check,
  Briefcase
} from "lucide-react"

// Staffing SubMenu Section Components
import { ContractStaff } from '../StaffingSubMenu/ContractStaffing'
import { PermanentStaff } from "../StaffingSubMenu/PermanentStaffing"
import { RPOStaff } from "../StaffingSubMenu/RPO"
import { ManagedProvider } from "../StaffingSubMenu/ManagedServiceProvider"
import { Augmentation } from "../StaffingSubMenu/StaffAugmentation"
import { RemoteStaff } from "../StaffingSubMenu/RemoteIt"
import { ProjectStaff } from "../StaffingSubMenu/ProjectBased"
import CompanySlider from '../../components/CompanySlider'
// import hpSamagraLogo from '../../assets/images/VocationalLabs/hp_samagra_shiksha_logo.png'

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
              {/* <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" /> */}
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
                    className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive
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
      <section className="min-h-[500px] transition-all">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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

/* =========================================================================
   2. ON-GOING PROJECTS - STAFFING (Matches Screenshots 2, 3, 4 Cleanly)
   ========================================================================= */
const OngoingProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("govt")

  const govtProjects = [
    {
      id: "certin",
      title: "CERT-In",
      subtitle: "Enhancing Cyber Security in India",
      tag: "10+ Resident Engineers",
      desc: "Provided 10+ Resident Engineer in CertIn at client site for their internal IT project requirments.",
      icon: Puzzle,
      iconColor: "bg-[#16a34a]"
    },
    {
      id: "hitpa",
      title: "HEALTH INSURANCE TPA OF INDIA LTD.",
      subtitle: "हेल्थ इंश्योरेंस टीपीए ऑफ़ इंडिया लिमिटेड",
      tag: "50+ IT & Cloud Specialists",
      desc: "For Managing IT infra and Cloud eco-system 50+ IT Support Engineers, Cloud Engineers, Network Admins and Database experts has been deployed in HITPA.",
      icon: Lightbulb,
      iconColor: "bg-[#0d9488]"
    },
    {
      id: "samagra",
      title: "Samagra Shiksha",
      subtitle: "Education For All Initiative",
      tag: "100+ Manpower Deployed",
      desc: "in Himachal Pradesh & Rajasthan under Samagra Shiksha 100+ manpower has been deployed in Govt. schools.",
      icon: ThumbsUp,
      iconColor: "bg-[#0284c7]"
    },
    {
      id: "railtel",
      title: "RAILTEL",
      subtitle: "रेलटेल • A Government of India Enterprise",
      tag: "170+ Cyber & IT Experts",
      desc: "170 + IT Experts, Cyber Forensic Experts, Finance & Account Analyst has been deployed in Odisha (Cyber Cell).",
      icon: Network,
      iconColor: "bg-[#002a58]"
    }
  ]

  const privateProjects = [
    {
      id: "hcltech",
      title: "HCLTech",
      subtitle: "Global IT Leader",
      tag: "200+ Active Resource",
      desc: "Providing L1/L2 engineers, Database Admin, DevOps Engineer at Noida | Hyd | Chennai | Banglore | Trivendrum and Pune.",
      icon: Puzzle,
      iconColor: "bg-[#16a34a]"
    },
    {
      id: "aurionpro",
      title: "Aurionpro",
      subtitle: "Enterprise Technology Solutions",
      tag: "480+ Active Resource",
      desc: "Providing SAP, Salesforces, Accountants, Project Engineers and Blue Collar staff in Mumbai & Hyderabad Location.",
      icon: Lightbulb,
      iconColor: "bg-[#0d9488]"
    },
    {
      id: "coforge",
      title: "Coforge",
      subtitle: "Digital Services & Consulting",
      tag: "20+ Active Resource",
      desc: "In Delhi-NCR location serving resources for Cloud Engineer, Software Testing and DBA.",
      icon: ThumbsUp,
      iconColor: "bg-[#0284c7]"
    },
    {
      id: "xbox",
      title: "XBOX",
      subtitle: "Gaming & Interactive Entertainment",
      tag: "35+ Active Resource",
      desc: "Providing Game Tester in Hyderabad location for XBox.",
      icon: Network,
      iconColor: "bg-[#002a58]"
    }
  ]

  const activeProjects = activeTab === "govt" ? govtProjects : privateProjects

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0f1216] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002a58] dark:text-[#a9c7ff] tracking-tight">
              On-going Projects - Staffing
            </h2>
          </div>

          {/* Clean Segmented Category Tabs */}
          <div className="flex items-center gap-2 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("govt")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${activeTab === "govt"
                  ? "bg-[#002a58] text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              Govt. &amp; PSUs
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${activeTab === "private"
                  ? "bg-[#002a58] text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              Private &amp; Listed Organization
            </button>
          </div>
        </div>

        {/* Projects Layout: Left Milestone Spine + Right Project Cards */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Left Column: Trophy Milestone Hub (Visible on large screens) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-[#002a58]/10 dark:bg-[#a9c7ff]/10 text-[#002a58] dark:text-[#a9c7ff] flex items-center justify-center mb-4">
              <Award className="w-8 h-8" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#002a58] text-white mb-2">
              {activeTab === "govt" ? "Govt. & PSUs" : "Private & Listed"}
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Strategic Deployments
            </h3>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              {activeTab === "govt"
                ? "Supplying vetted technical, IT support, cloud, and forensic specialists across state and national government initiatives."
                : "Empowering listed enterprises with agile, certified engineering and QA specialists across pan-India delivery hubs."}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 w-full flex items-center justify-around text-center">
              <div>
                <div className="text-xl font-black text-[#002a58] dark:text-[#a9c7ff]">
                  {activeTab === "govt" ? "330+" : "735+"}
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Active Experts</div>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
              <div>
                <div className="text-xl font-black text-[#002a58] dark:text-[#a9c7ff]">100%</div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Compliance</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Project Cards */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3.5"
              >
                {activeProjects.map((proj, pIdx) => {
                  const ProjIcon = proj.icon
                  return (
                    <div
                      key={proj.id}
                      className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      {/* Left: Icon & Client Info */}
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl ${proj.iconColor} text-white flex items-center justify-center shrink-0`}>
                          <ProjIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">
                              {proj.title}
                            </h3>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {proj.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Right: Description & Active Resource Badge */}
                      <div className="w-full sm:w-auto sm:max-w-md sm:text-right">
                        <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#002a58]/10 dark:bg-[#a9c7ff]/20 text-[#002a58] dark:text-[#a9c7ff] mb-1.5">
                          {proj.tag}
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {proj.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   3. JOB ROLES SECTION (Classic & Professional Brand Theme)
   ========================================================================= */
const JobRolesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const roleCategories = [
    { id: "all", label: "All Profiles (11)" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "dev", label: "Software & QA" },
    { id: "security", label: "Cyber & Security" },
    { id: "infra", label: "Systems & Enterprise" },
  ]

  const roles = [
    {
      title: "UI/UX Developer",
      category: "dev",
      domain: "Design & Frontend",
      icon: Palette,
      badge: "High Demand"
    },
    {
      title: "Software Testing - Manual & Automation",
      category: "dev",
      domain: "QA & Automation",
      icon: CheckCircle2,
      badge: "ISTQB Certified"
    },
    {
      title: "Cloud Engineer - AWS/GCP/AZURE",
      category: "cloud",
      domain: "Multi-Cloud Infra",
      icon: Cloud,
      badge: "Cloud Certified"
    },
    {
      title: "DevOps Engineer",
      category: "cloud",
      domain: "CI/CD & Containers",
      icon: Cpu,
      badge: "Kubernetes/Docker"
    },
    {
      title: "IT Helpdesk Engineer - L1 & L2",
      category: "infra",
      domain: "Technical Support",
      icon: Headphones,
      badge: "24/7 SLA Ready"
    },
    {
      title: "System Engineer and Network Engineer",
      category: "infra",
      domain: "Networks & SysAdmin",
      icon: Network,
      badge: "CCNA / CCNP"
    },
    {
      title: "Database Admin",
      category: "infra",
      domain: "SQL, Oracle & NoSQL",
      icon: Database,
      badge: "Data Governance"
    },
    {
      title: "Cyber Forensic Expert",
      category: "security",
      domain: "Digital Forensics",
      icon: ShieldAlert,
      badge: "Govt. Approved"
    },
    {
      title: "Cyber Security Analyst",
      category: "security",
      domain: "SecOps & Threat Intel",
      icon: ShieldCheck,
      badge: "SOC / SIEM"
    },
    {
      title: "SAP Admin / Salesforce Engineer",
      category: "infra",
      domain: "Enterprise ERP & CRM",
      icon: Boxes,
      badge: "Enterprise Core"
    },
    {
      title: "Full-Stack Developer",
      category: "dev",
      domain: "MERN / Java / Python",
      icon: Code2,
      badge: "Full Lifecycle"
    },
  ]

  const filteredRoles = selectedCategory === "all"
    ? roles
    : roles.filter((r) => r.category === selectedCategory)

  return (
    <section className="py-20 bg-white dark:bg-[#0c0e0f] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#002a58]/5 dark:bg-[#a9c7ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#003875]/5 dark:bg-[#a9c7ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002a58]/10 dark:bg-[#a9c7ff]/15 text-[#002a58] dark:text-[#a9c7ff] text-xs font-bold uppercase tracking-widest mb-3.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Technical Profiles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002a58] dark:text-[#a9c7ff] tracking-tight leading-tight mb-4">
              In-Demand Job Roles &amp; Expertise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              SmartBrains delivers rigorously vetted, project-ready technical professionals across mission-critical technology domains. Our talent pool empowers organizations with immediate agility, domain mastery, and seamless workforce scaling.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-2xl shadow-sm shrink-0">
            <div>
              <div className="text-2xl font-extrabold text-[#002a58] dark:text-[#a9c7ff]">11+</div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Core Profiles</div>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
            <div>
              <div className="text-2xl font-extrabold text-[#002a58] dark:text-[#a9c7ff]">48h</div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Fast Turnaround</div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {roleCategories.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#002a58] text-white shadow-md shadow-[#002a58]/20 scale-105"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Main Grid: Left Roles Showcase + Right Classic Arch Vector Art */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 11 Structured Role Cards (2-Column Grid on md+) */}
          <div className="lg:col-span-8">
            <motion.div 
              layout
              className="grid sm:grid-cols-2 gap-3.5"
            >
              <AnimatePresence>
                {filteredRoles.map((role) => {
                  const RoleIcon = role.icon
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={role.title}
                      className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#002a58] dark:bg-[#002247] text-white shadow-sm hover:shadow-lg hover:bg-[#003875] dark:hover:bg-[#002d5e] border border-white/10 dark:border-white/5 transition-all duration-300"
                    >
                      {/* Left: Icon & Role Information */}
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div className="w-10 h-10 rounded-xl bg-white/10 dark:bg-[#a9c7ff]/15 text-[#a9c7ff] flex items-center justify-center shrink-0 group-hover:bg-[#a9c7ff] group-hover:text-[#002a58] transition-colors duration-300 shadow-inner">
                          <RoleIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate group-hover:text-white transition-colors">
                            {role.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[11px] text-[#a9c7ff]/80 font-medium">
                              {role.domain}
                            </span>
                            <span className="inline-block w-1 h-1 rounded-full bg-[#a9c7ff]/40" />
                            <span className="text-[10px] text-white/70 font-semibold uppercase tracking-wider bg-white/10 px-1.5 py-0.2 rounded">
                              {role.badge}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Interactive Accent Chevron */}
                      <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-[#a9c7ff] shrink-0 group-hover:translate-x-1 group-hover:bg-white/15 transition-all duration-200">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#002a58] dark:text-[#a9c7ff] shrink-0" />
                <span>All candidates are rigorously vetted with multi-tier technical &amp; behavioral evaluations.</span>
              </div>
              <Link 
                to="/contact-us"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002a58] dark:text-[#a9c7ff] hover:underline"
              >
                <span>Request Custom Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Concentric Arches + Enterprise Hub */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] bg-slate-50 dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center overflow-hidden">
              
              {/* Concentric Arches SVG Graphic (Matches Reference Screenshot 5) */}
              <div className="relative w-[240px] h-[240px] flex items-center justify-center mb-4">
                <svg 
                  className="w-full h-full text-[#002a58] dark:text-[#a9c7ff]" 
                  viewBox="0 0 240 240" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Arches with Rounded Caps */}
                  <path d="M 30 240 V 100 A 90 90 0 0 1 210 100 V 240" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
                  <path d="M 52 240 V 100 A 68 68 0 0 1 188 100 V 240" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" opacity="0.8" />
                  <path d="M 74 240 V 100 A 46 46 0 0 1 166 100 V 240" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" opacity="0.6" />
                  <path d="M 96 240 V 100 A 24 24 0 0 1 144 100 V 240" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" opacity="0.4" />
                  
                  {/* Forward Arrow Indicator at Bottom Right */}
                  <path d="M 195 210 L 210 225 L 195 240" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Central Focus Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 pointer-events-none">
                  <div className="w-12 h-12 rounded-2xl bg-[#002a58] text-white flex items-center justify-center shadow-lg mb-1">
                    <Briefcase className="w-6 h-6 text-[#a9c7ff]" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002a58] dark:text-[#a9c7ff]">
                    SmartBrains
                  </span>
                  <span className="text-[9px] text-slate-500 font-medium">
                    Talent Cloud
                  </span>
                </div>
              </div>

              {/* Quality Pillars */}
              <div className="w-full text-left space-y-2 mb-5 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Check className="w-3.5 h-3.5 text-[#002a58] dark:text-[#a9c7ff] shrink-0" />
                  <span>Pan-India &amp; Global Deployment</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Check className="w-3.5 h-3.5 text-[#002a58] dark:text-[#a9c7ff] shrink-0" />
                  <span>Contract, Permanent &amp; RPO Models</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Check className="w-3.5 h-3.5 text-[#002a58] dark:text-[#a9c7ff] shrink-0" />
                  <span>Zero Replacement Cost Guarantee</span>
                </div>
              </div>

              {/* Direct Hire CTA */}
              <Link
                to="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#002a58] hover:bg-[#003875] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Hire Technical Talent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── 7. FINAL CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0c0e0f]/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#a9c7ff] mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Ready to Build the Future?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8 font-light">
              Connect with our specialists today to discuss your next industrial project or institutional curriculum upgrade.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
/* =========================================================================
   MAIN STAFFING PAGE COMPONENT
   ========================================================================= */
const StaffingPage = () => {
  const animRef = useScrollAnimation()
  return (
    <main
      style={{ "--navbar-height": "88px" }}
      className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 selection:bg-primary/20 selection:text-primary transition-colors duration-300"
      ref={animRef}
    >
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] text-white overflow-hidden py-16">
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

              <h4
                data-animate="fade-up"
                data-animate-delay="0.1"
                className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1] uppercase text-white"
              >
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">Technical Staffing</span> &amp; Talent Solutions
              </h4>

              <p
                data-animate="fade-up"
                data-animate-delay="0.2"
                className="text-base sm:text-lg text-slate-200 font-light mb-8 max-w-2xl leading-relaxed"
              >
                Augmenting engineering, EPC infrastructure, refinery operations, and digital IT ecosystems with rigorously vetted, fully compliant contract and permanent specialists.
              </p>


            </div>
          </div>
        </div>
      </section>

      {/* Main Staffing Interactive Tabs Section */}
      <div id="staffing-tabs-section">
        <StaffingTabs />
      </div>

      {/* SECTION 2: On-going Projects - Staffing (Matches Screenshots 2, 3, 4) */}
      <OngoingProjectsSection />

      {/* SECTION 3: Job Roles (Matches Screenshot 5) */}
      <JobRolesSection />

      {/* Trusted Worldwide Clients Carousel */}
      <CompanySlider />

      <CTASection />
    </main>
  )
}

export default StaffingPage

