import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  Zap,
  Clock,
  Star,
  Users,
  ArrowUpRight,
  TrendingDown,
  Search,
  Filter,
  ClipboardList,
  CalendarCheck,
  UserPlus,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Target,
  Layers,
  Globe,
  RefreshCw,
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
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1600&auto=format&fit=crop"
          alt="Recruitment Process Outsourcing (RPO)"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <SectionBadge>Enterprise Talent Acquisition</SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight uppercase text-white">
            Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">Process Outsourcing</span> (RPO)
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
            Transform and scale your hiring capabilities with a dedicated talent acquisition partner operating as an embedded, seamless extension of your internal HR team.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore RPO Engagement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. WHY RPO ──────────────────────────────────────────────────────────────
const whyRpo = [
  {
    icon: Zap,
    title: "Velocity & Agility",
    desc: "Structured pipelines eliminate bottlenecks, accelerating mean time-to-hire by over 50%.",
  },
  {
    icon: Clock,
    title: "Predictable Cost per Hire",
    desc: "Lower agency spend through dedicated recruiter pods and optimized multi-channel sourcing.",
  },
  {
    icon: Star,
    title: "Brand Elevation",
    desc: "We protect and champion your employer brand across every touchpoint from first outreach to day-one onboarding.",
  },
  {
    icon: Users,
    title: "Dedicated Pod Architecture",
    desc: "Embedded recruiters, domain sourcers, and coordinators fully dedicated to your hiring targets.",
  },
  {
    icon: ArrowUpRight,
    title: "On-Demand Scalability",
    desc: "Ramp recruiter capacity up or down to match seasonal spikes, acquisitions, or plant expansions.",
  },
  {
    icon: TrendingDown,
    title: "Zero Admin Burden",
    desc: "Compliance checks, background verification, SLA monitoring, and coordination handled end-to-end.",
  },
];

function WhyRPOSection() {
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
          <SectionBadge>Strategic Value</SectionBadge>
          <SectionHeading>The Business Case For RPO Partnership</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Overcome resource constraints and convert ad-hoc recruitment into a predictable, high-yield talent engine.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyRpo.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.06}
                className="group relative bg-white dark:bg-slate-900/80 rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary dark:text-[#a9c7ff]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 3. RECRUITMENT TRANSFORMATION MODEL ────────────────────────────────────
const stages = [
  {
    step: "Discover",
    title: "Workforce Architecture",
    icon: Globe,
    desc: "Mapping headcount forecasts, role competencies, SLAs, and employer value proposition.",
  },
  {
    step: "Source",
    title: "Multi-Channel Sourcing",
    icon: Search,
    desc: "Deploying AI-driven talent hunting, passive networks, alumni databases, and referral systems.",
  },
  {
    step: "Screen",
    title: "Competency Screening",
    icon: Filter,
    desc: "Structured pre-qualification, technical evaluation, and benchmark compliance checks.",
  },
  {
    step: "Hire",
    title: "Offer & Onboarding",
    icon: CheckCircle2,
    desc: "Interview logistics, offer negotiations, pre-boarding engagement, and documentation.",
  },
  {
    step: "Optimise",
    title: "Analytics & Refinement",
    icon: RefreshCw,
    desc: "Weekly KPI dashboards, funnel analytics, SLA audits, and continuous pipeline calibration.",
  },
];

function TransformationModel() {
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
          <SectionBadge>Transformation Lifecycle</SectionBadge>
          <SectionHeading>How We Optimize Your Entire Recruitment Process</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A 5-stage transformation framework converting reactive hiring into a strategic advantage.
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

          {stages.map((s, i) => {
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
          {stages.map((s, i) => {
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
  { target: 55, suffix: "%", label: "Reduction in Time-to-Hire" },
  { target: 35, suffix: "%", label: "Reduction in Cost-per-Hire" },
  { target: 50, suffix: "k+", label: "Active Talent Engagements" },
  { target: 96, suffix: "%", label: "Hiring Manager SLA Rating" },
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
            <Award className="w-3.5 h-3.5" /> Benchmarked Outcomes
          </span>
          <SectionHeading light>The Data Behind RPO Excellence</SectionHeading>
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

// ─── 5. RECRUITMENT CAPABILITIES ────────────────────────────────────────────
const capabilities = [
  {
    icon: Search,
    title: "Global Talent Hunting",
    desc: "Active outreach across niche professional communities, passive databases, and industry conferences.",
  },
  {
    icon: Filter,
    title: "Structured Assessment",
    desc: "Customized technical rubrics, coding benchmarks, psychometrics, and scenario interviews.",
  },
  {
    icon: ClipboardList,
    title: "Employer Branding",
    desc: "Crafting resonant job marketing, social campaigns, and career portal engagement to attract top 10% talent.",
  },
  {
    icon: CalendarCheck,
    title: "Logistics & Coordination",
    desc: "End-to-end panel scheduling, candidate briefing, automated feedback loops, and interview debriefs.",
  },
  {
    icon: UserPlus,
    title: "Pre-Boarding & Integration",
    desc: "Document collection, background verification, welcome packs, and day-one orientation alignment.",
  },
  {
    icon: BarChart2,
    title: "Live KPI Dashboards",
    desc: "Real-time visibility into hiring funnels, offer decline forensics, sourcer productivity, and diversity metrics.",
  },
];

function CapabilitiesSection() {
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
          <SectionBadge>Operational Coverage</SectionBadge>
          <SectionHeading>Full-Spectrum RPO Capabilities</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
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
                  <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1.5">{c.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 6. WHY PARTNER WITH US ──────────────────────────────────────────────────
const partnerPoints = [
  "Dedicated RPO delivery leads embedded directly into your weekly HR scrums",
  "Elastic capacity model: scale recruiter pods up or down without internal overhead",
  "Full candidate transparency with live web-based recruitment analytics",
  "Consistent adherence to rigorous quality gates and SLA benchmarks",
  "Enhanced candidate experience boosting offer acceptance to record highs",
  "Complete data ownership and ATS integration into your enterprise systems",
];

function WhyPartnerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#0c0e0f] transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}>
              <SectionBadge>Seamless HR Extension</SectionBadge>
              <SectionHeading className="mb-4">
                A Recruitment Engine Built Exclusively for Your Goals
              </SectionHeading>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8"
            >
              We operate not as external headhunters, but as an embedded talent arm of your business. We adopt your culture, reflect your mission, and deliver measurable talent results.
            </motion.p>

            <ul className="space-y-3.5">
              {partnerPoints.map((p, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i * 0.06 + 0.15}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-primary dark:text-[#a9c7ff] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">{p}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.5} className="mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Request Custom RPO Proposal</span>
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=900&q=80"
              alt="Smart Brains RPO Team at Work"
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

// ─── 7. FINAL CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0c0e0f]/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#a9c7ff] mb-4">
              Scale Your Hiring
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Ready to Modernize Your Recruitment Function?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8 font-light">
              Connect with our enterprise talent strategists to scope an RPO engagement tailored to your hiring forecast.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Consult Our RPO Specialists</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TAB EMBED COMPONENT ───────────────────────────────────────────────────────
export function RPOStaff() {
  return (
    <div className="w-full">
      <WhyRPOSection />
      <TransformationModel />
      <StatsSection />
      <CapabilitiesSection />
      <WhyPartnerSection />
      <CTASection />
    </div>
  );
}

// ─── STANDALONE PAGE COMPONENT ────────────────────────────────────────────────
const RPO = () => {
  const animRef = useScrollAnimation();

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 transition-colors duration-300" ref={animRef}>
      <StandaloneHero />
      <WhyRPOSection />
      <TransformationModel />
      <StatsSection />
      <CapabilitiesSection />
      <WhyPartnerSection />
      <CTASection />
    </main>
  );
};

export default RPO;
