import React, { useState } from "react";
import { Link } from "react-router-dom";

function HelpDeskServices() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  const capabilities = [
    // Column 1: Purple (indigo-500/deep purple themed, from slide)
    {
      title: "End User Support",
      desc: "Provide real-time desktop assistance, OS debugging, and general troubleshooting for remote workers.",
      icon: "support_agent",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Antivirus Management",
      desc: "Deploy client security agents, run scheduled virus scans, and quarantine malware threats.",
      icon: "security",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "User Access Management",
      desc: "Administer user active directory accounts, assign group memberships, and execute password resets.",
      icon: "group",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "License Management",
      desc: "Audit software subscription usage, allocate licenses, and ensure corporate SaaS compliance.",
      icon: "assignment",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    // Column 2: Orange (orange-500/deep orange themed, from slide)
    {
      title: "Patch Management",
      desc: "Deploy desktop application updates, security updates, and critical operating system hotfixes.",
      icon: "build",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Printer Management",
      desc: "Configure local and network printers, clear print spools, and map network print queues.",
      icon: "print",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Application Support",
      desc: "Resolve run-time errors and authentication bottlenecks in corporate apps and ERP nodes.",
      icon: "desktop_windows",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Asset Management",
      desc: "Maintain hardware inventories, log device serial numbers, and track hardware warranties.",
      icon: "dns",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
  ];

  const helpdeskBrands = [
    {
      name: "ManageEngine",
      logo: "https://www.vectorlogo.zone/logos/zoho/zoho-icon.svg", // Zoho parent company logo as a representation
      desc: "Enterprise IT Ticketing, RMM, & Active Directory Controls",
      tag: "ITSM",
      borderColor: "hover:border-[#E61F1F]/50",
      glowColor: "group-hover:shadow-[#E61F1F]/10",
    },
    {
      name: "Jira Service Management",
      logo: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
      desc: "SLA-driven Queue Triaging and Incident Management",
      tag: "Service Desk",
      borderColor: "hover:border-[#0052CC]/50",
      glowColor: "group-hover:shadow-[#0052CC]/10",
    },
    {
      name: "WHMCS",
      logo: "https://www.vectorlogo.zone/logos/whmcs/whmcs-icon.svg",
      desc: "Domain Billing Operations and Support Portal Integration",
      tag: "Client Portal",
      borderColor: "hover:border-[#003399]/50",
      glowColor: "group-hover:shadow-[#003399]/10",
    },
    {
      name: "Zendesk",
      logo: "https://www.vectorlogo.zone/logos/zendesk/zendesk-icon.svg",
      desc: "Omnichannel Live Chat and Incident Ticketing Hub",
      tag: "Live Support",
      borderColor: "hover:border-[#03363D]/50",
      glowColor: "group-hover:shadow-[#03363D]/10",
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
              <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">Help Desk</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl mb-md">
              IT Help Desk Services
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl">
              Ensure business continuity and user productivity with dedicated 24/7 multi-tier technical support, SLA-driven ticketing, and secure remote resolution.
            </p>
            <div className="flex gap-md">
              <Link to="/contact-us" className="bg-white text-primary px-md py-sm font-bold uppercase text-label-sm tracking-wider rounded-full shadow-md hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                Consult Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section from Screenshot */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our IT Help Desk Capabilities
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            Keep your business operations running smoothly. We manage user Active Directory logs, deploy security patches, configure printers, and troubleshoot software applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center mb-xl">
          {/* Capabilities Grid - Full Width */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
              {capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  className="bg-white p-sm border border-outline-variant/50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-sm group"
                >
                  <div className={`p-3 rounded-lg border transition-all duration-300 shrink-0 h-12 w-12 flex items-center justify-center ${cap.colorClass}`}>
                    <span className="material-symbols-outlined text-[24px]">{cap.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[16px] text-on-surface mb-1 group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-[13px] text-on-surface-variant leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand integrations Section */}
      <section className="bg-surface-container-low border-y border-outline-variant/30 py-xl">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
              Supported Service Desks &amp; Ticketing Platforms
            </h2>
            <p className="font-body-lg text-body-md text-on-surface-variant">
              We integrate with and manage industry-standard service desk systems and billing portals to resolve incoming requests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {helpdeskBrands.map((brand, i) => (
              <div 
                key={i} 
                className={`bg-white p-sm border border-outline-variant/40 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${brand.borderColor}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    {/* Logo wrapper */}
                    <div className={`w-12 h-12 bg-surface-container rounded-lg p-2 flex items-center justify-center border border-outline-variant/20 shadow-sm shrink-0 transition-shadow duration-300 group-hover:shadow ${brand.glowColor}`}>
                      {imgErrors[brand.name] ? (
                        <div className="w-full h-full rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                          {brand.name[0]}
                        </div>
                      ) : (
                        <img 
                          src={brand.logo} 
                          alt={`${brand.name} Logo`} 
                          className="w-full h-full object-contain" 
                          onError={() => handleImgError(brand.name)}
                        />
                      )}
                    </div>
                    {/* Tag */}
                    <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded border border-outline-variant/25">
                      {brand.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-[16px] text-on-surface mb-1 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    {brand.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Desk Process / Timeline */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Ticketing Process
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            A continuous, SLA-driven cycle to log incoming incidents, triage problems, and confirm complete resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md relative">
          {/* Connector lines on large screen */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-outline-variant/50 -translate-y-1/2 -z-10" />

          {/* Phase 1 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">1</span>
            <span className="material-symbols-outlined text-[#673ab7] text-[40px] mb-sm mt-sm">confirmation_number</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Ticket Intake</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Log incidents through secure phone lines, chat modules, or direct portal portals instantly.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">2</span>
            <span className="material-symbols-outlined text-[#e65100] text-[40px] mb-sm mt-sm">checklist</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Triage & Analysis</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Analyze root-cause factors, determine priority level, and direct tickets to respective engineering teams.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">3</span>
            <span className="material-symbols-outlined text-primary text-[40px] mb-sm mt-sm">fact_check</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Resolution & Verification</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Confirm patch efficacy, document solution reports inside knowledge bases, and close user tickets.
            </p>
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
            Ready to Accelerate Incident Resolutions?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl mx-auto">
            Get in touch with our IT support consultants to establish dedicated, multi-tier ticketing queues tailored for your user base.
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

export default HelpDeskServices;