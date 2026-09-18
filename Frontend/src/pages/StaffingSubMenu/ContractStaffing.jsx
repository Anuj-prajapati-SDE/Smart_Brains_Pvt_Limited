import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  Zap,
  DollarSign,
  Shuffle,
  Users,
  ClipboardList,
  RefreshCw,
  CheckCircle2,
  TrendingUp,
  Globe,
  HeartPulse,
  Factory,
  Radio,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Building2,
  Layers,
  Award
} from "lucide-react";

// ─── Animation Presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
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
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop"
          alt="Contract Staffing Solutions"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <SectionBadge>Flexible Human Capital</SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight uppercase text-white">
            Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">Staffing</span> Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
            Scale specialized engineering, technical, and enterprise operations on-demand with fully compliant contractors deployed across short or long-term project cycles.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Hire Contract Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. WHY CONTRACT STAFFING ─────────────────────────────────────────────────
const reasons = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "Tap into an active, pre-vetted talent pool to onboard specialized contractors in 48 to 72 hours.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    desc: "Eliminate long-term fringe benefit overheads. Pay strictly for specialized capability during project cycles.",
  },
  {
    icon: Shuffle,
    title: "Workforce Agility",
    desc: "Seamlessly scale capacity up or down according to sudden project demands without structural friction.",
  },
  {
    icon: Users,
    title: "Niche Technical Skills",
    desc: "Access specialized engineers, EPC project controllers, and IT specialists ready on day one.",
  },
  {
    icon: ClipboardList,
    title: "Complete Compliance",
    desc: "We manage payroll, statutory compliance (PF, ESIC, insurance), contracts, and background verifications.",
  },
  {
    icon: RefreshCw,
    title: "Zero Operational Lag",
    desc: "Prevent project delays during transitions or expansions with continuous workforce coverage.",
  },
];

function WhySection() {
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
          <SectionBadge>Enterprise Advantages</SectionBadge>
          <SectionHeading>Why Leading Enterprises Choose Contract Staffing</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Speed, compliance, and flexibility designed to keep complex projects on schedule and within budget.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.06}
                className="group bg-white dark:bg-slate-900/80 rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary dark:text-[#a9c7ff]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">
                  {r.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 3. DEPLOYMENT TIMELINE ──────────────────────────────────────────────────
const steps = [
  { num: "01", title: "Intake & Scoping", desc: "Detailed mapping of project deliverables, technical skills, and duration requirements." },
  { num: "02", title: "Targeted Sourcing", desc: "Our recruitment engine taps our 50k+ database and passive domain networks." },
  { num: "03", title: "Rigorous Screening", desc: "Multi-tier technical evaluation, background validation, and compliance clearances." },
  { num: "04", title: "Swift Onboarding", desc: "Seamless contract deployment, statutory documentation, and day-one orientation." },
  { num: "05", title: "Active Governance", desc: "Dedicated account managers ensure continuous SLA tracking, payroll, and retention." },
];

function TimelineSection() {
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
          <SectionBadge>Seamless Lifecycle</SectionBadge>
          <SectionHeading>Our 5-Stage Contractor Deployment Process</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A structured deployment workflow ensuring precision matching and zero compliance risk.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-[8%] right-[8%] h-[2px] bg-slate-200 dark:bg-slate-800 z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="absolute top-8 left-[8%] right-[8%] h-[2px] bg-primary dark:bg-[#a9c7ff] z-10"
          />
          <div className="relative z-20 grid grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="w-16 h-16 rounded-2xl border-4 border-white dark:border-slate-900 shadow-md bg-primary text-white flex items-center justify-center mb-5 font-black text-base">
                  {s.num}
                </div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-2">{s.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-8 relative pl-4">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="flex gap-5 items-start"
            >
              <div className="relative z-10 w-12 h-12 rounded-xl bg-primary text-white flex-shrink-0 flex items-center justify-center font-bold text-sm shadow">
                {s.num}
              </div>
              <div className="pt-1">
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">{s.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. STATS / IMPACT ───────────────────────────────────────────────────────
const stats = [
  { value: 95, suffix: "%", label: "Client Satisfaction Score" },
  { value: 72, suffix: "h", label: "Average Deployment Speed" },
  { value: 50, suffix: "k+", label: "Vetted Professional Talent" },
  { value: 100, suffix: "%", label: "Statutory Compliance Rate" },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const step = target / (duration / 16);
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplay(Math.floor(current));
      if (current >= target) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">
      {display}{suffix}
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
            <Award className="w-3.5 h-3.5" /> Proven Track Record
          </span>
          <SectionHeading light>Quantifiable Impact Delivered</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              className="text-center bg-white/10 dark:bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all"
            >
              <AnimatedCounter target={s.value} suffix={s.suffix} inView={inView} />
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
  { icon: Globe, name: "Information Technology", desc: "Software engineering, cloud DevOps, cybersecurity, and data" },
  { icon: Factory, name: "EPC, Oil & Gas & Energy", desc: "Process engineers, site controllers, pipeline specialists" },
  { icon: HeartPulse, name: "Healthcare & Life Sciences", desc: "Clinical technicians, biomedical ops, health informatics" },
  { icon: Building2, name: "Construction & Earthworks", desc: "Project managers, MEP supervisors, structural planners" },
  { icon: Radio, name: "Telecom & Networks", desc: "Network engineers, 5G roll-out specialists, RF planners" },
  { icon: ShoppingBag, name: "Retail & Supply Chain", desc: "Logistics ops, automation engineers, ERP analysts" },
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
          <SectionBadge>Domain Expertise</SectionBadge>
          <SectionHeading>Sectors Powered By Our Contractors</SectionHeading>
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

// ─── 6. WHY PARTNER WITH US ───────────────────────────────────────────────────
const partnerPoints = [
  "100% statutory compliance across national and regional labor frameworks",
  "Rigorous technical pre-screening and cultural compatibility evaluation",
  "Dedicated single-point Account Managers with domain alignment",
  "Transparent SLA-backed delivery with real-time reporting",
  "Instant contractor replacement guarantee for uninterrupted continuity",
  "Flexible transition models from contract-to-hire when needed",
];

function WhyPartnerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#0c0e0f] transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}>
              <SectionBadge>The Smart Brains Edge</SectionBadge>
              <SectionHeading className="mb-4">
                A Strategic Staffing Partnership Built on Trust &amp; Execution
              </SectionHeading>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8"
            >
              We don't just fill roster openings. We engineer agile talent pipelines that integrate seamlessly into your delivery timelines, maintaining peak operational velocity.
            </motion.p>

            <ul className="space-y-3.5">
              {partnerPoints.map((point, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i * 0.06 + 0.15}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-primary dark:text-[#a9c7ff] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.5} className="mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Speak with an Account Executive</span>
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="Smart Brains Contract Staffing Partnership"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002a58]/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}



// ─── TAB EMBED COMPONENT ───────────────────────────────────────────────────────
export function ContractStaff() {
  return (
    <div className="w-full">
      <WhySection />
      <TimelineSection />
      <StatsSection />
      <IndustriesSection />
      <WhyPartnerSection />
      {/* <CTASection /> */}
    </div>
  );
}

// ─── STANDALONE PAGE COMPONENT ────────────────────────────────────────────────
const ContractStaffing = () => {
  const animRef = useScrollAnimation();

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 transition-colors duration-300" ref={animRef}>
      <StandaloneHero />
      <WhySection />
      <TimelineSection />
      <StatsSection />
      <IndustriesSection />
      <WhyPartnerSection />
      {/* <CTASection /> */}
    </main>
  );
};

export default ContractStaffing;