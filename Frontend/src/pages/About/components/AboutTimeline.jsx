import React, { useState } from "react";

// ─── Timeline data ───────────────────────────────────────────────────────────
const timelineEvents = [
  {
    year: "2009",
    title: "Foundation & Inception",
    desc: "SmartBrains was incorporated in Noida to bridge technical talent gaps and deliver high-caliber engineering solutions.",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    gradId: "grad-2009",
  },
  {
    year: "2013",
    title: "Workforce Expansion",
    desc: "Expanded across North India, establishing state-level vocational training centers and 50,000+ skilled talent pools.",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    gradId: "grad-2013",
  },
  {
    year: "2017",
    title: "Multi-Vertical Growth",
    desc: "Launched 6 core business divisions: EPC, IT & ITeS, Staffing, Solar, Hydroponics, and STEAM Education.",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    gradId: "grad-2017",
  },
  {
    year: "2020",
    title: "Pan-India Digital Reach",
    desc: "Pioneered STEAM labs, digital workforce management systems, and remote skilling across 20+ states in India.",
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    gradId: "grad-2020",
  },
  {
    year: "2023",
    title: "Green Energy & CSR",
    desc: "Rolled out Solar Energy EPC net-metering and AgriTech hydroponics setups to foster eco-sustainability.",
    iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    gradId: "grad-2023",
  },
  {
    year: "2026+",
    title: "Future Scale & Vision",
    desc: "Empowering 1.5 Lakh+ professionals and driving AI-powered industrial workforce transformation nationwide.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    gradId: "grad-2026",
  },
];

// ─── SVG Geometry (viewBox 1440 × 600) ──────────────────────────────────────
// Hub sits at bottom-left; fan spans upper-right region
const CX = 165;     // hub center X
const CY = 420;     // hub center Y
const R_HUB = 100;  // hub circle radius
const R_ARC = 280;  // arc (where dots & year labels live)
const R_INNER_CARD = 310; // where content cards start
const R_OUTER = 1500;     // fan tip (goes off-canvas right edge)

// 8 slices: top-grey  |  6 milestones  |  bottom-grey
const SLICES = [
  { type: "intro",     start: -110, end: -88,  mid: -99,  fill: "#1e293b" },
  { type: "milestone", start: -86,  end: -66,  mid: -76,  fill: "url(#grad-2009)", idx: 0 },
  { type: "milestone", start: -64,  end: -44,  mid: -54,  fill: "url(#grad-2013)", idx: 1 },
  { type: "milestone", start: -42,  end: -22,  mid: -32,  fill: "url(#grad-2017)", idx: 2 },
  { type: "milestone", start: -20,  end: 0,    mid: -10,  fill: "url(#grad-2020)", idx: 3 },
  { type: "milestone", start: 2,    end: 22,   mid: 12,   fill: "url(#grad-2023)", idx: 4 },
  { type: "milestone", start: 24,   end: 44,   mid: 34,   fill: "url(#grad-2026)", idx: 5 },
  { type: "outro",     start: 46,   end: 68,   mid: 57,   fill: "#334155" },
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

// Card placement: computed per slice in SVG space
// Each card is a foreignObject anchored at a point on the arc + offset
const CARD_W = 260;
const CARD_H = 110;

// ─── Component ───────────────────────────────────────────────────────────────
const AboutTimeline = () => {
  const [activeIdx, setActiveIdx] = useState(2); // default highlight: 2017

  return (
    <section className="py-10 md:py-14 w-full bg-gradient-to-b from-[#f8f9fa] via-white to-[#f8f9fa] dark:from-[#0c0e0f] dark:via-[#121517] dark:to-[#0c0e0f] border-b border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#002a58_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 text-[10px] font-extrabold uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] mb-2 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#002a58] dark:bg-[#a9c7ff] animate-pulse" />
            Empowering Progress Since 2009
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#002a58] dark:text-white uppercase tracking-tight leading-tight">
            Our Journey &amp; Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002a58] via-blue-600 to-[#a9c7ff] dark:from-[#a9c7ff] dark:to-white">
              Timeline
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#002a58] via-blue-500 to-[#a9c7ff] dark:from-[#a9c7ff] dark:to-white mx-auto mt-2.5 rounded-full" />
        </div>

        {/* ── Desktop: Full-width SVG infographic ────────────────────────── */}
        <div className="hidden lg:block w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 select-none">
          {/*
            viewBox = 1440 × 600
            All content — wedges, arc, dots, year labels, content cards — lives
            inside this single SVG so coordinates always match.
          */}
          <svg
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid meet"
            className="w-full"
            style={{ display: "block" }}
          >
            <defs>
              <linearGradient id="grad-2009" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#001c3d" /><stop offset="100%" stopColor="#004080" />
              </linearGradient>
              <linearGradient id="grad-2013" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="grad-2017" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0369a1" /><stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="grad-2020" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f766e" /><stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
              <linearGradient id="grad-2023" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#047857" /><stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="grad-2026" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#001c3d" /><stop offset="100%" stopColor="#002a58" />
              </linearGradient>
              <filter id="sliceShadow">
                <feDropShadow dx="-2" dy="3" stdDeviation="5" floodColor="#000" floodOpacity="0.55" />
              </filter>
              <filter id="cardShadow">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* ── Fan wedge slices ── */}
            {SLICES.map((sl, i) => {
              const active = sl.type === "milestone" && activeIdx === sl.idx;
              return (
                <path
                  key={i}
                  d={wedgePath(CX, CY, R_HUB, R_OUTER, sl.start, sl.end)}
                  fill={sl.fill}
                  stroke={active ? "#fff" : "#0f172a"}
                  strokeWidth={active ? 2.5 : 0.8}
                  filter="url(#sliceShadow)"
                  style={{ cursor: sl.type === "milestone" ? "pointer" : "default", transition: "filter .2s" }}
                  onClick={() => sl.type === "milestone" && setActiveIdx(sl.idx)}
                />
              );
            })}

            {/* ── Radial divider lines ── */}
            {SLICES.map((sl, i) => {
              const p1 = polar(CX, CY, R_HUB, sl.start);
              const p2 = polar(CX, CY, R_OUTER, sl.start);
              return (
                <line key={`ray-${i}`}
                  x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                  stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
              );
            })}

            {/* ── White arc line ── */}
            {(() => {
              const arcStart = polar(CX, CY, R_ARC, -110);
              const arcEnd   = polar(CX, CY, R_ARC, 68);
              return (
                <path
                  d={`M${arcStart.x} ${arcStart.y} A${R_ARC} ${R_ARC} 0 0 1 ${arcEnd.x} ${arcEnd.y}`}
                  fill="none" stroke="#fff" strokeWidth="2.2"
                />
              );
            })()}

            {/* ── Arc dots + year labels + content cards (all in SVG space) ── */}
            {SLICES.filter(sl => sl.type === "milestone").map((sl) => {
              const evt      = timelineEvents[sl.idx];
              const active   = activeIdx === sl.idx;
              const dot      = polar(CX, CY, R_ARC, sl.mid);
              const yearPt   = polar(CX, CY, R_ARC - 38, sl.mid);
              // Card anchor: a point further out along the mid-angle
              const cardAnchor = polar(CX, CY, R_INNER_CARD + 40, sl.mid);

              // Position card so it doesn't overlap hub
              // Shift card left by half width to center on anchor
              const cardX = cardAnchor.x - 10;
              const cardY = cardAnchor.y - CARD_H / 2;

              return (
                <g key={sl.idx} style={{ cursor: "pointer" }} onClick={() => setActiveIdx(sl.idx)}>
                  {/* Arc node dot */}
                  <circle
                    cx={dot.x} cy={dot.y}
                    r={active ? 9 : 5.5}
                    fill={active ? "#fff" : "#001c3d"}
                    stroke="#fff"
                    strokeWidth={active ? 3.5 : 1.5}
                    style={{ transition: "r .2s" }}
                  />

                  {/* Year label */}
                  <text
                    x={yearPt.x} y={yearPt.y + 5}
                    textAnchor="middle"
                    fontSize={active ? 20 : 16}
                    fontWeight="900"
                    fontFamily="monospace"
                    fill={active ? "#fbbf24" : "rgba(255,255,255,0.90)"}
                    style={{ textShadow: "0 2px 6px #000", transition: "font-size .2s" }}
                  >
                    {evt.year}
                  </text>

                  {/* Content card as foreignObject – lives in SVG space → always aligned */}
                  <foreignObject
                    x={cardX}
                    y={cardY}
                    width={CARD_W}
                    height={CARD_H}
                    style={{ overflow: "visible" }}
                  >
                    <div
                      style={{
                        background: active ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.40)",
                        border: active ? "1.5px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.10)",
                        borderRadius: "12px",
                        padding: "10px 12px",
                        width: `${CARD_W}px`,
                        boxSizing: "border-box",
                        backdropFilter: "blur(4px)",
                        transition: "background .2s",
                      }}
                    >
                      {/* Icon + title row */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                        <div style={{
                          width: 28, height: 28, flexShrink: 0,
                          background: "rgba(255,255,255,0.12)",
                          borderRadius: "7px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          border: "1px solid rgba(255,255,255,0.20)",
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="rgba(255,255,255,0.90)" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d={evt.iconPath} />
                          </svg>
                        </div>
                        <span style={{
                          fontSize: "11px", fontWeight: 800,
                          color: active ? "#fbbf24" : "#fff",
                          textTransform: "uppercase", letterSpacing: "0.06em",
                          lineHeight: 1.3,
                        }}>
                          {evt.title}
                        </span>
                      </div>
                      {/* Description */}
                      <p style={{
                        fontSize: "10.5px", color: "rgba(203,213,225,0.90)",
                        fontWeight: 300, lineHeight: 1.5, margin: 0,
                      }}>
                        {evt.desc}
                      </p>
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* ── Central hub circle ── */}
            <g>
              <circle cx={CX} cy={CY} r={R_HUB + 6} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
              <circle cx={CX} cy={CY} r={R_HUB} fill="#060810" stroke="#fff" strokeWidth="3.5" />
              <text x={CX} y={CY - 18} textAnchor="middle"
                fontSize="18" fontWeight="900" fill="#fff" letterSpacing="3">
                TIMELINE
              </text>
              <text x={CX} y={CY} textAnchor="middle"
                fontSize="9" fontWeight="400" fill="rgba(148,163,184,0.9)" letterSpacing="0.5">
                OUR EVOLUTION
              </text>
              <text x={CX} y={CY + 14} textAnchor="middle"
                fontSize="9" fontWeight="300" fill="rgba(148,163,184,0.75)">
                2009 — 2026+
              </text>
            </g>

            {/* ── DESCRIPTION 1 – top-left corner (intro slice) ── */}
            <foreignObject x="22" y="18" width="220" height="130">
              <div style={{
                color: "#94a3b8", fontSize: "10.5px", fontWeight: 300,
                lineHeight: 1.55, textAlign: "left",
              }}>
                <div style={{
                  fontSize: "10px", fontWeight: 800, color: "#cbd5e1",
                  textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: "4px",
                }}>
                  SmartBrains
                </div>
                Tech-enabled enterprise partner empowering engineering talent with sustainable, innovation-driven solutions across India.
              </div>
            </foreignObject>

            {/* ── DESCRIPTION 2 – bottom-left corner (outro slice) ── */}
            <foreignObject x="22" y="468" width="220" height="120">
              <div style={{
                color: "#94a3b8", fontSize: "10.5px", fontWeight: 300,
                lineHeight: 1.55, textAlign: "left",
              }}>
                <div style={{
                  fontSize: "10px", fontWeight: 800, color: "#cbd5e1",
                  textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: "4px",
                }}>
                  Vision 2030
                </div>
                Driving AI integration, green energy, and 1.5 Lakh+ skilled workforce footprint nationwide.
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* ── Mobile / Tablet fallback ────────────────────────────────────── */}
        <div className="lg:hidden space-y-5">
          {/* Year tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {timelineEvents.map((evt, idx) => (
              <button key={idx} onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-black font-mono shrink-0 transition-all ${activeIdx === idx
                  ? "bg-[#002a58] text-white shadow-md"
                  : "bg-white dark:bg-[#121517] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                }`}>
                {evt.year}
              </button>
            ))}
          </div>

          {/* Active card */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Milestone
              </span>
              <span className="text-2xl font-black font-mono text-amber-400">
                {timelineEvents[activeIdx].year}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1.5 uppercase tracking-wide">
              {timelineEvents[activeIdx].title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {timelineEvents[activeIdx].desc}
            </p>
          </div>

          {/* Full list */}
          <div className="space-y-2.5 pt-3 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] mb-3">
              All Milestones (2009 — 2026+)
            </h4>
            {timelineEvents.map((item, idx) => (
              <div key={idx} onClick={() => setActiveIdx(idx)}
                className={`p-3.5 rounded-xl cursor-pointer transition-all border ${activeIdx === idx
                  ? "bg-[#002a58] text-white border-[#002a58] shadow-lg"
                  : "bg-white dark:bg-[#121517] text-slate-800 dark:text-white border-slate-200 dark:border-slate-800 hover:border-slate-400"
                }`}>
                <div className="flex items-center justify-between mb-0.5">
                  <span className={`text-xs font-black font-mono ${activeIdx === idx ? "text-amber-300" : "text-[#002a58] dark:text-[#a9c7ff]"}`}>
                    {item.year}
                  </span>
                </div>
                <h5 className="text-xs font-bold uppercase">{item.title}</h5>
                <p className={`text-[11px] mt-0.5 font-light ${activeIdx === idx ? "text-slate-200" : "text-slate-500 dark:text-slate-400"}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTimeline;
