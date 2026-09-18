import React, { useState } from "react";

// ─── Timeline data with brand-aligned content ──────────────────────────────
const timelineEvents = [
  {
    year: "2009",
    title: "Foundation & Inception",
    tag: "INCORPORATION IN NOIDA",
    desc: "SmartBrains was established in Noida to bridge critical engineering talent gaps and deliver premier technical solutions.",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2013",
    title: "EPC Projects & Staffing",
    tag: "NORTH INDIA EXPANSION",
    desc: "Expanded vocational training network across North India, building a 50,000+ skilled engineering talent pipeline.",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2017",
    title: "Govt. Skilling - PMKVY",
    tag: "6 BUSINESS DIVISIONS",
    desc: "Diversified into 6 core divisions: EPC, IT & ITeS, Technical Staffing, Solar EPC, Hydroponics, and STEAM.",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2020",
    title: "Govt. Skilling - PMKVY | DDUGKY | PM VIKAS | Skill India",
    tag: "20+ STATES NETWORK",
    desc: "Scaled STEAM labs, modern digital workforce platforms, and remote skilling models across 20+ Indian states.",
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "IT Staffing & Payrolling- HCL, ",
    tag: "SOLAR EPC & AGRITECH",
    desc: "Accelerated Solar EPC net-metering projects and state-of-the-art commercial Hydroponics AgriTech setups.",
    iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    image: "https://media.istockphoto.com/id/1291751221/photo/the-sales-department-scores-again.webp?a=1&b=1&s=612x612&w=0&k=20&c=eLEEzx6Bt0-Y3Cj2QKudklHo9sBd4vzXO4Fvt9eLzjk=",
  },
  {
    year: "2026",
    title: "Infra & Data Centers Projects",
    tag: "1.5L+ WORKFORCE VISION",
    desc: "Empowering 1.5 Lakh+ professionals with AI-enabled industrial workforce skilling and nationwide execution.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  },
];

// ─── SVG Geometry (viewBox 1100 × 680) ──────────────────────────────────────
const CX = 100;       // hub center X
const CY = 345;       // hub center Y
const R_HUB = 98;     // increased hub circle radius
const R_ARC = 195;    // arc radius
const R_OUTER = 1200; // fan tip

// Precise non-overlapping coordinates with guaranteed vertical spacing between cards
const CARD_W = 300;
const CARD_H = 80;

const SLICES = [
  { type: "milestone", start: -84, end: -58, mid: -71, fill: "url(#sb-slice-0)", idx: 0, cardX: 180, cardY: 22 },
  { type: "milestone", start: -56, end: -34, mid: -45, fill: "url(#sb-slice-1)", idx: 1, cardX: 310, cardY: 118 },
  { type: "milestone", start: -32, end: -10, mid: -21, fill: "url(#sb-slice-2)", idx: 2, cardX: 400, cardY: 214 },
  { type: "milestone", start: -8, end: 14, mid: 3, fill: "url(#sb-slice-3)", idx: 3, cardX: 430, cardY: 310 },
  { type: "milestone", start: 16, end: 38, mid: 27, fill: "url(#sb-slice-4)", idx: 4, cardX: 390, cardY: 406 },
  { type: "milestone", start: 40, end: 66, mid: 53, fill: "url(#sb-slice-5)", idx: 5, cardX: 280, cardY: 502 },
  { type: "outro", start: 68, end: 84, mid: 76, fill: "#001c3d" },
];

function toRad(deg) { return (deg * Math.PI) / 180; }

function polar(cx, cy, r, deg) {
  return { x: cx + r * Math.cos(toRad(deg)), y: cy + r * Math.sin(toRad(deg)) };
}

function wedgePath(cx, cy, rIn, rOut, a0, a1) {
  const p1 = polar(cx, cy, rIn, a0);
  const p2 = polar(cx, cy, rOut, a0);
  const p3 = polar(cx, cy, rOut, a1);
  const p4 = polar(cx, cy, rIn, a1);
  const large = a1 - a0 <= 180 ? "0" : "1";
  return `M${p1.x} ${p1.y} L${p2.x} ${p2.y} A${rOut} ${rOut} 0 ${large} 1 ${p3.x} ${p3.y} L${p4.x} ${p4.y} A${rIn} ${rIn} 0 ${large} 0 ${p1.x} ${p1.y}Z`;
}

const AboutTimeline = () => {
  const [activeIdx, setActiveIdx] = useState(2); // default highlight: 2017

  return (
    <section className="py-12 md:py-16 w-full bg-[#f8f9fa] dark:bg-[#0a0d10] border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Subtle brand grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#002a58_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#002a58] dark:bg-[#a9c7ff] animate-pulse" />
            SmartBrains Evolution &amp; Milestones
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002a58] dark:text-white uppercase tracking-tight leading-tight">
            Our Journey &amp; Growth
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#002a58] via-blue-600 to-[#a9c7ff] dark:from-[#a9c7ff] dark:to-white mx-auto mt-3 rounded-full" />
        </div>

        {/* ── Main Layout: Perfectly Aligned 2-Column Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* ── LEFT COLUMN: Interactive Timeline Dashboard (col-span-7) ── */}
          <div className="lg:col-span-7 flex flex-col h-full">

            {/* Interactive Dashboard Card (Clean White Surface with Brand Accents) */}
            <div className="flex flex-col h-full w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0e0f] select-none relative transition-all duration-300">

              {/* Header Bar */}
              <div className="px-4 sm:px-6 py-3.5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 z-20">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#002a58] dark:text-[#a9c7ff]">
                    Milestone Matrix (2009 — 2026+)
                  </span>
                </div>
              </div>

              {/* Central SVG Canvas with Clean Backdrop */}
              <div className="flex-1 w-full flex items-center justify-center p-0 relative overflow-hidden bg-slate-50 dark:bg-[#090d14]">

                {/* Background Ambient Active Era Image */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    key={activeIdx}
                    src={timelineEvents[activeIdx].image}
                    alt={timelineEvents[activeIdx].title}
                    className="w-full h-full object-cover object-center opacity-10 dark:opacity-20 filter saturate-150 transition-all duration-700 ease-out scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/60 to-transparent dark:from-[#090d14]/90 dark:via-[#090d14]/75 dark:to-transparent" />
                </div>

                <svg
                  viewBox="0 0 1100 680"
                  preserveAspectRatio="xMidYMid meet"
                  className="w-full h-full relative z-10"
                  style={{ display: "block" }}
                >
                  <defs>
                    {/* Vibrant SmartBrains Navy & Royal Gradients */}
                    <linearGradient id="sb-slice-0" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#001834" /><stop offset="100%" stopColor="#002a58" />
                    </linearGradient>
                    <linearGradient id="sb-slice-1" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#002046" /><stop offset="100%" stopColor="#003b7a" />
                    </linearGradient>
                    <linearGradient id="sb-slice-2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#002c60" /><stop offset="100%" stopColor="#004d9c" />
                    </linearGradient>
                    <linearGradient id="sb-slice-3" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#003778" /><stop offset="100%" stopColor="#005ec0" />
                    </linearGradient>
                    <linearGradient id="sb-slice-4" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00418c" /><stop offset="100%" stopColor="#0070e6" />
                    </linearGradient>
                    <linearGradient id="sb-slice-5" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#002654" /><stop offset="100%" stopColor="#00458e" />
                    </linearGradient>

                    {/* SVG Image Patterns for Active Wedge Backgrounds */}
                    {timelineEvents.map((evt, idx) => (
                      <pattern
                        key={`slice-pat-${idx}`}
                        id={`sb-slice-img-${idx}`}
                        patternUnits="userSpaceOnUse"
                        width="1100"
                        height="680"
                      >
                        <image
                          href={evt.image}
                          x="0"
                          y="0"
                          width="1100"
                          height="680"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    ))}
                  </defs>

                  {/* ── Fan wedge slices (Hover + Click) ── */}
                  {SLICES.map((sl, i) => {
                    const active = sl.type === "milestone" && activeIdx === sl.idx;
                    return (
                      <g key={`slice-grp-${i}`}>
                        {/* Base Wedge with Gradient */}
                        <path
                          d={wedgePath(CX, CY, R_HUB, R_OUTER, sl.start, sl.end)}
                          fill={sl.fill}
                          stroke={active ? "#ffffff" : "rgba(255,255,255,0.25)"}
                          strokeWidth={active ? 2.5 : 1.2}
                          style={{
                            cursor: sl.type === "milestone" ? "pointer" : "default",
                            transition: "all .25s ease",
                            opacity: sl.type === "milestone" && !active ? 0.94 : 1,
                          }}
                          onClick={() => sl.type === "milestone" && setActiveIdx(sl.idx)}
                          onMouseEnter={() => sl.type === "milestone" && setActiveIdx(sl.idx)}
                        />

                        {/* Active Wedge Image Texture Overlay */}
                        {active && (
                          <path
                            d={wedgePath(CX, CY, R_HUB, R_OUTER, sl.start, sl.end)}
                            fill={`url(#sb-slice-img-${sl.idx})`}
                            opacity="0.25"
                            style={{
                              pointerEvents: "none",
                              mixBlendMode: "luminosity",
                              transition: "opacity .3s ease",
                            }}
                          />
                        )}
                      </g>
                    );
                  })}

                  {/* ── Radial divider lines ── */}
                  {SLICES.map((sl, i) => {
                    const p1 = polar(CX, CY, R_HUB, sl.start);
                    const p2 = polar(CX, CY, R_OUTER, sl.start);
                    return (
                      <line
                        key={`ray-${i}`}
                        x1={p1.x}
                        y1={p1.y}
                        x2={p2.x}
                        y2={p2.y}
                        stroke="#ffffff"
                        strokeWidth="1.8"
                      />
                    );
                  })}

                  {/* ── Clean white connecting arc line ── */}
                  {(() => {
                    const arcStart = polar(CX, CY, R_ARC, -84);
                    const arcEnd = polar(CX, CY, R_ARC, 66);
                    return (
                      <path
                        d={`M${arcStart.x} ${arcStart.y} A${R_ARC} ${R_ARC} 0 0 1 ${arcEnd.x} ${arcEnd.y}`}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    );
                  })()}

                  {/* ── Arc dots + year labels + content cards (Hover + Click) ── */}
                  {SLICES.filter(sl => sl.type === "milestone").map((sl) => {
                    const evt = timelineEvents[sl.idx];
                    const active = activeIdx === sl.idx;
                    const dot = polar(CX, CY, R_ARC, sl.mid);
                    const yearPt = polar(CX, CY, R_ARC - 38, sl.mid);

                    return (
                      <g
                        key={sl.idx}
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveIdx(sl.idx)}
                        onMouseEnter={() => setActiveIdx(sl.idx)}
                      >
                        {/* Active glow pulse ring on arc */}
                        {active && (
                          <circle
                            cx={dot.x}
                            cy={dot.y}
                            r={14}
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth={2.5}
                            opacity={0.85}
                          />
                        )}

                        {/* Arc node dot */}
                        <circle
                          cx={dot.x}
                          cy={dot.y}
                          r={active ? 8 : 5.5}
                          fill={active ? "#ffffff" : "#002a58"}
                          stroke="#ffffff"
                          strokeWidth={active ? 3 : 1.5}
                          style={{ transition: "all .2s ease" }}
                        />

                        {/* Year label */}
                        <text
                          x={yearPt.x}
                          y={yearPt.y + 4}
                          textAnchor="middle"
                          fontSize={active ? 16 : 13}
                          fontWeight="900"
                          fontFamily="monospace"
                          fill={active ? "#ffffff" : "rgba(255,255,255,0.92)"}
                          style={{
                            textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                            transition: "all .2s ease",
                          }}
                        >
                          {evt.year}
                        </text>

                        {/* Content card with clean white theme & navy highlights */}
                        <foreignObject
                          x={sl.cardX}
                          y={sl.cardY}
                          width={CARD_W}
                          height={CARD_H}
                          style={{ overflow: "visible" }}
                        >
                          <div
                            style={{
                              background: active
                                ? `linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)), url("${evt.image}") center/cover`
                                : "#ffffff",
                              border: active
                                ? "2.5px solid #002a58"
                                : "1.5px solid rgba(0, 42, 88, 0.16)",
                              borderRadius: "12px",
                              padding: "7px 12px",
                              width: `${CARD_W}px`,
                              height: `${CARD_H}px`,
                              boxSizing: "border-box",
                              boxShadow: active
                                ? "0 14px 30px -4px rgba(0, 42, 88, 0.35), 0 4px 10px rgba(0,0,0,0.08)"
                                : "0 4px 14px -2px rgba(0, 42, 88, 0.10)",
                              transform: active ? "scale(1.03)" : "scale(1)",
                              transition: "all .25s cubic-bezier(0.4, 0, 0.2, 1)",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            {/* Icon + Title + Year Badge */}
                            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "4px" }}>
                              <div
                                style={{
                                  width: 22,
                                  height: 22,
                                  flexShrink: 0,
                                  background: active ? "#002a58" : "#eef2f6",
                                  color: active ? "#ffffff" : "#002a58",
                                  borderRadius: "6px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  transition: "all .2s ease",
                                }}
                              >
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d={evt.iconPath} />
                                </svg>
                              </div>

                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    color: "#002a58",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.02em",
                                    lineHeight: 1.15,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {evt.title}
                                </div>
                              </div>

                              <span
                                style={{
                                  fontSize: "10px",
                                  fontWeight: 800,
                                  fontFamily: "monospace",
                                  padding: "1px 5px",
                                  borderRadius: "4px",
                                  background: active ? "#e0edff" : "#f1f5f9",
                                  color: "#002a58",
                                  flexShrink: 0,
                                }}
                              >
                                {evt.year}
                              </span>
                            </div>

                            {/* Description */}
                            {/* <p
                              style={{
                                fontSize: "10px",
                                color: "#334155",
                                fontWeight: 500,
                                lineHeight: 1.35,
                                margin: 0,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {evt.desc}
                            </p> */}
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* ── Central hub circle ── */}
                  <g>
                    <circle cx={CX} cy={CY} r={R_HUB + 5} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <circle cx={CX} cy={CY} r={R_HUB} fill="#002a58" stroke="#ffffff" strokeWidth="3" />
                    <text
                      x={CX}
                      y={CY - 6}
                      textAnchor="middle"
                      fontSize="17"
                      fontWeight="900"
                      fill="#ffffff"
                      letterSpacing="3"
                    >
                      TIMELINE
                    </text>
                    <text
                      x={CX}
                      y={CY + 14}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="800"
                      fill="#a9c7ff"
                      letterSpacing="1.5"
                    >
                      SMARTBRAINS
                    </text>
                  </g>

                </svg>
              </div>

              {/* Bottom Guidance Bar */}
              <div className="px-4 sm:px-6 py-3 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#002a58] dark:text-[#a9c7ff] font-bold">✦</span> 
                </span>
                <span className="font-mono text-[#002a58] dark:text-[#a9c7ff] text-xs font-bold tracking-wider">15+ YEARS OF EXCELLENCE</span>
              </div>

            </div>

          </div>

          {/* ── RIGHT COLUMN: Company Story & Interactive Deep Dive (col-span-5) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white dark:bg-[#0f172a] p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,42,88,0.07)] dark:shadow-2xl relative overflow-hidden transition-all duration-300">

            <div className="relative z-10 space-y-4">
              {/* Header Title */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff]">
                  Company Journey & Growth
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#002a58] dark:text-white mt-1 leading-snug">
                  Building a Legacy of Technical Excellence
                </h3>
              </div>

              {/* Story Copy */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  Established in <strong className="text-[#002a58] dark:text-white font-semibold">2009 in Noida</strong>, SmartBrains was founded to bridge critical engineering talent gaps and deliver high-caliber technical solutions to rapidly evolving industries across India.
                </p>
                <p>
                  Over the past decade and a half, our journey has expanded into <strong className="text-[#002a58] dark:text-white font-semibold">6 core business divisions</strong> — EPC, IT & ITeS, Technical Staffing, Solar Energy EPC, Hydroponics AgriTech, and STEAM Education.
                </p>
                <p>
                  With a pan-India footprint active across <strong className="text-[#002a58] dark:text-white font-semibold">20+ states</strong> and over <strong className="text-[#002a58] dark:text-white font-semibold">1,50,000+ skilled professionals</strong>, SmartBrains continues to pioneer workforce transformation and sustainable green technologies.
                </p>
              </div>

              {/* Selected Milestone Spotlight Box */}
              {/* <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-br from-[#002a58] via-[#003875] to-[#001c3d] text-white shadow-lg relative overflow-hidden transition-all duration-300">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                    Era Spotlight • {timelineEvents[activeIdx].tag}
                  </span>
                  <span className="text-base sm:text-lg font-black font-mono text-amber-300">
                    {timelineEvents[activeIdx].year}
                  </span>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-1">
                  {timelineEvents[activeIdx].title}
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed font-light">
                  {timelineEvents[activeIdx].desc}
                </p>
              </div> */}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutTimeline;
