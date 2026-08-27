import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  Globe,
  Zap,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  Layers,
  GitBranch,
  Cloud,
  Shield,
  MonitorSmartphone,
  Headphones,
  TrendingUp,
  Code2,
  Server,
  TestTube,
  Settings,
  BarChart3,
  ChevronRight,
  Star,
  Cpu,
  Network,
  Workflow,
  Sparkles,
  Award
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

function InView({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

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
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
          alt="Remote IT Staffing"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002a58] via-[#002a58]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <SectionBadge>Borderless Global Engineering</SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight uppercase text-white">
            Remote <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white">IT Staffing</span> Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
            Build high-performing distributed engineering teams without geographic limitations. Vetted developers, cloud architects, and QA engineers working seamlessly aligned with your timezone.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Hire Remote IT Talent</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. BORDERLESS WORKFORCE (Bento Grid) ────────────────────────────────────
const bentoItems = [
  {
    id: "a",
    col: "lg:col-span-4 lg:row-span-2",
    icon: Globe,
    title: "Global Talent Access",
    desc: "Tap into an active network of 50,000+ pre-vetted IT professionals across time zones. Each engineer is tested for code quality, communication, and culture fit.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  },
  {
    id: "b",
    col: "lg:col-span-4",
    icon: TrendingUp,
    title: "Rapid Scaling Velocity",
    desc: "Deploy individual specialists or entire cross-functional pods in days instead of months.",
    stat: "72h",
    statLabel: "Deployment Speed",
  },
  {
    id: "c",
    col: "lg:col-span-4",
    icon: BarChart3,
    title: "Cost Optimization",
    desc: "Reduce hiring and facilities overhead by up to 50% without compromising on engineering caliber.",
    stat: "50%",
    statLabel: "Cost Advantage",
  },
  {
    id: "d",
    col: "lg:col-span-4",
    icon: Clock,
    title: "Continuous 24/7 Delivery",
    desc: "Follow-the-sun development cycles with overlapping shifts, async workflows, and live visibility.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
  },
  {
    id: "e",
    col: "lg:col-span-4",
    icon: Zap,
    title: "SLA-Driven Output",
    desc: "Agile sprints governed by clear sprint commits, weekly demos, and measurable KPIs.",
    stat: "98%",
    statLabel: "SLA Fulfillment",
  },
  {
    id: "f",
    col: "lg:col-span-4",
    icon: Settings,
    title: "Flexible Engagement",
    desc: "Choose between dedicated developers, augmented pods, or managed remote units.",
    stat: "100%",
    statLabel: "Data Security",
  },
];

function BorderlessWorkforce() {
  return (
    <section className="py-20 bg-slate-50/60 dark:bg-[#0c0e0f]/50 transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <InView className="text-center max-w-2xl mx-auto mb-14">
          <SectionBadge>Borderless Delivery</SectionBadge>
          <SectionHeading>Engineered For Organizations That Think Beyond Borders</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Enterprise-grade remote engineering solutions combining global talent pools with structured governance.
          </p>
        </InView>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[220px]"
        >
          {bentoItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className={`${item.col} group relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 flex flex-col justify-between hover:border-primary/40 dark:hover:border-[#a9c7ff]/40 hover:shadow-xl transition-all duration-300`}
              >
                {item.img && (
                  <>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-white/80 dark:via-slate-900/80 to-transparent" />
                  </>
                )}

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3 text-primary dark:text-[#a9c7ff]">
                    <Icon className="w-5 h-5" />
                  </div>

                  {item.stat && (
                    <div className="mb-2">
                      <p className="text-3xl font-black text-slate-900 dark:text-white leading-none">{item.stat}</p>
                      <p className="text-[11px] font-bold text-primary dark:text-[#a9c7ff] uppercase tracking-wider mt-1">{item.statLabel}</p>
                    </div>
                  )}

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. REMOTE DELIVERY JOURNEY ──────────────────────────────────────────────
const journey = [
  { id: 1, title: "Discovery", sub: "Intake", desc: "Mapping your architecture, framework versions, timezone overlap, and sprint rituals.", icon: Layers },
  { id: 2, title: "Curation", sub: "Screening", desc: "Matching top 5% vetted profiles and conducting joint technical evaluations.", icon: Users },
  { id: 3, title: "Enablement", sub: "Setup", desc: "Configuring secure VPNs, NDA governance, repos, and communication channels.", icon: Shield },
  { id: 4, title: "Onboarding", sub: "Integration", desc: "Seamless introduction to the codebase, sprint boards (Jira/GitHub), and standups.", icon: GitBranch },
  { id: 5, title: "Delivery", sub: "Execution", desc: "Sprint releases backed by continuous code reviews, QA checks, and KPI tracking.", icon: Zap },
];

function RemoteDeliveryJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white dark:bg-[#0c0e0f] overflow-hidden transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <InView className="text-center max-w-2xl mx-auto mb-14">
          <SectionBadge>Remote Onboarding</SectionBadge>
          <SectionHeading>From Brief To Embedded Remote Team</SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A frictionless deployment lifecycle designed to launch your remote workforce in days.
          </p>
        </InView>

        {/* Step Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {journey.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            return (
              <button
                key={step.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>0{step.id}. {step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-slate-50/80 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800"
          >
            <div>
              <span className="text-xs font-bold text-primary dark:text-[#a9c7ff] uppercase tracking-wider mb-2 block">
                Stage 0{journey[active].id} • {journey[active].sub}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {journey[active].title} Phase
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {journey[active].desc}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 disabled:opacity-40"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActive(Math.min(journey.length - 1, active + 1))}
                  disabled={active === journey.length - 1}
                  className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/90 disabled:opacity-40"
                >
                  Next Step →
                </button>
              </div>
            </div>

            <div className="relative h-60 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Remote IT Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002a58]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-xs uppercase tracking-wider text-[#a9c7ff] font-bold">Live Remote Pods</div>
                <div className="text-base font-bold">100% Timezone Aligned Collaboration</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── 4. CAPABILITY NETWORK (Interactive SVG Network) ──────────────────────────
const caps = [
  { id: "fe", label: "Frontend", icon: MonitorSmartphone, x: 50, y: 12, detail: "React · Next.js · Vue · Angular" },
  { id: "be", label: "Backend", icon: Server, x: 80, y: 35, detail: "Node · Python · Java · Go · .NET" },
  { id: "cl", label: "Cloud", icon: Cloud, x: 68, y: 75, detail: "AWS · Azure · GCP · Kubernetes" },
  { id: "qa", label: "QA & Testing", icon: TestTube, x: 32, y: 75, detail: "Cypress · Selenium · Playwright" },
  { id: "do", label: "DevOps", icon: Settings, x: 20, y: 35, detail: "CI/CD · Terraform · Docker" },
  { id: "su", label: "Architecture", icon: Headphones, x: 50, y: 50, detail: "Microservices · Security · API" },
];

function CapabilityNetwork() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 bg-slate-50/60 dark:bg-[#0c0e0f]/50 transition-colors duration-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <InView>
            <SectionBadge>Specialized Disciplines</SectionBadge>
            <SectionHeading className="mb-4">
              Full-Stack Remote Engineering Capabilities
            </SectionHeading>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              A connected network of engineering disciplines — each team working in concert to ensure every layer of your technical stack is covered by elite remote professionals.
            </p>

            <ul className="space-y-3">
              {caps.map((cap) => (
                <li
                  key={cap.id}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                    hovered === cap.id
                      ? "bg-primary/10 dark:bg-primary/25 border-primary/40 dark:border-[#a9c7ff]/40 text-primary dark:text-[#a9c7ff]"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                  onMouseEnter={() => setHovered(cap.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="font-bold text-sm">{cap.label}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{cap.detail}</span>
                </li>
              ))}
            </ul>
          </InView>

          {/* SVG Network Graph */}
          <div className="relative h-80 sm:h-96 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-4 shadow-sm flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              {caps.map((cap) => (
                <line
                  key={cap.id}
                  x1="50"
                  y1="50"
                  x2={cap.x}
                  y2={cap.y}
                  stroke={hovered === cap.id ? "#002a58" : "#cbd5e1"}
                  strokeWidth={hovered === cap.id ? "0.8" : "0.4"}
                  strokeDasharray="2 1"
                  className="transition-colors duration-300"
                />
              ))}

              {caps.map((cap) => {
                const isCenter = cap.id === "su";
                const isHovered = hovered === cap.id;
                return (
                  <g
                    key={cap.id}
                    transform={`translate(${cap.x}, ${cap.y})`}
                    onMouseEnter={() => setHovered(cap.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                  >
                    <circle
                      r={isCenter ? 8 : isHovered ? 7 : 6}
                      fill={isHovered || isCenter ? "#002a58" : "#004080"}
                      stroke="#a9c7ff"
                      strokeWidth="0.5"
                    />
                    <text
                      y={isCenter ? 12 : 10}
                      textAnchor="middle"
                      fontSize="3.2"
                      fontWeight="bold"
                      fill="#002a58"
                      className="select-none dark:fill-[#a9c7ff]"
                    >
                      {cap.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 5. STATS SECTION ────────────────────────────────────────────────────────
const stats = [
  { value: "24/7", label: "Global Shift Overlap" },
  { value: "50k+", label: "Vetted Tech Network" },
  { value: "96%", label: "Client SLA Retention" },
  { value: "50%", label: "Average Cost Savings" },
];

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3b] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#a9c7ff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={i * 0.08}
              className="bg-white/10 dark:bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10"
            >
              <p className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">{s.value}</p>
              <p className="text-xs sm:text-sm text-[#a9c7ff] font-medium">{s.label}</p>
            </motion.div>
          ))}
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
              Deploy Remote Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Build High-Performing Remote Teams Without Borders
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8 font-light">
              Connect with top remote developers, QA engineers, and cloud architects ready to integrate into your sprints in 72 hours.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule a Remote Talent Call</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TAB EMBED COMPONENT ───────────────────────────────────────────────────────
export function RemoteStaff() {
  return (
    <div className="w-full">
      <BorderlessWorkforce />
      <RemoteDeliveryJourney />
      <CapabilityNetwork />
      <StatsSection />
      <CTASection />
    </div>
  );
}

// ─── STANDALONE PAGE COMPONENT ────────────────────────────────────────────────
const RemoteIt = () => {
  const animRef = useScrollAnimation();

  return (
    <main className="mt-20 min-h-screen bg-[#f8f9fa] dark:bg-[#0c0e0f] text-slate-900 dark:text-slate-100 transition-colors duration-300" ref={animRef}>
      <StandaloneHero />
      <BorderlessWorkforce />
      <RemoteDeliveryJourney />
      <CapabilityNetwork />
      <StatsSection />
      <CTASection />
    </main>
  );
};

export default RemoteIt;