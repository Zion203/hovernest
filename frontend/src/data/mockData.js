// Mock data for Hovernest website

export const stats = [
  { label: "Test Hours", value: "250+" },
  { label: "Pilot Partners", value: "12" },
  { label: "Patents Filed", value: "3" },
];

export const trustBadges = [
  "Field-serviceable",
  "BVLOS-ready (pilot programs)",
  "Open SDK",
];

export const valuePillars = [
  {
    title: "Multipurpose VTOL, One Airframe",
    description: "Payload-agnostic, runway-free, quick-swap mission kits.",
    features: [
      "90–180 min endurance (config-dependent)",
      "Medical/AG/inspection payloads",
      "Rapid field assembly",
    ],
  },
  {
    title: "NeuroFC — AI-Native Flight Control",
    description: "Run perception, planning, and control on the edge.",
    features: [
      "Modular I/O",
      "ML model hot-swap",
      "Safety-rated failsafes",
      "Dev-friendly SDK",
    ],
  },
  {
    title: "Battery-less Drone Research",
    description: "Towards sustained flight without conventional batteries.",
    features: [
      "Energy-harvesting architectures",
      "Light-weight power trains",
      "Safety envelopes",
    ],
  },
];

export const useCases = [
  {
    title: "Medical Logistics",
    description: "VTOL corridors for remote care.",
    image: "https://images.unsplash.com/photo-1575686467550-7d2a658eb1cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBkcm9uZXxlbnwwfHx8fDE3NjQ3ODM5MzZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Smart Agriculture",
    description: "Precision spraying, crop insights, and input optimization.",
    image: "https://images.unsplash.com/photo-1713952152768-5f28b8093166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDB8fHx8MTc2NDc4MzkyNHww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Industrial Inspection",
    description: "Safer, faster asset intelligence.",
    image: "https://images.unsplash.com/photo-1655936072925-b71b7b5d8e3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZHJvbmV8ZW58MHx8fHwxNzY0NzgzOTQzfDA&ixlib=rb-4.1.0&q=85",
  },
];

export const testimonial = {
  quote: "Hovernest cut our emergency transport time by 68% in mountainous terrain.",
  author: "Pilot Partner",
  role: "Govt. Hospital",
  avatar: "https://images.unsplash.com/photo-1580982333389-cca46f167381?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
};

export const programs = [
  {
    id: "medical",
    title: "Medical VTOL Corridor Program",
    description: "Corridor design, regulatory pathway support, cold-chain payload integration, live drills.",
    outcomes: [
      "Corridor design",
      "Regulatory pathway support",
      "Cold-chain payload integration",
      "Live drills",
    ],
    deliverables: [
      "Corridor map",
      "Operations manual",
      "Training",
      "30-day pilot",
    ],
  },
  {
    id: "agri",
    title: "Agri Intelligence & Spraying",
    description: "Survey → analyze → act; variable-rate spraying; compliance logs.",
    outcomes: [
      "Survey → analyze → act",
      "Variable-rate spraying",
      "Compliance logs",
    ],
    deliverables: [
      "Flight plans",
      "Crop health reports",
      "Input usage report",
      "ROI model",
    ],
  },
  {
    id: "industrial",
    title: "Industrial & Utilities Inspection",
    description: "Substation/line/solar inspections, 3D reconstructions, defect heatmaps.",
    outcomes: [
      "Substation/line/solar inspections",
      "3D reconstructions",
      "Defect heatmaps",
    ],
    deliverables: [
      "Annotated reports",
      "GIS exports",
      "Model archive",
    ],
  },
  {
    id: "developer",
    title: "Developer Access: NeuroFC",
    description: "SDK onboarding, model deployment, custom sensor I/O.",
    outcomes: [
      "SDK onboarding",
      "Model deployment",
      "Custom sensor I/O",
    ],
    deliverables: [
      "Dev kit",
      "Sample models",
      "Reference builds",
      "Support SLA",
    ],
  },
];

export const processTimeline = [
  "Discover",
  "Design",
  "Integrate",
  "Fly",
  "Scale",
];

export const rdStreams = [
  {
    id: "vtol",
    title: "Multipurpose VTOL Platform",
    aim: "One airframe, many missions.",
    highlights: [
      "Tilt-rotor options",
      "Modular payload bay",
      "Quick-swap landing gear",
      "Acoustic + thermal signature tuning",
      "Redundancy & health monitoring",
    ],
    outcomes: "Reduced fleet costs, faster task switching.",
  },
  {
    id: "batteryless",
    title: "Battery-less Drone Architecture",
    aim: "Toward sustained flight with unconventional energy pathways.",
    highlights: [
      "Energy harvesting and hybridization studies",
      "Ultra-light power electronics",
      "Endurance modeling",
      "Safety envelopes",
    ],
    outcomes: "Peer-reviewed paper in preparation; sign up for early access.",
    cta: "Get the Paper First",
  },
  {
    id: "neurofc",
    title: "Hovernest NeuroFC (AI-Native Flight Controller)",
    aim: "Perception → Planning → Control on the edge.",
    highlights: [
      "Modular compute (support for AI accelerators)",
      "Real-time model execution (vision, navigation, anomaly detection)",
      "Rich I/O: CAN, UART, I2C, SPI, Ethernet (configurable)",
      "Redundant sensors, watchdogs, safe-mode landings",
      "Developer SDK: model hot-swap, telemetry APIs, sim-in-the-loop",
    ],
    outcomes: "Dev kit, docs, sample models, reference airframes.",
    cta: "Request NeuroFC Dev Kit",
  },
];

export const publications = [
  {
    year: "2026",
    title: "Battery-less UAV Energy Architecture — Preprint",
    status: "Coming Soon",
  },
  {
    year: "2025",
    title: "Edge ML for VTOL Flight Control",
    status: "Whitepaper",
  },
  {
    year: "In Progress",
    title: "Patent filings",
    status: "Summaries TBA",
  },
];

export const galleryImages = [
  {
    id: 1,
    category: "vtol",
    image: "https://customer-assets.emergentagent.com/job_0afa4b6f-648f-43be-9f28-1ca6171a4f9c/artifacts/b2cxdf30_vtol.png",
    caption: "Hovernest Multipurpose VTOL",
    location: "Chennai, India",
    payload: "Medical Kit",
    flightHours: "45 hrs",
  },
  {
    id: 2,
    category: "agri",
    image: "https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDB8fHx8MTc2NDc4MzkyNHww&ixlib=rb-4.1.0&q=85",
    caption: "Agricultural Spraying Drone",
    location: "Chennai, India",
    payload: "Precision Sprayer",
    flightHours: "120 hrs",
  },
  {
    id: 3,
    category: "agri",
    image: "https://images.unsplash.com/photo-1713952152768-5f28b8093166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDB8fHx8MTc2NDc4MzkyNHww&ixlib=rb-4.1.0&q=85",
    caption: "Crop Monitoring in Action",
    location: "Chennai, India",
    payload: "Multispectral Camera",
    flightHours: "80 hrs",
  },
  {
    id: 4,
    category: "medical",
    image: "https://images.unsplash.com/photo-1575686467550-7d2a658eb1cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBkcm9uZXxlbnwwfHx8fDE3NjQ3ODM5MzZ8MA&ixlib=rb-4.1.0&q=85",
    caption: "Emergency Medical Delivery",
    location: "Chennai, India",
    payload: "Cold-chain Medical Kit",
    flightHours: "35 hrs",
  },
  {
    id: 5,
    category: "medical",
    image: "https://images.unsplash.com/photo-1644851070773-7a0a065a8df8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxlbWVyZ2VuY3klMjBkcm9uZXxlbnwwfHx8fDE3NjQ3ODM5MzZ8MA&ixlib=rb-4.1.0&q=85",
    caption: "Landing Pad Operations",
    location: "Chennai, India",
    payload: "Blood Samples",
    flightHours: "28 hrs",
  },
  {
    id: 6,
    category: "inspection",
    image: "https://images.unsplash.com/photo-1655936072925-b71b7b5d8e3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZHJvbmV8ZW58MHx8fHwxNzY0NzgzOTQzfDA&ixlib=rb-4.1.0&q=85",
    caption: "Industrial Facility Inspection",
    location: "Chennai, India",
    payload: "Thermal Camera",
    flightHours: "55 hrs",
  },
  {
    id: 7,
    category: "inspection",
    image: "https://images.unsplash.com/photo-1655936073069-07b2c9dc2db6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZHJvbmV8ZW58MHx8fHwxNzY0NzgzOTQzfDA&ixlib=rb-4.1.0&q=85",
    caption: "Power Infrastructure Survey",
    location: "Chennai, India",
    payload: "HD Camera",
    flightHours: "65 hrs",
  },
  {
    id: 8,
    category: "rnd",
    image: "https://images.unsplash.com/photo-1705579611866-8e86b797390b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNpcmN1aXQlMjBib2FyZHxlbnwwfHx8fDE3NjQ3ODM5NTB8MA&ixlib=rb-4.1.0&q=85",
    caption: "NeuroFC Circuit Board Assembly",
    location: "Chennai, India",
    payload: "Flight Controller",
    flightHours: "Testing Phase",
  },
  {
    id: 9,
    category: "rnd",
    image: "https://images.unsplash.com/photo-1762329406809-e46415e6974e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxkcm9uZSUyMGNpcmN1aXQlMjBib2FyZHxlbnwwfHx8fDE3NjQ3ODM5NTB8MA&ixlib=rb-4.1.0&q=85",
    caption: "PCB Design & Testing",
    location: "Chennai, India",
    payload: "Electronics",
    flightHours: "Prototyping",
  },
  {
    id: 10,
    category: "rnd",
    image: "https://images.unsplash.com/photo-1753781466384-cf5eee0a505d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGVuZ2luZWVyaW5nfGVufDB8fHx8MTc2NDc4Mzk1NXww&ixlib=rb-4.1.0&q=85",
    caption: "Heavy-lift VTOL Testing",
    location: "Chennai, India",
    payload: "Cargo Module",
    flightHours: "15 hrs",
  },
];

export const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Technology Officer",
    bio: "15+ years in aerospace systems, led autonomous flight programs.",
    image: "https://images.unsplash.com/photo-1580982338369-650de7dfdc07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Priya Sharma",
    role: "Head of Flight Software",
    bio: "Former ISRO engineer, expert in real-time embedded systems.",
    image: "https://images.unsplash.com/photo-1580982333389-cca46f167381?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Arjun Patel",
    role: "Mechanical Design Lead",
    bio: "Designed 20+ UAV airframes, specializing in lightweight structures.",
    image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg",
  },
  {
    name: "Sneha Iyer",
    role: "AI/ML Engineer",
    bio: "PhD in Computer Vision, published researcher in edge AI.",
    image: "https://images.unsplash.com/photo-1580982338369-650de7dfdc07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
  },
];

export const products = [
  {
    id: "vtol",
    name: "Multipurpose VTOL",
    tagline: "One airframe. Every mission.",
    description: "Runway-free vertical takeoff and landing capability with mission-adaptable payloads. Built for medical corridors, agriculture, and industrial inspection.",
    specs: [
      "90–180 min endurance",
      "5–15 kg payload capacity",
      "Quick-swap mission kits",
      "BVLOS-ready",
      "Wind class: 12 m/s",
    ],
    image: "https://customer-assets.emergentagent.com/job_0afa4b6f-648f-43be-9f28-1ca6171a4f9c/artifacts/b2cxdf30_vtol.png",
    price: "Contact for pricing",
    status: "Available",
  },
  {
    id: "fixed-wing",
    name: "Fixed-Wing Survey Drone",
    tagline: "Long-range mapping and surveillance.",
    description: "Extended endurance fixed-wing platform for large-area surveys, corridor mapping, and asset monitoring.",
    specs: [
      "3–5 hour endurance",
      "Mapping-grade cameras",
      "50+ km range",
      "Autonomous waypoint navigation",
      "Real-time telemetry",
    ],
    image: "https://images.unsplash.com/photo-1753781466770-9c00a8be26a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxkcm9uZSUyMGVuZ2luZWVyaW5nfGVufDB8fHx8MTc2NDc4Mzk1NXww&ixlib=rb-4.1.0&q=85",
    price: "Contact for pricing",
    status: "Pre-order",
  },
  {
    id: "agri-drone",
    name: "Precision Agriculture Drone",
    tagline: "Smart spraying. Healthier crops.",
    description: "Variable-rate precision sprayer with real-time crop health monitoring. Reduces input costs by up to 40%.",
    specs: [
      "10 L tank capacity",
      "Variable-rate spraying",
      "Multispectral sensors",
      "Autonomous field coverage",
      "Weather-resistant",
    ],
    image: "https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDB8fHx8MTc2NDc4MzkyNHww&ixlib=rb-4.1.0&q=85",
    price: "Contact for pricing",
    status: "Available",
  },
  {
    id: "fpv",
    name: "FPV Racing/Inspection Drone",
    tagline: "Speed meets precision.",
    description: "High-performance FPV platform for rapid inspection, confined space navigation, and training.",
    specs: [
      "120 km/h max speed",
      "HD FPV transmission",
      "Acrobatic flight modes",
      "Modular frame",
      "20–25 min flight time",
    ],
    image: "https://images.pexels.com/photos/35029074/pexels-photo-35029074.jpeg",
    price: "Contact for pricing",
    status: "Available",
  },
  {
    id: "transmitter",
    name: "NeuroFC Ground Controller",
    tagline: "Command from anywhere.",
    description: "Professional ground control station with real-time telemetry, mission planning, and multi-drone support.",
    specs: [
      "10 km range",
      "Dual-frequency (2.4/5.8 GHz)",
      "Touchscreen interface",
      "Multi-drone control",
      "Encrypted communication",
    ],
    image: "https://images.pexels.com/photos/3063470/pexels-photo-3063470.jpeg",
    price: "₹45,000",
    status: "Available",
  },
  {
    id: "parts",
    name: "Spare Parts & Accessories",
    tagline: "Keep flying. Stay mission-ready.",
    description: "Authentic OEM parts, propellers, batteries, payload mounts, and field-serviceable modules.",
    specs: [
      "OEM-certified parts",
      "Quick-ship inventory",
      "Field-swap modules",
      "Extended warranties",
      "Technical support included",
    ],
    image: "https://images.unsplash.com/photo-1762329406809-e46415e6974e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxkcm9uZSUyMGNpcmN1aXQlMjBib2FyZHxlbnwwfHx8fDE3NjQ3ODM5NTB8MA&ixlib=rb-4.1.0&q=85",
    price: "Varies",
    status: "Available",
  },
];

export const careerRoles = [
  {
    title: "Flight Software Engineer",
    department: "Engineering",
    location: "Chennai, India",
    type: "Full-time",
  },
  {
    title: "Control Systems Engineer",
    department: "Engineering",
    location: "Chennai, India",
    type: "Full-time",
  },
  {
    title: "Power Electronics Engineer",
    department: "Engineering",
    location: "Chennai, India",
    type: "Full-time",
  },
  {
    title: "Mechanical Design Engineer",
    department: "Engineering",
    location: "Chennai, India",
    type: "Full-time",
  },
  {
    title: "Field Operations Specialist",
    department: "Operations",
    location: "Chennai, India",
    type: "Full-time",
  },
];

export const blogPosts = [
  {
    id: "mountain-medicine",
    title: "Designing a Corridor for Mountain Medicine",
    date: "2025-01-15",
    tags: ["Medical", "VTOL", "Case Study"],
    summary: "How we mapped a 45-km medical delivery corridor through Himalayan terrain, cutting emergency response time by 68%.",
    hero: "https://images.unsplash.com/photo-1762707867199-d66eb6a07b50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxlbWVyZ2VuY3klMjBkcm9uZXxlbnwwfHx8fDE3NjQ3ODM5MzZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "ai-native-flight",
    title: "What 'AI-Native' Means in Flight Control",
    date: "2025-01-10",
    tags: ["NeuroFC", "AI", "Technology"],
    summary: "Breaking down the architecture of NeuroFC and why edge AI changes everything about autonomous flight.",
    hero: "https://images.unsplash.com/photo-1705579611866-8e86b797390b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNpcmN1aXQlMjBib2FyZHxlbnwwfHx8fDE3NjQ3ODM5NTB8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "energy-harvesting",
    title: "A Primer on Energy Harvesting for UAVs",
    date: "2025-01-05",
    tags: ["Research", "Battery-less", "Innovation"],
    summary: "Exploring unconventional power sources: solar, thermoelectric, and hybrid architectures for sustained flight.",
    hero: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg",
  },
];

export const faqs = [
  {
    question: "What airspace approvals do I need?",
    answer: "Requirements vary by region. We provide regulatory pathway support including DGCA coordination, NPNT compliance, and airspace clearance documentation as part of our programs.",
  },
  {
    question: "What's the maximum payload capacity?",
    answer: "Our Multipurpose VTOL supports 5–15 kg payloads depending on configuration and endurance requirements. Custom payload integration available.",
  },
  {
    question: "How much training is required?",
    answer: "Pilot training ranges from 20–40 hours depending on mission complexity. We provide comprehensive training as part of our program packages.",
  },
  {
    question: "What maintenance is required?",
    answer: "Field-serviceable design allows most maintenance on-site. Scheduled inspections every 50 flight hours. We provide maintenance training and spare parts support.",
  },
  {
    question: "Can I develop custom applications with NeuroFC?",
    answer: "Yes. NeuroFC Developer Access includes SDK, documentation, sample models, and technical support for custom AI/ML deployments.",
  },
];

export const resources = [
  {
    title: "Medical Corridor Program Overview",
    type: "PDF",
    size: "2.4 MB",
    description: "Complete guide to implementing VTOL medical delivery corridors.",
  },
  {
    title: "NeuroFC SDK Documentation",
    type: "PDF",
    size: "8.1 MB",
    description: "Developer guide with API references, sample code, and integration examples.",
  },
  {
    title: "Compliance Checklist",
    type: "PDF",
    size: "0.8 MB",
    description: "DGCA regulatory requirements and airspace approval workflow.",
  },
  {
    title: "Agriculture ROI Calculator",
    type: "Excel",
    size: "0.3 MB",
    description: "Calculate input savings and productivity gains from precision agriculture.",
  },
];

export const partnerLogos = [
  { name: "Partner 1", placeholder: true },
  { name: "Partner 2", placeholder: true },
  { name: "Partner 3", placeholder: true },
  { name: "Partner 4", placeholder: true },
  { name: "Partner 5", placeholder: true },
  { name: "Partner 6", placeholder: true },
];

export const pressLogos = [
  { name: "Press 1", placeholder: true },
  { name: "Press 2", placeholder: true },
  { name: "Press 3", placeholder: true },
  { name: "Press 4", placeholder: true },
];
