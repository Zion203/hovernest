import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

/* ── Token ───────────────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";

/* ── Data ────────────────────────────────────────────────────────────────── */
const WHY_JOIN = [
  {
    index: "01",
    title: "Real Projects. Actual Air Time.",
    desc: "No dummy tasks or sandbox environments. Interns contribute to active deployments with flight hours logged on real hardware.",
  },
  {
    index: "02",
    title: "AI · Embedded · Aerospace Stack",
    desc: "Cross-domain exposure across machine learning pipelines, embedded firmware, and aeronautical engineering — in a single programme.",
  },
  {
    index: "03",
    title: "Founder & Engineer Mentorship",
    desc: "Direct working relationships with founders and senior engineers. Not a corporate buddy — a real technical mentor.",
  },
  {
    index: "04",
    title: "Certificate + Letter of Recommendation",
    desc: "Personalised letter of recommendation and a verified completion certificate issued on programme close.",
  },
  {
    index: "05",
    title: "Pre-Placement Offer Pathway",
    desc: "High-performing interns are considered for full-time conversion before the programme ends — no separate hiring round.",
  },
  {
    index: "06",
    title: "IP Credit on Contributions",
    desc: "Significant contributions are acknowledged in internal project documentation and, where applicable, patent filings.",
  },
];

const TRACKS = [
  {
    code: "TR-01",
    title: "Drone Engineering",
    domain: "Hardware & Airframes",
    duration: "2–3 Months",
    mode: "On-site · Chennai",
    description:
      "Design airframe components, payload mounts, and field-serviceable modules. Work with composite materials, simulation toolchains, and real prototype hardware from day one.",
    skills: [
      "SolidWorks / CAD",
      "Composites",
      "Structural Analysis",
      "Prototyping",
    ],
  },
  {
    code: "TR-02",
    title: "AI / Machine Learning",
    domain: "Computer Vision & Autonomy",
    duration: "2–3 Months",
    mode: "Hybrid",
    description:
      "Deploy edge AI models for crop disease detection, object tracking, and in-flight anomaly classification. Inference runs on drone hardware — not cloud endpoints.",
    skills: [
      "PyTorch / TensorFlow",
      "Edge Inference",
      "ONNX / TensorRT",
      "OpenCV",
    ],
  },
  {
    code: "TR-03",
    title: "Embedded Systems",
    domain: "Flight Controllers & Firmware",
    duration: "3 Months",
    mode: "On-site · Chennai",
    description:
      "Contribute directly to the NeuroFC firmware stack — real-time sensor fusion, actuator control loops, and safety-critical software running on live production platforms.",
    skills: ["C / C++", "RTOS", "MAVLINK", "Sensor Fusion"],
  },
  {
    code: "TR-04",
    title: "Web / App Development",
    domain: "Drone Platforms & Dashboards",
    duration: "1–2 Months",
    mode: "Remote",
    description:
      "Build telemetry dashboards, fleet management interfaces, and mission planning tools. Full-stack development with live operational data from active drone fleets.",
    skills: [
      "React / TypeScript",
      "REST APIs",
      "WebSockets",
      "Data Visualisation",
    ],
  },
  {
    code: "TR-05",
    title: "Business & Strategy",
    domain: "Startup Operations",
    duration: "1–3 Months",
    mode: "Hybrid",
    description:
      "Market analysis, programme structuring, investor material preparation, and partner outreach. Real startup exposure with output that feeds into board-level decisions.",
    skills: [
      "Market Research",
      "Financial Modelling",
      "Pitch Decks",
      "Operations",
    ],
  },
];

const PROGRAMME_DETAILS = [
  { label: "Duration", value: "1–3 Months" },
  { label: "Mode", value: "Hybrid / Remote" },
  { label: "Location", value: "Chennai, India (HQ)" },
  { label: "Stipend", value: "Performance-based" },
  { label: "Eligibility", value: "Engineering · Tech · Business" },
  { label: "Cohort Size", value: "Small — 3 to 5 per track" },
];

const TESTIMONIALS = [
  {
    initials: "AK",
    name: "Arjun K",
    discipline: "Mechanical Engineering · IIT Madras",
    track: "TR-01 · Drone Engineering",
    quote:
      "I went from CAD concepts to holding a physical prototype I had personally optimised. The frame redesign reduced vehicle weight by 12% — and it actually flew.",
    outcome: "−12% airframe weight reduction",
    color: ACCENT,
  },
  {
    initials: "PS",
    name: "Priya S",
    discipline: "AI / ML Engineering · BITS Pilani",
    track: "TR-02 · Computer Vision",
    quote:
      "I built and deployed a crop disease detection model that runs inference on the drone itself. 89% accuracy in real field conditions in eight weeks — that was not something I expected.",
    outcome: "89% field accuracy on edge device",
    color: "#059669",
  },
  {
    initials: "RM",
    name: "Rahul M",
    discipline: "Embedded Systems · NIT Trichy",
    track: "TR-03 · NeuroFC Firmware",
    quote:
      "Contributing to NeuroFC firmware was the most demanding work I have done. We improved sensor response latency and it became part of the production build.",
    outcome: "Contribution merged into production",
    color: "#0891b2",
  },
];

const REQUIREMENTS = [
  "Currently enrolled in undergraduate or graduate programmes — Engineering, CS, Robotics, or related disciplines.",
  "Strong domain fundamentals with demonstrable hands-on project experience. Portfolio or GitHub preferred.",
  "Available for a minimum of one month. Full-time preferred; part-time arrangements are considered case by case.",
  "Genuine interest in building systems that operate in the physical, real-world environment.",
];

/* ── Animation primitives ────────────────────────────────────────────────── */
function Fade({ children, className = "", delay = 0, y = 20 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
};

function SlideUp({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "108%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

SlideUp.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

function LineReveal({ className = "", delay = 0, color = "#e2e8f0" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  return (
    <div ref={ref} className={`h-px overflow-hidden ${className}`}>
      <motion.div
        className="h-full"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </div>
  );
}

LineReveal.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  color: PropTypes.string,
};

/* ── Texture overlays ────────────────────────────────────────────────────── */
function TechGrid({ opacity = 0.055 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="igrid"
            width="52"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 52 0 L 0 0 0 52"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#igrid)" />
      </svg>
    </div>
  );
}

function DotGrid({ opacity = 0.06 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="idots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.85" fill="#6b7280" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#idots)" />
      </svg>
    </div>
  );
}

/* ── Eyebrow label ───────────────────────────────────────────────────────── */
function Label({ children }) {
  return (
    <p
      className="mb-3 text-[11px] font-mono tracking-[0.3em] uppercase"
      style={{ color: ACCENT }}
    >
      {children}
    </p>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Hero                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const slideY = useTransform(scrollYProgress, [0, 0.65], [0, -32]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#07080b]"
      style={{ minHeight: "64vh" }}
    >
      <TechGrid opacity={0.06} />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse at top right, ${ACCENT}14 0%, transparent 65%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07080b]" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16"
        style={{
          y: slideY,
          minHeight: "64vh",
          paddingTop: "10rem",
          paddingBottom: "5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Fade delay={0.1}>
          <div
            className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 border text-[12px] font-bold uppercase tracking-[0.24em]"
            style={{
              borderColor: `${ACCENT}40`,
              color: ACCENT,
              backgroundColor: `${ACCENT}08`,
            }}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#34d399" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            Student Programmes · 2025 Cohort Open
          </div>
        </Fade>

        <SlideUp delay={0.2}>
          <h1
            className="font-black text-white leading-[0.92] tracking-[-0.03em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 6.2rem)",
            }}
          >
            Intern with Hovernest.
            <br />
            <span style={{ color: ACCENT }}>Build the Future</span>
            <br />
            of Autonomous Drones.
          </h1>
        </SlideUp>

        <Fade delay={0.45} className="mt-6 max-w-[54ch]">
          <p className="text-[14px] text-slate-400 leading-[1.9]">
            Real drone hardware. Real AI models. Real missions. Not simulations
            — work that ships into production systems and logs actual flight
            hours.
          </p>
        </Fade>

        <Fade delay={0.58} className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://forms.google.com/hovernest-internship-apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: ACCENT }}
          >
            Apply Now
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 border border-white/15 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-slate-400 hover:border-white/30 hover:text-slate-200 transition-colors duration-200"
          >
            Ask a Question
          </Link>
        </Fade>

        {/* Stat strip */}
        <Fade
          delay={0.7}
          className="mt-14 pt-8 border-t border-white/6 grid grid-cols-3 sm:grid-cols-3 gap-8"
        >
          {[
            { v: "5", l: "Active Tracks" },
            { v: "3–5", l: "Interns per Cohort" },
            { v: "PPO", l: "Pathway Available" },
          ].map((s) => (
            <div key={s.l}>
              <p
                className="text-2xl font-black text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {s.v}
              </p>
              <p className="mt-0.5 text-[11px] font-mono tracking-[0.2em] text-slate-600 uppercase">
                {s.l}
              </p>
            </div>
          ))}
        </Fade>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 leading-[0]" aria-hidden>
        <svg
          viewBox="0 0 1440 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6"
          preserveAspectRatio="none"
        >
          <path d="M0 24 C480 0 960 24 1440 0 L1440 24 Z" fill="#f5f6f8" />
        </svg>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Why Join — editorial row list                                               */
/* ══════════════════════════════════════════════════════════════════════════ */
function WhyJoin() {
  return (
    <section className="bg-[#f5f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <Fade>
              <Label>Why Hovernest</Label>
              <h2
                className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl mb-5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What You
                <br />
                Actually Get.
              </h2>
              <LineReveal className="mb-5" />
              <p className="text-[14px] text-slate-500 leading-[1.85]">
                Six concrete things that differentiate a Hovernest internship
                from a placement in a larger organisation where interns rarely
                see production systems.
              </p>
            </Fade>
          </div>

          <div className="border-t border-slate-200">
            {WHY_JOIN.map((item, i) => (
              <Fade key={item.index} delay={i * 0.07}>
                <div className="group grid grid-cols-[36px_1fr] gap-5 py-6 border-b border-slate-100 last:border-0 hover:bg-white transition-colors duration-150 px-4 -mx-4">
                  <span
                    className="text-[12px] font-black font-mono tracking-[0.12em] mt-0.5"
                    style={{ color: ACCENT }}
                  >
                    {item.index}
                  </span>
                  <div>
                    <h3
                      className="mb-1.5 text-[14px] font-bold text-slate-900 uppercase tracking-wide"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 leading-[1.8]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Tracks — full-width editorial rows                                          */
/* ══════════════════════════════════════════════════════════════════════════ */
function TrackRow({ track, index }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  return (
    <Fade delay={index * 0.07}>
      <div
        className="group border-b border-slate-200 last:border-0 bg-white transition-colors duration-150"
        style={{ backgroundColor: open ? "#faf9ff" : "white" }}
      >
        {/* Main row */}
        <button
          type="button"
          onClick={toggleOpen}
          aria-expanded={open}
          className="w-full grid items-center gap-6 px-6 py-6 text-left"
          style={{ gridTemplateColumns: "80px minmax(0,1fr) 170px 190px" }}
        >
          {/* Code */}
          <p className="text-[12px] font-mono tracking-[0.2em] text-slate-400">
            {track.code}
          </p>

          {/* Title + domain */}
          <div>
            <h3
              className="text-[17px] font-bold text-slate-900 uppercase tracking-wide leading-tight group-hover:text-[#6E44FF] transition-colors duration-150"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {track.title}
            </h3>
            <p className="text-[12px] font-mono text-slate-400 mt-0.5">
              {track.domain}
            </p>
          </div>

          {/* Duration badge */}
          <span
            className="hidden sm:inline-block border px-3 py-1 text-[12px] font-bold uppercase tracking-[0.18em] whitespace-nowrap"
            style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
          >
            {track.duration}
          </span>

          {/* Mode + expand */}
          <div className="flex w-full items-center justify-between gap-4">
            <span className="hidden md:block text-[12px] font-mono text-slate-400 whitespace-nowrap">
              {track.mode}
            </span>
            <motion.div
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="h-6 w-6 flex items-center justify-center flex-shrink-0"
              style={{ color: open ? ACCENT : "#94a3b8" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v12M1 7h12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
        </button>

        {/* Expanded panel */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div className="border-t border-slate-100 px-6 pb-7 pt-5 grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <p className="text-[14px] text-slate-600 leading-[1.85] max-w-[64ch] mb-5">
                {track.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {track.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-[12px] font-mono tracking-[0.12em] border text-slate-500"
                    style={{ borderColor: "#e2e8f0" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://forms.google.com/hovernest-internship-apply"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60 whitespace-nowrap"
                style={{ color: ACCENT }}
              >
                Apply for this Track
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Fade>
  );
}

TrackRow.propTypes = {
  track: PropTypes.shape({
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

function Tracks() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-12">
          <Label>Internship Tracks</Label>
          <h2
            className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Choose Your Domain.
          </h2>
          <p className="text-[14px] text-slate-400 max-w-[54ch]">
            Click any track to expand full description, required skills, and
            apply link.
          </p>
        </Fade>

        {/* Table header */}
        <div
          className="hidden sm:grid items-center gap-6 px-6 pb-3 border-b border-slate-300 mb-0"
          style={{ gridTemplateColumns: "80px minmax(0,1fr) 170px 190px" }}
        >
          {["Ref", "Track", "Duration", "Mode"].map((h) => (
            <p
              key={h}
              className="text-[11px] font-mono tracking-[0.24em] text-slate-400 uppercase"
            >
              {h}
            </p>
          ))}
        </div>

        {/* Rows */}
        <div className="border-x border-b border-slate-200">
          {TRACKS.map((track, i) => (
            <TrackRow key={track.code} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Programme Details — spec table                                              */
/* ══════════════════════════════════════════════════════════════════════════ */
function ProgrammeDetails() {
  return (
    <section className="bg-[#f5f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <Fade>
              <Label>Programme Info</Label>
              <h2
                className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl mb-5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What to Expect.
              </h2>
              <LineReveal className="mb-5" />
              <p className="text-[14px] text-slate-500 leading-[1.85]">
                Structured enough to develop fast. Open enough to make a real
                contribution. Every intern at Hovernest touches work that gets
                deployed.
              </p>
            </Fade>
          </div>

          {/* Spec table */}
          <div className="bg-white border border-slate-200">
            {PROGRAMME_DETAILS.map((item, i) => (
              <Fade key={item.label} delay={i * 0.07}>
                <div
                  className="grid items-center gap-6 px-6 py-5 border-b border-slate-100 last:border-0"
                  style={{ gridTemplateColumns: "140px 1fr" }}
                >
                  <p className="text-[11px] font-mono tracking-[0.2em] text-slate-400 uppercase">
                    {item.label}
                  </p>
                  <p className="text-[14px] font-semibold text-slate-900">
                    {item.value}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Past Interns — testimonials without icon boxes                              */
/* ══════════════════════════════════════════════════════════════════════════ */
function TestimonialCard({ t, index }) {
  return (
    <Fade delay={index * 0.1}>
      <motion.div
        className="flex flex-col bg-white border border-slate-200 p-7 h-full transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.22 }}
      >
        {/* Header — no icon box, just text identity */}
        <div className="flex items-start justify-between mb-5 gap-4">
          <div>
            <p
              className="text-[17px] font-bold text-slate-900 uppercase tracking-wide"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t.name}
            </p>
            <p className="text-[12px] font-mono text-slate-400 mt-0.5">
              {t.discipline}
            </p>
          </div>
          <span
            className="flex-shrink-0 border px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.16em] whitespace-nowrap"
            style={{ borderColor: `${t.color}40`, color: t.color }}
          >
            {t.track}
          </span>
        </div>

        {/* Ruled separator — no gimmicks */}
        <div className="h-px bg-slate-100 mb-5" />

        <blockquote className="flex-1 text-[14px] text-slate-600 leading-[1.85] italic mb-6">
          "{t.quote}"
        </blockquote>

        {/* Outcome strip */}
        <div className="border-l-2 pl-4 py-2" style={{ borderColor: t.color }}>
          <p className="text-[11px] font-mono tracking-[0.2em] text-slate-400 uppercase mb-0.5">
            Intern Outcome
          </p>
          <p className="text-[14px] font-bold text-slate-800">{t.outcome}</p>
        </div>
      </motion.div>
    </Fade>
  );
}

TestimonialCard.propTypes = {
  t: PropTypes.shape({
    name: PropTypes.string.isRequired,
    discipline: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    outcome: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-12">
          <Label>Past Interns</Label>
          <h2
            className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Work That Shipped.
          </h2>
        </Fade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Requirements — numbered editorial list                                      */
/* ══════════════════════════════════════════════════════════════════════════ */
function Requirements() {
  return (
    <section className="bg-[#f5f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-14 lg:gap-24 items-start">
          <Fade className="lg:sticky lg:top-28">
            <Label>Eligibility</Label>
            <h2
              className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Who Should Apply.
            </h2>
          </Fade>

          <div className="border-t border-slate-200">
            {REQUIREMENTS.map((req, i) => (
              <Fade key={req} delay={i * 0.08}>
                <div className="grid grid-cols-[36px_1fr] gap-5 py-7 border-b border-slate-100 last:border-0">
                  <span
                    className="text-[12px] font-black font-mono tracking-[0.12em] mt-0.5"
                    style={{ color: ACCENT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] text-slate-600 leading-[1.85]">
                    {req}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* CTA                                                                         */
/* ══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#07080b] py-24 md:py-28">
      <TechGrid opacity={0.04} />
      <DotGrid opacity={0.04} />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 text-center">
        <Fade delay={0.05}>
          <p
            className="mb-5 text-[11px] font-mono tracking-[0.3em] uppercase"
            style={{ color: ACCENT, opacity: 0.8 }}
          >
            Applications Open · 2025 Cohort
          </p>
        </Fade>

        <SlideUp delay={0.15}>
          <h2
            className="font-black text-white leading-[0.92] tracking-[-0.03em] uppercase mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
            }}
          >
            Ready to Build
            <br />
            <span style={{ color: ACCENT }}>Something That Flies?</span>
          </h2>
        </SlideUp>

        <Fade delay={0.3} className="mb-10">
          <p className="text-[14px] text-slate-400 leading-[1.85] max-w-[50ch] mx-auto">
            Send us your resume, portfolio, and a brief note on what draws you
            to autonomous flight. We respond within five business days.
          </p>
        </Fade>

        <Fade
          delay={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="https://forms.google.com/hovernest-internship-apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85 focus:outline-none"
            style={{ backgroundColor: ACCENT }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            Apply Now
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </motion.a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/15 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-slate-400 hover:border-white/30 hover:text-slate-200 transition-colors duration-200"
          >
            Ask a Question
          </Link>
        </Fade>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Root                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
const Internships = () => (
  <div
    className="min-h-screen"
    style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
  >
    <Hero />
    <WhyJoin />
    <Tracks />
    <ProgrammeDetails />
    <Testimonials />
    <Requirements />
    <CTASection />
  </div>
);

export default Internships;
