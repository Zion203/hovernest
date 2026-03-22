import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

/* ── Tokens ──────────────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Programs", path: "/programs" },
  { name: "R&D", path: "/research" },
];

const MORE_LINKS = [
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Internships", path: "/internships" },
  { name: "Blog", path: "/blog" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

/* ── Desktop nav link ────────────────────────────────────────────────────── */
function NavLink({ name, path, active, onClick, light = false }) {
  const [hovered, setHovered] = useState(false);
  let textColor = "#64748b";
  if (light) textColor = "#cbd5e1";
  if (hovered) textColor = light ? "#ffffff" : "#1e293b";
  if (active) textColor = ACCENT;

  return (
    <Link
      to={path}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center px-3.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 group"
      style={{ focusVisible: { ringColor: ACCENT } }}
    >
      <motion.span
        className="text-[13px] font-semibold tracking-[0.04em] leading-none transition-colors duration-150"
        animate={{ y: hovered ? -1 : 0 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        style={{ color: textColor }}
      >
        {name}
      </motion.span>

      {/* Underline sweep */}
      <span
        className="absolute bottom-1 left-3.5 right-3.5 h-px origin-left transition-transform duration-250"
        style={{
          backgroundColor: ACCENT,
          transform: `scaleX(${active || hovered ? 1 : 0})`,
          opacity: active ? 0.9 : 0.55,
        }}
      />
    </Link>
  );
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  light: PropTypes.bool,
};

/* ── More dropdown ───────────────────────────────────────────────────────── */
function MoreDropdown({ open, links, onClose, isPathActive }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-full right-0 mt-3 w-52 overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e8eaf0",
            boxShadow:
              "0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
            borderRadius: "14px",
          }}
        >
          <div className="py-2">
            {links.map((link) => (
              <DropdownItem
                key={link.path}
                link={link}
                onClose={onClose}
                active={isPathActive(link.path)}
              />
            ))}
          </div>

          {/* Bottom branding strip */}
          <div
            className="px-4 py-3 border-t"
            style={{ borderColor: "#f1f3f7", backgroundColor: "#fafbfc" }}
          >
            <p
              className="text-[9px] font-mono tracking-[0.22em] uppercase"
              style={{ color: "#94a3b8" }}
            >
              Hovernest · AI Autonomy
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

MoreDropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  isPathActive: PropTypes.func.isRequired,
};

function DropdownItem({ link, onClose, active = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={link.path}
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-between px-4 py-2.5 transition-colors duration-120 focus:outline-none"
      style={{
        backgroundColor: active || hovered ? `${ACCENT}08` : "transparent",
      }}
    >
      <span
        className="text-[13px] font-medium transition-colors duration-120"
        style={{ color: active || hovered ? ACCENT : "#374151" }}
      >
        {link.name}
      </span>
      <motion.div
        animate={{ x: hovered ? 1 : -3, opacity: hovered ? 0.7 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <ArrowUpRight
          className="h-3 w-3"
          style={{ color: ACCENT }}
          strokeWidth={2.5}
        />
      </motion.div>
    </Link>
  );
}

DropdownItem.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

/* ── CTA buttons ─────────────────────────────────────────────────────────── */
function PrimaryBtn({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative inline-flex items-center gap-1.5 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        backgroundColor: ACCENT,
        boxShadow: `0 2px 12px ${ACCENT}40`,
        focusVisible: { ringColor: ACCENT },
      }}
    >
      {label}
    </Link>
  );
}

PrimaryBtn.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function GhostBtn({ to, label, onClick, dark = false }) {
  const [hovered, setHovered] = useState(false);
  let textColor = ACCENT;
  if (dark) textColor = "rgba(255,255,255,0.7)";
  if (hovered) textColor = "#fff";

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden inline-flex items-center gap-1.5 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.15)" : `${ACCENT}50`,
        color: textColor,
        focusVisible: { ringColor: ACCENT },
      }}
    >
      {/* Fill sweep */}
      <span
        className="absolute inset-0 origin-left transition-transform duration-250"
        style={{
          backgroundColor: ACCENT,
          transform: `scaleX(${hovered ? 1 : 0})`,
        }}
      />
      <span className="relative">{label}</span>
    </Link>
  );
}

GhostBtn.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  dark: PropTypes.bool,
};

/* ── Mobile menu ─────────────────────────────────────────────────────────── */
function MobileMenu({ open, location, onClose, isPathActive }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            className="fixed top-0 left-0 right-0 z-50 lg:hidden"
            style={{
              backgroundColor: "#ffffff",
              borderBottom: "1px solid #e8eaf0",
              boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "#f1f3f7" }}
            >
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-2.5"
              >
                <img
                  src="/hovernest-logo.png"
                  alt="Hovernest"
                  className="h-8 w-auto"
                />
                <span
                  className="text-lg font-black uppercase tracking-[-0.01em]"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "#0f172a",
                  }}
                >
                  Hovernest
                </span>
              </Link>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            <div className="px-5 py-5 max-h-[80vh] overflow-y-auto">
              {/* Primary links */}
              <div className="space-y-0.5 mb-5">
                {NAV_LINKS.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={onClose}
                      className="flex items-center justify-between px-3 py-3 transition-colors duration-120 border-b"
                      style={{
                        borderColor: "#f8f9fb",
                        color: active ? ACCENT : "#374151",
                        backgroundColor: active ? `${ACCENT}08` : "transparent",
                      }}
                    >
                      <span className="text-[14px] font-semibold">
                        {link.name}
                      </span>
                      {active && (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* More section */}
              <div className="mb-6">
                <p
                  className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: "#94a3b8" }}
                >
                  More
                </p>
                <div className="space-y-0.5">
                  {MORE_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={onClose}
                      className="flex items-center justify-between px-3 py-2.5 transition-colors duration-120"
                      style={{
                        color: isPathActive(link.path) ? ACCENT : "#64748b",
                        backgroundColor: isPathActive(link.path)
                          ? `${ACCENT}08`
                          : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!isPathActive(link.path)) {
                          e.currentTarget.style.color = ACCENT;
                          e.currentTarget.style.backgroundColor = `${ACCENT}06`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isPathActive(link.path)) {
                          e.currentTarget.style.color = "#64748b";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      <span className="text-[13px] font-medium">
                        {link.name}
                      </span>
                      <ArrowUpRight
                        className="h-3 w-3 opacity-30"
                        strokeWidth={2}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div
                className="space-y-2.5 border-t pt-5"
                style={{ borderColor: "#f1f3f7" }}
              >
                <Link
                  to="/products"
                  onClick={onClose}
                  className="flex items-center justify-center w-full py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full py-3 text-[12px] font-bold uppercase tracking-[0.14em] border transition-colors duration-200"
                  style={{ borderColor: `${ACCENT}50`, color: ACCENT }}
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  isPathActive: PropTypes.func.isRequired,
};

function getMoreColors(isOpenOrActive, isScrolled) {
  if (isOpenOrActive) {
    return { text: ACCENT, icon: ACCENT };
  }
  if (isScrolled) {
    return { text: "#64748b", icon: "#94a3b8" };
  }
  return { text: "#cbd5e1", icon: "#cbd5e1" };
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Navigation                                                                  */
/* ══════════════════════════════════════════════════════════════════════════ */
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  const isPathActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  const moreActive = MORE_LINKS.some((link) => isPathActive(link.path));

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close mobile on route change */
  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
  }, [location.pathname]);

  /* Escape closes open menus */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setDropOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  const moreColors = getMoreColors(dropOpen || moreActive, scrolled);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled
            ? "0 1px 0 rgba(0,0,0,0.07), 0 4px 20px rgba(0,0,0,0.06)"
            : "none",
          height: scrolled ? "64px" : "76px",
        }}
      >
        {/* Bottom separator line — visible on transparent state */}
        {!scrolled && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            aria-hidden
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
            }}
          />
        )}

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            to="/"
            className="group inline-flex items-center gap-3 focus:outline-none"
            aria-label="Hovernest home"
          >
            <motion.img
              src="/hovernest-logo.png"
              alt="Hovernest"
              className="w-auto"
              style={{
                height: scrolled ? "32px" : "36px",
                transition: "height 0.3s ease",
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.18 }}
            />
            <div className="relative overflow-hidden">
              <span
                className="font-black uppercase tracking-[-0.02em] transition-colors duration-200"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: scrolled ? "1.15rem" : "1.25rem",
                  color: scrolled ? "#0f172a" : "#ffffff",
                  transition: "font-size 0.3s ease, color 0.3s ease",
                }}
              >
                Hovernest
              </span>
              {/* Hover underline sweep */}
              <span
                className="absolute bottom-0 left-0 right-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: ACCENT }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                name={link.name}
                path={link.path}
                active={isPathActive(link.path)}
                light={!scrolled}
              />
            ))}

            {/* More dropdown */}
            <div ref={dropRef} className="relative">
              <button
                onClick={() => setDropOpen((v) => !v)}
                className="relative flex items-center gap-1.5 px-3.5 py-2 focus:outline-none group"
                aria-expanded={dropOpen}
                aria-haspopup="true"
              >
                <span
                  className="text-[13px] font-semibold tracking-[0.04em] transition-colors duration-150"
                  style={{ color: moreColors.text }}
                >
                  More
                </span>
                <motion.div
                  animate={{ rotate: dropOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown
                    className="h-3.5 w-3.5"
                    style={{ color: moreColors.icon }}
                    strokeWidth={2.2}
                  />
                </motion.div>
              </button>

              <MoreDropdown
                open={dropOpen}
                links={MORE_LINKS}
                onClose={() => setDropOpen(false)}
                isPathActive={isPathActive}
              />
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <GhostBtn to="/contact" label="Talk to Us" dark={!scrolled} />
            <PrimaryBtn to="/products" label="Explore Products" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex h-9 w-9 items-center justify-center border transition-colors duration-150 focus:outline-none"
            style={{
              borderColor: scrolled ? "#e2e8f0" : "rgba(255,255,255,0.15)",
              color: scrolled ? "#374151" : "#ffffff",
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <MobileMenu
        open={mobileOpen}
        location={location}
        onClose={() => setMobileOpen(false)}
        isPathActive={isPathActive}
      />
    </>
  );
};

export default Navigation;
