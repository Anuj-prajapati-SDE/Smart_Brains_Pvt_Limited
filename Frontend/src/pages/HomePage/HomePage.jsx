import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import HeroPage from './components/HeroPage'
import Businesses from './components/Businesses'
import client_1 from '../../assets/images/our_clients/client_1.png'
import client_2 from '../../assets/images/our_clients/client_2.png'
import client_3 from '../../assets/images/our_clients/client_3.jpeg'
import client_4 from '../../assets/images/our_clients/client_4.jpeg'
import client_5 from '../../assets/images/our_clients/client_5.png'
import client_6 from '../../assets/images/our_clients/client_6.png'
import client_7 from '../../assets/images/our_clients/client_7.png'
import client_8 from '../../assets/images/our_clients/client_8.png'
import client_9 from '../../assets/images/our_clients/client_9.png'
import client_10 from '../../assets/images/our_clients/client_10.png'
import client_11 from '../../assets/images/our_clients/client_11.png'
import client_12 from '../../assets/images/our_clients/client_12.png'
import client_13 from '../../assets/images/our_clients/client_13.png'
import client_14 from '../../assets/images/our_clients/client_14.png'
import client_15 from '../../assets/images/our_clients/client_15.png'
import client_16 from '../../assets/images/our_clients/client_16.png'
import client_17 from '../../assets/images/our_clients/client_17.png'
import client_18 from '../../assets/images/our_clients/client_18.png'

// import { Owner_1, Owner_2} from '../../assets/index';

const ExpandableText = ({ text, limit = 120, className = "", isDarkBg = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (text.length <= limit) {
    return <p className={className}>{text}</p>;
  }

  const buttonColorClass = isDarkBg
    ? "text-white/80 hover:text-white"
    : "text-primary dark:text-[#a9c7ff] hover:opacity-80";

  return (
    <div className="flex flex-col items-start">
      <p className={className}>
        {isExpanded ? text : `${text.slice(0, limit)}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`mt-2 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none inline-flex items-center gap-1 ${buttonColorClass}`}
      >
        {isExpanded ? "View Less" : "..view more"}
        <span className="material-symbols-outlined text-sm">
          {isExpanded ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </button>
    </div>
  );
};

const HomePage = () => {
  const animRef = useScrollAnimation()

  return (
    <main className="mt-20" ref={animRef}>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <HeroPage></HeroPage>
      </section>
      {/* Conglomerate Businesses Grid Dashboard Section */}
      <Businesses />

      {/* Service Cards Section (Bento Grid Style) */}
      <section className="max-w-[1280px] mx-auto py-xl px-gutter">
        <div data-animate="fade-up" className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Our Core Verticals
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </div>
        <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-12 gap-md h-auto md:h-[600px]">
          {/* S.T.E.A.M. Education */}
          <div className="md:col-span-8 group relative overflow-hidden bg-white border border-outline-variant">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A focused high-tech laboratory setting where engineering students are interacting with advanced robotics and robotic arms. The room is bright with neutral tones and corporate blue accents. The lighting is clean and professional, highlighting the intricate mechanical details of the educational tools. The mood is innovative and collaborative, showcasing academic excellence in a modern facility."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNhzE9LnQVxBz8GFw6OdyWwEjkkN0EIaTzRoh1pwLRsApGU6Eebg_VFaywSUPwIGOn_SQzv0DeeiajdECT4rDbYv1IdtzMSVYrr-hyuIBlZECj5EA4SaUi7EBSRTKd0ufQL-L48YUPxaXOYVkxXHcEKvD3t0prkBw58OicnGrVyg_NsYhq13g5gytvFgwuSA9Dy_5AgsfMfqHzgYAqeRnEj6-rOSbCJpY9irCQwuWcngfPebfPnCWnagQzrUy0KPa87d7o9KYNIw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-lg text-on-primary">
              <h3 className="font-headline-md text-headline-md mb-xs">
                S.T.E.A.M. Education
              </h3>
              <p className="font-body-md text-body-md opacity-80 mb-md max-w-md">
                Revolutionizing technical learning through industry-aligned
                curriculum and hands-on laboratory experiences.
              </p>
              <button className="flex items-center font-bold text-label-sm tracking-widest uppercase group/btn">
                Explore Curriculum{" "}
                <span className="material-symbols-outlined ml-xs transition-transform group-hover/btn:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Construction Services */}
          <div className="md:col-span-4 group relative overflow-hidden bg-white border border-outline-variant">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A detailed architectural view of a high-rise construction framework against a clear blue sky. The focus is on the precision of the steel and concrete structures. The lighting is bright and crisp, highlighting the clean lines and industrial strength of the project. The aesthetic is modern and structured, reflecting professional construction services."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbj8EyKdbEkbdn_riAuhkQwiQmimJsavtrAH0qKSSHjO7IOg9dh-OdRP0R0ND2cyaZ06GePbCgHP6Lx0wDpP6Ou-3fxJi4TbQJpYE2N8_3MB7Y7AlJxwUIB4Nupuz4NA829-EkTr0oHtfpJwf_Yps84CbKb3PorG2hNHdUPf79ybw9RsQr64Nek7gD4MXT4-9l_bUGCEfZJNnplFoqOeYfgFJfzsr7uGWS4t2-l-Fi-j8yZDkrSNphxtjdxvC30BX_3RO_GywBDg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-lg text-on-primary">
              <h3 className="font-headline-md text-headline-md mb-xs">
                Construction
              </h3>
              <p className="font-body-md text-body-md opacity-80 mb-md">
                Turnkey infrastructure solutions delivered with engineering
                precision.
              </p>
              <button className="flex items-center font-bold text-label-sm tracking-widest uppercase group/btn">
                View Projects{" "}
                <span className="material-symbols-outlined ml-xs transition-transform group-hover/btn:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Manpower Solutions */}
          <div className="md:col-span-12 group relative overflow-hidden bg-white border border-outline-variant h-64 md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A professional group of diverse industrial engineers and technicians in a corporate boardroom setting, discussing blueprints and project schedules. The environment is high-end and corporate, with cool lighting and a focus on teamwork and leadership. The mood is confident and expert-driven, emphasizing the quality of human capital and manpower solutions."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHWsegsgX68iKsDzcjd3m2Yxlj7SjTkGi0KUn1KgauvhNvbK2IthtrXaS3MJUKVGWK3696NaK0sPfc7tohAFq435gQjrbaYK3VwVxD1rKz4sBFy2SeqsdIKjbKzAL58tgm_hJ8YfQU4u_3LIIgXU43vptxjd-_lE0LY9ROT5yMTjSZd7GM7wDZP98lqeuo940esE2s97PQ8E7dfUh8D51PtK_W8I6hf_iefYAb6ysp8MOFY7uKBJZ28vBVt9RpdXhpXAIMoTSiXA"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-y-0 left-0 p-lg text-on-primary flex flex-col justify-center max-w-xl">
              <h3 className="font-headline-md text-headline-md mb-xs">
                Manpower Solutions
              </h3>
              <p className="font-body-md text-body-md opacity-80 mb-md">
                Connecting high-caliber technical talent with global industrial
                giants for specialized project execution.
              </p>
              <button className="w-fit flex items-center font-bold text-label-sm tracking-widest uppercase group/btn">
                Hire Talent{" "}
                <span className="material-symbols-outlined ml-xs transition-transform group-hover/btn:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Clean Modern Corporate */}
      <section className="bg-surface-container-low py-20 lg:py-28 overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">

          {/* Centered Header */}
          <div data-animate="fade-up" className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20">
              Why Choose SmartBrains
            </span>
            <h2 className="text-4xl md:text-5xl font-headline-lg text-primary mb-6 font-bold leading-tight">
              Engineering <span className="bg-clip-text text-primary font-bold">Excellence</span>
            </h2>
            <p className="text-lg text-on-surface-variant">
              Our commitment is reflected in our three-pillared approach to every project, delivering precision, timeliness, and unmatched quality.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Side: Dramatic Image Presentation */}
            <div data-animate="fade-left" className="w-full lg:w-1/2 relative px-4 sm:px-10 lg:px-0">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square shadow-2xl group">
                <img
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 group-hover:rotate-1"
                  alt="Architectural Excellence"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOhCJyuZucWPoYOTJXVe6X-vKoJu3YIF3eswSx8ubq7rHhI2YEY3WK1gRlTbzBN4-cV2c4GP1hUrMreOjmaPCl6Is5hDES6s3ZZM0xVz1ZXsTYE5HgR0XN60VzVCK27b_10wNEDv_f57As2xsObuBtGeniIHzV9fa4cLxWdQVnMhZVixhybaqPWeyVczB86nxBpuhGNLuitRCI_SjPJRRx4AX_1z_SI8qBUCJVp4NWCJU-7324o41SL3gBlg8tAkjNIGpm7L1lpg"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent mix-blend-multiply opacity-60"></div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-2 sm:bottom-12 sm:-left-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-[1.5rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-white/50 dark:border-slate-800/50 z-20 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#83aef5]">
                    15<span className="text-[#83aef5]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface-variant border-l-2 border-outline-variant/30 pl-4 sm:pl-6 leading-relaxed">
                    Years of <br /> Dedicated <br /> Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Feature List */}
            <div data-animate="stagger-up" className="w-full lg:w-1/2 flex flex-col gap-6 relative z-20 mt-8 lg:mt-0">

              {/* Item 1 */}
              <div className="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    precision_manufacturing
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline-md text-primary mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
                    Advanced Machinery
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    We harness cutting-edge industrial technology and premium educational apparatus to ensure unparalleled precision and future-ready skills.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    schedule
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline-md text-primary mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
                    Timely Execution
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    Rigorous frameworks guarantee delivery on schedule, without ever compromising our elite quality standards.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    verified
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline-md text-primary mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
                    Excellent Craftsmanship
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    A legacy maintained by elite engineers and certified professionals, ensuring long-lasting industrial durability.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Leading with Empathy Section */}
      <section className="bg-surface-container-low py-16 lg:py-16 overflow-hidden relative border-t border-b border-outline-variant/30">
        {/* Decorative background blurs */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">

          {/* Centered Header */}
          <div data-animate="fade-up" className="text-center max-w-3xl mx-auto mb-8 lg:mb-10 ">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20">
              Social Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-headline-lg text-primary mb-6 leading-tight">
              Leading with <span className="text-primary bg-clip-text from-primary to-[#83aef5] font-bold">Empathy</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          {/* Grid of Cards */}
          <div data-animate="stagger-up" className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Card 1: Progressing with Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[1.5rem] border border-outline-variant/30 shadow-sm bg-white dark:bg-slate-900 group hover:shadow-md hover:border-primary/25 transition-all duration-300">
              <div className="relative h-64 sm:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
                  alt="Progressing with Education"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
              </div>
              <div className="bg-[#002a58] text-white p-8 flex flex-col justify-center">
                <h3 className="text-xl font-headline-md font-bold mb-4">
                  Advancing and Technology
                </h3>
                <ExpandableText
                  text="SmartBrains plays a significant role in ensuring that every child, especially those from vulnerable communities, receives the opportunity to build a better future through education."
                  limit={120}
                  className="text-sm sm:text-body-md opacity-90 leading-relaxed font-body-md"
                  isDarkBg={true}
                />
              </div>
            </div>

            {/* Card 2: Model Villages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[1.5rem] border border-outline-variant/30 shadow-sm bg-white dark:bg-slate-900 group hover:shadow-md hover:border-primary/25 transition-all duration-300">
              <div className="relative h-64 sm:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop"
                  alt="Model Villages"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
              </div>
              <div className="bg-white dark:bg-[#111314] text-on-surface p-8 flex flex-col justify-center">
                <h3 className="text-xl font-headline-md font-bold text-primary dark:text-[#a9c7ff] mb-4">
                  Model Vocational Labs and Training Centers
                </h3>
                <ExpandableText
                  text="We build sustainable villages, focusing on water, agriculture, health, education, community engagement, income generation, and entrepreneurship for a better society."
                  limit={120}
                  className="text-sm sm:text-body-md text-on-surface-variant dark:text-surface-variant opacity-90 leading-relaxed font-body-md"
                  isDarkBg={false}
                />
              </div>
            </div>

            {/* Card 3: Empowering Youth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[1.5rem] border border-outline-variant/30 shadow-sm bg-white dark:bg-slate-900 group hover:shadow-md hover:border-primary/25 transition-all duration-300">
              <div className="bg-white dark:bg-[#111314] text-on-surface p-8 flex flex-col justify-center order-2 sm:order-1">
                <h3 className="text-xl font-headline-md font-bold text-primary dark:text-[#a9c7ff] mb-4">
                 Sustainability and CSR
                </h3>
                <ExpandableText
                  text="We proudly support YUVA 2.0 project in New Delhi, empowering marginalized communities through solar PV training. Our comprehensive program safeguards youth from addiction, offering care, mentorship, and a purposeful life."
                  limit={120}
                  className="text-sm sm:text-body-md text-on-surface-variant dark:text-surface-variant opacity-90 leading-relaxed font-body-md"
                  isDarkBg={false}
                />
              </div>
              <div className="relative h-64 sm:h-auto overflow-hidden order-1 sm:order-2">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
                  alt="Empowering Youth"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 4: Embracing Sustainability */}
            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[1.5rem] border border-outline-variant/30 shadow-sm bg-white dark:bg-slate-900 group hover:shadow-md hover:border-primary/25 transition-all duration-300">
              <div className="bg-[#002a58] text-white p-8 flex flex-col justify-center order-2 sm:order-1">
                <h3 className="text-xl font-headline-md font-bold mb-4">
                  AgriTech & Techlonology
                </h3>
                <ExpandableText
                  text="As every living creature on this planet depends on nature for sustenance, environmental protection has become more important than ever before. We continue to pave this path of embracing sustainability & safeguarding the environment with our continuous efforts."
                  limit={120}
                  className="text-sm sm:text-body-md opacity-90 leading-relaxed font-body-md"
                  isDarkBg={true}
                />
              </div>
              <div className="relative h-64 sm:h-auto overflow-hidden order-1 sm:order-2">
                <img
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop"
                  alt="Embracing Sustainability"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Major Clients Section */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        {/* Inline Styles for Animation */}
        <style>
          {`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
          will-change: transform;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
          will-change: transform;
        }
        .pause-on-hover:hover .animate-scroll-left,
        .pause-on-hover:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}
        </style>

        {/* Decorative background blurs */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-gutter mb-16 relative z-10">
          <div className="text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20">
              Trusted Worldwide
            </span>
            <h2 className="text-4xl md:text-5xl font-headline-lg text-on-surface leading-tight font-bold text-primary">
              Our Major <span className="text-primary font-extrabold">Clients</span>
            </h2>
          </div>
        </div>

        {/* Sliders Container */}
        <div className="relative w-full flex flex-col gap-6 pause-on-hover z-10">

          {/* Fade Edges for the marquee effect */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-surface-container-low to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-surface-container-low to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 - Left Scrolling */}
          <div className="flex w-max animate-scroll-left gap-6 px-4">
            {[...Array(2)].map((_, i) => (
              <div key={`row1-${i}`} className="flex gap-6 items-center">
                {[
                  { name: "BHUTANI", img: client_1 },
                  { name: "KRISUMI", img: client_2 },
                  { name: "ELAN", img: client_3 },
                  { name: "TATA", img: client_4 },
                  { name: "M3M", img: client_5 },
                  { name: "DLF", img: client_6 },
                  { name: "GODREJ", img: client_7 },
                  { name: "L&T", img: client_8 },
                  { name: "AMBUJA", img: client_9 },
                  { name: "RELIANCE", img: client_10 },
                  { name: "ADANI", img: client_11 },
                  { name: "MAHINDRA", img: client_12 },
                  { name: "WIPRO", img: client_13 },
                  { name: "HDFC", img: client_14 },
                  { name: "INFOSYS", img: client_15 },
                  { name: "TCS", img: client_16 },
                  { name: "ITC", img: client_17 },
                  { name: "HCL", img: client_18 },
                ].map((client, j) => (
                  <div key={j} className="flex items-center justify-center w-[200px] h-[90px] bg-white rounded-2xl shadow-sm border border-outline-variant/40 hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group p-4">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-full h-full object-contain "
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      {/* <section className="bg-surface-container py-xl">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div data-animate="fade-up" className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
              What's Going On!
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
          <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-3 gap-md">
            
            <div className="bg-white p-lg border border-outline-variant shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary text-headline-xl leading-none font-serif mb-sm">
                  "
                </div>
                <p className="font-body-md text-on-surface-variant italic mb-lg">
                  SmartBrains has completely transformed our technical curriculum.
                  The S.T.E.A.M. lab implementation was seamless, and our students
                  are more engaged than ever.
                </p>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container font-bold flex-shrink-0">
                  DR
                </div>
                <div>
                  <h4 className="font-bold text-primary font-body-lg">
                    Dr. Rajan Sharma
                  </h4>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
                    Principal, The Millennium School
                  </p>
                </div>
              </div>
            </div>
     
            <div className="bg-white p-lg border border-outline-variant shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary text-headline-xl leading-none font-serif mb-sm">
                  "
                </div>
                <p className="font-body-md text-on-surface-variant italic mb-lg">
                  Their structural engineering team delivered our project ahead of
                  schedule. The precision and attention to detail were evident in
                  every phase of the construction.
                </p>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container font-bold flex-shrink-0">
                  AK
                </div>
                <div>
                  <h4 className="font-bold text-primary font-body-lg">
                    Anita Kapoor
                  </h4>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
                    Project Director, Elite Infra
                  </p>
                </div>
              </div>
            </div>
     
            <div className="bg-white p-lg border border-outline-variant shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary text-headline-xl leading-none font-serif mb-sm">
                  "
                </div>
                <p className="font-body-md text-on-surface-variant italic mb-lg">
                  The manpower solutions provided by SmartBrains have been
                  instrumental in scaling our operations. They consistently deliver
                  top-tier technical talent.
                </p>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container font-bold flex-shrink-0">
                  MK
                </div>
                <div>
                  <h4 className="font-bold text-primary font-body-lg">
                    Michael K.
                  </h4>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
                    HR Head, Global Tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* CTA Section */}
      <section data-animate="scale-up" className="bg-primary py-xl m-20 rounded-xl">
        <div className="max-w-[1280px] mx-auto px-gutter text-center text-on-primary">
          <h2 className="font-headline-lg text-headline-lg mb-md">
            Ready to Build the Future?
          </h2>
          <p className="font-body-lg text-body-lg mb-lg opacity-80 max-w-2xl mx-auto">
            Connect with our specialists today to discuss your next industrial
            project or institutional curriculum upgrade.
          </p>
          <div className="flex justify-center gap-md">
            <button className="bg-on-primary text-primary px-xl py-sm font-bold uppercase text-label-sm tracking-widest transition-all hover:scale-105">
              Get a Consultation
            </button>
          </div>
        </div>
      </section>
    </main>

  )
}

export default HomePage