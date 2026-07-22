import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'
import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Cloud, Brain, Activity, BarChart3, Hexagon, Cpu,
  ArrowRight, CheckCircle2, Zap, BookOpen, Target,
  Rocket, ChevronRight, Shield, TrendingUp, Globe2,
  Layers, Network, Sparkles, Database, Server
} from "lucide-react";




/* ─── Tokens ──────────────────────────────────────────────────────── */
const C = {
  navy:  "#0A1628",
  blue:  "#2563EB",
  soft:  "#EFF6FF",
  mid:   "#DBEAFE",
  slate: "#64748B",
  off:   "#F8FAFC",
  border:"#E2E8F0",
};

const IMG = {
hero:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
cloud:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
ai:"https://images.unsplash.com/photo-1516321497487-e288fb19713f",
ml:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
data:"https://images.unsplash.com/photo-1451187580459-43490279c0fa",
salesforce:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
iot:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
}
/* ─── Motion ──────────────────────────────────────────────────────── */
const fadeUp  = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.58,ease:[0.22,1,0.36,1]}} };
const stagger = { show:{transition:{staggerChildren:0.08}} };
const floatAnim = { animate:{ y:[0,-8,0] }, transition:{ duration:3.5, repeat:Infinity, ease:"easeInOut" } };

function Reveal({ children, className="", delay=0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-50px" });
  return (
    <motion.div ref={ref} variants={fadeUp}
      initial="hidden" animate={inView?"show":"hidden"}
      transition={{ delay }} className={className}>
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">
      <span className="w-5 h-px bg-blue-600" />{children}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════════════
   1. EMERGING TECHNOLOGY OVERVIEW
════════════════════════════════════════════════════════════════════ */
const overviewHighlights = [
  { icon: Sparkles, label:"Future Ready",   sub:"Next-gen curriculum", color:"#2563EB", bg:"#EFF6FF", pos:"absolute -left-4 top-12" },
  { icon: Target,   label:"Industry Focus", sub:"Enterprise aligned",  color:"#7C3AED", bg:"#F5F3FF", pos:"absolute -right-4 top-1/2 -translate-y-1/2" },
  { icon: Zap,      label:"Modern Skills",  sub:"Hands-on labs",       color:"#059669", bg:"#ECFDF5", pos:"absolute -left-4 bottom-12" },
];

function EmerginOverview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start end","end start"] });
  const imgY = useTransform(scrollYProgress,[0,1],["-6%","6%"]);

  return (
    <>

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
        <Eyebrow>Mainframe Training · HTD</Eyebrow>
                <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
                       YE NAHI BANA HAI sirf CODE <br />
              <span className="text-blue-600">ERROR SHOW N KARE IS LIYE AD KIYA HUA HAI</span>
                </h1>
                <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
                Master COBOL, JCL, DB2 and z/OS through structured training designed for enterprise environments and modern operations.
                </p>
                <div data-animate="fade-up" data-animate-delay="0.3">
                  <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                    Explore Training
                  </Link>
                </div>
              </div>
            </div>
            </section>

    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   2. TECHNOLOGY ECOSYSTEM — Bento
════════════════════════════════════════════════════════════════════ */
const techStack = [
  {
    id:"cloud", name:"Cloud Computing", icon:Cloud,
    color:"#2563EB", bg:"#EFF6FF", img:IMG.cloud,
    desc:"AWS, Azure, and GCP cloud architecture training with hands-on infrastructure provisioning.",
    caps:["Cloud architecture & IaC","Kubernetes · Terraform · DevOps"],
    span:"lg:col-span-5 lg:row-span-2", hero:true,
  },
  {
    id:"ai", name:"Artificial Intelligence", icon:Brain,
    color:"#7C3AED", bg:"#F5F3FF", img:IMG.ai,
    desc:"LLMs, generative AI, and agent-based system design for enterprise applications.",
    caps:["LLMs · Agents · Prompt Eng.","GenAI · Computer Vision · NLP"],
    span:"lg:col-span-7 lg:row-span-1", hero:false,
  },
  {
    id:"ml", name:"Machine Learning", icon:Activity,
    color:"#059669", bg:"#ECFDF5", img:IMG.ml,
    desc:"End-to-end ML pipelines, model training, and MLOps deployment workflows.",
    caps:["TensorFlow · PyTorch · Scikit","MLflow · Feature stores · CI/CD"],
    span:"lg:col-span-4", hero:false,
  },
  {
    id:"data", name:"Data Science", icon:BarChart3,
    color:"#D97706", bg:"#FFFBEB", img:IMG.data,
    desc:"Data analysis, visualisation, and business intelligence for evidence-led decisions.",
    caps:["Python · SQL · Power BI","Statistics · ETL · Dashboards"],
    span:"lg:col-span-3", hero:false,
  },
  {
    id:"sf", name:"Salesforce", icon:Hexagon,
    color:"#00A1E0", bg:"#E0F7FF", img:IMG.salesforce,
    desc:"Salesforce Admin, Developer, and Architect tracks aligned to enterprise CRM roles.",
    caps:["Admin · Dev · Architect · CPQ","Flow · Apex · LWC · Integrations"],
    span:"lg:col-span-4", hero:false,
  },
  {
    id:"iot", name:"Internet of Things", icon:Cpu,
    color:"#DC2626", bg:"#FEF2F2", img:IMG.iot,
    desc:"Edge computing, sensor networks, and IoT platform integration for smart systems.",
    caps:["MQTT · Edge AI · Protocols","Azure IoT · AWS IoT · Dashboards"],
    span:"lg:col-span-3", hero:false,
  },
];

function TechEcosystem() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="ecosystem" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="mb-12">
          <Eyebrow>Technology Ecosystem</Eyebrow>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Six domains.<br />One complete program.
            </h2>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Practitioners trained deep, not wide — with real lab environments in every track.
            </p>
          </div>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[170px]">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            const isHov = hovered === tech.id;
            return (
              <motion.div key={tech.id} variants={fadeUp}
                className={`${tech.span} group relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white
                  cursor-default transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1`}
                onMouseEnter={()=>setHovered(tech.id)}
                onMouseLeave={()=>setHovered(null)}
              >
                {/* Hero image layer for big card */}
                {tech.hero && (
                  <div className="absolute inset-0">
                    <img src={tech.img} alt={tech.name} loading="lazy"
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-18 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-transparent" />
                  </div>
                )}

                {/* Color glow */}
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
                  style={{background:tech.color}} />

                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{backgroundColor:tech.bg}}>
                      <Icon className="w-5 h-5" style={{color:tech.color}} />
                    </div>
                    <motion.div animate={{x: isHov ? 0 : 5, opacity: isHov ? 1 : 0}} transition={{duration:0.18}}>
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                    </motion.div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{tech.name}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 mb-3">{tech.desc}</p>

                  <div className="mt-auto space-y-1.5">
                    {tech.caps.map(c => (
                      <div key={c} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{backgroundColor:tech.color}} />
                        <span className="text-[10px] text-slate-400">{c}</span>
                      </div>
                    ))}
                  </div>
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
   3. LEARNING EXPERIENCE
════════════════════════════════════════════════════════════════════ */
const phases = [
  { verb:"Understand",  icon:Globe2,    color:"#2563EB", bg:"#EFF6FF",
    title:"Enterprise Foundations",  desc:"Guided orientation across all six technology tracks to find your strongest path." },
  { verb:"Practice", icon:Target,    color:"#7C3AED", bg:"#F5F3FF",
    title:"Hands-On Labs",  desc:"Cloud sandboxes, AI notebooks, and IoT simulators — real tooling from week one." },
  { verb:"Operate",    icon:Layers,    color:"#0EA5E9", bg:"#F0F9FF",
    title:"Operational Readiness",   desc:"Cross-domain capstone projects that mirror actual enterprise delivery scenarios." },
  { verb:"Deploy",   icon:Rocket,    color:"#059669", bg:"#ECFDF5",
    title:"Deployment Support", desc:"Placed into client teams with 30 days of post-deployment mentor support." },
];

function LearningExperience() {
  const [active, setActive] = useState(0);
  const cur = phases[active];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="mb-12">
          <Eyebrow>Learning Experience</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            From curious to<br />
            <span className="text-blue-600">production-ready.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6 items-start">

          {/* Phase selector */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-3">
            {phases.map((p, i) => {
              const Icon = p.icon;
              const isAct = active === i;
              return (
                <motion.button key={p.verb} onClick={()=>setActive(i)}
                  whileHover={{y:-2}} transition={{duration:0.2}}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 w-full
                    ${isAct
                      ? "border-blue-200 bg-blue-50 shadow-lg shadow-blue-100/50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{backgroundColor: isAct ? p.bg : "#F8FAFC"}}>
                      <Icon className="w-4 h-4" style={{color: isAct ? p.color : "#CBD5E1"}} />
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase"
                      style={{color: isAct ? p.color : "#CBD5E1"}}>{p.verb}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{p.title}</h3>
                  <AnimatePresence>
                    {isAct && (
                      <motion.p key="d" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}}
                        exit={{opacity:0,height:0}} transition={{duration:0.28}}
                        className="text-xs text-slate-400 leading-relaxed overflow-hidden">
                        {p.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          {/* Right image panel */}
          <div className="lg:col-span-6 relative h-64 lg:h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}}
                exit={{opacity:0,scale:1.02}} transition={{duration:0.38,ease:[0.22,1,0.36,1]}}
                className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100">
                <img src={[IMG.hero, IMG.lab, IMG.ml, IMG.team][active]}
                  alt={cur.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{color:cur.color}}>{cur.verb}</span>
                    <span className="text-[10px] text-slate-500">— {cur.title}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Dots */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {phases.map((_,i)=>(
                <button key={i} onClick={()=>setActive(i)}>
                  <div className={`rounded-full transition-all duration-300 ${active===i?"w-5 h-1.5 bg-blue-600":"w-1.5 h-1.5 bg-slate-300"}`} />
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
   4. KEY OUTCOMES
════════════════════════════════════════════════════════════════════ */
const outcomes = [
  { value:"6",    suffix:"+",  label:"Core Mainframe Areas",     icon:Layers,     color:"#2563EB", bg:"#EFF6FF" },
  { value:"94",   suffix:"%",  label:"Training Completion",     icon:TrendingUp, color:"#059669", bg:"#ECFDF5" },
  { value:"2400", suffix:"+",  label:"Professionals Enabled",icon:Globe2,     color:"#7C3AED", bg:"#F5F3FF" },
  { value:"8",    suffix:"wk", label:"Average Learning Duration",icon:Zap,        color:"#D97706", bg:"#FFFBEB" },
];

function useCount(to, active) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, {once:true});
  useState(()=>{
    if(!inView) return;
    let n=0; const step=to/50;
    const t=setInterval(()=>{ n+=step; if(n>=to){setVal(to);clearInterval(t);}else setVal(Math.floor(n)); },18);
    return ()=>clearInterval(t);
  });
  // trigger on inView via useInView
  const [counted, setCounted] = useState(false);
  if (inView && !counted) {
    setCounted(true);
    let n=0; const step=to/50;
    const t=setInterval(()=>{ n+=step; if(n>=to){setVal(to);clearInterval(t);}else setVal(Math.floor(n)); },18);
  }
  return [ref, val];
}



function KeyOutcomes() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-12">
          <Eyebrow>Key Outcomes</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Outcomes that prove<br />
            <span className="text-blue-600">the program works.</span>
          </h2>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <motion.div key={o.label} variants={fadeUp}
                className="group bg-white rounded-3xl border border-slate-200 p-7 text-center
                  hover:shadow-xl hover:shadow-slate-100/80 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur-2xl"
                  style={{backgroundColor:o.color}} />
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{backgroundColor:o.bg}}>
                  <Icon className="w-5 h-5" style={{color:o.color}} />
                </div>
                <p className="text-4xl font-black text-slate-900 tracking-tight mb-1">
                  {o.value}<span className="text-2xl">{o.suffix}</span>
                </p>
                <p className="text-xs text-slate-400 font-medium leading-snug">{o.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   5. WHY EMERGING TECHNOLOGIES
════════════════════════════════════════════════════════════════════ */
const whyPoints = [
  { title:"Modern Tools",          desc:"Real cloud labs, AI sandboxes, and IoT simulators — not slides and screenshots." },
  { title:"Practical Experience",  desc:"Every module culminates in a deployable project — not just an assessment." },
  { title:"Technology Exposure",   desc:"Cross-domain awareness across all six tracks, with depth in your primary path." },
  { title:"Industry Alignment",    desc:"Curriculum mapped to actual enterprise job roles and hiring criteria." },
];

function WhyEmerging() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start end","end start"] });
  const imgY = useTransform(scrollYProgress,[0,1],["-4%","4%"]);

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <Reveal>
            <Eyebrow>Why Mainframe Trainingx</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Build skills trusted by<br />
              <span className="text-blue-600">enterprise environments.</span>
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-sm">
              Structured training focused on enterprise systems, operational excellence, and practical learning.
            </p>
            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}
              className="space-y-4">
              {whyPoints.map(({title, desc}) => (
                <motion.li key={title} variants={fadeUp} className="flex gap-3 group">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0
                    group-hover:bg-blue-600 transition-colors duration-300">
                    <CheckCircle2 className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">{title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>

          {/* Right: image composition */}
          <div className="relative h-[380px] lg:h-[420px]">
            <motion.div style={{y:imgY}} className="absolute inset-3 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <img src={IMG.lab} alt="Technology lab" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-transparent" />
            </motion.div>

            {/* Badge TL */}
            <motion.div initial={{opacity:0,y:-16}} whileInView={{opacity:1,y:0}}
              transition={{delay:0.4,duration:0.5}} viewport={{once:true}}
              className="absolute -top-3 -right-3 z-10 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 p-4 text-center min-w-[110px]">
              <p className="text-xl font-black">120+</p>
              <p className="text-[10px] opacity-75 font-medium mt-0.5">Enterprise Partners</p>
            </motion.div>

            {/* Badge BR */}
            <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
              transition={{delay:0.55,duration:0.5}} viewport={{once:true}}
              className="absolute -bottom-3 -left-3 z-10 bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Cert. Included</p>
                <p className="text-[10px] text-slate-400">AWS · Azure · GCP</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   6. PREMIUM CTA
════════════════════════════════════════════════════════════════════ */
function PremiumCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-slate-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] rounded-full bg-blue-300/20 blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{backgroundImage:"radial-gradient(#2563EB 1px,transparent 1px)",backgroundSize:"26px 26px"}} />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <Reveal>
          <Eyebrow>Get Started</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.06] mb-5">
            Build Enterprise<br />
            <span className="text-blue-600">Technology Skills.</span>
          </h2>
          <p className="text-slate-400 text-[15px] max-w-sm mx-auto mb-10 leading-relaxed">
           Develop capability in enterprise systems and prepare for modern operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a href="/contact" whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-xl shadow-blue-200">
              Contact Us <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a href="/programs" whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold text-sm hover:border-blue-300 hover:text-blue-700 transition-all bg-white">
              Explore Programs
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---- 9. Slide bar code -----


/* ════════════════════════════════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════════════════════════════════ */
function MainFrameTraining() {

  const animRef = useScrollAnimation()

  return (
    <main className="bg-white font-sans antialiased" className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <EmerginOverview />
      <TechEcosystem />
      <LearningExperience />
      <KeyOutcomes />
      <WhyEmerging />
      <PremiumCTA />
    
    </main>
  );
}

export default MainFrameTraining








// MainFrameTraining