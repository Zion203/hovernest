/**
 * Hovernest — Home (Aerospace Edition)
 *
 * Fonts (add to index.html <head>):
 * <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Barlow+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet" />
 *
 * Barlow Condensed → headings (precise, condensed, reads at scale)
 * Barlow           → body, UI text (clean, technical, neutral)
 */

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Star,
  ChevronRight,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  valuePillars,
  useCases,
  stats,
  trustBadges,
  customerTestimonials,
} from "../data/mockData";

const revealVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.08,
    },
  }),
};

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.07 },
  }),
};

function Reveal({
  children,
  className = "",
  custom = 0,
  variants = revealVariant,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-56px" });
  return (
    <motion.div
      ref={ref}
      custom={custom}
      variants={variants}
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
  variants: PropTypes.shape({
    hidden: PropTypes.object,
    visible: PropTypes.func,
  }),
};

const Rule = ({ className = "" }) => (
  <div className={`border-t border-slate-200 ${className}`} />
);

Rule.propTypes = {
  className: PropTypes.string,
};

const products = [
  {
    name: "Multipurpose VTOL Drone",
    code: "SPEC-01",
    targetId: "vtol",
    line: "Hybrid VTOL with 90-150 mins endurance and 50-120 km range.",
  },
  {
    name: "Survey Drone",
    code: "SPEC-02",
    targetId: "fixed-wing",
    line: "Fixed-wing mapping platform with 120-180 mins flight time.",
  },
  {
    name: "Precision Agriculture Drone",
    code: "SPEC-03",
    targetId: "agri-drone",
    line: "10-20L payload with terrain-following precision spraying.",
  },
  {
    name: "FPV Racing / Inspection Drone",
    code: "SPEC-04",
    targetId: "fpv",
    line: "120-180 km/h high-agility platform with HD FPV video.",
  },
  {
    name: "NeuroFC Ground Controller",
    code: "SPEC-05",
    targetId: "neurofc-controller",
    line: "AI-native autonomous control with 4G/5G and RF telemetry.",
  },
  {
    name: "Spare Parts & Accessories",
    code: "SPEC-06",
    targetId: "parts",
    line: "Cross-system modular replacement parts for fleet continuity.",
  },
];

const storySteps = [
  {
    index: "01",
    title: "Hybrid VTOL Performance",
    desc: "Vertical takeoff with efficient fixed-wing cruise enables long-range mapping, surveillance, and delivery missions.",
  },
  {
    index: "02",
    title: "NeuroFC AI Compute",
    desc: "AI-enabled edge compute runs onboard inference for autonomous decision loops across diverse mission environments.",
  },
  {
    index: "03",
    title: "Autonomous Navigation",
    desc: "Waypoint autonomy, path optimization, and mission-aware control maintain reliable operations in dynamic conditions.",
  },
  {
    index: "04",
    title: "Compliance & Sustainment",
    desc: "DGCA-ready workflows, BVLOS testing pathways, and modular spare-part support keep fleets deployment ready.",
  },
];

const footerLinks = {
  Products: [
    "Multipurpose VTOL Drone",
    "Fixed-Wing Survey Drone",
    "Precision Agriculture Drone",
    "FPV Racing / Inspection Drone",
    "NeuroFC Ground Controller",
    "Spare Parts & Accessories",
  ],
  Technology: ["Edge AI", "Flight Controller", "Swarm Protocol", "Open SDK"],
  Company: ["About", "Careers", "Blog", "Press Kit", "Partners"],
  Legal: ["Privacy Policy", "Terms of Use", "Compliance"],
};

const trustLogos = [
  "MoD",
  "AIIMS",
  "DRDO",
  "AgriTech India",
  "Skyports",
  "DGCA",
];
const heroSpecs = [
  { label: "VTOL Flight Time", value: "90-150 mins" },
  { label: "VTOL Payload", value: "2-5 kg" },
  { label: "Survey Range", value: "100+ km" },
  { label: "Agri Coverage", value: "10-15 acres/hr" },
];
const ratingStars = ["star-1", "star-2", "star-3", "star-4", "star-5"];

const ACCENT = "#3b82f6";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    if (customerTestimonials.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % customerTestimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const activeVoice = customerTestimonials[activeTestimonial];

  return (
    <div
      className="bg-white text-slate-900"
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-[#08090c] overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        <img
          src="/vtol.jpeg"
          alt="Hovernest VTOL in flight"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/65 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-[0.035]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hgrid"
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
            <rect width="100%" height="100%" fill="url(#hgrid)" />
          </svg>
        </div>

        <div
          className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-16 md:pb-24"
          style={{ minHeight: "100svh", paddingTop: "9rem" }}
        >
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeVariant}
              custom={0}
              className="mb-5 text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase"
            >
              Official Aerospace Spec Portfolio · Chennai, India
            </motion.p>

            <motion.h1
              variants={revealVariant}
              custom={1}
              className="mb-6 font-bold leading-[0.95] tracking-[-0.01em] text-white uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
              }}
            >
              Platform Specs
              <br />
              <span style={{ color: ACCENT }}>Built for Real Missions.</span>
            </motion.h1>

            <motion.p
              variants={revealVariant}
              custom={2}
              className="mb-10 max-w-[52ch] text-base text-slate-400 leading-[1.75] font-light"
            >
              Six official spec sheets now define the Hovernest platform stack:
              Multipurpose VTOL, Fixed-Wing Survey, Precision Agriculture, FPV
              Inspection, NeuroFC Ground Controller, and Spare Parts &
              Accessories.
            </motion.p>

            <motion.div
              variants={revealVariant}
              custom={3}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/contact?type=demo"
                className="inline-flex items-center gap-2 border px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                style={{
                  borderColor: ACCENT,
                  backgroundColor: "rgba(59,130,246,0.12)",
                }}
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-base font-semibold text-slate-300 hover:border-white/40 hover:text-white transition-colors duration-200"
              >
                Explore Programs
              </Link>
            </motion.div>
          </motion.div>

          {/* Spec strip */}
          <motion.div
            variants={fadeVariant}
            custom={4}
            initial="hidden"
            animate="visible"
            className="mt-14 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {heroSpecs.map((spec) => (
              <div key={spec.label}>
                <p
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {spec.value}
                </p>
                <p className="mt-0.5 text-sm text-slate-500 uppercase tracking-[0.14em]">
                  {spec.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                custom={i}
                className="py-9 px-6 first:pl-0 last:pr-0 text-center"
              >
                <p
                  className="text-3xl font-bold text-slate-900 md:text-4xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-slate-500 font-medium">
                  {stat.label}
                </p>
              </Reveal>
            ))}
            {trustBadges.slice(0, 2).map((badge, i) => (
              <Reveal
                key={badge}
                custom={i + stats.length}
                className="hidden md:flex items-center justify-center py-9 px-6"
              >
                <span className="inline-flex items-center gap-1.5 text-base font-semibold text-slate-600">
                  <Check className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                  {badge}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINEUP ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <Reveal>
              <p
                className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Fleet
              </p>
              <h2
                className="text-4xl font-bold leading-tight tracking-[-0.01em] text-slate-900 uppercase md:text-5xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                The Lineup
              </h2>
            </Reveal>
            <Reveal>
              <Link
                to="/products#vtol"
                className="group inline-flex items-center gap-1.5 text-base font-semibold transition-colors"
                style={{ color: ACCENT }}
              >
                View full specifications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="border-t border-slate-200">
            {products.map((product, i) => (
              <Reveal key={product.code} custom={i}>
                <Link
                  to={`/products#${product.targetId}`}
                  className="group flex items-center justify-between border-b border-slate-100 py-5 px-1 -mx-1 hover:bg-slate-50 transition-colors duration-150"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span
                      className="w-16 flex-shrink-0 text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {product.code}
                    </span>
                    <span
                      className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-150"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {product.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden sm:block text-base text-slate-400 text-right max-w-[38ch]">
                      {product.line}
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── VALUE PILLARS ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20 items-start">
            <Reveal className="lg:sticky lg:top-28">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Core Technology
              </p>
              <h2
                className="text-4xl font-bold leading-tight tracking-[-0.01em] text-slate-900 uppercase md:text-5xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Built for Real-World Missions
              </h2>
              <p className="mt-4 text-base text-slate-500 leading-[1.75] max-w-[34ch]">
                Three engineering pillars behind every Hovernest deployment.
              </p>
            </Reveal>

            <div className="border-t border-slate-200">
              {valuePillars.map((pillar, i) => {
                const pillarCode = `P-${String(i + 1).padStart(2, "0")}`;
                return (
                  <Reveal
                    key={pillar.title}
                    custom={i}
                    className="flex gap-6 border-b border-slate-100 py-8"
                  >
                    <div className="flex-shrink-0 pt-0.5">
                      <div className="flex h-9 min-w-[3.2rem] items-center justify-center border border-slate-200 bg-slate-50 px-2">
                        <span
                          className="text-xs font-semibold uppercase tracking-[0.12em]"
                          style={{ color: ACCENT, fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {pillarCode}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="mb-2 text-base font-semibold text-slate-900 uppercase tracking-wide"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {pillar.title}
                      </h3>
                      <p className="mb-4 text-base text-slate-500 leading-[1.75]">
                        {pillar.description}
                      </p>
                      <ul className="space-y-2">
                        {pillar.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2.5 text-base text-slate-600"
                          >
                            <span
                              className="mt-2 h-1 w-1 rounded-full flex-shrink-0"
                              style={{ backgroundColor: ACCENT }}
                            />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Rule />

      {/* ── HOW NEUROFC WORKS ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-start">
            <Reveal>
              <div
                className="relative overflow-hidden bg-[#08090c]"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src="/vtol.jpeg"
                  alt="NeuroFC Flight Controller"
                  className="w-full h-full object-cover opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    NeuroFC — NFC-01
                  </p>
                  <p
                    className="mt-1 text-base font-semibold text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Edge AI Flight Controller
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal className="mb-8">
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: ACCENT }}
                >
                  Under the Hood
                </p>
                <h2
                  className="text-4xl font-bold leading-tight tracking-[-0.01em] text-slate-900 uppercase md:text-5xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  How NeuroFC Works
                </h2>
              </Reveal>

              <div className="border-t border-slate-200">
                {storySteps.map((step, i) => (
                  <Reveal
                    key={step.index}
                    custom={i}
                    className="flex gap-6 border-b border-slate-100 py-6"
                  >
                    <span
                      className="flex-shrink-0 text-sm font-semibold text-slate-400 tracking-[0.1em] mt-0.5 w-6"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {step.index}
                    </span>
                    <div>
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
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rule />

      {/* ── USE CASES ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <Reveal>
              <p
                className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Applications
              </p>
              <h2
                className="text-4xl font-bold leading-tight tracking-[-0.01em] text-slate-900 uppercase md:text-5xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Purpose-Built Solutions
              </h2>
              <p className="mt-4 text-base text-slate-400 max-w-[32ch] leading-relaxed">
                One platform architecture deployed across healthcare,
                agriculture, and public safety.
              </p>
            </Reveal>
          </div>

          {/* Spaced grid for clearer card framing */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {useCases.map((useCase, i) => {
              const useContainedFrame = [
                "Medical Logistics",
                "Smart Agriculture",
                "Inspection & Reconnaissance",
              ].includes(useCase.title);
              return (
                <Reveal
                  key={useCase.title}
                  custom={i}
                  className="group overflow-hidden border border-slate-200 bg-white"
                >
                  <motion.div
                    className="bg-white"
                    initial={{ y: 18, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      className="relative overflow-hidden"
                      initial={false}
                      animate={{ height: "15rem" }}
                      whileHover={{ height: "19rem" }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {useContainedFrame ? (
                        <div className="flex h-full w-full items-center justify-center bg-sky-50 p-5">
                          <img
                            src={useCase.image}
                            alt={useCase.title}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : (
                        <>
                          <img
                            src={useCase.image}
                            alt={useCase.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </>
                      )}
                    </motion.div>
                    <motion.div
                      className="p-6 border-t border-slate-100"
                      whileHover={{ paddingTop: 28, paddingBottom: 30 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <h3
                        className="mb-1.5 text-base font-semibold uppercase tracking-wide text-slate-900"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {useCase.title}
                      </h3>
                      <motion.p
                        className="text-base text-slate-500 leading-[1.7]"
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        {useCase.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── TESTIMONIAL ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p
              className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Voices from the Field
            </p>
            <h2
              className="text-4xl font-bold leading-tight tracking-[-0.01em] text-slate-900 uppercase md:text-5xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Live Partner Testimonials
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="border border-slate-200 bg-white p-6 md:p-8 min-h-[18rem]">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span
                    className="inline-flex items-center gap-2 border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-sm font-semibold uppercase tracking-[0.1em] text-emerald-700"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                      animate={{ opacity: [0.45, 1, 0.45] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    Live Feed
                  </span>
                  <span
                    className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Rotates every 4.5s
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVoice.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={activeVoice.avatar}
                          alt={activeVoice.author}
                          className="h-12 w-12 object-cover border border-slate-200"
                        />
                        <div>
                          <p className="text-base font-semibold text-slate-900">
                            {activeVoice.author}
                          </p>
                          <p className="text-sm text-slate-500">
                            {activeVoice.role}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {activeVoice.organization}
                          </p>
                        </div>
                      </div>
                      <span
                        className="border border-blue-200 bg-blue-50 px-2 py-1 text-sm font-semibold uppercase tracking-[0.08em] text-blue-700"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {activeVoice.highlight}
                      </span>
                    </div>

                    <div className="mb-5 flex gap-0.5">
                      {ratingStars.map((star) => (
                        <Star
                          key={`${activeVoice.id}-${star}`}
                          className="h-3.5 w-3.5 fill-current"
                          style={{ color: ACCENT }}
                        />
                      ))}
                    </div>

                    <blockquote
                      className="text-base text-slate-600 leading-[1.9]"
                      style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                      "{activeVoice.quote}"
                    </blockquote>

                    <div className="mt-5 grid gap-2 sm:grid-cols-3">
                      <div className="border border-slate-200 bg-slate-50 px-3 py-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Program
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-700">
                          {activeVoice.program}
                        </p>
                      </div>
                      <div className="border border-slate-200 bg-slate-50 px-3 py-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Region
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-700">
                          {activeVoice.region}
                        </p>
                      </div>
                      <div className="border border-slate-200 bg-slate-50 px-3 py-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Evidence
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-700">
                          {activeVoice.evidence}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-1.5">
                      {activeVoice.outcomes.map((outcome) => (
                        <li
                          key={`${activeVoice.id}-${outcome}`}
                          className="text-sm text-slate-600 flex items-start gap-2"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>

            <Reveal custom={1}>
              <div className="border border-slate-200 bg-white p-3">
                {customerTestimonials.map((item, i) => {
                  const isActive = i === activeTestimonial;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTestimonial(i)}
                      className={`w-full text-left p-3 border-b border-slate-100 last:border-b-0 transition-colors duration-150 ${
                        isActive ? "bg-slate-50" : "hover:bg-slate-50"
                      }`}
                    >
                      <p
                        className={`text-sm font-semibold uppercase tracking-[0.12em] ${
                          isActive ? "text-blue-600" : "text-slate-400"
                        }`}
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {item.highlight}
                      </p>
                      <p className="mt-1 text-base font-semibold text-slate-800">
                        {item.author}
                      </p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.organization}
                      </p>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal custom={2} className="mt-6">
            <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
              Testimonials represent documented field feedback from pilot and
              deployment partners. Some organization names are generalized where
              active NDAs apply.
            </p>
          </Reveal>
        </div>
      </section>

      <Rule />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#08090c]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-20 items-end">
            <Reveal>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Get Started
              </p>
              <h2
                className="text-4xl font-bold leading-tight tracking-[-0.01em] text-white uppercase md:text-6xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                See Hovernest in
                <br />
                your workflow in 14 days.
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-[1.75] max-w-[46ch]">
                Start a structured pilot program. Integrate into your
                operations, evaluate outcomes, and scale with confidence.
              </p>
            </Reveal>

            <Reveal custom={1} className="flex flex-col gap-3 lg:pb-1">
              <Link
                to="/contact?type=pilot"
                className="inline-flex items-center justify-center gap-2 border border-white bg-white px-7 py-3.5 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors duration-200 whitespace-nowrap"
              >
                Start a Pilot
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact?type=demo"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-base font-semibold text-slate-300 hover:border-white/40 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                Request a Demo
              </Link>
            </Reveal>
          </div>

          {/* Trust strip */}
          <Reveal className="mt-14 pt-8 border-t border-white/10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              Trusted by leaders in defence, healthcare &amp; agriculture
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {trustLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-base font-semibold text-slate-500 hover:text-slate-300 transition-colors duration-150 cursor-default select-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
