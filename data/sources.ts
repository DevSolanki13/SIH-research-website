export type SourceCategory = "GOVERNMENT" | "REGULATORY" | "ACADEMIC" | "INDUSTRY" | "REFERENCE";

export interface ResearchSourceItem {
  id: string;
  organisation: string;
  title: string;
  category: SourceCategory;
  categoryLabel: string;
  date: string;
  url?: string;
  supports: string;
  notes?: string;
}

export const RESEARCH_SOURCES: ResearchSourceItem[] = [
  {
    id: "src-cpcb",
    organisation: "Central Pollution Control Board (CPCB)",
    title: "Guidelines on Environmental Compensation & E-Waste Management Rules 2022",
    category: "GOVERNMENT",
    categoryLabel: "Government / Statutory",
    date: "2022–2024",
    url: "https://cpcb.nic.in/e-waste/",
    supports: "CPCB-ready digital receipts, EPR credit data capture, and authorized recycler documentation criteria.",
    notes: "Defines EPR obligations for producers and formal audit trail mandates for recyclers.",
  },
  {
    id: "src-mpcb-dir",
    organisation: "Maharashtra Pollution Control Board (MPCB)",
    title: "Circular Economy Directory 2025: Authorized E-Waste Units",
    category: "REGULATORY",
    categoryLabel: "Regulatory Database",
    date: "2025",
    url: "https://www.mpcb.gov.in/index.php/en/node/7194",
    supports: "Public records of authorized dismantlers and recycling units in the Vasai–Virar, Waliv, and Pelhar areas.",
    notes: "Primary reference for local industrial ecosystem verification.",
  },
  {
    id: "src-vvcmc-esr",
    organisation: "Vasai–Virar City Municipal Corporation (VVCMC)",
    title: "Environmental Status Report (ESR) 2022–23",
    category: "GOVERNMENT",
    categoryLabel: "Municipal Report",
    date: "2023",
    url: "https://vvcmc.in/wp-content/uploads/2023/08/VVCMC_ESR_Report_V8_07-08-2023.pdf",
    supports: "Municipal estimate of ~60 tonnes/month domestic e-waste generation within VVCMC boundaries (extrapolated from MMR data).",
    notes: "Extrapolated from municipal solid waste baseline studies.",
  },
  {
    id: "src-mpcb-reg",
    organisation: "Maharashtra Pollution Control Board (MPCB)",
    title: "E-Waste Outward Registry & Consignment Compliance Portal",
    category: "REGULATORY",
    categoryLabel: "Regulatory Snapshot",
    date: "Snapshot: 29 Sep 2026",
    url: "https://www.ecmpcb.in/ewasteOutwardRegistry",
    supports: "Public verification of official outward consignment authorizations and recycler facility listings.",
    notes: "Point-in-time regulatory filing reference.",
  },
  {
    id: "src-baseline",
    organisation: "Regional Waste Management Consortium",
    title: "Baseline Study of Informal Waste Pickers & Aggregation Hubs (MMR)",
    category: "ACADEMIC",
    categoryLabel: "Research Study",
    date: "2024",
    supports: "Understanding informal scrap dealer hierarchies, daily cash dependency, and door-to-door aggregation practices in Mira-Bhayander and Vasai–Virar.",
    notes: "Broader recyclable waste baseline; distinct from pure electronic waste surveys.",
  },
  {
    id: "src-giz-gaia",
    organisation: "GIZ & GAIA / No-Burn Global Alliance",
    title: "Informal Waste Sector Integration & Traceability Studies",
    category: "INDUSTRY",
    categoryLabel: "Industry / NGO",
    date: "2023–2025",
    url: "https://www.giz.de",
    supports: "Principles of dignity-first informal integration, transparent payout benchmarks, and lightweight mobile recordkeeping.",
    notes: "Global and national best practices for informal sector formalisation.",
  },
  {
    id: "src-blr-ref",
    organisation: "Independent Academic & Field Researchers",
    title: "Bengaluru Informal E-Waste Channel Flow Study",
    category: "REFERENCE",
    categoryLabel: "Reference Field Study",
    date: "2023",
    supports: "Comparative study on informal scrap sorting flows and price distortion in urban e-waste channels.",
    notes: "STRICT INTEGRITY LABEL: This is an external reference field study used as a comparative benchmark. It is NEVER presented as Team Error 200's own field research.",
  },
];
