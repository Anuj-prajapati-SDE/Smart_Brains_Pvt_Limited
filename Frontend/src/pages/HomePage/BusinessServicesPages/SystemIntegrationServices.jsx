import React from "react";
import { Link } from "react-router-dom";

function SystemIntegrationServices() {
  const serviceCategories = [
    "Infrastructure Management",
    "Infra Projects / Consulting",
    "Security Consulting",
    "Managed Security Services",
    "Hosting Services",
    "Enterprise Application Management",
  ];

  const processStages = [
    {
      title: "Plan/Assess",
      subtitle: "Consulting Stage",
      colorClass: "border-slate-300 hover:border-slate-500",
      accentBg: "bg-slate-500 text-white",
      badgeColor: "bg-slate-100 text-slate-700",
      bulletColor: "text-slate-500",
      bullets: [
        "Infrastructure / Cloud Consulting (Networks, Security, Storage)",
        "ITIL & ISMS Assessment",
        "Enterprise Security Compliance Auditing",
        "Disaster Recovery (DR) & BCP Solutions Planning",
        "Site evaluation for Data Centre project planning",
      ],
    },
    {
      title: "Design",
      subtitle: "Consulting Stage",
      colorClass: "border-purple-300 hover:border-purple-500",
      accentBg: "bg-[#5c2d91] text-white",
      badgeColor: "bg-purple-100 text-purple-700",
      bulletColor: "text-purple-500",
      bullets: [
        "DataCenter Design as per Tier requirements",
        "Infrastructure & Server Consolidation",
        "DR / BCP Architectural Design",
        "NOC / SOC Operations Center Design",
        "HelpDesk & Customer Support Center Design",
      ],
    },
    {
      title: "Implement/Migrate",
      subtitle: "Execution Stage",
      colorClass: "border-orange-300 hover:border-orange-500",
      accentBg: "bg-[#e65100] text-white",
      badgeColor: "bg-orange-100 text-orange-700",
      bulletColor: "text-orange-500",
      bullets: [
        "SITC of Datacenter & Cloud Implementation",
        "Testing & commissioning of Datacenter equipment",
        "DR / BCP Deployment & Auditing",
        "Messaging & Queue Infrastructure setup",
        "Process alignment: BS20001 & ITIL Standards",
        "NOC Command Center implementation",
        "Systems Integration (Security, Storage & Network)",
      ],
    },
    {
      title: "Manage",
      subtitle: "Operational Stage",
      colorClass: "border-red-300 hover:border-red-500",
      accentBg: "bg-[#cc1a1a] text-white",
      badgeColor: "bg-red-100 text-red-700",
      bulletColor: "text-red-500",
      bullets: [
        "DataCenter & Cloud Infrastructure Management",
        "Network & Gateway Monitoring",
        "Desktop Support & Compliance Management",
        "Server Host & OS Provisioning",
        "Security Center Incident Management",
        "Enterprise Application Performance Management",
        "Web Hosting & DNS Maintenance",
        "Service Desk HelpDesk Operations",
      ],
    },
  ];

  return (
    <main className="mt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary-container to-[#004080] text-on-primary py-xl px-gutter overflow-hidden">
        {/* Dynamic Background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="absolute w-[500px] h-[500px] -top-10 -right-10 text-white" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2 4" />
          </svg>
          <svg className="absolute w-[400px] h-[400px] -bottom-20 -left-20 text-white" viewBox="0 0 100 100" fill="currentColor">
            <rect x="10" y="10" width="80" height="80" rx="10" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 6" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-lg items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <nav className="text-label-sm uppercase tracking-widest opacity-80 mb-sm">
              <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">System Integration</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl mb-md">
              System Integration Services
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl">
              Unify your enterprise software systems, physical infrastructures, databases, and cloud platforms into one cohesive, high-performance operations system.
            </p>
            <div className="flex gap-md">
              <Link to="/contact-us" className="bg-white text-primary px-md py-sm font-bold uppercase text-label-sm tracking-wider rounded-full shadow-md hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                Consult Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Star List */}
      <section className="max-w-[1280px] mx-auto px-gutter pt-xl pb-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-sm">
          {serviceCategories.map((cat, i) => (
            <div 
              key={i} 
              className="bg-white p-sm border border-outline-variant/60 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-xs group"
            >
              <span className="material-symbols-outlined text-[#673ab7] text-[20px] shrink-0 group-hover:scale-110 transition-transform">star</span>
              <span className="text-[12px] font-bold text-on-surface leading-tight">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chevron Flow & Gear Section */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
          
          {/* Left: 4-stage process block flow */}
          <div className="lg:col-span-8">
            <div className="mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">
                Our System Integration Lifecycle
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We guide your IT consolidation project through four core phases: assessing system states, designing blueprints, implementing secure migrations, and running ongoing support operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
              {processStages.map((stage, i) => (
                <div 
                  key={i} 
                  className={`bg-white p-md border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${stage.colorClass}`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-sm">
                      <h3 className="font-bold text-[18px] text-on-surface group-hover:text-primary transition-colors">
                        {stage.title}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${stage.badgeColor}`}>
                        {stage.subtitle}
                      </span>
                    </div>
                    
                    <ul className="space-y-xs">
                      {stage.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-[13px] text-on-surface-variant leading-normal">
                          <span className={`material-symbols-outlined text-[16px] mt-0.5 shrink-0 ${stage.bulletColor}`}>check</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Spinning Gears Visual representation from slide */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center p-sm bg-white border border-outline-variant/40 rounded-3xl shadow-lg">
              {/* Spinning Gears SVG container */}
              <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Large Central Gear - SYSTEM INTEGRATION */}
                <g className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: "150px 150px" }}>
                  <circle cx="150" cy="150" r="45" fill="#002a58" />
                  {/* Gear teeth */}
                  {[...Array(12)].map((_, i) => (
                    <path
                      key={i}
                      d="M140 95 H160 L165 110 H135 L140 95Z"
                      fill="#002a58"
                      transform={`rotate(${i * 30} 150 150)`}
                    />
                  ))}
                  <circle cx="150" cy="150" r="30" fill="white" />
                </g>
                <text x="150" y="147" textAnchor="middle" dominantBaseline="middle" fill="#002a58" className="font-bold text-[10px] tracking-tighter" style={{ pointerEvents: "none" }}>SYSTEM</text>
                <text x="150" y="157" textAnchor="middle" dominantBaseline="middle" fill="#002a58" className="font-bold text-[10px] tracking-tighter" style={{ pointerEvents: "none" }}>INTEGRATION</text>

                {/* Left Gear - DESIGN */}
                <g className="animate-[spin_10s_linear_infinite_reverse]" style={{ transformOrigin: "80px 210px" }}>
                  <circle cx="80" cy="210" r="28" fill="#e65100" />
                  {[...Array(8)].map((_, i) => (
                    <path
                      key={i}
                      d="M74 175 H86 L89 186 H71 L74 175Z"
                      fill="#e65100"
                      transform={`rotate(${i * 45} 80 210)`}
                    />
                  ))}
                  <circle cx="80" cy="210" r="18" fill="white" />
                </g>
                <text x="80" y="213" textAnchor="middle" dominantBaseline="middle" fill="#e65100" className="font-bold text-[8px]" style={{ pointerEvents: "none" }}>DESIGN</text>

                {/* Top-Right Gear - IMPLEMENT */}
                <g className="animate-[spin_12s_linear_infinite_reverse]" style={{ transformOrigin: "215px 95px" }}>
                  <circle cx="215" cy="95" r="32" fill="#ff9900" />
                  {[...Array(10)].map((_, i) => (
                    <path
                      key={i}
                      d="M208 55 H222 L225 67 H205 L208 55Z"
                      fill="#ff9900"
                      transform={`rotate(${i * 36} 215 95)`}
                    />
                  ))}
                  <circle cx="215" cy="95" r="20" fill="white" />
                </g>
                <text x="215" y="98" textAnchor="middle" dominantBaseline="middle" fill="#ff9900" className="font-bold text-[8px]" style={{ pointerEvents: "none" }}>IMPLEMENT</text>

                {/* Bottom-Right Gear - MIGRATE */}
                <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: "220px 210px" }}>
                  <circle cx="220" cy="210" r="25" fill="#cc1a1a" />
                  {[...Array(8)].map((_, i) => (
                    <path
                      key={i}
                      d="M215 178 H225 L228 188 H212 L215 178Z"
                      fill="#cc1a1a"
                      transform={`rotate(${i * 45} 220 210)`}
                    />
                  ))}
                  <circle cx="220" cy="210" r="15" fill="white" />
                </g>
                <text x="220" y="213" textAnchor="middle" dominantBaseline="middle" fill="#cc1a1a" className="font-bold text-[7px]" style={{ pointerEvents: "none" }}>MIGRATE</text>
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-on-primary py-xl px-gutter text-center relative overflow-hidden mb-20 max-w-6xl rounded-2xl mx-auto">
        {/* Abstract graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004080]/30 rounded-full blur-xl pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="font-headline-lg text-[32px] md:text-[40px] leading-tight mb-md">
            Ready to Connect Your System Operations?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl mx-auto">
            Partner with our integration engineers to bridge legacy software databases, deploy cloud migrations, and manage network gateways.
          </p>
          <Link 
            to="/contact-us" 
            className="inline-block bg-white text-primary px-xl py-sm font-bold uppercase text-label-sm tracking-wider rounded-full shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300"
          >
            Consult Our Experts
          </Link>
        </div>
      </section>
    </main>
  );
}

export default SystemIntegrationServices;