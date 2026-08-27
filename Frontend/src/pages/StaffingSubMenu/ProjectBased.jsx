import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  FolderKanban,
  Clock3,
  Rocket,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
  Users,
  Target,
  BarChart3,
  TrendingUp,
  Cpu,
  Factory,
  Globe,
  Briefcase
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
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
          alt="Project Based Staffing"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <SectionBadge>Outcome-Driven Execution</SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight uppercase text-white">
            Project-Based <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">Staffing</span> Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
            Deploy specialized engineering pods and dedicated multidisciplinary teams built specifically to deliver discrete corporate initiatives, product launches, and infrastructure overhauls.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Build Your Project Pod</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. WHY PROJECT-BASED STAFFING ────────────────────────────────────────────
const whyProject = [
  {
    icon: Target,
    title: "100% Deliverable Focus",
    desc: "Teams are scoped and compensated based on defined milestones, release sprints, and functional deliverables.",
  },
  {
    icon: Clock3,
    title: "Time-Bound Efficiency",
    desc: "Fixed timelines with clear sprint deadlines, keeping your product launch on track without open-ended burn.",
  },
  {
    icon: Rocket,
    title: "Fast Pod Mobilization",
    desc: "Pre-assembled cross-functional squads (Lead Architect, Engineers, QA, PM) mobilized within 72 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-Shared Governance",
    desc: "SLA-backed delivery with formal acceptance criteria for each phase before handover and release.",
  },
  {
    icon: Users,
    title: "Zero Long-Term Lock-in",
    desc: "Engage deep specialized talent for the exact duration of the build, disbanding gracefully at launch.",
  },
  {
    icon: BarChart3,
    title: "Predictable CapEx Budgets",
    desc: "Clear upfront project budgeting that shields your department from unexpected headcount inflation.",
  },
];

function WhyProjectSection() {
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
          <SectionBadge>Execution Advantages</SectionBadge>
          <SectionHeading>Why Enterprises Rely on Project-Based Staffing</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Speed, accountability, and specialized domain pods designed for mission-critical delivery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyProject.map((item, i) => {
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

// ─── 3. ENGAGEMENT DELIVERY MODELS ────────────────────────────────────────────
const deliveryModels = [
  {
    title: "Fixed Scope & Deliverable",
    tag: "Milestone-Driven",
    desc: "Ideal for well-defined engineering projects where requirements, timelines, and budgets are locked upfront.",
    icon: FolderKanban,
  },
  {
    title: "Dedicated Agile Pod",
    tag: "Sprint-Based",
    desc: "A dedicated cross-functional pod (Tech Lead, Developers, QA) integrated to build evolving project requirements.",
    icon: Users,
  },
  {
    icon: Rocket,
    title: "Rapid Turnaround Sprints",
    tag: "Crunch Phases",
    desc: "High-intensity bursts of engineering bandwidth deployed to meet hard go-live deadlines or compliance audits.",
  },
  {
    icon: TrendingUp,
    title: "Managed Project Delivery",
    tag: "End-to-End SLA",
    desc: "Complete project ownership from scoping to deployment, with project managers handling all daily governance.",
  },
];

function DeliveryModelsSection() {
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
          <SectionBadge>Delivery Models</SectionBadge>
          <SectionHeading>Flexible Models Designed Around Your Scope</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryModels.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
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
                  {m.tag}
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-2">{m.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{m.desc}</p>
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
  { target: 98, suffix: "%", label: "Milestone On-Time Delivery" },
  { target: 500, suffix: "+", label: "Completed Project Deployments" },
  { raw: "72h", label: "Squad Mobilization Time" },
  { target: 95, suffix: "%", label: "Client Acceptance Rating" },
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
            <Award className="w-3.5 h-3.5" /> Proven Track Record
          </span>
          <SectionHeading light>Predictable Project Delivery Metrics</SectionHeading>
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
              {s.raw ? (
                <span className="text-4xl sm:text-5xl font-black text-white leading-none">
                  {s.raw}
                </span>
              ) : (
                <Counter target={s.target} suffix={s.suffix} inView={inView} />
              )}
              <p className="text-[#a9c7ff] text-sm mt-2 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. GOVERNANCE & PROJECT USE CASES ────────────────────────────────────────
const useCases = [
  {
    icon: Cpu,
    title: "Cloud Migrations & Modernization",
    desc: "Migrating legacy monolithic architectures to AWS/Azure microservices with dedicated migration squads.",
  },
  {
    icon: Factory,
    title: "EPC Plant & Refinery Overhauls",
    desc: "Mobilizing piping, instrumentation, and site safety engineers for time-sensitive turnaround windows.",
  },
  {
    icon: Globe,
    title: "Enterprise Web & Mobile Launches",
    desc: "End-to-end frontend/backend pods delivering customer-facing portals with automated CI/CD.",
  },
  {
    icon: Briefcase,
    title: "Core Banking & ERP Deployments",
    desc: "Specialized ERP analysts and database engineers executing zero-downtime ledger transitions.",
  },
];

function UseCasesSection() {
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
          <SectionBadge>Proven Applications</SectionBadge>
          <SectionHeading>Typical Project-Based Initiatives We Deliver</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((u, i) => {
            const Icon = u.icon;
            return (
              <motion.div
                key={u.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.08}
                className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 text-primary dark:text-[#a9c7ff]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-2">{u.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{u.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 6. FINAL CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0c0e0f]/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#a9c7ff] mb-4">
              Accelerate Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Launch Your Next Project Faster &amp; With Zero Lag
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8 font-light">
              Get a dedicated, pre-vetted project squad deployed to your requirements within 72 hours.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Scope Your Project With Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TAB EMBED COMPONENT ───────────────────────────────────────────────────────
export function ProjectStaff() {
  return (
    <div className="w-full">
      <WhyProjectSection />
      <DeliveryModelsSection />
      <StatsSection />
      <UseCasesSection />
      <CTASection />
    </div>
  );
}

// ─── STANDALONE PAGE COMPONENT ────────────────────────────────────────────────
const ProjectBased = () => {
  const animRef = useScrollAnimation();

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 transition-colors duration-300" ref={animRef}>
      <StandaloneHero />
      <WhyProjectSection />
      <DeliveryModelsSection />
      <StatsSection />
      <UseCasesSection />
      <CTASection />
    </main>
  );
};

export default ProjectBased;