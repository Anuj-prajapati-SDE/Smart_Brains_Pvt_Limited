import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import WorldMapVector from "./components/WorldMapVector";

const ContactUs = () => {
  const animRef = useScrollAnimation();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    vertical: "STEAM Education",
    subject: "",
    message: ""
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  const faqItems = [
    {
      question: "What industries does SmartBrains serve?",
      answer: "SmartBrains is a diversified conglomerate working across S.T.E.A.M. Education & Vocational Training, Civil Infrastructure & Engineering Services, IT Services & Cloud Infrastructure, Manpower Staffing, and CSR Project implementation."
    },
    {
      question: "How do I apply for career opportunities at SmartBrains?",
      answer: "You can send your resume directly to our HR department via email at hr@smartbrains.in, or fill out the contact form specifying 'Careers & HR' in the inquiry topic. Our recruiting team will review your profile against active positions."
    },
    {
      question: "Are your S.T.E.A.M. education labs aligned with school curricula?",
      answer: "Yes, our S.T.E.A.M. programs, experiential learning modules, and hands-on laboratory kits are designed in strict alignment with CBSE, ICSE, and state boards, integrated with NEP 2020 guidelines."
    },
    {
      question: "Can we request custom civil engineering consultancy?",
      answer: "Absolutely. We provide engineering consultancy, earthwork coordination, civil project staffing, and industrial plant logistics. Reach out through our contact form with details about your site parameters and objectives."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10+ digits)";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        vertical: "STEAM Education",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>

      <main
        className="mt-20 bg-surface dark:bg-[#0c0e0f] text-on-surface transition-colors duration-300"
        ref={animRef}
      >

        {/* Hero Banner Section */}
        <section className="relative min-h-[380px] md:min-h-[420px] py-16 flex items-center overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 z-0">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00152b] via-[#002a58] to-[#004080]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60" />
            <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-sky-300/10 blur-[90px] pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-gutter w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column Text Info */}
              <div className="lg:col-span-8 space-y-5">
                <div data-animate="fade-up" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#a9c7ff] backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a9c7ff] animate-ping" />
                  Connect With Us
                </div>
                <h1
                  data-animate="fade-up"
                  data-animate-delay="0.1"
                  className="font-headline-xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
                >
                  Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9c7ff] to-white font-extrabold">Next Generation</span> of Success Together
                </h1>
                <p
                  data-animate="fade-up"
                  data-animate-delay="0.2"
                  className="text-sm md:text-base text-slate-300 font-light max-w-xl leading-relaxed"
                >
                  Reach out to our vertical leads, administrative staff, or careers department. We respond to all inquiries within 24 business hours.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Info & Form Container Section */}
        <section className="py-16 max-w-[1280px] mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Office Details & FAQs */}
            <div className="lg:col-span-5 space-y-8" data-animate="fade-right">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-bold">
                  Corporate Directory_
                </span>
                <h2 className="font-headline-lg text-2xl md:text-3xl text-[#002a58] dark:text-white mt-1.5 mb-4 font-bold uppercase">
                  Contact Information
                </h2>
                <div className="w-12 h-1 bg-[#002a58] dark:bg-[#a9c7ff] rounded-full" />
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 gap-4">

                {/* Office Card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 text-[#002a58] dark:text-[#a9c7ff] flex-shrink-0">
                      <span className="material-symbols-outlined text-[24px]">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider">
                        Noida Operations Headquarters
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        A-25, Sector 59, Noida,<br />Uttar Pradesh - 201301, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* General & HR Contact Card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 text-[#002a58] dark:text-[#a9c7ff] flex-shrink-0">
                      <span className="material-symbols-outlined text-[24px]">mail</span>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider">
                        Direct Lines &amp; Support
                      </h4>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        <span className="block font-medium">General: <a href="mailto:info@smartbrains.in" className="text-[#002a58] dark:text-[#a9c7ff] font-semibold hover:underline">info@smartbrains.in</a></span>
                        <span className="block font-medium">Careers: <a href="mailto:hr@smartbrains.in" className="text-[#002a58] dark:text-[#a9c7ff] font-semibold hover:underline">hr@smartbrains.in</a></span>
                        <span className="block mt-1 font-medium">Hotline: <a href="tel:+919891108002" className="text-slate-800 dark:text-white font-bold hover:underline">+91 9891108002</a></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* FAQ Accordion Section */}
              <div className="pt-4 space-y-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white tracking-wide">
                  Common Questions
                </h3>
                <div className="space-y-2.5">
                  {faqItems.map((item, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-200/60 dark:border-slate-800/40 rounded-xl overflow-hidden bg-white dark:bg-[#121517]"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full p-4 flex justify-between items-center text-left text-sm font-semibold text-slate-800 dark:text-white hover:bg-[#002a58]/5 dark:hover:bg-white/5 transition-all"
                        >
                          <span>{item.question}</span>
                          <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary dark:text-[#a9c7ff]' : 'text-slate-400'}`}>
                            keyboard_arrow_down
                          </span>
                        </button>
                        <div
                          className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-100 dark:border-slate-800' : 'max-h-0'}`}
                        >
                          <p className="p-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7" data-animate="fade-left">
              <div className="bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-[#002a58] to-blue-500 dark:from-[#a9c7ff] dark:to-white" />

                <h3 className="text-xl font-bold text-[#002a58] dark:text-white mb-1.5">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">
                  Fill out the secure form below. Mandatory fields are marked with <span className="text-red-500">*</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex justify-between">
                        <span>Full Name <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-[#181b1d] border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#002a58] dark:focus:border-[#a9c7ff] focus:ring-primary-fixed-dim'} focus:outline-none focus:ring-1 text-slate-800 dark:text-white transition-all`}
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-medium">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex justify-between">
                        <span>Email Address <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-[#181b1d] border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#002a58] dark:focus:border-[#a9c7ff] focus:ring-primary-fixed-dim'} focus:outline-none focus:ring-1 text-slate-800 dark:text-white transition-all`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-medium">{errors.email}</span>}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex justify-between">
                        <span>Phone Number <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-[#181b1d] border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#002a58] dark:focus:border-[#a9c7ff] focus:ring-primary-fixed-dim'} focus:outline-none focus:ring-1 text-slate-800 dark:text-white transition-all`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>}
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enterprise Pvt Ltd"
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200 dark:border-slate-800 focus:border-[#002a58] dark:focus:border-[#a9c7ff] focus:ring-1 focus:ring-primary-fixed-dim focus:outline-none text-slate-800 dark:text-white transition-all"
                      />
                    </div>

                  </div>

                  {/* Service dropdown select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Topic of Inquiry
                    </label>
                    <select
                      name="vertical"
                      value={formData.vertical}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-[#181b1d] border border-slate-200 dark:border-slate-800 focus:border-[#002a58] dark:focus:border-[#a9c7ff] focus:ring-1 focus:ring-primary-fixed-dim focus:outline-none text-slate-800 dark:text-white transition-all"
                    >
                      <option value="STEAM Education">S.T.E.A.M. Labs &amp; School Kits</option>
                      <option value="Construction Services">EPC, Civil Earthwork &amp; Engineering</option>
                      <option value="Manpower Solutions">Technical Recruitment &amp; Staffing</option>
                      <option value="IT Services">Hybrid Cloud, DevOps &amp; Integration</option>
                      <option value="Careers & HR">Careers &amp; HR (Job Seekers)</option>
                      <option value="General Corporate Inquiry">Other General Inquiries</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex justify-between">
                      <span>Subject <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Consulting RFP / Skilling Query"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-[#181b1d] border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#002a58] dark:focus:border-[#a9c7ff] focus:ring-primary-fixed-dim'} focus:outline-none focus:ring-1 text-slate-800 dark:text-white transition-all`}
                    />
                    {errors.subject && <span className="text-[10px] text-red-500 font-medium">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex justify-between">
                      <span>Message Details <span className="text-red-500">*</span></span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Please details your project scope, curriculum requirement, or recruitment volume..."
                      className={`w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-[#181b1d] border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#002a58] dark:focus:border-[#a9c7ff] focus:ring-primary-fixed-dim'} focus:outline-none focus:ring-1 text-slate-800 dark:text-white transition-all resize-none`}
                    />
                    {errors.message && <span className="text-[10px] text-red-500 font-medium">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-primary dark:bg-primary-fixed-dim text-white dark:text-[#001b3d] hover:bg-[#004080] dark:hover:bg-white hover:scale-[1.01] active:scale-[0.99] font-bold uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-label-sm tracking-wider disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Secure Inquiry</span>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Global Footprint Showcase Section (Enhancing UX with Vector World Map) */}
        <section className="py-12 max-w-[1280px] mx-auto px-gutter" data-animate="fade-up">
          <div className="bg-[#00152b] text-white rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Vector World Map as Section Graphic */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
              <WorldMapVector className="w-full h-full text-[#a9c7ff]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Section Title & Interactive Region Buttons */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#a9c7ff] font-bold">
                  GLOBAL FOOTPRINT &amp; REACH
                </span>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Connecting Industry &amp; Innovation Across Continents
                </h3>
                <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                  SmartBrains operates from our core Operations HQ in Noida, India, serving partner schools, infrastructure developers, and corporate enterprises across Asia-Pacific, the Middle East, and Europe.
                </p>

                {/* Region Selector Pills */}
                {/* <div className="pt-2 flex flex-wrap gap-2">
                  {Object.keys(globalRegions).map((regKey) => (
                    <button
                      key={regKey}
                      onClick={() => setActiveRegion(regKey)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                        activeRegion === regKey
                          ? "bg-[#a9c7ff] text-[#001b3d] shadow-md font-bold"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {regKey === "noida" ? "Noida HQ (India)" : regKey === "dubai" ? "Middle East" : regKey === "london" ? "Europe Hub" : "APAC Desk"}
                    </button>
                  ))}
                </div> */}
              </div>

              {/* Right Column: Selected Location Detail Card */}
              {/* <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#a9c7ff] px-2.5 py-0.5 rounded bg-white/10">
                      {globalRegions[activeRegion].status}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Office
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white">
                    {globalRegions[activeRegion].title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light">
                    {globalRegions[activeRegion].subtitle}
                  </p>

                  <div className="pt-2 border-t border-white/10 text-xs text-slate-200 space-y-1.5">
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#a9c7ff]">location_on</span>
                      <span>{globalRegions[activeRegion].address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#a9c7ff]">mail</span>
                      <a href={`mailto:${globalRegions[activeRegion].email}`} className="hover:underline">{globalRegions[activeRegion].email}</a>
                    </p>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </section>

        {/* Location Map Section */}
        <section className="pb-20 max-w-[1280px] mx-auto px-gutter" data-animate="fade-up">
          <div className="bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/40 p-4 rounded-3xl shadow-lg overflow-hidden h-[450px] relative group">

            {/* Map Frame Overlay */}
            <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-[#121517]/90 border border-slate-200/60 dark:border-slate-800/60 p-4 rounded-2xl shadow-lg backdrop-blur-md max-w-sm hidden sm:block">
              <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                SmartBrains Headquarters Location
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal font-light">
                A-25, Sector 59, Noida, Uttar Pradesh 201301. Visit our offices for custom demos of S.T.E.A.M. kits.
              </p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.764197086163!2d77.36771403484758!3d28.606850022976516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557e6cc86cb%3A0x508ab9aee5024096!2sSmartBrains%20Engineers%20and%20Technologist%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1781241568343!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>

        {/* Modal Success Prompt */}
        {submitSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-gutter bg-slate-900/60 backdrop-blur-md">
            <div className="bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center relative overflow-hidden transform animate-scale-up">
              <div className="absolute top-0 inset-x-0 h-[4px] bg-emerald-500" />

              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                Inquiry Logged Successfully!
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
                Thank you for contacting SmartBrains. A secure ticket has been generated. Our operations team or HR representatives will contact you shortly.
              </p>

              <button
                onClick={() => setSubmitSuccess(false)}
                className="w-full py-2.5 bg-primary dark:bg-primary-fixed-dim text-white dark:text-[#001b3d] hover:bg-[#004080] dark:hover:bg-white font-semibold rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </main>
    </>
  );
};

export default ContactUs;
