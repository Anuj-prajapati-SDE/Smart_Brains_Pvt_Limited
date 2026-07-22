import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Code2, Server, Layers, GitBranch, ArrowRight,
  CheckCircle2, Zap, BookOpen, Target, Rocket,
  ChevronRight, Shield, Box, FileCode, Monitor,
  Users, Award, Cpu, Globe2, TrendingUp
} from "lucide-react";

import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/* ─── Tokens ──────────────────────────────────────────────────────── */
const C = {
  navy:    "#0A1628",
  blue:    "#2563EB",
  blueSoft:"#EFF6FF",
  blueMid: "#DBEAFE",
  slate:   "#64748B",
  border:  "#E2E8F0",
  off:     "#F8FAFC",
};

const IMG = {
  workspace: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
  dotnet:    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  php:       "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
  node:      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  angular:   "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
  team:      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
  collab:    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
};

/* ─── Motion presets ──────────────────────────────────────────────── */
const fadeUp  = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}} };
const fadeIn  = { hidden:{opacity:0},      show:{opacity:1,transition:{duration:0.5}} };
const stagger = { show:{transition:{staggerChildren:0.09}} };

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={fadeUp}
      initial="hidden" animate={inView ? "show" : "hidden"}
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
   1. WEB DEVELOPMENT OVERVIEW
════════════════════════════════════════════════════════════════════ */
const overviewCards = [
  { icon: Layers,  label: "Modern Stack",      sub: ".NET · PHP · Node · Angular", color: "#2563EB", bg: "#EFF6FF" },
  { icon: Target,  label: "Hands-On Learning", sub: "Real projects, real feedback",  color: "#7C3AED", bg: "#F5F3FF" },
  { icon: Rocket,  label: "Industry Ready",    sub: "Deployed in 6–8 weeks",         color: "#059669", bg: "#ECFDF5" },
];

function WebOverview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

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
            <Eyebrow>Web Development · HTD</Eyebrow>
                <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
                Developers who ship<br />
              <span className="text-blue-600">from day one.</span>
                </h1>
                <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              We train full-stack web professionals across enterprise-grade ecosystems — then deploy them into your teams, project-ready and culturally aligned.
                </p>
                <div data-animate="fade-up" data-animate-delay="0.3">
                  <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                    Contact us button
                  </Link>
                </div>
              </div>
            </div>
            </section>

    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   2. TECHNOLOGY SHOWCASE — Bento
════════════════════════════════════════════════════════════════════ */
const technologies = [
  {
    id:    "dotnet",
    name:  ".NET / C#",
    icon:  Code2,
    color: "#512BD4",
    bg:    "#F3F0FF",
    img:   IMG.dotnet,
    desc:  "Enterprise-grade backend and full-stack development on Microsoft's modern .NET platform.",
    caps:  ["ASP.NET Core · Blazor · Web API", "Entity Framework · MVC · REST"],
    span:  "lg:col-span-5 lg:row-span-2",
    tall:  true,
  },
  {
    id:    "php",
    name:  "PHP / Laravel",
    icon:  FileCode,
    color: "#777BB3",
    bg:    "#EFEFFF",
    img:   IMG.php,
    desc:  "Rapid, scalable web application development using PHP's most productive frameworks.",
    caps:  ["Laravel · Symfony · WordPress", "REST APIs · Eloquent ORM"],
    span:  "lg:col-span-7",
    tall:  false,
  },
  {
    id:    "node",
    name:  "Node.js",
    icon:  Server,
    color: "#339933",
    bg:    "#EDFAED",
    img:   IMG.node,
    desc:  "High-performance server-side JavaScript for modern APIs and real-time applications.",
    caps:  ["Express · NestJS · GraphQL", "WebSockets · Microservices"],
    span:  "lg:col-span-4",
    tall:  false,
  },
  {
    id:    "angular",
    name:  "Angular",
    icon:  Layers,
    color: "#DD0031",
    bg:    "#FFF0F0",
    img:   IMG.angular,
    desc:  "Structured, opinionated frontend engineering for complex enterprise-scale SPAs.",
    caps:  ["RxJS · NgRx · Angular Material", "Signals · SSR · Testing"],
    span:  "lg:col-span-3",
    tall:  false,
  },
];

function TechnologyShowcase() {

return (

<section
id="ecosystem"
className="py-20 bg-white"
>

<div className="max-w-7xl mx-auto px-6 lg:px-12">

<Reveal className="text-center mb-14">

<Eyebrow>
Technology Ecosystem
</Eyebrow>

<h2
className="
mt-4
text-4xl
md:text-5xl
font-bold
text-[#0B1B38]
tracking-tight
"
>
Enterprise Technology
Capabilities
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
Specialized expertise designed for
modern business transformation.
</p>

</Reveal>



<motion.div

variants={stagger}
initial="hidden"
whileInView="show"
viewport={{ once:true }}

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
"

>

{technologies.map((tech)=>{

const Icon=tech.icon;

return(

<motion.div

key={tech.id}

variants={fadeUp}

whileHover={{
y:-5
}}

transition={{
duration:.25
}}

className="
group
relative
overflow-hidden
rounded-3xl
bg-white
border
border-slate-200
p-5
transition
hover:border-[#DCE7FA]
hover:shadow-[0_12px_40px_rgba(11,58,130,.08)]
"

>

{/* rounded top accent */}

<div
className="
absolute
left-5
right-5
top-0
h-[3px]
rounded-full
bg-[#0B3A82]
scale-x-0
origin-left
group-hover:scale-x-100
transition-transform
duration-500
"
/>



{/* icon */}

<div
className="
flex
items-start
justify-between
mb-5
"

>

<motion.div

whileHover={{
scale:1.05
}}

className="
relative
w-12
h-12
rounded-2xl
bg-[#F7FAFF]
border
border-[#EEF3FA]
flex
items-center
justify-center
overflow-hidden
"

>

<motion.div

className="
absolute
inset-0
rounded-2xl
bg-[#0B3A82]/5
"

animate={{
scale:[1,1.08,1]
}}

transition={{
duration:3,
repeat:Infinity
}}

/>

<motion.div

whileHover={{
rotate:[0,-8,0],
y:[0,-2,0]
}}

transition={{
duration:.5
}}

className="relative"

>

<Icon
className="
w-5
h-5
text-[#0B3A82]
"
/>

</motion.div>

</motion.div>


<ChevronRight
className="
w-4
h-4
text-[#0B3A82]
opacity-0
translate-x-2
group-hover:opacity-100
group-hover:translate-x-0
transition
"
/>

</div>



<h3
className="
text-lg
font-semibold
text-[#0B1B38]
mb-3
"
>

{tech.name}

</h3>


<p
className="
text-sm
text-slate-500
leading-6
line-clamp-3
mb-5
"
>

{tech.desc}

</p>



<div
className="
pt-4
border-t
border-slate-100
space-y-2
"

>

{tech.caps.map((cap)=>(

<div
key={cap}

className="
flex
items-center
gap-2
"

>

<div
className="
w-1.5
h-1.5
rounded-full
bg-[#0B3A82]
"
/>

<span
className="
text-xs
text-slate-500
"
>

{cap}

</span>

</div>

))}

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
   3. LEARNING APPROACH
════════════════════════════════════════════════════════════════════ */
const learningPhases = [
  { verb: "Learn",    icon: BookOpen, color: "#7C3AED", bg: "#EFF6FF",
    title: "Foundations",
    desc:  "Language fundamentals, architecture patterns, and modern toolchain setup." },
  { verb: "Build",    icon: Code2,    color: "#7C3AED", bg: "#F5F3FF",
    title: "Real Projects",
    desc:  "Hands-on sprints using actual client-adjacent codebases under mentor review." },
  { verb: "Practice", icon: Target,   color: "#7C3AED", bg: "#F0F9FF",
    title: "Code Reviews",
    desc:  "Pull request culture, peer feedback, and Agile ritual practice built in." },
  { verb: "Deploy",   icon: Rocket,   color: "#7C3AED", bg: "#ECFDF5",
    title: "Go Live",
    desc:  "CI/CD pipelines, staging environments, and production deployment confidence." },
];

function LearningApproach() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="mb-12">
          <Eyebrow>Learning Approach</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Built to ship,<br />not just to study.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Phase cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {learningPhases.map((phase, i) => {
              const Icon = phase.icon;
              const isActive = active === i;
              return (
                <motion.button key={phase.verb} onClick={() => setActive(i)}
                  whileHover={{ y: -2 }}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 w-full
                    ${isActive
                      ? "border-blue-200 bg-blue-50 shadow-lg shadow-blue-100/60"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:shadow-slate-100"}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: isActive ? phase.bg : "#F8FAFC" }}>
                      <Icon className="w-4 h-4 transition-colors" style={{ color: isActive ? phase.color : "#CBD5E1" }} />
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase"
                      style={{ color: isActive ? phase.color : "#CBD5E1" }}>
                      {phase.verb}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{phase.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{phase.desc}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
                className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100">
                <img src={[IMG.workspace, IMG.dotnet, IMG.collab, IMG.node][active]}
                  alt={learningPhases[active].title}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: learningPhases[active].color }}>
                      {learningPhases[active].verb}
                    </span>
                    <span className="text-[10px] text-slate-500">— {learningPhases[active].title}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   4. PROGRAM OUTCOMES
════════════════════════════════════════════════════════════════════ */
const outcomes = [
  { value: "4+",   label: "Technologies Covered",  icon: Code2,       color: "white", bg: "black" },
  { value: "6wk",  label: "Average Sprint Length",  icon: Zap,         color: "white", bg: "black" },
  { value: "96%",  label: "Client Retention Rate",  icon: TrendingUp,  color: "white", bg: "black" },
  { value: "100%", label: "Modern Tools Training",  icon: Monitor,     color: "white", bg: "black" },
];

function ProgramOutcomes() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-12">
          <Eyebrow>Program Outcomes</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Results you can<br />measure from week one.
          </h2>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <motion.div key={o.label} variants={fadeUp}
                className="group bg-white rounded-3xl border border-slate-200 p-7 text-center hover:shadow-xl hover:shadow-slate-100/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-40 group-hover:opacity-70 transition-opacity blur-xl"
                  style={{ backgroundColor: o.color }} />
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: o.bg }}>
                  <Icon className="w-5 h-5" style={{ color: o.color }} />
                </div>
                <p className="text-4xl font-black text-slate-900 mb-1 tracking-tight">{o.value}</p>
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
   5. WHY THIS PROGRAM
════════════════════════════════════════════════════════════════════ */
const whyPoints = [
  { title: "Hands-On Experience",     desc: "Every module includes lab work on real codebases — no theory-only sessions." },
  { title: "Practical Learning",      desc: "Sprint-based structure mirrors real Agile delivery teams from day one." },
  { title: "Modern Technologies",     desc: "Training material updated quarterly to reflect active enterprise stacks." },
  { title: "Career Readiness",        desc: "Interview prep, code challenges, and team-fit sessions included." },
];

function WhyThisProgram() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <Reveal>
            <Eyebrow>Why This Program</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Training that closes<br />
              <span className="text-blue-600">the real skill gap.</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
              We bridge the gap between academic learning and enterprise expectations — producing developers your teams actually want.
            </p>
            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-4">
              {whyPoints.map(({ title, desc }) => (
                <motion.li key={title} variants={fadeUp} className="flex gap-3 group">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
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

          {/* Right */}
          <div className="relative h-[360px] lg:h-[420px]">
            <motion.div style={{ y: imgY }} className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60">
              <img src={IMG.team} alt="Development team" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
            </motion.div>

            {/* Corner accent */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }} viewport={{ once: true }}
              className="absolute -bottom-2 -left-2 bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Quality Assured</p>
                <p className="text-[10px] text-slate-400">30-day post-deploy support</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }} viewport={{ once: true }}
              className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 p-4 text-center min-w-[100px]">
              <p className="text-xl font-black">1800+</p>
              <p className="text-[10px] opacity-80 font-medium mt-0.5">Devs Placed</p>
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-blue-200/25 blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(#2563EB 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <Reveal>
          <Eyebrow>Get Started Today</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.06] mb-5">
            Build Modern<br />
            <span className="text-blue-600">Web Skills.</span>
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto mb-10 leading-relaxed">
            Tell us what your team needs. We'll match, train, and deploy the right web developers — ready in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-xl shadow-blue-200">
              Contact Us <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a href="/programs" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold text-sm hover:border-blue-300 hover:text-blue-700 transition-all bg-white">
              Explore Programs
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════════════════════════════════ */
function WebDevlopment() {

  const animRef = useScrollAnimation()

  return (
    <main className="bg-white font-sans antialiased" className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <WebOverview />
      <TechnologyShowcase />
      <LearningApproach />
      <ProgramOutcomes />
      <WhyThisProgram />
      <PremiumCTA />
    </main>
  );
}

export default WebDevlopment

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useScrollAnimation } from '../../hooks/useScrollAnimation'
// import { motion } from "framer-motion";

// import {
// Code2,
// Server,
// Layers3,
// Globe,
// ArrowRight,
// Check
// } from "lucide-react";

// const WebDevlopment = () => {
//     const animRef = useScrollAnimation()

//   return (
//           <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
//                 <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
//                 <div className="absolute inset-0 z-0">
//                   <img
//                     className="w-full h-full object-cover opacity-20"
//                     src="https://visiontechtechnology.com/assets/images/services/contract-Staffing.jpg"
//                     alt="Contract Staffing"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
//                 </div>
        
//               <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
//                   <div className="max-w-2xl">
//                     <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
//                       flexible hiring
//                     </span>
//                     <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
//                       Contract Staffing
//                     </h1>
//                     <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
//                       A flexible hiring model where you can hire workers for specific projects, seasonal surges, or temporary roles
//                     </p>
//                     <div data-animate="fade-up" data-animate-delay="0.3">
//                       <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
//                         Contact us button
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 </section>

//                 {/* Section 2 */}

//                 <Web/>



//                 </main>
//   )
// }

// export default WebDevlopment