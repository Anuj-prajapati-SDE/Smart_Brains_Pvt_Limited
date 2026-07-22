import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slidebar from "../../../components/ScrollSlider";


import client_1 from '../../../assets/images/NetworkSlider/a.jpg'
import client_2 from '../../../assets/images/NetworkSlider/b.jpg'
import client_3 from '../../../assets/images/NetworkSlider/c.jpg'
import client_4 from '../../../assets/images/NetworkSlider/d.jpg'
import client_5 from '../../../assets/images/NetworkSlider/e.jpg'
import client_6 from '../../../assets/images/NetworkSlider/f.jpg'
import client_7 from '../../../assets/images/NetworkSlider/g.jpg'
import client_8 from '../../../assets/images/NetworkSlider/h.jpg'
import client_9 from '../../../assets/images/NetworkSlider/i.jpg'
import client_10 from '../../../assets/images/NetworkSlider/j.jpg'


  const NetworkImg = [
                  { name: "FLYWAY", img: client_1 },
                  { name: "JENKINS", img: client_2 },
                  { name: "SPLUNK ON-CALL", img: client_3 },
                  { name: "DOCKER", img: client_4 },
                  { name: "RABBITMQ", img: client_5 },
                  { name: "PUPPET", img: client_6 },
                  { name: "ATLASSIAN CLOUD", img: client_7 },
                  { name: "KUBERNETES", img: client_8 },
                  { name: "GIT", img: client_9 },
                  { name: "GIT", img: client_10 },
                ]

function NetworkSecurityServices() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  const capabilities = [
    // Purple Column (indigo/deep purple themed, from slide)
    {
      title: "Network Design",
      desc: "Architect, plan, and blueprint custom, isolated network topologies configured for scalable growth.",
      icon: "schema",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Network Security Review",
      desc: "Perform comprehensive auditing of system policies, active rulesets, and perimeter access paths.",
      icon: "gpp_maybe",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Network Implementation",
      desc: "Physically and virtually deploy core routers, smart switches, subnets, and active configurations.",
      icon: "settings_input_component",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    // Orange Column (orange/red themed, from slide)
    {
      title: "Firewall Management",
      desc: "Configure, update, and monitor stateful firewalls to shield private subnets from malicious traffic.",
      icon: "vpn_lock",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Log Monitoring",
      desc: "Aggregate packet stream logs, perform real-time security analysis, and trigger instant incident alerts.",
      icon: "assignment",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Proxy Management",
      desc: "Enforce secure edge proxy architectures to mask interior system assets and restrict unauthorized access.",
      icon: "lock",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
  ];

  const networkBrands = [
    {
      name: "Cisco",
      logo: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg",
      desc: "Enterprise Routing & Security Appliances",
      tag: "Hardware & Edge",
      borderColor: "hover:border-[#005073]/50",
      glowColor: "group-hover:shadow-[#005073]/10",
    },
    {
      name: "Juniper Networks",
      logo: "https://www.vectorlogo.zone/logos/juniper/juniper-icon.svg",
      desc: "High-performance Routing & Firewall Systems",
      tag: "Network Core",
      borderColor: "hover:border-[#008f51]/50",
      glowColor: "group-hover:shadow-[#008f51]/10",
    },
    {
      name: "Nortel Networks",
      logo: "https://www.vectorlogo.zone/logos/nortel/nortel-icon.svg",
      desc: "Carrier-Grade Switching & Telephony Solutions",
      tag: "Infrastructure",
      borderColor: "hover:border-[#003399]/50",
      glowColor: "group-hover:shadow-[#003399]/10",
    },
    {
      name: "Microsoft Forefront",
      logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
      desc: "Threat Management Gateway & Edge Security",
      tag: "Gateway Security",
      borderColor: "hover:border-[#5c2d91]/50",
      glowColor: "group-hover:shadow-[#5c2d91]/10",
    },
    {
      name: "Check Point",
      logo: "https://www.vectorlogo.zone/logos/checkpoint/checkpoint-icon.svg",
      desc: "Next-Gen Firewalls & Advanced Threat Auditing",
      tag: "Stateful Firewall",
      borderColor: "hover:border-[#ec1c24]/50",
      glowColor: "group-hover:shadow-[#ec1c24]/10",
    },
    {
      name: "NetScreen",
      logo: "https://www.vectorlogo.zone/logos/juniper/juniper-icon.svg", // NetScreen acquired by Juniper
      desc: "Integrated ASIC-Based Firewall & VPN Systems",
      tag: "VPN & Gateways",
      borderColor: "hover:border-[#002d62]/50",
      glowColor: "group-hover:shadow-[#002d62]/10",
    },
    {
      name: "Palo Alto Networks",
      logo: "https://www.vectorlogo.zone/logos/paloaltonetworks/paloaltonetworks-icon.svg",
      desc: "Cloud Security, SASE, & Next-Gen Threat Intel",
      tag: "Cloud Security",
      borderColor: "hover:border-[#e02020]/50",
      glowColor: "group-hover:shadow-[#e02020]/10",
    },
    {
      name: "Blue Coat",
      logo: "https://www.vectorlogo.zone/logos/broadcom/broadcom-icon.svg", // Blue Coat acquired by Broadcom
      desc: "Secure Web Gateway & Advanced Threat Inspection",
      tag: "Proxy & Web Security",
      borderColor: "hover:border-[#0f4c81]/50",
      glowColor: "group-hover:shadow-[#0f4c81]/10",
    },
    {
      name: "Cyberoam",
      logo: "https://www.vectorlogo.zone/logos/sophos/sophos-icon.svg", // Cyberoam acquired by Sophos
      desc: "Identity-Based Unified Threat Management (UTM)",
      tag: "UTM Appliance",
      borderColor: "hover:border-[#f58220]/50",
      glowColor: "group-hover:shadow-[#f58220]/10",
    },
    {
      name: "SonicWall",
      logo: "https://www.vectorlogo.zone/logos/sonicwall/sonicwall-icon.svg",
      desc: "Stateful Packet Inspection & VPN Gateways",
      tag: "SMB & Enterprise",
      borderColor: "hover:border-[#f26522]/50",
      glowColor: "group-hover:shadow-[#f26522]/10",
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
              <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">Network &amp; Security</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl mb-md">
              Network &amp; Security Services
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl">
              Secure your digital landscape against emerging threats with advanced threat intelligence, active vulnerability scanning, and secure firewall gateways.
            </p>
            <div className="flex gap-md">
              <Link to="/contact-us" className="bg-white text-primary px-md py-sm font-bold uppercase text-label-sm tracking-wider rounded-full shadow-md hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                Consult Our Experts
              </Link>
            </div>
          </div>
          
          {/* Right Image Illustration */}
         
        </div>
      </section>

      {/* Capabilities Section from Screenshot */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Network &amp; Security Capabilities
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            Establish a fortress around your infrastructure. We design, audit, deploy, and monitor secure networks and appliances to stop incidents before they happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center mb-xl">
          {/* Capabilities Grid - Full Width */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
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
              Supported Security Technologies
            </h2>
            <p className="font-body-lg text-body-md text-on-surface-variant">
              We configure and manage high-grade security solutions from the world's leading network appliance providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-md">
            {networkBrands.map((brand, i) => (
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
                      SEC
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

      {/* Security Blueprint Lifecycle */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Security Blueprint
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            A structured method to audit active systems, isolate logical networks, and conduct round-the-clock incident containment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md relative">
          {/* Connector lines on large screen */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-outline-variant/50 -translate-y-1/2 -z-10" />

          {/* Phase 1 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">1</span>
            <span className="material-symbols-outlined text-[#673ab7] text-[40px] mb-sm mt-sm">gpp_maybe</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Vulnerability Assessment</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Perform deep penetration testing, identify threat topologies, locate configuration errors, and document target action plans.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">2</span>
            <span className="material-symbols-outlined text-[#e65100] text-[40px] mb-sm mt-sm">shield</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Isolation & Firewalls</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Establish isolated DMZ zones, configure virtual private gateways, lock firewalls, and filter access with zero-trust credentials.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">3</span>
            <span className="material-symbols-outlined text-primary text-[40px] mb-sm mt-sm">vpn_key</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">SOC Incident Auditing</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Run active log collectors, analyze network traffic streams, respond to threat incidents, and review ISO regulatory compliance.
            </p>
          </div>
        </div>
      </section>


          {/* Add slider here  */}
  
  <Slidebar ImgArray={NetworkImg}/>
      
     {/* Add slider here  */}

      {/* Call to Action Section */}
      <section className="bg-primary text-on-primary py-xl px-gutter text-center relative overflow-hidden mb-20 max-w-6xl rounded-2xl mx-auto">
        {/* Abstract graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004080]/30 rounded-full blur-xl pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="font-headline-lg text-[32px] md:text-[40px] leading-tight mb-md">
            Ready to Shield Your Network Infrastructure?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl mx-auto">
            Consult with our cybersecurity engineering team to design, audit, and deploy a robust network security blueprint built for zero-trust compliance.
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

export default NetworkSecurityServices;