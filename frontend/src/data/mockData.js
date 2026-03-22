// Mock data for Hovernest website

export const stats = [
  { label: "Spec Sheets", value: "6" },
  { label: "Product Platforms", value: "6" },
  { label: "Mission Profiles", value: "12+" },
];

export const trustBadges = [
  "DGCA compliance-ready",
  "BVLOS capable (testing phase)",
  "PX4/Ardupilot compatible",
];

export const valuePillars = [
  {
    title: "Multipurpose VTOL Platform",
    description:
      "Hybrid VTOL architecture engineered for long-range mapping, surveillance, and delivery missions.",
    features: [
      "Wingspan: 1.8 - 2.5 m",
      "Payload capacity: 2-5 kg",
      "Flight time: 90-150 mins",
      "Range: 50-120 km",
    ],
  },
  {
    title: "NeuroFC AI-Native Control",
    description:
      "Autonomous edge flight control stack with onboard AI inference and modular integration.",
    features: [
      "AI-enabled edge compute (NVIDIA Jetson or similar)",
      "Real-time AI inference onboard",
      "4G/5G + RF telemetry",
      "Object detection and path optimization",
    ],
  },
  {
    title: "Operational Sustainment",
    description:
      "Fleet continuity through modular spare parts, certified workflows, and field-ready support.",
    features: [
      "Cross-platform spare parts compatibility",
      "High-durability accessories",
      "Easy replacement and modularity",
    ],
  },
];

export const useCases = [
  {
    title: "Medical Logistics",
    description:
      "Flagship VTOL use case with long-range, autonomous delivery for healthcare operations.",
    image: "/mdrone.png",
  },
  {
    title: "Smart Agriculture",
    description:
      "Precision spraying, crop monitoring, and variable-rate application over complex terrain.",
    image: "/wdrone.png",
  },
  {
    title: "Inspection & Reconnaissance",
    description:
      "High-speed FPV operations for industrial inspection, search and rescue, and tactical reconnaissance.",
    image: "/idrone.png",
  },
];

export const testimonial = {
  quote:
    "Hovernest cut our emergency transport time by 68% in mountainous terrain.",
  author: "Pilot Partner",
  role: "Govt. Hospital",
  avatar:
    "https://images.unsplash.com/photo-1580982333389-cca46f167381?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
};

export const customerTestimonials = [
  {
    id: "medical-corridor",
    quote:
      "After three months of scheduled runs, mission planning became predictable enough for fixed hospital transfer windows.",
    author: "Operations Lead",
    role: "Emergency Logistics Program",
    organization: "Public Hospital Network (South India)",
    region: "Tamil Nadu hill and rural corridors",
    program: "Inter-facility medical payload delivery",
    evidence: "Pilot report logged Jan 2026 (NDA summary)",
    outcomes: [
      "Average delivery cycle time reduced by 41%",
      "95% completion across scheduled daylight sorties",
      "2.5 kg cold-chain payload profile validated",
    ],
    avatar:
      "https://images.unsplash.com/photo-1580982333389-cca46f167381?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
    highlight: "Healthcare corridor pilot",
  },
  {
    id: "agri-ops",
    quote:
      "Variable-rate spray presets and terrain-following profiles reduced rework and improved repeatability between fields.",
    author: "Program Agronomist",
    role: "Precision Agriculture Operations",
    organization: "Multi-farm Cooperative Cluster",
    region: "Delta and dryland mixed terrain",
    program: "Crop health monitoring + spray missions",
    evidence: "Seasonal operations review Q4 2025",
    outcomes: [
      "12-14 acres per hour in mixed crop patterns",
      "Spray overlap errors reduced during slope operations",
      "Field turnaround improved for week-on-week cycles",
    ],
    avatar:
      "https://images.unsplash.com/photo-1580982338369-650de7dfdc07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
    highlight: "Seasonal agri deployment",
  },
  {
    id: "inspection-team",
    quote:
      "The FPV and thermal stack gave us clearer defect visibility in confined inspection zones without extending shutdown windows.",
    author: "Asset Reliability Manager",
    role: "Industrial Inspection Program",
    organization: "Energy and infrastructure contractor",
    region: "Urban utility and plant sites",
    program: "Close-range structural inspection",
    evidence: "Inspection audit pack - Dec 2025",
    outcomes: [
      "Thermal-assisted anomaly detection on insulated lines",
      "Reduced manual rope-access checks for repeat routes",
      "Faster post-inspection reporting cycles",
    ],
    avatar:
      "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg",
    highlight: "Inspection workflow verified",
  },
];

export const programs = [
  {
    id: "spec-vtol",
    title: "Spec Sheet 01 - Multipurpose VTOL Drone",
    description:
      "Hybrid VTOL UAV designed for long-range missions including mapping, surveillance, and delivery.",
    outcomes: [
      "Wingspan: 1.8-2.5 m",
      "Payload capacity: 2-5 kg",
      "Flight time: 90-150 mins",
      "Range: 50-120 km",
      "Cruise speed: 60-100 km/h",
      "Autonomous waypoint navigation",
    ],
    deliverables: [
      "Carbon fiber airframe",
      "BLDC motors + ESC",
      "GNSS + IMU + LiDAR (optional)",
      "PX4/Ardupilot compatible",
      "DGCA compliance-ready",
      "BVLOS capable (testing phase)",
    ],
  },
  {
    id: "spec-fixed-wing",
    title: "Spec Sheet 02 - Fixed-Wing Survey Drone",
    description:
      "Long-endurance fixed-wing survey platform for mapping-grade missions.",
    outcomes: [
      "Flight time: 120-180 mins",
      "Range: 100+ km",
      "Payload: high-res RGB / multispectral camera",
      "Long endurance and mapping-grade accuracy",
      "Autonomous mission planning",
    ],
    deliverables: [
      "Land surveying",
      "Agriculture mapping",
      "GIS data collection",
    ],
  },
  {
    id: "spec-agri",
    title: "Spec Sheet 03 - Precision Agriculture Drone",
    description:
      "Precision spraying UAV built for agricultural treatment and crop monitoring workflows.",
    outcomes: [
      "Payload: 10-20L spray tank",
      "Coverage: 10-15 acres/hour",
      "Flight time: 20-40 mins",
      "Smart spraying + variable rate application",
      "Terrain following",
    ],
    deliverables: [
      "Fertilizer spraying",
      "Pesticide application",
      "Crop monitoring",
    ],
  },
  {
    id: "spec-fpv",
    title: "Spec Sheet 04 - FPV Racing / Inspection Drone",
    description:
      "Compact high-agility FPV platform for rapid inspection and real-time situational awareness.",
    outcomes: [
      "Speed: 120-180 km/h",
      "Flight time: 10-20 mins",
      "Camera: HD FPV + optional thermal",
      "High agility + real-time video transmission",
      "Compact design",
    ],
    deliverables: [
      "Industrial inspection",
      "Search and rescue",
      "Racing and training",
    ],
  },
  {
    id: "spec-neurofc",
    title: "Spec Sheet 05 - NeuroFC Ground Controller",
    description:
      "AI-native flight control system designed for autonomous UAV operations.",
    outcomes: [
      "Processor: AI-enabled edge compute (NVIDIA Jetson / similar)",
      "Sensors: IMU, GPS, vision modules",
      "Connectivity: 4G/5G, RF telemetry",
      "Real-time AI inference onboard",
      "Autonomous decision making",
      "Modular architecture",
    ],
    deliverables: [
      "Object detection",
      "Path optimization",
      "Swarm readiness (future)",
      "Smart agriculture",
      "Defense drones",
      "Autonomous logistics",
    ],
  },
  {
    id: "spec-parts",
    title: "Spec Sheet 06 - Spare Parts & Accessories",
    description:
      "Standardized replacement ecosystem to keep all Hovernest systems mission-ready.",
    outcomes: [
      "Propellers",
      "Batteries (LiPo / Li-ion)",
      "Motors and ESCs",
      "Frames and landing gear",
      "Sensors and cameras",
    ],
    deliverables: [
      "High durability",
      "Compatible across Hovernest systems",
      "Easy replacement and modularity",
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

export const serviceLines = [
  {
    id: "hardware-integration",
    code: "SVC-01",
    title: "Hardware Platform Integration",
    tagline:
      "Airframe, propulsion, and payload architecture aligned to mission class.",
    description:
      "Engineering services for Multipurpose VTOL, Fixed-Wing Survey, Precision Agriculture, and FPV Inspection platforms, including mission-specific payload and endurance tuning.",
    capabilities: [
      { label: "Multipurpose VTOL", value: "2-5 kg payload, 50-120 km range" },
      {
        label: "Fixed-Wing Survey",
        value: "120-180 mins endurance, 100+ km range",
      },
      {
        label: "Agri Drone",
        value: "10-20L payload, 10-15 acres/hour coverage",
      },
      {
        label: "FPV Drone",
        value: "120-180 km/h, HD FPV plus optional thermal",
      },
      { label: "Airframe", value: "Carbon fiber construction" },
      { label: "Propulsion", value: "BLDC motors + ESC" },
    ],
  },
  {
    id: "autonomy-stack",
    code: "SVC-02",
    title: "Software & Autonomy Stack",
    tagline:
      "Mission software, onboard AI, and autonomous control workflow integration.",
    description:
      "Integration of PX4/Ardupilot compatibility, NeuroFC AI flight controller capabilities, mission planning, autonomous decision logic, and telemetry operations.",
    capabilities: [
      { label: "Controller", value: "NeuroFC AI-native architecture" },
      { label: "Processor", value: "NVIDIA Jetson class edge compute" },
      { label: "Sensors", value: "IMU, GPS, vision modules" },
      { label: "Connectivity", value: "4G/5G with RF telemetry" },
      { label: "Capabilities", value: "Object detection + path optimization" },
      { label: "Future", value: "Swarm readiness roadmap" },
    ],
  },
  {
    id: "sustainment-accessories",
    code: "SVC-03",
    title: "Sustainment, Certification & Accessories",
    tagline:
      "Lifecycle support from compliance readiness through spare-parts continuity.",
    description:
      "Program support that aligns deployments to DGCA compliance-ready documentation, BVLOS testing workflows, and spare-parts modular replacement frameworks.",
    capabilities: [
      { label: "Certification", value: "DGCA compliance-ready" },
      { label: "BVLOS", value: "Testing phase support" },
      { label: "Accessories", value: "Propellers, batteries, motors, ESCs" },
      { label: "Structures", value: "Frames and landing gear" },
      { label: "Payload Support", value: "Sensors and cameras" },
      {
        label: "Serviceability",
        value: "High durability and modular replacement",
      },
    ],
  },
];

export const serviceSectors = [
  {
    sector: "Healthcare & Emergency Logistics",
    outcome:
      "Long-range VTOL missions with autonomous routing for critical delivery corridors.",
    description:
      "Multipurpose VTOL systems support healthcare logistics, terrain-heavy delivery networks, and rapid-response payload transport with mission-safe autonomous navigation.",
    applications: [
      "Medical delivery",
      "Autonomous waypoint routing",
      "VTOL launch and recovery",
      "Long-range corridor operations",
    ],
  },
  {
    sector: "Survey, GIS & Infrastructure",
    outcome: "Mapping-grade accuracy with long-endurance fixed-wing coverage.",
    description:
      "Fixed-wing survey platforms and FPV inspection configurations support mapping, infrastructure intelligence, and rapid visual/thermal inspection under diverse mission constraints.",
    applications: [
      "Land surveying",
      "GIS data collection",
      "Industrial inspection",
      "Search and rescue",
    ],
  },
  {
    sector: "Agriculture & Autonomous Operations",
    outcome: "Precision spray coverage with AI-assisted decision support.",
    description:
      "Precision agriculture platforms and NeuroFC autonomy modules are deployed for variable-rate spraying, crop intelligence, and autonomous mission optimization.",
    applications: [
      "Fertilizer spraying",
      "Pesticide application",
      "Crop monitoring",
      "Path optimization",
    ],
  },
];

export const serviceEngagementSteps = [
  {
    index: "01",
    title: "Mission Consultation",
    desc: "We assess your operational requirement, terrain, regulatory environment, and expected deliverables to scope the right service.",
  },
  {
    index: "02",
    title: "Mission Planning",
    desc: "Flight paths, sensor configuration, airspace coordination, and risk assessment are completed before any deployment.",
  },
  {
    index: "03",
    title: "Field Deployment",
    desc: "Our certified teams deploy with NeuroFC-powered platforms, executing the mission with real-time telemetry monitoring.",
  },
  {
    index: "04",
    title: "Data Processing",
    desc: "Raw flight data is processed into GIS-ready deliverables, reports, or annotated datasets using our processing pipeline.",
  },
  {
    index: "05",
    title: "Delivery & Debrief",
    desc: "Final outputs are delivered with a mission debrief, accuracy report, and recommendations for follow-on operations.",
  },
];

export const serviceCapabilities = [
  {
    title: "Hardware-Spec Integration",
    desc: "Each deployment is configured to the official platform envelope, including payload class, endurance target, and mission profile constraints.",
  },
  {
    title: "AI-Native NeuroFC Enablement",
    desc: "NeuroFC configuration support covers sensor interfacing, onboard AI inference, telemetry links, and autonomous behavior tuning.",
  },
  {
    title: "Compliance & BVLOS Workflow",
    desc: "Programs are prepared for DGCA compliance readiness and BVLOS testing phase operations with structured documentation and risk controls.",
  },
  {
    title: "Spare Parts Continuity",
    desc: "Fleet sustainment includes modular replacement of propellers, batteries, motors, ESCs, frames, landing gear, and sensor payload modules.",
  },
];

export const rdStreams = [
  {
    id: "autonomous-vtol",
    title: "Multipurpose VTOL Systems Research",
    aim: "Improving mission reliability across mapping, surveillance, and delivery envelopes.",
    highlights: [
      "Hybrid propulsion optimization",
      "Vertical takeoff + efficient forward-flight balancing",
      "AI-assisted flight stabilization validation",
      "Modular payload architecture improvement",
      "Range and endurance trade-space analysis",
    ],
    outcomes:
      "Research output aligned to 90-150 minute flight window and 50-120 km operational range targets.",
  },
  {
    id: "neurofc-ai",
    title: "NeuroFC AI Ground Controller Evolution",
    aim: "AI-native control logic for robust autonomous decision loops.",
    highlights: [
      "Edge AI compute benchmarking",
      "Vision-assisted perception fusion",
      "Telemetry resilience over 4G/5G and RF channels",
      "Object detection and path optimization stack",
      "Modular autonomy architecture for future swarm systems",
    ],
    outcomes:
      "Validated foundation for autonomous logistics, defense drone pathways, and smart agriculture autonomy.",
    cta: "Request NeuroFC Technical Brief",
  },
  {
    id: "certification-readiness",
    title: "Compliance, BVLOS & Sustainment Research",
    aim: "Operational readiness through certification alignment and modular support ecosystems.",
    highlights: [
      "DGCA compliance-ready documentation templates",
      "BVLOS test protocol hardening",
      "Failure-mode and redundancy modeling",
      "Spare-part interchangeability matrices",
      "Field replacement time reduction studies",
    ],
    outcomes:
      "Future-ready pathways for certification and long-cycle fleet sustainment.",
    cta: "Request Compliance Notes",
  },
];

export const publications = [
  {
    year: "2026",
    title: "Multipurpose VTOL Performance Envelope Whitepaper",
    status: "Draft in Review",
  },
  {
    year: "2026",
    title: "NeuroFC Autonomous Decision Stack Brief",
    status: "Internal Release",
  },
  {
    year: "2026",
    title: "DGCA + BVLOS Readiness Reference Pack",
    status: "In Progress",
  },
];

export const galleryImages = [
  {
    id: 1,
    category: "vtol",
    image: "/vtol-product.png",
    caption: "Hovernest Multipurpose VTOL",
    location: "Chennai, India",
    payload: "Medical Kit",
    flightHours: "45 hrs",
  },
  {
    id: 2,
    category: "agri",
    image:
      "https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDB8fHx8MTc2NDc4MzkyNHww&ixlib=rb-4.1.0&q=85",
    caption: "Agricultural Spraying Drone",
    location: "Chennai, India",
    payload: "Precision Sprayer",
    flightHours: "120 hrs",
  },
  {
    id: 3,
    category: "agri",
    image:
      "https://images.unsplash.com/photo-1713952152768-5f28b8093166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDB8fHx8MTc2NDc4MzkyNHww&ixlib=rb-4.1.0&q=85",
    caption: "Crop Monitoring in Action",
    location: "Chennai, India",
    payload: "Multispectral Camera",
    flightHours: "80 hrs",
  },
  {
    id: 4,
    category: "medical",
    image:
      "https://images.unsplash.com/photo-1575686467550-7d2a658eb1cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBkcm9uZXxlbnwwfHx8fDE3NjQ3ODM5MzZ8MA&ixlib=rb-4.1.0&q=85",
    caption: "Emergency Medical Delivery",
    location: "Chennai, India",
    payload: "Cold-chain Medical Kit",
    flightHours: "35 hrs",
  },
  {
    id: 5,
    category: "medical",
    image:
      "https://images.unsplash.com/photo-1644851070773-7a0a065a8df8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxlbWVyZ2VuY3klMjBkcm9uZXxlbnwwfHx8fDE3NjQ3ODM5MzZ8MA&ixlib=rb-4.1.0&q=85",
    caption: "Landing Pad Operations",
    location: "Chennai, India",
    payload: "Blood Samples",
    flightHours: "28 hrs",
  },
  {
    id: 6,
    category: "inspection",
    image:
      "https://images.unsplash.com/photo-1655936072925-b71b7b5d8e3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZHJvbmV8ZW58MHx8fHwxNzY0NzgzOTQzfDA&ixlib=rb-4.1.0&q=85",
    caption: "Industrial Facility Inspection",
    location: "Chennai, India",
    payload: "Thermal Camera",
    flightHours: "55 hrs",
  },
  {
    id: 7,
    category: "inspection",
    image:
      "https://images.unsplash.com/photo-1655936073069-07b2c9dc2db6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZHJvbmV8ZW58MHx8fHwxNzY0NzgzOTQzfDA&ixlib=rb-4.1.0&q=85",
    caption: "Power Infrastructure Survey",
    location: "Chennai, India",
    payload: "HD Camera",
    flightHours: "65 hrs",
  },
  {
    id: 8,
    category: "rnd",
    image:
      "https://images.unsplash.com/photo-1705579611866-8e86b797390b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNpcmN1aXQlMjBib2FyZHxlbnwwfHx8fDE3NjQ3ODM5NTB8MA&ixlib=rb-4.1.0&q=85",
    caption: "NeuroFC Circuit Board Assembly",
    location: "Chennai, India",
    payload: "Flight Controller",
    flightHours: "Testing Phase",
  },
  {
    id: 9,
    category: "rnd",
    image:
      "https://images.unsplash.com/photo-1762329406809-e46415e6974e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxkcm9uZSUyMGNpcmN1aXQlMjBib2FyZHxlbnwwfHx8fDE3NjQ3ODM5NTB8MA&ixlib=rb-4.1.0&q=85",
    caption: "PCB Design & Testing",
    location: "Chennai, India",
    payload: "Electronics",
    flightHours: "Prototyping",
  },
  {
    id: 10,
    category: "rnd",
    image:
      "https://images.unsplash.com/photo-1753781466384-cf5eee0a505d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGVuZ2luZWVyaW5nfGVufDB8fHx8MTc2NDc4Mzk1NXww&ixlib=rb-4.1.0&q=85",
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
    image:
      "https://images.unsplash.com/photo-1580982338369-650de7dfdc07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Priya Sharma",
    role: "Head of Flight Software",
    bio: "Former ISRO engineer, expert in real-time embedded systems.",
    image:
      "https://images.unsplash.com/photo-1580982333389-cca46f167381?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
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
    image:
      "https://images.unsplash.com/photo-1580982338369-650de7dfdc07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcnMlMjB0ZWFtfGVufDB8fHx8MTc2NDc4Mzk2MXww&ixlib=rb-4.1.0&q=85",
  },
];

export const products = [
  {
    id: "vtol",
    name: "Multipurpose VTOL Drone",
    tagline: "Hybrid VTOL for long-range mapping, surveillance, and delivery.",
    description:
      "Hybrid VTOL UAV with vertical takeoff and landing, efficient fixed-wing forward flight, and autonomous waypoint navigation.",
    specs: [
      "Wingspan: 1.8 - 2.5 m",
      "Payload Capacity: 2-5 kg",
      "Flight Time: 90-150 mins",
      "Range: 50-120 km",
      "Cruise Speed: 60-100 km/h",
      "Hybrid propulsion system",
      "Modular payload bay",
      "AI-assisted flight stabilization",
      "Hardware: carbon fiber airframe, BLDC motors + ESC",
      "Software: PX4 / Ardupilot compatible; NeuroFC ready",
      "Certifications: DGCA compliance-ready; BVLOS capable (testing phase)",
    ],
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=80",
    price: "Contact for pricing",
    status: "Available",
  },
  {
    id: "fixed-wing",
    name: "Fixed-Wing Survey Drone",
    tagline: "Long-endurance mapping-grade aerial survey platform.",
    description:
      "Designed for land surveying, agriculture mapping, and GIS data collection with autonomous mission planning.",
    specs: [
      "Flight Time: 120-180 mins",
      "Range: 100+ km",
      "Payload: High-res RGB / multispectral camera",
      "Long endurance",
      "Mapping-grade accuracy",
      "Autonomous waypoint navigation",
      "Autonomous mission planning",
    ],
    image:
      "https://images.unsplash.com/photo-1753781466770-9c00a8be26a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxkcm9uZSUyMGVuZ2luZWVyaW5nfGVufDB8fHx8MTc2NDc4Mzk1NXww&ixlib=rb-4.1.0&q=85",
    price: "Contact for pricing",
    status: "Pre-order",
  },
  {
    id: "agri-drone",
    name: "Precision Agriculture Drone",
    tagline: "Smart spraying with variable-rate field execution.",
    description:
      "Optimized for fertilizer spraying, pesticide application, and crop monitoring over high-throughput agricultural routes.",
    specs: [
      "Payload: 10-20L spray tank",
      "Coverage: 10-15 acres/hour",
      "Flight Time: 20-40 mins",
      "Smart spraying system",
      "Variable rate application",
      "Terrain following",
    ],
    image:
      "https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDB8fHx8MTc2NDc4MzkyNHww&ixlib=rb-4.1.0&q=85",
    price: "Contact for pricing",
    status: "Available",
  },
  {
    id: "fpv",
    name: "FPV Racing/Inspection Drone",
    tagline: "High-agility platform for rapid inspection and response.",
    description:
      "Built for industrial inspection, search and rescue, and training missions with low-latency visual feedback.",
    specs: [
      "Speed: 120-180 km/h",
      "Flight Time: 10-20 mins",
      "Camera: HD FPV + optional thermal",
      "High agility",
      "Real-time video transmission",
      "Modular frame",
      "Compact design",
    ],
    image:
      "https://images.pexels.com/photos/35029074/pexels-photo-35029074.jpeg",
    price: "Contact for pricing",
    status: "Available",
  },
  {
    id: "neurofc-controller",
    name: "NeuroFC Ground Controller",
    tagline: "AI-native flight control for autonomous UAV operations.",
    description:
      "Core autonomy system for mission planning, onboard inference, and real-time command/control across multi-domain UAV operations.",
    specs: [
      "Processor: AI-enabled edge compute (NVIDIA Jetson / similar)",
      "Sensors: IMU, GPS, Vision modules",
      "Connectivity: 4G/5G, RF telemetry",
      "Real-time AI inference onboard",
      "Autonomous decision making",
      "Modular architecture",
      "Capabilities: Object detection, path optimization, swarm readiness (future)",
      "Use cases: smart agriculture, defense drones, autonomous logistics",
    ],
    image: "https://images.pexels.com/photos/3063470/pexels-photo-3063470.jpeg",
    price: "Contact for pricing",
    status: "Available",
  },
  {
    id: "parts",
    name: "Spare Parts & Accessories",
    tagline: "High-durability modular replacement ecosystem.",
    description:
      "Comprehensive spare ecosystem to keep fleets mission-ready with rapid replacement cycles and broad platform compatibility.",
    specs: [
      "Propellers",
      "Batteries (LiPo / Li-ion)",
      "Motors and ESCs",
      "Frames and landing gear",
      "Sensors and cameras",
      "High durability",
      "Compatible across Hovernest systems",
      "Easy replacement and modularity",
    ],
    image:
      "https://image2url.com/r2/default/images/1773632554755-fec86ac2-c851-40f4-9c0d-e7d35337003f.jpeg",
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
    summary:
      "How we mapped a 45-km medical delivery corridor through Himalayan terrain, cutting emergency response time by 68%.",
    hero: "https://images.unsplash.com/photo-1762707867199-d66eb6a07b50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxlbWVyZ2VuY3klMjBkcm9uZXxlbnwwfHx8fDE3NjQ3ODM5MzZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "ai-native-flight",
    title: "What 'AI-Native' Means in Flight Control",
    date: "2025-01-10",
    tags: ["NeuroFC", "AI", "Technology"],
    summary:
      "Breaking down the architecture of NeuroFC and why edge AI changes everything about autonomous flight.",
    hero: "https://images.unsplash.com/photo-1705579611866-8e86b797390b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNpcmN1aXQlMjBib2FyZHxlbnwwfHx8fDE3NjQ3ODM5NTB8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "energy-harvesting",
    title: "A Primer on Energy Harvesting for UAVs",
    date: "2025-01-05",
    tags: ["Research", "Battery-less", "Innovation"],
    summary:
      "Exploring unconventional power sources: solar, thermoelectric, and hybrid architectures for sustained flight.",
    hero: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg",
  },
];

export const faqs = [
  {
    question: "What airspace approvals do I need?",
    answer:
      "Requirements vary by region. We provide regulatory pathway support including DGCA coordination, NPNT compliance, and airspace clearance documentation as part of our programs.",
  },
  {
    question: "What's the maximum payload capacity?",
    answer:
      "Our Multipurpose VTOL supports 5–15 kg payloads depending on configuration and endurance requirements. Custom payload integration available.",
  },
  {
    question: "How much training is required?",
    answer:
      "Pilot training ranges from 20–40 hours depending on mission complexity. We provide comprehensive training as part of our program packages.",
  },
  {
    question: "What maintenance is required?",
    answer:
      "Field-serviceable design allows most maintenance on-site. Scheduled inspections every 50 flight hours. We provide maintenance training and spare parts support.",
  },
  {
    question: "Can I develop custom applications with NeuroFC?",
    answer:
      "Yes. NeuroFC Developer Access includes SDK, documentation, sample models, and technical support for custom AI/ML deployments.",
  },
];

export const resources = [
  {
    title: "Medical Corridor Program Overview",
    type: "PDF",
    size: "2.4 MB",
    description:
      "Complete guide to implementing VTOL medical delivery corridors.",
  },
  {
    title: "NeuroFC SDK Documentation",
    type: "PDF",
    size: "8.1 MB",
    description:
      "Developer guide with API references, sample code, and integration examples.",
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
    description:
      "Calculate input savings and productivity gains from precision agriculture.",
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
