/**
 * Services — Aerospace Edition (Enhanced with imagery)
 * Fonts: Barlow Condensed (headings) + Barlow (body)
 *
 * Image slots used:
 *  /vtol.jpeg              — existing asset (reused across site)
 *  /services/survey.jpg    — survey & mapping hero image
 *  /services/operations.jpg — professional operations image
 *  /services/training.jpg  — training image
 *  /services/field.jpg     — field deployment wide shot
 *
 *  All slots gracefully degrade to dark bg if images are not yet present.
 */

import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import {
  serviceLines as services,
  serviceSectors as sectors,
  serviceEngagementSteps as engagementSteps,
  serviceCapabilities as capabilities,
} from "../data/mockData";

const ACCENT = "#3b82f6";

const revealVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.08,
    },
  }),
};

function Reveal({ children, className = "", custom = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-52px" });
  return (
    <motion.div
      ref={ref}
      custom={custom}
      variants={revealVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  custom: PropTypes.number,
};

const Rule = ({ className = "" }) => (
  <div className={`border-t border-slate-200 ${className}`} />
);

Rule.propTypes = { className: PropTypes.string };

const HERO_IMAGE = "https://wallpaperaccess.com/full/3507498.jpg";

const SERVICE_IMAGES = [
  "https://wallpaperaccess.com/full/2894183.jpg", // Survey & Mapping
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1400&q=80", // Professional operations
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80", // Training & certification
];

const SERVICE_THUMBNAILS = [
  [
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1584697964154-bfe3215d7a5f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  ],
];

const FIELD_DEPLOYMENT_IMAGE =
  "https://cdn.mos.cms.futurecdn.net/DL7SAbqfJis3mpm2N7bxNk.jpg";

const MISSION_PLANNING_IMAGE =
  "https://images.unsplash.com/photo-1532634726-8b9fb99825b4?auto=format&fit=crop&w=1200&q=80";

const SECTOR_IMAGES = [
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=80", // Agriculture
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80", // Civil & infrastructure
  "https://images.unsplash.com/photo-1581090700227-1e8e8f8f1f2c?auto=format&fit=crop&w=900&q=80", // Commercial & industrial
];

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?auto=format&fit=crop&w=1800&q=80";

const FALLBACK_IMAGE = "/vtol.jpeg";

const handleImageError = (e) => {
  if (e.currentTarget.dataset.fallbackApplied === "true") return;
  e.currentTarget.dataset.fallbackApplied = "true";
  e.currentTarget.src = FALLBACK_IMAGE;
};

// Sector visual tags (colored indicator + label)
const SECTOR_ACCENT_COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

/* ══════════════════════════════════════════════════════════════════════════ */

const Services = () => {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-[#08090c] overflow-hidden"
        style={{ minHeight: "92vh" }}
      >
        {/* Full-bleed background image */}
        <img
          src={HERO_IMAGE}
          alt="Hovernest field operations"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          style={{ filter: "contrast(1.18) saturate(0.85) brightness(0.78)" }}
          onError={handleImageError}
        />

        {/* Directional vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/70 via-transparent to-transparent" />

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="sgrid"
                width="56"
                height="56"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 56 0 L 0 0 0 56"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sgrid)" />
          </svg>
        </div>

        {/* Content */}
        <div
          className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-16 md:pb-24"
          style={{ minHeight: "92vh", paddingTop: "10rem" }}
        >
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={revealVariant}
              custom={0}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500"
            >
              Spec-Driven Services
            </motion.p>
            <motion.h1
              variants={revealVariant}
              custom={1}
              className="mb-5 font-bold leading-[0.95] tracking-[-0.01em] text-white uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
              }}
            >
              Platform Integration.
              <br />
              <span style={{ color: ACCENT }}>Autonomy Deployment.</span>
            </motion.h1>
            <motion.p
              variants={revealVariant}
              custom={2}
              className="text-base text-slate-400 leading-[1.75] font-light max-w-[54ch]"
            >
              Services are now structured directly around the six official
              product spec sheets, covering hardware integration, NeuroFC
              autonomy enablement, compliance readiness, and spare-parts
              sustainment.
            </motion.p>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={revealVariant}
            custom={3}
            initial="hidden"
            animate="visible"
            className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4"
          >
            {[
              { label: "Spec Packages", value: "6 Official" },
              { label: "Service Modules", value: "3 Core" },
              { label: "Certification", value: "DGCA Ready" },
              { label: "BVLOS", value: "Testing Support" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.value}
                </p>
                <p className="text-sm text-slate-500 uppercase tracking-[0.14em] mt-0.5">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 leading-[0]"
          aria-hidden
        >
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10"
          >
            <path d="M0 40 C480 0 960 40 1440 0 L1440 40 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ──────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          {services.map((service, index) => {
            const flip = index % 2 !== 0;
            return (
              <div key={service.id} id={service.id}>
                <div className="py-20 md:py-28">
                  <div
                    className={`
                      grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start
                      ${flip ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}
                    `}
                  >
                    {/* Image block */}
                    <Reveal>
                      <div className="flex flex-col gap-3">
                        {/* Main image */}
                        <div
                          className="relative overflow-hidden bg-[#0d1117]"
                          style={{ aspectRatio: "4/3" }}
                        >
                          <img
                            src={SERVICE_IMAGES[index] ?? "/vtol.jpeg"}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-80"
                            style={{
                              filter:
                                "contrast(1.15) saturate(0.88) brightness(0.82)",
                            }}
                            onError={handleImageError}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/70 to-transparent" />

                          {/* Code badge */}
                          <div className="absolute top-4 left-4">
                            <span
                              className="text-sm font-bold uppercase tracking-[0.16em] text-white/70 border border-white/15 px-2.5 py-1 backdrop-blur-sm bg-black/20"
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                              }}
                            >
                              {service.code}
                            </span>
                          </div>

                          {/* Status dot */}
                          <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span
                              className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60"
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                              }}
                            >
                              Active Service
                            </span>
                          </div>
                        </div>

                        {/* Supporting thumbnail strip */}
                        <div className="grid grid-cols-3 gap-2">
                          {SERVICE_THUMBNAILS[index]?.map((thumb, i) => (
                            <div
                              key={`${service.id}-thumb-${i}`}
                              className="relative overflow-hidden bg-slate-100"
                              style={{ aspectRatio: "16/9" }}
                            >
                              <img
                                src={thumb}
                                alt=""
                                className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-200"
                                onError={handleImageError}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>

                    {/* Content block */}
                    <div className="flex flex-col gap-6">
                      <Reveal custom={0}>
                        <h2
                          className="font-bold leading-[0.97] tracking-[-0.01em] text-slate-900 uppercase"
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                          }}
                        >
                          {service.title}
                        </h2>
                        <p
                          className="mt-2 text-base font-medium"
                          style={{ color: ACCENT }}
                        >
                          {service.tagline}
                        </p>
                      </Reveal>

                      <Reveal custom={1}>
                        <p className="text-base text-slate-500 leading-[1.8] max-w-[50ch]">
                          {service.description}
                        </p>
                      </Reveal>

                      {/* Capability spec table */}
                      <Reveal custom={2}>
                        <div className="border-t border-slate-200 pt-5">
                          <p
                            className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-400"
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                            }}
                          >
                            Service Capabilities
                          </p>
                          <div>
                            {service.capabilities.map((cap) => (
                              <div
                                key={`${service.id}-${cap.label}`}
                                className="grid grid-cols-[9rem_1fr] gap-4 py-2.5 border-b border-slate-100 last:border-0"
                              >
                                <span
                                  className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400 pt-0.5"
                                  style={{
                                    fontFamily:
                                      "'Barlow Condensed', sans-serif",
                                  }}
                                >
                                  {cap.label}
                                </span>
                                <span className="text-base text-slate-700 leading-snug">
                                  {cap.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>

                      <Reveal custom={3}>
                        <Link
                          to="/contact?type=service"
                          className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-150 hover:opacity-70"
                          style={{ color: ACCENT }}
                        >
                          Discuss engagement
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Reveal>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && <Rule />}
              </div>
            );
          })}
        </div>
      </section>

      <Rule />

      {/* ── FIELD DEPLOYMENT BANNER ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#08090c]"
        style={{ minHeight: "40vh" }}
      >
        <img
          src={FIELD_DEPLOYMENT_IMAGE}
          alt="Field deployment"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/90 via-[#08090c]/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20 items-center">
            <Reveal>
              <p
                className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Deployment Readiness
              </p>
              <h2
                className="font-bold leading-tight tracking-[-0.01em] text-white uppercase"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                }}
              >
                Spec-Aligned Deployment.
                <br />
                Mission-Grade Execution.
              </h2>
            </Reveal>
            <Reveal custom={1}>
              <p className="text-base text-slate-400 leading-[1.8]">
                Deployment readiness includes validated platform specs,
                calibration workflows, and modular spare replacement pathways.
                Teams can configure hardware, software, and compliance tracks
                from the same official baseline documentation.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Deployment Lead", value: "48 hrs" },
                  { label: "Field Engineers", value: "On-site" },
                  { label: "Equipment Pool", value: "Pre-checked" },
                  { label: "Coverage", value: "Pan-India" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-2 pl-3"
                    style={{ borderColor: ACCENT }}
                  >
                    <p
                      className="text-base font-bold text-white"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.value}
                    </p>
                    <p className="text-sm text-slate-500 uppercase tracking-wider mt-0.5">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Rule />

      {/* ── HOW ENGAGEMENT WORKS ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <Reveal>
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: ACCENT }}
                >
                  Service Engagement
                </p>
                <h2
                  className="text-4xl font-bold leading-tight tracking-[-0.01em] text-slate-900 uppercase md:text-5xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  How We Work
                </h2>
                <p className="mt-4 text-base text-slate-500 leading-[1.75] max-w-[34ch]">
                  A structured five-phase process from first contact to final
                  delivery.
                </p>
              </Reveal>

              {/* Small decorative image */}
              <Reveal custom={1}>
                <div
                  className="relative overflow-hidden bg-[#0d1117] hidden lg:block"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={MISSION_PLANNING_IMAGE}
                    alt="Mission planning"
                    className="w-full h-full object-cover opacity-50"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p
                      className="text-base font-semibold uppercase tracking-wider text-white/60"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Mission Planning Room
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="border-t border-slate-200">
              {engagementSteps.map((step, i) => (
                <Reveal
                  key={step.index}
                  custom={i}
                  className="flex gap-6 border-b border-slate-100 py-7 group"
                >
                  <span
                    className="flex-shrink-0 text-sm font-semibold tracking-[0.1em] text-slate-400 mt-0.5 w-6"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {step.index}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="mb-1.5 text-base font-semibold text-slate-900 uppercase tracking-wide"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-500 leading-[1.75]">
                      {step.desc}
                    </p>
                  </div>
                  {/* Step indicator bar */}
                  <div
                    className="hidden sm:block w-0.5 self-stretch rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                    style={{ backgroundColor: ACCENT }}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Rule />

      {/* ── ADDITIONAL CAPABILITIES ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-12">
            <p
              className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Platform Depth
            </p>
            <h2
              className="text-4xl font-bold leading-tight tracking-[-0.01em] text-slate-900 uppercase md:text-5xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Supporting Capabilities
            </h2>
          </Reveal>

          <div className="border-t border-slate-200">
            <div className="grid md:grid-cols-2">
              {capabilities.map((cap, i) => (
                <Reveal
                  key={cap.title}
                  custom={i}
                  className={`
                    py-8 pr-8
                    ${i % 2 === 0 ? "md:border-r border-slate-100" : "md:pl-8"}
                    border-b border-slate-100
                    ${i >= capabilities.length - 2 ? "md:border-b-0" : ""}
                  `}
                >
                  <h3
                    className="mb-2 text-base font-semibold text-slate-900 uppercase tracking-wide"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-base text-slate-500 leading-[1.75] max-w-[46ch]">
                    {cap.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Rule />

      {/* ── INDUSTRY SECTORS ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-12">
            <p
              className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Sectors
            </p>
            <h2
              className="text-4xl font-bold leading-tight tracking-[-0.01em] text-slate-900 uppercase md:text-5xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Industries We Serve
            </h2>
          </Reveal>

          <div className="border-t border-slate-200">
            {sectors.map((sector, i) => (
              <Reveal key={sector.sector} custom={i}>
                <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:gap-20 py-10 border-b border-slate-100 last:border-0">
                  {/* Left — sector identity */}
                  <div className="flex flex-col gap-3">
                    <div
                      className="w-1 h-8 rounded-full"
                      style={{
                        backgroundColor: SECTOR_ACCENT_COLORS[i] ?? ACCENT,
                      }}
                    />
                    <h3
                      className="text-2xl font-bold text-slate-900 uppercase"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {sector.sector}
                    </h3>
                    <p
                      className="text-base font-semibold leading-snug"
                      style={{ color: SECTOR_ACCENT_COLORS[i] ?? ACCENT }}
                    >
                      {sector.outcome}
                    </p>
                  </div>

                  {/* Right — description + application tags + mini image */}
                  <div className="grid gap-5 sm:grid-cols-[1fr_auto] items-start">
                    <div>
                      <p className="mb-5 text-base text-slate-500 leading-[1.8]">
                        {sector.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sector.applications.map((app) => (
                          <span
                            key={`${sector.sector}-${app}`}
                            className="inline-block border border-slate-200 px-3 py-1 text-base font-semibold uppercase tracking-[0.1em] text-slate-500"
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                            }}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sector mini image */}
                    <div
                      className="hidden sm:block relative overflow-hidden bg-slate-200 flex-shrink-0"
                      style={{ width: "120px", aspectRatio: "1/1" }}
                    >
                      <img
                        src={SECTOR_IMAGES[i]}
                        alt={sector.sector}
                        className="w-full h-full object-cover"
                        style={{
                          filter: `hue-rotate(${i * 40}deg) saturate(0.6)`,
                        }}
                        onError={handleImageError}
                      />
                      <div className="absolute inset-0 bg-slate-900/30" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#08090c] py-20 md:py-24 overflow-hidden">
        <img
          src={CTA_IMAGE}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-15 object-bottom"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c] via-[#08090c]/80 to-[#08090c]/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-20 items-end">
            <Reveal>
              <p
                className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Get Started
              </p>
              <h2
                className="mb-4 font-bold leading-tight tracking-[-0.01em] text-white uppercase"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                }}
              >
                Ready to Transform
                <br />
                Your Workflow?
              </h2>
              <p className="text-base text-slate-400 leading-[1.75] max-w-[46ch]">
                Talk to our service team about your operational requirements.
                We'll scope the right engagement model — from single-mission
                execution to long-term deployment partnership.
              </p>
            </Reveal>

            <Reveal custom={1} className="flex flex-col gap-3 lg:pb-1">
              <Link
                to="/contact?type=service"
                className="inline-flex items-center justify-center gap-2 border border-white bg-white px-7 py-3.5 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors duration-200 whitespace-nowrap"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact?type=pilot"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-base font-semibold text-slate-300 hover:border-white/40 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                Start a Pilot Program
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
