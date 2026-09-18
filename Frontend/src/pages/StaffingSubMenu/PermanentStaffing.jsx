import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
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
  Sparkles,
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
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
          alt="Permanent Staffing Solutions"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <SectionBadge>Strategic Leadership &amp; Core Hires</SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight uppercase text-white">
            Permanent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">Staffing</span> Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
            Empowering organizations with full-time, high-impact professionals and leadership talent evaluated for technical prowess, cultural synergy, and long-term organizational value.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Build Your Permanent Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. BUILD LONG-TERM SUCCESS (Benefits) ────────────────────────────────────
const benefits = [
  {
    icon: Target,
    title: "Precision Matching",
    desc: "Rigorous competency mapping matching candidates on technical skills, leadership trajectory, and corporate culture.",
  },
  {
    icon: ShieldCheck,
    title: "Workforce Stability",
    desc: "Permanent hires solidify institutional memory, reduce disruption, and lower long-term cost-per-hire.",
  },
  {
    icon: UserCheck,
    title: "Streamlined Recruitment",
    desc: "We manage end-to-end headhunting, pre-screening, and scheduling — your hiring managers only meet top 5% finalists.",
  },
  {
    icon: ClipboardCheck,
    title: "Multi-Tier Vetting",
    desc: "Comprehensive technical assessments, credential verification, leadership tests, and detailed background checks.",
  },
  {
    icon: TrendingUp,
    title: "High Retention Outcomes",
    desc: "Our culture-first alignment delivers employees who stay longer, contribute faster, and drive measurable ROI.",
  },
  {
    icon: Layers,
    title: "Executive & Specialist Search",
    desc: "Dedicated search practices for niche senior engineers, plant directors, C-suite, and technical architects.",
  },
];

function BenefitsSection() {
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
          <SectionBadge>Strategic Human Capital</SectionBadge>
          <SectionHeading>Why Invest In Permanent Hiring Partnerships</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A strategic permanent hiring model creates compounding enterprise value and resilient organizational culture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.06}
                className="group relative bg-white dark:bg-slate-900/80 rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary dark:text-[#a9c7ff]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
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
    title: "Needs & Culture Mapping",
    desc: "Understanding your company values, team dynamics, and precise technical benchmarks.",
  },
  {
    icon: BarChart3,
    phase: "Evaluate",
    title: "Deep Candidate Vetting",
    desc: "Multi-layered screening: technical interviews, leadership assessment, and background validation.",
  },
  {
    icon: Star,
    phase: "Select",
    title: "Curated Shortlist",
    desc: "Presenting a refined pool of top 3-5 candidates accompanied by detailed evaluation dossiers.",
  },
  {
    icon: Rocket,
    phase: "Onboard",
    title: "Offer & Integration",
    desc: "Managing offer negotiations, background documentation, and initial integration checkpoints.",
  },
  {
    icon: Sprout,
    phase: "Grow",
    title: "Post-Hire Follow-Up",
    desc: "Structured 30, 60, and 90-day check-ins to ensure seamless performance and high engagement.",
  },
];

function JourneySection() {
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
          <SectionBadge>Structured Methodology</SectionBadge>
          <SectionHeading>The Permanent Hiring Lifecycle</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Every hire is treated as a strategic investment for your company's future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {journey.map((j, i) => {
            const Icon = j.icon;
            return (
              <motion.div
                key={j.phase}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.08}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-6 flex flex-col items-center text-center hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-md">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-primary dark:text-[#a9c7ff] uppercase tracking-wider mb-1">
                  Step 0{i + 1} • {j.phase}
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-2">
                  {j.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{j.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 4. TRUST & RESULTS ───────────────────────────────────────────────────────
const stats = [
  { target: 1000, suffix: "+", label: "Full-Time Professionals Placed" },
  { target: 94, suffix: "%", label: "12-Month Retention Rate" },
  { target: 30, suffix: "+", label: "Industry Domains Supported" },
  { target: 98, suffix: "%", label: "Client Recommendation Score" },
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
    <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">
      {val}{suffix}
    </span>
  );
}

function TrustStatsSection() {
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
          <SectionHeading light>Delivering Lasting Value to Organizations</SectionHeading>
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

// ─── 5. INDUSTRIES WE SERVE ───────────────────────────────────────────────────
const industries = [
  { icon: Globe, name: "Information Technology", desc: "Software engineering, cloud infrastructure, AI & cybersecurity" },
  { icon: Factory, name: "EPC, Power & Energy", desc: "Plant directors, piping engineers, commissioning specialists" },
  { icon: HeartPulse, name: "Healthcare & Pharmaceuticals", desc: "Clinical researchers, medical technologists, hospital ops" },
  { icon: Briefcase, name: "BFSI & Fintech", desc: "Risk analysts, compliance officers, financial controllers" },
  { icon: ShoppingBag, name: "Automotive & Manufacturing", desc: "Plant heads, QA managers, industrial automation leads" },
  { icon: Radio, name: "Telecom & Infrastructure", desc: "Network architects, fiber infrastructure, enterprise leads" },
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
          <SectionBadge>Domain Alignment</SectionBadge>
          <SectionHeading>Sector-Specific Permanent Search</SectionHeading>
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

// ─── 6. WHY ORGANIZATIONS CHOOSE US ──────────────────────────────────────────
const choicePoints = [
  "Sector-dedicated headhunters with firsthand engineering and domain expertise",
  "Scalable engagement: from critical single niche roles to nationwide bulk hiring",
  "Evidence-backed candidate dossiers with full technical assessment reports",
  "High offer-to-acceptance ratios through proactive candidate engagement",
  "Full background, credential, and reference verification before introduction",
  "60 to 90-day replacement guarantee backed by formal SLA commitments",
];

function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#0c0e0f] transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}>
              <SectionBadge>Executive Rigor</SectionBadge>
              <SectionHeading className="mb-4">
                Why Enterprises Trust Us With Their Most Critical Roles
              </SectionHeading>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8"
            >
              A mismatched permanent hire incurs severe opportunity and cultural costs. Our rigorous sourcing frameworks and deep candidate vetting ensure you get it right the first time.
            </motion.p>

            <ul className="space-y-3.5">
              {choicePoints.map((p, i) => (
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
                <span>Initiate a Permanent Search</span>
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
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80"
              alt="Permanent Placement Meeting"
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

// ─── 7. WORKFORCE EXCELLENCE ──────────────────────────────────────────────────
const excellence = [
  {
    icon: Award,
    title: "Retention First",
    stat: "94% 1-Year Rate",
    desc: "Our culture-alignment algorithms yield long-tenured employees who consistently outperform benchmarks.",
  },
  {
    icon: Users,
    title: "Cultural Fit Match",
    stat: "Top Tier Synergy",
    desc: "We look beyond resumes: values, working rhythms, and collaboration style are verified upfront.",
  },
  {
    icon: BookOpen,
    title: "Vetted Candidate Pool",
    stat: "Top 5% Finalists",
    desc: "Every candidate clears rigorous technical screening before meeting your leadership team.",
  },
  {
    icon: Handshake,
    title: "Strategic Bench",
    stat: "Proactive Pipeline",
    desc: "We build and maintain warm talent benches aligned to your upcoming quarters' growth roadmap.",
  },
];

function WorkforceExcellenceSection() {
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
          <SectionBadge>Quality Standards</SectionBadge>
          <SectionHeading>What Separates Good Hires From Great Ones</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {excellence.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.08}
                className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 text-primary dark:text-[#a9c7ff]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-primary dark:text-[#a9c7ff] uppercase tracking-wider block mb-1">
                  {e.stat}
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-2">{e.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{e.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 8. FINAL CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0c0e0f]/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#a9c7ff] mb-4">
              Permanent Search
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Build Teams That Stay. Build Teams That Lead.
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8 font-light">
              Partner with Smart Brains permanent staffing specialists to secure talent that drives long-term business performance.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule a Talent Briefing</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TAB EMBED COMPONENT ───────────────────────────────────────────────────────
export function PermanentStaff() {
  return (
    <div className="w-full">
      <BenefitsSection />
      <JourneySection />
      <TrustStatsSection />
      <IndustriesSection />
      {/* <WhyChooseSection /> */}
      <WorkforceExcellenceSection />
      <CTASection />
    </div>
  );
}

// ─── STANDALONE PAGE COMPONENT ────────────────────────────────────────────────
const PermanentStaffing = () => {
  const animRef = useScrollAnimation();

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 transition-colors duration-300" ref={animRef}>
      <StandaloneHero />
      <BenefitsSection />
      <JourneySection />
      <TrustStatsSection />
      <IndustriesSection />
      <WhyChooseSection />
      <WorkforceExcellenceSection />
      <CTASection />
    </main>
  );
};

export default PermanentStaffing;
