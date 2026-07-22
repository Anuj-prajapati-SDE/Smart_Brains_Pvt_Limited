import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import {
  Target,
  ShieldCheck,
  UserCheck,
  TrendingUp,
  BarChart3,
  Layers,
  Search,
  ClipboardCheck,
  Star,
  Rocket,
  Sprout,
  Globe,
  HeartPulse,
  Factory,
  Briefcase,
  ShoppingBag,
  Radio,
  Award,
  Users,
  Handshake,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
// Navy:    #0F2457  (deep anchor)
// Blue:    #1A3A8F  (primary CTA)
// Sky:     #E8EEF8  (tinted surface)
// Gold:    #C8A96E  (premium accent — signature element)
// Slate:   #64748B  (body copy)
// White:   #FFFFFF

// ─── Motion Presets ──────────────────────────────────────────────────────────
const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const reveal = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Shared Primitives ────────────────────────────────────────────────────────
function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase mb-3 ${
        light ? "text-amber-300" : "text-amber-600"
      }`}
    >
      <span
        className={`w-5 h-px ${light ? "bg-amber-300" : "bg-amber-500"}`}
      />
      {children}
    </span>
  );
}

function H2({ children, light = false, className = "" }) {
  return (
    <h2
      className={`text-[2rem] md:text-[2.6rem] font-bold leading-[1.18] tracking-tight ${
        light ? "text-white" : "text-[#0F2457]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function BodyText({ children, light = false, className = "" }) {
  return (
    <p
      className={`text-[0.9375rem] leading-relaxed ${
        light ? "text-slate-300" : "text-slate-500"
      } ${className}`}
    >
      {children}
    </p>
  );
}

function GoldDivider() {
  return <span className="block w-10 h-[3px] rounded-full bg-amber-500 mt-4 mb-6" />;
}

// ─── 1. PERMANENT STAFFING OVERVIEW ──────────────────────────────────────────
const overviewBadges = [
  { value: "8+ Years", label: "Placement Experience" },
  { value: "94%", label: "Offer Acceptance Rate" },
  { value: "60-Day", label: "Replacement Guarantee" },
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
              long-term hiring
             </span>
             <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
               Permanent Staffing
             </h1>
             <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
               A hiring model where you can hire long-term worker of full-time employees directly onto your official payroll
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

// ─── 2. BUILD LONG-TERM SUCCESS ───────────────────────────────────────────────
const benefits = [
  {
    icon: Target,
    title: "Right Talent Matching",
    desc: "Precision-matched candidates evaluated across skills, experience, and cultural alignment — not just qualifications.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Workforce Stability",
    desc: "Permanent hires reduce team disruption, knowledge loss, and recurring recruitment costs over time.",
  },
  {
    icon: UserCheck,
    title: "Reduced Hiring Effort",
    desc: "We manage the entire pipeline from sourcing to offer — your team only meets thoroughly vetted finalists.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Candidate Screening",
    desc: "Multi-layer assessments: technical, behavioural, and reference checks before any introduction.",
  },
  {
    icon: TrendingUp,
    title: "Better Retention Outcomes",
    desc: "Our fit-first approach consistently delivers hires who stay longer and contribute more meaningfully.",
  },
  {
    icon: Layers,
    title: "Business Continuity",
    desc: "Prevent critical gaps in leadership and specialist functions with proactive hiring partnerships.",
  },
];

function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-xl mb-14"
        >
          <Eyebrow>Why Permanent Hiring</Eyebrow>
          <H2>Build Long-Term Success</H2>
          <GoldDivider />
          <BodyText>
            Permanent hiring done right creates compounding value — better culture,
            stronger teams, and lower total cost of ownership for talent.
          </BodyText>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.07}
              className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#1A3A8F]/20 transition-all duration-350 overflow-hidden"
            >
              {/* Hover accent bar */}
              <span className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-amber-500 transition-all duration-500 rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-[#E8EEF8] flex items-center justify-center mb-5 group-hover:bg-[#0F2457] transition-colors duration-300">
                <b.icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-[#1A3A8F] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-[#0F2457] font-semibold text-[0.9375rem] mb-2">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. HIRING JOURNEY ────────────────────────────────────────────────────────
const journey = [
  {
    icon: Search,
    phase: "Discover",
    desc: "We learn your business: culture, goals, team structure, and the exact type of person who will thrive here.",
    accent: "bg-[#E8EEF8] border-[#1A3A8F]/20",
    iconBg: "bg-[#1A3A8F]",
  },
  {
    icon: BarChart3,
    phase: "Evaluate",
    desc: "Rigorous screening across technical skills, leadership potential, and behavioural alignment.",
    accent: "bg-amber-50 border-amber-200/60",
    iconBg: "bg-amber-500",
  },
  {
    icon: Star,
    phase: "Select",
    desc: "A curated shortlist — typically 3 to 5 candidates — each accompanied by a structured assessment report.",
    accent: "bg-[#E8EEF8] border-[#1A3A8F]/20",
    iconBg: "bg-[#1A3A8F]",
  },
  {
    icon: Rocket,
    phase: "Onboard",
    desc: "We coordinate offer, documentation, and first-week integration so the hire lands smoothly.",
    accent: "bg-amber-50 border-amber-200/60",
    iconBg: "bg-amber-500",
  },
  {
    icon: Sprout,
    phase: "Grow",
    desc: "Post-placement check-ins at 30, 60, and 90 days ensure the hire is performing and engaged.",
    accent: "bg-[#E8EEF8] border-[#1A3A8F]/20",
    iconBg: "bg-[#1A3A8F]",
  },
];

function JourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Eyebrow>The Hiring Journey</Eyebrow>
          <H2>Every Placement, A Deliberate Decision</H2>
          <GoldDivider />
          <BodyText>
            We follow a structured process that treats every hire as a strategic investment
            for your organization — not a transaction.
          </BodyText>
        </motion.div>

        {/* Cards with connecting visual */}
        <div className="relative">
          {/* connector line desktop */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-px border-t-2 border-dashed border-slate-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {journey.map((j, i) => (
              <motion.div
                key={j.phase}
                variants={rise}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                className={`rounded-2xl border p-6 flex flex-col items-center text-center ${j.accent}`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${j.iconBg} flex items-center justify-center mb-4 shadow-md`}
                >
                  <j.icon size={19} strokeWidth={1.9} className="text-white" />
                </div>
                <h4 className="text-[#0F2457] font-bold text-sm tracking-wide mb-2">
                  {j.phase}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{j.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. TRUST & RESULTS ───────────────────────────────────────────────────────
const stats = [
  { target: 1000, suffix: "+", label: "Professionals Hired" },
  { target: 92, suffix: "%", label: "Client Retention" },
  { target: 30, suffix: "+", label: "Industry Domains" },
  { target: 98, suffix: "%", label: "Hiring Quality Score" },
];

function Counter({ target, suffix, inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const increment = target / (duration / 16);
    const id = setInterval(() => {
      start = Math.min(start + increment, target);
      setVal(Math.floor(start));
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);
  return (
    <span className="text-5xl md:text-6xl font-bold text-white tabular-nums">
      {val}{suffix}
    </span>
  );
}

function TrustStatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-[#0F2457] relative overflow-hidden">
      {/* Subtle architectural lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gold orb accent */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Eyebrow light>Trust & Results</Eyebrow>
          <H2 light>
            Numbers Built on<br />
            <em className="not-italic text-amber-400">Years of Earned Trust</em>
          </H2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <Counter target={s.target} suffix={s.suffix} inView={inView} />
              <div className="w-8 h-[2px] rounded-full bg-amber-500 mx-auto my-3" />
              <p className="text-slate-300 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. INDUSTRIES WE SERVE ───────────────────────────────────────────────────
const industries = [
  { icon: Globe, name: "Information Technology", desc: "Engineering, data, cloud & product roles" },
  { icon: HeartPulse, name: "Healthcare & Life Sciences", desc: "Clinical, research, and health IT talent" },
  { icon: Factory, name: "Manufacturing & Engineering", desc: "Operations, quality, and plant leadership" },
  { icon: Briefcase, name: "BFSI", desc: "Finance, risk, compliance, and audit experts" },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Category, merchandising, and analytics leads" },
  { icon: Radio, name: "Telecom & Infrastructure", desc: "Network, presales, and enterprise solutions" },
];

function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <Eyebrow>Industries We Serve</Eyebrow>
          <H2>Deep Domain Expertise Across Sectors</H2>
          <GoldDivider />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#E8EEF8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0F2457] transition-colors duration-300">
                <ind.icon
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#1A3A8F] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <h4 className="text-[#0F2457] font-semibold text-sm mb-1">{ind.name}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. WHY ORGANIZATIONS CHOOSE US ──────────────────────────────────────────
const choicePoints = [
  { label: "Dedicated hiring experts with sector-specific knowledge" },
  { label: "Scalable engagement models — from single roles to bulk hiring" },
  { label: "Quality-driven process with multi-layer assessment frameworks" },
  { label: "Long-term partnership model, not transactional recruitment" },
  { label: "Transparent communication and weekly search progress updates" },
  { label: "60-day replacement guarantee on every placement we make" },
];

function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div variants={rise} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}>
              <Eyebrow>Why Choose Us</Eyebrow>
              <H2>
                Why Organizations Trust Us<br />
                <em className="not-italic text-[#1A3A8F]">With Their Most Critical Hires</em>
              </H2>
              <GoldDivider />
            </motion.div>
            <motion.div variants={rise} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1}>
              <BodyText className="mb-8">
                Permanent hiring decisions are irreversible in the short term. A poor hire
                costs time, culture, and capital. Our model is built to get it right the
                first time — through expertise, rigor, and genuine partnership.
              </BodyText>
            </motion.div>
            <ul className="space-y-4">
              {choicePoints.map((p, i) => (
                <motion.li
                  key={p.label}
                  variants={rise}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i * 0.07 + 0.2}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="text-amber-500 mt-0.5 flex-shrink-0"
                    strokeWidth={2.2}
                  />
                  <span className="text-slate-600 text-sm leading-relaxed">{p.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80"
                alt="Enterprise office team discussion"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F2457]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-amber-500/10 border border-amber-400/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. WORKFORCE EXCELLENCE ──────────────────────────────────────────────────
const excellence = [
  {
    icon: Award,
    title: "Retention Focus",
    stat: "3× longer",
    desc: "Our fit-first model produces hires who stay three times longer than industry average.",
  },
  {
    icon: Users,
    title: "Culture Alignment",
    stat: "85% Match Rate",
    desc: "We assess beyond the resume — values, working style, and team dynamics are core to every evaluation.",
  },
  {
    icon: BookOpen,
    title: "Talent Quality",
    stat: "Top 12% Only",
    desc: "Every candidate presented clears a structured filter — only the top tier of screened applicants reach you.",
  },
  {
    icon: Handshake,
    title: "Future Growth",
    stat: "Partnership Model",
    desc: "We grow with your business — maintaining a warm talent bench and proactively mapping your future needs.",
  },
];

function WorkforceExcellenceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-[#0F2457] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #C8A96E 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Eyebrow light>Workforce Excellence</Eyebrow>
          <H2 light>
            What Separates Good Hires<br />
            <em className="not-italic text-amber-400">From Great Ones</em>
          </H2>
        </motion.div>

        {/* Horizontal premium highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {excellence.map((e, i) => (
            <motion.div
              key={e.title}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center mb-5 group-hover:bg-amber-500/25 transition-colors duration-300">
                <e.icon size={20} strokeWidth={1.8} className="text-amber-400" />
              </div>
              <p className="text-amber-300 text-xs font-semibold tracking-wide uppercase mb-2">
                {e.stat}
              </p>
              <h4 className="text-white font-bold text-[0.9375rem] mb-2">{e.title}</h4>
              <p className="text-slate-400 text-[0.8125rem] leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. FINAL CTA ──────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-3xl bg-[#0F2457] px-10 py-16 md:px-20 md:py-20 text-center relative overflow-hidden"
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #C8A96E 25%, transparent 25%) -10px 0, linear-gradient(225deg, #C8A96E 25%, transparent 25%) -10px 0",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Gold glow top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <motion.div variants={rise} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}>
              <Eyebrow light>Start Hiring</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
                Build Teams That Stay.
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-400 leading-tight mb-8">
                Build Teams That Lead.
              </h2>
            </motion.div>

            <motion.p
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
              className="text-slate-300 text-base max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Partner with our permanent staffing specialists to find professionals who
              will drive your business forward — not just today, but for years to come.
            </motion.p>

            <motion.div
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0F2457] font-bold text-sm transition-colors duration-200 shadow-lg shadow-amber-900/30"
              >
                Contact Us <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-white font-semibold text-sm transition-colors duration-200"
              >
                <Building2 size={16} strokeWidth={1.9} />
                Explore Solutions
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- 9. -----

export function PermanentStaff (){
  return(
    <>
        <main>
      <BenefitsSection />
      <JourneySection />
      <TrustStatsSection />
      <IndustriesSection />
      <WhyChooseSection />
      <WorkforceExcellenceSection />
    </main>
    </>
  )
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
function PermanentStaffing() {

  const animRef = useScrollAnimation()

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <OverviewSection />
      <BenefitsSection />
      <JourneySection />
      <TrustStatsSection />
      <IndustriesSection />
      {/* <WhyChooseSection />
      <WorkforceExcellenceSection />
      <CTASection /> */}
    </main>
  );
}

export default PermanentStaffing;
