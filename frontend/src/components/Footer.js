import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

/* ── Tokens ──────────────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";
const YEAR = new Date().getFullYear();

/* ── Nav data ────────────────────────────────────────────────────────────── */
const LINKS = {
  Products: [
    { name: "Multipurpose VTOL", path: "/products#vtol" },
    { name: "Fixed-Wing Survey", path: "/products#fixed-wing" },
    { name: "Agriculture Drone", path: "/products#agri-drone" },
    { name: "Parts & Accessories", path: "/products#parts" },
  ],
  Programs: [
    { name: "Medical Corridor", path: "/programs#medical" },
    { name: "Agriculture", path: "/programs#agri" },
    { name: "Industrial Inspection", path: "/programs#industrial" },
    { name: "NeuroFC Developer", path: "/programs#developer" },
  ],
  Company: [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Internships", path: "/internships" },
    { name: "Blog", path: "/blog" },
  ],
  Resources: [
    { name: "Documentation", path: "/resources" },
    { name: "R&D", path: "/research" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hovernest.com_/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hovernest/",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Hovernest_com",
    icon: Twitter,
  },
];

/* ── Subtle dot-grid overlay ─────────────────────────────────────────────── */
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
            id="footdots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.9" fill="#6b7280" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footdots)" />
      </svg>
    </div>
  );
}

/* ── Thin line grid overlay ──────────────────────────────────────────────── */
function LineGrid({ opacity = 0.04 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="footgrid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="#6b7280"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footgrid)" />
      </svg>
    </div>
  );
}

/* ── Social panel ────────────────────────────────────────────────────────── */
function SocialPanel({ item }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div className="relative">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex h-9 w-9 items-center justify-center border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          borderColor: hovered ? `${ACCENT}70` : "#2a2d35",
          backgroundColor: hovered ? `${ACCENT}12` : "transparent",
        }}
      >
        <motion.div
          animate={{ y: hovered ? -2 : 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <Icon
            className="h-3.5 w-3.5"
            style={{ color: hovered ? ACCENT : "#6b7280" }}
            strokeWidth={1.8}
          />
        </motion.div>
      </a>

      {/* Tooltip */}
      <AnimatedTooltip label={item.label} visible={hovered} />
    </div>
  );
}

function AnimatedTooltip({ label, visible }) {
  return (
    <div
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none transition-all duration-150"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? 0 : 4}px)`,
      }}
      aria-hidden
    >
      <div
        className="whitespace-nowrap px-2 py-1 text-[9px] font-mono tracking-[0.16em] uppercase text-white"
        style={{ backgroundColor: "#16181f", border: "1px solid #2a2d35" }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Footer link item ────────────────────────────────────────────────────── */
function FootLink({ name, path }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li>
      <Link
        to={path}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-150 focus:outline-none"
        style={{ color: hovered ? "#f8fafc" : "#cbd5e1" }}
      >
        {/* Left accent bar */}
        <span
          className="absolute -left-3 top-1/2 -translate-y-1/2 h-3 w-0.5 transition-all duration-150"
          style={{
            backgroundColor: ACCENT,
            opacity: hovered ? 0.9 : 0,
            transform: `translateY(-50%) scaleY(${hovered ? 1 : 0.4})`,
          }}
        />
        {name}
        {hovered && (
          <ArrowUpRight
            className="h-2.5 w-2.5 flex-shrink-0"
            style={{ color: ACCENT, opacity: 0.7 }}
            strokeWidth={2.5}
          />
        )}
      </Link>
    </li>
  );
}

/* ── CTA strip ───────────────────────────────────────────────────────────── */
function CTAStrip() {
  return (
    <div
      className="relative overflow-hidden border-b border-white/5"
      style={{ backgroundColor: "#0c0e14" }}
    >
      <LineGrid opacity={0.06} />

      {/* Subtle animated gradient sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `linear-gradient(105deg, transparent 30%, ${ACCENT}0a 50%, transparent 70%)`,
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p
            className="mb-1 text-[10px] font-mono tracking-[0.28em] uppercase"
            style={{ color: ACCENT, opacity: 0.8 }}
          >
            Join the Mission
          </p>
          <h2
            className="font-black text-white leading-tight tracking-[-0.02em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            }}
          >
            Ready to build
            <br />
            mission-critical autonomy?
          </h2>
          <p className="mt-2 text-[13px] text-slate-500 max-w-[52ch] leading-[1.8]">
            Join engineers, operators, and innovators building the future of
            autonomous logistics.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            to="/careers"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85 whitespace-nowrap"
            style={{ backgroundColor: ACCENT }}
          >
            Explore Careers
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/12 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 hover:border-white/25 hover:text-slate-200 transition-colors duration-200 whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Bottom divider glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${ACCENT}40, transparent)`,
        }}
        aria-hidden
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Footer                                                                      */
/* ══════════════════════════════════════════════════════════════════════════ */
const Footer = () => (
  <footer style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}>
    <CTAStrip />

    {/* Main footer body */}
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "#07080b" }}
    >
      <DotGrid opacity={0.05} />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden
        style={{
          background: `linear-gradient(to right, transparent, ${ACCENT}25, transparent)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Brand column */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 mb-5 focus:outline-none"
              aria-label="Hovernest home"
            >
                <motion.img
                  src="/hovernest-logo.png"
                alt="Hovernest"
                className="h-9 w-auto"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              />
              <div className="relative overflow-hidden">
                <span
                  className="text-xl font-black text-white uppercase tracking-[-0.01em]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Hovernest
                </span>
                {/* Sweep underline on hover */}
                <span
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-400"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>
            </Link>

            <p className="text-[13px] text-slate-300 leading-[1.8] mb-5 max-w-[30ch]">
              AI-native VTOL systems for real-world missions. Built in India,
              deployed globally.
            </p>

            <p
              className="text-[10px] font-bold uppercase tracking-[0.22em] mb-6"
              style={{ color: ACCENT, opacity: 0.7 }}
            >
              Built in India. Deployed Globally.
            </p>

            {/* Contact details */}
            <div className="space-y-2.5 mb-7">
              <div className="flex items-center gap-2.5">
                <MapPin
                  className="h-3.5 w-3.5 flex-shrink-0"
                  style={{ color: ACCENT, opacity: 0.6 }}
                  strokeWidth={1.8}
                />
                <span className="text-[13px] text-slate-300">
                  Chennai, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail
                  className="h-3.5 w-3.5 flex-shrink-0"
                  style={{ color: ACCENT, opacity: 0.6 }}
                  strokeWidth={1.8}
                />
                <a
                  href="mailto:info@hovernest.com"
                  className="text-[13px] text-slate-300 transition-colors duration-150 hover:text-white"
                >
                  info@hovernest.com
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <SocialPanel key={s.label} item={s} />
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div
              key={category}
              className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-4"
            >
              <p
                className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "#94a3b8" }}
              >
                {category}
              </p>
              <ul className="space-y-3 pl-3">
                {links.map((link) => (
                  <FootLink key={link.path} name={link.name} path={link.path} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ borderTop: "1px solid #16181f" }}
        >
          <p className="text-[11px] font-mono tracking-[0.14em] text-slate-500">
            © {YEAR} Hovernest Pvt Ltd · All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            {[
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Terms of Service", path: "/terms" },
              { label: "Cookie Policy", path: "/cookies" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group relative text-[11px] font-mono tracking-[0.12em] text-slate-500 hover:text-slate-200 transition-colors duration-150"
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-200"
                  style={{ backgroundColor: ACCENT, opacity: 0.5 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
