import React, { useState } from "react";
import { Link } from "react-router-dom";

import client_1 from '../../../assets/images/Monitoring/a.jpg'
import client_2 from '../../../assets/images/Monitoring/b.jpg'
import client_3 from '../../../assets/images/Monitoring/c.jpg'
import client_4 from '../../../assets/images/Monitoring/d.jpg'
import client_5 from '../../../assets/images/Monitoring/e.jpg'
import client_6 from '../../../assets/images/Monitoring/f.jpg'
import client_7 from '../../../assets/images/Monitoring/g.jpg'
import client_8 from '../../../assets/images/Monitoring/h.jpg'
import client_9 from '../../../assets/images/Monitoring/i.jpg'
import client_10 from '../../../assets/images/Monitoring/j.jpg'
import client_11 from '../../../assets/images/Monitoring/k.jpg'
import client_12 from '../../../assets/images/Monitoring/l.jpg'
import Slidebar from "../../../components/ScrollSlider";


  const MonitoringImg = [
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
                  { name: "GIT", img: client_11 },
                  { name: "GIT", img: client_12 },
                ]

function MonitoringService() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  const capabilities = [
    // Purple Column (indigo-500/deep purple themed, from slide)
    {
      title: "Server Infrastructure Monitoring",
      desc: "Gain deep visibility into CPU, memory, disk I/O, and storage health across all physical and virtual hosts.",
      icon: "dns",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Network Infrastructure Monitoring",
      desc: "Track device bandwidth, packet drops, latency, and firewall gateways to ensure seamless connectivity.",
      icon: "schema",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Application Service Monitoring",
      desc: "Audit application speeds, API endpoint response times, and database transaction queries in real-time.",
      icon: "terminal",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    // Orange Column (orange-500/deep orange themed, from slide)
    {
      title: "Log Monitoring",
      desc: "Collect and dissect application stdout, server errors, and system audit logs in centralized databases.",
      icon: "assignment",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Alerting & Vendor Coordination",
      desc: "Configure alerts via SMS, Slack, or pager services with automated escalation to vendor support.",
      icon: "notifications_active",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Antivirus Console Monitoring",
      desc: "Review active security agents, threat quarantine lists, and malware updates from a unified console.",
      icon: "gpp_good",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
  ];

  const monitoringTools = [
    {
      name: "SolarWinds",
      logo: "https://www.vectorlogo.zone/logos/solarwinds/solarwinds-icon.svg",
      desc: "Enterprise Network & System Performance Monitoring",
      tag: "Infrastructure",
      borderColor: "hover:border-[#F25A22]/50",
      glowColor: "group-hover:shadow-[#F25A22]/10",
    },
    {
      name: "N-able",
      logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg", // Fallback placeholder
      desc: "Cloud-based RMM and IT Observability",
      tag: "RMM",
      borderColor: "hover:border-[#0F62AC]/50",
      glowColor: "group-hover:shadow-[#0F62AC]/10",
    },
    {
      name: "LabTech",
      logo: "https://www.vectorlogo.zone/logos/connectwise/connectwise-icon.svg", // ConnectWise Automate
      desc: "IT Automation & Remote Monitoring Management",
      tag: "Automation",
      borderColor: "hover:border-[#F05A28]/50",
      glowColor: "group-hover:shadow-[#F05A28]/10",
    },
    {
      name: "Zenoss",
      logo: "https://www.vectorlogo.zone/logos/zenoss/zenoss-icon.svg",
      desc: "Hybrid IT Monitoring & AIOps Platform",
      tag: "AIOps",
      borderColor: "hover:border-[#0081C6]/50",
      glowColor: "group-hover:shadow-[#0081C6]/10",
    },
    {
      name: "System Center SCOM",
      logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
      desc: "Enterprise Infrastructure & Hyper-V Auditing",
      tag: "On-Prem",
      borderColor: "hover:border-[#00A4EF]/50",
      glowColor: "group-hover:shadow-[#00A4EF]/10",
    },
    {
      name: "Kaseya",
      logo: "https://www.vectorlogo.zone/logos/kaseya/kaseya-icon.svg",
      desc: "IT Management & Endpoint Observability",
      tag: "Endpoint RMM",
      borderColor: "hover:border-[#0070C0]/50",
      glowColor: "group-hover:shadow-[#0070C0]/10",
    },
    {
      name: "Nagios",
      logo: "https://www.vectorlogo.zone/logos/nagios/nagios-icon.svg",
      desc: "Open-source Server & Protocol Monitor",
      tag: "Host Monitor",
      borderColor: "hover:border-[#4B9C3F]/50",
      glowColor: "group-hover:shadow-[#4B9C3F]/10",
    },
    {
      name: "Google Monitoring",
      logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      desc: "GCP Native Observability & Metrics Logging",
      tag: "GCP Cloud",
      borderColor: "hover:border-[#4285F4]/50",
      glowColor: "group-hover:shadow-[#4285F4]/10",
    },
    {
      name: "Prometheus",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
      desc: "Container-native Time-series Metric Scraper",
      tag: "Cloud Native",
      borderColor: "hover:border-[#E6522C]/50",
      glowColor: "group-hover:shadow-[#E6522C]/10",
    },
    {
      name: "Amazon CloudWatch",
      logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      desc: "AWS Native Observability, Metrics, and Alerts",
      tag: "AWS Cloud",
      borderColor: "hover:border-[#FF9900]/50",
      glowColor: "group-hover:shadow-[#FF9900]/10",
    },
    {
      name: "Azure Monitor",
      logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
      desc: "Microsoft Cloud Telemetry & App Insights",
      tag: "Azure Cloud",
      borderColor: "hover:border-[#0089D6]/50",
      glowColor: "group-hover:shadow-[#0089D6]/10",
    },
    {
      name: "Grafana",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      desc: "Next-gen Metrics Visualization & Alerts Dashboards",
      tag: "Visualization",
      borderColor: "hover:border-[#F47A20]/50",
      glowColor: "group-hover:shadow-[#F47A20]/10",
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
              <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">Monitoring Service</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl mb-md">
              24/7 Monitoring Services
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl">
              Gain full observability into your applications, server performance, and networking pipelines with customizable metrics dashboards and real-time alert triggers.
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
            Our Observability &amp; Monitoring Suite
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            Achieve full operational transparency. We deploy, manage, and configure unified telemetry systems to capture anomalies, track system health, and secure endpoints.
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
              Observability Tool Integration
            </h2>
            <p className="font-body-lg text-body-md text-on-surface-variant">
              We integrate and configure industry-leading RMM, AIOps, time-series databases, and dashboard visualization tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
            {monitoringTools.map((tool, i) => (
              <div
                key={i}
                className={`bg-white p-sm border border-outline-variant/40 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${tool.borderColor}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    {/* Logo wrapper */}
                    <div className={`w-12 h-12 bg-surface-container rounded-lg p-2 flex items-center justify-center border border-outline-variant/20 shadow-sm shrink-0 transition-shadow duration-300 group-hover:shadow ${tool.glowColor}`}>
                      {imgErrors[tool.name] ? (
                        <div className="w-full h-full rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                          {tool.name[0]}
                        </div>
                      ) : (
                        <img
                          src={tool.logo}
                          alt={`${tool.name} Logo`}
                          className="w-full h-full object-contain"
                          onError={() => handleImgError(tool.name)}
                        />
                      )}
                    </div>
                    {/* Tag */}
                    <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded border border-outline-variant/25">
                      {tool.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-[16px] text-on-surface mb-1 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Process / Lifecycle */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Observability Lifecycle
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            A continuous deployment workflow to establish server agent collectors, customize dashboards, and configure dynamic alert filters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md relative">
          {/* Connector lines on large screen */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-outline-variant/50 -translate-y-1/2 -z-10" />

          {/* Phase 1 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">1</span>
            <span className="material-symbols-outlined text-[#673ab7] text-[40px] mb-sm mt-sm">install_desktop</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Agent Deployment</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Install lightweight metrics and logs logging agents (e.g. Prometheus, Datadog) on virtual machines and cluster nodes.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">2</span>
            <span className="material-symbols-outlined text-[#e65100] text-[40px] mb-sm mt-sm">dashboard_customize</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Dashboard Design</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Build custom Grafana visual dashboards mapping system latency, network flow throughput, database load, and transaction volumes.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">3</span>
            <span className="material-symbols-outlined text-primary text-[40px] mb-sm mt-sm">notifications_active</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Alert Configuration</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tune anomaly detection thresholds, schedule on-call pages, verify routing configurations, and eliminate alerting fatigue.
            </p>
          </div>
        </div>
      </section>

    {/* Add slider here  */}
  
  <Slidebar ImgArray={MonitoringImg}/>
      
     {/* Add slider here  */}

      {/* Call to Action Section */}
      <section className="bg-primary text-on-primary py-xl px-gutter text-center relative overflow-hidden mb-20 max-w-6xl rounded-2xl mx-auto">
        {/* Abstract graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004080]/30 rounded-full blur-xl pointer-events-none" />

        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="font-headline-lg text-[32px] md:text-[40px] leading-tight mb-md">
            Ready to Establish 24/7 System Observability?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl mx-auto">
            Consult with our observability engineers to deploy agent collectors, create dashboards, and establish robust on-call paging metrics.
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

export default MonitoringService;