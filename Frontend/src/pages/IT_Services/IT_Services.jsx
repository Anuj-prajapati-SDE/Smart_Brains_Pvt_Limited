import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanySlider from "../../components/CompanySlider";

function IT_Services() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  const stats = [
    { value: "99.9%", label: "Uptime SLA Guarantee", icon: "verified" },
    { value: "24/7/365", label: "Continuous Monitoring", icon: "update" },
    { value: "100+", label: "Cloud Migrations Completed", icon: "cloud_done" },
    { value: "Zero-Trust", label: "Security Compliance Auditing", icon: "gpp_good" }
  ];

  const services = [
     {
      title: "System Integration",
      desc: "Unify legacy software, databases, networks, and cloud platforms into one cohesive system.",
      icon: "hub",
      path: "/system-integration",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
      bullets: [
        "DataCenter architectural design",
        "API & database bridges",
        "NOC & SOC command centers"
      ]
    },
    {
      title: "Managed Hybrid Cloud",
      desc: "Integrate private, public, and on-premises environments into a single, cohesive infrastructure.",
      icon: "cloud",
      path: "/managed-hybrid-cloud",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
      bullets: [
        "Cloud adoption & migrations",
        "Multi-cloud architectures",
        "Cost optimization & resizing"
      ]
    },
     {
      title: "Network & Security",
      desc: "Secure your digital assets against threats with edge firewalls and vulnerability scans.",
      icon: "vpn_lock",
      path: "/network-and-security",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
      bullets: [
        "Stateful firewall management",
        "Penetration testing & reviews",
        "VPN & proxy architectures"
      ]
    },
    {
      title: "DevOps & Automation",
      desc: "Accelerate product release cycles and provision infrastructure with automated pipelines.",
      icon: "published_with_changes",
      path: "/devops-and-automation",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
      bullets: [
        "CI/CD pipeline scripting",
        "Infrastructure as Code (IaC)",
        "Microservices & orchestration"
      ]
    },
    {
      title: "Web Hosting Services",
      desc: "Host websites and portals on fast, SSD-powered server nodes with guaranteed uptime.",
      icon: "language",
      path: "/web-hosting",
      theme: "amber",
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-[#ff9900] group-hover:text-white border-amber-100",
      bullets: [
        "NGINX / IIS configurations",
        "cPanel & Plesk panels",
        "SSL certificate installations"
      ]
    },
     {
      title: "Server Management",
      desc: "Provision, configure, and patch bare-metal systems, VMs, and directory clusters.",
      icon: "dns",
      path: "/server-management",
      theme: "black",
      colorClass: "bg-slate-100 text-slate-800 group-hover:bg-slate-950 group-hover:text-white border-slate-200",
      bullets: [
        "Active Directory & IAM controls",
        "Database cluster tuning",
        "Regular OS patch deployments"
      ]
    },
    {
      title: "IT Help Desk",
      desc: "Ensure user productivity with multi-tier ticketing queues and remote resolution support.",
      icon: "support_agent",
      path: "/help-desk",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
      bullets: [
        "End-user desktop debugging",
        "Antivirus & compliance scans",
        "SLA-driven ticket resolution"
      ]
    },
    {
      title: "24/7 System Monitoring",
      desc: "Gain deep observability with real-time log analysis and custom alerting pipelines.",
      icon: "monitoring",
      path: "/monitoring",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
      bullets: [
        "Server & VM health logging",
        "Grafana dashboards & metrics",
        "Escalations & paging rules"
      ]
    }
  ];

  const partners = [
    {
      name: "Amazon Web Services",
      logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      tag: "Cloud Services"
    },
    {
      name: "Microsoft Azure",
      logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
      tag: "Enterprise Cloud"
    },
    {
      name: "Google Cloud Platform",
      logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      tag: "Analytics & VM"
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      tag: "Orchestration"
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      tag: "Containerization"
    },
    {
      name: "Jenkins",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      tag: "CI/CD & Automation"
    },
    {
      name: "Cisco Systems",
      logo: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg",
      tag: "Networking Hardware"
    },
    {
      name: "Palo Alto Networks",
      logo: "https://www.vectorlogo.zone/logos/paloaltonetworks/paloaltonetworks-icon.svg",
      tag: "Next-Gen Firewall"
    }
  ];

  const steps = [
    {
      num: "1",
      title: "Assess & Consult",
      desc: "Conduct detailed audits of current networks, code setups, security protocols, and software lifecycles.",
      icon: "content_paste_search",
      color: "text-[#673ab7]"
    },
    {
      num: "2",
      title: "Design Blueprints",
      desc: "Architect isolated subnets, design deployment automation paths, and construct Tier-rated datacenter blueprints.",
      icon: "architecture",
      color: "text-[#e65100]"
    },
    {
      num: "3",
      title: "Implement & Migrate",
      desc: "Configure core hardware switches, execute cloud migrations, integrate APIs, and deploy CI/CD workflows.",
      icon: "settings_input_component",
      color: "text-primary"
    },
    {
      num: "4",
      title: "Manage & Optimize",
      desc: "Continuous 24/7/365 monitoring, SLA helpdesk ticketing, security incident logging, and cost audits.",
      icon: "fact_check",
      color: "text-[#cc1a1a]"
    }
  ];

  return (
    <main className="mt-20 min-h-screen bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary-container to-[#004080] text-on-primary py-xl px-gutter overflow-hidden">
        {/* Dynamic Background Elements */}
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
          <div className="lg:col-span-8">
            <nav className="text-label-sm uppercase tracking-widest opacity-80 mb-sm">
              <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">IT Services</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl mb-md">
              Enterprise IT Services
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-2xl">
              Modernize your digital operations. We deliver end-to-end solutions combining robust hybrid cloud infrastructures, automated software release cycles, high-grade network security, and 24/7 technical help desks.
            </p>
            <div className="flex flex-wrap gap-md">
              <a href="#services-grid" className="bg-white text-primary px-md py-sm font-bold uppercase text-label-sm tracking-wider rounded-full shadow-md hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                Explore Services
              </a>
              <Link to="/contact-us" className="bg-transparent border border-white text-white px-md py-sm font-bold uppercase text-label-sm tracking-wider rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Consult Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white border-b border-outline-variant/30 py-md px-gutter">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-md">
          {stats.map((stat, i) => (
            <div key={i} className="flex gap-sm items-center p-sm border-r border-outline-variant/35 last:border-0">
              <span className="material-symbols-outlined text-primary text-[36px] shrink-0">{stat.icon}</span>
              <div>
                <div className="font-headline-md text-primary font-black leading-tight">{stat.value}</div>
                <div className="text-[12px] text-on-surface-variant font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Core Service Offerings
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            Connect systems, accelerate deployments, and secure environments. Click on any offering to view technical specifications, supported stacks, and service SLAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-md border border-outline-variant/50 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className={`p-3 rounded-xl border transition-all duration-300 shrink-0 h-12 w-12 flex items-center justify-center mb-md ${service.colorClass}`}>
                  <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                </div>

                {/* Title & Desc */}
                <h3 className="font-bold text-[18px] text-on-surface mb-xs group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-[13px] text-on-surface-variant leading-relaxed mb-md">
                  {service.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 border-t border-outline-variant/20 pt-sm mb-md">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-[12px] text-on-surface-variant leading-normal">
                      <span className="material-symbols-outlined text-primary text-[15px] shrink-0 mt-0.5">check_circle</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <Link
                to={service.path}
                className="w-full text-center py-2 bg-surface-container hover:bg-primary hover:text-white rounded-lg text-label-sm font-bold uppercase tracking-wider text-primary transition-all duration-300 flex items-center justify-center gap-xs mt-sm"
              >
                <span>Explore More</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Ecosystem Section */}
      <section className="bg-surface-container-low border-y border-outline-variant/35 py-xl">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
              Our Integrations &amp; Technology Stack
            </h2>
            <p className="font-body-lg text-body-md text-on-surface-variant">
              We coordinate and manage integrations with leading compute, storage, networking, and CI/CD tools to deliver premium infrastructure stability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-md">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-white p-sm border border-outline-variant/40 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-sm group"
              >
                {/* Logo container */}
                <div className="w-12 h-12 bg-surface-container rounded-lg p-2 flex items-center justify-center border border-outline-variant/20 shadow-sm shrink-0 transition-shadow duration-300 group-hover:shadow">
                  {imgErrors[partner.name] ? (
                    <div className="w-full h-full rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {partner.name[0]}
                    </div>
                  ) : (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                      onError={() => handleImgError(partner.name)}
                    />
                  )}
                </div>

                <div>
                  <h4 className="font-bold text-[14px] text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {partner.name}
                  </h4>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                    {partner.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Workflow Stepper Section */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Implementation Process
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            From the initial consultation phase to ongoing server management, we guide your digital operations lifecycle systematically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-md relative">
          {/* Timeline Connector Line */}
          <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-0.5 border-t-2 border-dashed border-outline-variant/40 -translate-y-1/2 -z-10" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group"
            >
              {/* Stepper badge */}
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">
                {step.num}
              </span>

              {/* Icon */}
              <span className={`material-symbols-outlined text-[40px] mb-sm mt-sm ${step.color} group-hover:scale-110 transition-transform`}>
                {step.icon}
              </span>

              {/* Title & Desc */}
              <h3 className="font-headline-md text-headline-md mb-xs text-on-background font-bold">
                {step.title}
              </h3>
              <p className="text-[13px] text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CompanySlider/>
      <section className="bg-primary text-on-primary py-xl px-gutter text-center relative overflow-hidden mb-20 max-w-6xl rounded-2xl mx-auto">
        {/* Decorative graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004080]/30 rounded-full blur-xl pointer-events-none" />

        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="font-headline-lg text-[32px] md:text-[40px] leading-tight mb-md">
            Ready to Modernize Your IT Operations?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl mx-auto">
            Partner with our expert engineers to design, build, and coordinate a resilient infrastructure system tailored for your scaling workspace.
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

export default IT_Services;