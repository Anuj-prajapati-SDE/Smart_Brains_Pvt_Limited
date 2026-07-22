import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ConstructionPage = () => {
  const animRef = useScrollAnimation()

  return (
   <main className="mt-20" ref={animRef}>
  {/* Hero Section */}
  <section className="relative h-[600px] w-full overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover"
        data-alt="A wide-angle shot of a heavy industrial construction site at dusk with deep blue and orange lighting. Multiple cranes and micro-piling rigs are visible against a darkening sky, emphasizing engineering precision and structural scale. The mood is powerful and industrial, with a clean corporate aesthetic that reflects professional construction services."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW9zICjkk4TuXHr7TJvgDWMTtyy9GqV8ZEaTNUnIxAg25BXDDZw5XRqszMdsNGls4DCkrItuPMBXCNM4PfCV1p_cQvCCj3xitFt60e2-Z_U6mukOP7z8NOiGsW1Qef8ug02fLI_fIu5sRmrJcnZCbzEuSmzCOGpFcY3P6JbtmI4ZZKRvF8b8OTADXkd6-pvmfpfp2ziqZg69YMRxyDFCRvwm6sn8LmPG4sYInlkEwkMWSMb1TE3vNrUVTmSlg9MByE5vJA6g6dwQ"
      />
      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90" />
    </div>
    <div className="relative z-10 max-w-[1280px] mx-auto px-gutter h-full flex flex-col justify-center">
      <div className="max-w-2xl">
        <span data-animate="fade-up" className="text-on-primary-container font-label-sm uppercase tracking-widest mb-base block">
          Engineering Excellence
        </span>
        <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-headline-xl text-on-primary mb-md">
          Pioneering Industrial &amp; Structural Solutions
        </h1>
        <p data-animate="fade-up" data-animate-delay="0.2" className="font-body-lg text-body-lg text-on-primary opacity-90 mb-lg">
          SmartBrains Construction delivers precision-engineered foundation and
          excavation services, bridging technical academic expertise with
          industrial execution.
        </p>
        <div data-animate="fade-up" data-animate-delay="0.3" className="flex gap-md">
          <button className="bg-on-primary text-primary px-lg py-sm font-bold rounded-lg">
            View Capabilities
          </button>
          <button className="border-2 border-on-primary text-on-primary px-lg py-sm font-bold rounded-lg hover:bg-on-primary hover:text-primary transition-all">
            Project Portfolio
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* Core Competencies: Bento Grid Layout */}
  <section className="max-w-[1280px] mx-auto px-gutter py-xl">
    <div data-animate="fade-up" className="flex justify-between items-end mb-lg">
      <div className="max-w-xl">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-base">
          Core Competencies
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Specialized foundation and geotechnical solutions designed for
          high-precision industrial requirements.
        </p>
      </div>
      <div className="hidden md:block h-[2px] bg-outline-variant flex-grow ml-lg mb-4" />
    </div>
    <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-12 gap-md auto-rows-[280px]">
      {/* Micro Piling */}
      <div className="md:col-span-8 bg-white border border-outline-variant overflow-hidden group relative">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="Close-up detail of a hydraulic micro piling rig working on a structured concrete foundation. The scene is brightly lit with clinical light-mode daylight, showing metallic textures and industrial grease. The image conveys high technical precision and stability, styled with a clean corporate finish and subtle blue tones."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJwk_B9hbsap-CZ3OChY4mRt6n5HsAou-W1xhMGGCPd4HiKYadaUeA8ktsQP8vD8pOXtzfzFL3vhtxleZyj_OY1DvBZhd2tMLBSUHkdqSSLwJHepXCM0NU0wSz8nI09AbPs0upgk4GvaXnrrQqZXs77nDGvNYEUflozxBfiys9Rb6qDNv0He2kd_bsizF0CHv3xLBR6K9zb9EU50LsOSUmqjy9eR1oIM8XzII_s5EYpnhgnEzSuVmZtqxU1Fk0Ncz_av6II5PTBA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-md">
          <h3 className="font-headline-md text-headline-md text-on-primary">
            Micro Piling
          </h3>
          <p className="font-body-md text-on-primary opacity-80">
            Precision drilling for foundation reinforcement in restricted
            spaces.
          </p>
        </div>
      </div>
      {/* Excavation */}
      <div className="md:col-span-4 bg-surface-container border border-outline-variant p-md flex flex-col justify-between">
        <div>
          <span className="material-symbols-outlined text-primary text-4xl mb-base">
            construction
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-xs">
            Excavation
          </h3>
          <p className="font-body-md text-on-surface-variant">
            Strategic earthmoving and site preparation for industrial
            developments.
          </p>
        </div>
        <a className="text-primary font-bold flex items-center gap-xs" href="#">
          Learn More{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      {/* Shotcrete & Soil Nailing */}
      <div className="md:col-span-4 bg-primary text-on-primary p-md flex flex-col justify-center">
        <h3 className="font-headline-md text-headline-md mb-base">
          Shotcrete &amp; Soil Nailing
        </h3>
        <p className="font-body-md opacity-80 mb-md">
          Advanced slope stabilization and retaining wall solutions using
          high-velocity concrete application.
        </p>
        <div className="flex gap-xs">
          <span className="bg-on-primary/10 px-xs py-xs text-xs uppercase font-bold rounded">
            Geotech
          </span>
          <span className="bg-on-primary/10 px-xs py-xs text-xs uppercase font-bold rounded">
            Stabilization
          </span>
        </div>
      </div>
      {/* Sheet Piling */}
      <div className="md:col-span-8 bg-white border border-outline-variant overflow-hidden group relative">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="A row of heavy interlocking steel sheet piles driven into the ground at a major construction site. The lighting is crisp and midday, highlighting the vertical textures and structural strength of the metal. The background shows a clean, organized site, reflecting a corporate modern aesthetic with a focus on engineering durability."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJQWT7Ewksecy5MEzl0cqzsoT8R4yGkXKcA_UVIsz2ZPHDzua2WP97OnzZx1Nn_Rr792rWp7MZwLQKHGn_xRjf0TTh373PaSyUfxzlIlUcDUeMv68NOPEl1CoNO6bip_GfTezW3S81rDg2fbhcQY8JSc86RF3-3SIHvlyOYq6yU7CqT81TcSJ1x-5ZbJ7S9YmgoGyhOC0WdPm4vEIPaS_jIQNavWZkrAA7HMYUsNz_N4OfndcHWCgCfl2sgLfzjQwjBWx8S6UJbQ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 to-transparent flex flex-col justify-end p-md">
          <h3 className="font-headline-md text-headline-md text-on-primary">
            Sheet Piling
          </h3>
          <p className="font-body-md text-on-primary opacity-80">
            Steel barrier systems for temporary and permanent earth retention.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* USPs: Technical Advantage */}
  <section className="bg-surface-container py-xl">
    <div className="max-w-[1280px] mx-auto px-gutter">
      <div data-animate="fade-up" className="text-center mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          The SmartBrains Advantage
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-base">
          We combine cutting-edge machinery with rigorous project management to
          ensure industrial precision at every stage.
        </p>
      </div>
      <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        <div className="bg-white p-lg border border-outline-variant">
          <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-lg mb-md">
            <span className="material-symbols-outlined text-primary">
              settings_suggest
            </span>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary mb-base">
            Advanced Machinery
          </h4>
          <p className="font-body-md text-on-surface-variant">
            Proprietary high-torque drilling rigs and automated concrete
            batching systems for unmatched consistency.
          </p>
        </div>
        <div className="bg-white p-lg border border-outline-variant">
          <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-lg mb-md">
            <span className="material-symbols-outlined text-primary">
              schedule
            </span>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary mb-base">
            Timely Execution
          </h4>
          <p className="font-body-md text-on-surface-variant">
            Adherence to strict critical path methods (CPM) ensuring projects
            meet operational deadlines without compromise.
          </p>
        </div>
        <div className="bg-white p-lg border border-outline-variant">
          <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-lg mb-md">
            <span className="material-symbols-outlined text-primary">
              verified_user
            </span>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary mb-base">
            Safety Standards
          </h4>
          <p className="font-body-md text-on-surface-variant">
            Zero-incident safety culture backed by international certifications
            and rigorous field monitoring protocols.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Major Clients Section */}
  <section className="max-w-[1280px] mx-auto px-gutter py-xl">
    <div className="border-t border-outline-variant pt-lg">
      <h3 className="font-label-sm uppercase tracking-widest text-center text-outline mb-lg">
        Strategic Partners &amp; Major Clients
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-lg items-center opacity-60 grayscale hover:grayscale-0 transition-all">
        <div className="flex justify-center">
          <span className="font-headline-md text-outline font-bold">
            LARSEN &amp; TOUBRO
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-headline-md text-outline font-bold">
            RELIANCE
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-headline-md text-outline font-bold">
            TATA PROJECTS
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-headline-md text-outline font-bold">
            AFCONS
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-headline-md text-outline font-bold">DMRC</span>
        </div>
      </div>
    </div>
  </section>
  {/* Call to Action */}
  <section className="max-w-[1280px] mx-auto px-gutter mb-xl">
    <div data-animate="scale-up" className="bg-primary p-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
      <div className="relative z-10 text-on-primary max-w-2xl">
        <h2 className="font-headline-lg text-headline-lg mb-base">
          Ready to start your next industrial project?
        </h2>
        <p className="font-body-md opacity-80">
          Consult with our structural engineering experts for a comprehensive
          technical assessment and quotation.
        </p>
      </div>
      <div className="relative z-10 mt-lg md:mt-0">
        <button className="bg-on-primary text-primary px-lg py-sm font-bold rounded-lg shadow-lg">
          Request Consultation
        </button>
      </div>
      {/* Abstract geometry bg */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 -rotate-45 translate-x-32 -translate-y-32" />
      <div className="absolute left-0 bottom-0 w-48 h-48 bg-white/5 rotate-12 -translate-x-16 translate-y-16" />
    </div>
  </section>
</main>
  )
}

export default ConstructionPage