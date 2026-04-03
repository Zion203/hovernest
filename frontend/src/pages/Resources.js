import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  ChevronDown,
  BookOpen,
  HelpCircle,
} from "lucide-react";

/* ── Design tokens ─────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";

/* ── PDF document catalogue ─────────────────────────────────────────────── */
const PDF_DOCS = [
  {
    id: "vtol",
    title: "Multipurpose VTOL Drone",
    description:
      "Full technical specification sheet covering airframe, propulsion, payload capacity, and operational envelope for the Hovernest VTOL platform.",
    size: "2.4 MB",
    category: "Product Sheet",
    file: "/pdfs/Multipurpose VTOL Drone.pdf",
  },
  {
    id: "fixed-wing",
    title: "Fixed-Wing Survey Drone",
    description:
      "Aerodynamic profile, sensor integration options, endurance metrics, and mission planning guidance for fixed-wing survey operations.",
    size: "1.8 MB",
    category: "Product Sheet",
    file: "/pdfs/Fixed_Wing Survey Drone.pdf",
  },
  {
    id: "agri",
    title: "Precision Agriculture Drone",
    description:
      "Crop monitoring, multispectral payload configuration, spray system specs, and field deployment protocols for agricultural use cases.",
    size: "3.1 MB",
    category: "Application Guide",
    file: "/pdfs/Precision Agriculture Drone.pdf",
  },
  {
    id: "fpv",
    title: "FPV Racing & Inspection Drone",
    description:
      "High-manoeuvring airframe data, camera latency specifications, and infrastructure inspection workflow documentation.",
    size: "1.5 MB",
    category: "Product Sheet",
    file: "/pdfs/FPV Racing & Inspection Drone.pdf",
  },
  {
    id: "neurofc",
    title: "NeuroFC — AI Flight Controller",
    description:
      "System architecture reference, sensor fusion pipeline, SDK integration guide, and certified performance benchmarks for the NeuroFC platform.",
    size: "4.2 MB",
    category: "Technical Reference",
    file: "/pdfs/NeuroFC — AI Flight Controller.pdf",
  },
  {
    id: "parts",
    title: "Spare Parts & Accessories",
    description:
      "Complete component catalogue with part numbers, compatibility matrix, replacement schedules, and ordering information.",
    size: "0.9 MB",
    category: "Catalogue",
    file: "/pdfs/Spare Parts & Accessories.pdf",
  },
];

/* ── FAQ data ────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What regulatory approvals are required to operate Hovernest UAVs in India?",
    a: "Operations require DGCA type certification, a valid Remote Pilot Certificate (RPC), and airspace clearance via the DigitalSky portal for flights beyond the Green Zone. Hovernest provides regulatory compliance support as part of all pilot programmes. Contact our team for jurisdiction-specific guidance.",
  },
  {
    q: "Which NeuroFC SDK languages and interfaces are supported?",
    a: "The NeuroFC SDK currently provides bindings for Python 3.9+, C++17, and ROS2 (Humble/Iron). A REST-based telemetry API is available for web-platform integrations. Full documentation and sample repositories are accessible via the developer portal after account verification.",
  },
  {
    q: "What payload weights can the VTOL and Fixed-Wing platforms carry?",
    a: "The Multipurpose VTOL supports payloads up to 3.5 kg in standard configuration and up to 5 kg in heavy-lift configuration. The Fixed-Wing Survey Drone is optimised for sensor payloads up to 1.2 kg. Both platforms accept third-party payload mounts via the MIL-spec interface rail.",
  },
  {
    q: "How is NeuroFC different from conventional flight controllers?",
    a: "NeuroFC operates as a layered decision architecture rather than a single PID loop. It runs parallel perception, world-modelling, and mission-cognition threads unified by a deterministic arbitration kernel. This enables adaptive responses to degraded sensor inputs, GNSS-denied environments, and in-flight anomaly detection — capabilities not available in standard autopilot systems.",
  },
  {
    q: "Can Hovernest systems be integrated with existing fleet management software?",
    a: "Yes. Hovernest exposes a MAVLINK-compatible telemetry interface and a REST API for mission data ingestion. Pre-built integrations exist for common fleet management platforms. Custom integration support is available under enterprise and programme agreements.",
  },
  {
    q: "What is the lead time for a pilot programme engagement?",
    a: "Standard pilot programmes are scoped and initiated within 5–10 business days of the introductory call. The average programme duration is 14 days from first flight to validated data delivery. Timeline varies based on airspace complexity and regulatory clearance requirements in the operating region.",
  },
  {
    q: "Are Hovernest UAVs certified for BVLOS operations?",
    a: "Select platforms hold or are in the process of obtaining BVLOS operational approvals in designated corridors. Certification status varies by platform and jurisdiction. Refer to the technical reference documents or contact the compliance team for current approval status in your region.",
  },
];

/* ── Animation utilities ─────────────────────────────────────────────────── */
function FadeUp({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

FadeUp.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

/* ── Subtle SVG grid overlay ─────────────────────────────────────────────── */
function LineGrid({ opacity = 0.07 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="rg" width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rg)" />
      </svg>
    </div>
  );
}

LineGrid.propTypes = {
  opacity: PropTypes.number,
};

/* ── Category badge ─────────────────────────────────────────────────────── */
function Badge({ label }) {
  const colors = {
    "Product Sheet": { bg: "#f0edff", text: "#6E44FF" },
    "Application Guide": { bg: "#ecfdf5", text: "#059669" },
    "Technical Reference": { bg: "#eff6ff", text: "#2563eb" },
    Catalogue: { bg: "#fef9ec", text: "#d97706" },
  };
  const c = colors[label] ?? { bg: "#f1f5f9", text: "#64748b" };
  return (
    <span
      className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em] rounded-sm"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {label}
    </span>
  );
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
};

/* ── Download function ───────────────────────────────────────────────────── */
function resolvePublicDownloadUrl(filePath) {
  const base = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
  const normalizedPath = filePath.startsWith("/") ? filePath : `/${filePath}`;
  const encodedPath = normalizedPath
    .split("/")
    .map((segment, index) =>
      index === 0 ? segment : encodeURIComponent(segment),
    )
    .join("/");
  return `${base}${encodedPath}`;
}

function triggerDownload(filePath, fileName) {
  const anchor = document.createElement("a");
  anchor.href = resolvePublicDownloadUrl(filePath);
  anchor.download = fileName;
  anchor.rel = "noopener noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

/* ── PDF Card ────────────────────────────────────────────────────────────── */
function DocCard({ doc, delay }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    triggerDownload(doc.file, `${doc.title}.pdf`);
    setTimeout(() => setDownloading(false), 1800);
  };

  return (
    <FadeUp
      delay={delay}
      className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1"
    >
      {/* Card header strip */}
      <div
        className="h-1 w-full transition-all duration-300"
        style={{ backgroundColor: downloading ? "#059669" : `${ACCENT}30` }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Icon + badge row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
            style={{ backgroundColor: `${ACCENT}10` }}
          >
            <FileText
              className="h-6 w-6"
              style={{ color: ACCENT }}
              strokeWidth={1.5}
            />
          </div>
          <Badge label={doc.category} />
        </div>

        {/* Title + description */}
        <h3
          className="mb-2 text-[15px] font-bold text-slate-900 leading-snug"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "-0.01em",
            fontSize: "1.05rem",
          }}
        >
          {doc.title}
        </h3>
        <p className="flex-1 text-[14px] text-slate-500 leading-[1.75] mb-5">
          {doc.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-[0.12em]">
              PDF
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-[11px] font-mono text-slate-400">
              {doc.size}
            </span>
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading}
            aria-label={`Download ${doc.title}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-70"
            style={{
              backgroundColor: downloading ? "#059669" : ACCENT,
              focusVisible: { ringColor: ACCENT },
            }}
            onMouseEnter={(e) => {
              if (!downloading)
                e.currentTarget.style.backgroundColor = "#5a33d4";
            }}
            onMouseLeave={(e) => {
              if (!downloading) e.currentTarget.style.backgroundColor = ACCENT;
            }}
          >
            <Download className="h-3.5 w-3.5" />
            {downloading ? "Saving…" : "Download"}
          </button>
        </div>
      </div>
    </FadeUp>
  );
}

DocCard.propTypes = {
  doc: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.number.isRequired,
};

/* ── FAQ Item ───────────────────────────────────────────────────────────── */
function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <FadeUp delay={index * 0.06}>
      <div
        className="border border-slate-200 rounded-xl overflow-hidden transition-colors duration-200"
        style={{ borderColor: isOpen ? `${ACCENT}40` : undefined }}
      >
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset"
          style={{ focusVisible: { ringColor: ACCENT } }}
        >
          <span
            className="text-[15px] font-semibold text-slate-900 leading-snug pr-2"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            {faq.q}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full"
            style={{ backgroundColor: isOpen ? `${ACCENT}12` : "#f1f5f9" }}
          >
            <ChevronDown
              className="h-4 w-4"
              style={{ color: isOpen ? ACCENT : "#64748b" }}
              strokeWidth={2}
            />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-6 pb-5 border-t border-slate-100">
                <p className="pt-4 text-[14px] text-slate-500 leading-[1.85]">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

FaqItem.propTypes = {
  faq: PropTypes.shape({
    q: PropTypes.string.isRequired,
    a: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

/* ── Section label ──────────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <p
      className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em]"
      style={{ color: ACCENT }}
    >
      {children}
    </p>
  );
}

SectionLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

/* ══════════════════════════════════════════════════════════════════════════ */
/* Root component                                                              */
/* ══════════════════════════════════════════════════════════════════════════ */
const Resources = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggle = (i) => setOpenFaq((prev) => (prev === i ? null : i));

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#0a0d14] text-white"
        style={{ minHeight: "52vh", display: "flex", alignItems: "flex-end" }}
      >
        <LineGrid opacity={0.08} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/30 via-transparent to-[#0a0d14]" />
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
          aria-hidden
          style={{
            background: `radial-gradient(ellipse at top right, ${ACCENT}14 0%, transparent 68%)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-16 pb-16 md:pb-20 pt-28">
          <motion.p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: ACCENT, opacity: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Documentation Centre
          </motion.p>

          <div className="overflow-hidden mb-3">
            <motion.h1
              className="font-black text-white leading-[0.93] tracking-[-0.03em] uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
              }}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.28,
              }}
            >
              Resources &amp;
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-7">
            <motion.h1
              className="font-black leading-[0.93] tracking-[-0.03em] uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
                color: ACCENT,
              }}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
            >
              Documentation.
            </motion.h1>
          </div>

          <motion.p
            className="text-[14px] text-slate-400 leading-[1.85] max-w-[52ch]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56 }}
          >
            Download technical brochures, product sheets, and mission
            documentation. All files are production-ready PDF specifications.
          </motion.p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 leading-[0]"
          aria-hidden
        >
          <svg
            viewBox="0 0 1440 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6"
            preserveAspectRatio="none"
          >
            <path d="M0 24 C480 0 960 24 1440 0 L1440 24 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Downloads ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${ACCENT}12`,
                  borderLeft: `2px solid ${ACCENT}`,
                }}
              >
                <BookOpen
                  className="h-4.5 w-4.5"
                  style={{ color: ACCENT }}
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <SectionLabel>Technical Downloads</SectionLabel>
                <h2
                  className="text-[2.1rem] font-black text-slate-900 uppercase tracking-[-0.02em] leading-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Product Documentation
                </h2>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {PDF_DOCS.map((doc, i) => (
              <DocCard key={doc.id} doc={doc} delay={i * 0.07} />
            ))}
          </div>

          <FadeUp delay={0.2} className="mt-10 pt-6 border-t border-slate-100">
            <p className="text-[12px] font-mono text-slate-400 tracking-[0.1em]">
              All documents are current-revision specifications. For legacy
              versions or custom engineering data packages, contact{" "}
              <a
                href="mailto:technical@hovernest.com"
                className="underline underline-offset-2 transition-colors hover:text-slate-600"
              >
                technical@hovernest.com
              </a>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Rule */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="border-t border-slate-100" />
      </div>

      {/* ── FAQs ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[320px_1fr] gap-14 lg:gap-20 items-start">
            {/* Sticky heading */}
            <div className="lg:sticky lg:top-28">
              <FadeUp>
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${ACCENT}12`,
                      borderLeft: `2px solid ${ACCENT}`,
                    }}
                  >
                    <HelpCircle
                      className="h-4.5 w-4.5"
                      style={{ color: ACCENT }}
                      strokeWidth={1.8}
                    />
                  </div>
                  <SectionLabel>Support</SectionLabel>
                </div>
                <h2
                  className="text-[2.1rem] font-black text-slate-900 uppercase tracking-[-0.02em] leading-tight mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Frequently Asked
                  <br />
                  Questions.
                </h2>
                <p className="text-[14px] text-slate-500 leading-[1.8]">
                  Technical, regulatory, and operational questions answered by
                  the Hovernest engineering and compliance teams.
                </p>
              </FadeUp>

              <FadeUp delay={0.1} className="mt-8 hidden lg:block">
                <div className="border border-slate-200 p-5 rounded-xl">
                  <p className="text-[12px] font-mono tracking-[0.16em] text-slate-400 uppercase mb-2">
                    Can't find your answer?
                  </p>
                  <p className="text-[14px] text-slate-600 leading-[1.7] mb-4">
                    Our technical team handles bespoke queries within 24
                    business hours.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
                    style={{ color: ACCENT }}
                  >
                    Contact Engineering
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 10L10 2M10 2H4M10 2V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Accordion list */}
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  index={i}
                  isOpen={openFaq === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA strip ─────────────────────────────────────────────── */}
      <section className="bg-[#f8f9fb] py-14 md:py-16 border-t border-slate-200">
        <FadeUp className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="text-xl font-black text-slate-900 uppercase tracking-[-0.01em]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Ready to Start a Pilot Programme?
            </p>
            <p className="mt-1 text-[14px] text-slate-500">
              Our team will scope your mission and confirm a deployment timeline
              within five days.
            </p>
          </div>
          <a
            href="/contact?type=program"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-white whitespace-nowrap transition-opacity hover:opacity-85 flex-shrink-0"
            style={{ backgroundColor: ACCENT }}
          >
            Book Scoping Call
            <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </FadeUp>
      </section>
    </div>
  );
};

export default Resources;
