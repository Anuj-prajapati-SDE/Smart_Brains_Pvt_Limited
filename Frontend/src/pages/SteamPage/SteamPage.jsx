import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const SteamPage = () => {
  const animRef = useScrollAnimation()

  return (
   <main className="mt-20" ref={animRef}>
  {/* Hero Section */}
  <section className="relative h-[600px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover opacity-30"
        data-alt="A focused high-school student in a high-tech science laboratory using professional-grade microscopy equipment. The scene is bathed in cool, daylight-balanced studio lighting that highlights the sterile, industrial aesthetic of the lab. Soft blue and deep navy tones from the corporate palette dominate the background, creating a sophisticated and academic atmosphere. The composition is clean and architectural, reflecting precision and excellence."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzdX9Xh_2tQ1VMUWDeCaXZysHIGzId48aTYhbzDMCxLMpj0csh6Yuuld06uuPNB_yHn3fy_lQE268galRKhuhNs6WlqF06tmRVrWy5cuA0Q651MGWg2Vu3wze0KJvC-Nwcyo9wCqrWxU7X9s_zOsAeNBStu3jnrei6LeP1iZuug49dz1htNFc7QgsaGmMQNRndt7oLwXOID5a8xm2nHnGMuM6zXaARDiMkoDJjrGghHREfrosWrB4T0eFh8k0c_el7A2-TprB7qQ"
      />
    </div>
    <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
      <div className="max-w-2xl">
        <span data-animate="fade-up" className="inline-block bg-tertiary-container text-on-tertiary-container px-sm py-xs font-label-sm text-label-sm mb-md rounded-full">
          S.T.E.A.M. EXCELLENCE
        </span>
        <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-headline-xl text-on-primary mb-md">
          Nurturing the Architects of Tomorrow.
        </h1>
        <p data-animate="fade-up" data-animate-delay="0.2" className="font-body-lg text-body-lg text-on-primary opacity-90 mb-lg">
          Bridging the gap between theoretical science and industrial
          application through immersive S.T.E.A.M. education and elite
          competitive coaching.
        </p>
        <div data-animate="fade-up" data-animate-delay="0.3" className="flex gap-md">
          <button className="bg-on-primary text-primary px-lg py-sm font-bold rounded-lg hover:bg-surface-container-low transition-colors">
            Explore Programs
          </button>
          <button className="border border-on-primary text-on-primary px-lg py-sm font-bold rounded-lg hover:bg-white/10 transition-colors">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* Coaching Programs */}
  <section className="py-xl max-w-[1280px] mx-auto px-gutter">
    <div data-animate="fade-up" className="text-center mb-xl">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
        Competitive Exam Coaching
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
        Elite preparation modules designed by industry experts and veteran
        academicians to ensure success in the nation's toughest examinations.
      </p>
    </div>
    <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-4 gap-md">
      {/* Foundation */}
      <div className="bg-surface border border-outline-variant p-md flex flex-col h-full hover:shadow-lg transition-shadow">
        <span
          className="material-symbols-outlined text-primary text-4xl mb-sm"
          data-icon="school"
        >
          school
        </span>
        <h3 className="font-headline-md text-headline-md mb-sm">Foundation</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
          Laying the conceptual groundwork for Class 8-10 students in Science
          and Mathematics.
        </p>
        <ul className="space-y-2 mb-lg">
          <li className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-sm"
              data-icon="check_circle"
            >
              check_circle
            </span>{" "}
            CONCEPT CLARITY
          </li>
          <li className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-sm"
              data-icon="check_circle"
            >
              check_circle
            </span>{" "}
            OLYMPIAD PREP
          </li>
        </ul>
        <a
          className="text-primary font-bold flex items-center gap-xs hover:gap-sm transition-all"
          href="#"
        >
          Learn More{" "}
          <span className="material-symbols-outlined" data-icon="arrow_forward">
            arrow_forward
          </span>
        </a>
      </div>
      {/* JEE */}
      <div className="bg-surface border border-outline-variant p-md flex flex-col h-full hover:shadow-lg transition-shadow">
        <span
          className="material-symbols-outlined text-primary text-4xl mb-sm"
          data-icon="precision_manufacturing"
        >
          precision_manufacturing
        </span>
        <h3 className="font-headline-md text-headline-md mb-sm">
          JEE (Main/Adv)
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
          Rigorous engineering entrance training with a focus on problem-solving
          speed and accuracy.
        </p>
        <ul className="space-y-2 mb-lg">
          <li className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-sm"
              data-icon="check_circle"
            >
              check_circle
            </span>{" "}
            ADVANCED ANALYTICS
          </li>
          <li className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-sm"
              data-icon="check_circle"
            >
              check_circle
            </span>{" "}
            MOCK DRILLS
          </li>
        </ul>
        <a
          className="text-primary font-bold flex items-center gap-xs hover:gap-sm transition-all"
          href="#"
        >
          Learn More{" "}
          <span className="material-symbols-outlined" data-icon="arrow_forward">
            arrow_forward
          </span>
        </a>
      </div>
      {/* NEET */}
      <div className="bg-surface border border-outline-variant p-md flex flex-col h-full hover:shadow-lg transition-shadow">
        <span
          className="material-symbols-outlined text-primary text-4xl mb-sm"
          data-icon="biotech"
        >
          biotech
        </span>
        <h3 className="font-headline-md text-headline-md mb-sm">NEET</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
          Comprehensive medical entrance coaching covering Biology, Physics, and
          Chemistry in depth.
        </p>
        <ul className="space-y-2 mb-lg">
          <li className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-sm"
              data-icon="check_circle"
            >
              check_circle
            </span>{" "}
            NCERT MASTERY
          </li>
          <li className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-sm"
              data-icon="check_circle"
            >
              check_circle
            </span>{" "}
            LAB ASSISTANCE
          </li>
        </ul>
        <a
          className="text-primary font-bold flex items-center gap-xs hover:gap-sm transition-all"
          href="#"
        >
          Learn More{" "}
          <span className="material-symbols-outlined" data-icon="arrow_forward">
            arrow_forward
          </span>
        </a>
      </div>
      {/* SSC */}
      <div className="bg-surface border border-outline-variant p-md flex flex-col h-full hover:shadow-lg transition-shadow">
        <span
          className="material-symbols-outlined text-primary text-4xl mb-sm"
          data-icon="account_balance"
        >
          account_balance
        </span>
        <h3 className="font-headline-md text-headline-md mb-sm">SSC / Govt</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
          Structured modules for Staff Selection Commission and other government
          sector career paths.
        </p>
        <ul className="space-y-2 mb-lg">
          <li className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-sm"
              data-icon="check_circle"
            >
              check_circle
            </span>{" "}
            QUANT MASTERY
          </li>
          <li className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-sm"
              data-icon="check_circle"
            >
              check_circle
            </span>{" "}
            GENERAL STUDIES
          </li>
        </ul>
        <a
          className="text-primary font-bold flex items-center gap-xs hover:gap-sm transition-all"
          href="#"
        >
          Learn More{" "}
          <span className="material-symbols-outlined" data-icon="arrow_forward">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  </section>
  {/* Methodology Bento Grid */}
  <section className="bg-surface-container-low py-xl">
    <div className="max-w-[1280px] mx-auto px-gutter">
      <div data-animate="fade-up" className="mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
          Educational Methodology
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          We don't just teach; we innovate. Our methodology integrates hands-on
          learning with digital precision.
        </p>
      </div>
      <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-12 gap-md h-auto md:h-[600px]">
        {/* Innovation Labs */}
        <div className="md:col-span-8 relative group overflow-hidden border border-outline-variant">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="A futuristic STEM innovation lab where students are collaborating on a robotics project. The space is filled with 3D printers, circuit boards, and advanced digital displays. The lighting is bright and clean, emphasizing a modern industrial design. High-quality materials like brushed metal and glass are visible, creating a premium academic feel. The overall mood is one of intense focus, creativity, and technological advancement within a corporate educational setting."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa7RcYqFqE-6VH9b-sXluktdc5YvcDzDpXwBHx8x3LTV96EjCSs6sTEDmBhOSaRMPhD5ySX6COlcCHbvT1WANH0_6vL37CltdNEYm3s6ulAh9BiP_VdpNCWXLZ2BT3swd-ZOspweHRQEf7xNvJbBRaqfVNuyYTCuq5SsboMAt7vq34KziROFbNNou5EqGTshG3ZrVY5eaLy9315abdLfnz1PISmEIjXFBWqP-DFq6_-vtCWL_ib-r_-4ev6iHkWHzA3pKKMfMdXA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-lg">
            <h4 className="font-headline-lg text-on-primary mb-xs">
              Innovation Labs
            </h4>
            <p className="text-on-primary opacity-80 max-w-md">
              Equipped with the latest in robotics and AI modeling tools for
              real-world application.
            </p>
          </div>
        </div>
        {/* Makerspaces */}
        <div className="md:col-span-4 bg-primary p-lg flex flex-col justify-center border border-outline-variant">
          <span
            className="material-symbols-outlined text-on-primary text-6xl mb-md"
            data-icon="construction"
          >
            construction
          </span>
          <h4 className="font-headline-md text-on-primary mb-sm">
            Makerspaces
          </h4>
          <p className="text-on-primary opacity-80 mb-md font-body-md">
            A physical space for prototyping, wood-working, and industrial
            design projects.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="bg-on-primary/10 border border-on-primary/20 text-on-primary px-sm py-xs font-label-sm text-label-sm">
              3D PRINTING
            </span>
            <span className="bg-on-primary/10 border border-on-primary/20 text-on-primary px-sm py-xs font-label-sm text-label-sm">
              CNC MILLING
            </span>
            <span className="bg-on-primary/10 border border-on-primary/20 text-on-primary px-sm py-xs font-label-sm text-label-sm">
              LASER CUTTING
            </span>
          </div>
        </div>
        {/* STEM Subjects */}
        <div className="md:col-span-4 border border-outline-variant bg-surface p-lg flex flex-col justify-between">
          <div>
            <h4 className="font-headline-md text-primary mb-sm">
              Interdisciplinary STEM
            </h4>
            <p className="font-body-md text-on-surface-variant">
              Breaking the silos of traditional subjects through project-based
              learning.
            </p>
          </div>
          <div className="mt-md">
            <div className="flex justify-between items-center py-sm border-t border-outline-variant">
              <span className="font-bold">Mathematics</span>
              <span
                className="material-symbols-outlined text-primary"
                data-icon="calculate"
              >
                calculate
              </span>
            </div>
            <div className="flex justify-between items-center py-sm border-t border-outline-variant">
              <span className="font-bold">Engineering</span>
              <span
                className="material-symbols-outlined text-primary"
                data-icon="settings"
              >
                settings
              </span>
            </div>
          </div>
        </div>
        {/* Visual Assets */}
        <div className="md:col-span-8 relative overflow-hidden border border-outline-variant">
          <img
            className="w-full h-full object-cover"
            data-alt="A high-contrast, professional photograph of a modern classroom setting during a high-level science seminar. The students are diverse and engaged, with digital tablets and notebooks in front of them. The lighting is soft and professional, highlighting a clean, architectural space with minimal clutter. The color palette is grounded in whites, greys, and the corporate deep blue, evoking a sense of serious academic excellence and institutional prestige."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK7PdeEYzS5F3aze25U2u3_ce_pFTA5Ve7A6cv3QaTHoeLsA5UeEFOzrj2jYiZO5BJopvq3XMPTnfYm3BdZ88-9y53xRiNkPAJsIsqApbdCUOBXd6Y9Kwj8ngO0e0uNtLSop9T_EzUtsnRUgBO6JYjFsxNW3YWyqNuzGROZR-Me2IAhHk4UTYvAZ3PZtAUkKOj1nJA18lY2Vtx4oq-qiTE6nxA9baa_mnbOHVqMmmtgoPf1r3Qde_Q-hh80TMePTvPMRedOhqmPg"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Partner Institutions */}
  <section className="py-xl max-w-[1280px] mx-auto px-gutter">
    <div data-animate="fade-up" className="text-center mb-xl">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
        Our Partner Institutions
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Trusted by the region's most prestigious educational centers to deliver
        excellence.
      </p>
    </div>
    <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-3 gap-lg items-center">
      <div className="flex flex-col items-center group grayscale hover:grayscale-0 transition-all duration-300">
        <div className="h-24 w-48 flex items-center justify-center mb-sm">
          <span className="font-headline-md text-outline font-bold group-hover:text-primary transition-colors">
            THE MILLENNIUM SCHOOL
          </span>
        </div>
        <p className="text-label-sm font-label-sm text-outline group-hover:text-on-surface-variant">
          Academic Excellence Partner
        </p>
      </div>
      <div className="flex flex-col items-center group grayscale hover:grayscale-0 transition-all duration-300">
        <div className="h-24 w-48 flex items-center justify-center mb-sm">
          <span className="font-headline-md text-outline font-bold group-hover:text-primary transition-colors">
            MATRIKIRAN
          </span>
        </div>
        <p className="text-label-sm font-label-sm text-outline group-hover:text-on-surface-variant">
          Innovation Catalyst
        </p>
      </div>
      <div className="flex flex-col items-center group grayscale hover:grayscale-0 transition-all duration-300">
        <div className="h-24 w-48 flex items-center justify-center mb-sm">
          <span className="font-headline-md text-outline font-bold group-hover:text-primary transition-colors">
            PAREVARTAN SCHOOL
          </span>
        </div>
        <p className="text-label-sm font-label-sm text-outline group-hover:text-on-surface-variant">
          Foundation Excellence
        </p>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="mb-xl max-w-[1280px] mx-auto px-gutter">
    <div data-animate="scale-up" className="bg-primary-container p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
      <div className="text-center md:text-left">
        <h2 className="font-headline-lg text-headline-lg text-on-primary mb-sm">
          Ready to Elevate Your Future?
        </h2>
        <p className="font-body-md text-on-primary opacity-80">
          Join our next batch of innovators and high-achievers. Enrollment is
          open for 2024-25.
        </p>
      </div>
      <button className="bg-on-primary text-primary px-lg py-sm font-bold rounded-lg whitespace-nowrap hover:bg-surface-container transition-colors">
        Consult an Expert
      </button>
    </div>
  </section>
</main>
  )
}

export default SteamPage