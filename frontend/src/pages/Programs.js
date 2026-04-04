/**
 * Programs — Mission Operations Center
 */

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { programs } from "../data/mockData";

/* ── Constants ────────────────────────────────────────────────────────────── */

const ACCENT = "#3b82f6";
const DARK = "#07080b";

const PHASE_DATA = [
  {
    code: "PH-01",
    label: "Discovery",
    status: "INITIATED",
    desc: "Mission objectives, terrain parameters, regulatory context, and operational constraints are assessed and classified.",
  },
  {
    code: "PH-02",
    label: "Planning",
    status: "ROUTING",
    desc: "Flight corridors, sensor configurations, airspace clearances, and mission risk registers are compiled and finalised.",
  },
  {
    code: "PH-03",
    label: "Deployment",
    status: "EXECUTING",
    desc: "Certified crews execute the program with live telemetry streams, on-site engineering support, and continuous data validation.",
  },
  {
    code: "PH-04",
    label: "Validation",
    status: "VERIFYING",
    desc: "All data outputs are cross-referenced against mission success criteria and KPIs established during the scoping phase.",
  },
  {
    code: "PH-05",
    label: "Scale",
    status: "CLEARED",
    desc: "Validated programs transition to recurring deployment cycles or fleet-scale operations under established mission agreements.",
  },
];

const PROGRAM_VISUALS = [
  {
    src: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1400&q=80",
    filter: "contrast(1.2) saturate(0.7) brightness(0.75)",
  },
  {
    src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=80",
    filter: "contrast(1.2) saturate(0.7) brightness(0.72)",
  },
  {
    src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1400&q=80",
    filter: "contrast(1.25) saturate(0.65) brightness(0.7)",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    filter: "contrast(1.15) saturate(0.72) brightness(0.68)",
  },
];

const PROGRAM_IMAGE_BY_ID = {
  medical: {
    src: "/mdrone.png",
    filter: "contrast(1.28) saturate(0.72) brightness(0.78)",
  },
};

const METRICS = [
  { value: "6", label: "Spec Sheet Modules" },
  { value: "2", label: "Control Layers" },
  { value: "4", label: "Primary UAV Classes" },
  { value: "1", label: "Unified Documentation Standard" },
];

const MISSION_LOGS = [
  {
    id: "LOG-001",
    sector: "VTOL",
    quote:
      "The new spec structure clearly separated platform, hardware, software, and certification expectations for deployment planning.",
    attr: "Program Architect, Healthcare Logistics",
  },
  {
    id: "LOG-002",
    sector: "SURVEY",
    quote:
      "Fixed-wing and FPV spec lines are now easier to review as standalone modules with mission-specific capabilities.",
    attr: "Operations Manager, Survey Partner",
  },
  {
    id: "LOG-003",
    sector: "AIC2",
    quote:
      "NeuroFC controller specs now map directly to autonomous decision and telemetry requirements in one place.",
    attr: "Systems Lead, Autonomy Integration Partner",
  },
];

const POST_PILOT = [
  {
    code: "SP-01",
    title: "Platform Baseline",
    desc: "Start with one of the four UAV platform classes and lock mission constraints against the approved spec values.",
  },
  {
    code: "SP-02",
    title: "Autonomy Baseline",
    desc: "Map NeuroFC compute, sensor, and telemetry requirements to autonomous behavior and control expectations.",
  },
  {
    code: "SP-03",
    title: "Compliance Track",
    desc: "Attach DGCA compliance-ready and BVLOS testing-phase notes as a mandatory deployment checklist.",
  },
  {
    code: "SP-04",
    title: "Sustainment Track",
    desc: "Define spare-parts and accessory continuity to maintain modular replacement and operational uptime.",
  },
];

const SUPPORT_PILLARS = [
  {
    code: "RS-01",
    title: "Spec Governance",
    desc: "Each program references one shared spec-sheet schema so teams evaluate the same technical baseline.",
  },
  {
    code: "RS-02",
    title: "Certification Readiness",
    desc: "DGCA readiness and BVLOS testing notes are attached as standard compliance guidance in every module.",
  },
  {
    code: "RS-03",
    title: "NeuroFC Control Layer",
    desc: "AI controller requirements are defined with processor, sensor, and telemetry expectations for deployment consistency.",
  },
  {
    code: "RS-04",
    title: "Spares Continuity",
    desc: "Accessory and replacement-part planning is documented to preserve uptime across all Hovernest platforms.",
  },
];

/* ── Utilities ────────────────────────────────────────────────────────────── */

function useReveal(margin = "-60px") {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

function CountUp({ target, suffix = "" }) {
  const [display, setDisplay] = useState("0");
  const { ref, inView } = useReveal();
  const numericPart = Number.parseFloat(target.replaceAll(/[^0-9.]/g, "")) || 0;
  const prefix = target.match(/^\D*/)?.[0] || "";
  const trailSuffix = target.replaceAll(/^\D*[0-9.,]+/g, "") + suffix;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numericPart, {
      duration: 1.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => {
        setDisplay(
          Number.isInteger(numericPart)
            ? Math.floor(v).toLocaleString()
            : v.toFixed(1),
        );
      },
    });
    return controls.stop;
  }, [inView, numericPart]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {trailSuffix}
    </span>
  );
}

CountUp.propTypes = {
  target: PropTypes.string.isRequired,
  suffix: PropTypes.string,
};

/* ── Shared Visual Components ─────────────────────────────────────────────── */

function TelemetryGrid({ opacity = 0.035, className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="tgrid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#6b8cba"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tgrid)" />
      </svg>
    </div>
  );
}

TelemetryGrid.propTypes = {
  opacity: PropTypes.number,
  className: PropTypes.string,
};

function ScanlineDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <div className="h-px flex-1 bg-current opacity-15" />
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((step) => (
          <div
            key={`scan-${step}`}
            className="h-1 w-px bg-current opacity-30"
            style={{ opacity: 0.1 + step * 0.06 }}
          />
        ))}
      </div>
      <div className="h-px w-8 bg-current opacity-30" />
    </div>
  );
}

ScanlineDivider.propTypes = {
  className: PropTypes.string,
};

function StatusPip({ active = false }) {
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: active ? "#34d399" : "#475569" }}
      animate={active ? { opacity: [0.5, 1, 0.5] } : {}}
      transition={
        active ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" } : {}
      }
    />
  );
}

StatusPip.propTypes = {
  active: PropTypes.bool,
};

function RevealMask({ children, className = "", delay = 0 }) {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

RevealMask.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

function FadeIn({ children, className = "", delay = 0, y = 20 }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
};

/* ── Hero Section ─────────────────────────────────────────────────────────── */

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  const coords = [
    { x: "14%", y: "28%", id: "MK-7" },
    { x: "62%", y: "44%", id: "MK-2" },
    { x: "80%", y: "22%", id: "MK-5" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: DARK }}
    >
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src="/vtol.jpeg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.22, filter: "contrast(1.1) saturate(0.6)" }}
        />
      </motion.div>

      {/* Base overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080b]/80 via-transparent to-transparent" />
      <TelemetryGrid opacity={0.04} />

      {/* Telemetry markers */}
      {coords.map((m, i) => (
        <motion.div
          key={m.id}
          className="absolute"
          style={{ left: m.x, top: m.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0.4] }}
          transition={{
            duration: 1.2,
            delay: 1 + i * 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 3,
          }}
        >
          <div className="relative flex items-center gap-2">
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            <motion.div
              className="absolute h-4 w-4 rounded-full border"
              style={{ borderColor: ACCENT, top: "-5px", left: "-5px" }}
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.5 }}
            />
            <span
              className="text-sm font-mono tracking-widest"
              style={{ color: ACCENT, opacity: 0.6 }}
            >
              {m.id}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Horizontal telemetry lines */}
      {[22, 55, 78].map((pct, i) => (
        <motion.div
          key={`line-${pct}`}
          className="absolute left-0 right-0 h-px"
          style={{ top: `${pct}%`, opacity: 0.04 + i * 0.01 }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.3 + i * 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="h-px w-full bg-white" />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{
          y: textY,
          minHeight: "100vh",
          paddingTop: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pb-20 md:pb-28"
      >
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <p
              className="mb-6 text-sm font-mono tracking-[0.28em] uppercase"
              style={{ color: ACCENT, opacity: 0.8 }}
            >
              Spec Sheets · Documentation Division
            </p>
          </FadeIn>

          <RevealMask delay={0.2}>
            <h1
              className="font-black leading-[0.92] tracking-[-0.02em] text-white uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3.2rem, 8vw, 7rem)",
              }}
            >
              From Design Tables to 
              <br />
              <span style={{ color: ACCENT }}>Mission Skies.</span>
            </h1>
          </RevealMask>

          <FadeIn delay={0.5} className="mt-6 max-w-[52ch]">
            <p
              className="text-base text-slate-400 leading-[1.85] font-light"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Spec-sheet modules engineered around your operational environment.
              We map platform, autonomy, compliance, and sustainment
              requirements into one deployment-ready documentation flow.
            </p>
          </FadeIn>

          <FadeIn delay={0.65} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact?type=program"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-base font-bold uppercase tracking-[0.14em] text-white transition-opacity duration-200 hover:opacity-80"
              style={{ backgroundColor: ACCENT }}
            >
              Request Spec Review
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/programs#program-overview"
              className="inline-flex items-center gap-2.5 border border-white/15 px-6 py-3 text-base font-bold uppercase tracking-[0.14em] text-slate-400 hover:border-white/30 hover:text-slate-200 transition-colors duration-200"
            >
              Program Overview
            </Link>
          </FadeIn>
        </div>

        {/* Metrics band */}
        <FadeIn delay={0.8} className="mt-16 pt-8 border-t border-white/8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {METRICS.map((m) => (
              <div key={m.label}>
                <p
                  className="text-3xl font-black text-white tabular-nums"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  <CountUp target={m.value} />
                </p>
                <p className="mt-1 text-sm font-mono tracking-[0.2em] text-slate-600 uppercase">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]" aria-hidden>
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8"
          preserveAspectRatio="none"
        >
          <path d="M0 32 C480 0 960 32 1440 0 L1440 32 Z" fill="#f5f6f8" />
        </svg>
      </div>
    </section>
  );
}

/* ── Mission Timeline ──────────────────────────────────────────────────────── */

function MissionTimeline() {
  return (
    <section className="bg-[#f5f6f8] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <FadeIn className="mb-16">
          <p
            className="mb-3 text-sm font-mono tracking-[0.28em] uppercase"
            style={{ color: ACCENT }}
          >
            Mission Sequence
          </p>
          <h2
            className="text-4xl font-black uppercase tracking-[-0.01em] text-slate-900 md:text-5xl leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Five Phases to
            <br />
            Operational Readiness
          </h2>
        </FadeIn>

        {/* Desktop command flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress rail */}
            <div
              className="absolute top-5 left-0 right-0 h-px bg-slate-200"
              aria-hidden
            />
            <motion.div
              className="absolute top-5 left-0 h-px"
              style={{ backgroundColor: ACCENT, opacity: 0.35 }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
              aria-hidden
            />

            <div className="grid grid-cols-5">
              {PHASE_DATA.map((phase, i) => (
                <FadeIn
                  key={phase.code}
                  delay={i * 0.1}
                  className="flex flex-col pt-0 px-5"
                >
                  {/* Node */}
                  <div className="relative z-10 mb-5">
                    <div
                      className="h-10 w-10 border flex items-center justify-center"
                      style={{
                        borderColor: i === 2 ? ACCENT : "#cbd5e1",
                        backgroundColor: "#f5f6f8",
                      }}
                    >
                      <span
                        className="text-sm font-black"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          color: i === 2 ? ACCENT : "#94a3b8",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <p
                    className="mb-0.5 text-sm font-mono tracking-[0.2em] uppercase"
                    style={{ color: i === 2 ? ACCENT : "#94a3b8" }}
                  >
                    {phase.status}
                  </p>
                  <p
                    className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-900"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {phase.label}
                  </p>
                  <p className="text-base text-slate-500 leading-[1.7]">
                    {phase.desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stack */}
        <div className="lg:hidden">
          {PHASE_DATA.map((phase, i) => (
            <FadeIn
              key={phase.code}
              delay={i * 0.08}
              className="flex gap-5 py-6 border-b border-slate-200 last:border-0"
            >
              <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-1">
                <div
                  className="h-8 w-8 border flex items-center justify-center"
                  style={{ borderColor: i === 2 ? ACCENT : "#cbd5e1" }}
                >
                  <span
                    className="text-sm font-black"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: i === 2 ? ACCENT : "#94a3b8",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {i < PHASE_DATA.length - 1 && (
                  <div className="flex-1 w-px bg-slate-200 mt-1" />
                )}
              </div>
              <div className="pb-2">
                <p
                  className="mb-0.5 text-sm font-mono tracking-[0.2em] uppercase"
                  style={{ color: i === 2 ? ACCENT : "#94a3b8" }}
                >
                  {phase.status}
                </p>
                <p
                  className="mb-1.5 text-sm font-bold uppercase tracking-wide text-slate-900"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {phase.label}
                </p>
                <p className="text-base text-slate-500 leading-[1.7]">
                  {phase.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Program Module ───────────────────────────────────────────────────────── */

function ProgramModule({ program, index }) {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  const visual =
    PROGRAM_IMAGE_BY_ID[program.id] ??
    PROGRAM_VISUALS[index % PROGRAM_VISUALS.length];
  const isEven = index % 2 === 0;

  return (
    <article className="border-b border-slate-100 last:border-0">
      <div
        className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}`}
      >
        {/* Image panel */}
        <div
          ref={imgRef}
          className="relative overflow-hidden bg-[#0d1117]"
          style={{ minHeight: "480px" }}
        >
          <motion.img
            src={visual.src}
            alt={program.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ scale: imgScale, filter: visual.filter }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/90 via-[#07080b]/20 to-transparent" />
          <TelemetryGrid opacity={0.03} />

          {/* Program identifier */}
          <div className="absolute top-5 left-5">
            <div className="flex items-center gap-2 border border-white/10 bg-black/30 backdrop-blur-sm px-3 py-1.5">
              <StatusPip active />
              <span
                className="text-sm font-mono tracking-[0.2em] text-white/50 uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {program.id?.toUpperCase() ?? `PROG-0${index + 1}`}
              </span>
            </div>
          </div>

          {/* Sector label bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 bg-gradient-to-t from-[#07080b] to-transparent">
            <p className="text-sm font-mono tracking-[0.22em] text-slate-600 uppercase mb-1">
              Active Program
            </p>
          </div>
        </div>

        {/* Content panel */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-12 lg:py-20 bg-white">
          <FadeIn>
            <p
              className="mb-4 text-sm font-mono tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Spec Documentation
            </p>
          </FadeIn>

          <RevealMask>
            <h2
              className="font-black uppercase leading-[0.94] tracking-[-0.01em] text-slate-900"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              {program.title}
            </h2>
          </RevealMask>

          <FadeIn delay={0.1} className="mt-4 mb-8 max-w-[50ch]">
            <p className="text-base text-slate-500 leading-[1.8]">
              {program.description}
            </p>
          </FadeIn>

          {/* Outcomes */}
          <FadeIn delay={0.15}>
            <div className="border-t border-slate-100 pt-5 mb-6">
              <p className="mb-4 text-sm font-mono tracking-[0.25em] text-slate-400 uppercase">
                Key Specifications
              </p>
              <div className="space-y-0">
                {program.outcomes?.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-3 py-2.5 border-b border-slate-50 last:border-0"
                  >
                    <span
                      className="mt-[9px] h-[3px] w-[3px] flex-shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span className="text-base text-slate-600 leading-snug">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Deliverables */}
          {program.deliverables?.length > 0 && (
            <FadeIn delay={0.2} className="mb-7">
              <p className="mb-3 text-sm font-mono tracking-[0.25em] text-slate-400 uppercase">
                Use Cases & Features
              </p>
              <div className="flex flex-wrap gap-2">
                {program.deliverables.map((d) => (
                  <span
                    key={d}
                    className="border border-slate-200 px-3 py-1 text-sm font-bold uppercase tracking-[0.12em] text-slate-500"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.25}>
            <Link
              to="/contact?type=program"
              className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-[0.16em] transition-opacity duration-150 hover:opacity-60"
              style={{ color: ACCENT }}
            >
              Request Spec Review
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}

ProgramModule.propTypes = {
  program: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    outcomes: PropTypes.arrayOf(PropTypes.string),
    deliverables: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

/* ── Support Pillars ──────────────────────────────────────────────────────── */

function SupportPillars() {
  return (
    <section className="bg-[#07080b] py-20 md:py-28 overflow-hidden relative">
      <TelemetryGrid opacity={0.03} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07080b]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <FadeIn className="mb-16">
          <p
            className="mb-3 text-sm font-mono tracking-[0.28em] uppercase"
            style={{ color: ACCENT }}
          >
            Documentation Infrastructure
          </p>
          <h2
            className="text-4xl font-black uppercase tracking-[-0.01em] text-white md:text-5xl leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Program Support
            <br />
            Architecture
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/6">
          {SUPPORT_PILLARS.map((pillar, i) => (
            <FadeIn
              key={pillar.code}
              delay={i * 0.08}
              className="p-7 border-b sm:border-b-0 border-r-0 sm:border-r border-white/6 last:border-r-0 last:border-b-0"
            >
              <p className="mb-4 text-sm font-mono tracking-[0.22em] text-slate-600 uppercase">
                {pillar.code}
              </p>
              <h3
                className="mb-3 text-sm font-bold uppercase tracking-wide text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {pillar.title}
              </h3>
              <ScanlineDivider className="text-slate-700 mb-4" />
              <p className="text-base text-slate-500 leading-[1.75]">
                {pillar.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Deployment Evolution ─────────────────────────────────────────────────── */

function DeploymentEvolution() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-20 items-start">
          {/* Left column */}
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <p
                className="mb-3 text-sm font-mono tracking-[0.28em] uppercase"
                style={{ color: ACCENT }}
              >
                After Spec Finalization
              </p>
              <h2
                className="text-4xl font-black uppercase tracking-[-0.01em] text-slate-900 md:text-5xl leading-tight mb-5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Deployment
                <br />
                Evolution Path
              </h2>
              <p className="text-base text-slate-500 leading-[1.8] max-w-[34ch]">
                A successful pilot initiates a transition sequence. Programs are
                engineered to evolve — not expire.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-8 hidden lg:block">
              <div
                className="relative overflow-hidden bg-[#0d1117]"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src="/vtol.jpeg"
                  alt="Post-pilot deployment"
                  className="w-full h-full object-cover opacity-40"
                  style={{ filter: "contrast(1.1) saturate(0.6)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/85 to-transparent" />
                <TelemetryGrid opacity={0.04} />
                <div className="absolute bottom-5 left-5">
                  <p className="text-sm font-mono tracking-[0.22em] text-slate-500 uppercase">
                    Full-Scale Operations
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Steps */}
          <div>
            {POST_PILOT.map((step, i) => (
              <FadeIn
                key={step.code}
                delay={i * 0.1}
                className="flex gap-6 py-8 border-b border-slate-100 last:border-0"
              >
                <div className="flex-shrink-0 w-12">
                  <p className="text-sm font-mono tracking-[0.15em] text-slate-400 uppercase">
                    {step.code}
                  </p>
                </div>
                <div>
                  <h3
                    className="mb-2 text-base font-bold uppercase tracking-wide text-slate-900"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base text-slate-500 leading-[1.8]">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Mission Logs ─────────────────────────────────────────────────────────── */

function MissionLogs() {
  return (
    <section className="bg-[#07080b] py-20 md:py-24 relative overflow-hidden">
      <img
        src="/vtol.jpeg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        style={{ filter: "contrast(1.1) saturate(0.5)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080b]/95 via-[#07080b]/80 to-[#07080b]/60" />
      <TelemetryGrid opacity={0.025} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Metrics strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-14 mb-14 border-b border-white/6">
          {METRICS.map((m) => (
            <FadeIn key={m.label}>
              <p
                className="text-4xl font-black text-white tabular-nums"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <CountUp target={m.value} />
              </p>
              <p className="mt-1 text-sm font-mono tracking-[0.2em] text-slate-600 uppercase">
                {m.label}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mb-10">
          <p className="text-sm font-mono tracking-[0.28em] uppercase text-slate-600">
            Field Evidence — Mission Logs
          </p>
        </FadeIn>

        <div className="grid gap-0 lg:grid-cols-3 border border-white/6">
          {MISSION_LOGS.map((log, i) => (
            <FadeIn
              key={log.id}
              delay={i * 0.1}
              className="p-7 border-b lg:border-b-0 lg:border-r border-white/6 last:border-0"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-sm font-mono tracking-[0.2em] text-slate-600 uppercase">
                  {log.id}
                </span>
                <span className="border border-white/10 px-2 py-0.5 text-sm font-mono tracking-[0.18em] text-slate-600 uppercase">
                  {log.sector}
                </span>
              </div>
              <ScanlineDivider className="text-slate-800 mb-5" />
              <p className="text-base text-slate-400 leading-[1.85] italic mb-5">
                {log.quote}
              </p>
              <p className="text-sm font-mono tracking-[0.16em] text-slate-600 uppercase">
                — {log.attr}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Mission Approval CTA ─────────────────────────────────────────────────── */

function MissionApprovalCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="border-t border-slate-200 pt-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-24 items-end">
            <div>
              <FadeIn>
                <p
                  className="mb-4 text-sm font-mono tracking-[0.28em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Mission Approval Panel
                </p>
                <h2
                  className="mb-5 font-black uppercase leading-tight tracking-[-0.01em] text-slate-900"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                  }}
                >
                  Ready to Initiate
                  <br />
                  Your Pilot Program?
                </h2>
                <p className="text-base text-slate-500 leading-[1.8] max-w-[48ch]">
                  Schedule a scoping session with our program team. We clarify
                  objectives, establish a mission timeline, and confirm
                  compliance requirements — before any operational commitment is
                  made.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.15} className="flex flex-col gap-3 lg:pb-1">
              <Link
                to="/contact?type=program"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold uppercase tracking-[0.16em] text-white transition-opacity duration-200 hover:opacity-85 whitespace-nowrap"
                style={{ backgroundColor: ACCENT }}
              >
                Request Spec Review
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/programs#program-overview"
                className="inline-flex items-center justify-center gap-2.5 border border-slate-200 px-7 py-3.5 text-base font-bold uppercase tracking-[0.16em] text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors duration-200 whitespace-nowrap"
              >
                Program Overview
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Root Component ───────────────────────────────────────────────────────── */

const Programs = () => {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      <Hero />
      <MissionTimeline />

      {/* Program sections */}
      <section id="program-overview" className="bg-white">
        {programs.map((program, index) => (
          <ProgramModule key={program.id} program={program} index={index} />
        ))}
      </section>

      <SupportPillars />
      <DeploymentEvolution />
      <MissionLogs />
      <MissionApprovalCTA />
    </div>
  );
};

export default Programs;
