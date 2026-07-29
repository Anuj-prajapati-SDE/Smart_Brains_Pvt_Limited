import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/footer_logo.png'
const Footer = () => {
  return ( 
    <footer className="w-full bg-gradient-to-br from-[#001c3d] via-[#002a58] to-[#001124] dark:from-[#080b0c] dark:via-[#191c1d] dark:to-[#0c0e0f] text-on-primary dark:text-surface-variant pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-gutter w-full">
        
        {/* Top Header Section (Logo + Newsletter) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-lg pb-10 border-b border-white/10">
          <div className="max-w-md">
            <div className="flex items-center gap-xs mb-sm">
             <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto object-contain drop-shadow-[0_0_1px_rgba(255,255,255,0.9)]" />
          </Link>
            </div>
            <p className="text-body-md text-slate-300 opacity-90 leading-relaxed">
              Bridging industrial engineering precision with academic excellence. Building infrastructure and empowering engineering talent for tomorrow.
            </p>
          </div>
          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[400px]">
            <h5 className="font-bold text-white text-label-sm tracking-widest uppercase mb-sm">
              Subscribe to Updates
            </h5>
            <form className="flex w-full gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border border-white/20 rounded-lg px-md py-sm text-body-md text-white placeholder-slate-400 focus:outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim w-full transition-all duration-300"
              />
              <button 
                type="submit" 
                className="bg-white text-primary hover:bg-white hover:scale-[1.03] active:scale-[0.98] font-bold uppercase text-label-sm tracking-wider px-md py-sm rounded-lg flex items-center gap-xs transition-all duration-300"
              >
                <span>Subscribe</span>
                <span className="material-symbols-outlined text-[16px] !align-middle">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Middle Columns Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg py-12">
          {/* Services Column */}
          <div>
            <h5 className="font-bold text-white mb-md uppercase text-label-sm tracking-widest relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-primary-fixed-dim">
              Our Verticals
            </h5>
            <ul className="space-y-sm mt-sm">
              <li>
                <Link
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-xs text-body-md"
                  to="/skilling"
                >
                  <span className="material-symbols-outlined text-[14px]">school</span>
                  Skilling Project
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-xs text-body-md"
                  to="/it-services"
                >
                  <span className="material-symbols-outlined text-[14px]">precision_manufacturing</span>
                 IT & ITES Services
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-xs text-body-md"
                  to="/business"
                >
                  <span className="material-symbols-outlined text-[14px]">groups</span>
                  Manpower Solutions
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h5 className="font-bold text-white mb-md uppercase text-label-sm tracking-widest relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-primary-fixed-dim">
              Quick Links
            </h5>
            <ul className="space-y-sm mt-sm">
              <li>
                <Link
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-xs text-body-md"
                  to="/about"
                >
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-xs text-body-md"
                  to="/business"
                >
                  <span className="material-symbols-outlined text-[14px]">handshake</span>
                  Partner With Us
                </Link>
              </li> */}
              <li>
                <Link
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-xs text-body-md"
                  to="/contact-us"
                >
                  <span className="material-symbols-outlined text-[14px]">contact_support</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h5 className="font-bold text-white mb-md uppercase text-label-sm tracking-widest relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-primary-fixed-dim">
              Headquarters
            </h5>
            <div className="space-y-sm mt-sm text-body-md text-slate-300">
              <div className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-fixed-dim mt-xs flex-shrink-0">location_on</span>
                <span className="leading-relaxed">A-25, Sector-59, Noida-201301, India</span>
              </div>
            </div>
          </div>

          {/* Contact Details Column */}
          <div>
            <h5 className="font-bold text-white mb-md uppercase text-label-sm tracking-widest relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-primary-fixed-dim">
              Contact Info
            </h5>
            <div className="space-y-sm mt-sm text-body-md text-slate-300">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-fixed-dim flex-shrink-0">phone</span>
                <span>
+91 9891108002</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-fixed-dim flex-shrink-0">mail</span>
                <a href="mailto:
info@smartbrains.com" className="hover:text-white transition-colors">
info@smartbrains.in</a>
              </div>
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-fixed-dim flex-shrink-0">language</span>
                <a href="https://smartbrains.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.smartbrains.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section (Divider + Copyright + Socials) */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-md text-center md:text-left">
          <div className="text-body-sm text-slate-400">
            <p>© 2026-27 SmartBrains. All rights reserved.</p>
          </div>
          
          {/* Circular Glassmorphic Social Buttons */}
          <div className="flex items-center gap-sm">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-primary hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-[18px]">groups</span>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-primary hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-primary hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-[18px]">language</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer