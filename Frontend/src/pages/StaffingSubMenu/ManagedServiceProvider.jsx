import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  Settings,
  Users,
  Activity,
  BarChart2,
  RefreshCw,
  Layers,
  Globe,
  HeartPulse,
  Factory,
  Briefcase,
  Radio,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Building2,
  Search,
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  Eye,
  MonitorCheck,
  Cpu,
  Clock4,
  Sparkles,
  Award
} from "lucide-react";

// ─── Animation Presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

function SectionBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 dark:bg-primary/25 text-primary dark:text-[#a9c7ff] border border-primary/20 dark:border-[#a9c7ff]/20 mb-4">
      <Sparkles className="w-3 h-3 text-primary dark:text-[#a9c7ff]" />
      {children}
    </span>
  );
}

function SectionHeading({ children, className = "", light = false }) {
  return (
    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight ${light ? "text-white" : "text-slate-900 dark:text-white"} ${className}`}>
      {children}
    </h2>
  );
}

// ─── 1. HERO SECTION (Standalone) ─────────────────────────────────────────────
function StandaloneHero() {
  return (
    <section className="relative min-h-[460px] flex items-center bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] text-white overflow-hidden py-14">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
          alt="Managed Service Provider (MSP)"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <SectionBadge>Total Workforce Governance</SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight uppercase text-white">
            Managed Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">Provider</span> (MSP)
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
            End-to-end management of contingent talent, temporary staffing ecosystems, contractor payroll, and vendor networks — optimizing enterprise spend, compliance, and delivery performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore MSP Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. WHAT WE MANAGE ────────────────────────────────────────────────────────
const services = [
  {
    icon: Settings,
    title: "Operations Governance",
    desc: "Centralized day-to-day management of contingent talent, ensuring strict SLA enforcement and continuous support.",
  },
  {
    icon: Users,
    title: "Vendor Management (VMS)",
    desc: "Single-point coordination of multiple staffing suppliers, standardizing rates, contracts, and quality benchmarks.",
  },
  {
    icon: MonitorCheck,
    title: "Service Health Monitoring",
    desc: "Real-time tracking of contractor deliverables, timekeeping, compliance adherence, and escalation matrices.",
  },
  {
    icon: BarChart2,
    title: "Spend & Rate Analytics",
    desc: "Optimizing contingent labor costs through rate-card normalization, volume discounting, and bill-rate transparency.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Delivery Cycles",
    desc: "Reliable, uninterrupted operational workflows that minimize downtime and prevent capacity bottlenecks.",
  },
  {
    icon: Layers,
    title: "Elastic Scalability",
    desc: "Agile capability expansion that scales alongside corporate initiatives without burdening internal HR.",
  },
];

function WhatWeManageSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-slate-50/60 dark:bg-[#0c0e0f]/50 transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionBadge>Operational Scope</SectionBadge>
          <SectionHeading>Functions Governed Under Our Managed Model</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            We assume full ownership of contingent workforce governance, liberating leadership to focus on core strategic milestones.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.06}
                className="group relative bg-white dark:bg-slate-900/80 rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary dark:text-[#a9c7ff]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 3. DELIVERY MODEL ────────────────────────────────────────────────────────
const deliverySteps = [
  {
    icon: Search,
    step: "Discover",
    title: "Environment Mapping",
    desc: "Auditing supplier matrices, existing spend baselines, compliance risks, and project timelines.",
  },
  {
    icon: Rocket,
    step: "Deploy",
    title: "Transition & Setup",
    desc: "Seamless onboarding of vendors and contractors onto standardized SLAs with zero project disruption.",
  },
  {
    icon: Activity,
    step: "Manage",
    title: "Program Governance",
    desc: "Active day-to-day oversight of contractor performance, payroll processing, and compliance clearing.",
  },
  {
    icon: RefreshCw,
    step: "Optimize",
    title: "Continuous Savings",
    desc: "Ongoing rate renegotiations, process lean-out, and performance benchmarking to reduce total spend.",
  },
  {
    icon: TrendingUp,
    step: "Scale",
    title: "Strategic Growth",
    desc: "Expanding MSP support to new regional hubs, projects, or business units seamlessly.",
  },
];

function DeliveryModelSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#0c0e0f] overflow-hidden transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionBadge>Execution Framework</SectionBadge>
          <SectionHeading>How Our Managed Service Model Delivers</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A 5-stage transition blueprint ensuring seamless governance, transparency, and cost efficiency.
          </p>
        </motion.div>

        {/* Desktop connected layout */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          <div className="absolute top-8 left-[8%] right-[8%] h-[2px] bg-slate-200 dark:bg-slate-800 z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="absolute top-8 left-[8%] right-[8%] h-[2px] bg-primary dark:bg-[#a9c7ff] z-10"
          />

          {deliverySteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                className="flex flex-col items-center text-center px-2 relative z-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-md font-bold">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-primary dark:text-[#a9c7ff] uppercase tracking-wider mb-1">
                  Stage 0{i + 1} • {s.step}
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-2">{s.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile vertical layout */}
        <div className="lg:hidden flex flex-col gap-6 relative pl-4">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
          {deliverySteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                className="flex gap-5 items-start relative z-10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex-shrink-0 flex items-center justify-center shadow">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="pt-1">
                  <span className="text-xs font-bold text-primary dark:text-[#a9c7ff] uppercase tracking-wider block">
                    Stage 0{i + 1} • {s.step}
                  </span>
                  <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">{s.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 4. STATS / IMPACT ───────────────────────────────────────────────────────
const stats = [
  { target: 24, suffix: "/7", label: "Operational Helpdesk Support" },
  { target: 98, suffix: "%", label: "Contract SLA Adherence" },
  { target: 500, suffix: "+", label: "Enterprise Projects Managed" },
  { target: 20, suffix: "%", label: "Average Contingent Cost Savings" },
];

function Counter({ target, suffix, inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const inc = target / (1600 / 16);
    const id = setInterval(() => {
      cur = Math.min(cur + inc, target);
      setVal(Math.floor(cur));
      if (cur >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);

  return (
    <span className="text-4xl sm:text-5xl font-black text-white tabular-nums leading-none">
      {val}{suffix}
    </span>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#a9c7ff] border border-white/20 mb-4">
            <Award className="w-3.5 h-3.5" /> Quantifiable Governance
          </span>
          <SectionHeading light>Delivering Operational &amp; Financial ROI</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              className="text-center bg-white/10 dark:bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10"
            >
              <Counter target={s.target} suffix={s.suffix} inView={inView} />
              <p className="text-[#a9c7ff] text-sm mt-2 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. INDUSTRIES WE SUPPORT ─────────────────────────────────────────────────
const industries = [
  { icon: Cpu, name: "Information Technology", desc: "IT service desks, DevOps, cloud engineering pods, system integrations" },
  { icon: Factory, name: "Manufacturing & Heavy Engineering", desc: "Plant technicians, safety officers, maintenance teams, QA engineers" },
  { icon: HeartPulse, name: "Healthcare & Life Sciences", desc: "Clinical technicians, lab operators, hospital support infrastructure" },
  { icon: Briefcase, name: "BFSI & Fintech", desc: "Back-office transaction processors, compliance auditors, risk specialists" },
  { icon: Radio, name: "Telecom & Fiber Networks", desc: "Field engineers, NOC monitors, RF survey specialists, infrastructure" },
  { icon: ShoppingBag, name: "Supply Chain & Retail", desc: "Warehouse tech operators, ERP inventory specialists, category leads" },
];

function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-slate-50/60 dark:bg-[#0c0e0f]/50 transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionBadge>Industry Delivery</SectionBadge>
          <SectionHeading>Managed Operations Across Major Verticals</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.07}
                className="flex items-start gap-4 bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary dark:text-[#a9c7ff]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">{ind.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 6. OUTCOMES SECTION ──────────────────────────────────────────────────────
const outcomes = [
  {
    icon: Zap,
    title: "Operational Efficiency",
    metric: "Leaner Execution",
    desc: "Standardized workflows remove vendor duplication, payroll delays, and administrative overhead.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    metric: "Live Governance",
    desc: "Real-time executive dashboards give leadership 100% visibility into headcount, spend, and vendor performance.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    metric: "100% Compliant",
    desc: "All contractors and suppliers are audited against statutory regulations, eliminating co-employment liabilities.",
  },
  {
    icon: TrendingUp,
    title: "Financial Optimization",
    metric: "15-25% Cost Savings",
    desc: "Standardized rate cards and consolidated billing unlock immediate hard-dollar cost reductions.",
  },
];

function OutcomesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#0c0e0f] transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionBadge>Enterprise Value</SectionBadge>
          <SectionHeading>Measurable Benefits of Our MSP Model</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={o.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.08}
                className="bg-slate-50/70 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 text-primary dark:text-[#a9c7ff]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-primary dark:text-[#a9c7ff] uppercase tracking-wider block mb-1">
                  {o.metric}
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-2">{o.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{o.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 7. FINAL CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0c0e0f]/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#a9c7ff] mb-4">
              Focus On Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Transform Your Contingent Workforce Operations
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8 font-light">
              Let Smart Brains assume total responsibility for your vendor and contingent labor ecosystem with SLA-backed accountability.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request an MSP Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TAB EMBED COMPONENT ───────────────────────────────────────────────────────
export function ManagedProvider() {
  return (
    <div className="w-full">
      <WhatWeManageSection />
      <DeliveryModelSection />
      <StatsSection />
      <IndustriesSection />
      <OutcomesSection />
      <CTASection />
    </div>
  );
}

// ─── STANDALONE PAGE COMPONENT ────────────────────────────────────────────────
const ManagedServiceProvider = () => {
  const animRef = useScrollAnimation();

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 transition-colors duration-300" ref={animRef}>
      <StandaloneHero />
      <WhatWeManageSection />
      <DeliveryModelSection />
      <StatsSection />
      <IndustriesSection />
      <OutcomesSection />
      <CTASection />
    </main>
  );
};

export default ManagedServiceProvider;
