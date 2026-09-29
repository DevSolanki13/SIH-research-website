export type ResearchType = "PRIMARY" | "SECONDARY" | "REFERENCE";

export interface ResearchCardItem {
  id: string;
  cardCode: "A" | "B" | "C" | "D" | "E";
  title: string;
  metric?: string;
  badge: string;
  type: ResearchType;
  summary: string;
  details: string;
  sourceLabel: string;
  sourceUrl?: string;
  date: string;
  dataClassification: "VERIFIED" | "ESTIMATED" | "DEMO" | "TO COLLECT";
  interpretationNote?: string;
  bulletPoints?: string[];
}

export const RESEARCH_TYPE_CONFIG = {
  PRIMARY: {
    label: "OUR FIELD VISIT",
    color: "#79D47C",
    bg: "rgba(121, 212, 124, 0.12)",
    border: "rgba(121, 212, 124, 0.3)",
    description: "Information directly observed or collected in person by Team Error 200.",
  },
  SECONDARY: {
    label: "LOCAL DESK RESEARCH",
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.12)",
    border: "rgba(96, 165, 250, 0.3)",
    description: "Information obtained from official government reports, regulatory registries, and published municipal studies.",
  },
  REFERENCE: {
    label: "REFERENCE FIELD STUDY",
    color: "#E2B45B",
    bg: "rgba(226, 180, 91, 0.12)",
    border: "rgba(226, 180, 91, 0.3)",
    description: "External independent case studies and literature used as comparative benchmarks (never presented as our own visit).",
  },
};

export const LOCAL_RESEARCH_CARDS: ResearchCardItem[] = [
  {
    id: "res-card-a",
    cardCode: "A",
    title: "Local E-Waste Estimate",
    metric: "~60 tonnes / month",
    badge: "SECONDARY / MUNICIPAL ESTIMATE",
    type: "SECONDARY",
    summary:
      "VVCMC's Environmental Status Report (ESR) 2022–23 estimated approximately 60 tonnes of domestic e-waste generated per month across the municipal corporation area.",
    details:
      "Derived from municipal extrapolation and MPCB-level baseline figures. This is secondary documentation, not a primary field measurement.",
    sourceLabel: "VVCMC Environmental Status Report 2022–23",
    date: "2023",
    dataClassification: "ESTIMATED",
    interpretationNote: "This volume represents domestic and municipal flows; industrial scrap flows from unorganized clusters remain supplementary.",
  },
  {
    id: "res-card-b",
    cardCode: "B",
    title: "Local E-Waste Ecosystem Directory",
    badge: "MPCB DIRECTORY — 2025",
    type: "SECONDARY",
    summary:
      "The MPCB Circular Economy Directory 2025 lists multiple authorized collection points, dismantlers, and industrial processing units operating in the Vasai–Virar industrial belt.",
    details:
      "Documented ecosystem units are located across documented MPCB public-record locations in Vasai–Virar: Waliv, Vasai East, Pelhar, Nalasopara, and Gokhiware.",
    sourceLabel: "Maharashtra Pollution Control Board (MPCB) Circular Economy Directory 2025",
    date: "2025",
    dataClassification: "VERIFIED",
    bulletPoints: [
      "Waliv — Aggregators & electrical dismantlers (MPCB public record)",
      "Vasai East — Segregation godowns & scrap transit points (MPCB public record)",
      "Pelhar — Bulk consolidation yards (MPCB public record)",
      "Nalasopara — Local neighborhood scrap buying shops (MPCB public record)",
      "Gokhiware — Secondary processing & metal segregation yards (MPCB public record)",
    ],
    interpretationNote: "Presented as a regional ecosystem map from public regulatory records, not as facilities personally audited by our team.",
  },
  {
    id: "res-card-c",
    cardCode: "C",
    title: "Local Regulatory Snapshot",
    badge: "MPCB OUTWARD REGISTRY",
    type: "SECONDARY",
    summary:
      "Current regulatory filing snapshot from the MPCB e-waste outward registry reflecting authorized consignments and compliance authorizations.",
    details:
      "Cross-referenced to understand official EPR credit filing patterns and manifest documentation standards mandated for authorized recyclers.",
    sourceLabel: "MPCB E-Waste Outward Registry Portal",
    sourceUrl: "https://mpcb.gov.in",
    date: "Snapshot: 29 Sep 2026",
    dataClassification: "VERIFIED",
    interpretationNote: "This represents a point-in-time regulatory snapshot and should not be treated as a live or permanently static register.",
  },
  {
    id: "res-card-d",
    cardCode: "D",
    title: "Regional Waste Ecosystem Baseline",
    badge: "BASELINE STUDY (MIRA-BHAYANDER & VASAI-VIRAR)",
    type: "SECONDARY",
    summary:
      "A regional baseline study covering Mira-Bhayander and Vasai–Virar mapped the informal waste hierarchy and intermediate aggregators.",
    details:
      "The survey engaged key actors across the chain: Aggregators, scrap dealers (kabadiwalas), formal waste workers, waste pickers, and bulk waste generators (BWGs).",
    sourceLabel: "Regional Waste Management Baseline Survey (MMR Region)",
    date: "2024–2025",
    dataClassification: "VERIFIED",
    bulletPoints: [
      "Aggregators: Operate regional sorting sheds with cash payouts",
      "Scrap Dealers: Buy door-to-door and from commercial small shops",
      "Informal Waste Pickers: Rely heavily on daily cash flow without written slips",
      "Bulk Waste Generators: Require compliant CPCB certificates but lack direct links to scrap pickers",
    ],
    interpretationNote: "Note: This is broader municipal solid waste and recyclable management research, not an e-waste-specific survey. The distinction is strictly preserved.",
  },
  {
    id: "res-card-e",
    cardCode: "E",
    title: "Local Policy & Formalisation Context",
    badge: "VVCMC POLICY CONTEXT & BHAAV INTERPRETATION",
    type: "SECONDARY",
    summary:
      "VVCMC municipal documentation references the progressive integration of waste pickers and informal waste workers into city-wide waste management streams.",
    details:
      "National and state guidelines prioritize livelihood protection and formal authorization rather than displacing ground-level informal workers.",
    sourceLabel: "VVCMC Solid Waste Bye-Laws & Integration Directives",
    date: "2024",
    dataClassification: "VERIFIED",
    interpretationNote: "BHAAV DESIGN INTERPRETATION: This creates an ideal policy foundation for exploring how informal actors can participate in a digital, traceable e-waste channel with signed receipts rather than remaining unrecorded.",
  },
];
