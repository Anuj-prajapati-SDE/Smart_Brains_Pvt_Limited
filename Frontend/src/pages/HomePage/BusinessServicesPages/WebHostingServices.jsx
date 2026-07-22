import React, { useState } from "react";
import { Link } from "react-router-dom";

function WebHostingServices() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  const capabilities = [
    // Column 1: Blue/Indigo (indigo-500/deep purple themed, from slide)
    {
      title: "Technical Support",
      desc: "Get 24/7 technical experts to audit configurations and resolve hosting tickets instantly.",
      icon: "support_agent",
      theme: "blue",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Server & Backup Management",
      desc: "Automate server administration, directory audits, and daily backup snapshot schedules.",
      icon: "dns",
      theme: "blue",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Cloud Computing",
      desc: "Provision virtualized private servers (VPS) and scale resources elastically.",
      icon: "cloud",
      theme: "blue",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Control Panels",
      desc: "Administer directories, email accounts, and applications using cPanel or Plesk panels.",
      icon: "settings",
      theme: "blue",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Remote Monitoring",
      desc: "Configure live uptime checks, traffic monitoring, and server performance counters.",
      icon: "query_stats",
      theme: "blue",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Content Upload / Publishing",
      desc: "Establish fast, secure deployments using SSH, FTP accounts, and direct Git repositories.",
      icon: "cloud_upload",
      theme: "blue",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    // Column 2: Orange (orange-500/deep orange themed, from slide)
    {
      title: "Email Server Management",
      desc: "Setup custom domain emails, verify MX record pools, and apply strict spam filtering.",
      icon: "mail",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Abuse Handling",
      desc: "Execute instant spam bans, investigate domain abuse reports, and isolate compromised scripts.",
      icon: "report",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Domain Names",
      desc: "Register new domains, administer nameserver configurations, and customize DNS zones.",
      icon: "language",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "MySQL Administration",
      desc: "Deploy and optimize database tables, adjust query parameters, and restore SQL backups.",
      icon: "storage",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "IIS Management",
      desc: "Configure Microsoft Internet Information Services (IIS) app pools, rewrite rules, and bindings.",
      icon: "settings_suggest",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "SQL Server Administration",
      desc: "Administer Microsoft SQL Server database schemas, partitions, and user access policies.",
      icon: "person",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    // Column 3: Amber (amber-gold themed, from slide)
    {
      title: "Server Migration",
      desc: "Transfer files, websites, and database tables from legacy providers with zero data loss.",
      icon: "swap_horiz",
      theme: "amber",
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-[#ff9900] group-hover:text-white border-amber-100",
    },
    {
      title: "SSL Installation",
      desc: "Install free Let's Encrypt certificates, enforce HTTPS redirects, and verify TLS rules.",
      icon: "lock",
      theme: "amber",
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-[#ff9900] group-hover:text-white border-amber-100",
    },
    {
      title: "Live Chat Support",
      desc: "Integrate live chat scripts and ticketing interfaces directly into your hosted pages.",
      icon: "chat",
      theme: "amber",
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-[#ff9900] group-hover:text-white border-amber-100",
    },
    {
      title: "Cloud Hosting Support",
      desc: "Support and configure modern VPS containers, block storage storage, and cluster setups.",
      icon: "cloud_done",
      theme: "amber",
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-[#ff9900] group-hover:text-white border-amber-100",
    },
    {
      title: "AWS & Azure Hosting",
      desc: "Establish public cloud host instances, set up autoscaling rules, and customize storage tiers.",
      icon: "hub",
      theme: "amber",
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-[#ff9900] group-hover:text-white border-amber-100",
    },
    {
      title: "24x7x365 Website Monitoring",
      desc: "Obtain ongoing logs of website response speeds, error metrics, and active traffic spikes.",
      icon: "monitoring",
      theme: "amber",
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-[#ff9900] group-hover:text-white border-amber-100",
    },
  ];

  const hostingBrands = [
    {
      name: "Microsoft IIS",
      logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
      desc: "ASP.NET applications, bindings, and active pools.",
      tag: "Web Server",
      borderColor: "hover:border-[#0078D7]/50",
      glowColor: "group-hover:shadow-[#0078D7]/10",
    },
    {
      name: "Apache HTTP Server",
      logo: "https://www.vectorlogo.zone/logos/apache/apache-icon.svg",
      desc: "Flexible, robust Linux hosting environments.",
      tag: "Web Server",
      borderColor: "hover:border-[#D22027]/50",
      glowColor: "group-hover:shadow-[#D22027]/10",
    },
    {
      name: "Plesk Panel",
      logo: "https://www.vectorlogo.zone/logos/plesk/plesk-icon.svg",
      desc: "WordPress tools, extensions, and site admin.",
      tag: "Control Panel",
      borderColor: "hover:border-[#0F1E2A]/50",
      glowColor: "group-hover:shadow-[#0F1E2A]/10",
    },
    {
      name: "Nginx",
      logo: "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg",
      desc: "Ultra-fast reverse proxies and static file caching.",
      tag: "Web Server",
      borderColor: "hover:border-[#009639]/50",
      glowColor: "group-hover:shadow-[#009639]/10",
    },
    {
      name: "cPanel",
      logo: "https://www.vectorlogo.zone/logos/cpanel/cpanel-icon.svg",
      desc: "DNS zones, FTP setups, and email file management.",
      tag: "Control Panel",
      borderColor: "hover:border-[#FF6C2C]/50",
      glowColor: "group-hover:shadow-[#FF6C2C]/10",
    },
    {
      name: "Webmin",
      logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg", // Fallback Webmin placeholder
      desc: "Web-based Unix systems and partition administration.",
      tag: "Sysadmin Panel",
      borderColor: "hover:border-[#003399]/50",
      glowColor: "group-hover:shadow-[#003399]/10",
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
              <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">Web Hosting</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl mb-md">
              Enterprise Web Hosting
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl">
              Host your websites, custom portals, and web applications on ultra-fast, SSD-powered server nodes with guaranteed 99.9% uptime SLAs.
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
            Our Web Hosting Capabilities
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            Establish a high-performance web cluster. We support leading control panels, configure email routing, restore database schemas, and secure edge domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center mb-xl">

          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
              {capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  className="bg-white p-sm border border-outline-variant/50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`p-3 rounded-lg border transition-all duration-300 shrink-0 h-12 w-12 flex items-center justify-center mb-3 ${cap.colorClass}`}>
                      <span className="material-symbols-outlined text-[24px]">{cap.icon}</span>
                    </div>
                    <h3 className="font-bold text-[14px] text-on-surface mb-1 group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">
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
              Supported Web Servers &amp; Control Panels
            </h2>
            <p className="font-body-lg text-body-md text-on-surface-variant">
              We deploy and manage industry-standard HTTP daemon engines, reverse proxies, and web-hosting control panels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-md">
            {hostingBrands.map((brand, i) => (
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
                  <h4 className="font-bold text-[15px] text-on-surface mb-1 group-hover:text-primary transition-colors">
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

      {/* Hosting Process / Timeline */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Hosting Advantages
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            How we accelerate load times, secure edge domain connections, and autoscale partition resources dynamically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md relative">
          {/* Connector lines on large screen */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-outline-variant/50 -translate-y-1/2 -z-10" />

          {/* Phase 1 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">1</span>
            <span className="material-symbols-outlined text-[#673ab7] text-[40px] mb-sm mt-sm">speed</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Speed Optimization</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Deploy NGINX and Redis cache layers to serve static files instantly, achieving sub-100ms load times.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">2</span>
            <span className="material-symbols-outlined text-[#e65100] text-[40px] mb-sm mt-sm">lock</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Domain Security</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Enable DNSSEC, configure WHOIS privacy protection, and establish MX configurations for secure mail routing.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">3</span>
            <span className="material-symbols-outlined text-primary text-[40px] mb-sm mt-sm">trending_up</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Auto Scaling Resources</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Dynamically adjust RAM limits and compute capacities to offset sudden traffic surges during product launches.
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
            Ready to Deploy Your Enterprise Web Hosting?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl mx-auto">
            Get in touch with our cloud hosting engineers to provision, configure, and secure your high-availability web cluster.
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

export default WebHostingServices;