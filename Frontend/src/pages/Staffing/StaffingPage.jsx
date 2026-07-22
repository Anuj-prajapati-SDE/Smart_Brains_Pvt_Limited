import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { motion } from "framer-motion";

// Sections 


import {PermanentStaff} from "../StaffingSubMenu/PermanentStaffing"
import {RPOStaff} from "../StaffingSubMenu/RPO"
import {ManagedProvider} from "../StaffingSubMenu/ManagedServiceProvider"
import {Augmentation} from "../StaffingSubMenu/StaffAugmentation"
import {RemoteStaff} from "../StaffingSubMenu/RemoteIt"
import {ProjectStaff} from "../StaffingSubMenu/ProjectBased"
import { ContractStaff } from '../StaffingSubMenu/ContractStaffing';

const staffingTabs = [
  "Contract",
  "Permanent",
  "RPO",
  "Managed Services",
  "Staff Augmentation",
  "Remote IT Staff",
  "Project Based",
];

export function StaffingTabs() {

  // DEFAULT SELECTED
  const [activeTab, setActiveTab] = useState("Contract");

  return (

<>
{/* NAV */}

<section
className=" relative bg-white rounded-t-[18px] shadow-sm border border-slate-200 border-b -translate-y-6 z-20 " >

<div className=" max-w-[1280px] mx-auto px-gutter ">

<div className=" flex items-center justify-between overflow-x-auto hide-scrollbar">

<h2
className=" text-3xl font-black text-slate-900 py-8 pr-10 shrink-0 " >

STAFFING

</h2>


<div className="flex gap-7 relative min-w-max">

{staffingTabs.map((item)=>(

<button key={item} onClick={()=> setActiveTab(item)}


className="relative pb-8 pt-8 text-md font-medium transition">

<span className={`
${ activeTab===item ? "text-primary" : "text-slate-500" } `}>

{item}

</span>


{activeTab===item && (

<motion.div

layoutId="activeStaff"

className="
absolute
bottom-0
left-0
right-0
h-[4px]
bg-primary
rounded-full
"

/>

)}

</button>

))}

</div>

</div>

</div>

</section>



{/* CONTENT */}

<section>

{activeTab==="Contract" && (
<>
{/* Contract Section */}
{contractSection}
</>
)}

{activeTab==="Permanent" && (
<>
{permanentSection}
</>
)}

{activeTab==="RPO" && (
<>
{rpoSection}
</>
)}

{activeTab==="Managed Services" && (
<>
{managedSection}
</>
)}

{activeTab==="Staff Augmentation" && (
<>
{staffAugmentationSection}
</>
)}

{activeTab==="Remote IT Staff" && (
<>
{remoteSection}
</>
)}

{activeTab==="Project Based" && (
<>
{projectSection}
</>
)}

</section>

</>

);
}

const contractSection =
<ContractStaff />

const permanentSection =
<PermanentStaff />

const rpoSection =
<RPOStaff />

const managedSection =
<ManagedProvider />

const staffAugmentationSection =
<Augmentation />

const remoteSection =
<RemoteStaff />

const projectSection =
<ProjectStaff />

const StaffingPage = () => {
  const animRef = useScrollAnimation()
  const [selectedProfile, setSelectedProfile] = useState("piping")

  const talentProfiles = {
    piping: {
      title: "Piping & Design Engineers",
      rampTime: "5 - 7 Days",
      screening: "AutoCAD/SP3D Practical Test + Technical Panel Evaluation",
      availability: "30+ Profiles Ready",
      skills: ["ASME Codes", "Stress Analysis", "Isometric Layouts"]
    },
    dcs: {
      title: "DCS & Panel Operators",
      rampTime: "7 - 10 Days",
      screening: "Control Room Simulation + Safety Compliance Verification",
      availability: "15+ Profiles Ready",
      skills: ["SCADA Systems", "Incident Protocols", "Loop Tuning"]
    },
    it: {
      title: "Cloud & DevOps Engineers",
      rampTime: "3 - 5 Days",
      screening: "CI/CD Pipeline Coding Challenge + System Architecture Panel",
      availability: "25+ Profiles Ready",
      skills: ["AWS/Azure", "Docker/K8s", "Jenkins Automations"]
    }
  }

  const services = [
    {
      title: "Contract Staffing",
      desc: "Deploy skilled professionals for short-term and long-term workforce requirements with rapid onboarding.",
      icon: "groups",
      path: "/staffing/contract",
      colorClass:
        "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border-blue-100",
      bullets: [
        "Short & long-term hiring",
        "Payroll & compliance support",
        "Quick resource deployment"
      ]
    },

    {
      title: "Permanent Staffing",
      desc: "Build strong in-house teams with experienced and pre-screened professionals.",
      icon: "badge",
      path: "/staffing/permanent",
      colorClass:
        "bg-violet-50 text-violet-600 group-hover:bg-violet-700 group-hover:text-white border-violet-100",
      bullets: [
        "End-to-end recruitment",
        "Skill & culture evaluation",
        "Leadership & specialist hiring"
      ]
    },

    {
      title: "RPO",
      desc: "Scale hiring efficiently through dedicated recruitment teams and streamlined processes.",
      icon: "manage_accounts",
      path: "/staffing/rpo",
      colorClass:
        "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white border-orange-100",
      bullets: [
        "Dedicated hiring teams",
        "Candidate sourcing",
        "Interview coordination"
      ]
    },

    {
      title: "Managed Service Provider",
      desc: "Centralized workforce management with measurable delivery and operational control.",
      icon: "hub",
      path: "/staffing/managed",
      colorClass:
        "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border-emerald-100",
      bullets: [
        "Vendor coordination",
        "Workforce analytics",
        "SLA-based operations"
      ]
    },

    {
      title: "Staff Augmentation",
      desc: "Expand your existing teams quickly with specialized technical professionals.",
      icon: "group_add",
      path: "/staffing/augmentation",
      colorClass:
        "bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white border-slate-200",
      bullets: [
        "Engineering resources",
        "Flexible engagement",
        "Rapid team expansion"
      ]
    },

    {
      title: "Remote IT Staffing",
      desc: "Access remote engineering and technology talent for modern distributed teams.",
      icon: "laptop_chromebook",
      path: "/staffing/remote",
      colorClass:
        "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-700 group-hover:text-white border-cyan-100",
      bullets: [
        "Remote developers",
        "Cloud & DevOps talent",
        "Global collaboration"
      ]
    },

    {
      title: "Project Based Staffing",
      desc: "Deliver project milestones faster with dedicated teams assigned to business outcomes.",
      icon: "assignment",
      path: "/staffing/project",
      colorClass:
        "bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white border-amber-100",
      bullets: [
        "Project team deployment",
        "Milestone tracking",
        "Outcome-focused staffing"
      ]
    }
  ]


  return (
    <main style={{ "--navbar-height":"88px"}} className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Human resources operations"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Human Capital &amp; Staffing
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              Technical Staffing Solutions
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              augmenting engineering, EPC pipelines, refinery operations, and cloud infrastructures with vetted, compliant contractors.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                augment Your Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* I MAKE CHANGES HERE Link to other staffing area */}

      {/* Staffing Services */}

<StaffingTabs/>


    </main>
  )
}

export default StaffingPage

      {/* Talent Matcher Interactive Section */}
      // <section className="py-24 max-w-[1280px] mx-auto px-gutter">
      //   <div className="text-center max-w-2xl mx-auto mb-16" data-animate="fade-up">
      //     <span className="text-xs uppercase tracking-widest text-primary dark:text-[#a9c7ff] font-bold">Interactive Selector</span>
      //     <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white mt-1 uppercase font-serif">Staffing Sourcing Speed &amp; Vetting</h2>
      //     <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
      //   </div>

      //   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      //     {/* Profiles selector */}
      //     <div className="lg:col-span-5 flex flex-col gap-3" data-animate="fade-up">
      //       {Object.keys(talentProfiles).map((key) => (
      //         <button
      //           key={key}
      //           onClick={() => setSelectedProfile(key)}
      //           className={`text-left p-5 rounded-2xl border transition-all flex justify-between items-center ${selectedProfile === key
      //             ? 'bg-white dark:bg-[#121517] border-primary dark:border-[#a9c7ff] shadow-md scale-[1.01]'
      //             : 'bg-white/50 dark:bg-[#121517]/50 border-slate-200 dark:border-slate-800 hover:border-primary/20'
      //             }`}
      //         >
      //           <div>
      //             <h3 className="font-bold text-slate-800 dark:text-white text-sm uppercase tracking-wide">
      //               {talentProfiles[key].title}
      //             </h3>
      //             <span className="text-[10px] text-slate-400 block mt-1">
      //               Ready Dispatch: {talentProfiles[key].availability}
      //             </span>
      //           </div>
      //           <span className={`material-symbols-outlined text-[20px] transition-all ${selectedProfile === key ? 'text-primary dark:text-[#a9c7ff] translate-x-1' : 'text-slate-400'}`}>
      //             arrow_forward
      //           </span>
      //         </button>
      //       ))}
      //     </div>

      //     {/* Sourcing Details display */}
      //     <div className="lg:col-span-7 bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 p-8 rounded-3xl shadow-sm flex flex-col justify-between" data-animate="fade-up">
      //       <div className="space-y-6">
      //         <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/80 pb-4">
      //           <h4 className="text-lg font-bold text-primary dark:text-[#a9c7ff] uppercase">Vetting Metrics</h4>
      //           <span className="bg-green-500/10 text-green-600 dark:text-green-400 text-xs px-2.5 py-1 rounded font-bold uppercase">Ready Dispatch</span>
      //         </div>

      //         <div className="grid grid-cols-2 gap-4">
      //           <div>
      //             <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Ramp-Up Speed</span>
      //             <p className="text-sm font-bold text-slate-800 dark:text-white">{talentProfiles[selectedProfile].rampTime}</p>
      //           </div>
      //           <div>
      //             <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Total Availability</span>
      //             <p className="text-sm font-bold text-slate-800 dark:text-white">{talentProfiles[selectedProfile].availability}</p>
      //           </div>
      //         </div>

      //         <div>
      //           <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Screening Pipeline Details</span>
      //           <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">{talentProfiles[selectedProfile].screening}</p>
      //         </div>

      //         <div>
      //           <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Technical Core Competencies</span>
      //           <div className="flex flex-wrap gap-2">
      //             {talentProfiles[selectedProfile].skills.map((sk, idx) => (
      //               <span key={idx} className="bg-primary/5 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] text-xs font-semibold px-3 py-1 rounded-full">
      //                 {sk}
      //               </span>
      //             ))}
      //           </div>
      //         </div>
      //       </div>

      //       <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex justify-between items-center text-xs">
      //         <span className="text-slate-400">100% Statuary Tax &amp; Payroll Compliant</span>
      //         <Link to="/contact-us" className="inline-flex items-center gap-1 font-bold text-primary dark:text-[#a9c7ff] hover:gap-2 transition-all">
      //           <span>Request Profiles List</span>
      //           <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      //         </Link>
      //       </div>
      //     </div>
      //   </div>
      // </section>
