import { useRef } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ── Design tokens ────────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";

/* ── Animation primitives ────────────────────────────────────────────────── */
function FadeUp({ children, className = "", delay = 0, y = 28 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

FadeUp.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
};

function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

/* ── Section label ───────────────────────────────────────────────────────── */
function EyebrowLabel({ children }) {
  return (
    <p
      className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
      style={{ color: ACCENT }}
    >
      {children}
    </p>
  );
}

/* ── Thin rule ───────────────────────────────────────────────────────────── */
function Rule({ className = "" }) {
  return <div className={`border-t border-slate-200 ${className}`} />;
}

Rule.propTypes = {
  className: PropTypes.string,
};

/* ── SVG dot-grid background ─────────────────────────────────────────────── */
function DotGrid({ opacity = 0.07 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dotgrid"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#64748b" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>
    </div>
  );
}

/* ── Thin SVG line grid ───────────────────────────────────────────────────── */
function LineGrid({ opacity = 0.05 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="linegrid"
            x="0"
            y="0"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#linegrid)" />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Hero                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a0d14] text-white"
      style={{ minHeight: "88vh", display: "flex", alignItems: "flex-end" }}
    >
      <LineGrid opacity={0.08} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/20 via-transparent to-[#0a0d14]" />

      {/* Subtle accent corner wash */}
      <div
        className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse at top right, ${ACCENT}18 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-16 pb-20 md:pb-28 pt-36">
        <motion.p
          className="mb-5 text-sm font-semibold uppercase tracking-[0.28em]"
          style={{ color: ACCENT, opacity: 0.9 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          About Hovernest
        </motion.p>

        <div className="overflow-hidden mb-3">
          <motion.h1
            className="font-black text-white leading-[0.93] tracking-[-0.03em]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7.5vw, 6.8rem)",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
          >
            Built to Make
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-black leading-[0.93] tracking-[-0.03em]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7.5vw, 6.8rem)",
              color: ACCENT,
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.42,
            }}
          >
            Missions Matter.
          </motion.h1>
        </div>

        <motion.p
          className="text-base text-slate-400 leading-[1.85] max-w-[52ch] mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          Autonomous logistics systems designed for real-world reliability.
          Built in India, engineered for global deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: ACCENT }}
          >
            Explore Our Systems
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-[0]" aria-hidden>
        <svg
          viewBox="0 0 1440 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7"
          preserveAspectRatio="none"
        >
          <path d="M0 28 C480 0 960 28 1440 0 L1440 28 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Mission pillars                                                             */
/* ══════════════════════════════════════════════════════════════════════════ */
const PILLARS = [
  {
    title: "Autonomous",
    desc: "AI-native VTOL systems that sense, plan, and adapt — reducing human dependency in complex logistics environments.",
  },
  {
    title: "Accessible",
    desc: "Deployable in remote terrain, high-altitude corridors, and underserved infrastructure zones with minimal ground setup.",
  },
  {
    title: "Safe",
    desc: "Every system decision is governed by certified redundancy, deterministic failover logic, and operational risk registers.",
  },
];

function Mission() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <FadeUp className="mb-16 max-w-2xl">
          <EyebrowLabel>Mission</EyebrowLabel>
          <h2
            className="text-4xl font-black text-slate-900 leading-tight tracking-[-0.02em] uppercase md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Make Critical Logistics
            <br />
            <span style={{ color: ACCENT }}>Autonomous, Accessible,</span>
            <br />
            and Safe.
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-0 border border-slate-100">
          {PILLARS.map((p, i) => (
            <FadeUp
              key={p.title}
              delay={i * 0.1}
              className="group p-8 lg:p-10 border-b md:border-b-0 md:border-r border-slate-100 last:border-0 transition-shadow duration-300 hover:shadow-[0_4px_32px_rgba(0,0,0,0.07)]"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Core Pillar
              </p>
              <Rule className="mb-4" />
              <h3
                className="mb-3 text-xl font-bold uppercase tracking-wide text-slate-900"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-[15px] text-slate-500 leading-[1.8]">
                {p.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Story timeline                                                              */
/* ══════════════════════════════════════════════════════════════════════════ */
const STORY = [
  {
    year: "Origin",
    code: "01",
    title: "Workshop Beginnings",
    body: "Hovernest began with a simple question: Why can't critical supplies reach people when they need them most? In remote hospitals, mountain villages, and agricultural fields, the answer was always the same — terrain, infrastructure, and logistics. A small workshop in India became the starting point for solving that problem at scale.",
  },
  {
    year: "Engineering",
    code: "02",
    title: "AI-Native VTOL Development",
    body: "A team of aerospace engineers, roboticists, and field operators coalesced around a shared goal: build autonomous flight systems that don't just fly — they think and adapt. The NeuroFC flight intelligence architecture was developed through iterative real-world testing, not simulation alone.",
  },
  {
    year: "Deployment",
    code: "03",
    title: "Mission Logistics Solutions",
    body: "Today, Hovernest VTOL systems operate across medical, agricultural, infrastructure, and defence-adjacent sectors. Each deployment validates the mission-critical reliability standard the team set at the beginning — field performance that outlasts specifications.",
  },
];

function Story() {
  return (
    <section className="bg-[#f8f9fb] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <FadeUp className="mb-16">
          <EyebrowLabel>Our Story</EyebrowLabel>
          <h2
            className="text-4xl font-black text-slate-900 leading-tight tracking-[-0.02em] uppercase md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            From Workshop
            <br />
            to Global Deployment.
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Vertical rail */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 hidden sm:block"
            aria-hidden
          />

          <div className="space-y-0">
            {STORY.map((item, i) => (
              <FadeUp
                key={item.code}
                delay={i * 0.12}
                className="relative sm:pl-14 pb-12 last:pb-0"
              >
                {/* Node */}
                <div
                  className="absolute left-0 top-1 hidden sm:flex h-10 w-10 items-center justify-center border border-slate-200 bg-[#f8f9fb] text-[11px] font-black"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: i === 0 ? ACCENT : "#94a3b8",
                    borderColor: i === 0 ? ACCENT : undefined,
                  }}
                >
                  {item.code}
                </div>

                <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
                  <div className="pt-1">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: ACCENT }}
                    >
                      {item.year}
                    </p>
                  </div>
                  <div className="border-t border-slate-200 pt-5">
                    <h3
                      className="mb-3 text-xl font-bold uppercase tracking-wide text-slate-900"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-slate-500 leading-[1.85] max-w-[64ch]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Values                                                                      */
/* ══════════════════════════════════════════════════════════════════════════ */
const VALUES = [
  {
    title: "Safety First",
    desc: "Every design decision prioritises mission safety and operational reliability above speed or cost.",
  },
  {
    title: "Truth in Data",
    desc: "Transparent performance metrics, honest specifications, and real-world validation only.",
  },
  {
    title: "Field Before Slide",
    desc: "We test in real conditions before presenting results. No simulation-only claims. No shortcuts.",
  },
  {
    title: "Open for Developers",
    desc: "Open SDK, clear documentation, and a collaborative ecosystem that grows with the community.",
  },
];

function Values() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <FadeUp className="mb-16">
          <EyebrowLabel>Operating Principles</EyebrowLabel>
          <h2
            className="text-4xl font-black text-slate-900 leading-tight tracking-[-0.02em] uppercase md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What We Stand For.
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <FadeUp
              key={v.title}
              delay={i * 0.09}
              className="group relative border border-slate-200 p-7 transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: ACCENT }}
              />
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Operating Principle
              </p>
              <Rule className="mb-4" />
              <h3
                className="mb-2.5 text-base font-bold uppercase tracking-[0.12em] text-slate-900"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {v.title}
              </h3>
              <p className="text-[14px] text-slate-500 leading-[1.8]">
                {v.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Team                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
const TEAM = [
  {
    name: "Brighten Samuel",
    role: "Founder & CEO",
    org: "Founder @ Hovernest Pvt Ltd",
    bio: "Mechatronics engineer specialising in drone systems and product design. Leads product vision, ecosystem building, and UAV innovation.",
    linkedin: "https://www.linkedin.com/in/brighten-samuel-543213290/",
    linkedinImage: "/profile/BS.png",
    initials: "BS",
    color: "#4f46e5",
  },
  {
    name: "Likhitha Uppu",
    role: "Chief Technology Officer",
    org: "Founder @ Zyxen",
    bio: "Leads system architecture, robotics development, and execution systems across Hovernest's full engineering stack.",
    linkedin: "https://www.linkedin.com/in/likhitha-uppu-a38277370/",
    linkedinImage: "/profile/lik.png",
    initials: "LU",
    color: "#0891b2",
  },
  {
    name: "Samuel Ebenezer",
    role: "Chief Operating Officer",
    org: "Founder @ Undzyn",
    bio: "Leads operations, brand execution, and scaling strategy. Ensures mission-critical delivery across all programme verticals.",
    linkedin: "https://www.linkedin.com/in/sam-undzyn/",
    linkedinImage: "/profile/sam.png",
    initials: "SE",
    color: "#059669",
  },
  {
    name: "Sujan S",
    role: "R&D / Full Stack Intern",
    org: "Hovernest R&D Division",
    bio: "Works on GenAI systems, cybersecurity hardening, and backend scalability for mission intelligence platforms.",
    linkedin: "https://www.linkedin.com/in/sujan-s-wolfieexd/",
    linkedinImage: "/profile/sujan.png",
    initials: "SS",
    color: "#7c3aed",
  },
];

function TeamCard({ member, delay, index }) {
  const [imageError, setImageError] = React.useState(false);
  const isEven = index % 2 === 0;

  return (
    <FadeUp delay={delay} className="relative py-12">
      {/* Timeline divider */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 transform -translate-x-1/2" />

      {/* Timeline dot */}
      <div
        className="hidden md:block absolute left-1/2 top-12 w-4 h-4 bg-white border-3 rounded-full transform -translate-x-1/2 z-10"
        style={{ borderColor: member.color }}
      />

      {/* Card container with directional layout */}
      <div className={`grid md:grid-cols-2 gap-8 md:gap-10 items-start`}>
        {/* Image side - alternates left/right */}
        <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
          <motion.div
            className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 cursor-pointer transition-all duration-300"
            whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)", y: -4 }}
            initial={{ opacity: 0, [isEven ? "x" : "-x"]: 40 }}
            whileInView={{ opacity: 1, [isEven ? "x" : "-x"]: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              style={{ backgroundColor: member.color }}
            />

            {/* Avatar block */}
            <div
              className="relative flex h-64 md:h-72 items-center justify-center overflow-hidden"
              style={{ backgroundColor: `${member.color}10` }}
            >
              {member.linkedinImage && !imageError ? (
                <motion.img
                  src={member.linkedinImage}
                  alt={member.name}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <div
                  className="flex h-36 w-36 items-center justify-center text-6xl font-black text-white transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: member.color,
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}
                >
                  {member.initials}
                </div>
              )}

              {/* Overlay gradient on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6"
                aria-hidden
              >
                <div className="text-white">
                  <p className="text-base font-semibold">{member.name}</p>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
            </div>

            {/* Quick info panel - appears on hover */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${member.color}ee 0%, ${member.color}cc 100%)`,
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="text-white">
                <div className="mb-3 pb-3 border-b border-white/30">
                  <p className="text-base font-bold">{member.name}</p>
                  <p className="text-sm font-semibold opacity-90">
                    {member.role.toUpperCase()}
                  </p>
                </div>
                <p className="text-sm leading-relaxed opacity-95">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content side */}
        <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
          <motion.div
            initial={{ opacity: 0, [isEven ? "-x" : "x"]: 40 }}
            whileInView={{ opacity: 1, [isEven ? "-x" : "x"]: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div>
              <h3
                className="text-2xl font-bold uppercase tracking-wider text-slate-900 mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {member.name}
              </h3>
              <p
                className="text-base font-extrabold uppercase tracking-[0.16em] mb-3"
                style={{ color: member.color }}
              >
                {member.role}
              </p>
              <p className="text-sm text-slate-400 font-mono mb-4">
                {member.org}
              </p>
              <Rule className="mb-4" />
            </div>

            <p className="text-[15px] text-slate-600 leading-[1.85]">
              {member.bio}
            </p>

            <div className="flex items-center gap-3 pt-4">
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] rounded-lg transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: `${member.color}15`,
                    color: member.color,
                    border: `1px solid ${member.color}30`,
                  }}
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  Connect
                </a>
              ) : (
                <span className="text-sm text-slate-300 font-mono italic">
                  Profile available soon
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </FadeUp>
  );
}

TeamCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    linkedin: PropTypes.string,
    linkedinImage: PropTypes.string,
    initials: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function Team() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <FadeUp className="mb-8">
          <EyebrowLabel>Leadership</EyebrowLabel>
          <h2
            className="text-4xl font-black text-slate-900 leading-tight tracking-[-0.02em] uppercase md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Meet the Team.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="mb-20">
          <p className="text-[15px] text-slate-500 max-w-[58ch] leading-[1.8]">
            Experts in aerospace, robotics, AI, and real-world execution —
            building mission-driven drone systems that perform where it counts.
          </p>
        </FadeUp>

        {/* Timeline layout */}
        <div className="space-y-8">
          {TEAM.map((m, i) => (
            <TeamCard key={m.name} member={m} delay={i * 0.12} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Closing statement                                                           */
/* ══════════════════════════════════════════════════════════════════════════ */
function ClosingStatement() {
  return (
    <section className="relative overflow-hidden bg-[#0a0d14] py-28 md:py-36">
      {/* World map dot background */}
      <DotGrid opacity={0.06} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/40 via-transparent to-[#0a0d14]/60" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse at center, ${ACCENT}10 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 text-center">
        <FadeIn className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-600">
            Hovernest Pvt Ltd · Incorporated in India
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className="font-black text-white leading-[0.93] tracking-[-0.03em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
            }}
          >
            Built in India.
            <br />
            <span style={{ color: ACCENT }}>Deployed Globally.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-8">
          <p className="text-[15px] text-slate-500 leading-[1.85] max-w-[52ch] mx-auto">
            From a single workshop to multi-sector autonomous deployments — the
            mission remains unchanged: make critical logistics reliable,
            everywhere, for everyone.
          </p>
        </FadeIn>

        <FadeIn delay={0.45} className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 border border-white/15 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-slate-300 hover:border-white/30 hover:text-white transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Root                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
const About = () => (
  <div
    className="min-h-screen bg-white"
    style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
  >
    <Hero />
    <Mission />
    <Story />
    <Values />
    <Team />
    <ClosingStatement />
  </div>
);

export default About;
