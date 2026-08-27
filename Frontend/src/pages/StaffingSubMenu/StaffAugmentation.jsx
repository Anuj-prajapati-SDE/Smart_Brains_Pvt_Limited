import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
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
  Code2,
  Server,
  Cloud,
  TestTube2,
  GitBranch,
  Database,
  Timer,
  CalendarRange,
  FolderKanban,
  Sparkles,
  Award,
  ShieldCheck
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
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
          alt="Staff Augmentation Solutions"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <SectionBadge>On-Demand Engineering Bandwidth</SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight uppercase text-white">
            Staff <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">Augmentation</span> Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
            Quickly inject elite software engineers, technical architects, and domain experts into your existing product teams to meet critical release deadlines and bridge skill gaps.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Augment Your Team in 72h</span>
              <ArrowRight className="w-4 h-4" />
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
    title: "Rapid Team Ramp-Up",
    desc: "Integrate pre-screened technical experts into your active sprints within 72 hours, bypassing long hiring cycles.",
  },
  {
    icon: BarChart2,
    title: "Niche Specialized Stacks",
    desc: "Gain instant access to hard-to-find skills across modern frameworks, legacy systems, cloud migrations, and AI.",
  },
  {
    icon: Shuffle,
    title: "Zero Headcount Friction",
    desc: "Scale developers up or down based on release milestones without expanding permanent corporate overhead.",
  },
  {
    icon: Zap,
    title: "Accelerated Time-to-Market",
    desc: "Instantly remove product development bottlenecks and deliver features ahead of roadmap schedules.",
  },
  {
    icon: Clock,
    title: "Day-One Productivity",
    desc: "Augmented engineers adapt quickly to your CI/CD workflows, Git repos, Slack channels, and Agile ceremonies.",
  },
  {
    icon: RefreshCw,
    title: "Continuity Safeguard",
    desc: "Prevent critical delivery stalls caused by sudden internal attrition or unexpected project scope increases.",
  },
];

function HowItHelpsSection() {
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
          <SectionBadge>Agile Capacity</SectionBadge>
          <SectionHeading>Why High-Growth Teams Choose Staff Augmentation</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            When internal engineering capacity hits a bottleneck, augmentation provides the fastest route back to peak velocity.
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

// ─── 3. AUGMENTATION MODEL ────────────────────────────────────────────────────
const modelSteps = [
  {
    icon: Search,
    step: "Identify Gaps",
    title: "Skill & Stack Scoping",
    desc: "Mapping specific language frameworks, seniority levels, project milestones, and time zones.",
  },
  {
    icon: UserCheck,
    step: "Select Talent",
    title: "Curated Profiles in 48h",
    desc: "Receiving verified senior developer profiles matched for codebase familiarity and culture fit.",
  },
  {
    icon: Users,
    step: "Integrate",
    title: "Day-One Onboarding",
    desc: "Direct integration into your sprint boards (Jira, GitHub), Slack channels, and standups.",
  },
  {
    icon: Rocket,
    step: "Deliver",
    title: "High-Velocity Output",
    desc: "Executing against sprint commits with full accountability, pull-request reviews, and quality gates.",
  },
  {
    icon: TrendingUp,
    step: "Scale or Pivot",
    title: "Flexible Elasticity",
    desc: "Expanding team size or adjusting developer focus as technical requirements evolve.",
  },
];

function AugmentationModelSection() {
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
          <SectionBadge>Execution Lifecycle</SectionBadge>
          <SectionHeading>From Requirement to Embedded Engineers</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A frictionless 5-stage augmentation model designed to keep your delivery timelines moving forward.
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

          {modelSteps.map((s, i) => {
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
                  Step 0{i + 1} • {s.step}
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
          {modelSteps.map((s, i) => {
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
                    Step 0{i + 1} • {s.step}
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
  { raw: "72h", label: "Average Integration Speed" },
  { target: 50, suffix: "k+", label: "Vetted Tech Professionals" },
  { target: 95, suffix: "%", label: "Client Project Success Rate" },
  { target: 40, suffix: "%", label: "Sprint Velocity Acceleration" },
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
            <Award className="w-3.5 h-3.5" /> Benchmarked Results
          </span>
          <SectionHeading light>Speed &amp; Quality Delivered at Scale</SectionHeading>
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

// ─── 5. TALENT CAPABILITIES ──────────────────────────────────────────────────
const talentAreas = [
  {
    icon: Code2,
    name: "Frontend Engineering",
    desc: "React, Next.js, Vue, Angular, TypeScript, Tailwind, micro-frontends",
  },
  {
    icon: Server,
    name: "Backend & Cloud APIs",
    desc: "Node.js, Python/Django, Java/Spring, Go, .NET Core, GraphQL, REST",
  },
  {
    icon: Cloud,
    name: "Cloud & Infrastructure",
    desc: "AWS, Microsoft Azure, Google Cloud, Terraform, Kubernetes, Helm",
  },
  {
    icon: TestTube2,
    name: "QA & Test Automation",
    desc: "Selenium, Cypress, Playwright, performance benchmarking, security testing",
  },
  {
    icon: GitBranch,
    name: "DevOps & CI/CD Pipelines",
    desc: "GitHub Actions, GitLab CI, Docker containerization, DevSecOps governance",
  },
  {
    icon: Database,
    name: "Data & AI Engineering",
    desc: "PostgreSQL, MongoDB, Snowflake, Spark, PyTorch, LLM pipeline integrations",
  },
];

function TalentCapabilitiesSection() {
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
          <SectionBadge>Technical Stack</SectionBadge>
          <SectionHeading>Engineering Stacks Ready For Deployment</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {talentAreas.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
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
                  <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">{t.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 6. ENGAGEMENT OPTIONS ────────────────────────────────────────────────────
const engagements = [
  {
    icon: Timer,
    title: "Short-Term Sprints",
    tag: "2 to 12 Weeks",
    desc: "Rapid reinforcement for feature launches, crunch periods, or bug fixes with immediate availability.",
  },
  {
    icon: CalendarRange,
    title: "Long-Term Integration",
    tag: "3 to 12+ Months",
    desc: "Extended engineering capacity for multi-quarter core platform buildouts and ongoing feature delivery.",
  },
  {
    icon: FolderKanban,
    title: "Milestone-Based Pods",
    tag: "Deliverable Driven",
    desc: "Scoped development pods tied to specific functional outcomes and governed against sprint metrics.",
  },
  {
    icon: Users,
    title: "Full Dedicated Teams",
    tag: "Cross-Functional",
    desc: "Self-contained pods (Frontend, Backend, QA, Tech Lead) operating as an embedded unit within your business.",
  },
];

function EngagementOptionsSection() {
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
          <SectionBadge>Flexible Models</SectionBadge>
          <SectionHeading>Engagement Frameworks Tailored To Your Needs</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
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
                  {e.tag}
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

// ─── 7. FINAL CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0c0e0f]/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#a9c7ff] mb-4">
              Extend Your Engineering Power
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Ready to Accelerate Your Sprint Releases?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8 font-light">
              Tell us your tech stack and target start date. We'll match pre-vetted senior engineers ready to start within 72 hours.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request Developer Profiles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TAB EMBED COMPONENT ───────────────────────────────────────────────────────
export function Augmentation() {
  return (
    <div className="w-full">
      <HowItHelpsSection />
      <AugmentationModelSection />
      <StatsSection />
      <TalentCapabilitiesSection />
      <EngagementOptionsSection />
      <CTASection />
    </div>
  );
}

// ─── STANDALONE PAGE COMPONENT ────────────────────────────────────────────────
const StaffAugmentation = () => {
  const animRef = useScrollAnimation();

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 transition-colors duration-300" ref={animRef}>
      <StandaloneHero />
      <HowItHelpsSection />
      <AugmentationModelSection />
      <StatsSection />
      <TalentCapabilitiesSection />
      <EngagementOptionsSection />
      <CTASection />
    </main>
  );
};

export default StaffAugmentation;
