import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Zap,
  Shuffle,
  Rocket,
  Clock,
  RefreshCw,
  Search,
  UserCheck,
  BarChart2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  ChevronRight,
  Code2,
  Server,
  Cloud,
  TestTube2,
  GitBranch,
  Database,
  Timer,
  CalendarRange,
  FolderKanban,
  Contact,
  Shield,
  Eye,
} from "lucide-react";

// ─── Motion Presets ───────────────────────────────────────────────────────────
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

// ─── Shared Primitives ────────────────────────────────────────────────────────
function Eyebrow({ children, inverted = false }) {
  return (
    <p
      className={`text-[11px] font-bold tracking-[0.22em] uppercase mb-3 flex items-center gap-2 ${
        inverted ? "text-sky-300" : "text-[#1A3A8F]"
      }`}
    >
      <span
        className={`inline-block w-6 h-[2px] rounded-full ${
          inverted ? "bg-sky-400" : "bg-[#1A3A8F]"
        }`}
      />
      {children}
    </p>
  );
}

function H2({ children, inverted = false, className = "" }) {
  return (
    <h2
      className={`text-[1.95rem] md:text-[2.55rem] font-bold leading-[1.17] tracking-tight ${
        inverted ? "text-white" : "text-[#0D1F4E]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function Lead({ children, inverted = false, className = "" }) {
  return (
    <p
      className={`text-[0.9375rem] leading-[1.8] ${
        inverted ? "text-slate-300" : "text-slate-500"
      } ${className}`}
    >
      {children}
    </p>
  );
}

function NavyRule() {
  return (
    <span className="block w-10 h-[3px] rounded-full bg-[#1A3A8F] mt-4 mb-7" />
  );
}

// ─── 1. OVERVIEW ─────────────────────────────────────────────────────────────
const overviewHighlights = [
  {
    icon: Users,
    label: "Team Extension",
    sub: "Augment existing teams without restructuring",
  },
  {
    icon: Zap,
    label: "Accelerated Delivery",
    sub: "Skilled professionals ready within 72 hours",
  },
  {
    icon: Shuffle,
    label: "Flexible Engagement",
    sub: "Scale up or down as project needs evolve",
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
              FLEXIBLE CAPABILITY
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              STAFF AUGMENTATION
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              A powerful outsourcing strategy that allows you to quickly inject specialized tech talent and skilled engineers into your existing internal teams to meet immediate project deadlines and scale your capabilities
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

// ─── 2. HOW STAFF AUGMENTATION HELPS ─────────────────────────────────────────
const benefits = [
  {
    icon: Rocket,
    title: "Rapid Team Expansion",
    desc: "Add skilled professionals to your team within days — no lengthy recruitment cycles or onboarding delays.",
  },
  {
    icon: BarChart2,
    title: "Specialized Skills",
    desc: "Access niche technical expertise your internal team may not have, exactly when a project demands it.",
  },
  {
    icon: Shuffle,
    title: "Flexible Engagement",
    desc: "Ramp capacity up or down based on project milestones without restructuring your permanent workforce.",
  },
  {
    icon: Zap,
    title: "Faster Delivery",
    desc: "Augmented teams reduce time-to-market by closing skill and bandwidth gaps that slow delivery velocity.",
  },
  {
    icon: Clock,
    title: "Lower Hiring Delay",
    desc: "Skip the full-cycle recruitment process — pre-screened professionals are ready to engage immediately.",
  },
  {
    icon: RefreshCw,
    title: "Business Continuity",
    desc: "Prevent delivery gaps during transitions, sudden departures, or unplanned capacity shortfalls.",
  },
];

function HowItHelpsSection() {
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
          <Eyebrow>How It Helps</Eyebrow>
          <H2>
            Why Teams Choose<br />
            Staff Augmentation
          </H2>
          <NavyRule />
          <Lead>
            When internal teams hit capacity ceilings or skill walls,
            augmentation is the fastest path back to full delivery momentum.
          </Lead>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.07}
              className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#1A3A8F]/20 transition-all duration-300"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-[#1A3A8F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] flex items-center justify-center mb-5 group-hover:bg-[#0D1F4E] transition-colors duration-300">
                <b.icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-[#1A3A8F] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-[#0D1F4E] font-semibold text-[0.9375rem] mb-2">
                {b.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. AUGMENTATION MODEL ────────────────────────────────────────────────────
const modelSteps = [
  {
    icon: Search,
    step: "Identify Needs",
    desc: "We work with your team to map skill gaps, delivery timelines, and the exact profile needed.",
  },
  {
    icon: UserCheck,
    step: "Select Talent",
    desc: "Pre-screened candidates are presented within days — matched on skills, experience, and team fit.",
  },
  {
    icon: Users,
    step: "Integrate Team",
    desc: "Augmented professionals onboard directly into your workflows, tools, and communication channels.",
  },
  {
    icon: Rocket,
    step: "Deliver Results",
    desc: "Your expanded team executes against project goals with full accountability and performance visibility.",
  },
  {
    icon: TrendingUp,
    step: "Scale",
    desc: "Add more professionals, extend engagements, or transition talent as your program evolves.",
  },
];

function AugmentationModelSection() {
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
          <Eyebrow>The Augmentation Model</Eyebrow>
          <H2>From Requirement to Running Team</H2>
          <NavyRule />
          <Lead>
            A structured five-stage process that gets the right professionals
            embedded in your team — fast, with zero disruption to current delivery.
          </Lead>
        </motion.div>

        {/* Desktop: circle-node connector */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-100" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.3, delay: 0.35, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-[#1A3A8F]"
          />
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {modelSteps.map((s, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.12}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-white border-[3px] border-[#1A3A8F] flex flex-col items-center justify-center mb-6 shadow-md shadow-[#1A3A8F]/10">
                  <s.icon
                    size={22}
                    strokeWidth={1.7}
                    className="text-[#1A3A8F] mb-1"
                  />
                  <span className="text-[#0D1F4E] font-bold text-[11px] tracking-wide uppercase">
                    {s.step}
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stacked */}
        <div className="lg:hidden flex flex-col gap-0 relative">
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-slate-100" />
          <div
            className="absolute left-6 top-6 w-[2px] bg-[#1A3A8F] transition-all duration-[1400ms]"
            style={{ height: inView ? "calc(100% - 24px)" : "0" }}
          />
          {modelSteps.map((s, i) => (
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

// ─── 4. BUSINESS IMPACT ───────────────────────────────────────────────────────
const stats = [
  { raw: "72h", label: "Faster Deployment", sub: "From requirement to team integration" },
  { target: 500, suffix: "+", label: "Professionals Available", sub: "Across tech and functional domains" },
  { target: 95, suffix: "%", label: "Client Satisfaction", sub: "On delivery quality and team fit" },
  { target: 80, suffix: "%", label: "Delivery Acceleration", sub: "Reduction in delivery lag for augmented teams" },
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
            Speed and Quality,<br />Measured
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
              {s.raw ? (
                <span className="text-5xl md:text-6xl font-bold text-white leading-none">
                  {s.raw}
                </span>
              ) : (
                <Counter target={s.target} suffix={s.suffix} inView={inView} />
              )}
              <p className="text-white font-semibold text-sm mt-3">{s.label}</p>
              <p className="text-slate-400 text-xs mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. TALENT CAPABILITIES ──────────────────────────────────────────────────
const talentAreas = [
  {
    icon: Code2,
    name: "Frontend Development",
    desc: "React, Vue, Angular, and modern web UI engineering",
  },
  {
    icon: Server,
    name: "Backend Development",
    desc: "Node.js, Java, Python, .NET, and API architecture",
  },
  {
    icon: Cloud,
    name: "Cloud & Infrastructure",
    desc: "AWS, Azure, GCP, DevSecOps, and cloud migrations",
  },
  {
    icon: TestTube2,
    name: "Quality Assurance",
    desc: "Manual, automation, performance, and regression testing",
  },
  {
    icon: GitBranch,
    name: "DevOps & CI/CD",
    desc: "Pipeline engineering, containerization, and release management",
  },
  {
    icon: Database,
    name: "Data & Analytics",
    desc: "Engineering, BI, ML pipelines, and data platform support",
  },
];

function TalentCapabilitiesSection() {
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
          <Eyebrow>Talent Capabilities</Eyebrow>
          <H2>Skills We Bring to Your Team</H2>
          <NavyRule />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {talentAreas.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#1A3A8F]/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EEF2FB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D1F4E] transition-colors duration-300">
                <t.icon
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#1A3A8F] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <h4 className="text-[#0D1F4E] font-semibold text-sm mb-1">{t.name}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
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
  { label: "Fast onboarding — professionals ready to contribute from day one" },
  { label: "Rigorously screened talent matched to your team culture and stack" },
  { label: "Flexible scaling — add or release capacity without friction" },
  { label: "Dedicated engagement managers as your single point of contact" },
  { label: "Full delivery transparency through weekly updates and reporting" },
  { label: "Replacement guarantee if a professional is not the right fit" },
];

function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Right image — reversed layout vs Overview */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=900&q=80"
                alt="Enterprise engineering team reviewing project architecture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F4E]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl border-2 border-[#1A3A8F]/10 -z-10" />
          </motion.div>

          {/* Left content */}
          <div className="order-1 lg:order-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
            >
              <Eyebrow>Why Choose Us</Eyebrow>
              <H2>
                The Augmentation Partner<br />
                <span className="text-[#1A3A8F]">Your Teams Can Rely On</span>
              </H2>
              <NavyRule />
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
            >
              <Lead className="mb-9">
                We don't just fill seats. Every professional we place is evaluated
                against your specific environment, delivery expectations, and
                team dynamics — so integration is seamless and contribution is immediate.
              </Lead>
            </motion.div>

            <ul className="space-y-4">
              {choicePoints.map((p, i) => (
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
        </div>
      </div>
    </section>
  );
}

// ─── 7. ENGAGEMENT OPTIONS ────────────────────────────────────────────────────
const engagements = [
  {
    icon: Timer,
    title: "Short-Term",
    tag: "Weeks to 3 months",
    desc: "Rapid support for delivery sprints, go-live periods, or sudden capacity surges with immediate availability.",
  },
  {
    icon: CalendarRange,
    title: "Long-Term",
    tag: "3 months and beyond",
    desc: "Extended augmentation for sustained program delivery, platform build-outs, or ongoing product development.",
  },
  {
    icon: FolderKanban,
    title: "Project Support",
    tag: "Scope-defined",
    desc: "Outcome-oriented augmentation for defined project phases — scoped to milestones and managed against deliverables.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    tag: "Fully embedded",
    desc: "A complete cross-functional team — engineering, QA, DevOps — operating as a managed delivery unit within your organization.",
  },
];

function EngagementOptionsSection() {
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
          <Eyebrow inverted>Engagement Options</Eyebrow>
          <H2 inverted>
            Flexible Models for<br />Every Project Type
          </H2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {engagements.map((e, i) => (
            <motion.div
              key={e.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-[#1A3A8F] transition-colors duration-300">
                <e.icon
                  size={19}
                  strokeWidth={1.75}
                  className="text-sky-300 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <p className="text-sky-200 text-[11px] font-semibold tracking-widest uppercase mb-2">
                {e.tag}
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <Eyebrow>Get Started</Eyebrow>
            <H2 className="mb-6">
              Extend Teams.<br />
              <span className="text-[#1A3A8F]">Accelerate Outcomes.</span>
            </H2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-slate-500 text-base max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Tell us where your team needs reinforcement. We'll match the right
            professionals to your project within 72 hours — ready to integrate
            and deliver from day one.
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

// --- 9. -----

export function Augmentation() {

  const animRef = useScrollAnimation()

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <HowItHelpsSection />
      <AugmentationModelSection />
      <StatsSection />
      <TalentCapabilitiesSection />
      <WhyChooseSection />
      <EngagementOptionsSection />
    </main>
  );
}


// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
function StaffAugmentation() {

  const animRef = useScrollAnimation()

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <OverviewSection />
      <HowItHelpsSection />
      <AugmentationModelSection />
      <StatsSection />
      <TalentCapabilitiesSection />
      <WhyChooseSection />
      <EngagementOptionsSection />
      <CTASection />
    </main>
  );
}

export default StaffAugmentation
