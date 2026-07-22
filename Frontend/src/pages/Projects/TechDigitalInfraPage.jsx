import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const TechDigitalInfraPage = () => {
  const animRef = useScrollAnimation()

  const serverRacks = [
    {
      rack: "RACK-01: SECURE DATACENTER",
      location: "Noida Node-B",
      status: "ONLINE",
      metric: "99.999% SLA Verified",
      task: "Fiber grid, high-density server racking, active hardware firewalls.",
      ip: "10.24.85.101"
    },
    {
      rack: "RACK-02: SMART CITY NETWORK",
      location: "UP Central Region",
      status: "ACTIVE",
      metric: "400+ KM Fiber Connected",
      task: "Laying optical lines, router nodes configuration, Wi-Fi base stations.",
      ip: "172.16.40.2"
    },
    {
      rack: "RACK-03: HYBRID CLOUD CLUSTER",
      location: "AWS / Azure Hybrid",
      status: "DEPLOYED",
      metric: "65% Delivery Speed Gain",
      task: "Database migrations, Jenkins pipelines orchestration, Docker containers.",
      ip: "192.168.12.50"
    },
    {
      rack: "RACK-04: UTILITY SUPPORT HELP DESK",
      location: "Help Desk Central",
      status: "ACTIVE",
      metric: "12,000+ Nodes Managed",
      task: "Ticketing pipeline setup, incident response SLA, remote diagnostics.",
      ip: "10.8.0.1"
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-background dark:bg-[#0c0e0f] text-on-surface dark:text-white font-mono" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center bg-primary overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-10"
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
            alt="Servers cables"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-primary" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full text-white">
          <div className="max-w-2xl space-y-4">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest">
              SYSTEM STATUS: NOMINAL
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase text-[#a9c7ff]">
              Tech &amp; Digital Infrastructure
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Vetted case files of datacenter layout designs, AWS/Azure hybrid clusters migration, and smart city fiber networks setup.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3" className="pt-2">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] transition-all font-bold rounded-xl text-xs uppercase tracking-wider">
                Establish Direct API Link
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Server Rack Monitoring Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter">
        <div className="max-w-2xl mb-16" data-animate="fade-up">
          <span className="text-xs text-primary dark:text-[#a9c7ff] font-bold">// CASE FILE TELEMETRY</span>
          <h2 className="text-2xl font-bold tracking-tight text-primary dark:text-white mt-1 uppercase">Infrastructure Deployment Status</h2>
        </div>

        <div className="flex flex-col gap-6" data-animate="stagger-up">
          {serverRacks.map((rc, idx) => (
            <div key={idx} className="bg-white dark:bg-[#111416] border border-slate-200 dark:border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-primary/20 dark:hover:border-white/10 transition-colors shadow-sm">
              
              {/* Left Side: Server name + IP */}
              <div className="space-y-1.5 w-full lg:w-1/3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping shrink-0" />
                  <h3 className="font-bold text-slate-800 dark:text-white text-sm tracking-wide uppercase">{rc.rack}</h3>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 block font-mono">Location: {rc.location} // Local IP: {rc.ip}</span>
              </div>

              {/* Middle Side: Task description */}
              <div className="text-xs text-slate-500 dark:text-slate-400 w-full lg:w-1/3 font-light leading-relaxed">
                {rc.task}
              </div>

              {/* Right Side: SLA Verification metric */}
              <div className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-white/5 font-mono">
                <span className="bg-green-500/10 text-green-600 dark:text-green-400 text-[9px] font-bold px-2 py-0.5 rounded border border-green-500/20 uppercase tracking-widest">
                  {rc.status}
                </span>
                <span className="text-xs font-bold text-primary dark:text-[#a9c7ff] mt-1">{rc.metric}</span>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default TechDigitalInfraPage
