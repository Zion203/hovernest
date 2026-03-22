import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

/* ── Tokens ──────────────────────────────────────────────────────────────── */
const ACCENT = "#6E44FF";
const DARK = "#07080b";

/* ── Full blog content ────────────────────────────────────────────────────── */
const BLOG_DATA = {
  "ai-flight-controllers": {
    id: "ai-flight-controllers",
    category: "Technology",
    title: "How AI is Transforming Drone Flight Controllers",
    subtitle:
      "NeuroFC and the shift from rule-based autopilots to onboard adaptive intelligence.",
    date: "2025-03-12",
    readTime: "7 min read",
    author: "Brighten Samuel",
    authorRole: "Founder & CEO",
    tags: ["AI", "NeuroFC", "Flight Control", "Autonomy"],
    hero: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=85&fit=crop",
    sections: [
      {
        type: "lead",
        content:
          "AI is no longer an add-on in drones — it is becoming the brain. Traditional flight controllers rely on predefined logic: fixed PID loops, hardcoded thresholds, and rules written for conditions the engineer imagined at design time. The real world does not behave that way.",
      },
      {
        type: "heading",
        content: "What Modern AI Flight Stacks Can Do",
      },
      {
        type: "paragraph",
        content:
          "Modern AI-native flight stacks replace static logic with layered decision architectures that treat every flight as a data problem. Instead of following instructions, the system is continuously observing, modelling, and adapting.",
      },
      {
        type: "bullets",
        items: [
          "Adapt to environmental conditions in real-time — wind gusts, pressure drops, thermal gradients — without pilot intervention.",
          "Predict failures before they happen by monitoring vibration signatures, current draw patterns, and sensor drift trends.",
          "Optimise energy consumption dynamically, extending range by up to 18% on equivalent mission profiles.",
        ],
      },
      {
        type: "callout",
        content:
          "Traditional autopilots are reactive. AI flight stacks are anticipatory — and that distinction defines what is operationally possible.",
      },
      {
        type: "heading",
        content: "Introducing NeuroFC",
      },
      {
        type: "paragraph",
        content:
          "At Hovernest, we are building NeuroFC — a modular AI-powered flight controller designed for real-time decision-making onboard drones, not in the cloud. Cloud-dependent autonomy introduces latency that is incompatible with low-altitude operations. NeuroFC runs its full inference pipeline on-device, within the hard real-time constraints required for safe flight.",
      },
      {
        type: "paragraph",
        content:
          "The architecture runs three parallel threads — perception, world-modelling, and mission cognition — unified by a deterministic arbitration kernel. When sensor inputs degrade or conditions shift, the system does not freeze or fall back to manual; it reconfigures and continues executing.",
      },
      {
        type: "heading",
        content: "What This Means for Operators",
      },
      {
        type: "paragraph",
        content:
          "For operators, NeuroFC means fewer mission aborts, lower cognitive load, and reliable performance in conditions that would ground conventional platforms. The data captured during each flight feeds back into model refinement — the longer a fleet operates, the better its judgment becomes.",
      },
      {
        type: "paragraph",
        content:
          "This is not incremental improvement over existing autopilots. It is a different class of system entirely — one that treats flight intelligence as a software problem with a continuously improving solution.",
      },
    ],
    related: ["agriculture-precision-farming", "drone-ecosystem"],
  },

  "agriculture-precision-farming": {
    id: "agriculture-precision-farming",
    category: "Agriculture",
    title: "Drones in Agriculture: Precision Farming at Scale",
    subtitle:
      "How multispectral imaging and autonomous spray systems are reshaping crop yield economics.",
    date: "2025-02-28",
    readTime: "5 min read",
    author: "Likhitha Uppu",
    authorRole: "Chief Technology Officer",
    tags: ["Agriculture", "Precision Farming", "Sensors", "Multispectral"],
    hero: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=85&fit=crop",
    sections: [
      {
        type: "lead",
        content:
          "Agriculture is shifting from manual intuition to data-driven decision-making. The change is not cosmetic — it is structural. Farmers who once relied on visual inspection and scheduled interventions are moving toward continuous, sensor-driven field intelligence.",
      },
      {
        type: "heading",
        content: "What Drones Enable at Field Scale",
      },
      {
        type: "paragraph",
        content:
          "A drone covering a hundred-acre farm in under forty minutes generates more actionable data than a human team could collect in a week. The information is precisely georeferenced, reproducible, and interpretable by agronomic models that recommend specific responses.",
      },
      {
        type: "bullets",
        items: [
          "Crop health monitoring using multispectral imaging — identifying stressed zones before visible symptoms appear, enabling targeted intervention rather than blanket treatment.",
          "Targeted pesticide spraying at variable rates — applying exactly what each zone requires based on infestation mapping, eliminating waste and chemical runoff.",
          "Water usage optimisation — soil moisture indices derived from thermal imaging inform irrigation scheduling with precision that fixed sensors cannot match.",
        ],
      },
      {
        type: "callout",
        content:
          "For large-scale farms, drones reduce operational costs by up to 40% while increasing yield quality — not by doing more, but by applying resources exactly where they are needed.",
      },
      {
        type: "heading",
        content: "The Data Infrastructure Behind the Result",
      },
      {
        type: "paragraph",
        content:
          "The drone itself is the sensor platform. The value lives in the processing pipeline that converts raw imagery into agronomic decisions. Hovernest Agriculture systems integrate multispectral capture with onboard preprocessing — NDVI, NDRE, and CWSI indices computed mid-flight — so operators receive actionable outputs, not raw files.",
      },
      {
        type: "paragraph",
        content:
          "Spray missions are planned from the same dataset. Variable-rate application maps are generated automatically and uploaded to the spray platform before the second mission begins. The result is a closed loop: observe, analyse, act, verify — completed within hours rather than crop cycles.",
      },
      {
        type: "heading",
        content: "What Scale Changes",
      },
      {
        type: "paragraph",
        content:
          "The economics change non-linearly with scale. At twenty acres, drones are convenient. At two thousand, they become the only viable approach to data-driven crop management. The farms that adopt this methodology earliest will hold a compounding yield and cost advantage that widens each season.",
      },
    ],
    related: ["vtol-medical-delivery", "ai-flight-controllers"],
  },

  "vtol-medical-delivery": {
    id: "vtol-medical-delivery",
    category: "Healthcare",
    title: "VTOL Drones: The Future of Medical Delivery in Remote Areas",
    subtitle:
      "Why vertical take-off and landing capability is the defining technology for last-mile healthcare logistics.",
    date: "2025-02-14",
    readTime: "6 min read",
    author: "Samuel Ebenezer",
    authorRole: "Chief Operating Officer",
    tags: ["VTOL", "Medical", "Logistics", "Healthcare"],
    hero: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1600&q=85&fit=crop",
    sections: [
      {
        type: "lead",
        content:
          "The last mile in healthcare logistics is not a metaphor — it is a physical barrier. In hilly terrain, flood-prone deltas, and island archipelagos, roads that appear on maps become impassable for days or weeks. The supplies that cannot move along them represent a measurable cost in patient outcomes.",
      },
      {
        type: "heading",
        content: "Why VTOL Changes the Equation",
      },
      {
        type: "paragraph",
        content:
          "VTOL drones combine two capabilities that no prior platform delivered together at useful scale: the helicopter's ability to operate without prepared infrastructure, and the fixed-wing aircraft's efficient cruise performance over meaningful distances.",
      },
      {
        type: "bullets",
        items: [
          "Helicopter flexibility — vertical take-off and landing from hospital rooftops, road clearings, or designated community landing zones without runway infrastructure.",
          "Airplane efficiency — transition to forward flight after take-off, cruising at speeds and ranges that rotary-wing platforms cannot sustain economically.",
        ],
      },
      {
        type: "callout",
        content:
          "This combination makes VTOL platforms ideal for delivering medicines, blood products, and diagnostic samples to remote areas where roads are unreliable and helicopter operations are prohibitively expensive.",
      },
      {
        type: "heading",
        content: "The Operational Reality",
      },
      {
        type: "paragraph",
        content:
          "A medical VTOL mission is not a delivery. It is a logistics chain compressed into a single automated operation: route planning around airspace and terrain, payload verification, transition to cruise, approach management, and handover confirmation — all without a pilot on each flight.",
      },
      {
        type: "paragraph",
        content:
          "Hovernest is actively developing medical logistics drones designed around this operational profile. Payload compartments are temperature-controlled and pressurised where required. The flight intelligence system monitors chain-of-custody from dispatch to confirmed delivery, with fallback landing logic in the event of unexpected route obstruction.",
      },
      {
        type: "heading",
        content: "Bridging the Healthcare Access Gap",
      },
      {
        type: "paragraph",
        content:
          "India has over 640,000 villages. A significant proportion have no all-weather road connection to a district hospital. The healthcare supply chains serving these communities depend on conditions that are by definition unreliable. VTOL drone logistics does not replace ground infrastructure — it operates independently of it, which is precisely the point.",
      },
      {
        type: "paragraph",
        content:
          "The technology is ready. The regulatory framework is maturing. The pilot programmes being conducted now will define the operational templates that scale. Hovernest intends to be the platform on which those templates run.",
      },
    ],
    related: ["ai-flight-controllers", "drone-ecosystem"],
  },

  "drone-ecosystem": {
    id: "drone-ecosystem",
    category: "Ecosystem",
    title: "Building the Next Generation Drone Ecosystem",
    subtitle:
      "Why platform thinking — not product thinking — defines the companies that will lead autonomous aviation.",
    date: "2025-01-30",
    readTime: "4 min read",
    author: "Brighten Samuel",
    authorRole: "Founder & CEO",
    tags: ["SDK", "Developer", "Platform", "Swarm", "Autonomy"],
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85&fit=crop",
    sections: [
      {
        type: "lead",
        content:
          "The companies that shaped personal computing did not just build computers — they built platforms. Operating systems, developer toolkits, and app distribution infrastructure created the conditions for an ecosystem that no single company could have produced alone. The drone industry is entering an analogous moment.",
      },
      {
        type: "heading",
        content: "Three Layers of the Emerging Ecosystem",
      },
      {
        type: "paragraph",
        content:
          "The next-generation drone ecosystem is not a single product category — it is a stack. Each layer enables the one above it, and the value of the entire structure compounds as each layer matures.",
      },
      {
        type: "bullets",
        items: [
          "Autonomous navigation systems — perception and path planning that operate without continuous human input, enabling missions that no remote pilot could execute safely at scale.",
          "AI-driven analytics — the data captured during missions is only as valuable as the intelligence applied to it. Real-time and post-mission analysis pipelines transform sensor output into decisions.",
          "Swarm intelligence — coordinated multi-agent operations that assign tasks, share situational awareness, and maintain mission continuity across platform failures without central coordination.",
        ],
      },
      {
        type: "callout",
        content:
          "Startups like Hovernest are not just building drones — we are building complete aerial intelligence systems. The drone is the endpoint. The platform is the product.",
      },
      {
        type: "heading",
        content: "Open SDK and the Developer Layer",
      },
      {
        type: "paragraph",
        content:
          "Hovernest exposes an open SDK with bindings for Python, C++, and ROS2. MAVLINK-compatible telemetry means operators and integrators can connect existing fleet management infrastructure without migration cost. The developer programme provides hardware access, mission simulation environments, and integration support for teams building on the platform.",
      },
      {
        type: "paragraph",
        content:
          "The goal is not to control the ecosystem — it is to be the infrastructure layer that makes the ecosystem possible. Every operator who builds a mission-specific application on Hovernest hardware and software makes the platform more defensible and more capable.",
      },
      {
        type: "heading",
        content: "What Comes Next",
      },
      {
        type: "paragraph",
        content:
          "The drone platforms being deployed today are generating the operational data and regulatory experience that will define what is possible in the next five years. Persistent ISR, autonomous swarm search, medical relay networks, and infrastructure monitoring at scale are not future concepts — they are active programme areas.",
      },
      {
        type: "paragraph",
        content:
          "The companies that are building their platform layer now — accumulating integration partnerships, developer relationships, and operational data — will hold advantages that cannot be replicated by late entrants with better hardware. Aerial intelligence is a platform business. Hovernest is building the platform.",
      },
    ],
    related: ["ai-flight-controllers", "agriculture-precision-farming"],
  },
};

/* ── All posts list for related + fallback ───────────────────────────────── */
const ALL_POSTS = Object.values(BLOG_DATA);

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

/* ── Line grid ───────────────────────────────────────────────────────────── */
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
            id="bpgrid"
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
        <rect width="100%" height="100%" fill="url(#bpgrid)" />
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

/* ── Section renderer ────────────────────────────────────────────────────── */
function ArticleSection({ section, index }) {
  if (section.type === "lead") {
    return (
      <Fade delay={index * 0.05}>
        <p
          className="text-[18px] text-slate-700 leading-[1.85] font-light mb-8 border-l-2 pl-5"
          style={{ borderColor: ACCENT }}
        >
          {section.content}
        </p>
      </Fade>
    );
  }

  if (section.type === "heading") {
    return (
      <Fade delay={index * 0.04}>
        <h2
          className="mt-10 mb-4 font-black text-slate-900 uppercase leading-tight tracking-[-0.01em]"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "1.65rem",
          }}
        >
          {section.content}
        </h2>
      </Fade>
    );
  }

  if (section.type === "paragraph") {
    return (
      <Fade delay={index * 0.04}>
        <p className="text-[14px] text-slate-600 leading-[1.9] mb-5">
          {section.content}
        </p>
      </Fade>
    );
  }

  if (section.type === "bullets") {
    return (
      <Fade delay={index * 0.04}>
        <ul className="space-y-3 mb-8">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-2.5 h-[3px] w-[3px] flex-shrink-0 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <p className="text-[14px] text-slate-600 leading-[1.85]">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </Fade>
    );
  }

  if (section.type === "callout") {
    return (
      <Fade delay={index * 0.04}>
        <div
          className="my-8 px-6 py-5 border-l-4"
          style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}07` }}
        >
          <p className="text-[14px] text-slate-700 leading-[1.85] font-medium italic">
            {section.content}
          </p>
        </div>
      </Fade>
    );
  }

  return null;
}

/* ── Related card ────────────────────────────────────────────────────────── */
function RelatedCard({ post }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block border border-slate-200 overflow-hidden bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <motion.img
          src={post.hero}
          alt={post.title}
          className="w-full h-full object-cover"
          style={{ filter: "contrast(1.05) saturate(0.75)" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </div>
      <div className="p-5">
        <p
          className="mb-2 text-[12px] font-bold uppercase tracking-[0.2em]"
          style={{ color: ACCENT }}
        >
          {post.category}
        </p>
        <h3
          className="text-[14px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#6E44FF] transition-colors duration-150"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {post.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-mono text-slate-400">
            {post.readTime}
          </span>
          <ArrowUpRight
            className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            style={{ color: ACCENT }}
            strokeWidth={2.5}
          />
        </div>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* Blog Post Page                                                              */
/* ══════════════════════════════════════════════════════════════════════════ */
const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_DATA[id];

  /* Hero parallax */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* 404 fallback */
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-6">
          <p
            className="text-[11px] font-mono tracking-[0.28em] uppercase mb-4"
            style={{ color: ACCENT }}
          >
            404 · Not Found
          </p>
          <h1
            className="text-4xl font-black text-slate-900 uppercase mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
            style={{ color: ACCENT }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const d = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const related = (post.related ?? [])
    .map((rid) => BLOG_DATA[rid])
    .filter(Boolean)
    .slice(0, 2);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header
        ref={heroRef}
        className="relative overflow-hidden bg-[#07080b]"
        style={{ minHeight: "72vh" }}
      >
        {/* Parallax image */}
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src={post.hero}
            alt={post.title}
            className="w-full h-full object-cover"
            style={{
              opacity: 0.3,
              filter: "contrast(1.1) saturate(0.5) brightness(0.8)",
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b]/70 via-transparent to-transparent" />
        <LineGrid opacity={0.04} />

        <motion.div
          style={{
            opacity: fadeOut,
            minHeight: "72vh",
            paddingTop: "8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-16 md:pb-24"
        >
          {/* Back link */}
          <Fade delay={0.05}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 mb-6 text-[11px] font-mono tracking-[0.2em] uppercase text-slate-500 hover:text-slate-300 transition-colors duration-150"
            >
              <ArrowLeft className="h-3 w-3" strokeWidth={2} />
              Insights
            </Link>
          </Fade>

          {/* Category */}
          <Fade delay={0.1}>
            <p
              className="mb-4 text-[12px] font-bold uppercase tracking-[0.28em]"
              style={{ color: ACCENT }}
            >
              {post.category}
            </p>
          </Fade>

          {/* Title */}
          <SlideUp delay={0.18}>
            <h1
              className="font-black text-white leading-[0.92] tracking-[-0.03em] uppercase mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                maxWidth: "20ch",
              }}
            >
              {post.title}
            </h1>
          </SlideUp>

          {/* Subtitle */}
          <Fade delay={0.35}>
            <p className="text-[14px] text-slate-400 leading-[1.8] max-w-[58ch] mb-7">
              {post.subtitle}
            </p>
          </Fade>

          {/* Meta */}
          <Fade delay={0.45}>
            <div className="flex flex-wrap items-center gap-4 text-[12px] font-mono text-slate-500">
              <span>{d}</span>
              <span className="text-slate-700">·</span>
              <span>{post.readTime}</span>
              <span className="text-slate-700">·</span>
              <span>{post.author}</span>
              {post.authorRole && (
                <>
                  <span className="text-slate-700">·</span>
                  <span className="text-slate-600">{post.authorRole}</span>
                </>
              )}
            </div>
          </Fade>
        </motion.div>

        {/* Bottom curve */}
        <div
          className="absolute bottom-0 left-0 right-0 leading-[0]"
          aria-hidden
        >
          <svg
            viewBox="0 0 1440 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6"
          >
            <path d="M0 24 C480 0 960 24 1440 0 L1440 24 Z" fill="#ffffff" />
          </svg>
        </div>
      </header>

      {/* ── Article body ──────────────────────────────────────────────────── */}
      <main className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_280px] gap-14 lg:gap-20 items-start">
            {/* Article content — max 72ch reading width */}
            <article className="max-w-[72ch]">
              {post.sections.map((section, i) => (
                <ArticleSection
                  key={`${section.type}-${section.content ?? section.items?.join("|")}`}
                  section={section}
                  index={i}
                />
              ))}

              {/* Tags */}
              <Fade className="mt-10 pt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <TagChip key={tag} label={tag} />
                  ))}
                </div>
              </Fade>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-6 hidden lg:block">
              {/* Author card */}
              <Fade>
                <div className="border border-slate-200 p-5">
                  <p className="text-[11px] font-mono tracking-[0.22em] text-slate-400 uppercase mb-3">
                    Author
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="h-9 w-9 flex items-center justify-center text-[12px] font-black text-white flex-shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-slate-900">
                        {post.author}
                      </p>
                      <p className="text-[12px] text-slate-400 font-mono">
                        {post.authorRole}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>

              {/* Article meta */}
              <Fade delay={0.08}>
                <div className="border border-slate-200 p-5 space-y-4">
                  <p className="text-[11px] font-mono tracking-[0.22em] text-slate-400 uppercase">
                    Article Info
                  </p>
                  <div>
                    <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase mb-1">
                      Published
                    </p>
                    <p className="text-[14px] text-slate-700 font-medium">
                      {d}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase mb-1">
                      Read Time
                    </p>
                    <p className="text-[14px] text-slate-700 font-medium">
                      {post.readTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase mb-2">
                      Topics
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <TagChip key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>

              {/* CTA */}
              <Fade delay={0.14}>
                <div
                  className="p-5 border"
                  style={{
                    borderColor: `${ACCENT}30`,
                    backgroundColor: `${ACCENT}06`,
                  }}
                >
                  <p
                    className="text-[11px] font-mono tracking-[0.22em] uppercase mb-2"
                    style={{ color: ACCENT }}
                  >
                    Next Step
                  </p>
                  <p className="text-[14px] text-slate-700 leading-[1.7] mb-4">
                    See how Hovernest systems work in your operational context.
                  </p>
                  <Link
                    to="/contact?type=demo"
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                    style={{ color: ACCENT }}
                  >
                    Request Demo
                    <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
                  </Link>
                </div>
              </Fade>
            </aside>
          </div>
        </div>
      </main>

      {/* ── Related articles ────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#f5f6f8] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <Fade className="mb-8 flex items-center gap-5">
              <p
                className="text-[11px] font-mono tracking-[0.28em] uppercase"
                style={{ color: ACCENT }}
              >
                Continue Reading
              </p>
              <div className="flex-1 h-px bg-slate-200" />
            </Fade>

            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((rp) => (
                <RelatedCard key={rp.id} post={rp} />
              ))}
            </div>

            <Fade delay={0.15} className="mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                style={{ color: ACCENT }}
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
                All Insights
              </Link>
            </Fade>
          </div>
        </section>
      )}
    </div>
  );
};

const articleSectionPropType = PropTypes.shape({
  type: PropTypes.oneOf(["lead", "heading", "paragraph", "bullets", "callout"])
    .isRequired,
  content: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
});

const blogPostPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorRole: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  hero: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(articleSectionPropType).isRequired,
  related: PropTypes.arrayOf(PropTypes.string),
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

LineGrid.propTypes = {
  opacity: PropTypes.number,
};

TagChip.propTypes = {
  label: PropTypes.string.isRequired,
};

ArticleSection.propTypes = {
  section: articleSectionPropType.isRequired,
  index: PropTypes.number.isRequired,
};

RelatedCard.propTypes = {
  post: blogPostPropType.isRequired,
};

export default BlogPost;

