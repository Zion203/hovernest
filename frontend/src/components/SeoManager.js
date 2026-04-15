import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BLOG_POSTS } from "@/pages/Blog";

const SITE_NAME = "Hovernest Private Limited";
const SITE_URL = (process.env.REACT_APP_SITE_URL || "https://hovernest.com").replace(
  /\/$/,
  "",
);
const DEFAULT_IMAGE = `${SITE_URL}/hovernest-logo.png`;

const ROUTE_META = {
  "/": {
    title: "Advanced VTOL Drone Solutions",
    description:
      "Hovernest builds AI-native VTOL drone platforms for medical logistics, agriculture, inspection, and autonomous operations.",
    keywords:
      "VTOL drone, autonomous drone, AI flight controller, medical delivery drone, agriculture drone",
  },
  "/products": {
    title: "Drone Products",
    description:
      "Explore Hovernest drone platforms, including VTOL systems, fixed-wing survey drones, FPV inspection drones, and NeuroFC controllers.",
  },
  "/services": {
    title: "Drone Services",
    description:
      "Mission consulting, hardware integration, autonomy stack support, compliance workflows, and fleet sustainment services.",
  },
  "/programs": {
    title: "Programs",
    description:
      "Review Hovernest deployment programs, flight profiles, and implementation tracks for enterprise and public-sector missions.",
  },
  "/research": {
    title: "Research",
    description:
      "Follow Hovernest R&D in autonomous VTOL systems, AI flight control, BVLOS readiness, and operational intelligence.",
  },
  "/gallery": {
    title: "Gallery",
    description:
      "Browse field deployments and platform visuals across medical, agriculture, inspection, and research missions.",
  },
  "/about": {
    title: "About",
    description:
      "Meet Hovernest, our mission, and the team building next-generation autonomous aerial systems.",
  },
  "/careers": {
    title: "Careers",
    description:
      "Join Hovernest and help shape the future of AI-native drones, flight software, and autonomous systems engineering.",
  },
  "/internships": {
    title: "Internships",
    description:
      "Apply for Hovernest internships in aerospace, embedded software, autonomy, computer vision, and product engineering.",
  },
  "/blog": {
    title: "Insights",
    description:
      "Read Hovernest insights on UAV technology, autonomy, AI flight control, and real-world drone deployment case studies.",
  },
  "/resources": {
    title: "Resources",
    description:
      "Access Hovernest technical resources, program notes, compliance guidance, and deployment documentation.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Talk to Hovernest about demos, pilots, partnerships, and mission planning for autonomous drone operations.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description: "Read the Hovernest privacy policy and data handling practices.",
  },
  "/terms": {
    title: "Terms of Service",
    description: "Review Hovernest website terms and service conditions.",
  },
  "/cookies": {
    title: "Cookie Policy",
    description: "Understand how Hovernest uses cookies and related tracking technologies.",
  },
  "/admin": {
    title: "Admin",
    description: "Hovernest admin portal.",
    robots: "noindex, nofollow",
  },
};

function upsertMeta(attr, key, value) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!value) {
    if (tag) {
      tag.remove();
    }
    return;
  }
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function getBlogMeta(pathname) {
  if (!pathname.startsWith("/blog/")) return null;
  const id = pathname.split("/")[2];
  if (!id) return null;

  const post = BLOG_POSTS.find((item) => item.id === id);
  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested Hovernest article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    image: post.hero,
  };
}

function resolveMeta(pathname) {
  const blogMeta = getBlogMeta(pathname);
  if (blogMeta) return blogMeta;
  return ROUTE_META[pathname] || ROUTE_META["/"];
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = normalizePath(location.pathname);
    const meta = resolveMeta(pathname);
    const pageTitle = SITE_NAME;
    const canonicalUrl = `${SITE_URL}${pathname}`;
    const robots = meta.robots || "index, follow";

    document.title = pageTitle;

    upsertCanonical(canonicalUrl);
    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "keywords", meta.keywords);
    upsertMeta("name", "robots", robots);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", meta.image || DEFAULT_IMAGE);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", meta.image || DEFAULT_IMAGE);
  }, [location]);

  return null;
}
