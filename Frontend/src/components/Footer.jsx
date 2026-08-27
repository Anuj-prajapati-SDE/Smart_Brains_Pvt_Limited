import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/footer_logo.png'

const Footer = () => {
  return ( 
    <footer className="w-full bg-gradient-to-br from-[#001c3d] via-[#002a58] to-[#001124] dark:from-[#080b0c] dark:via-[#191c1d] dark:to-[#0c0e0f] text-on-primary dark:text-surface-variant pt-10 pb-6 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-gutter w-full">
        
        {/* Top Header Section (Logo + Newsletter) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-white/10">
          <div className="max-w-md">
            <div className="flex items-center mb-2">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="SmartBrains Logo" className="h-8 w-auto object-contain drop-shadow-[0_0_1px_rgba(255,255,255,0.9)]" />
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 opacity-90 leading-relaxed">
              Bridging engineering precision with technical and staffing excellence. Empowering talent and enterprise growth.
            </p>
          </div>
          <div className="w-full lg:w-auto min-w-[280px] sm:min-w-[360px]">
            <h5 className="font-bold text-white text-xs tracking-widest uppercase mb-2">
              Subscribe to Updates
            </h5>
            <form className="flex w-full gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim w-full transition-all duration-300"
              />
              <button 
                type="submit" 
                className="bg-white text-primary hover:bg-[#a9c7ff] hover:text-[#002a58] font-bold uppercase text-[11px] tracking-wider px-3.5 py-2 rounded-lg flex items-center gap-1 transition-all duration-300 shrink-0"
              >
                <span>Subscribe</span>
                <span className="material-symbols-outlined text-[14px]">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Middle Columns Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6 text-xs sm:text-sm">
          
          {/* 1. Our Verticals Column */}
          <div>
            <h5 className="font-bold text-white mb-3 uppercase text-xs tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-6 after:h-[2px] after:bg-primary-fixed-dim">
              Our Verticals
            </h5>
            <ul className="space-y-1.5 mt-2">
              <li>
                <Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5" to="/it-services">
                  <span className="material-symbols-outlined text-[14px] text-[#a9c7ff]">devices</span>
                  IT &amp; ITeS Services
                </Link>
              </li>
              <li>
                <Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5" to="/staffing">
                  <span className="material-symbols-outlined text-[14px] text-[#a9c7ff]">group_add</span>
                  Technical Staffing
                </Link>
              </li>
              <li>
                <Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5" to="/skilling">
                  <span className="material-symbols-outlined text-[14px] text-[#a9c7ff]">school</span>
                  Skilling &amp; Training
                </Link>
              </li>
              <li>
                <Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5" to="/epc-oil-gas-energy">
                  <span className="material-symbols-outlined text-[14px] text-[#a9c7ff]">oil_barrel</span>
                  EPC &amp; Energy
                </Link>
              </li>
              <li>
                <Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5" to="/agritech-hydroponices">
                  <span className="material-symbols-outlined text-[14px] text-[#a9c7ff]">eco</span>
                  AgriTech &amp; CSR
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Quick Links Column */}
          <div>
            <h5 className="font-bold text-white mb-3 uppercase text-xs tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-6 after:h-[2px] after:bg-primary-fixed-dim">
              Quick Links
            </h5>
            <ul className="space-y-1.5 mt-2">
              <li>
                <Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5" to="/about">
                  <span className="material-symbols-outlined text-[14px] text-[#a9c7ff]">info</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5" to="/contact-us">
                  <span className="material-symbols-outlined text-[14px] text-[#a9c7ff]">contact_support</span>
                  Contact Us
                </Link>
              </li>
              <li>
                
              </li>
             
            </ul>
          </div>

          {/* 3. Address Column */}
          <div>
            <h5 className="font-bold text-white mb-3 uppercase text-xs tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-6 after:h-[2px] after:bg-primary-fixed-dim">
              Headquarters
            </h5>
            <div className="space-y-1.5 mt-2 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#a9c7ff] mt-0.5 flex-shrink-0">location_on</span>
                <span>A-25, Sector-59, Noida - 201301, U.P., India</span>
              </div>
              <p className="text-[11px] text-slate-400 pl-5">
                Pan-India &amp; Global Delivery Centers.
              </p>
            </div>
          </div>

          {/* 4. Contact Details Column */}
          <div>
            <h5 className="font-bold text-white mb-3 uppercase text-xs tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-6 after:h-[2px] after:bg-primary-fixed-dim">
              Contact Info
            </h5>
            <div className="space-y-1.5 mt-2 text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#a9c7ff] flex-shrink-0">phone</span>
                <a href="tel:+919891108002" className="hover:text-white transition-colors">+91 9891108002</a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#a9c7ff] flex-shrink-0">mail</span>
                <a href="mailto:info@smartbrains.in" className="hover:text-white transition-colors">info@smartbrains.in</a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#a9c7ff] flex-shrink-0">language</span>
                <a href="https://smartbrains.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.smartbrains.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section (Divider + Copyright + Socials) */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SmartBrains. All rights reserved.</p>
          
          <div className="flex items-center gap-2">
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#002a58] hover:bg-[#a9c7ff] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-[14px]">groups</span>
            </a>
            <a 
              href="mailto:info@smartbrains.in" 
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#002a58] hover:bg-[#a9c7ff] transition-all duration-300"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-[14px]">mail</span>
            </a>
            <a 
              href="https://smartbrains.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#002a58] hover:bg-[#a9c7ff] transition-all duration-300"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-[14px]">language</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer