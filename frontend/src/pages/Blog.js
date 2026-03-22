import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

/* ── Tokens ──────────────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";

/* ── All blog posts — single source of truth ─────────────────────────────── */
export const BLOG_POSTS = [
  {
    id: "ai-flight-controllers",
    category: "Technology",
    title: "How AI is Transforming Drone Flight Controllers",
    summary:
      "NeuroFC replaces single-loop PID logic with a layered decision architecture — parallel perception, world-modelling, and contingency threads that respond to adversarial inputs in under 20 ms.",
    date: "2025-03-12",
    readTime: "7 min read",
    author: "Brighten Samuel",
    authorRole: "Founder & CEO",
    tags: ["AI", "NeuroFC", "Flight Control"],
    hero: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80&fit=crop",
    featured: true,
  },
  {
    id: "agriculture-precision-farming",
    category: "Agriculture",
    title: "Drones in Agriculture: Precision Farming at Scale",
    summary:
      "Multispectral imaging and variable-rate spray systems are reshaping yield optimisation across Indian farmlands — from crop health indices to pinpoint-accurate pesticide delivery.",
    date: "2025-02-28",
    readTime: "5 min read",
    author: "Likhitha Uppu",
    authorRole: "Chief Technology Officer",
    tags: ["Agriculture", "Precision Farming", "Sensors"],
    hero: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=80&fit=crop",
  },
  {
    id: "vtol-medical-delivery",
    category: "Healthcare",
    title: "VTOL Drones: The Future of Medical Delivery in Remote Areas",
    summary:
      "How AI-native VTOL systems are cutting emergency supply times from hours to minutes in mountainous terrain — and the regulatory path that makes it possible.",
    date: "2025-02-14",
    readTime: "6 min read",
    author: "Samuel Ebenezer",
    authorRole: "Chief Operating Officer",
    tags: ["VTOL", "Medical", "Logistics"],
    hero: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=900&q=80&fit=crop",
  },
  {
    id: "drone-ecosystem",
    category: "Ecosystem",
    title: "Building the Next Generation Drone Ecosystem",
    summary:
      "Open SDKs, MAVLINK-compatible telemetry, and a developer programme are enabling third-party operators to build on the Hovernest platform — creating a compounding autonomy network.",
    date: "2025-01-30",
    readTime: "4 min read",
    author: "Brighten Samuel",
    authorRole: "Founder & CEO",
    tags: ["SDK", "Developer", "Platform"],
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&fit=crop",
  },
];

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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
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

/* ── Overlays ────────────────────────────────────────────────────────────── */
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
            id="bdots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.85" fill="#6b7280" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bdots)" />
      </svg>
    </div>
  );
}

/* ── Tag chip ────────────────────────────────────────────────────────────── */
function TagChip({ label }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 text-[12px] font-bold uppercase tracking-[0.16em] border"
      style={{
        borderColor: `${ACCENT}40`,
        color: ACCENT,
        backgroundColor: `${ACCENT}08`,
      }}
    >
      {label}
    </span>
  );
}

/* ── Meta row ────────────────────────────────────────────────────────────── */
function MetaRow({ date, readTime, author, dark = false }) {
  const color = dark ? "rgba(255,255,255,0.45)" : "#94a3b8";
  const d = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div
      className="flex flex-wrap items-center gap-3 text-[12px] font-mono tracking-[0.1em]"
      style={{ color }}
    >
      <span>{d}</span>
      <span style={{ opacity: 0.3 }}>·</span>
      <span>{readTime}</span>
      {author && (
        <>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>{author}</span>
        </>
      )}
    </div>
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
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const slideY = useTransform(scrollYProgress, [0, 0.6], [0, -32]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#07080b]"
      style={{ minHeight: "56vh" }}
    >
      <DotGrid />
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse at top right, ${ACCENT}14 0%, transparent 65%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07080b]" />

      <motion.div
        style={{
          opacity: fadeOut,
          y: slideY,
          minHeight: "56vh",
          paddingTop: "10rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-16 md:pb-20"
      >
        <Fade delay={0.1}>
          <p
            className="mb-4 text-[11px] font-mono tracking-[0.3em] uppercase"
            style={{ color: ACCENT, opacity: 0.8 }}
          >
            Hovernest · Insights
          </p>
        </Fade>
        <SlideUp delay={0.2}>
          <h1
            className="font-black text-white leading-[0.92] tracking-[-0.03em] uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
            }}
          >
            Insights from the
            <br />
            <span style={{ color: ACCENT }}>Future of Flight.</span>
          </h1>
        </SlideUp>
        <Fade delay={0.45} className="mt-5">
          <p className="text-[14px] text-slate-400 leading-[1.85] max-w-[52ch]">
            Engineering intelligence into the skies — drones, AI, and real-world
            impact from the Hovernest research and operations teams.
          </p>
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
/* Featured article                                                            */
/* ══════════════════════════════════════════════════════════════════════════ */
function FeaturedPost({ post }) {
  return (
    <Fade className="mb-14 md:mb-16">
      <article>
        <Link
          to={`/blog/${post.id}`}
          className="group relative block overflow-hidden bg-[#0d1117]"
          style={{ aspectRatio: "21/9" }}
          aria-label={`Read featured article: ${post.title}`}
        >
          <motion.img
            src={post.hero}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "contrast(1.1) saturate(0.7) brightness(0.55)" }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080b]/95 via-[#07080b]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/80 via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.22em] text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Featured
              </span>
              <span
                className="text-[12px] font-bold uppercase tracking-[0.2em]"
                style={{ color: `${ACCENT}cc` }}
              >
                {post.category}
              </span>
            </div>

            <h2
              className="font-black text-white leading-[0.93] tracking-[-0.02em] uppercase mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              }}
            >
              {post.title}
            </h2>
            <p className="text-[14px] text-slate-400 leading-[1.8] max-w-[58ch] mb-6 hidden sm:block">
              {post.summary}
            </p>
            <MetaRow
              date={post.date}
              readTime={post.readTime}
              author={post.author}
              dark
            />

            <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white group-hover:opacity-70 transition-opacity duration-200">
              Read Article
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </div>
          </div>

          {/* Live indicator */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <motion.span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#34d399" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="text-[11px] font-mono tracking-[0.2em] text-white/40 uppercase hidden sm:block">
              Latest
            </span>
          </div>
        </Link>
      </article>
    </Fade>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Blog card                                                                   */
/* ══════════════════════════════════════════════════════════════════════════ */
function BlogCard({ post, delay = 0 }) {
  return (
    <Fade delay={delay}>
      <Link
        to={`/blog/${post.id}`}
        className="block h-full"
        aria-label={`Read: ${post.title}`}
      >
        <motion.article
          className="group flex h-full flex-col bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)]"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Image */}
          <div
            className="relative overflow-hidden bg-slate-100"
            style={{ aspectRatio: "16/9" }}
          >
            <motion.img
              src={post.hero}
              alt={post.title}
              className="w-full h-full object-cover"
              style={{ filter: "contrast(1.05) saturate(0.8)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span
                className="px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm"
                style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
              >
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6 lg:p-7">
            <div className="mb-4">
              <MetaRow date={post.date} readTime={post.readTime} />
            </div>
            <div className="h-px bg-slate-100 mb-4" />

            <h2
              className="mb-3 font-bold text-slate-900 leading-snug tracking-[-0.01em] group-hover:text-[#6E44FF] transition-colors duration-150"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "1.15rem",
              }}
            >
              {post.title}
            </h2>
            <p className="flex-1 text-[14px] text-slate-500 leading-[1.8] mb-5">
              {post.summary}
            </p>

            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.slice(0, 3).map((tag) => (
                  <TagChip key={tag} label={tag} />
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {post.author && (
                <p className="text-[12px] font-mono tracking-[0.1em] text-slate-400">
                  {post.author}
                </p>
              )}
              <span
                className="ml-auto inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                Read More
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.5}
                />
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </Fade>
  );
}

const blogPostPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  author: PropTypes.string,
  authorRole: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  hero: PropTypes.string.isRequired,
  featured: PropTypes.bool,
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

DotGrid.propTypes = {
  opacity: PropTypes.number,
};

TagChip.propTypes = {
  label: PropTypes.string.isRequired,
};

MetaRow.propTypes = {
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  author: PropTypes.string,
  dark: PropTypes.bool,
};

FeaturedPost.propTypes = {
  post: blogPostPropType.isRequired,
};

BlogCard.propTypes = {
  post: blogPostPropType.isRequired,
  delay: PropTypes.number,
};

/* ══════════════════════════════════════════════════════════════════════════ */
/* Root                                                                        */
/* ══════════════════════════════════════════════════════════════════════════ */
const Blog = () => {
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const gridPosts = BLOG_POSTS.filter((p) => p.id !== featured?.id);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      <Hero />

      <section className="bg-[#f5f6f8] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          {/* Featured */}
          {featured && <FeaturedPost post={featured} />}

          {/* Section header */}
          <Fade className="mb-8 flex items-center gap-5">
            <p
              className="text-[11px] font-mono tracking-[0.28em] uppercase"
              style={{ color: ACCENT }}
            >
              All Articles
            </p>
            <div className="flex-1 h-px bg-slate-200" />
            <p className="text-[12px] font-mono tracking-[0.18em] text-slate-400">
              {gridPosts.length} posts
            </p>
          </Fade>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {gridPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

