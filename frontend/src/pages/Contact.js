import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";

/* ── Token ───────────────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";
const OFFICE_MAP_URL = "https://maps.app.goo.gl/FebwoQMaqoTB1svx8?g_st=ic";

/* ── Animation primitives ────────────────────────────────────────────────── */
function Fade({ children, className = "", delay = 0, y = 18 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SlideUp({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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
            id="ctgrid"
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
        <rect width="100%" height="100%" fill="url(#ctgrid)" />
      </svg>
    </div>
  );
}

/* ── Form field wrapper ──────────────────────────────────────────────────── */
function Field({ label, required, children }) {
  return (
    <div>
      <label className="block mb-2 text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
        {required && (
          <span className="ml-1" style={{ color: ACCENT }}>
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Field.defaultProps = {
  required: false,
};

const inputCls = `
  w-full px-4 py-3 bg-white border border-slate-200 text-[14px] text-slate-900
  placeholder:text-slate-400
  focus:outline-none focus:border-[#6E44FF] focus:ring-2 focus:ring-[#6E44FF]/15
  transition-all duration-200
`;

/* ── Trust chips ─────────────────────────────────────────────────────────── */
const TRUST = [
  { label: "24–48 hr response guarantee" },
  { label: "Engineering team consultation" },
  { label: "Pilot deployment support" },
  { label: "Global mission readiness" },
];

/* ══════════════════════════════════════════════════════════════════════════ */
/* Hero                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#07080b]"
      style={{ minHeight: "44vh" }}
    >
      <TechGrid opacity={0.06} />
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse at top right, ${ACCENT}14 0%, transparent 65%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07080b]" />

      <div
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col justify-end"
        style={{ minHeight: "44vh", paddingTop: "8rem", paddingBottom: "4rem" }}
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] w-fit"
          style={{
            color: ACCENT,
            opacity: 0.9,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#34d399" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          Enterprise Contact
        </motion.div>

        <div className="overflow-hidden mb-3">
          <motion.h1
            className="font-black text-white leading-[0.92] tracking-[-0.03em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.25,
            }}
          >
            Start Your
            <br />
            <span style={{ color: ACCENT }}>Autonomous Mission.</span>
          </motion.h1>
        </div>

        <motion.p
          className="text-[14px] text-slate-400 leading-[1.85] max-w-[52ch]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
        >
          Discuss pilot programs, drone deployments, or AI flight systems
          directly with our engineering team.
        </motion.p>
      </div>

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
/* Left panel — contact info + trust                                           */
/* ══════════════════════════════════════════════════════════════════════════ */
function ContactPanel() {
  return (
    <div className="flex flex-col gap-6">
      {/* Get in Touch heading */}
      <Fade>
        <p
          className="mb-2 text-[11px] font-mono tracking-[0.3em] uppercase"
          style={{ color: ACCENT }}
        >
          Contact
        </p>
        <h2
          className="text-3xl font-black text-slate-900 uppercase leading-tight tracking-[-0.02em] mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Get in Touch.
        </h2>
        <p className="text-[14px] text-slate-500 leading-[1.85]">
          Fill out the form and we'll get back to you within 24–48 hours. For
          urgent inquiries, email us directly.
        </p>
      </Fade>

      {/* Trust chips */}
      <Fade delay={0.08}>
        <div className="border border-slate-200 bg-white divide-y divide-slate-100">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center gap-3 px-4 py-3">
              <span
                className="flex-shrink-0 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <p className="text-[14px] text-slate-600">{t.label}</p>
            </div>
          ))}
        </div>
      </Fade>

      {/* Email */}
      <Fade delay={0.12}>
        <div className="group border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <p className="text-[11px] font-mono tracking-[0.22em] text-slate-400 uppercase mb-2">
            Email
          </p>
          <p className="text-[14px] font-semibold text-slate-900 mb-3">
            info@hovernest.com
          </p>
          <a
            href="mailto:info@hovernest.com"
            className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
            style={{ color: ACCENT }}
          >
            Email Us
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
          </a>
        </div>
      </Fade>

      {/* Location */}
      <Fade delay={0.16}>
        <div className="group border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <p className="text-[11px] font-mono tracking-[0.22em] text-slate-400 uppercase mb-2">
            Location
          </p>
          <p className="text-[14px] text-slate-700 leading-[1.7] mb-3">
            JAYA PLAZA, 25/10, 60FT Road,
            <br />
            SivaSakthi Nagar, Annanur, Cholambedu,
            <br />
            Chennai, Tamil Nadu 600062
          </p>
          <a
            href={OFFICE_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
            style={{ color: ACCENT }}
          >
            Open in Maps
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
          </a>
        </div>
      </Fade>

      {/* Office hours */}
      <Fade delay={0.2}>
        <div className="border border-slate-200 bg-white p-5">
          <p className="text-[11px] font-mono tracking-[0.22em] text-slate-400 uppercase mb-3">
            Office Hours
          </p>
          <div className="space-y-1.5">
            <div className="grid grid-cols-[120px_1fr] text-[14px]">
              <span className="text-slate-400 font-mono">Mon – Fri</span>
              <span className="text-slate-700 font-medium">
                9:00 AM – 6:00 PM IST
              </span>
            </div>
            <div className="grid grid-cols-[120px_1fr] text-[14px]">
              <span className="text-slate-400 font-mono">Saturday</span>
              <span className="text-slate-700 font-medium">
                10:00 AM – 4:00 PM IST
              </span>
            </div>
          </div>
        </div>
      </Fade>

    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Form                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
function ContactForm({ formType }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    useCase: "",
    timeline: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("L_Qly3VphpiIiwmOY");
  }, []);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const submission = {
        ...formData,
        formType,
        submittedAt: new Date().toISOString(),
        id: Date.now().toString(),
      };
      const existing = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]",
      );
      localStorage.setItem(
        "contactSubmissions",
        JSON.stringify([...existing, submission]),
      );

      await emailjs.send("service_4s1f8s6", "template_ksmnjy8", {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        use_case: formData.useCase,
        timeline: formData.timeline,
        message: formData.message,
        form_type: formType,
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        useCase: "",
        timeline: "",
        message: "",
      });
      if (window.gtag)
        window.gtag("event", "form_submit_contact", { form_type: formType });
    } catch {
      alert(
        "Something went wrong. Please try again or email us directly at info@hovernest.com",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fade>
      <div className="bg-white border border-slate-200">
        {/* Success state */}
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center text-center py-16 px-8"
            >
              {/* Animated check */}
              <div
                className="flex h-16 w-16 items-center justify-center mb-6"
                style={{
                  backgroundColor: `${ACCENT}10`,
                  border: `2px solid ${ACCENT}30`,
                }}
              >
                <motion.svg
                  className="h-7 w-7"
                  viewBox="0 0 28 28"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.path
                    d="M6 14l6 6 10-12"
                    stroke={ACCENT}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25,
                      ease: "easeOut",
                    }}
                  />
                </motion.svg>
              </div>

              <p
                className="mb-1 text-[11px] font-mono tracking-[0.28em] uppercase"
                style={{ color: ACCENT }}
              >
                Message Received
              </p>
              <h3
                className="mb-3 text-2xl font-black text-slate-900 uppercase tracking-[-0.01em]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Thank You.
              </h3>
              <p className="text-[14px] text-slate-500 leading-[1.85] max-w-[40ch] mb-8">
                Our engineering team will review your request and respond within
                24–48 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSuccess(false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: ACCENT }}
                >
                  Send Another Message
                </button>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 border border-slate-200 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors duration-200"
                >
                  Return to Home
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-7 md:p-9"
              noValidate
            >
              {/* Section: Contact Info */}
              <div className="mb-7">
                <p className="mb-5 text-[11px] font-mono tracking-[0.28em] text-slate-400 uppercase border-b border-slate-100 pb-3">
                  Contact Information
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Email Address" required>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Company / Organisation" required>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your organisation"
                      className={inputCls}
                    />
                  </Field>
                </div>
              </div>

              {/* Section: Project Info */}
              <div className="mb-7">
                <p className="mb-5 text-[11px] font-mono tracking-[0.28em] text-slate-400 uppercase border-b border-slate-100 pb-3">
                  Project Information
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Use Case" required>
                    <select
                      id="useCase"
                      name="useCase"
                      required
                      value={formData.useCase}
                      onChange={handleChange}
                      className={inputCls}
                      style={{ appearance: "none" }}
                    >
                      <option value="">Select use case</option>
                      <option value="medical">Medical Logistics</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="inspection">Industrial Inspection</option>
                      <option value="neurofc">NeuroFC Development</option>
                      <option value="program">Pilot Programme</option>
                      <option value="other">Other</option>
                    </select>
                  </Field>
                  <Field label="Timeline" required>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className={inputCls}
                      style={{ appearance: "none" }}
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (0–1 month)</option>
                      <option value="short">Short-term (1–3 months)</option>
                      <option value="medium">Medium-term (3–6 months)</option>
                      <option value="long">Long-term (6+ months)</option>
                    </select>
                  </Field>
                </div>
              </div>

              {/* Section: Message */}
              <div className="mb-7">
                <p className="mb-5 text-[11px] font-mono tracking-[0.28em] text-slate-400 uppercase border-b border-slate-100 pb-3">
                  Message
                </p>
                <Field label="Your Message" required>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your mission requirements, deployment context, or questions for the engineering team..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: ACCENT }}
                whileHover={loading ? {} : { scale: 1.015 }}
                whileTap={loading ? {} : { scale: 0.99 }}
                transition={{ duration: 0.18 }}
              >
                {loading ? (
                  <>
                    <motion.div
                      className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Sending Message…
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </>
                )}
              </motion.button>

              <p className="mt-4 text-center text-[12px] font-mono tracking-[0.1em] text-slate-400">
                We reply to every message within 24–48 hours
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Fade>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Root                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
const Contact = () => {
  const location = useLocation();
  const [formType, setFormType] = useState("general");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if (type) setFormType(type);
  }, [location]);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      <Hero />

      {/* Main body */}
      <section className="bg-[#f5f6f8] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-start">
            {/* Left panel */}
            <div className="lg:sticky lg:top-28">
              <ContactPanel />
            </div>

            {/* Right: Form */}
            <ContactForm formType={formType} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
