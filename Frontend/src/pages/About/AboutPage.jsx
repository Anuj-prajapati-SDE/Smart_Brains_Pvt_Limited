import { useState, useEffect, useRef } from "react";
import { useScrollAnimation, useCountUp } from "../../hooks/useScrollAnimation";
import indiaMap from "@svg-maps/india";
import { Link } from "react-router-dom";
import AboutLeadership from "./components/AboutLeadership";
import AboutCoreValues from "./components/AboutCoreValues";
import AboutCoreTeam from "./components/AboutCoreTeam";
import { Owner_1 } from "../../assets";
import WaterMark from  '../../assets/fabicon.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const valuesList = [
  {
    num: "01",
    title: "Integrity",
    tag: "ETHICS",
    desc: "We uphold honesty, transparency, and ethical conduct in every decision and action.",
    accent: "from-blue-600 to-cyan-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Excellence",
    tag: "QUALITY",
    desc: "We strive for superior quality, precision, and outstanding execution in all we do.",
    accent: "from-indigo-600 to-purple-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Innovation",
    tag: "GROWTH",
    desc: "We embrace change, foster creative ideas, and continuously improve our solutions.",
    accent: "from-pink-600 to-rose-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Collaboration",
    tag: "SYNERGY",
    desc: "We believe in the power of partnership, synergy, and working as one cohesive team.",
    accent: "from-emerald-600 to-teal-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    num: "05",
    title: "Customer Centricity",
    tag: "FOCUS",
    desc: "Our clients' success is our ultimate measure of success, guiding every solution.",
    accent: "from-amber-600 to-orange-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
      </svg>
    )
  },
  {
    num: "06",
    title: "Sustainability",
    tag: "FUTURE",
    desc: "We design and deliver eco-conscious solutions that benefit future generations.",
    accent: "from-sky-600 to-blue-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

const divisionsListData = [
  {
    title: "AGRITECH SOLUTIONS",
    barColor: "bg-emerald-500",
    textColor: "text-emerald-600 dark:text-emerald-400",
    hoverBg: "hover:bg-emerald-50/10 dark:hover:bg-emerald-950/10",
    borderTheme: "border-emerald-200/50 dark:border-emerald-800/40",
    icon: (
      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="12" rx="2" />
        <path d="M9 15v4m6-4v4M6 19h12" />
        <circle cx="12" cy="9" r="2" />
        <path d="M12 7V9M12 9c-1 0-2 .5-2 1.5S11 12 12 12s2-.5 2-1.5S13 9 12 9z" />
      </svg>
    ),
    items: [
      {
        label: "AgriTech Solutions",
        icon: (
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M12 9c3 0 5-2 5-5M12 13c-3 0-5-2-5-5" />
          </svg>
        )
      },
      {
        label: "SmartFarm Setup",
        icon: (
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21V12h6v9" />
          </svg>
        )
      },
      {
        label: "Vertical Farming Solutions",
        icon: (
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16M7 3v18M17 3v18" />
          </svg>
        )
      },
      {
        label: "Hydroponics Systems",
        icon: (
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v13M12 16c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-4-7h8" />
          </svg>
        )
      },
      {
        label: "Smart Monitoring & Automation",
        icon: (
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="12" rx="2" />
            <circle cx="12" cy="9" r="2" />
            <path d="M9 18h6" />
          </svg>
        )
      }
    ]
  },
  {
    title: "SOLAR ENERGY SOLUTIONS",
    barColor: "bg-amber-500",
    textColor: "text-amber-600 dark:text-amber-400",
    hoverBg: "hover:bg-amber-50/10 dark:hover:bg-amber-950/10",
    borderTheme: "border-amber-200/50 dark:border-amber-800/40",
    icon: (
      <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    items: [
      {
        label: "Solar Power Systems",
        icon: (
          <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16v16M4 12h16M12 4v16" />
          </svg>
        )
      },
      {
        label: "On-Grid, Off-Grid & Hybrid Solutions",
        icon: (
          <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12l9-9 9 9M5 12v8h14v-8M13 10l-3 4h4l-3 4" />
          </svg>
        )
      },
      {
        label: "Rooftop & Ground Mounted Systems",
        icon: (
          <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 20h18M12 4l9 6H3l9-6zM6 12h4M14 12h4" />
          </svg>
        )
      },
      {
        label: "Net Metering & Energy Optimization",
        icon: (
          <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 12l3-3" />
          </svg>
        )
      }
    ]
  },
  {
    title: "EPC PROJECTS (OIL, GAS & ENERGY)",
    barColor: "bg-violet-500",
    textColor: "text-violet-600 dark:text-violet-400",
    hoverBg: "hover:bg-violet-50/10 dark:hover:bg-violet-950/10",
    borderTheme: "border-violet-200/50 dark:border-violet-800/40",
    icon: (
      <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V8l-6 4v8m-6 0V6l6 6v8" />
      </svg>
    ),
    items: [
      {
        label: "EPC Projects (Oil, Gas & Energy)",
        icon: (
          <svg className="w-4 h-4 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18M10 21V8l4-2v15" />
          </svg>
        )
      },
      {
        label: "Project Management",
        icon: (
          <svg className="w-4 h-4 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3a9 9 0 019 9H3a9 9 0 019-9zM6 12v3h12v-3" />
          </svg>
        )
      },
      {
        label: "Engineering Design",
        icon: (
          <svg className="w-4 h-4 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
          </svg>
        )
      },
      {
        label: "Procurement & Construction",
        icon: (
          <svg className="w-4 h-4 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 21V3h4m0 0l6 4v4H9" />
          </svg>
        )
      }
    ]
  },
  {
    title: "IT & ITES SERVICES",
    barColor: "bg-blue-600",
    textColor: "text-blue-600 dark:text-blue-400",
    hoverBg: "hover:bg-blue-50/10 dark:hover:bg-blue-950/10",
    borderTheme: "border-blue-200/50 dark:border-blue-800/40",
    icon: (
      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="6" cy="18" r="1" />
      </svg>
    ),
    items: [
      {
        label: "IT & ITeS Services",
        icon: (
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="12" rx="2" />
            <path d="M9 21h6M12 15v6" />
          </svg>
        )
      },
      {
        label: "Software Development",
        icon: (
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" />
          </svg>
        )
      },
      {
        label: "Cloud & Infrastructure",
        icon: (
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 10a6 6 0 00-11-2 5 5 0 00-4 5c0 2.2 1.8 4 4 4h11c2.2 0 4-1.8 4-4 0-1.8-1.2-3.3-3-3.7z" />
          </svg>
        )
      },
      {
        label: "Digital Transformation",
        icon: (
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
          </svg>
        )
      }
    ]
  },
  {
    title: "SKILLING PROJECTS",
    barColor: "bg-sky-500",
    textColor: "text-sky-600 dark:text-sky-400",
    hoverBg: "hover:bg-sky-50/10 dark:hover:bg-sky-950/10",
    borderTheme: "border-sky-200/50 dark:border-sky-800/40",
    icon: (
      <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    items: [
      {
        label: "Skilling Projects",
        icon: (
          <svg className="w-4 h-4 text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9M3 20v-4M7 20V12M11 20V8M15 20V4" />
          </svg>
        )
      },
      {
        label: "Training Programs",
        icon: (
          <svg className="w-4 h-4 text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
          </svg>
        )
      },
      {
        label: "Assessment & Certification",
        icon: (
          <svg className="w-4 h-4 text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4M19 21v-6a2 2 0 00-2-2H7a2 2 0 00-2 2v6" />
            <path d="M12 2a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        )
      },
      {
        label: "Placement Support",
        icon: (
          <svg className="w-4 h-4 text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M16 11l2 2 4-4" />
          </svg>
        )
      }
    ]
  },
  {
    title: "STEAM EDUCATION",
    barColor: "bg-cyan-500",
    textColor: "text-cyan-600 dark:text-cyan-400",
    hoverBg: "hover:bg-cyan-50/10 dark:hover:bg-cyan-950/10",
    borderTheme: "border-cyan-200/50 dark:border-cyan-800/40",
    icon: (
      <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 005 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    items: [
      {
        label: "STEAM Education",
        icon: (
          <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-7 7c0 2.3 1.2 4.3 3 5.4v3.6h8v-3.6c1.8-1.1 3-3.1 3-5.4a7 7 0 00-7-7z" />
          </svg>
        )
      },
      {
        label: "STEM Labs",
        icon: (
          <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 3h6M10 3v6.5L5.7 18.2a2 2 0 001.8 2.8h9a2 2 0 001.8-2.8L14 9.5V3" />
          </svg>
        )
      },
      {
        label: "Robotics & Innovation Labs",
        icon: (
          <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 20h20M5 20V8l7-3 5 4v11M9 12h6" />
          </svg>
        )
      },
      {
        label: "Curriculum & Training",
        icon: (
          <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 3h10v18H2zm20 0H12v18h10z" />
          </svg>
        )
      }
    ]
  },
  {
    title: "CSR PROJECTS",
    barColor: "bg-teal-500",
    textColor: "text-teal-600 dark:text-teal-400",
    hoverBg: "hover:bg-teal-50/10 dark:hover:bg-teal-950/10",
    borderTheme: "border-teal-200/50 dark:border-teal-800/40",
    icon: (
      <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    items: [
      {
        label: "CSR Projects",
        icon: (
          <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12l9-9 9 9M5 12v8h14v-8M9 21v-6h6v6" />
          </svg>
        )
      },
      {
        label: "Community Development",
        icon: (
          <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        )
      },
      {
        label: "Education & Health",
        icon: (
          <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        )
      },
      {
        label: "Environment Sustainability",
        icon: (
          <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10m0-20a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10M2 12h20" />
          </svg>
        )
      }
    ]
  },
  {
    title: "STAFFING PROJECTS",
    barColor: "bg-slate-500",
    textColor: "text-slate-600 dark:text-slate-400",
    hoverBg: "hover:bg-slate-50/10 dark:hover:bg-slate-950/10",
    borderTheme: "border-slate-200/50 dark:border-slate-800/40",
    icon: (
      <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    items: [
      {
        label: "Permanent Staffing",
        icon: (
          <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22a10 10 0 100-20 10 10 0 000 20zM8 11h8m-8 3h6" />
          </svg>
        )
      },
      {
        label: "Contract Staffing",
        icon: (
          <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        )
      },
      {
        label: "Executive Search",
        icon: (
          <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
          </svg>
        )
      },
      {
        label: "Workforce Management",
        icon: (
          <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          </svg>
        )
      }
    ]
  },
  {
    title: "CONSTRUCTION & EARTHWORK",
    barColor: "bg-indigo-600",
    textColor: "text-indigo-600 dark:text-indigo-400",
    hoverBg: "hover:bg-indigo-50/10 dark:hover:bg-indigo-950/10",
    borderTheme: "border-indigo-200/50 dark:border-indigo-800/40",
    icon: (
      <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 22V4h6m0 0l8 6H10" />
      </svg>
    ),
    items: [
      {
        label: "Civil Construction",
        icon: (
          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18M5 21V8l7-4 7 4v13M9 9h2M9 13h2M13 9h2M13 13h2" />
          </svg>
        )
      },
      {
        label: "Infrastructure Development",
        icon: (
          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M6 12v6M18 12v6M12 6v6M6 12C9 9 15 9 18 12" />
          </svg>
        )
      },
      {
        label: "Earthwork & Excavation",
        icon: (
          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 18h12l4-8V4h-4v4l-4 6H2zM6 18H2v4h4z" />
          </svg>
        )
      },
      {
        label: "Turnkey Solutions",
        icon: (
          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3M15.5 7.5L18 5" />
          </svg>
        )
      }
    ]
  }
];

// const TypewriterHeading = ({ text, className }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const ctx = gsap.context(() => {
//       const chars = containerRef.current.querySelectorAll(".char-span");
//       const cursor = containerRef.current.querySelector(".cursor-span");

//       if (chars.length === 0) return;

//       gsap.fromTo(chars,
//         {
//           opacity: 0,
//           y: 8,
//           scale: 0.9,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           stagger: 0.015,
//           duration: 0.35,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//           onStart: () => {
//             if (cursor) gsap.set(cursor, { opacity: 1 });
//           },
//           onComplete: () => {
//             if (cursor) {
//               gsap.to(cursor, {
//                 opacity: 0,
//                 duration: 0.5,
//                 delay: 0.5,
//               });
//             }
//           }
//         }
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, [text]);

//   const words = text.split(" ");

//   return (
//     <h4 ref={containerRef} className={className}>
//       {words.map((word, wordIndex) => (
//         <span key={wordIndex} className="inline-block whitespace-nowrap">
//           {word.split("").map((char, charIndex) => (
//             <span
//               key={charIndex}
//               className="char-span opacity-0 inline-block"
//             >
//               {char}
//             </span>
//           ))}
//           {wordIndex < words.length - 1 && (
//             <span className="char-span opacity-0 inline-block">
//               {"\u00A0"}
//             </span>
//           )}
//         </span>
//       ))}
//       <span
//         className="cursor-span opacity-0 inline-block text-primary dark:text-[#a9c7ff] font-normal ml-0.5 animate-pulse"
//       >
//         |
//       </span>
//     </h4>
//   );
// };

// const DirectorMessage = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const ctx = gsap.context(() => {
//       const card = containerRef.current.querySelector(".director-card");
//       const tag = containerRef.current.querySelector(".director-tag");
//       const titleChars = containerRef.current.querySelectorAll(".director-title .char-span");
//       const titleCursor = containerRef.current.querySelector(".director-title .cursor-span");
//       const lineSeparator = containerRef.current.querySelector(".director-line");
//       const quoteWords = containerRef.current.querySelectorAll(".director-quote .word-span");
//       const paragraphs = containerRef.current.querySelectorAll(".director-para");
//       const signature = containerRef.current.querySelector(".director-signature");
//       const seal = containerRef.current.querySelector(".director-seal");

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 75%",
//           toggleActions: "play none none none",
//         }
//       });

//       tl.fromTo(card,
//         { opacity: 0, y: 40, scale: 0.98 },
//         { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
//       );

//       tl.fromTo(tag,
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
//         "-=0.4"
//       );

//       if (titleChars.length > 0) {
//         tl.set(titleCursor, { opacity: 1 }, "-=0.2");
//         tl.fromTo(titleChars,
//           { opacity: 0, y: 4 },
//           { opacity: 1, y: 0, stagger: 0.02, color:"#002a58",  duration: 0.25, ease: "power1.out" },
//           "-=0.2"
//         );
//         tl.to(titleCursor, { opacity: 0, duration: 0.3, delay: 0.2 });
//       }

//       if (lineSeparator) {
//         tl.fromTo(lineSeparator,
//           { width: "0%" },
//           { width: "64px", duration: 0.5, ease: "power2.inOut" },
//           "-=0.4"
//         );
//       }

//       if (quoteWords.length > 0) {
//         tl.fromTo(quoteWords,
//           { opacity: 0, y: 10 },
//           { opacity: 1, y: 0, stagger: 0.03, duration: 0.5, ease: "power2.out" },
//           "-=0.2"
//         );
//       }

//       if (paragraphs.length > 0) {
//         tl.fromTo(paragraphs,
//           { opacity: 0, y: 15 },
//           { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "power2.out" },
//           "-=0.2"
//         );
//       }

//       if (signature) {
//         tl.fromTo(signature,
//           { opacity: 0, x: -20 },
//           { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
//           "-=0.3"
//         );
//       }

//       if (seal) {
//         tl.fromTo(seal,
//           { opacity: 0, scale: 0.5, rotation: -45 },
//           { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.5)" },
//           "-=0.4"
//         );
//       }
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const titleText = "Message from the Director";
//   const titleWords = titleText.split(" ");
//   const quoteText = "At SmartBrains, our journey has always been guided by a simple belief: innovation must create meaningful impact.";
//   const quoteWords = quoteText.split(" ");

//   return (
//     <div ref={containerRef} className="lg:col-span-7 z-20 relative mt-6 lg:mt-0">
//       <div className="director-card opacity-0 p-8 md:p-12 bg-white/95 dark:bg-[#111416]/95 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md space-y-8 relative">
//         <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 dark:border-primary-fixed-dim/20 rounded-tl-3xl pointer-events-none" />
//         <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 dark:border-primary-fixed-dim/20 rounded-br-3xl pointer-events-none" />
//         <div className="absolute -top-8 right-8 text-[120px] text-primary/5 dark:text-primary-fixed-dim/5 font-serif leading-none select-none pointer-events-none">
//           “
//         </div>
//         <div className="space-y-3 relative z-10">
//           <span className="director-tag opacity-0 inline-block text-[10px] tracking-widest font-extrabold text-primary dark:text-[#a9c7ff] uppercase bg-primary/5 dark:bg-[#a9c7ff]/15 px-3 py-1 rounded-md">
//             DIRECTOR'S MESSAGE
//           </span>
//           <h2 className="director-title font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#0b4e95] to-blue-500 dark:from-[#a9c7ff] dark:to-white tracking-tight leading-tight mt-2 flex flex-wrap">
//             {titleWords.map((word, wordIndex) => (
//               <span key={wordIndex} className="inline-block whitespace-nowrap">
//                 {word.split("").map((char, charIndex) => (
//                   <span key={charIndex} className="char-span opacity-0 inline-block">
//                     {char}
//                   </span>
//                 ))}
//                 {wordIndex < titleWords.length - 1 && (
//                   <span className="char-span opacity-0 inline-block">{"\u00A0"}</span>
//                 )}
//               </span>
//             ))}
//             <span className="cursor-span opacity-0 inline-block text-primary dark:text-[#a9c7ff] font-normal ml-0.5 animate-pulse">
//               |
//             </span>
//           </h2>
//           <div className="director-line w-0 h-1 bg-gradient-to-r from-primary to-blue-500 dark:from-[#a9c7ff] dark:to-white rounded-full" />
//         </div>
//         <div className="relative pl-6 border-l-4 border-primary dark:border-[#a9c7ff] py-1">
//           <p className="director-quote font-serif italic text-lg sm:text-xl text-slate-800 dark:text-slate-100 leading-relaxed flex flex-wrap gap-x-1.5">
//             {quoteWords.map((word, index) => (
//               <span key={index} className="word-span opacity-0 inline-block">
//                 {word}
//               </span>
//             ))}
//           </p>
//         </div>
//         <div className="space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
//           <p className="director-para opacity-0 text-justify">
//             Over the years, we have successfully diversified into technology services, workforce solutions, skill development, infrastructure projects, agritech innovations, and educational initiatives. Our growth reflects our commitment to delivering excellence while creating opportunities for individuals, organizations, and communities.
//           </p>
//           <p className="director-para opacity-0 text-justify">
//             As we move forward, we remain focused on building sustainable businesses, empowering youth through skills and employment, and enabling organizations to thrive in an increasingly digital world.
//           </p>
//           <p className="director-para opacity-0 font-normal text-primary dark:text-[#a9c7ff]">
//             We thank our clients, partners, employees, and stakeholders for their continued trust and support.
//           </p>
//         </div>
//         <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-6 relative z-10">
//           <div className="director-signature opacity-0 space-y-1">
//             <div className="mb-1">
//               <svg className="w-32 h-10 text-primary dark:text-[#a9c7ff] opacity-85" viewBox="0 0 140 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M15 28c5-14 8-18 12-4s1 12 5 8 5-8 7-2 1 6 5 4 4-8 7-2 4 10 9 6-12 11-6M70 24c8-10 11-13 14-3s1 10 3 6 4-6 6-2 1 6 4 4c5-5 8-8 11-1 2 4 3 6 7 2" strokeWidth="2.2" />
//                 <path d="M12 32c25-3 55-4 85-2 10 0 18-1 25-4" strokeWidth="1" opacity="0.5" />
//               </svg>
//             </div>
//             <h4 className="font-serif text-xl font-bold text-primary dark:text-[#a9c7ff]">
//               Mr. Ankit Gupta
//             </h4>
//             <span className="block text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
//               Director, SMART BRAINS ENGINEERS & TECHNOLOGISTS PVT. LTD.
//             </span>
//           </div>
//           <div className="director-seal opacity-0 w-16 h-16 text-primary dark:text-[#a9c7ff] pointer-events-none relative flex items-center justify-center">
//             <div className="absolute inset-0 rounded-full border border-dashed border-current animate-spin" style={{ animationDuration: '45s' }} />
//             <img src={WaterMark} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const AboutPage = () => {
  const animRef = useScrollAnimation();
  const countRef = useCountUp();
  const [showCoreTeam, setShowCoreTeam] = useState(false);
  const [activeDivision, setActiveDivision] = useState(0);
  const coreTeamRef = useRef(null);

  useEffect(() => {
    if (showCoreTeam && coreTeamRef.current) {
      const timer = setTimeout(() => {
        coreTeamRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showCoreTeam]);

  const handleCloseCoreTeam = () => {
    const leadershipSection = document.getElementById("leadership");
    if (leadershipSection) {
      leadershipSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Set a slight delay before triggering collapse to let scroll finish/start naturally
    setTimeout(() => {
      setShowCoreTeam(false);
    }, 200);
  };

  const [hoveredStateId, setHoveredStateId] = useState(null);
  const [selectedStateId, setSelectedStateId] = useState("up");
  // Active states list from the slide image
  const activeStatesList = [
    { name: "Uttar Pradesh", id: "up", details: "Key regional hub with major staffing pipelines, IT initiatives, and operations based in Noida." },
    { name: "Delhi", id: "dl", details: "Corporate management hub, digital IT systems integration, and critical partner staffing operations." },
    { name: "Bihar", id: "br", details: "Large-scale skill development training centers and government-sponsored youth empowerment projects." },
    { name: "Jharkhand", id: "jh", details: "CSR initiatives, sustainable local vocational skilling, and livelihood enhancement programs." },
    { name: "Assam", id: "as", details: "STEAM educational kits rollout and school curriculum-based training initiatives." },
    { name: "Arunachal Pradesh", id: "ar", details: "STEAM school project execution, vocational training, and development centers." },
    { name: "Himachal Pradesh", id: "hp", details: "State-wide skill training drives, professional coaching, and education support." },
    { name: "Uttarakhand", id: "ut", details: "Infrastructure staffing support, earthwork project consulting, and local skilling programs." },
    { name: "Madhya Pradesh", id: "mp", details: "On-site staffing solutions, industrial plant engineering support, and talent sourcing." },
    { name: "Odisha", id: "or", details: "Heavy infrastructure logistics management, staffing, and civil construction consulting." },
    { name: "Maharashtra", id: "mh", details: "Enterprise IT solutions delivery, consultancy staffing, and financial core operations." },
    { name: "Jammu & Kashmir", id: "jk", details: "Special government skilling programs, youth capability training, and technical training camps." },
    { name: "Rajasthan", id: "rj", details: "CSR programs, solar energy infrastructure staffing, and rural community skilling." },
    { name: "Karnataka", id: "ka", details: "IT & ITeS services consulting, high-tech staffing services, and technical talent acquisition." },
    { name: "Punjab", id: "pb", details: "Technical institutes collaboration, skill assessment programs, and state coaching centers." },
    { name: "Telangana", id: "tg", details: "IT/ITeS support services, software team staffing, and vendor management." },
    { name: "Andhra Pradesh", id: "ap", details: "Industrial talent placement services, blue-collar payrolling, and local training centers." }
  ];

  const activeStateIds = activeStatesList.map(s => s.id);
  const activeStateNames = activeStatesList.map(s => s.name.toLowerCase());

  // Function to check if a location from the map data is an active footprint state
  const isStateActive = (loc) => {
    return activeStateIds.includes(loc.id.toLowerCase()) || activeStateNames.includes(loc.name.toLowerCase());
  };

  // Find details for a state by id or name
  const getStateInfo = (idOrName) => {
    if (!idOrName) return null;
    return activeStatesList.find(
      s => s.id.toLowerCase() === idOrName.toLowerCase() || s.name.toLowerCase() === idOrName.toLowerCase()
    );
  };

  const currentInspectorId = hoveredStateId || selectedStateId;
  const currentInspectorInfo = getStateInfo(currentInspectorId) || activeStatesList[0];

  const [tooltipText, setTooltipText] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left + 15,
      y: e.clientY - rect.top - 35
    });
  };

  const getDivisionDesc = (title) => {
    if (title.includes("AGRITECH")) return "Revolutionizing agriculture with modern technology, IoT monitoring, and hydroponic cultivation setups.";
    if (title.includes("SOLAR")) return "Clean energy infrastructure offering robust solar installations, grid integration, and net metering solutions.";
    if (title.includes("EPC")) return "Comprehensive engineering, procurement, construction, and project management for energy sectors.";
    if (title.includes("IT &")) return "Custom software development, cloud infrastructure management, and digital transformation solutions.";
    if (title.includes("SKILLING")) return "Livelihood-linked vocational training, skill assessments, certifications, and placement assistance.";
    if (title.includes("STEAM")) return "Advanced robotics labs, STEM curricula, teacher training, and innovative labs for schools.";
    if (title.includes("CSR")) return "Sustainable community development, educational support, healthcare programs, and environmental initiatives.";
    if (title.includes("STAFFING")) return "End-to-end workforce staffing, executive search, permanent placement, and contract employment.";
    if (title.includes("CONSTRUCTION")) return "Industrial civil engineering, excavation, site development, and turnkey structural designs.";
    return "";
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        .accordion-card {
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1), flex 0.8s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s ease, box-shadow 0.5s ease;
        }
        .accordion-image {
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
        }
        .progress-thumb {
          transition: left 0.8s cubic-bezier(0.16, 1, 0.3, 1), width 0.5s ease;
        }
      `}</style>
      <main
        className="mt-20 bg-background dark:bg-[#0c0e0f] text-on-surface"
        ref={(el) => {
          animRef.current = el;
          countRef.current = el;
        }}
      >
        {/* Hero Section */}
        <section className="relative min-h-[550px] lg:min-h-[600px] py-16 lg:py-24 flex items-center overflow-hidden bg-primary text-white">
          {/* Animated Background blur/glow blobs */}
        

          <div className="relative z-10 max-w-[1280px] mx-auto px-gutter w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Typography & Text */}
              <div className="lg:col-span-7 space-y-6">
                <div data-animate="fade-up" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#a9c7ff] backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a9c7ff] animate-ping" />
                  Established 2009
                </div>
                <h3
                  data-animate="fade-up"
                  data-animate-delay="0.1"
                  className="font-headline-xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
                >
                  Innovating Businesses,  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white font-extrabold">Empowering People</span> &amp;Transforming Communities
                </h3>
                <p
                  data-animate="fade-up"
                  data-animate-delay="0.2"
                  className="text-base md:text-lg text-slate-300 font-light max-w-xl leading-relaxed"
                >
                  SmartBrains bridges industry needs with innovative education to build future-ready professionals.
                </p>
                <div data-animate="fade-up" data-animate-delay="0.3" className="flex flex-wrap gap-4 pt-2">
                  {/* <a href="#expertise" className="px-5 py-2.5 bg-white text-[#002a58] hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold rounded-lg text-sm shadow-md">
                    Explore Verticals
                  </a> */}
                  <Link to ="contact" className="px-5 py-2.5 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold rounded-lg text-sm backdrop-blur-md">
                    Contact Us
                  </Link>
                </div>
              </div>
  {/* Dynamic Background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="absolute w-[500px] h-[500px] -top-10 -right-10 text-white" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2 4" />
          </svg>
          <svg className="absolute w-[400px] h-[400px] -bottom-20 -left-20 text-white" viewBox="0 0 100 100" fill="currentColor">
            <rect x="10" y="10" width="80" height="80" rx="10" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 6" />
          </svg>
        </div>
            </div>
          </div>
        </section>

        {/* Corporate Overview Section */}
        <section className="py-20 max-w-[1280px] mx-auto px-gutter">
          {/* SmartBrains | InHydro Partner Header Block */}
          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-6 mb-12 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#002a58] dark:text-white leading-none">SmartBrains</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mt-1">Engineers & Technologist Pvt. Ltd.</span>
              </div>
              <div className="h-10 w-[1.5px] bg-slate-300 dark:bg-slate-700 mx-1" />
              <div className="flex items-center gap-1.5 bg-green-500/5 dark:bg-green-500/10 px-3 py-1 rounded-xl border border-green-500/10">
                <span className="text-lg font-black text-green-600 dark:text-green-400 tracking-tight">InHydro</span>
                <span className="text-[8px] font-bold text-slate-400 align-super">TM</span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-widest leading-none mb-1">Innovating Today</span>
              <span className="text-sm font-bold text-[#002a58] dark:text-[#a9c7ff]">for a Sustainable Tomorrow</span>
            </div>
          </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Heading, Description & Stats */}
            <div className="lg:col-span-5 space-y-7 lg:sticky lg:top-28">
              <div data-animate="fade-up">
                <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-extrabold bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 px-2.5 py-0.5 rounded">
                  About Us_
                </span>
                <h2 className="text-3xl md:text-4xl text-[#002a58] dark:text-white mt-3 font-extrabold tracking-tight leading-tight uppercase">
                  Diversified Global Solutions_
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#002a58] to-blue-500 dark:from-[#a9c7ff] dark:to-white mt-2 rounded-full" />
              </div>

              <div
                data-animate="fade-up"
                data-animate-delay="0.1"
                className="text-[14px] md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 text-justify font-normal"
              >
                <p>
                  SmartBrains Engineers & Technologist Pvt. Ltd. is a diversified organization delivering innovative solutions across multiple business domains. Since our inception in <strong>2009</strong>, we have been committed to excellence, client satisfaction, and sustainable growth, working with reputable partners and clients across India.
                </p>
              </div>

              {/* Counters Grid */}
              <div data-animate="stagger-up" className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  {
                    num: "16+",
                    label: "Years of Experience",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    num: "16+",
                    label: "States Presence",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    num: "400+",
                    label: "Skilled Professionals",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    num: "₹60+ Cr",
                    label: "Revenue (FY 2024-25)",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )
                  },
                  {
                    num: "ISO",
                    label: "Certified Company",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#002a58]/5 dark:bg-[#a9c7ff]/5 border border-slate-200/50 dark:border-slate-800/50 hover:bg-[#002a58]/10 dark:hover:bg-[#a9c7ff]/10 hover:scale-[1.03] transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-[#002a58] dark:bg-[#a9c7ff] text-white dark:text-[#002a58] flex items-center justify-center mb-2 shadow-sm">
                      {stat.icon}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#002a58] dark:text-white leading-none">{stat.num}</div>
                    <div className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Glowing skyline graphic container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#002a58] to-[#001229] p-5 shadow-lg border border-slate-800 flex flex-col justify-end min-h-[160px] group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-blue-500/20 blur-[50px] pointer-events-none group-hover:scale-125 transition-all duration-700" />
                
                <div className="absolute bottom-0 right-0 left-0 h-28 opacity-25 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none">
                  <svg className="w-full h-full text-blue-400" viewBox="0 0 400 100" preserveAspectRatio="none" fill="currentColor">
                    <rect x="10" y="40" width="15" height="60" />
                    <rect x="30" y="20" width="20" height="80" />
                    <rect x="55" y="50" width="12" height="50" />
                    <rect x="70" y="30" width="25" height="70" />
                    <rect x="100" y="10" width="18" height="90" />
                    <rect x="125" y="45" width="15" height="55" />
                    <rect x="145" y="25" width="22" height="75" />
                    <rect x="175" y="35" width="14" height="65" />
                    <rect x="195" y="15" width="25" height="85" />
                    <rect x="225" y="50" width="15" height="50" />
                    <rect x="245" y="30" width="20" height="70" />
                    <rect x="270" y="40" width="18" height="60" />
                    <rect x="295" y="20" width="25" height="80" />
                    <rect x="325" y="55" width="12" height="45" />
                    <rect x="340" y="25" width="20" height="75" />
                    <rect x="365" y="35" width="25" height="65" />
                    <circle cx="40" cy="20" r="2" fill="#60a5fa" />
                    <circle cx="110" cy="10" r="2.5" fill="#60a5fa" />
                    <circle cx="205" cy="15" r="2" fill="#60a5fa" />
                    <circle cx="305" cy="20" r="2.5" fill="#60a5fa" />
                    <circle cx="350" cy="25" r="2" fill="#60a5fa" />
                    <line x1="40" y1="20" x2="110" y2="10" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="110" y1="10" x2="205" y2="15" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="205" y1="15" x2="305" y2="20" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="305" y1="20" x2="350" y2="25" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="2,2" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] tracking-widest font-extrabold text-[#a9c7ff] uppercase">Nationwide Presence</span>
                  </div>
                  <h4 className="text-md font-bold text-white tracking-tight">Pan-India Strategic Network</h4>
                  <p className="text-[11px] text-slate-300 font-light mt-1 max-w-sm">
                    Connecting industrial projects, green technology infrastructure, and youth training centers across the nation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Image Section */}
            <div className="lg:col-span-7 w-full h-full min-h-[400px] lg:min-h-[480px]" data-animate="scale-up">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/40 shadow-2xl group bg-[#002a58]/5 dark:bg-[#a9c7ff]/5 backdrop-blur-sm flex flex-col justify-between">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-blue-500/10 dark:bg-blue-400/15 blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-emerald-500/5 dark:bg-emerald-400/10 blur-2xl pointer-events-none" />
                
                {/* Image */}
                <img
                  alt="SmartBrains Industrial Engineering & Tech"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRGS7sikvrZMV-qPQyQ-R4F0QlJKxun8vk_Uy0jv4nMZN6eS1utAjOoqMjcfRx-8KfAU4mwYpQEUOzIvb1qWeg0a0HmPcgY6fYgJydbadC5WHQMU0cY6jUTndp7Cg3gJyvTifrlUTJ6M_XubLoCcHyRs4LkSg-PkWAfgAkYB2EDB-FQ_Gc9nL5g3zjly_5TMe9AzSkKujKpdtkOPiOruEoqqvLxalZq7I8GkTyUn_VH_CL-8iN9Dnp0g2rVDcafQfeN_b7JjRl3w"
                />
                
                {/* Overlay Vignette / Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Text Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] tracking-widest font-extrabold text-[#a9c7ff] uppercase">Industrial Scale Execution</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                    Diversified Engineering &amp; Technologist Projects
                  </h3>
                  <p className="text-[12px] md:text-sm text-slate-200 font-light mt-2 max-w-xl leading-relaxed">
                    Unifying heavy industrial engineering, state-of-the-art solar installations, IT service integrations, and customized skilling solutions across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navy Highlight Footer Strip */}
          <div className="mt-12 bg-[#001c3d] text-white rounded-2xl p-5 md:p-6 shadow-lg border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,144,255,0.08),transparent)] pointer-events-none" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 relative z-10">
              <div className="flex items-start gap-3 pl-0 sm:pl-3 first:pl-0">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#a9c7ff] shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#a9c7ff] mb-1">Diverse Expertise</h5>
                  <p className="text-[11px] text-slate-300 font-light leading-relaxed">Across multiple domains and industrial technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 pt-4 sm:pt-0 pl-0 sm:pl-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#a9c7ff] shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#a9c7ff] mb-1">Innovative Solutions</h5>
                  <p className="text-[11px] text-slate-300 font-light leading-relaxed">Technology driven approach for sustainable global impact.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 sm:pt-0 pl-0 sm:pl-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#a9c7ff] shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16V5" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#a9c7ff] mb-1">Trusted Partner</h5>
                  <p className="text-[11px] text-slate-300 font-light leading-relaxed">Serving government, PSU and major enterprise clients.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 sm:pt-0 pl-0 sm:pl-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#a9c7ff] shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#a9c7ff] mb-1">Committed to Excellence</h5>
                  <p className="text-[11px] text-slate-300 font-light leading-relaxed">Delivering quality, reliability, and long-term business growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-28 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-[#0c0e0f] dark:via-[#111416]/80 dark:to-[#0c0e0f] border-b border-outline-variant/15 relative overflow-hidden">
          {/* Decorative grid pattern & abstract circles */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] bg-[radial-gradient(#002a58_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary-fixed-dim/2 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-400/2 blur-[120px] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

              {/* Left Column: Visual Callout (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary to-primary-container dark:from-[#121517] dark:to-[#080b0c] text-white border border-white/10 shadow-2xl relative overflow-hidden group min-h-[400px]">
                {/* Background grid representation */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
                {/* Glowing blob inside card */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 dark:bg-primary-fixed-dim/10 blur-[60px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-[#a9c7ff] backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a9c7ff] animate-pulse" />
                    Innovating Today
                  </div>
                  <h3 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
                 Innovating Today For A  Sustainable<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">
                      Tomorrrow
                    </span>
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-sm">
                    Through technology-driven integrated solutions, we aim to bridge gaps, build skills, and catalyze long-term sustainable growth for communities and enterprises alike.
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  {/* <span className="uppercase tracking-widest font-bold">Purpose Driven</span> */}
                  {/* <span className="text-[#a9c7ff] font-semibold flex items-center gap-1">
                    SmartBrains
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span> */}
                </div>
              </div>

              {/* Right Column: 9 Business Divisions Accordions (7 Cols) */}
              <div className="lg:col-span-7" data-animate="fade-up">
                <div className="border-t border-slate-200 dark:border-slate-800/80">
                  {divisionsListData.map((div, idx) => {
                    const isOpen = activeDivision === idx;
                    return (
                      <div 
                        key={idx}
                        className="border-b border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0c0e0f] overflow-hidden group"
                      >
                        {/* Accordion Header */}
                        <div 
                          onClick={() => setActiveDivision(isOpen ? null : idx)}
                          className={`flex items-center justify-between py-5 md:py-6 px-4 md:px-6 cursor-pointer select-none transition-colors duration-300 ${
                            isOpen ? 'bg-slate-50/50 dark:bg-[#111416]' : 'hover:bg-slate-50/30 dark:hover:bg-[#111416]/50'
                          }`}
                        >
                          <div className="flex items-center gap-5 md:gap-6">
                            {/* Minimal Icon */}
                            <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                              isOpen 
                                ? 'text-primary dark:text-primary-fixed-dim' 
                                : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                            }`}>
                              {div.icon}
                            </div>
                            
                            <h4 className={`text-base md:text-[19px] font-medium tracking-tight transition-colors duration-300 ${
                              isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                            }`}>
                              {div.title}
                            </h4>
                          </div>
                          
                          {/* Minimal Chevron */}
                          <div className={`flex-shrink-0 flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? 'text-primary dark:text-primary-fixed-dim rotate-180' : 'text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400'
                          }`}>
                            <svg 
                              className="w-5 h-5"
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        {/* Expandable Accordion Panel */}
                        <div 
                          className={`transition-all duration-300 ease-in-out overflow-hidden bg-slate-50/50 dark:bg-[#111416] ${
                            isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                          }`}
                        >
                          <div className="pb-6 px-4 md:px-6 md:pl-[4.5rem] space-y-6">
                            {/* Description */}
                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl font-light">
                              {getDivisionDesc(div.title)}
                            </p>

                            {/* Minimal Sub-services List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                              {div.items.map((item, itemIdx) => (
                                <div 
                                  key={itemIdx}
                                  className="flex items-start gap-3 group/sub cursor-pointer"
                                >
                                  <div className="mt-0.5 flex-shrink-0 text-slate-300 dark:text-slate-600 group-hover/sub:text-primary dark:group-hover/sub:text-primary-fixed-dim transition-colors duration-300">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                  <span className="text-sm text-slate-700 dark:text-slate-300 group-hover/sub:text-primary dark:group-hover/sub:text-primary-fixed-dim transition-colors duration-300 leading-snug">
                                    {item.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white dark:from-[#121517] dark:to-[#0c0e0f] border-b border-outline-variant/15 relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/2 dark:bg-primary-fixed-dim/1 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
            {/* Section Header */}
            <div className="relative text-center max-w-2xl mx-auto mb-12" data-animate="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/60 text-[9px] font-bold uppercase tracking-widest text-primary dark:text-primary-fixed-dim mb-3 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-fixed-dim animate-pulse" />
                Our Foundation
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary dark:text-white mt-1.5 font-black tracking-tight uppercase leading-snug">
                OUR CORE VALUES
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-500 dark:from-primary-fixed-dim dark:to-white mx-auto mt-4 rounded-full shadow-sm" />
            </div>

            {/* Compact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuesList.map((item) => (
                <div
                  key={item.num}
                  className="group relative flex flex-col items-start text-left p-5 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                  data-animate="fade-up"
                >
                  {/* Dynamic top highlight indicator line */}
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary to-blue-500 dark:from-primary-fixed-dim dark:to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Watermark Number: Small & Subtle Outline */}
                  <span className="absolute top-4 right-5 text-2xl font-black text-slate-100 dark:text-slate-900/15 group-hover:text-primary dark:group-hover:text-primary select-none pointer-events-none transition-colors duration-300 font-mono tracking-tighter">
                    {item.num}
                  </span>

                  {/* Flex Header with Icon and Title */}
                  <div className="flex items-center gap-3.5 mb-3.5 pr-8">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/5 dark:bg-primary-fixed-dim/10 border border-slate-200/40 dark:border-slate-800/60 text-primary dark:text-primary-fixed-dim group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary-fixed-dim dark:group-hover:text-primary transition-all duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-[8px] tracking-widest font-extrabold text-slate-400 dark:text-slate-500 uppercase">
                        {item.tag}
                      </span>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <AboutCoreValues />
        {/* Our Leadership Team Section */}
        <AboutLeadership />
        <AboutCoreTeam />
        {/* Footprints & Highlights Section */}
        <section id="footprints" className="py-20 bg-gradient-to-b from-white to-[#f8f9fa] dark:from-[#0c0e0f] dark:to-[#080b0c] border-b border-outline-variant/20">


          <div className="max-w-[1280px] mx-auto px-gutter">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16" data-animate="fade-up">
              <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-bold">
                National Presence
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#002a58] dark:text-white mt-2 font-bold">
                Key Highlights &amp; Our Footprints
              </h2>
              <div className="w-16 h-1 bg-[#002a58] dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
            </div>
            {/* Highlights Grid (Metrics from the slide) */}
            <div data-animate="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Card 1: Incorporated */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">Established</div>
                  <div className="text-2xl font-extrabold text-[#002a58] dark:text-white mt-0.5">2009</div>
                </div>
              </div>

              {/* Card 2: Turnover I MAKE CHANGES HERE */} 
              <div className="p-6 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 flex items-center justify-center text-[#002a58] dark:text-[#a9c7ff]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16V5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">Clients</div>
                  <div className="text-2xl font-extrabold text-[#002a58] dark:text-white mt-0.5">540+</div>
                  {/* <div className="text-[10px] text-slate-400">FY - 2024 - 25</div> */}
                </div>
              </div>

              {/* Card 3: Employees (Onroll) */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">Onroll Team</div>
                  <div className="text-2xl font-extrabold text-[#002a58] dark:text-white mt-0.5">200+</div>
                </div>
              </div>


              {/* Card 4: Outsourced Employees */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">Outsourced Site Team</div>
                  <div className="text-2xl font-extrabold text-[#002a58] dark:text-white mt-0.5">500+</div>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-lg">
              {[
                {
                  title: "15+ Years of Excellence",
                  desc: "Delivering innovative business solutions across diverse industries.",
                  icon: (
                    <svg className="w-6 h-6 text-[#002a58] dark:text-[#a9c7ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  bg: "bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/10"
                },
                {
                  title: "Multi-Domain Expertise",
                  desc: "Technology, Staffing, Education, Agriculture, Infrastructure & CSR.",
                  icon: (
                    <svg className="w-6 h-6 text-[#002a58] dark:text-[#a9c7ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  bg: "bg-indigo-500/5 dark:bg-indigo-500/10 border-indigo-500/10"
                },
                {
                  title: "Pan India Operations",
                  desc: "Serving Government, Enterprise and Development Sector Clients.",
                  icon: (
                    <svg className="w-6 h-6 text-[#002a58] dark:text-[#a9c7ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  bg: "bg-purple-500/5 dark:bg-purple-500/10 border-purple-500/10"
                },
                {
                  title: "Sustainable Growth",
                  desc: "Creating long-term value through innovation and social impact.",
                  icon: (
                    <svg className="w-6 h-6 text-[#002a58] dark:text-[#a9c7ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  bg: "bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/10"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#002a58] to-blue-500 dark:from-[#a9c7ff] dark:to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className={`p-3 rounded-xl mb-4 flex items-center justify-center border ${item.bg}`}>
                    {item.icon}
                  </div>

                  <h4 className="text-base font-bold text-slate-800 dark:text-white mb-2 tracking-tight group-hover:text-[#002a58] dark:group-hover:text-[#a9c7ff] transition-colors duration-300">
                    {item.title}
                  </h4>

                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Split layout: State List & Interactive Map */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left Column (State list & detail panel) */}
              <div className="lg:col-span-5 space-y-6" data-animate="fade-right">

                {/* State list cards selector */}
                <div className="bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 p-5 rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-4">
                    Active States Footprint ({activeStatesList.length})
                  </h3>
                  <div className="flex flex-wrap gap-2 max-h-[220px] overflow-y-auto pr-1">
                    {activeStatesList.map((state) => {
                      const isHovered = hoveredStateId === state.id || selectedStateId === state.id;
                      return (
                        <button
                          key={state.id}
                          onMouseEnter={() => setHoveredStateId(state.id)}
                          onMouseLeave={() => setHoveredStateId(null)}
                          onClick={() => setSelectedStateId(state.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${isHovered
                            ? "bg-[#002a58] text-white border-primary shadow-sm scale-105"
                            : "bg-[#002a58]/5 dark:bg-[#a9c7ff]/5 text-slate-600 dark:text-slate-300 border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                            }`}
                        >
                          {state.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* State Inspector Panel */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#001c3d] to-[#002a58] dark:from-[#121517] dark:to-[#080b0c] text-white p-6 rounded-2xl shadow-lg border border-white/5 min-h-[180px] flex flex-col justify-between">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#a9c7ff] font-bold">Active Footprint Inspector</span>
                    <h3 className="font-bold text-2xl mt-1 tracking-tight text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {currentInspectorInfo.name}
                    </h3>
                    <p className="text-sm text-slate-200 font-light mt-3 leading-relaxed">
                      {currentInspectorInfo.details}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span>SmartBrains Operations</span>
                    <span className="text-[#a9c7ff] font-semibold">Status: Active</span>
                  </div>
                </div>

              </div>

              {/* Right Column: India SVG Map */}
              <div className="lg:col-span-7 flex flex-col items-center bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 p-6 rounded-2xl shadow-sm relative group" data-animate="fade-left">

                {/* SVG India Map Container */}
                <div
                  className="w-full relative flex justify-center max-h-[580px]"
                  onMouseMove={handleMouseMove}
                >
                  <svg
                    className="w-full h-auto max-w-[480px]"
                    viewBox={indiaMap.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {indiaMap.locations.map((loc) => {
                      const active = isStateActive(loc);
                      const isHoveredOrSelected = hoveredStateId === loc.id || selectedStateId === loc.id || (hoveredStateId === null && selectedStateId === loc.id);

                      return (
                        <path
                          key={loc.id}
                          d={loc.path}
                          name={loc.name}
                          id={loc.id}
                          className={`transition-all duration-200 stroke-white dark:stroke-[#121517] stroke-[1] outline-none ${active
                            ? isHoveredOrSelected
                              ? "fill-[#004080] dark:fill-[#a9c7ff] scale-[1.005] cursor-pointer drop-shadow-md"
                              : "fill-[#002a58]/80 dark:fill-[#a9c7ff]/40 hover:fill-[#004080] dark:hover:fill-[#a9c7ff] cursor-pointer"
                            : "fill-[#002a58]/10 dark:fill-[#001229] hover:fill-[#002a58]/20 dark:hover:fill-[#001e40]"
                            }`}
                          onMouseEnter={() => {
                            const found = active ? (getStateInfo(loc.id) || getStateInfo(loc.name)) : null;
                            const statusText = active ? "Active Center" : "Planning Phase";
                            const detailText = found ? found.details : "Strategic planning and regional exploration for future vocational skilling and industrial service centers.";

                            setTooltipText(
                              <div className="w-64 p-3 bg-white dark:bg-[#121517] text-slate-800 dark:text-white rounded-xl shadow-xl border border-slate-200/80 dark:border-slate-800/80 text-left">
                                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-2">
                                  <span className="font-bold text-xs text-[#002a58] dark:text-[#a9c7ff]">{loc.name}</span>
                                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${active
                                    ? "bg-green-500/10 text-green-600 dark:bg-green-400/15 dark:text-green-400"
                                    : "bg-[#002a58]/10 text-[#002a58] dark:bg-[#001229] dark:text-[#a9c7ff]"
                                    }`}>
                                    {statusText}
                                  </span>
                                </div>
                                <p className="text-[10px] font-normal leading-relaxed text-slate-500 dark:text-slate-300">
                                  {detailText}
                                </p>
                              </div>
                            );

                            if (active && found) {
                              setHoveredStateId(found.id);
                            }
                          }}
                          onMouseLeave={() => {
                            setTooltipText("");
                            setHoveredStateId(null);
                          }}
                          onClick={() => {
                            if (active) {
                              const found = getStateInfo(loc.id) || getStateInfo(loc.name);
                              if (found) {
                                setSelectedStateId(found.id);
                              }
                            }
                          }}
                        />
                      );
                    })}
                  </svg>

                  {tooltipText && (
                    <div
                      style={{
                        position: "absolute",
                        left: `${tooltipPos.x}px`,
                        top: `${tooltipPos.y}px`,
                        pointerEvents: "none",
                        zIndex: 50,
                      }}
                      className="transition-all duration-75"
                    >
                      {tooltipText}
                    </div>
                  )}
                </div>

                {/* Map Legend */}
                <div className="w-full flex items-center justify-center gap-6 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-[#002a58] dark:bg-[#a9c7ff]/60 border border-slate-200/50" />
                    <span className="text-slate-600 dark:text-slate-400 font-medium">SmartBrains Active Footprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-[#002a58]/15 dark:bg-[#001229] border border-[#002a58]/30 dark:border-[#001e40]" />
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Planning / Exploration</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
