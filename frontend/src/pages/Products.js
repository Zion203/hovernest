/**
 * Products — Aerospace Edition
 * Fonts: Barlow Condensed (headings) + Barlow (body)
 */

import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { products } from "../data/mockData";

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

Rule.propTypes = {
  className: PropTypes.string,
};

/* Spec row — attempts label: value split, falls back to dot + full string */
function SpecRow({ spec }) {
  const match = spec.match(/^(.+?)(?:\s*:\s*|\s+[—–-]\s+)(.+)$/);
  if (match) {
    return (
      <div className="grid grid-cols-1 gap-1 py-2.5 border-b border-slate-100 last:border-0 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-4">
        <span
          className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400 sm:pt-0.5"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {match[1].trim()}
        </span>
        <span className="text-base text-slate-700 leading-snug break-words">
          {match[2].trim()}
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-slate-100 last:border-0">
      <span
        className="mt-[7px] h-1 w-1 rounded-full flex-shrink-0"
        style={{ backgroundColor: ACCENT }}
      />
      <span className="text-base text-slate-700 leading-snug">{spec}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const scrollToTarget = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const rafId = globalThis.requestAnimationFrame(scrollToTarget);
    const timeoutId = globalThis.setTimeout(scrollToTarget, 120);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      globalThis.clearTimeout(timeoutId);
    };
  }, [location.hash]);

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#08090c] overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="pgrid"
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
            <rect width="100%" height="100%" fill="url(#pgrid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={revealVariant}
              custom={0}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500"
            >
              Official Product Spec Sheets
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
              Aerospace-Grade
              <br />
              <span style={{ color: ACCENT }}>Spec Portfolio</span>
            </motion.h1>
            <motion.p
              variants={revealVariant}
              custom={2}
              className="text-base text-slate-400 leading-[1.75] font-light max-w-[52ch]"
            >
              This page mirrors the six official Hovernest spec sheets for
              Multipurpose VTOL, Fixed-Wing Survey, Precision Agriculture, FPV
              Inspection, NeuroFC Ground Controller, and Spare Parts.
            </motion.p>
          </motion.div>

          {/* Meta strip */}
          <motion.div
            variants={revealVariant}
            custom={3}
            initial="hidden"
            animate="visible"
            className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4"
          >
            {[
              { label: "Products", value: "6 Spec Sheets" },
              { label: "Core Platform", value: "NeuroFC AI" },
              { label: "Certification", value: "DGCA Compliance-Ready" },
              { label: "BVLOS", value: "Testing Phase" },
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

      {/* ── STICKY PRODUCT NAV ────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div
            className="flex overflow-x-auto gap-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="flex-shrink-0 px-4 py-3.5 text-base font-semibold uppercase tracking-[0.12em] text-slate-400 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800 transition-all duration-150 whitespace-nowrap"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {product.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── PRODUCT SECTIONS ──────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          {products.map((product, index) => {
            const flip = index % 2 !== 0;
            return (
              <div key={product.id} id={product.id} className="scroll-mt-24">
                <div className="py-20 md:py-28">
                  <div
                    className={`
                      grid gap-12 lg:grid-cols-2 lg:gap-20 items-start
                      ${flip ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}
                    `}
                  >
                    {/* ── Image ── */}
                    <Reveal>
                      <motion.div
                        className="relative bg-[#f7f8fa] border border-slate-100 overflow-hidden"
                        whileHover={{ y: -6, scale: 1.01 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ aspectRatio: "4/3" }}
                      >
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-8"
                          style={{ filter: "contrast(1.12) saturate(0.9)" }}
                          whileHover={{ scale: 1.06 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </motion.div>

                      {/* Status indicator */}
                      <div className="mt-3 flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor:
                              product.status?.toLowerCase() === "available"
                                ? "#22c55e"
                                : ACCENT,
                          }}
                        />
                        <span
                          className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400"
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                          }}
                        >
                          {product.status}
                        </span>
                      </div>
                    </Reveal>

                    {/* ── Content ── */}
                    <div className="flex flex-col gap-6">
                      {/* Name + tagline */}
                      <Reveal custom={0}>
                        <p
                          className="mb-1 text-sm font-semibold uppercase tracking-[0.2em]"
                          style={{ color: ACCENT }}
                        >
                          Hovernest &mdash;{" "}
                          {product.id?.replaceAll("-", " ")?.toUpperCase()}
                        </p>
                        <h2
                          className="font-bold leading-[0.97] tracking-[-0.01em] text-slate-900 uppercase"
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                          }}
                        >
                          {product.name}
                        </h2>
                        <p
                          className="mt-2 text-base font-medium leading-snug"
                          style={{ color: ACCENT }}
                        >
                          {product.tagline}
                        </p>
                      </Reveal>

                      {/* Description */}
                      <Reveal custom={1}>
                        <p className="text-base text-slate-500 leading-[1.8] max-w-[50ch]">
                          {product.description}
                        </p>
                      </Reveal>

                      {/* Spec table */}
                      <Reveal custom={2}>
                        <div className="border-t border-slate-200 pt-5">
                          <p
                            className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-400"
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                            }}
                          >
                            Key Specifications
                          </p>
                          <div>
                            {product.specs.map((spec) => (
                              <SpecRow
                                key={`${product.id}-${spec}`}
                                spec={spec}
                              />
                            ))}
                          </div>
                        </div>
                      </Reveal>

                      {/* Price + CTAs */}
                      <Reveal custom={3}>
                        <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-8">
                          <div>
                            <p className="text-sm uppercase tracking-[0.14em] text-slate-400 mb-0.5">
                              Starting at
                            </p>
                            <p
                              className="text-2xl font-bold text-slate-900"
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                              }}
                            >
                              {product.price}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            <Link
                              to="/contact?type=demo"
                              className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-semibold text-white transition-colors duration-200 hover:opacity-90"
                              style={{ backgroundColor: ACCENT }}
                            >
                              Request Demo
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                            <Link
                              to="/resources"
                              className="inline-flex items-center gap-2 border border-slate-300 px-5 py-2.5 text-base font-semibold text-slate-700 hover:border-slate-500 hover:text-slate-900 transition-colors duration-200"
                            >
                              Spec Sheet
                              <ChevronRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </div>

                {index < products.length - 1 && <Rule />}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CUSTOM SOLUTION CTA ───────────────────────────────────────────── */}
      <section className="bg-[#08090c] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-20 items-end">
            <Reveal>
              <p
                className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Custom Configurations
              </p>
              <h2
                className="mb-4 font-bold leading-tight tracking-[-0.01em] text-white uppercase"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                }}
              >
                Need a Custom
                <br />
                Spec Package?
              </h2>
              <p className="text-base text-slate-400 leading-[1.75] max-w-[46ch]">
                We can package these six baseline specs into deployment-ready
                mission configurations for healthcare, survey, agriculture,
                inspection, and autonomous logistics workflows.
              </p>
            </Reveal>

            <Reveal custom={1} className="flex flex-col gap-3 lg:pb-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white bg-white px-7 py-3.5 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors duration-200 whitespace-nowrap"
              >
                Discuss Custom Solution
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-base font-semibold text-slate-300 hover:border-white/40 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                View Deployment Programs
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
