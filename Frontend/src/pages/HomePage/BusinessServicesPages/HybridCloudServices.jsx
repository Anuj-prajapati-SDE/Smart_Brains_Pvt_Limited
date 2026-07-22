import React from "react";
import { Link } from "react-router-dom";

function HybridCloudServices() {
  return (
    <main className="mt-20 min-h-screen bg-background">
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
                <Link to="/" className="hover:underline">Home</Link> &gt; <span className="opacity-60">Hybrid Cloud Services</span>
              </nav>
              <h1 className="font-headline-xl text-headline-xl mb-md">
                Managed Hybrid Cloud Services
              </h1>
              <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-xl">
                Integrate private, public, and on-premises environments into a single, cohesive infrastructure. Optimize IT costs, enhance security compliance, and scale resources dynamically.
              </p>
              <div className="flex gap-md">
                <Link to="/contact-us" className="bg-white text-primary px-md py-sm font-bold uppercase text-label-sm tracking-wider rounded-full shadow-md hover:bg-slate-100 transition-colors">
                  Consult Our Experts
                </Link>
              </div>
            </div>
          </div>
        </section>
      {/* Visual Infographic Section */}
      <section className="relative w-full overflow-hidden bg-background py-16 lg:py-24">
        
        {/* Decorative background lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
          <svg className="absolute w-[800px] h-[400px] -top-20 right-10 text-primary-container/20" viewBox="0 0 800 400" fill="none">
            <path d="M0 200 C 200 100 400 300 800 150" stroke="currentColor" strokeWidth="2" />
            <path d="M0 220 C 200 120 400 320 800 170" stroke="currentColor" strokeWidth="2" />
            <path d="M0 240 C 200 140 400 340 800 190" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="absolute w-[800px] h-[400px] -bottom-20 -left-10 text-primary-container/20" viewBox="0 0 800 400" fill="none">
            <path d="M0 150 C 400 300 600 100 800 200" stroke="currentColor" strokeWidth="2" />
            <path d="M0 170 C 400 320 600 120 800 220" stroke="currentColor" strokeWidth="2" />
            <path d="M0 190 C 400 340 600 140 800 240" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Title */}
            <div className="lg:col-span-4 pl-4 lg:pl-10">
              <h1 className="font-extrabold text-[48px] lg:text-[72px] leading-[1.1] text-primary">
                <span className="block">Hybrid</span>
                <span className="block">Cloud</span>
                <span className="block">Services</span>
              </h1>
            </div>

            {/* Right Infographic */}
            <div className="lg:col-span-8 relative min-h-[600px] flex items-center justify-center">
              {/* Central Core */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[50%]  border-4 border-surface shadow-xl z-20 overflow-hidden bg-surface-container flex items-center justify-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-80 rounded-[50%]" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
                ></div>
                <div className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary border-4 border-surface shadow-lg z-30 animate-pulse">
                   <span className="material-symbols-outlined text-4xl">cloud</span>
                </div>
              </div>

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" style={{ top: 0, left: 0 }}>
                {/* Left side lines */}
                <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="currentColor" className="text-primary/50" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20%" y1="45%" x2="50%" y2="50%" stroke="currentColor" className="text-primary/50" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="25%" y1="70%" x2="50%" y2="50%" stroke="currentColor" className="text-primary/50" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="30%" y1="90%" x2="50%" y2="50%" stroke="currentColor" className="text-primary/50" strokeWidth="1" strokeDasharray="4 4" />

                {/* Right side lines */}
                <line x1="75%" y1="15%" x2="50%" y2="50%" stroke="currentColor" className="text-primary/50" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80%" y1="35%" x2="50%" y2="50%" stroke="currentColor" className="text-primary/50" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80%" y1="65%" x2="50%" y2="50%" stroke="currentColor" className="text-primary/50" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="75%" y1="85%" x2="50%" y2="50%" stroke="currentColor" className="text-primary/50" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Service Items (Left) */}
              <Link to="/monitoring" className="absolute top-[10%] left-[5%] md:left-[10%] flex items-center z-10 bg-surface/90 p-1 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="border border-dashed border-primary px-3 py-1 text-primary font-bold text-sm bg-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">Monitoring Services</div>
              </Link>
              <div className="absolute top-[20%] left-[35%] w-10 h-10 bg-primary rounded-full text-on-primary shadow-md z-10 hidden md:flex items-center justify-center">
                 <span className="material-symbols-outlined text-[20px]">search</span>
              </div>

              <Link to="/system-integration" className="absolute top-[35%] left-[2%] md:left-[5%] flex items-center z-10 bg-surface/90 p-1 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="border border-dashed border-primary px-3 py-1 text-primary font-bold text-sm bg-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 text-center w-36">System Integration Services</div>
              </Link>
              <div className="absolute top-[45%] left-[28%] w-10 h-10 bg-primary rounded-full text-on-primary shadow-md z-10 hidden md:flex items-center justify-center">
                 <span className="material-symbols-outlined text-[20px]">settings_suggest</span>
              </div>

              <Link to="/devops-and-automation" className="absolute top-[60%] left-[5%] md:left-[10%] flex items-center z-10 bg-surface/90 p-1 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="border border-dashed border-primary px-3 py-1 text-primary font-bold text-sm bg-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">DevOps & Automation</div>
              </Link>
              <div className="absolute top-[65%] left-[32%] w-10 h-10 bg-primary rounded-full text-on-primary shadow-md z-10 hidden md:flex items-center justify-center">
                 <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
              </div>

              <Link to="/devops-and-automation" className="absolute top-[82%] left-[10%] md:left-[15%] flex items-center z-10 bg-surface/90 p-1 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="border border-dashed border-primary px-3 py-1 text-primary font-bold text-sm bg-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 text-center w-48">DevOps Consulting & Support</div>
              </Link>
              <div className="absolute top-[80%] left-[45%] w-10 h-10 bg-primary rounded-full text-on-primary shadow-md z-10 hidden md:flex items-center justify-center">
                 <span className="material-symbols-outlined text-[20px]">group_work</span>
              </div>

              {/* Service Items (Right) */}
              <Link to="/help-desk" className="absolute top-[5%] right-[5%] md:right-[15%] flex items-center z-10 bg-surface/90 p-1 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="border border-dashed border-primary px-3 py-1 text-primary font-bold text-sm bg-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">Help Desk Services</div>
              </Link>
              <div className="absolute top-[15%] right-[38%] w-10 h-10 bg-primary rounded-full text-on-primary shadow-md z-10 hidden md:flex items-center justify-center">
                 <span className="material-symbols-outlined text-[20px]">desktop_windows</span>
              </div>

              <Link to="/network-and-security" className="absolute top-[28%] right-[2%] md:right-[5%] flex items-center z-10 bg-surface/90 p-1 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="border border-dashed border-primary px-3 py-1 text-primary font-bold text-sm bg-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 text-center w-44">Network & Security Services</div>
              </Link>
              <div className="absolute top-[35%] right-[28%] w-10 h-10 bg-primary rounded-full text-on-primary shadow-md z-10 hidden md:flex items-center justify-center">
                 <span className="material-symbols-outlined text-[20px]">lan</span>
              </div>

              <Link to="/web-hosting" className="absolute top-[52%] right-[5%] md:right-[10%] flex items-center z-10 bg-surface/90 p-1 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="border border-dashed border-primary px-3 py-1 text-primary font-bold text-sm bg-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">Web Hosting Services</div>
              </Link>
              <div className="absolute top-[52%] right-[25%] w-10 h-10 bg-primary rounded-full text-on-primary shadow-md z-10 hidden md:flex items-center justify-center">
                 <span className="material-symbols-outlined text-[20px]">cloud_queue</span>
              </div>

              <Link to="/server-management" className="absolute top-[75%] right-[2%] md:right-[5%] flex items-center z-10 bg-surface/90 p-1 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="border border-dashed border-primary px-3 py-1 text-primary font-bold text-sm bg-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 text-center w-44">Server Management Services</div>
              </Link>
              <div className="absolute top-[70%] right-[30%] w-10 h-10 bg-primary rounded-full text-on-primary shadow-md z-10 hidden md:flex items-center justify-center">
                 <span className="material-symbols-outlined text-[20px]">dns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner
        <div className="absolute bottom-0 w-full bg-gradient-to-r from-primary via-primary-container to-[#004080] px-8 py-4 flex items-center justify-between shadow-inner">
          <h2 className="text-on-primary font-medium text-xl md:text-3xl tracking-wide">Managed Hybrid Cloud Services</h2>
        </div> */}
      </section>

      {/* Capabilities Section */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-lg text-center">
          How Can Managed Hybrid Cloud Services Help Your Business?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
          {/* Card 1: Cloud Adoption & Migration */}
          <div className="bg-white p-lg border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-[36px] mb-sm">cloud_upload</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Cloud Adoption & Migration</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Strategize, assess, and execute seamless workload transfers from legacy systems to a flexible cloud infrastructure.
            </p>
          </div>
          {/* Card 2: Multi Cloud Build and Services */}
          <div className="bg-white p-lg border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-[36px] mb-sm">layers</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Multi Cloud Build & Services</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Design and build customized applications engineered to run concurrently across multiple cloud environments.
            </p>
          </div>
          {/* Card 3: Cloud Management & Operations */}
          <div className="bg-white p-lg border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-[36px] mb-sm">cloud_sync</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Cloud Management & Operations</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Deploy unified operations centers for provisioning, monitoring, security, and automated lifecycle governance.
            </p>
          </div>
          {/* Card 4: Private Cloud */}
          <div className="bg-white p-lg border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-[36px] mb-sm">dns</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Private Cloud</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Establish dedicated, secure physical or virtualized networks for security-critical enterprise datasets.
            </p>
          </div>
          {/* Card 5: Cloud Optimization */}
          <div className="bg-white p-lg border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-[36px] mb-sm">speed</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Cloud Optimization</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Right-size compute nodes, eliminate redundant storage, and optimize billing tiers to minimize overhead costs.
            </p>
          </div>
          {/* Card 6: Public Cloud */}
          <div className="bg-white p-lg border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-[36px] mb-sm">cloud</span>
            <h3 className="font-headline-md text-headline-md mb-xs text-on-background">Public Cloud</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Leverage global public cloud platforms to scale applications horizontally with high elastic availability.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Technical Stack & Process Flow */}
      <section className="max-w-[1280px] mx-auto px-gutter py-xl border-t border-outline-variant/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Left: Our Deployment Lifecycle */}
          <div className="lg:col-span-7">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-md">Our Cloud Journey Lifecycle</h3>
            <div className="space-y-md">
              <div className="flex gap-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#004f80] text-on-primary font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-headline-md text-[18px] font-bold text-on-surface">ADVISE</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Advise on every step of the journey to cloud.</p>
                </div>
              </div>
              <div className="flex gap-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#52296e] text-on-primary font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-headline-md text-[18px] font-bold text-on-surface">MOVE</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Migrate and modernize workloads and applications.</p>
                </div>
              </div>
              <div className="flex gap-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#a84424] text-on-primary font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-headline-md text-[18px] font-bold text-on-surface">MANAGE</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Manage, govern, and optimize hybrid multi-cloud environments.</p>
                </div>
              </div>
              <div className="flex gap-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#cc1a1a] text-on-primary font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-headline-md text-[18px] font-bold text-on-surface">BUILD</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Build innovative applications and experiences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Stack Matrix */}
          <div className="lg:col-span-5 bg-surface-container rounded-2xl p-lg border border-outline-variant/40">
            <h3 className="font-headline-md text-headline-md text-primary mb-md">Technology Stack Matrix</h3>
            <div className="space-y-sm">
              <div className="flex justify-between border-b border-outline-variant/20 pb-xs">
                <span className="font-bold text-on-surface-variant text-[14px]">Primary Platforms</span>
                <span className="text-on-surface font-semibold text-[14px]">AWS, Azure, GCP, Rackspace</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/20 pb-xs">
                <span className="font-bold text-on-surface-variant text-[14px]">Security Controls</span>
                <span className="text-on-surface font-semibold text-[14px]">WAF, DDoS Protection, IAM</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/20 pb-xs">
                <span className="font-bold text-on-surface-variant text-[14px]">Uptime SLA</span>
                <span className="text-on-surface font-semibold text-[14px]">99.99% Guaranteed Uptime</span>
              </div>
              <div className="flex justify-between pb-xs">
                <span className="font-bold text-on-surface-variant text-[14px]">Support Frequency</span>
                <span className="text-on-surface font-semibold text-[14px]">24/7/365 Cloud Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HybridCloudServices;