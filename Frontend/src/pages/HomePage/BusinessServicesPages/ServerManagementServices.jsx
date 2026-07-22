import React, { useState } from "react";
import { Link } from "react-router-dom";

import client_1 from '../../../assets/images/ServerImg/a.jpg'
import client_2 from '../../../assets/images/ServerImg/b.jpg'
import client_3 from '../../../assets/images/ServerImg/c.jpg'
import client_4 from '../../../assets/images/ServerImg/d.jpg'
import client_5 from '../../../assets/images/ServerImg/e.jpg'
import client_6 from '../../../assets/images/ServerImg/f.jpg'
import client_7 from '../../../assets/images/ServerImg/g.jpg'
import client_8 from '../../../assets/images/ServerImg/h.jpg'
import client_9 from '../../../assets/images/ServerImg/i.jpg'
import client_10 from '../../../assets/images/ServerImg/j.jpg'
import Slidebar from "../../../components/ScrollSlider";


  const ServerImg = [
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

function ServerManagementServices() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  const capabilities = [
    // Column 1: Purple (indigo-500/deep purple themed, from slide)
    {
      title: "Server Setup & Management",
      desc: "Provision, configure, and maintain physical hosts, cloud instances, and virtualization hypervisors.",
      icon: "dns",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Patch Management",
      desc: "Deploy operating system upgrades, security hotfixes, and package updates to counter vulnerabilities.",
      icon: "build",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Backup Management",
      desc: "Establish regular database snapshots, server image backups, and secure off-site data replication.",
      icon: "cloud_upload",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Antivirus Management",
      desc: "Configure server-level firewalls, virus scans, and endpoint threat containment policies.",
      icon: "security",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    // Column 2: Orange (orange-500/deep orange themed, from slide)
    {
      title: "Exchange Server Management",
      desc: "Setup and manage Microsoft Exchange environments, mail routing, spam filters, and connectivity.",
      icon: "mail",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Database Management",
      desc: "Provision and optimize database clusters (SQL Server, MySQL, PostgreSQL) for high speed and availability.",
      icon: "storage",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Identity & Access Management",
      desc: "Administer Microsoft Active Directory, LDAP directories, group policies, and IAM permissions.",
      icon: "group",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Application Hosting",
      desc: "Configure runtime environments, static web applications, and backend microservice frameworks.",
      icon: "terminal",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    // Column 3: Black (slate-950 themed, from slide)
    {
      title: "Service Management",
      desc: "Oversee operational SLAs, log reports, software licensing compliance, and user helpdesk requests.",
      icon: "support_agent",
      theme: "black",
      colorClass: "bg-slate-100 text-slate-800 group-hover:bg-slate-950 group-hover:text-white border-slate-200",
    },
    {
      title: "Server Migration",
      desc: "Execute smooth, low-downtime workload migrations between hardware nodes, virtual environments, and clouds.",
      icon: "cloud_sync",
      theme: "black",
      colorClass: "bg-slate-100 text-slate-800 group-hover:bg-slate-950 group-hover:text-white border-slate-200",
    },
    {
      title: "Virtualization",
      desc: "Deploy and optimize hypervisor architectures (VMware vSphere, Microsoft Hyper-V, and Proxmox VE).",
      icon: "desktop_windows",
      theme: "black",
      colorClass: "bg-slate-100 text-slate-800 group-hover:bg-slate-950 group-hover:text-white border-slate-200",
    },
  ];

  const serverBrands = [
    {
      name: "Windows Server",
      logo: "https://www.vectorlogo.zone/logos/windows/windows-icon.svg",
      desc: "Active Directory, GPO, & Hyper-V Management",
      tag: "Microsoft",
      borderColor: "hover:border-[#0078D7]/50",
      glowColor: "group-hover:shadow-[#0078D7]/10",
    },
    {
      name: "Microsoft Exchange",
      logo: "https://www.vectorlogo.zone/logos/microsoft_exchange/microsoft_exchange-icon.svg",
      desc: "Enterprise Mail Routing, Calendars, & Security Policies",
      tag: "Exchange",
      borderColor: "hover:border-[#0078D7]/50",
      glowColor: "group-hover:shadow-[#0078D7]/10",
    },
    {
      name: "Amazon Web Services",
      logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      desc: "AWS EC2, Lightsail, & Cloud Compute Provisioning",
      tag: "AWS Cloud",
      borderColor: "hover:border-[#FF9900]/50",
      glowColor: "group-hover:shadow-[#FF9900]/10",
    },
    {
      name: "Microsoft Azure",
      logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
      desc: "Azure Virtual Machines & Compute Infrastructure",
      tag: "Azure Cloud",
      borderColor: "hover:border-[#0089D6]/50",
      glowColor: "group-hover:shadow-[#0089D6]/10",
    },
    {
      name: "Ubuntu",
      logo: "https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg",
      desc: "Canonical Ubuntu Server OS Deployments & Patching",
      tag: "Linux OS",
      borderColor: "hover:border-[#E95420]/50",
      glowColor: "group-hover:shadow-[#E95420]/10",
    },
    {
      name: "CentOS",
      logo: "https://www.vectorlogo.zone/logos/centos/centos-icon.svg",
      desc: "Community Enterprise Operating System Integration",
      tag: "Linux OS",
      borderColor: "hover:border-[#26255C]/50",
      glowColor: "group-hover:shadow-[#26255C]/10",
    },
    {
      name: "Red Hat Linux",
      logo: "https://www.vectorlogo.zone/logos/redhat/redhat-icon.svg",
      desc: "Enterprise Linux Server Subscriptions & Provisioning",
      tag: "Linux OS",
      borderColor: "hover:border-[#CC0000]/50",
      glowColor: "group-hover:shadow-[#CC0000]/10",
    },
    {
      name: "VMware",
      logo: "https://www.vectorlogo.zone/logos/vmware/vmware-icon.svg",
      desc: "vSphere Hypervisor, ESXi, & SDDC Orchestration",
      tag: "Virtualization",
      borderColor: "hover:border-[#66CCFF]/50",
      glowColor: "group-hover:shadow-[#66CCFF]/10",
    },
    {
      name: "Office 365",
      logo: "https://www.vectorlogo.zone/logos/office/office-icon.svg",
      desc: "Microsoft 365 Tenant Admin & Security Policy Sync",
      tag: "Office SaaS",
      borderColor: "hover:border-[#E63C11]/50",
      glowColor: "group-hover:shadow-[#E63C11]/10",
    },
    {
      name: "Google Cloud",
      logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      desc: "Compute Engine & Virtualized Linux Host Management",
      tag: "Google Cloud",
      borderColor: "hover:border-[#4285F4]/50",
      glowColor: "group-hover:shadow-[#4285F4]/10",
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
              <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">Server Management</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl mb-md">
              Server Management Services
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl">
              Optimize your computing architecture with professional bare-metal, virtualized, and cloud server provisioning, operating system maintenance, and active patching.
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
            Our Server Capabilities
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            Establish a resilient, high-speed host environment. We provision bare-metal systems, manage directory configurations, update packages, and virtualize workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center mb-xl">
         
          

          {/* Right Column: Capabilities Grid */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
              {capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  className="bg-white p-sm border border-outline-variant/50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`p-3 rounded-lg border transition-all duration-300 shrink-0 h-12 w-12 flex items-center justify-center mb-3 ${cap.colorClass}`}>
                      <span className="material-symbols-outlined text-[24px]">{cap.icon}</span>
                    </div>
                    <h3 className="font-bold text-[15px] text-on-surface mb-1 group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-[12px] text-on-surface-variant leading-relaxed">
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
              Supported Server Technologies
            </h2>
            <p className="font-body-lg text-body-md text-on-surface-variant">
              We configure, optimize, and support major server operating systems, cloud compute runtimes, hypervisors, and enterprise directories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-md">
            {serverBrands.map((brand, i) => (
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

      {/* Server Process / Lifecycle */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Maintenance Cycle
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            A structured method to audit compute performance, deploy operating system patches, and construct fail-safe backups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md relative">
          {/* Connector lines on large screen */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-outline-variant/50 -translate-y-1/2 -z-10" />

          {/* Phase 1 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">1</span>
            <span className="material-symbols-outlined text-[#673ab7] text-[40px] mb-sm mt-sm">query_stats</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Compute Auditing</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Audit server logs, inspect partitions, examine CPU load anomalies, and review memory configurations.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">2</span>
            <span className="material-symbols-outlined text-[#e65100] text-[40px] mb-sm mt-sm">system_update_alt</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">OS Patching & Hot-fixes</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Test upgrades in segregated staging servers before releasing kernel patches and libraries to production hosts.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">3</span>
            <span className="material-symbols-outlined text-primary text-[40px] mb-sm mt-sm">backup</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Fail-Safe Recovery Setup</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Write backup scripts, set up local database snapshots, and align secure remote replication pipelines.
            </p>
          </div>
        </div>
      </section>

    {/* Add slider here  */}
  
  <Slidebar ImgArray={ServerImg}/>
      
     {/* Add slider here  */}

      {/* Call to Action Section */}
      <section className="bg-primary text-on-primary py-xl px-gutter text-center relative overflow-hidden mb-20 max-w-6xl rounded-2xl mx-auto">
        {/* Abstract graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004080]/30 rounded-full blur-xl pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="font-headline-lg text-[32px] md:text-[40px] leading-tight mb-md">
            Ready to Optimize Your Server Infrastructure?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl mx-auto">
            Partner with our systems engineers to provision, configure, and secure your Windows, Linux, or virtualized cloud servers.
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

export default ServerManagementServices;