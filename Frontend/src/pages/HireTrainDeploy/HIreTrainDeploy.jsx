import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Brain, Cloud, Database, BarChart3, Cpu, Globe2,
  Code2, Server, Layers, GitBranch, ArrowRight,
  CheckCircle2, Users, Zap, BookOpen, Target, Rocket,
  ChevronRight, Award, TrendingUp, Shield, Clock,
  Monitor, Terminal, Box, Network, Star, Play,
  FileCode, Hexagon, Activity
} from "lucide-react";
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'



/* ─── Design Tokens ───────────────────────────────────────────────── */
const T = {
  navy:    "#0A1628",
  navy2:   "#1E3A5F",
  blue:    "#2563EB",
  blue2:   "#3B82F6",
  blueSoft:"#EFF6FF",
  blueMid: "#DBEAFE",
  slate:   "#64748B",
  slateL:  "#94A3B8",
  white:   "#FFFFFF",
  offWhite:"#F8FAFC",
  border:  "#E2E8F0",
};

/* ─── Unsplash images ─────────────────────────────────────────────── */
const IMG = {
  emerging: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
  web:      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
  mainframe:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
  team:     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
  learn:    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
  collab:   "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
  code:     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
  office:   "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  data:     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  deploy:   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
};

/* ─── Shared motion ───────────────────────────────────────────────── */
const fadeUp  = { hidden:{opacity:0,y:32}, show:{opacity:1,y:0,transition:{duration:0.65,ease:[0.22,1,0.36,1]}} };
const fadeIn  = { hidden:{opacity:0},      show:{opacity:1,  transition:{duration:0.55,ease:"easeOut"}} };
const stagger = { show:{transition:{staggerChildren:0.1}} };

function Reveal({ children, className="", delay=0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  return (
    <motion.div ref={ref} variants={fadeUp} custom={delay}
      initial="hidden" animate={inView?"show":"hidden"}
      transition={{ delay }} className={className}>
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-blue-600 mb-4">
      <span className="w-6 h-px bg-blue-600" />{children}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PAGE DATA
════════════════════════════════════════════════════════════════════ */
const PAGES = {
  emerging: {
    id:    "emerging",
    label: "Emerging Technologies",
    color: "#2563EB",
    img:   IMG.emerging,
    overview: {
      headline: "Build careers at the frontier of what's possible",
      sub: "Our Hire → Train → Deploy program places freshers and mid-level professionals into Emerging Technology roles — fully trained, project-ready, and enterprise-aligned.",
      highlights: ["Cloud-native deployment", "AI / ML readiness", "Industry-certified professionals"],
    },
    domains: [
      { label:"Cloud Computing", icon:Cloud,     color:"#2563EB", bg:"#EFF6FF", desc:"AWS · Azure · GCP · Terraform" },
      { label:"Artificial Intelligence", icon:Brain, color:"#7C3AED", bg:"#F5F3FF", desc:"LLMs · Vision · NLP · Agents" },
      { label:"Machine Learning", icon:Activity,  color:"#059669", bg:"#ECFDF5", desc:"TensorFlow · PyTorch · MLOps" },
      { label:"Data Science",     icon:BarChart3, color:"#D97706", bg:"#FFFBEB", desc:"Analytics · Visualization · BI" },
      { label:"Salesforce",       icon:Hexagon,   color:"#00A1E0", bg:"#E0F7FF", desc:"Admin · Dev · Architect · CPQ" },
      { label:"IoT & Edge",       icon:Cpu,       color:"#DC2626", bg:"#FEF2F2", desc:"Sensors · MQTT · Edge AI" },
    ],
    stats: [
      { value:"2,400+", label:"Professionals Deployed" },
      { value:"94%",    label:"Placement Success" },
      { value:"8 wks",  label:"Avg. Training Duration" },
      { value:"120+",   label:"Enterprise Partners" },
    ],
    whyPoints: [
      "Structured 8–12 week immersive curriculum",
      "Mentored by active industry practitioners",
      "Cloud lab environments with real workloads",
      "Certifications included: AWS, Azure, GCP",
      "Dedicated placement team post-training",
      "Ongoing L&D support post-deployment",
    ],
  },
  web: {
    id:    "web",
    label: "Web Development",
    color: "#0EA5E9",
    img:   IMG.web,
    overview: {
      headline: "Developers who ship — from day one",
      sub: "We train web development talent across modern full-stack ecosystems, then deploy them into your teams with the confidence of enterprise-grade readiness.",
      highlights: ["Full-stack readiness", "Agile-native training", "Team-fit guaranteed"],
    },
    domains: [
      { label:".NET / C#",     icon:Code2,      color:"#512BD4", bg:"#F3F0FF", desc:"ASP.NET Core · Blazor · WPF" },
      { label:"PHP / Laravel", icon:FileCode,   color:"#777BB3", bg:"#F0F0FF", desc:"Laravel · Symfony · WordPress" },
      { label:"Node.js",       icon:Server,     color:"#339933", bg:"#F0FFF0", desc:"Express · NestJS · REST · GraphQL" },
      { label:"Angular",       icon:Layers,     color:"#DD0031", bg:"#FFF0F0", desc:"RxJS · NgRx · Material · Signals" },
      { label:"React / Next",  icon:Monitor,    color:"#0EA5E9", bg:"#F0F9FF", desc:"Next.js · SSR · Tailwind · Zustand" },
      { label:"DevOps / CI",   icon:GitBranch,  color:"#F97316", bg:"#FFF7ED", desc:"Docker · GitHub Actions · Jenkins" },
    ],
    stats: [
      { value:"1,800+", label:"Developers Placed" },
      { value:"96%",    label:"Client Retention Rate" },
      { value:"6 wks",  label:"Avg. Training Sprint" },
      { value:"85+",    label:"Active Tech Partners" },
    ],
    whyPoints: [
      "Project-based learning on real client codebases",
      "Modern stack coverage across frontend and backend",
      "Code review culture built in from week one",
      "Git workflow, CI/CD, and Agile embedded",
      "Tech interview preparation and mock sessions",
      "30-day post-deployment support guarantee",
    ],
  },
  mainframe: {
    id:    "mainframe",
    label: "Mainframe Training",
    color: "#0A1628",
    img:   IMG.mainframe,
    overview: {
      headline: "The skills banks and insurers can't find anywhere else",
      sub: "Mainframe talent is critically scarce. Our HTD program creates the next generation of COBOL, JCL, DB2, and z/OS professionals — precisely calibrated to enterprise banking and insurance environments.",
      highlights: ["Mission-critical readiness", "COBOL & JCL depth", "IBM-certified pathway"],
    },
    domains: [
      { label:"COBOL",      icon:Terminal,  color:"#1E3A5F", bg:"#EFF6FF", desc:"Structured · OO COBOL · Batch" },
      { label:"JCL",        icon:FileCode,  color:"#0A1628", bg:"#F1F5F9", desc:"Job streams · PROC · GDG · SORT" },
      { label:"DB2 / SQL",  icon:Database,  color:"#1D4ED8", bg:"#EFF6FF", desc:"Embedded SQL · Performance tuning" },
      { label:"z/OS",       icon:Box,       color:"#374151", bg:"#F9FAFB", desc:"ISPF · SDSF · RACF · TSO/ISPF" },
      { label:"CICS",       icon:Network,   color:"#065F46", bg:"#ECFDF5", desc:"Transaction server · BMS · Web Svc" },
      { label:"VSAM / IMS", icon:Layers,    color:"#7C2D12", bg:"#FFF7ED", desc:"KSDS · ESDS · RRDS · IMS DB/DC" },
    ],
    stats: [
      { value:"600+",  label:"Mainframe Professionals" },
      { value:"100%",  label:"IBM Partner Certified" },
      { value:"12 wks",label:"Avg. Program Length" },
      { value:"40+",   label:"Banking & Insurance Clients" },
    ],
    whyPoints: [
      "Real IBM Z mainframe lab access",
      "COBOL through modern hybrid architectures",
      "Banking domain knowledge baked into curriculum",
      "IBM Redbook-aligned training material",
      "Client-specific batch job training scenarios",
      "Rare expertise preserved and extended",
    ],
  },
};

/* ════════════════════════════════════════════════════════════════════
   SUBMENU
════════════════════════════════════════════════════════════════════ */
function HTDSubmenu({ active, setActive }) {
  const tabs = [
    { id:"emerging",  label:"Emerging Technologies" },
    { id:"web",       label:"Web Development" },
    { id:"mainframe", label:"Mainframe Training" },
  ];
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex overflow-x-auto scrollbar-hide gap-1 py-0">
          {tabs.map(tab => {
            const isActive = active === tab.id;
            return (
              <button key={tab.id} onClick={() => setActive(tab.id)}
                className={`relative flex-shrink-0 px-6 py-4 text-sm font-semibold transition-colors duration-200
                  ${isActive ? "text-blue-700" : "text-slate-500 hover:text-slate-800"}`}
              >
                {tab.label}
                {isActive && (
                  <motion.div layoutId="htd-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type:"spring", stiffness:500, damping:40 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 1 — PREMIUM OVERVIEW
════════════════════════════════════════════════════════════════════ */
function PremiumOverview({ page }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start end","end start"] });
  const imgY = useTransform(scrollYProgress, [0,1], ["-6%","6%"]);

  const animRef = useScrollAnimation()

  return (
    <>
          <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Human resources operations"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            
          <Eyebrow>Hire · Train · Deploy</Eyebrow>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              {page.overview.headline}
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              {page.overview.sub}
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 2 — CORE DOMAINS (Bento)
════════════════════════════════════════════════════════════════════ */
function CoreDomains({ page }) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <Reveal className="text-center mb-12">

          <Eyebrow>
            Core Domains
          </Eyebrow>

          <h2
            className="
            mt-4
            text-4xl
            md:text-[46px]
            font-bold
            tracking-tight
            text-[#0B1B38]
            "
          >
            Expertise Across
            Modern Technologies
          </h2>

          <p
            className="
            mt-4
            max-w-xl
            mx-auto
            text-slate-500
            leading-7
            "
          >
            Built to support scalable delivery,
            innovation, and enterprise growth.
          </p>

        </Reveal>


        {/* Cards */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
          "
        >

          {page.domains.map((d) => {

            const Icon = d.icon;

            return (

              <motion.div
                key={d.label}

                variants={fadeUp}

                whileHover={{
                  y: -3
                }}

                className="
                group
                relative
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-5
                transition-all
                duration-300
                hover:border-[#D6E4FF]
                hover:shadow-[0_10px_40px_rgba(11,58,130,0.06)]
                "
              >

                {/* Rounded Accent */}

                <div
                  className="
                  absolute
                  top-0
                  left-5
                  right-5
                  h-[3px]
                  rounded-full
                  bg-[#0B3A82]
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform
                  duration-500
                  "
                />



                <div
                  className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-[#F7FAFF]
                  flex
                  items-center
                  justify-center
                  mb-4
                  "
                >

                  <Icon
                    className="
                    w-5
                    h-5
                    text-[#0B3A82]
                    "
                  />

                </div>


                <h3
                  className="
                  text-[17px]
                  font-semibold
                  text-[#0B1B38]
                  mb-2
                  "
                >
                  {d.label}
                </h3>


                <p
                  className="
                  text-sm
                  text-slate-500
                  leading-6
                  line-clamp-3
                  "
                >
                  {d.desc}
                </p>


                <div
                  className="
                  mt-5
                  text-xs
                  text-[#0B3A82]
                  font-medium
                  opacity-0
                  group-hover:opacity-100
                  transition
                  "
                >
                  Learn More →
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
   SECTION 3 — LEARNING EXPERIENCE
════════════════════════════════════════════════════════════════════ */
const learningSteps = [
  { id:1, verb:"Learn",    icon:BookOpen, color:"#2563EB", bg:"#EFF6FF",
    title:"Structured Curriculum",
    desc:"Industry-mapped modules covering theory, tools, and hands-on practice in real environments." },
  { id:2, verb:"Practice", icon:Target,   color:"#2563EB", bg:"#F5F3FF",
    title:"Project Simulations",
    desc:"Live sandboxed labs, sprint challenges, and peer-reviewed code on real client scenario templates." },
  { id:3, verb:"Apply",    icon:Zap,      color:"#2563EB", bg:"#F0F9FF",
    title:"Industry Projects",
    desc:"Trained professionals contribute to actual client-adjacent projects under mentor supervision." },
  { id:4, verb:"Deploy",   icon:Rocket,   color:"#2563EB", bg:"#ECFDF5",
    title:"Enterprise Placement",
    desc:"Placed into your team with 30-day onboarding support. Productive from week one." },
];

function LearningExperience() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-16">
          <Eyebrow>The Journey</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            From classroom to client.<br />
            <span className="text-blue-600">Every step engineered.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-3">
            {learningSteps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <motion.button key={step.id} onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300
                    ${isActive ? "border-blue-200 bg-blue-50 shadow-md shadow-blue-100" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{backgroundColor: isActive ? step.bg : "#F8FAFC"}}>
                      <Icon className="w-5 h-5 transition-colors" style={{color: isActive ? step.color : "#94A3B8"}} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold tracking-widest uppercase"
                          style={{color: isActive ? step.color : "#CBD5E1"}}>{step.verb}</span>
                        <span className="font-bold text-slate-900 text-sm">{step.title}</span>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p key="desc" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}}
                            exit={{opacity:0,height:0}} transition={{duration:0.3}}
                            className="text-sm text-slate-500 leading-relaxed overflow-hidden">
                            {step.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Visual right */}
          <div className="relative h-80 lg:h-[440px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeStep}
                initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.02}}
                transition={{duration:0.45,ease:[0.22,1,0.36,1]}}
                className="absolute inset-0 rounded-3xl overflow-hidden">
                <img src={[IMG.learn, IMG.code, IMG.collab, IMG.deploy][activeStep]}
                  alt={learningSteps[activeStep].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-md border border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider"
                      style={{color:learningSteps[activeStep].color}}>
                      {learningSteps[activeStep].verb}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      — {learningSteps[activeStep].title}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Progress dots */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {learningSteps.map((_,i) => (
                <button key={i} onClick={() => setActiveStep(i)}
                  className="transition-all duration-300"
                >
                  <div className={`rounded-full transition-all duration-300 ${activeStep===i ? "w-6 h-2 bg-blue-600" : "w-2 h-2 bg-slate-300"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 4 — IMPACT SECTION
════════════════════════════════════════════════════════════════════ */
function useCountUp(target, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g,""));
    if (isNaN(num)) return;
    let start = 0;
    const step = num / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  const suffix = target.replace(/[0-9.]/g,"");
  return count + suffix;
}

function StatCard({ value, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  const display = useCountUp(value, inView);
  return (
    <motion.div ref={ref} variants={fadeUp} custom={delay}
      className="group relative bg-white rounded-3xl border border-slate-200 p-8 text-center hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-blue-50 opacity-60 group-hover:opacity-100 transition-opacity" />
      <p className="relative text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">{display}</p>
      <p className="relative text-sm text-slate-400 font-medium">{label}</p>
    </motion.div>
  );
}

function ImpactSection({ page }) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-14">
          <Eyebrow>Program Impact</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Numbers that speak<br />
            <span className="text-blue-600">enterprise confidence</span>
          </h2>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {page.stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 5 — WHY THIS PROGRAM
════════════════════════════════════════════════════════════════════ */
function WhyThisProgram({ page }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start end","end start"] });
  const y1 = useTransform(scrollYProgress,[0,1],["-5%","5%"]);
  const y2 = useTransform(scrollYProgress,[0,1],["5%","-5%"]);

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image composition */}
          <div className="relative h-[440px] order-2 lg:order-1">
            <motion.div style={{y:y1}}
              className="absolute top-0 left-0 w-3/4 h-56 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100">
              <img src={IMG.team} alt="Team" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div style={{y:y2}}
              className="absolute bottom-0 right-0 w-3/4 h-56 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100">
              <img src={IMG.office} alt="Office" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
            {/* Center badge */}
            <motion.div initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}}
              transition={{delay:0.5,duration:0.5}} viewport={{once:true}}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 p-5 text-center">
              <Shield className="w-7 h-7 text-blue-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-900">Quality<br/>Guaranteed</p>
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>Why This Program</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                Training that closes<br />
                <span className="text-blue-600">the real skill gap</span>
              </h2>
              <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}
                className="space-y-4">
                {page.whyPoints.map(point => (
                  <motion.li key={point} variants={fadeUp} className="flex items-start gap-3 group">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 6 — PREMIUM CTA
════════════════════════════════════════════════════════════════════ */
function PremiumCTA({ page }) {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Soft gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-200/30 blur-[100px] pointer-events-none" />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{backgroundImage:"radial-gradient(#2563EB 1px,transparent 1px)",backgroundSize:"32px 32px"}} />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <Reveal>
          <Eyebrow>Ready to Build Your Team?</Eyebrow>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.04] mb-6">
            Hire. Train. Deploy.<br />
            <span className="text-blue-600">Starting in days.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Tell us what you need. We'll match, train, and deploy the right talent — with the confidence of enterprise-grade quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="/contact" whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-colors shadow-xl shadow-blue-200">
              Contact Us <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a href="/programs" whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 text-slate-700 font-bold text-base hover:border-blue-300 hover:text-blue-700 transition-all bg-white">
              Explore Programs
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PAGE COMPOSITOR
════════════════════════════════════════════════════════════════════ */
function PageContent({ pageId }) {
  const page = PAGES[pageId];
  if (!page) return null;
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pageId}
        initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
        transition={{duration:0.45,ease:[0.22,1,0.36,1]}}>
        <PremiumOverview page={page} />
        <CoreDomains page={page} />
        <LearningExperience />
        <ImpactSection page={page} />
        <WhyThisProgram page={page} />
        <PremiumCTA page={page} />
      </motion.div>
    </AnimatePresence>
  );
}

/* ════════════════════════════════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════════════════════════════════ */
function HIreTrainDeploy() {
  const [activePage, setActivePage] = useState("emerging");

  return (
    <div className="bg-white font-sans antialiased">
      <HTDSubmenu active={activePage} setActive={setActivePage} />
      <PageContent pageId={activePage} />
    </div>
  );
}

export default HIreTrainDeploy



// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useScrollAnimation } from '../../hooks/useScrollAnimation'



// const HIreTrainDeploy = () => {

//       const animRef = useScrollAnimation()

//   return (
//     <>

//     {/*Section 1*/}
//        <main style={{ "--navbar-height":"88px"}} className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
//       {/* Hero Section */}




//       </main>
//     </>
//   )
// }

// export default HIreTrainDeploy