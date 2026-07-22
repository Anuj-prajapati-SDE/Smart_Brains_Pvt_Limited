import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import {
  Zap,
  DollarSign,
  Shuffle,
  Users,
  ClipboardList,
  RefreshCw,
  CheckCircle2,
  TrendingUp,
  Globe,
  HeartPulse,
  Factory,
  Radio,
  ShoppingBag,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

// ─── Shared Animation Variants ───────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-3">
      {children}
    </span>
  );
}

function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 leading-tight ${className}`}>
      {children}
    </h2>
  );
}

// ─── 1. CONTRACT STAFFING OVERVIEW ───────────────────────────────────────────
const badges = [
  { label: "Scalable Hiring" },
  { label: "Workforce Flexibility" },
  { label: "Cost-Efficient" },
];

function OverviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              flexible hiring
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              Contract Staffing
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

 </>


  );
}

// ─── 2. WHY CONTRACT STAFFING ─────────────────────────────────────────────────
const reasons = [
  {
    icon: Zap,
    title: "Faster Hiring",
    desc: "Tap into a pre-screened talent pool and onboard professionals in days, not months.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    desc: "Eliminate full-time benefits overhead. Pay only for the skills you need, when you need them.",
  },
  {
    icon: Shuffle,
    title: "Workforce Flexibility",
    desc: "Scale your team up or down in response to project demands without long-term commitments.",
  },
  {
    icon: Users,
    title: "Access to Skilled Talent",
    desc: "Reach niche specialists across domains — from cloud architects to compliance analysts.",
  },
  {
    icon: ClipboardList,
    title: "Reduced Admin Burden",
    desc: "We manage payroll, compliance, contracts, and documentation end-to-end.",
  },
  {
    icon: RefreshCw,
    title: "Business Continuity",
    desc: "Prevent operational gaps during transitions, expansions, or sudden workforce changes.",
  },
];

function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionLabel>Why It Works</SectionLabel>
          <SectionHeading>Why Enterprises Choose Contract Staffing</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.05}
              className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-700 transition-colors duration-300">
                <r.icon size={22} className="text-blue-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
              </div>
              <h3 className="text-slate-900 font-semibold text-base mb-2">{r.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. OUR APPROACH / TIMELINE ──────────────────────────────────────────────
const steps = [
  { num: "01", title: "Understand Requirements", desc: "We begin with a detailed intake — your role specifications, timelines, and culture fit." },
  { num: "02", title: "Source Talent", desc: "Our recruiters activate the network, leveraging sourcing channels suited to the domain." },
  { num: "03", title: "Evaluate Candidates", desc: "Multi-stage screening — technical assessments, background checks, reference validation." },
  { num: "04", title: "Deploy Workforce", desc: "Onboarding, documentation, and compliance handled seamlessly before day one." },
  { num: "05", title: "Ongoing Support", desc: "Dedicated account managers ensure performance, retention, and smooth contract extension." },
];

function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionLabel>Our Approach</SectionLabel>
          <SectionHeading>How We Deploy the Right Talent</SectionHeading>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* connector line */}
          <div className="absolute top-9 left-0 right-0 h-px bg-slate-200 z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
            style={{ transformOrigin: "left" }}
            className="absolute top-9 left-0 right-0 h-px bg-blue-600 z-10"
          />
          <div className="relative z-20 grid grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.12}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[72px] h-[72px] rounded-full border-4 border-white shadow-md bg-blue-700 flex items-center justify-center mb-5">
                  <span className="text-white text-sm font-bold">{s.num}</span>
                </div>
                <h4 className="text-slate-900 font-semibold text-sm mb-2">{s.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col gap-8 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200" />
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="flex gap-6 items-start"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-blue-700 flex-shrink-0 flex items-center justify-center shadow">
                <span className="text-white text-xs font-bold">{s.num}</span>
              </div>
              <div className="pt-2">
                <h4 className="text-slate-900 font-semibold text-sm mb-1">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. STATS / IMPACT ───────────────────────────────────────────────────────
const stats = [
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 72, suffix: "h", label: "Faster Deployment" },
  { value: 500, suffix: "+", label: "Professionals Network" },
  { value: 90, suffix: "%", label: "Retention Support" },
];

function AnimatedCounter({ target, suffix, inView }) {
  const count = useRef(0);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplay(Math.floor(current));
      if (current >= target) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span className="text-5xl font-bold text-white tabular-nums">
      {display}{suffix}
    </span>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 bg-blue-800 relative overflow-hidden">
      {/* subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <SectionLabel>
            <span className="text-blue-300">Staffing Impact</span>
          </SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Numbers That Demonstrate Our Commitment
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
            >
              <AnimatedCounter target={s.value} suffix={s.suffix} inView={inView} />
              <p className="text-blue-200 text-sm mt-2 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. INDUSTRIES WE SUPPORT ─────────────────────────────────────────────────
const industries = [
  { icon: Globe, name: "Information Technology", desc: "From DevOps to data engineering" },
  { icon: TrendingUp, name: "BFSI", desc: "Risk, compliance, and fintech roles" },
  { icon: HeartPulse, name: "Healthcare", desc: "Clinical, allied health, and HIT staff" },
  { icon: Factory, name: "Manufacturing", desc: "Production, quality, and ops talent" },
  { icon: Radio, name: "Telecom", desc: "Network, infrastructure, and support" },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Merchandising, ops, and analytics" },
];

function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionLabel>Industries</SectionLabel>
          <SectionHeading>Sectors We Serve</SectionHeading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <ind.icon size={20} className="text-blue-700" strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">{ind.name}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. WHY PARTNER WITH US ───────────────────────────────────────────────────
const partnerPoints = [
  { label: "Full compliance management across labour laws and regulations" },
  { label: "Quality-first screening with technical and cultural assessment" },
  { label: "Dedicated account managers for seamless engagement" },
  { label: "Scalable models — from single hire to bulk deployment" },
  { label: "Transparent reporting and SLA-backed delivery" },
  { label: "Post-deployment retention and performance monitoring" },
];

function WhyPartnerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
            >
              <SectionLabel>Partnership</SectionLabel>
              <SectionHeading className="mb-4">
                What Sets Our Staffing Partnership Apart
              </SectionHeading>
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
              className="text-slate-600 text-base leading-relaxed mb-8"
            >
              We don't just fill positions — we invest in long-term talent relationships that
              benefit both your business and the professionals we place. Every engagement is
              supported by dedicated professionals who understand your industry and priorities.
            </motion.p>

            <ul className="space-y-4">
              {partnerPoints.map((p, i) => (
                <motion.li
                  key={p.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i * 0.08 + 0.2}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-slate-600 text-sm leading-relaxed">{p.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right – Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=900&q=80"
              alt="Enterprise business partnership"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. FINAL CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-400 mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Build Flexible Teams<br />
            <span className="text-blue-400">Faster</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Let our staffing experts help you find the right contract professionals — on demand,
          fully compliant, and ready to deliver from day one.
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-blue-900/40"
          >
            Contact Us <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-colors duration-200"
          >
            <PhoneCall size={16} strokeWidth={2} />
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// --- 8. STAFFING PAGE WRAPPER COMPONENTS ─────────────────────────────────────────────

export function ContractStaff () {
  const animRef = useScrollAnimation()

    return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <WhySection />
      <TimelineSection />
      <StatsSection />
      <IndustriesSection />
      <WhyPartnerSection />
      {/* <CTASection /> */}
    </main>
  );


}


// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────

const ContractStaffing= ()=> {
  const animRef = useScrollAnimation()
  
  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      <OverviewSection />
      <WhySection />
      <TimelineSection />
      <StatsSection />
      <IndustriesSection />
      <WhyPartnerSection />
      {/* <CTASection /> */}
    </main>
  );
}



export default ContractStaffing;


// i comment ctc section because we have to add links in it 