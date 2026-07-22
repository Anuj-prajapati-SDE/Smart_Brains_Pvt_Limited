


// --------EXCLLENT CODE OF REMOTE SECTION SEE AND LEARN FROM THIS--




import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Globe, Zap, Users, Clock, ArrowRight, CheckCircle2,
  Layers, GitBranch, Cloud, Shield, MonitorSmartphone, Headphones,
  TrendingUp, Code2, Server, TestTube, Settings, BarChart3,
  ChevronRight, Star, Cpu, Network, Workflow
} from "lucide-react";

/* ─── Design tokens ───────────────────────────────────────────────── */
const NAVY   = "#0A1628";
const NAVY2  = "#0D1F3C";
const BLUE   = "#1E3A5F";
const ACCENT = "#2563EB";
const GLOW   = "#3B82F6";
const SILVER = "#94A3B8";
const WHITE  = "#F8FAFC";

/* ─── Unsplash image pool ─────────────────────────────────────────── */
const IMGS = {
  globe:    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  team:     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
  collab:   "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
  remote:   "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80",
  office:   "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  code:     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
  meeting:  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=900&q=80",
  network:  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
};

/* ─── Shared motion variants ──────────────────────────────────────── */
const fadeUp   = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };
const stagger  = { show: { transition: { staggerChildren: 0.12 } } };

function InView({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   1. REMOTE IT EXPERIENCE
════════════════════════════════════════════════════════════════════ */
function RemoteITExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0,1], ["-8%", "8%"]);
  const y2 = useTransform(scrollYProgress, [0,1], ["8%", "-8%"]);

  const pillars = [
    { icon: Globe,  title: "Global Talent",        desc: "Access pre-vetted professionals across 40+ countries, aligned to your timezone and delivery cadence." },
    { icon: Workflow, title: "Flexible Delivery",  desc: "Scale teams up or down instantly. Full-time, part-time, or project-based — you choose the model." },
    { icon: Clock,  title: "24 / 7 Collaboration", desc: "Continuous delivery cycles with overlapping shifts, async workflows, and real-time visibility." },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden py-32 bg-[#060E1C]">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Eye­brow */}
        <InView>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-6">
            <span className="w-8 h-px bg-blue-400" /> Remote IT Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] max-w-3xl">
            The World is Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Engineering Team
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-xl leading-relaxed">
            We dissolve the boundaries between your business and the world's best IT talent — 
            delivering dedicated, high-performance remote professionals at enterprise scale.
          </p>
        </InView>

        {/* Editorial grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left: tall image stack */}
          <div className="lg:col-span-5 relative h-[520px] lg:h-[680px]">
            <motion.div style={{ y: y1 }} className="absolute inset-0 rounded-3xl overflow-hidden">
              <img src={IMGS.globe} alt="Global operations" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060E1C] via-transparent to-transparent" />
            </motion.div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}
              className="absolute bottom-8 left-6 right-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-300 font-medium">Live deployments active</span>
              </div>
              <div className="flex gap-4">
                {["APAC","EMEA","AMER"].map(r => (
                  <div key={r} className="flex-1 text-center">
                    <p className="text-xs text-slate-500 mb-1">{r}</p>
                    <div className="h-1 rounded-full bg-blue-500/30 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: r === "EMEA" ? "90%" : r === "APAC" ? "75%" : "60%" }}
                        transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }} viewport={{ once: true }}
                        className="h-full bg-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: pillars + second image */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Second image */}
            <motion.div style={{ y: y2 }} className="relative h-52 rounded-3xl overflow-hidden">
              <img src={IMGS.team} alt="Remote team" className="w-full h-full object-cover object-top opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060E1C]/60 to-transparent" />
              <div className="absolute inset-0 flex items-center pl-8">
                <p className="text-2xl font-bold text-white max-w-xs leading-snug">Professionals who feel like they're down the hall</p>
              </div>
            </motion.div>

            {/* Pillar cards */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-3 gap-4">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp}
                  className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center mb-4 group-hover:bg-blue-500/25 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   2. BORDERLESS WORKFORCE — Bento
════════════════════════════════════════════════════════════════════ */
const bentoItems = [
  {
    id: "a", col: "lg:col-span-4 lg:row-span-2", icon: Globe, accent: "from-blue-600 to-blue-400",
    title: "Global Talent Access",
    desc: "Tap into a pre-screened network of 50,000+ IT professionals across six continents. Every candidate is skills-tested, background-verified, and interview-ready.",
    img: IMGS.globe, tall: true,
  },
  {
    id: "b", col: "lg:col-span-4", icon: TrendingUp, accent: "from-indigo-500 to-blue-500",
    title: "Scalable Teams",
    desc: "One hire or a hundred — your team scales in days, not months.",
    img: null, stat: "10×", statLabel: "faster scaling",
  },
  {
    id: "c", col: "lg:col-span-4", icon: BarChart3, accent: "from-blue-500 to-cyan-400",
    title: "Reduced Cost",
    desc: "Cut IT staffing costs by up to 60% without compromising on quality or commitment.",
    img: null, stat: "60%", statLabel: "cost reduction",
  },
  {
    id: "d", col: "lg:col-span-4", icon: Clock, accent: "from-violet-500 to-blue-400",
    title: "Continuous Collaboration",
    desc: "Overlapping time zones, async handoffs, and real-time dashboards keep your delivery cycle unbroken.",
    img: IMGS.collab, tall: false,
  },
  {
    id: "e", col: "lg:col-span-4", icon: Zap, accent: "from-blue-400 to-sky-400",
    title: "Delivery Efficiency",
    desc: "SLA-driven delivery with weekly reporting, sprint reviews, and transparent KPIs.",
    img: null, stat: "98%", statLabel: "on-time delivery",
  },
  {
    id: "f", col: "lg:col-span-4", icon: Settings, accent: "from-slate-500 to-blue-500",
    title: "Flexible Operations",
    desc: "Choose your engagement: dedicated team, team augmentation, or managed service. Swap models anytime.",
    img: null, stat: "3", statLabel: "delivery models",
  },
];

function BorderlessWorkforce() {
  return (
    <section className="py-28 bg-[#060E1C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <InView className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-5">
            <span className="w-8 h-px bg-blue-400" /> Borderless Workforce
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Built for organizations that think<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">beyond geography</span>
          </h2>
        </InView>

        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[220px]"
        >
          {bentoItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.id} variants={fadeUp}
                className={`${item.col} group relative rounded-3xl overflow-hidden border border-white/8 bg-white/[0.03] hover:border-blue-500/40 transition-all duration-500 cursor-default`}
              >
                {item.img && (
                  <img src={item.img} alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-[#060E1C]/80 to-[#0D1F3C]/60" />
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} bg-opacity-20 flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {item.stat && (
                    <p className="text-4xl font-bold text-white mb-1">{item.stat}</p>
                  )}
                  {item.statLabel && (
                    <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3">{item.statLabel}</p>
                  )}
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   3. REMOTE DELIVERY JOURNEY
════════════════════════════════════════════════════════════════════ */
const journey = [
  { id: 1, title: "Requirement",        sub: "Discovery", desc: "We map your technical needs, culture, and delivery rhythm through a structured intake.", icon: Layers },
  { id: 2, title: "Match Team",         sub: "Curation",  desc: "Our AI-assisted matching engine shortlists vetted talent within 48 hours.", icon: Users },
  { id: 3, title: "Remote Enablement",  sub: "Setup",     desc: "Secure environments, toolchains, and communication protocols established before day one.", icon: Shield },
  { id: 4, title: "Integration",        sub: "Onboarding",desc: "Seamless onboarding to your stack, rituals, and team culture — no friction.", icon: GitBranch },
  { id: 5, title: "Continuous Delivery",sub: "Live",      desc: "Sprint-based delivery with KPI dashboards, QA gates, and continuous improvement cycles.", icon: Zap },
];

function RemoteDeliveryJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-[#070F1D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,#1e3a5f22,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <InView className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-5">
            <span className="w-8 h-px bg-blue-400" /> Remote Delivery Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
            From brief to delivery in<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">days, not months</span>
          </h2>
        </InView>

        {/* Step navigation row */}
        <div className="relative flex items-start gap-0 mb-10 overflow-x-auto pb-2">
          {journey.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            return (
              <div key={step.id} className="flex items-center flex-shrink-0">
                <button onClick={() => setActive(i)}
                  className={`group flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 min-w-[120px]
                    ${isActive ? "bg-blue-600/20 border border-blue-500/40" : "hover:bg-white/5 border border-transparent"}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                    ${isActive ? "bg-blue-600 shadow-lg shadow-blue-500/30" : "bg-white/5 group-hover:bg-white/10"}`}>
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"}`} />
                  </div>
                  <span className={`text-xs font-semibold text-center ${isActive ? "text-blue-300" : "text-slate-500"}`}>{step.title}</span>
                  <span className={`text-[10px] tracking-wider uppercase ${isActive ? "text-blue-400" : "text-slate-600"}`}>{step.sub}</span>
                </button>
                {i < journey.length - 1 && (
                  <div className="flex-1 mx-1 relative">
                    <div className="h-px w-10 bg-white/10" />
                    <motion.div
                      className="absolute top-0 left-0 h-px bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: active > i ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active step detail */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22,1,0.36,1] }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="bg-white/[0.03] border border-white/8 rounded-3xl p-10">
              <span className="text-6xl font-black text-white/5 mb-4 block leading-none">0{journey[active].id}</span>
              <h3 className="text-2xl font-bold text-white mb-3">{journey[active].title}</h3>
              <p className="text-slate-400 leading-relaxed text-base">{journey[active].desc}</p>
              <div className="mt-8 flex gap-3">
                <button onClick={() => setActive(Math.max(0, active - 1))}
                  className="px-5 py-2 rounded-xl border border-white/10 text-slate-400 text-sm hover:border-blue-500/40 hover:text-white transition-all">
                  ← Prev
                </button>
                <button onClick={() => setActive(Math.min(journey.length - 1, active + 1))}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-500 transition-all">
                  Next →
                </button>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden">
              <img src={[IMGS.meeting, IMGS.team, IMGS.code, IMGS.collab, IMGS.remote][active]}
                alt={journey[active].title} className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070F1D]/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">{journey[active].sub} Phase</span>
                <p className="text-lg font-bold text-white mt-1">{journey[active].title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   4. BUSINESS IMPACT
════════════════════════════════════════════════════════════════════ */
const stats = [
  { value: "24/7",  label: "Global Support Coverage", icon: Clock,    color: "from-blue-600 to-blue-400" },
  { value: "1000+", label: "Active Professionals",     icon: Users,    color: "from-indigo-600 to-blue-400" },
  { value: "90%",  label: "Client Success Rate",       icon: Star,     color: "from-blue-500 to-cyan-400" },
  { value: "85%",  label: "Efficiency Improvement",    icon: TrendingUp, color: "from-violet-600 to-blue-400" },
];

function BusinessImpact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0,1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-[#060E1C]">
      {/* Deep parallax background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={IMGS.network} alt="" className="w-full h-full object-cover opacity-5" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060E1C] via-transparent to-[#060E1C]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/6 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <InView className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-5">
            <span className="w-8 h-px bg-blue-400" /> Business Impact <span className="w-8 h-px bg-blue-400" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Numbers that define<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">enterprise confidence</span>
          </h2>
        </InView>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, icon: Icon, color }) => (
            <motion.div key={label} variants={fadeUp}
              className="group relative text-center p-8 rounded-3xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 opacity-80 group-hover:opacity-100`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{value}</p>
              <p className="text-sm text-slate-400 leading-snug">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   5. CAPABILITY NETWORK
════════════════════════════════════════════════════════════════════ */
const caps = [
  { id: "fe", label: "Frontend",  icon: MonitorSmartphone, x: 50,  y: 10,  detail: "React · Vue · Angular · Next.js" },
  { id: "be", label: "Backend",   icon: Server,            x: 82,  y: 35,  detail: "Node · Python · Java · Go" },
  { id: "cl", label: "Cloud",     icon: Cloud,             x: 65,  y: 72,  detail: "AWS · Azure · GCP · Terraform" },
  { id: "qa", label: "QA",        icon: TestTube,          x: 35,  y: 72,  detail: "Manual · Automation · Performance" },
  { id: "do", label: "DevOps",    icon: Settings,          x: 18,  y: 35,  detail: "CI/CD · Docker · Kubernetes" },
  { id: "su", label: "Support",   icon: Headphones,        x: 50,  y: 50,  detail: "L1 · L2 · L3 · NOC" },
];

function CapabilityNetwork() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-28 bg-[#070F1D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <InView>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-6">
              <span className="w-8 h-px bg-blue-400" /> Capability Network
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              End-to-end IT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">specializations</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              A connected ecosystem of disciplines — each team working in concert, ensuring every layer of your stack is covered by expert remote professionals.
            </p>
            <ul className="space-y-3">
              {caps.filter(c => c.id !== "su").map(cap => (
                <li key={cap.id}
                  className={`flex items-center gap-3 cursor-default transition-all duration-200 ${hovered === cap.id ? "text-white" : "text-slate-400 hover:text-slate-300"}`}
                  onMouseEnter={() => setHovered(cap.id)} onMouseLeave={() => setHovered(null)}
                >
                  <ChevronRight className={`w-4 h-4 transition-colors ${hovered === cap.id ? "text-blue-400" : "text-slate-600"}`} />
                  <span className="font-semibold text-sm">{cap.label}</span>
                  <span className="text-xs text-slate-600 ml-2">{cap.detail}</span>
                </li>
              ))}
            </ul>
          </InView>

          {/* SVG network graph */}
          <div className="relative h-96">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              {/* Connection lines from center (support) to each node */}
              {caps.filter(c => c.id !== "su").map(cap => (
                <motion.line key={cap.id}
                  x1={caps.find(c=>c.id==="su").x} y1={caps.find(c=>c.id==="su").y}
                  x2={cap.x} y2={cap.y}
                  stroke={hovered === cap.id ? "#3B82F6" : "#1e3a5f"}
                  strokeWidth="0.4"
                  strokeDasharray="2 1"
                  animate={{ opacity: hovered === cap.id ? 1 : 0.5 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
              {/* Nodes */}
              {caps.map(cap => {
                const Icon = cap.icon;
                const isCenter = cap.id === "su";
                const isHovered = hovered === cap.id;
                return (
                  <g key={cap.id} transform={`translate(${cap.x}, ${cap.y})`}
                    onMouseEnter={() => setHovered(cap.id)} onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                  >
                    <motion.circle r={isCenter ? 8 : 6} fill={isHovered || isCenter ? "#2563EB" : "#0D1F3C"}
                      stroke={isHovered || isCenter ? "#3B82F6" : "#1e3a5f"} strokeWidth="0.5"
                      animate={{ r: isCenter ? 8 : isHovered ? 7 : 6 }} transition={{ duration: 0.2 }}
                    />
                    <circle r={isCenter ? 12 : 9} fill="transparent" stroke={isHovered ? "#3B82F6" : "transparent"}
                      strokeWidth="0.3" opacity="0.4"
                    />
                    <text y={isCenter ? 14 : 11} textAnchor="middle" fontSize="3.5" fill={isHovered ? "#93C5FD" : "#64748B"}
                      className="select-none">
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

/* ════════════════════════════════════════════════════════════════════
   6. WHY ORGANIZATIONS CHOOSE US
════════════════════════════════════════════════════════════════════ */
const reasons = [
  { title: "Dedicated Teams",        desc: "Your remote professionals work exclusively on your projects." },
  { title: "Transparent Delivery",   desc: "Weekly reports, sprint reviews, and real-time project dashboards." },
  { title: "Reliable Operations",    desc: "SLA-backed performance with 99.9% operational uptime commitment." },
  { title: "Scalable Workforce",     desc: "Flex from 1 to 100+ resources within days — no lock-ins." },
  { title: "Continuous Support",     desc: "24/7 escalation paths and dedicated account management." },
];

function WhyOrganizationsChooseUs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0,1], ["-6%","6%"]);
  const y2 = useTransform(scrollYProgress, [0,1], ["6%","-6%"]);

  return (
    <section ref={ref} className="py-28 bg-[#060E1C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <InView>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-6">
              <span className="w-8 h-px bg-blue-400" /> Why Organizations Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Trust built on<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">delivered results</span>
            </h2>
            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-5">
              {reasons.map(({ title, desc }) => (
                <motion.li key={title} variants={fadeUp} className="flex gap-4 group">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">{title}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </InView>

          {/* Right: overlapping images */}
          <div className="relative h-[480px]">
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-3/4 h-64 rounded-3xl overflow-hidden shadow-2xl">
              <img src={IMGS.office} alt="Office" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/40 to-transparent" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-3/4 h-64 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-600/20">
              <img src={IMGS.meeting} alt="Meeting" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#0A1628]/50 to-transparent" />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }} viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 backdrop-blur-xl bg-[#0A1628]/80 border border-blue-500/30 rounded-2xl p-5 shadow-2xl text-center min-w-[140px]"
            >
              <p className="text-3xl font-black text-white">5★</p>
              <p className="text-xs text-blue-400 font-semibold mt-1">Client Rating</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   7. WOW — Remote Team Ecosystem
════════════════════════════════════════════════════════════════════ */
const ecosystem = [
  { label: "Speed",        icon: Zap,     color: "#3B82F6", x: "10%",  y: "20%",  delay: 0 },
  { label: "Collaboration",icon: Users,   color: "#6366F1", x: "70%",  y: "10%",  delay: 0.15 },
  { label: "Flexibility",  icon: Layers,  color: "#0EA5E9", x: "80%",  y: "65%",  delay: 0.3 },
  { label: "Growth",       icon: TrendingUp, color: "#8B5CF6", x: "15%", y: "70%", delay: 0.45 },
  { label: "Security",     icon: Shield,  color: "#2563EB", x: "50%",  y: "78%",  delay: 0.6 },
  { label: "Intelligence", icon: Cpu,     color: "#7C3AED", x: "30%",  y: "8%",   delay: 0.75 },
];

function WowEcosystem() {
  return (
    <section className="py-32 bg-[#040B18] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,#1e3a5f18,transparent)]" />

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[320, 480, 640].map((size, i) => (
          <motion.div key={size}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 20, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-blue-500/8"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl shadow-blue-500/30"
        >
          <Network className="w-12 h-12 text-white" />
        </motion.div>
      </div>

      {/* Floating nodes */}
      <div className="relative h-[600px]">
        {ecosystem.map(({ label, icon: Icon, color, x, y, delay }) => (
          <motion.div key={label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.6, ease: [0.22,1,0.36,1] }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            style={{ position: "absolute", left: x, top: y }}
            className="group"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-400/40 transition-all duration-300 hover:bg-white/10 cursor-default shadow-xl">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${color}22` }}>
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <span className="text-sm font-semibold text-white whitespace-nowrap">{label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 -mt-12">
        <InView>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-5">
            <span className="w-8 h-px bg-blue-400" /> Ecosystem <span className="w-8 h-px bg-blue-400" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Not just a team.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              A living, breathing ecosystem.
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every node — every professional, every capability — is interconnected, delivering a cohesive, high-velocity remote operation that functions as one unified force.
          </p>
        </InView>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   8. PREMIUM CTA
════════════════════════════════════════════════════════════════════ */
function PremiumCTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-[#040B18]">
      {/* Animated gradient glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #1e40af55, #3b82f620, transparent)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#0d1f3c40,transparent)]" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <InView>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }} viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-8">
              <span className="w-8 h-px bg-blue-400" /> Get Started Today <span className="w-8 h-px bg-blue-400" />
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.02] mb-6">
              Build Remote Teams<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400">
                Without Borders
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
              Connect with the world's best IT professionals. Deploy your remote team in 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a href="/contact"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-2xl shadow-blue-500/30 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a href="/services"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/15 text-white font-semibold text-base hover:border-blue-500/50 hover:bg-white/5 transition-all"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </InView>
      </div>
    </section>
  );
}

//-----9. sub menu ------//

export function RemoteStaff() {
  return(
    <>
     {/* <RemoteITExperience /> */}
      <BorderlessWorkforce />
      <RemoteDeliveryJourney />
      <BusinessImpact />
      <CapabilityNetwork />
      <WhyOrganizationsChooseUs />
      <WowEcosystem />
    </>
  )
}

/* ════════════════════════════════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════════════════════════════════ */
function RemoteIt() {
  return (
    <main className="font-sans antialiased" style={{ backgroundColor: NAVY }}>
      <RemoteITExperience />
      <BorderlessWorkforce />
      <RemoteDeliveryJourney />
      <BusinessImpact />
      <CapabilityNetwork />
      <WhyOrganizationsChooseUs />
      <WowEcosystem />
      <PremiumCTA />
    </main>
  );
}

export default RemoteIt








//----IT IS OLD AND NOT SO GOOD CODE


// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useScrollAnimation } from '../../hooks/useScrollAnimation'
// import { motion } from "framer-motion";

// import {Laptop,Globe,Users,ArrowRight} from "lucide-react";

// export function RemoteStaff (){
//   return(
//     <>
// {/* REMOTE IT STAFF */}

// <section className="bg-white py-24 overflow-hidden">

// <div className="max-w-[1280px] mx-auto px-gutter">

// {/* PAGE HEADING */}

// <div className="text-center">

// <span className="
// inline-block
// px-4
// py-1
// rounded-full
// bg-primary/10
// text-primary
// font-bold
// uppercase
// tracking-widest
// text-xs
// mb-5
// ">

// Remote IT Staff

// </span>

// <h2 className="
// text-4xl
// md:text-5xl
// font-black
// text-primary
// leading-tight
// ">

// Build Remote Teams
// Without Borders

// </h2>

// <p className="
// mt-5
// max-w-xl
// mx-auto
// text-slate-500
// leading-relaxed
// ">

// Access skilled IT professionals
// and expand capabilities remotely.

// </p>

// </div>



// <div className="
// grid
// lg:grid-cols-[1.1fr_.9fr]
// gap-12
// items-center
// mt-20
// ">



// {/* LEFT */}

// <div className="space-y-5">

// {[
// {
// icon:<Laptop size={22}/>,
// title:"Skilled IT Talent"
// },

// {
// icon:<Globe size={22}/>,
// title:"Global Reach"
// },

// {
// icon:<Users size={22}/>,
// title:"Dedicated Teams"
// }

// ].map((item,index)=>(

// <motion.div

// key={index}

// initial={{
// opacity:0,
// y:20
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// transition={{
// delay:index*0.12
// }}

// viewport={{
// once:true
// }}

// whileHover={{
// x:6
// }}

// className="
// flex
// items-center
// gap-5
// bg-[#f8fbff]
// rounded-[28px]
// px-8
// py-7
// "

// >

// <div className="
// w-14
// h-14
// rounded-2xl
// bg-primary
// text-white
// flex
// items-center
// justify-center
// shrink-0
// ">

// {item.icon}

// </div>

// <h3 className="
// text-xl
// font-bold
// text-primary
// ">

// {item.title}

// </h3>

// </motion.div>

// ))}

// </div>



// {/* SMALL IMAGE */}

// <motion.div

// initial={{
// opacity:0,
// x:30
// }}

// whileInView={{
// opacity:1,
// x:0
// }}

// transition={{
// duration:0.7
// }}

// viewport={{
// once:true
// }}

// className="
// relative
// max-w-[460px]
// mx-auto
// "

// >

// <img
// src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
// alt="Remote IT Staff"
// className="
// rounded-[34px]
// w-full
// h-[320px]
// object-cover
// "
// />

// <div className="
// absolute
// bottom-5
// left-5
// bg-white
// rounded-2xl
// shadow-lg
// px-5
// py-4
// ">

// <div className="
// text-primary
// font-black
// text-lg
// ">

// Remote First

// </div>

// </div>

// </motion.div>

// </div>

// </div>

// </section>




// {/* CTA */}

//     </>
//   )
// }

// const RemoteIt = () => {
//   const animRef = useScrollAnimation()

//   return (
//     <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
//         <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             className="w-full h-full object-cover opacity-20"
//             src="https://visiontechtechnology.com/assets/images/services/contract-Staffing.jpg"
//             alt="Contract Staffing"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
//         </div>

//       <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
//           <div className="max-w-2xl">
//             <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
//               GLOBAL TECH TALENT
//             </span>
//             <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
//               REMOTE IT STAFFING
//             </h1>
//             <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
//              A borderless recruitment model that connects your business with highly skilled IT professionals and software engineers globally, enabling you to build high-performing distributed teams without geographical limits.
//             </p>
//             <div data-animate="fade-up" data-animate-delay="0.3">
//               <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
//                 Contact us button
//               </Link>
//             </div>
//           </div>
//         </div>
//         </section>

//   {/*Section 2 */}
 
//  <RemoteStaff/>


      

// {/* CTA */}

// <section className="py-28">

// <div className="max-w-[1100px] mx-auto px-gutter">

// <div
// className="
// relative
// overflow-hidden
// rounded-[50px]
// "
// >

// <img
// src="https://images.unsplash.com/photo-1552664730-d307ca884978"
// className="
// absolute
// inset-0
// w-full
// h-full
// object-cover
// "
// />

// <div
// className="
// relative
// bg-black/65
// text-white
// text-center
// p-24
// "
// >

// <h2 className="text-6xl font-black">
// Hire Remote IT Talent
// </h2>

// <p className="mt-8 max-w-2xl mx-auto opacity-80">
// Expand your technical capacity
// through reliable remote staffing
// and scalable workforce delivery.
// </p>

// <Link
// to="/contact-us"
// className="
// mt-10
// inline-flex
// px-8
// py-4
// bg-white
// text-primary
// rounded-xl
// font-black
// "
// >
// Start Scaling
// </Link>

// </div>

// </div>

// </div>

// </section>

//     </main>
//   )
// }

// export default RemoteIt