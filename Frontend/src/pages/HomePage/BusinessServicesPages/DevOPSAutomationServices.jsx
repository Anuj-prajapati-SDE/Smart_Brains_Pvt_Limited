import React, { useState } from "react";
import { Link } from "react-router-dom";

import client_1 from '../../../assets/images/DevOps/a.jpg'
import client_2 from '../../../assets/images/DevOps/b.jpg'
import client_3 from '../../../assets/images/DevOps/c.jpg'
import client_4 from '../../../assets/images/DevOps/d.jpg'
import client_5 from '../../../assets/images/DevOps/e.jpg'
import client_6 from '../../../assets/images/DevOps/f.jpg'
import client_7 from '../../../assets/images/DevOps/g.jpg'
import client_8 from '../../../assets/images/DevOps/h.jpg'
import client_9 from '../../../assets/images/DevOps/i.jpg'
import Slidebar from "../../../components/ScrollSlider";

  const DevOpsImg = [
                  { name: "FLYWAY", img: client_1 },
                  { name: "JENKINS", img: client_2 },
                  { name: "SPLUNK ON-CALL", img: client_3 },
                  { name: "DOCKER", img: client_4 },
                  { name: "RABBITMQ", img: client_5 },
                  { name: "PUPPET", img: client_6 },
                  { name: "ATLASSIAN CLOUD", img: client_7 },
                  { name: "KUBERNETES", img: client_8 },
                  { name: "GIT", img: client_9 },
                ]






function DevOpsAutomationServices() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  const capabilities = [
    // Purple Column (indigo-500/deep purple themed)
    {
      title: "Build Automation",
      desc: "Automatically compile, build, and package code, reducing manual errors and pipeline drag.",
      icon: "construction",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Continuous Integration",
      desc: "Merge code changes continuously with automated build, test, and static verification gates.",
      icon: "sync_alt",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Continuous Delivery & Deployment",
      desc: "Deploy release candidates instantly and securely to staging and production clusters.",
      icon: "published_with_changes",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    {
      title: "Configuration Management",
      desc: "Maintain environment consistency and prevent configuration drift across all clusters.",
      icon: "settings_suggest",
      theme: "purple",
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-[#673ab7] group-hover:text-white border-indigo-100",
    },
    // Orange Column (orange-500/deep orange themed)
    {
      title: "Microservices",
      desc: "Deconstruct complex applications into lightweight, modular, and independent services.",
      icon: "hub",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Orchestration",
      desc: "Automate deployment, scaling, networking, and lifecycle tasks of containerized apps.",
      icon: "layers",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Infrastructure as Code",
      desc: "Provision and manage networks, servers, and storage programmatically using files.",
      icon: "code",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
    {
      title: "Monitoring",
      desc: "Obtain complete visibility with live logging, tracing, metrics collection, and alerting.",
      icon: "monitoring",
      theme: "orange",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-[#e65100] group-hover:text-white border-orange-100",
    },
  ];

  const devopsTools = [
    {
      name: "Jenkins",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      desc: "Opensource Automation Tool for CI/CD",
      tag: "CI/CD & Build",
      borderColor: "hover:border-[#D24939]/50",
      glowColor: "group-hover:shadow-[#D24939]/10",
    },
    {
      name: "Flyway",
      logo: "https://www.vectorlogo.zone/logos/flywaydb/flywaydb-icon.svg",
      desc: "Opensource Database Schema Migration Tool",
      tag: "Data Migration",
      borderColor: "hover:border-[#CC0000]/50",
      glowColor: "group-hover:shadow-[#CC0000]/10",
    },
    {
      name: "Splunk On-Call",
      logo: "https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg",
      desc: "DevOps Incident Management & Alerting Platform",
      tag: "Incident Response",
      borderColor: "hover:border-[#F15822]/50",
      glowColor: "group-hover:shadow-[#F15822]/10",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      desc: "Container Engine for Packaging Applications",
      tag: "Containerization",
      borderColor: "hover:border-[#2496ED]/50",
      glowColor: "group-hover:shadow-[#2496ED]/10",
    },
    {
      name: "RabbitMQ",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
      desc: "Robust Open-source Messaging Broker",
      tag: "Messaging",
      borderColor: "hover:border-[#FF6600]/50",
      glowColor: "group-hover:shadow-[#FF6600]/10",
    },
    {
      name: "Puppet",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppet/puppet-original.svg",
      desc: "Automated Software Configuration Tool",
      tag: "Configuration",
      borderColor: "hover:border-[#FFAE1A]/50",
      glowColor: "group-hover:shadow-[#FFAE1A]/10",
    },
    {
      name: "Atlassian Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atlassian/atlassian-original.svg",
      desc: "Team Collaboration and Project Suite",
      tag: "Collaboration",
      borderColor: "hover:border-[#0052CC]/50",
      glowColor: "group-hover:shadow-[#0052CC]/10",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      desc: "Container Orchestration and Management System",
      tag: "Orchestration",
      borderColor: "hover:border-[#326CE5]/50",
      glowColor: "group-hover:shadow-[#326CE5]/10",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      desc: "Distributed Version Control System",
      tag: "VCS",
      borderColor: "hover:border-[#F05032]/50",
      glowColor: "group-hover:shadow-[#F05032]/10",
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
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 z-10">
            <nav className="text-label-sm uppercase tracking-widest opacity-80 mb-sm">
              <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">DevOps &amp; Automation</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl mb-md">
              DevOps &amp; Automation Services
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl">
              Accelerate your product release cycle and streamline infrastructure provisioning with advanced CI/CD pipelines and IaC integrations.
            </p>
            <div className="flex gap-md">
              <Link to="/contact-us" className="bg-white text-primary px-md py-sm font-bold uppercase text-label-sm tracking-wider rounded-full shadow-md hover:bg-slate-100 transition-colors">
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
            Our DevOps capabilities
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            Establish a robust, fast, and secure delivery chain. We design and integrate customized pipelines to automate development, deployment, and monitoring.
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

      {/* Toolchain / Ecosystem Section */}
      <section className="bg-surface-container-low border-y border-outline-variant/30 py-xl">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
              Our DevOps Tech Stack
            </h2>
            <p className="font-body-lg text-body-md text-on-surface-variant">
              We leverage and integrate the industry's most reliable and powerful tools to automate, secure, and monitor your workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {devopsTools.map((tool, i) => (
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
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-surface-container text-on-surface-variant rounded-full border border-outline-variant/30">
                      {tool.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-[18px] text-on-surface mb-1 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Implementation Lifecycle */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Implementation Lifecycle
          </h2>
          <p className="font-body-lg text-body-md text-on-surface-variant">
            A structured, continuous process designed to migrate workloads, script reliable pipelines, and continuously audit system metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md relative">
          {/* Connector lines on large screen */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-outline-variant/50 -translate-y-1/2 -z-10" />

          {/* Phase 1 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">1</span>
            <span className="material-symbols-outlined text-[#673ab7] text-[40px] mb-sm mt-sm">architecture</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Configuration Blueprint</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Design the automation workflow, map application dependencies, establish security gates, and define auto-scaling guidelines.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">2</span>
            <span className="material-symbols-outlined text-[#e65100] text-[40px] mb-sm mt-sm">code</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Pipeline Scripting</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Write environment deployment code (IaC), integrate automated quality checks, write test suites, and seal environment secret key vaults.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-lg border border-outline-variant rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center relative z-10 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">3</span>
            <span className="material-symbols-outlined text-primary text-[40px] mb-sm mt-sm">speed</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Continuous Optimization</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Audit build execution speeds, optimize cloud resource usage, track incident response times, and verify automated rollback paths.
            </p>
          </div>
        </div>
      </section>


    {/* Add slider here  */}
  
  <Slidebar ImgArray={DevOpsImg}/>
      
     {/* Add slider here  */}


      {/* Call to Action Section */}
      <section className="bg-primary text-on-primary py-xl px-gutter text-center relative overflow-hidden mb-20 max-w-6xl rounded-2xl mx-auto">
        {/* Abstract graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004080]/30 rounded-full blur-xl pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="font-headline-lg text-[32px] md:text-[40px] leading-tight mb-md">
            Ready to Automate Your Software Delivery Lifecycle?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl mx-auto">
            Get in touch with our expert DevOps consultants to design, script, and implement a custom automation flow tailored to your engineering workspace.
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

export default DevOpsAutomationServices;