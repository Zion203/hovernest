import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

/* ── Token ───────────────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";

/* ── Data ────────────────────────────────────────────────────────────────── */
const ROLES = [
  {
    code: "ENG-01",
    title: "Drone Systems Engineer",
    department: "Aerospace Engineering",
    location: "Chennai, India",
    type: "Full-time",
    summary:
      "Design, build, and test UAV systems across our VTOL and fixed-wing platforms. Own the full development cycle from concept to certified flight.",
    responsibilities: [
      "Lead airframe design and system integration for VTOL and fixed-wing drones",
      "Develop and validate flight envelope test plans and certification documentation",
      "Collaborate with embedded and AI teams on hardware-software integration",
    ],
  },
  {
    code: "AI-02",
    title: "AI / ML Engineer",
    department: "Autonomy & Intelligence",
    location: "Chennai, India · Remote considered",
    type: "Full-time",
    summary:
      "Build and deploy computer vision models that run onboard drone hardware in real time — not in the cloud. Inference latency is a hard constraint.",
    responsibilities: [
      "Develop object detection, tracking, and classification pipelines for edge deployment",
      "Optimise model architectures for ONNX/TensorRT on embedded compute",
      "Integrate perception outputs into the NeuroFC autonomy stack",
    ],
  },
  {
    code: "EMB-03",
    title: "Embedded Systems Engineer",
    department: "Flight Systems",
    location: "Chennai, India",
    type: "Full-time",
    summary:
      "Build firmware for the NeuroFC flight controller — real-time sensor fusion, actuator control, and safety-critical systems that fly production missions.",
    responsibilities: [
      "Develop and maintain real-time firmware on RTOS platforms for flight control",
      "Implement sensor fusion algorithms integrating IMU, GNSS, barometer, and optical data",
      "Design hardware-software interfaces for new payload and sensor integrations",
    ],
  },
  {
    code: "DEV-04",
    title: "Full Stack Developer",
    department: "Platform Engineering",
    location: "Chennai, India · Hybrid",
    type: "Full-time",
    summary:
      "Build the telemetry dashboards, fleet management tools, and mission planning interfaces operators rely on during live deployments.",
    responsibilities: [
      "Architect and build real-time telemetry dashboards with WebSocket data streams",
      "Develop fleet management and mission planning web applications",
      "Design REST and streaming APIs for drone platform integrations",
    ],
  },
];

const CULTURE = [
  {
    index: "01",
    title: "Fast-Paced by Design",
    desc: "Decisions are made in hours, not weeks. Every team member has the context and authority to move without waiting for approval chains.",
  },
  {
    index: "02",
    title: "Ownership-Driven Work",
    desc: "You own the problem end-to-end — from concept to flight. No hand-off culture. No work that gets shelved before it ships.",
  },
  {
    index: "03",
    title: "Innovation Without Permission",
    desc: "Technical ideas are evaluated on merit. If a better approach exists, we want to know — regardless of who surfaces it.",
  },
  {
    index: "04",
    title: "Real-World Impact",
    desc: "The systems built here operate in medical corridors, agricultural fields, and infrastructure sites. The stakes are real.",
  },
];

const HIRING_STEPS = [
  {
    step: "01",
    title: "Application",
    desc: "Submit your resume and a brief note on why autonomous flight interests you. Portfolio or GitHub links are valued.",
  },
  {
    step: "02",
    title: "Technical Task",
    desc: "A take-home assignment scoped to your discipline — focused and time-bounded. We respect your time.",
  },
  {
    step: "03",
    title: "Interview",
    desc: "A technical conversation with the team you will work in. No trick questions — we discuss real problems.",
  },
  {
    step: "04",
    title: "Offer",
    desc: "If there is a mutual fit, we move fast. Offer letters are issued within three business days of the final interview.",
  },
];

const PERKS = [
  {
    index: "P1",
    title: "Competitive Salary",
    desc: "Market-rate compensation benchmarked against Indian deep-tech and aerospace companies.",
  },
  {
    index: "P2",
    title: "ESOP / Equity",
    desc: "Early employees receive equity in the company. We want the team to benefit from what we build.",
  },
  {
    index: "P3",
    title: "Health Coverage",
    desc: "Comprehensive health insurance for you and your dependents from day one.",
  },
  {
    index: "P4",
    title: "Learning Budget",
    desc: "Annual budget for courses, conferences, certifications, and technical literature.",
  },
  {
    index: "P5",
    title: "Flexible Hours",
    desc: "Outcome-driven work culture. We care about what ships, not when you log in.",
  },
  {
    index: "P6",
    title: "Flight Access",
    desc: "Hands-on time with real drone hardware. You will see your work fly — often within your first month.",
  },
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
            id="cgrid"
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
        <rect width="100%" height="100%" fill="url(#cgrid)" />
      </svg>
    </div>
  );
}

function DotGrid({ opacity = 0.055 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="cdots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.85" fill="#6b7280" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cdots)" />
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

/* ── Thin rule ───────────────────────────────────────────────────────────── */
function Rule({ className = "" }) {
  return <div className={`h-px bg-slate-200 ${className}`} />;
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
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const slideY = useTransform(scrollYProgress, [0, 0.65], [0, -32]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#07080b]"
      style={{ minHeight: "62vh" }}
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
          opacity: fadeOut,
          y: slideY,
          minHeight: "62vh",
          paddingTop: "10rem",
          paddingBottom: "5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Status chip */}
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
            Join Our Team · {ROLES.length} Open Roles
          </div>
        </Fade>

        <SlideUp delay={0.2}>
          <h1
            className="font-black text-white leading-[0.92] tracking-[-0.03em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            }}
          >
            Careers at
            <br />
            <span style={{ color: ACCENT }}>Hovernest.</span>
          </h1>
        </SlideUp>

        <Fade delay={0.42} className="mt-6 max-w-[52ch]">
          <p className="text-[14px] text-slate-400 leading-[1.85]">
            Join a team building India's next aerospace innovation company. Real
            hardware. Real autonomy. Real impact.
          </p>
        </Fade>

        <Fade delay={0.58} className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://forms.google.com/hovernest-careers-apply"
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
            General Enquiry
          </Link>
        </Fade>

        {/* Stats strip */}
        <Fade
          delay={0.72}
          className="mt-14 pt-8 border-t border-white/6 grid grid-cols-3 gap-8 max-w-lg"
        >
          {[
            { v: `${ROLES.length}`, l: "Open Roles" },
            { v: "Chennai", l: "HQ Location" },
            { v: "ESOP", l: "Equity Available" },
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
        >
          <path d="M0 24 C480 0 960 24 1440 0 L1440 24 Z" fill="#f5f6f8" />
        </svg>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Open Roles — expandable table rows                                          */
/* ══════════════════════════════════════════════════════════════════════════ */
function RoleRow({ role, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
    >
      <a
        href="https://forms.google.com/hovernest-careers-apply"
        target="_blank"
        rel="noopener noreferrer"
        className="group block border-b border-slate-200 bg-white hover:bg-[#faf9ff] transition-colors duration-150"
      >
        <div
          className="px-6 py-6 grid items-start gap-6"
          style={{ gridTemplateColumns: "80px 1fr auto" }}
        >
          {/* Code */}
          <p className="text-[12px] font-mono tracking-[0.2em] text-slate-400 mt-0.5">
            {role.code}
          </p>

          {/* Content */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3
                className="text-[17px] font-bold text-slate-900 uppercase tracking-wide leading-tight group-hover:text-[#6E44FF] transition-colors duration-150"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {role.title}
              </h3>
              <span
                className="border px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.18em]"
                style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
              >
                {role.department}
              </span>
            </div>

            <p className="text-[14px] text-slate-500 leading-[1.8] max-w-[64ch] mb-4">
              {role.summary}
            </p>

            <div className="space-y-1.5">
              {role.responsibilities.map((r) => (
                <div
                  key={`${role.code}-${r}`}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-2 h-[3px] w-[3px] flex-shrink-0 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <p className="text-[14px] text-slate-500 leading-[1.75]">
                    {r}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-5">
              <span className="text-[12px] font-mono tracking-[0.14em] text-slate-400">
                {role.location}
              </span>
              <span className="text-slate-300 text-xs">·</span>
              <span
                className="text-[12px] font-mono tracking-[0.14em] border px-2 py-0.5"
                style={{ borderColor: "#e2e8f0", color: "#64748b" }}
              >
                {role.type}
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="mt-1 flex-shrink-0">
            <motion.div
              className="h-8 w-8 flex items-center justify-center border border-slate-200 group-hover:border-[#6E44FF] transition-colors duration-150"
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.18 }}
            >
              <ArrowUpRight
                className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#6E44FF] transition-colors duration-150"
                strokeWidth={2}
              />
            </motion.div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function OpenRoles() {
  return (
    <section className="bg-[#f5f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-12">
          <Label>Open Positions</Label>
          <h2
            className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Current Openings.
          </h2>
        </Fade>

        {/* Table header */}
        <div
          className="hidden sm:grid items-center gap-6 px-6 pb-3 border-b border-slate-300"
          style={{ gridTemplateColumns: "80px 1fr auto" }}
        >
          {["Ref", "Role & Details", ""].map((h) => (
            <p
              key={h || "arrow"}
              className="text-[11px] font-mono tracking-[0.24em] text-slate-400 uppercase"
            >
              {h}
            </p>
          ))}
        </div>

        {/* Role rows */}
        <div className="border-x border-b border-slate-200 bg-white">
          {ROLES.map((role, i) => (
            <RoleRow key={role.code} role={role} index={i} />
          ))}
        </div>

        <Fade delay={0.2} className="mt-6">
          <p className="text-[12px] font-mono text-slate-400 tracking-[0.1em]">
            Don't see a matching role?{" "}
            <a
              href="mailto:careers@hovernest.com"
              className="underline underline-offset-2 hover:text-slate-600 transition-colors"
            >
              Send us your profile
            </a>{" "}
            — we hire opportunistically for exceptional candidates.
          </p>
        </Fade>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Culture — numbered editorial rows                                           */
/* ══════════════════════════════════════════════════════════════════════════ */
function Culture() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <Fade>
              <Label>Culture</Label>
              <h2
                className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl mb-5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                How We Work.
              </h2>
              <Rule className="mb-5" />
              <p className="text-[14px] text-slate-500 leading-[1.85]">
                Hovernest is small by choice. Every person on the team has high
                leverage — and high accountability. This is what that looks like
                in practice.
              </p>
            </Fade>
          </div>

          <div className="border-t border-slate-200">
            {CULTURE.map((item, i) => (
              <Fade key={item.index} delay={i * 0.08}>
                <div className="group grid grid-cols-[40px_1fr] gap-5 py-7 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-4 -mx-4 transition-colors duration-150">
                  <span
                    className="text-[12px] font-black font-mono tracking-[0.12em] mt-0.5"
                    style={{ color: ACCENT }}
                  >
                    {item.index}
                  </span>
                  <div>
                    <h3
                      className="mb-2 text-[14px] font-bold text-slate-900 uppercase tracking-wide"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 leading-[1.82]">
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
/* Hiring Process — horizontal stepper                                         */
/* ══════════════════════════════════════════════════════════════════════════ */
function HiringProcess() {
  return (
    <section className="bg-[#f5f6f8] py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-16">
          <Label>How We Hire</Label>
          <h2
            className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            The Hiring Process.
          </h2>
        </Fade>

        {/* Desktop stepper */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div
            className="absolute top-5 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-slate-200"
            aria-hidden
          />
          <motion.div
            className="absolute top-5 h-px"
            style={{
              left: "calc(12.5%)",
              width: "calc(75%)",
              backgroundColor: ACCENT,
              opacity: 0.3,
            }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            aria-hidden
          />

          <div className="grid grid-cols-4">
            {HIRING_STEPS.map((step, i) => (
              <Fade
                key={step.step}
                delay={i * 0.12}
                className="flex flex-col items-center text-center px-6"
              >
                <div
                  className="relative z-10 flex h-10 w-10 items-center justify-center border-2 bg-[#f5f6f8] mb-5 transition-colors duration-200"
                  style={{
                    borderColor: i === 0 ? ACCENT : "#cbd5e1",
                  }}
                >
                  <span
                    className="text-[12px] font-black"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: i === 0 ? ACCENT : "#94a3b8",
                    }}
                  >
                    {step.step}
                  </span>
                </div>
                <p
                  className="mb-2 text-[14px] font-bold uppercase tracking-wide text-slate-900"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.title}
                </p>
                <p className="text-[14px] text-slate-500 leading-[1.75]">
                  {step.desc}
                </p>
              </Fade>
            ))}
          </div>
        </div>

        {/* Mobile vertical stepper */}
        <div className="lg:hidden relative pl-6 border-l border-slate-200">
          <motion.div
            className="absolute left-0 top-0 w-px"
            style={{ backgroundColor: ACCENT, opacity: 0.35 }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            aria-hidden
          />
          {HIRING_STEPS.map((step, i) => (
            <Fade
              key={step.step}
              delay={i * 0.1}
              className="relative mb-10 last:mb-0"
            >
              <div
                className="absolute -left-[25px] top-1 flex h-10 w-10 items-center justify-center border-2 bg-[#f5f6f8]"
                style={{ borderColor: i === 0 ? ACCENT : "#cbd5e1" }}
              >
                <span
                  className="text-[12px] font-black"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: i === 0 ? ACCENT : "#94a3b8",
                  }}
                >
                  {step.step}
                </span>
              </div>
              <div className="pt-1">
                <p
                  className="mb-1.5 text-[14px] font-bold uppercase tracking-wide text-slate-900"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.title}
                </p>
                <p className="text-[14px] text-slate-500 leading-[1.78]">
                  {step.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Perks — spec table style                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */
function Perks() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Fade className="mb-14">
          <Label>Benefits & Perks</Label>
          <h2
            className="text-4xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What Comes With
            <br />
            the Role.
          </h2>
        </Fade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200">
          {PERKS.map((perk, i) => (
            <Fade
              key={perk.index}
              delay={i * 0.07}
              className="group relative p-7 border-b border-r border-slate-100 transition-all duration-300 hover:bg-[#faf9ff] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              style={{
                borderRight: (i + 1) % 3 === 0 ? "none" : undefined,
                borderBottom: i >= PERKS.length - 3 ? "none" : undefined,
              }}
            >
              {/* Accent top bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: ACCENT }}
              />
              <p className="mb-2 text-[11px] font-mono tracking-[0.22em] text-slate-400 uppercase">
                {perk.index}
              </p>
              <h3
                className="mb-2.5 text-[14px] font-bold uppercase tracking-wide text-slate-900"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {perk.title}
              </h3>
              <Rule className="mb-3 opacity-60" />
              <p className="text-[14px] text-slate-500 leading-[1.78]">
                {perk.desc}
              </p>
            </Fade>
          ))}
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
            {ROLES.length} Roles Open · Chennai, India
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
            Build Systems
            <br />
            <span style={{ color: ACCENT }}>That Actually Fly.</span>
          </h2>
        </SlideUp>

        <Fade delay={0.3} className="mb-10">
          <p className="text-[14px] text-slate-400 leading-[1.85] max-w-[50ch] mx-auto">
            Send us your resume, portfolio, and a note on what draws you to
            autonomous flight. We respond to every application within five
            business days.
          </p>
        </Fade>

        <Fade
          delay={0.42}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="https://forms.google.com/hovernest-careers-apply"
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
            className="inline-flex items-center gap-2.5 border border-white/15 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-slate-400 hover:border-white/30 hover:text-slate-200 transition-colors duration-200"
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
const Careers = () => (
  <div
    className="min-h-screen"
    style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
  >
    <Hero />
    <OpenRoles />
    <Culture />
    <HiringProcess />
    <Perks />
    <CTASection />
  </div>
);

const roleShape = PropTypes.shape({
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
});

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

TechGrid.propTypes = {
  opacity: PropTypes.number,
};

DotGrid.propTypes = {
  opacity: PropTypes.number,
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

Rule.propTypes = {
  className: PropTypes.string,
};

RoleRow.propTypes = {
  role: roleShape.isRequired,
  index: PropTypes.number.isRequired,
};

export default Careers;
