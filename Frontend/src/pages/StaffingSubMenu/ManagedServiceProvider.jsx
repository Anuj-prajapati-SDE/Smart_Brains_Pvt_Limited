import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
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
  ChevronRight,
  MonitorCheck,
  Cpu,
  Clock4,
} from "lucide-react";

// ─── Shared Motion ────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.72, ease: "easeOut" } },
};

// ─── Shared Primitives ─────────────────────────────────────────────────────────
function Eyebrow({ children, inverted = false }) {
  return (
    <p className={`text-[11px] font-bold tracking-[0.22em] uppercase mb-3 flex items-center gap-2 ${inverted ? "text-sky-300" : "text-[#1A3A8F]"}`}>
      <span className={`inline-block w-6 h-[2px] rounded-full ${inverted ? "bg-sky-400" : "bg-[#1A3A8F]"}`} />
      {children}
    </p>
  );
}

function H2({ children, inverted = false, className = "" }) {
  return (
    <h2 className={`text-[1.95rem] md:text-[2.55rem] font-bold leading-[1.17] tracking-tight ${inverted ? "text-white" : "text-[#0D1F4E]"} ${className}`}>
      {children}
    </h2>
  );
}

function Lead({ children, inverted = false, className = "" }) {
  return (
    <p className={`text-[0.9375rem] leading-[1.8] ${inverted ? "text-slate-300" : "text-slate-500"} ${className}`}>
      {children}
    </p>
  );
}

function NavyRule() {
  return <span className="block w-10 h-[3px] rounded-full bg-[#1A3A8F] mt-4 mb-7" />;
}

// ─── 1. MSP OVERVIEW ─────────────────────────────────────────────────────────
const overviewCards = [
  {
    icon: Shield,
    label: "Service Ownership",
    sub: "We take full accountability for delivery",
  },
  {
    icon: Clock4,
    label: "Operational Continuity",
    sub: "Always-on managed support model",
  },
  {
    icon: TrendingUp,
    label: "Performance Delivery",
    sub: "SLA-backed outcomes at every stage",
  },
];

function OverviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
          <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://visiontechtechnology.com/assets/images/services/contract-Staffing.jpg"
            alt="Contract Staffing"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>

      <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              TOTAL VENDOR MANAGEMENT
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              MANAGED SERVICE PROVIDER
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              A contingent workforce solution where an external expert assumes full responsibility for managing your temporary staffing, independent contractors, and third-party vendors to optimize spend and compliance
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Contact us button
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
    title: "Operations Support",
    desc: "Day-to-day operational functions managed through a structured support framework with defined SLAs.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Purpose-built teams aligned to your business unit — skilled, trained, and accountable to your outcomes.",
  },
  {
    icon: MonitorCheck,
    title: "Service Monitoring",
    desc: "Continuous oversight of service health, performance metrics, and escalation management.",
  },
  {
    icon: BarChart2,
    title: "Performance Management",
    desc: "Regular reporting cadences, KPI reviews, and improvement actions built into the delivery model.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Delivery",
    desc: "Iterative delivery cycles that keep operations running smoothly without downtime or quality gaps.",
  },
  {
    icon: Layers,
    title: "Scalable Execution",
    desc: "Delivery capacity that grows or contracts with your business without rebuilding internal processes.",
  },
];

function WhatWeManageSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-xl mb-14"
        >
          <Eyebrow>What We Manage</Eyebrow>
          <H2>Service Areas Under<br />Our Managed Delivery</H2>
          <NavyRule />
          <Lead>
            We take ownership of the operational functions that matter most — freeing
            your leadership to focus on strategy, not execution overhead.
          </Lead>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.07}
              className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#1A3A8F]/20 transition-all duration-300"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-[#1A3A8F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] flex items-center justify-center mb-5 group-hover:bg-[#0D1F4E] transition-colors duration-300">
                <s.icon size={20} strokeWidth={1.75} className="text-[#1A3A8F] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[#0D1F4E] font-semibold text-[0.9375rem] mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. DELIVERY MODEL ────────────────────────────────────────────────────────
const deliverySteps = [
  {
    icon: Search,
    step: "Understand",
    desc: "We map your operational environment, stakeholders, service requirements, and performance expectations.",
  },
  {
    icon: Rocket,
    step: "Deploy",
    desc: "Dedicated teams are onboarded, tooled, and integrated into your processes with minimal disruption.",
  },
  {
    icon: Activity,
    step: "Manage",
    desc: "Active oversight of delivery performance, escalations, SLA compliance, and team health.",
  },
  {
    icon: RefreshCw,
    step: "Optimize",
    desc: "Data-driven improvement cycles reduce friction, increase throughput, and raise quality benchmarks.",
  },
  {
    icon: TrendingUp,
    step: "Scale",
    desc: "As your business grows, delivery capacity expands — maintaining quality without rebuilding from scratch.",
  },
];

function DeliveryModelSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Eyebrow>Delivery Model</Eyebrow>
          <H2>How Our Managed Model Works</H2>
          <NavyRule />
          <Lead>
            A five-stage engagement framework that transitions your operations into a
            managed service — structured, measurable, and built to last.
          </Lead>
        </motion.div>

        {/* Desktop: connected blocks in a staggered two-row layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-4 relative">
            {/* Connector line */}
            <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-100" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.3, delay: 0.35, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-[#1A3A8F]"
            />
            {deliverySteps.map((s, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.12}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-white border-[3px] border-[#1A3A8F] flex flex-col items-center justify-center mb-6 shadow-md shadow-[#1A3A8F]/10">
                  <s.icon size={22} strokeWidth={1.7} className="text-[#1A3A8F] mb-1" />
                  <span className="text-[#0D1F4E] font-bold text-[11px] tracking-wide uppercase">{s.step}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-0 relative">
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-slate-100" />
          <div
            className="absolute left-6 top-6 w-[2px] bg-[#1A3A8F] transition-all duration-[1400ms]"
            style={{ height: inView ? "calc(100% - 24px)" : "0" }}
          />
          {deliverySteps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="flex gap-6 pb-10 last:pb-0"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-[#1A3A8F] flex-shrink-0 flex items-center justify-center shadow-md">
                <s.icon size={18} strokeWidth={1.8} className="text-white" />
              </div>
              <div className="pt-2">
                <h4 className="text-[#0D1F4E] font-bold text-sm mb-1">{s.step}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. BUSINESS IMPACT / STATS ───────────────────────────────────────────────
const stats = [
  { target: 24, suffix: "/7", label: "Managed Support", sub: "Always-on operational coverage" },
  { target: 98, suffix: "%", label: "Service Quality", sub: "Consistently maintained across engagements" },
  { target: 500, suffix: "+", label: "Projects Supported", sub: "Across enterprise clients" },
  { target: 90, suffix: "%", label: "Operational Efficiency", sub: "Improvement from baseline" },
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
    <span className="text-5xl md:text-6xl font-bold text-white tabular-nums leading-none">
      {val}{suffix}
    </span>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-[#0D1F4E] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1A3A8F]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1A3A8F]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Eyebrow inverted>Business Impact</Eyebrow>
          <H2 inverted>
            The Proof Is in the<br />Delivery
          </H2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <Counter target={s.target} suffix={s.suffix} inView={inView} />
              <p className="text-white font-semibold text-sm mt-3">{s.label}</p>
              <p className="text-slate-400 text-xs mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. INDUSTRIES WE SUPPORT ─────────────────────────────────────────────────
const industries = [
  { icon: Cpu, name: "Information Technology", desc: "Infrastructure, cloud ops, and IT service management" },
  { icon: Factory, name: "Manufacturing", desc: "Plant operations, quality control, and supply chain support" },
  { icon: HeartPulse, name: "Healthcare", desc: "Clinical operations, health IT, and compliance management" },
  { icon: Briefcase, name: "BFSI", desc: "Back-office ops, risk monitoring, and financial services delivery" },
  { icon: Radio, name: "Telecom", desc: "Network operations, field delivery, and customer service support" },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Fulfillment ops, analytics, and category management" },
];

function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <Eyebrow>Industries We Support</Eyebrow>
          <H2>Managed Services Across<br />Every Major Sector</H2>
          <NavyRule />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#1A3A8F]/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EEF2FB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D1F4E] transition-colors duration-300">
                <ind.icon size={20} strokeWidth={1.7} className="text-[#1A3A8F] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h4 className="text-[#0D1F4E] font-semibold text-sm mb-1">{ind.name}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. WHY PARTNER WITH US ───────────────────────────────────────────────────
const partnerPoints = [
  { label: "Dedicated account management with single-point ownership" },
  { label: "Real-time operational visibility through live reporting dashboards" },
  { label: "Scalable delivery that adapts to business growth or seasonal peaks" },
  { label: "Quality assurance frameworks embedded in every delivery process" },
  { label: "Business continuity planning and risk mitigation built in by default" },
  { label: "Transparent SLA structure with defined escalation and resolution paths" },
];

function WhyPartnerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}>
              <Eyebrow>Why Partner With Us</Eyebrow>
              <H2>
                More Than a Provider —<br />
                <span className="text-[#1A3A8F]">An Operational Extension</span>
              </H2>
              <NavyRule />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1}>
              <Lead className="mb-9">
                Enterprise organizations don't need another vendor. They need a partner
                who takes on real accountability — one who understands the stakes, owns
                the outcomes, and keeps service quality non-negotiable.
              </Lead>
            </motion.div>

            <ul className="space-y-4">
              {partnerPoints.map((p, i) => (
                <motion.li
                  key={p.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i * 0.07 + 0.2}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={17} strokeWidth={2.2} className="text-[#1A3A8F] mt-[2px] flex-shrink-0" />
                  <span className="text-slate-600 text-sm leading-relaxed">{p.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80"
                alt="Enterprise team managing operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F4E]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl border-2 border-[#1A3A8F]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. OUTCOMES SECTION ──────────────────────────────────────────────────────
const outcomes = [
  {
    icon: Zap,
    title: "Efficiency",
    metric: "Leaner Operations",
    desc: "Structured managed delivery removes inefficiencies, duplication, and coordination overhead from day-to-day operations.",
  },
  {
    icon: Eye,
    title: "Control",
    metric: "Full Visibility",
    desc: "Live dashboards, regular reviews, and structured reporting give leadership complete operational transparency.",
  },
  {
    icon: Shield,
    title: "Reliability",
    metric: "SLA-Backed Quality",
    desc: "Every service function is governed by defined standards — not best-effort delivery. Consistency is designed in.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    metric: "Scale Without Strain",
    desc: "Managed capacity scales with your business. Expanding into new markets or volumes doesn't mean rebuilding operations.",
  },
];

function OutcomesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-[#0D1F4E] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <Eyebrow inverted>Outcomes</Eyebrow>
          <H2 inverted>
            What Managed Services<br />Delivers for Your Business
          </H2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-[#1A3A8F] transition-colors duration-300">
                <o.icon size={19} strokeWidth={1.75} className="text-sky-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-sky-200 text-[11px] font-semibold tracking-widest uppercase mb-2">{o.metric}</p>
              <h4 className="text-white font-bold text-[0.9375rem] mb-2">{o.title}</h4>
              <p className="text-slate-400 text-[0.8125rem] leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. FINAL CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-28 bg-[#F4F7FC]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/80 px-10 py-16 md:px-20 md:py-20 text-center relative overflow-hidden"
        >
          {/* Blueprint corner marks */}
          <span className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-[#1A3A8F]/20 rounded-tl-sm" />
          <span className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-[#1A3A8F]/20 rounded-tr-sm" />
          <span className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-[#1A3A8F]/20 rounded-bl-sm" />
          <span className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-[#1A3A8F]/20 rounded-br-sm" />

          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}>
            <Eyebrow>Get Started</Eyebrow>
            <H2 className="mb-6">
              Focus On Growth.<br />
              <span className="text-[#1A3A8F]">We Handle Delivery.</span>
            </H2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-slate-500 text-base max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Let our managed services team take ownership of your operational delivery —
            so your people spend their energy on what moves the business forward, not
            what keeps it running.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#1A3A8F] hover:bg-[#0D1F4E] text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-[#1A3A8F]/20"
            >
              Contact Us <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-slate-200 hover:border-[#1A3A8F]/40 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors duration-200"
            >
              <Building2 size={16} strokeWidth={1.9} />
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- 9. ------

export function ManagedProvider() {
  const animRef = useScrollAnimation()

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* <OverviewSection /> */}
      <WhatWeManageSection />
      <DeliveryModelSection />
      <StatsSection />
      <IndustriesSection />
      {/* <WhyPartnerSection /> */}
      <OutcomesSection />
      {/* <CTASection /> */}
    </main>
  );
}



// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
function ManagedServiceProvider() {
  const animRef = useScrollAnimation()

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <OverviewSection />
      <WhatWeManageSection />
      <DeliveryModelSection />
      <StatsSection />
      <IndustriesSection />
      {/* <WhyPartnerSection />
      <OutcomesSection /> */}
      <CTASection />
    </main>
  );
}

export default ManagedServiceProvider;

