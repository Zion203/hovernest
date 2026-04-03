import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { rdStreams, publications } from "../data/mockData";

/* ── Palette ──────────────────────────────────────────────────────────────── */
const C = {
  bg: "#04080f",
  paper: "#f4f5f7",
  white: "#ffffff",
  ink: "#0e1420",
  sky: "#38bdf8",
  acc: "#0ea5e9",
  dim: "#1e2a3a",
  muted: "#64748b",
};

/* ── Primitive utilities ──────────────────────────────────────────────────── */

function useEntry(margin = "-80px") {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

function CountUp({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const { ref, inView } = useEntry();
  const num = Number.parseFloat(String(to).replaceAll(/[^0-9.]/g, "")) || 0;
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, num, {
      duration: 1.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) =>
        setVal(Number.isInteger(num) ? Math.floor(v) : +v.toFixed(1)),
    });
    return ctrl.stop;
  }, [inView, num]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ── Texture layers ───────────────────────────────────────────────────────── */

function TechGrid({ opacity = 0.045, color = "#7ca4cc", size = 52 }) {
  const id = `tg-${size}`;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id={id}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              stroke={color}
              strokeWidth="0.55"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function Scanlines({ opacity = 0.028 }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background: `repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,${opacity * 1.5}) 3px,rgba(0,0,0,${opacity * 1.5}) 4px)`,
      }}
    />
  );
}

function NoiseBg({ opacity = 0.03 }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        opacity,
        mixBlendMode: "overlay",
      }}
    />
  );
}

/* ── Reveal wrappers ──────────────────────────────────────────────────────── */

function Fade({ children, className = "", delay = 0, y = 24 }) {
  const { ref, inView } = useEntry();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SlideUp({ children, className = "", delay = 0 }) {
  const { ref, inView } = useEntry();
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "105%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function LineReveal({ className = "", delay = 0, color = C.sky }) {
  const { ref, inView } = useEntry();
  return (
    <div ref={ref} className={`h-px overflow-hidden ${className}`}>
      <motion.div
        className="h-full"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </div>
  );
}

/* ── Telemetry pulse dot ──────────────────────────────────────────────────── */
function Pulse({ color = "#34d399", size = 6 }) {
  return (
    <span
      className="relative inline-flex"
      style={{ width: size, height: size }}
    >
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
      />
      <span
        className="relative rounded-full"
        style={{ width: size, height: size, backgroundColor: color }}
      />
    </span>
  );
}

/* ── Animated waveform ────────────────────────────────────────────────────── */
function Waveform({ bars = 28, height = 28 }) {
  const barSequence = Array.from({ length: bars }, (_, n) => n + 1);

  return (
    <div className="flex items-center gap-[3px]" aria-hidden>
      {barSequence.map((step) => (
        <motion.div
          key={`wf-${step}`}
          className="w-[2px] rounded-full"
          style={{ backgroundColor: C.sky, opacity: 0.5, height }}
          animate={{ scaleY: [0.2, 1, 0.3, 0.8, 0.2] }}
          transition={{
            duration: 1.8 + (step % 5) * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: step * 0.06,
          }}
          initial={{ height: height * 0.3, transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

/* ── Section label ────────────────────────────────────────────────────────── */
function Label({ children, color = C.sky }) {
  return (
    <p
      className="text-xs font-mono tracking-[0.32em] uppercase mb-3"
      style={{ color, opacity: 0.8 }}
    >
      {children}
    </p>
  );
}

function getStreamCtaPath(_streamId) {
  return "/contact?type=research";
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Hero                                                                       */
/* ══════════════════════════════════════════════════════════════════════════ */

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const slideY = useTransform(scrollYProgress, [0, 0.65], [0, -40]);

  const markers = [
    { x: "12%", y: "34%", id: "NODE-7A" },
    { x: "58%", y: "26%", id: "NODE-3C" },
    { x: "78%", y: "55%", id: "NODE-9F" },
    { x: "35%", y: "68%", id: "NODE-1B" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: C.bg }}
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1800&q=85&fit=crop"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{
            opacity: 0.18,
            filter: "contrast(1.15) saturate(0.5) brightness(0.9)",
          }}
        />
      </motion.div>

      {/* Atmosphere gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#04080f] via-[#04080f]/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04080f]/80 via-transparent to-[#04080f]/30" />

      {/* Texture layers */}
      <TechGrid opacity={0.04} />
      <Scanlines opacity={0.025} />

      {/* Moving horizontal scan line */}
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 h-[1px] pointer-events-none"
        style={{ backgroundColor: C.sky, opacity: 0.06 }}
        animate={{ top: ["10%", "92%", "10%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Telemetry markers */}
      {markers.map((m, i) => (
        <motion.div
          key={m.id}
          className="absolute"
          style={{ left: m.x, top: m.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.3] }}
          transition={{
            duration: 1.4,
            delay: 1.2 + i * 0.35,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 4,
          }}
        >
          <div className="relative flex items-center gap-1.5">
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: C.sky }}
            />
            <motion.div
              className="absolute rounded-full border"
              style={{
                borderColor: C.sky,
                width: 14,
                height: 14,
                top: -4,
                left: -4,
              }}
              animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4 }}
            />
            <span
              className="text-xs font-mono tracking-widest"
              style={{ color: C.sky, opacity: 0.5 }}
            >
              {m.id}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Corner crosshair */}
      <div className="absolute top-20 right-16 hidden md:block" aria-hidden>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="12"
            stroke={C.sky}
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
          <line
            x1="20"
            y1="28"
            x2="20"
            y2="40"
            stroke={C.sky}
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
          <line
            x1="0"
            y1="20"
            x2="12"
            y2="20"
            stroke={C.sky}
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
          <line
            x1="28"
            y1="20"
            x2="40"
            y2="20"
            stroke={C.sky}
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
          <circle
            cx="20"
            cy="20"
            r="4"
            stroke={C.sky}
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {/* Main hero content */}
      <motion.div
        style={{
          opacity: fade,
          y: slideY,
          minHeight: "100vh",
          paddingTop: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-20 md:pb-28"
      >
        <Fade delay={0.15}>
          <Label>
            Spec Research Streams · VTOL · NeuroFC · Compliance & Sustainment
          </Label>
        </Fade>

        <div className="overflow-hidden mb-2 pb-4">
          <motion.h1
            className="font-black text-white leading-[1.02] tracking-[-0.03em]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3.8rem, 9.5vw, 9.2rem)",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            Specifying the
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-black leading-[0.9] tracking-[-0.03em]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3.8rem, 9.5vw, 9.2rem)",
              color: C.sky,
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.42,
            }}
          >
            UAV Stack.
          </motion.h1>
        </div>

        <Fade delay={0.6} className="max-w-[56ch] mb-10">
          <p className="text-lg text-slate-400 leading-[1.85]">
            R&D now tracks official platform specs, NeuroFC autonomy behavior,
            and certification-readiness pathways to keep every deployment
            aligned to the same aerospace-grade documentation baseline.
          </p>
        </Fade>

        {/* Waveform scroll cue */}
        <Fade delay={0.9} className="flex items-center gap-5">
          <Waveform bars={24} height={22} />
          <span className="text-xs font-mono tracking-[0.3em] text-slate-600 uppercase">
            Scroll to explore spec-driven research
          </span>
        </Fade>
      </motion.div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]" aria-hidden>
        <svg
          viewBox="0 0 1440 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7"
          preserveAspectRatio="none"
        >
          <path d="M0 28 C480 0 960 28 1440 0 L1440 28 Z" fill={C.paper} />
        </svg>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Research Streams — each gets its own layout module                         */
/* ══════════════════════════════════════════════════════════════════════════ */

/* Layout A: Full-bleed image with overlay narrative */
function StreamLayoutA({ stream, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const imgs = [
    "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1600&q=80&fit=crop",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=80&fit=crop",
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "70vh" }}
    >
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={imgs[index % 2]}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{ opacity: 0.18, filter: "contrast(1.2) saturate(0.5)" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#04080f]/95 via-[#04080f]/70 to-[#04080f]/30" />
      <TechGrid opacity={0.03} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Fade>
            <p
              className="mb-2 text-xs font-mono tracking-[0.28em] uppercase"
              style={{ color: C.sky, opacity: 0.7 }}
            >
              Stream — {String(index + 1).padStart(2, "0")}
            </p>
          </Fade>
          <SlideUp>
            <h2
              className="font-black text-white leading-[0.92] tracking-[-0.02em] uppercase mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              }}
            >
              {stream.title}
            </h2>
          </SlideUp>
          <Fade delay={0.1}>
            <p
              className="text-xs font-mono tracking-[0.22em] uppercase mb-6"
              style={{ color: C.sky, opacity: 0.6 }}
            >
              {stream.aim}
            </p>
            <LineReveal className="mb-6 opacity-20" color={C.sky} />
            <p className="text-base text-slate-400 leading-[1.85] max-w-[52ch] mb-8">
              {stream.outcomes}
            </p>
          </Fade>
          {stream.cta && (
            <Fade delay={0.2}>
              <Link
                to={getStreamCtaPath(stream.id)}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                style={{ color: C.sky }}
              >
                {stream.cta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Fade>
          )}
        </div>

        <Fade
          delay={0.15}
          className="lg:pl-8 lg:bg-[#04080f]/55 lg:border lg:border-white/10 lg:rounded-sm lg:px-6 lg:py-7 lg:backdrop-blur-[2px]"
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-slate-300 mb-5">
            Research Highlights
          </p>
          <div className="space-y-0">
            {stream.highlights.map((h, i) => (
              <Fade
                key={`${stream.id}-${h}`}
                delay={0.2 + i * 0.08}
                className="flex gap-4 py-4 border-b border-white/12 last:border-0"
              >
                <span
                  className="mt-2 h-[3px] w-[3px] flex-shrink-0 rounded-full"
                  style={{ backgroundColor: C.sky }}
                />
                <p className="text-base text-slate-200 leading-[1.8]">{h}</p>
              </Fade>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}

/* Layout B: Technical side-rail editorial on white */
function StreamLayoutB({ stream, index }) {
  return (
    <div className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">
          {/* Left spec rail */}
          <div className="lg:sticky lg:top-28">
            <Fade>
              <p
                className="text-xs font-mono tracking-[0.28em] uppercase mb-4"
                style={{ color: C.acc }}
              >
                Stream — {String(index + 1).padStart(2, "0")} · Technical
                Dossier
              </p>
              <h2
                className="font-black text-slate-900 leading-[0.93] tracking-[-0.02em] uppercase mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                }}
              >
                {stream.title}
              </h2>
              <LineReveal className="mb-6" color={C.acc} delay={0.1} />
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-3">
                Objective
              </p>
              <p className="text-base text-slate-500 leading-[1.85] mb-8">
                {stream.aim}
              </p>

              <p className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-3">
                Projected Outcome
              </p>
              <p className="text-base text-slate-500 leading-[1.85] mb-8">
                {stream.outcomes}
              </p>

              {stream.cta && (
                <Link
                  to={getStreamCtaPath(stream.id)}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                  style={{ color: C.acc }}
                >
                  {stream.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </Fade>
          </div>

          {/* Right detail column */}
          <div>
            <Fade className="mb-8">
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-slate-400 mb-5">
                Research Highlights
              </p>
              <LineReveal className="opacity-10" />
            </Fade>
            <div>
              {stream.highlights.map((h, i) => (
                <Fade key={`${stream.id}-${h}`} delay={i * 0.09}>
                  <div className="py-5 border-b border-slate-100 last:border-0 grid grid-cols-[32px_1fr] gap-4 items-start">
                    <span
                      className="text-xs font-mono tracking-[0.15em] tabular-nums"
                      style={{ color: C.acc }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg text-slate-600 leading-[1.8]">{h}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Layout C: Vertical timeline format on dark */
function StreamLayoutC({ stream, index }) {
  return (
    <div className="relative bg-[#060c16] py-24 md:py-28 overflow-hidden">
      <TechGrid opacity={0.035} color="#5a7fa8" />
      <NoiseBg opacity={0.025} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-16">
          <p
            className="text-xs font-mono tracking-[0.28em] uppercase mb-4"
            style={{ color: C.sky, opacity: 0.6 }}
          >
            Stream — {String(index + 1).padStart(2, "0")}
          </p>
          <h2
            className="font-black text-white leading-[0.92] tracking-[-0.02em] uppercase mb-5"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            }}
          >
            {stream.title}
          </h2>
          <p className="text-base text-slate-500 leading-[1.85] max-w-[60ch]">
            {stream.outcomes}
          </p>
        </Fade>

        {/* Vertical research timeline */}
        <div className="relative pl-6 border-l border-white/8">
          {stream.highlights.map((h, i) => (
            <Fade
              key={`${stream.id}-${h}`}
              delay={i * 0.1}
              className="mb-10 last:mb-0 relative"
            >
              {/* Node */}
              <div
                className="absolute -left-[25px] top-1.5 h-3 w-3 border flex items-center justify-center"
                style={{
                  borderColor: i === 0 ? C.sky : "#1e3a5a",
                  backgroundColor: "#060c16",
                }}
              >
                <div
                  className="h-1 w-1"
                  style={{ backgroundColor: i === 0 ? C.sky : "#1e3a5a" }}
                />
              </div>
              <p
                className="text-xs font-mono tracking-[0.22em] uppercase mb-2"
                style={{ color: C.sky, opacity: 0.5 }}
              >
                Phase {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-lg text-slate-400 leading-[1.8] max-w-[64ch]">
                {h}
              </p>
            </Fade>
          ))}

          {/* Animated progress fill */}
          <motion.div
            className="absolute left-0 top-0 w-px"
            style={{ backgroundColor: C.sky, opacity: 0.4 }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </div>

        {stream.cta && (
          <Fade delay={0.4} className="mt-12">
            <Link
              to={getStreamCtaPath(stream.id)}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
              style={{ color: C.sky }}
            >
              {stream.cta} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Fade>
        )}
      </div>
    </div>
  );
}

function StreamChapter({ stream, index }) {
  const layout = index % 3;
  if (layout === 0) return <StreamLayoutA stream={stream} index={index} />;
  if (layout === 1) return <StreamLayoutB stream={stream} index={index} />;
  return <StreamLayoutC stream={stream} index={index} />;
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Flight Envelope Studies                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */

function FlightEnvelope() {
  const domains = [
    {
      code: "FE-01",
      title: "Transonic Buffet Suppression",
      trl: "TRL 4",
      desc: "Active boundary layer control techniques tested under transonic buffet regimes. Target: 22% envelope expansion at Mach 0.72.",
    },
    {
      code: "FE-02",
      title: "High-Alpha Recovery Logic",
      trl: "TRL 5",
      desc: "Deterministic stall recovery sequences integrated into flight law architecture. Zero-undefined-state policy maintained throughout.",
    },
    {
      code: "FE-03",
      title: "Gust Load Alleviation",
      trl: "TRL 3",
      desc: "Distributed MEMS sensors feed real-time gust detection into adaptive control surface deflection within 8 ms response windows.",
    },
    {
      code: "FE-04",
      title: "Low-Observable Manoeuvring",
      trl: "TRL 2",
      desc: "Trajectory optimisation under radar cross-section constraints. Combining flight performance with signature management.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <Fade>
              <Label color={C.acc}>Frontier Research</Label>
              <h2
                className="font-black text-slate-900 leading-[0.93] tracking-[-0.02em] uppercase"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)",
                }}
              >
                Flight Envelope
                <br />
                Expansion Studies
              </h2>
              <p className="mt-4 text-base text-slate-500 leading-[1.8] max-w-[38ch]">
                Where the physics become uncertain — our instruments become
                sharper. Systematic testing at the boundaries of controlled
                flight defines what the next generation of UAV platforms can
                sustainably endure.
              </p>
            </Fade>
          </div>

          <div className="grid sm:grid-cols-2 gap-0 border border-slate-100">
            {domains.map((d, i) => (
              <Fade
                key={d.code}
                delay={i * 0.08}
                className="p-7 border-b border-r border-slate-100 last:border-b-0 last:border-r-0 [&:nth-child(even)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-mono tracking-[0.22em] text-slate-400 uppercase">
                    {d.code}
                  </p>
                  <span
                    className="text-xs font-mono tracking-[0.16em] border px-2 py-0.5 uppercase"
                    style={{ borderColor: C.acc + "60", color: C.acc }}
                  >
                    {d.trl}
                  </span>
                </div>
                <h3
                  className="font-bold text-slate-900 uppercase tracking-wide mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.1rem",
                  }}
                >
                  {d.title}
                </h3>
                <LineReveal className="mb-3 opacity-20" />
                <p className="text-sm text-slate-500 leading-[1.8]">{d.desc}</p>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Sensor Fusion Blackbox                                                     */
/* ══════════════════════════════════════════════════════════════════════════ */

function SensorFusion() {
  const streams = [
    {
      tag: "LiDAR ↔ Stereo",
      latency: "< 8 ms",
      desc: "Depth-map fusion across differing point-cloud densities using probabilistic alignment kernels.",
    },
    {
      tag: "Thermal ↔ RGB",
      latency: "< 12 ms",
      desc: "Spectral registration for target classification in contested thermal environments.",
    },
    {
      tag: "Radar ↔ IMU",
      latency: "< 4 ms",
      desc: "Doppler-assisted inertial correction for GNSS-denied low-altitude navigation.",
    },
    {
      tag: "Acoustic ↔ Visual",
      latency: "< 19 ms",
      desc: "Multi-modal object permanence tracking through complete occlusion windows.",
    },
  ];

  return (
    <section className="relative bg-[#04080f] py-24 md:py-28 overflow-hidden">
      <TechGrid opacity={0.04} />
      <Scanlines />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-16 grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Label>Experimental Research</Label>
            <h2
              className="font-black text-white leading-[0.92] tracking-[-0.02em] uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              }}
            >
              Sensor Fusion
              <br />
              Blackbox Lab
            </h2>
          </div>
          <p className="text-base text-slate-500 leading-[1.85]">
            Before any perception stack enters airframe testing, it must survive
            our RF-isolated blackbox environment — deliberate signal
            degradation, induced sensor drop-out, adversarial object injection,
            and complete GPS denial. Every fusion algorithm exits with a
            verified latency budget.
          </p>
        </Fade>

        <div className="border-t border-white/6">
          {streams.map((s, i) => (
            <Fade
              key={s.tag}
              delay={i * 0.08}
              className="grid grid-cols-[1fr_auto] gap-8 items-center py-5 border-b border-white/6 last:border-0 sm:grid-cols-[200px_auto_1fr]"
            >
              <p
                className="text-sm font-mono tracking-[0.18em] uppercase"
                style={{ color: C.sky }}
              >
                {s.tag}
              </p>
              <span
                className="hidden sm:block border px-3 py-1 text-xs font-mono tracking-[0.18em] uppercase whitespace-nowrap"
                style={{ borderColor: "#1e3a5a", color: "#4a7a9b" }}
              >
                Fusion Latency {s.latency}
              </span>
              <p className="text-base text-slate-500 leading-[1.75] col-span-2 sm:col-span-1">
                {s.desc}
              </p>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Autonomous Swarm Trials                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */

function SwarmTrials() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
          <div>
            <Fade>
              <Label color={C.acc}>Active Trial · Swarm Intelligence</Label>
              <h2
                className="font-black text-slate-900 leading-[0.92] tracking-[-0.02em] uppercase mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                }}
              >
                Emergent Swarm
                <br />
                Cognition Trials
              </h2>
              <LineReveal className="mb-8 opacity-20" />
              <p className="text-lg text-slate-500 leading-[1.9] max-w-[60ch] mb-8">
                Swarm intelligence cannot be designed top-down — it must be
                cultivated. Our trials infrastructure runs 500-node
                heterogeneous virtual fleets through adversarial mission
                scenarios, observing emergent consensus behaviour without
                central coordination. Each trial generates three million
                decision-state datapoints. The goal is not control. The goal is
                coherence.
              </p>
              <p className="text-lg text-slate-500 leading-[1.9] max-w-[60ch]">
                Phase II trials introduce partial-information environments:
                nodes operate with incomplete sensor coverage and must develop
                distributed inference protocols through interaction alone.
                Convergence times are tracked against mission complexity
                indices.
              </p>
            </Fade>
          </div>

          <Fade delay={0.2} className="flex flex-col gap-6">
            {[
              { code: "SW-M01", label: "Nodes per Trial Fleet", value: "500" },
              {
                code: "SW-M02",
                label: "Decision States per Run",
                value: "3M+",
              },
              {
                code: "SW-M03",
                label: "Consensus Latency Target",
                value: "< 120ms",
              },
              {
                code: "SW-M04",
                label: "Trial Phases Completed",
                value: "2 / 4",
              },
            ].map((m, i) => (
              <div
                key={m.code}
                className="py-5 border-b border-slate-100 last:border-0"
              >
                <p className="text-xs font-mono tracking-[0.2em] text-slate-400 uppercase mb-1">
                  {m.code} · {m.label}
                </p>
                <p
                  className="text-3xl font-black text-slate-900"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Structural Fatigue & Quantum Navigation                                    */
/* ══════════════════════════════════════════════════════════════════════════ */

function LabSystems() {
  return (
    <section className="relative bg-[#060c16] py-24 md:py-28 overflow-hidden">
      <TechGrid opacity={0.035} color="#4a6a88" />
      <NoiseBg />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-16">
          <Label>Structural & Navigation Research</Label>
          <h2
            className="font-black text-white leading-[0.92] tracking-[-0.02em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            }}
          >
            Simulation Lab
            <br />
            Systems
          </h2>
        </Fade>

        <div className="grid lg:grid-cols-2 gap-0 border border-white/6">
          {/* Structural fatigue */}
          <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/6">
            <p className="text-xs font-mono tracking-[0.22em] text-slate-600 uppercase mb-6">
              Simulation Lab · Structural Systems
            </p>
            <h3
              className="font-bold text-white uppercase mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "1.6rem",
              }}
            >
              Structural Fatigue Simulation
            </h3>
            <LineReveal className="mb-6 opacity-15" color={C.sky} />
            <p className="text-base text-slate-500 leading-[1.85] mb-6">
              High-cycle fatigue campaigns run at 200× real-time on digital twin
              airframe replicas. Crack propagation models incorporate material
              variability distributions from actual manufacturing tolerances. A
              single overnight run accumulates the equivalent of four
              operational years.
            </p>
            <div className="space-y-3">
              {[
                "CFRP laminate delamination tracking",
                "Rotor hub stress concentration analysis",
                "Thermal cycling effect on joint integrity",
                "Vibration-induced connector fatigue",
              ].map((item, i) => (
                <Fade
                  key={item}
                  delay={i * 0.07}
                  className="flex gap-3 items-start"
                >
                  <span
                    className="mt-2 h-[3px] w-[3px] flex-shrink-0 rounded-full"
                    style={{ backgroundColor: C.sky, opacity: 0.5 }}
                  />
                  <p className="text-sm text-slate-500 leading-[1.7]">{item}</p>
                </Fade>
              ))}
            </div>
          </div>

          {/* Quantum navigation */}
          <div className="p-8 lg:p-10">
            <p className="text-xs font-mono tracking-[0.22em] text-slate-600 uppercase mb-6">
              Simulation Lab · Quantum Navigation
            </p>
            <h3
              className="font-bold text-white uppercase mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "1.6rem",
              }}
            >
              Quantum Navigation
              <br />
              Research Direction
            </h3>
            <LineReveal className="mb-6 opacity-15" color={C.sky} />
            <p className="text-base text-slate-500 leading-[1.85] mb-6">
              Atom interferometry for inertial navigation represents a
              decade-horizon technology. Our research establishes theoretical
              performance bounds for miniaturised cold-atom gyroscopes and their
              potential integration into UAV-class guidance systems for
              GPS-denied deep penetration missions.
            </p>
            <div className="border border-white/6 p-5">
              <p className="text-xs font-mono tracking-[0.2em] text-slate-600 uppercase mb-3">
                Current Status
              </p>
              <p className="text-sm font-mono text-slate-500">
                Theoretical modelling phase. University partnership active.
                First hardware prototype targeted Q3 next fiscal year. TRL: 1.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Persistent ISR Mission Concepts                                            */
/* ══════════════════════════════════════════════════════════════════════════ */

function ISRConcepts() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const concepts = [
    {
      code: "ISR-STRATOS",
      title: "Stratospheric Persistence",
      desc: "Station-keeping above weather systems at 22 km altitude for persistent ISR relay beyond commercial airspace constraints.",
    },
    {
      code: "ISR-SHADOW",
      title: "Low-Signature Urban ISR",
      desc: "Acoustic and thermal signature suppression for sub-100m urban operations within civil airspace coexistence frameworks.",
    },
    {
      code: "ISR-RECOVER",
      title: "Battle Damage Reconfiguration",
      desc: "In-flight structural self-assessment triggering adaptive flight law reconfiguration post-damage without mission abort.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "75vh" }}
    >
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src="https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=1600&q=80&fit=crop"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{
            opacity: 0.14,
            filter: "contrast(1.2) saturate(0.4) brightness(0.9)",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#04080f] via-[#04080f]/85 to-[#04080f]" />
      <TechGrid opacity={0.03} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-24 md:py-28">
        <Fade className="mb-16">
          <Label>Horizon Programmes</Label>
          <h2
            className="font-black text-white leading-[0.92] tracking-[-0.02em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            }}
          >
            Persistent ISR
            <br />
            Mission Concepts
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-[1.85] max-w-[56ch]">
            These are not products. They are operational questions posed against
            physics. Each concept is simulated to failure before any hardware
            investment is approved.
          </p>
        </Fade>

        <div className="grid lg:grid-cols-3 gap-0 border border-white/6">
          {concepts.map((c, i) => (
            <Fade
              key={c.code}
              delay={i * 0.1}
              className="p-8 border-b lg:border-b-0 lg:border-r border-white/6 last:border-0"
            >
              <p className="text-xs font-mono tracking-[0.22em] text-slate-600 uppercase mb-4">
                {c.code}
              </p>
              <h3
                className="font-bold text-white uppercase mb-4"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.3rem",
                }}
              >
                {c.title}
              </h3>
              <LineReveal className="mb-4 opacity-10" color={C.sky} />
              <p className="text-sm text-slate-500 leading-[1.8]">{c.desc}</p>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Publications Archive Terminal                                              */
/* ══════════════════════════════════════════════════════════════════════════ */

function PublicationsArchive() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-14">
          <Label color={C.acc}>Spec Research Archive</Label>
          <h2
            className="font-black text-slate-900 leading-[0.92] tracking-[-0.02em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)",
            }}
          >
            Publications & Spec Notes
          </h2>
        </Fade>

        {/* Terminal header */}
        <div className="border border-slate-200 mb-0">
          <div className="border-b border-slate-100 px-5 py-3 flex items-center gap-4 bg-slate-50">
            <Pulse size={5} color={C.acc} />
            <p className="text-xs font-mono tracking-[0.22em] text-slate-400 uppercase">
              Archive Terminal · {publications.length} Records · Spec
              Chronological
            </p>
          </div>

          <div>
            {publications.map((pub, i) => (
              <Fade key={`${pub.title}-${pub.year}`} delay={i * 0.06}>
                <div className="group grid grid-cols-[40px_1fr_auto] gap-4 items-center px-5 py-4 border-b border-slate-50 last:border-0 cursor-default transition-colors duration-150 hover:bg-[#f8faff]">
                  <span className="text-xs font-mono text-slate-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-base text-slate-700 leading-snug font-medium transition-colors duration-150 group-hover:text-sky-600">
                      {pub.title}
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {pub.year}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono tracking-[0.16em] border px-2 py-0.5 uppercase whitespace-nowrap"
                    style={{ borderColor: C.acc + "50", color: C.acc }}
                  >
                    {pub.status}
                  </span>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        <Fade delay={0.3} className="mt-8">
          <Link
            to="/contact?type=whitepaper"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
            style={{ color: C.acc }}
          >
            Request research access
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </Fade>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Closing Statement                                                          */
/* ══════════════════════════════════════════════════════════════════════════ */

function ResearchMandate() {
  return (
    <section className="relative bg-[#04080f] overflow-hidden py-28 md:py-36">
      <TechGrid opacity={0.04} />
      <Scanlines />
      <NoiseBg opacity={0.03} />

      {/* Animated vertical centre line */}
      <motion.div
        aria-hidden
        className="absolute top-0 bottom-0 left-1/2 w-px"
        style={{ backgroundColor: C.sky, opacity: 0.04 }}
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 text-center">
        <Fade>
          <p
            className="mb-10 text-xs font-mono tracking-[0.32em] uppercase"
            style={{ color: C.sky, opacity: 0.5 }}
          >
            Research Spec Charter · Rev. 1
          </p>
        </Fade>
        <SlideUp>
          <blockquote
            className="font-black text-white leading-[0.94] tracking-[-0.03em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5.8rem)",
            }}
          >
            "Every deployment begins
            <br />
            <span style={{ color: C.sky }}>with a verified spec.</span>
            <br />
            Every mission scales
            <br />
            with controlled autonomy."
          </blockquote>
        </SlideUp>
        <Fade delay={0.4} className="mt-12">
          <LineReveal className="max-w-xs mx-auto opacity-20" color={C.sky} />
        </Fade>
      </div>
    </section>
  );
}

const streamShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  aim: PropTypes.string,
  outcomes: PropTypes.string,
  cta: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
});

CountUp.propTypes = {
  to: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  suffix: PropTypes.string,
};

TechGrid.propTypes = {
  opacity: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
};

Scanlines.propTypes = {
  opacity: PropTypes.number,
};

NoiseBg.propTypes = {
  opacity: PropTypes.number,
};

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
};

SlideUp.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

LineReveal.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  color: PropTypes.string,
};

Pulse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Waveform.propTypes = {
  bars: PropTypes.number,
  height: PropTypes.number,
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

StreamLayoutA.propTypes = {
  stream: streamShape.isRequired,
  index: PropTypes.number.isRequired,
};

StreamLayoutB.propTypes = {
  stream: streamShape.isRequired,
  index: PropTypes.number.isRequired,
};

StreamLayoutC.propTypes = {
  stream: streamShape.isRequired,
  index: PropTypes.number.isRequired,
};

StreamChapter.propTypes = {
  stream: streamShape.isRequired,
  index: PropTypes.number.isRequired,
};

/* ══════════════════════════════════════════════════════════════════════════ */
/* Root                                                                       */
/* ══════════════════════════════════════════════════════════════════════════ */

const Research = () => (
  <div
    className="min-h-screen"
    style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
  >
    <Hero />

    <section className="bg-[#f4f5f7] py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade>
          <p className="text-xs font-mono tracking-[0.28em] uppercase text-slate-400">
            Active Spec Research Streams · Core Documentation Areas
          </p>
        </Fade>
      </div>
    </section>

    {rdStreams.map((stream, i) => (
      <StreamChapter key={stream.id} stream={stream} index={i} />
    ))}

    <PublicationsArchive />
    <ResearchMandate />
  </div>
);

export default Research;
