import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
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
  ChevronRight,
  Target,
  Eye,
  Layers,
  LineChart,
  Building2,
  Globe,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

// ─── Motion Presets ──────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// ─── Shared Primitives ────────────────────────────────────────────────────────
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

// ─── 1. RPO OVERVIEW ─────────────────────────────────────────────────────────
const overviewBadges = [
  { label: "End-to-End Hiring", sub: "Full-cycle recruitment support" },
  { label: "Scalable Process", sub: "Adapts to your hiring volume" },
  { label: "Talent Optimised", sub: "Quality-first acquisition model" },
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
              END-TO-END TALENT
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              RPO
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              A strategic hiring model where you outsource all or part of your permanent recruitment process to an expert external partner acting as a seamless extension of your HR team.
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

// ─── 2. WHY RPO ──────────────────────────────────────────────────────────────
const whyRpo = [
  {
    icon: Zap,
    title: "Recruitment Efficiency",
    desc: "Structured processes eliminate bottlenecks and keep hiring pipelines moving at consistent velocity.",
  },
  {
    icon: Clock,
    title: "Reduced Time to Hire",
    desc: "Dedicated sourcing and screening teams cut mean-time-to-fill by removing the usual coordination delays.",
  },
  {
    icon: Star,
    title: "Quality Candidate Experience",
    desc: "Every touchpoint — from first contact to offer — is managed to protect and strengthen your employer brand.",
  },
  {
    icon: Users,
    title: "Dedicated Hiring Teams",
    desc: "Your RPO team functions as an embedded extension of your HR function, not an external agency.",
  },
  {
    icon: ArrowUpRight,
    title: "Scalable Recruitment",
    desc: "Surge hiring, seasonal peaks, or multi-location expansions — the model scales without internal strain.",
  },
  {
    icon: TrendingDown,
    title: "Lower Operational Effort",
    desc: "Admin, compliance, reporting, and coordination are fully owned by the RPO team so your team stays focused.",
  },
];

function WhyRPOSection() {
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
          <Eyebrow>Why RPO</Eyebrow>
          <H2>The Case for Outsourcing<br />Your Recruitment Function</H2>
          <NavyRule />
          <Lead>
            Internal recruitment teams are often resource-constrained against growing
            hiring demand. RPO closes that gap with dedicated expertise and proven structure.
          </Lead>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyRpo.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.07}
              className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#1A3A8F]/20 transition-all duration-300"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-[#1A3A8F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] flex items-center justify-center mb-5 group-hover:bg-[#0D1F4E] transition-colors duration-300">
                <item.icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-[#1A3A8F] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-[#0D1F4E] font-semibold text-[0.9375rem] mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. RECRUITMENT TRANSFORMATION MODEL ────────────────────────────────────
const stages = [
  {
    step: "Discover",
    icon: Globe,
    desc: "Align on hiring goals, workforce planning, role priorities, and intake process design.",
  },
  {
    step: "Source",
    icon: Search,
    desc: "Multi-channel talent sourcing — job boards, referrals, networks, and passive candidate pipelines.",
  },
  {
    step: "Screen",
    icon: Filter,
    desc: "Structured pre-screening: competency checks, background review, and qualification mapping.",
  },
  {
    step: "Hire",
    icon: CheckCircle2,
    desc: "Interview coordination, offer management, and compliance-cleared documentation handled end-to-end.",
  },
  {
    step: "Optimise",
    icon: RefreshCw,
    desc: "Continuous data review, process refinement, and reporting to improve every hire cycle.",
  },
];

function TransformationModel() {
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
          <Eyebrow>Transformation Model</Eyebrow>
          <H2>How We Transform Your Recruitment</H2>
          <NavyRule />
          <Lead>
            A structured, five-stage engagement model that converts ad-hoc hiring
            into a repeatable, measurable, and continuously improving function.
          </Lead>
        </motion.div>

        {/* Desktop: connected arc-style layout */}
        <div className="hidden lg:grid grid-cols-5 gap-0 relative">
          {/* Background connector track */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-100" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-[#1A3A8F]"
          />

          {stages.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.12}
              className="flex flex-col items-center text-center px-3"
            >
              {/* Node */}
              <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-white border-[3px] border-[#1A3A8F] flex flex-col items-center justify-center mb-6 shadow-md shadow-[#1A3A8F]/10">
                <s.icon size={22} strokeWidth={1.75} className="text-[#1A3A8F] mb-1" />
                <span className="text-[#0D1F4E] font-bold text-[11px] tracking-wide uppercase">{s.step}</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stacked */}
        <div className="lg:hidden flex flex-col gap-0 relative">
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-slate-100" />
          <div
            className="absolute left-6 top-6 w-[2px] bg-[#1A3A8F]"
            style={{ height: inView ? "calc(100% - 24px)" : "0", transition: "height 1.4s ease" }}
          />
          {stages.map((s, i) => (
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

// ─── 4. STATS / IMPACT ───────────────────────────────────────────────────────
const stats = [
  { target: 60, suffix: "%", label: "Faster Hiring", sub: "vs. traditional recruitment" },
  { target: 85, suffix: "%", label: "Process Efficiency", sub: "reduction in manual effort" },
  { target: 1000, suffix: "+", label: "Candidates Managed", sub: "across active engagements" },
  { target: 95, suffix: "%", label: "Client Satisfaction", sub: "on delivery and quality" },
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
      {/* Structured grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Soft radial light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1A3A8F]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1A3A8F]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Eyebrow inverted>Recruitment Impact</Eyebrow>
          <H2 inverted>
            The Numbers Behind<br />Our RPO Performance
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

// ─── 5. RECRUITMENT CAPABILITIES ────────────────────────────────────────────
const capabilities = [
  {
    icon: Search,
    title: "Talent Sourcing",
    desc: "Multi-channel sourcing strategy combining active and passive candidate engagement.",
  },
  {
    icon: Filter,
    title: "Screening & Shortlisting",
    desc: "Structured pre-qualification using role-specific frameworks and competency maps.",
  },
  {
    icon: ClipboardList,
    title: "Assessment Design",
    desc: "Custom assessments aligned to your technical, behavioural, and leadership requirements.",
  },
  {
    icon: CalendarCheck,
    title: "Interview Coordination",
    desc: "End-to-end scheduling, panel communication, and feedback collection managed seamlessly.",
  },
  {
    icon: UserPlus,
    title: "Onboarding Support",
    desc: "Pre-joining engagement, documentation handling, and day-one readiness coordination.",
  },
  {
    icon: BarChart2,
    title: "Recruitment Analytics",
    desc: "Live dashboards, SLA tracking, and funnel reporting for full hiring visibility.",
  },
];

function CapabilitiesSection() {
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
          <Eyebrow>Capabilities</Eyebrow>
          <H2>What Our RPO Service Covers</H2>
          <NavyRule />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.07}
              className="group flex gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#1A3A8F]/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EEF2FB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D1F4E] transition-colors duration-300">
                <c.icon
                  size={19}
                  strokeWidth={1.75}
                  className="text-[#1A3A8F] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <h4 className="text-[#0D1F4E] font-semibold text-sm mb-1.5">{c.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. WHY PARTNER WITH US ──────────────────────────────────────────────────
const partnerPoints = [
  { label: "Dedicated RPO recruitment team embedded in your process" },
  { label: "Scalable engagement — ramp up or down without disruption" },
  { label: "Full hiring visibility through live reporting dashboards" },
  { label: "Quality-gated process with SLA-backed delivery at every stage" },
  { label: "Continuous improvement cycles based on data and feedback" },
  { label: "Employer brand alignment maintained across all candidate touchpoints" },
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
                A Recruitment Partner<br />
                <span className="text-[#1A3A8F]">That Works Like Your Team</span>
              </H2>
              <NavyRule />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1}>
              <Lead className="mb-9">
                We don't operate as a vendor sitting outside your business. Our RPO teams
                integrate into your hiring workflow, adopt your values, and represent your
                organization every step of the way.
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
                  <CheckCircle2
                    size={17}
                    strokeWidth={2.2}
                    className="text-[#1A3A8F] mt-[2px] flex-shrink-0"
                  />
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
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80"
                alt="Enterprise HR team in modern office"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F4E]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl border-2 border-[#1A3A8F]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. BUSINESS OUTCOMES ────────────────────────────────────────────────────
const outcomes = [
  {
    icon: Target,
    title: "Hiring Quality",
    metric: "Top-Calibre Talent",
    desc: "Structured evaluation and quality gates ensure only the right candidates progress — reducing mis-hires significantly.",
  },
  {
    icon: Zap,
    title: "Speed",
    metric: "60% Faster Closure",
    desc: "Dedicated pipelines and pre-qualified talent pools reduce time-to-offer at every level of hiring.",
  },
  {
    icon: Eye,
    title: "Visibility",
    metric: "Real-Time Dashboards",
    desc: "Full transparency across sourcing, screening, offers, and conversion — no more hiring black boxes.",
  },
  {
    icon: LineChart,
    title: "Workforce Growth",
    metric: "Scalable & Sustained",
    desc: "Whether hiring 10 or 1,000, the RPO model maintains quality and pace as your organization expands.",
  },
];

function BusinessOutcomesSection() {
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
          <Eyebrow inverted>Business Outcomes</Eyebrow>
          <H2 inverted>
            What Changes When You<br />Partner on RPO
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
              <p className="text-sky-200 text-[11px] font-semibold tracking-widest uppercase mb-2">
                {o.metric}
              </p>
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
          {/* Blueprint-style corner marks */}
          <span className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-[#1A3A8F]/20 rounded-tl-sm" />
          <span className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-[#1A3A8F]/20 rounded-tr-sm" />
          <span className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-[#1A3A8F]/20 rounded-bl-sm" />
          <span className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-[#1A3A8F]/20 rounded-br-sm" />

          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}>
            <Eyebrow>Get Started</Eyebrow>
            <H2 className="mb-6">
              Transform Recruitment<br />
              <span className="text-[#1A3A8F]">At Scale</span>
            </H2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-slate-500 text-base max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Partner with our RPO specialists to build a recruitment engine that delivers
            quality, consistency, and visibility — at any hiring volume, across any market.
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

// --- 9. Submenu ----

export function RPOStaff (){
  const animRef = useScrollAnimation()
    return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <WhyRPOSection />
      <TransformationModel />
      <StatsSection />
      <CapabilitiesSection />
      <WhyPartnerSection />
      {/* <BusinessOutcomesSection /> */}
      {/* <CTASection /> */}
    </main>
  );
}


// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
 function RPO() {
  const animRef = useScrollAnimation()
  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <OverviewSection />
      <WhyRPOSection />
      <TransformationModel />
      <StatsSection />
      <CapabilitiesSection />
      <WhyPartnerSection />
      {/* <BusinessOutcomesSection /> */}
      {/* <CTASection /> */}
    </main>
  );
}

export default RPO;
