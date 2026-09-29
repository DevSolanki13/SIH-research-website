export interface FieldObservation {
  id: string;
  metric?: string;
  title: string;
  finding: string;
  description: string;
  badge: "FIELD OBSERVATION";
  category: "Volume" | "Documentation" | "Process" | "Commercial" | "Channel";
  location: string;
  date: string;
}

export interface FieldPhoto {
  id: string;
  title: string;
  caption: string;
  tag: "FIELD VISIT" | "MATERIAL" | "SELLING PROCESS" | "OBSERVATION" | "FIELD INTERVIEW" | "USING BHAAV";
  location: string;
  date: string;
  imageUrl: string;
  aspectRatio?: "wide" | "standard" | "tall";
}

export const FIELD_METADATA = {
  location: "Vasai–Virar, Maharashtra",
  region: "Palghar District / Mumbai Metropolitan Region",
  date: "29 September 2026",
  type: "Primary Field Research",
  team: "Team Error 200",
  project: "Bhaav",
  scope: "Understanding how e-waste moves, pricing negotiations, documentation gaps, and aggregation practices on the ground.",
};

export const FIELD_OBSERVATIONS: FieldObservation[] = [
  {
    id: "obs-1",
    metric: "300–400 kg",
    title: "Bulk Lot Accumulation",
    finding: "Bulk quantities were observed during aggregation.",
    description:
      "Informal aggregators and scrap handlers accumulate material until reaching substantial bulk volume (approx. 300–400 kg) before arranging onward transfer or sale.",
    badge: "FIELD OBSERVATION",
    category: "Volume",
    location: "Vasai–Virar, Maharashtra",
    date: "29 Sep 2026",
  },
  {
    id: "obs-2",
    title: "Absence of Paper Records",
    finding: "A formal bill or receipt was not observed in the transaction process.",
    description:
      "Sales are concluded entirely verbally or through handwritten scrapbooks. Neither the collector nor the intermediate buyer holds a signed, verifiable bill.",
    badge: "FIELD OBSERVATION",
    category: "Documentation",
    location: "Vasai–Virar, Maharashtra",
    date: "29 Sep 2026",
  },
  {
    id: "obs-3",
    title: "Material Separation at Source",
    finding: "Materials are separated before selling.",
    description:
      "Materials are separated before selling to maintain grade-specific value prior to bulk negotiation.",
    badge: "FIELD OBSERVATION",
    category: "Process",
    location: "Vasai–Virar, Maharashtra",
    date: "29 Sep 2026",
  },
  {
    id: "obs-4",
    title: "In-Person Price Negotiation",
    finding: "Prices are negotiated dynamically between the parties.",
    description:
      "There is no static rate card. Final payment rates fluctuate during in-person bargaining based on lot visual purity, total weight, and immediate cash availability.",
    badge: "FIELD OBSERVATION",
    category: "Commercial",
    location: "Vasai–Virar, Maharashtra",
    date: "29 Sep 2026",
  },
  {
    id: "obs-5",
    title: "Intermediary & Direct Contact Sales",
    finding: "Sales happen through direct contacts or local intermediaries.",
    description:
      "Collectors rely heavily on established personal phone networks or visiting middle-tier aggregators who consolidate scrap from multiple informal hubs.",
    badge: "FIELD OBSERVATION",
    category: "Channel",
    location: "Vasai–Virar, Maharashtra",
    date: "29 Sep 2026",
  },
  {
    id: "obs-6",
    title: "Market-Linked Pricing Variations",
    finding: "Prices are strongly influenced by the destination marketplace.",
    description:
      "Local payout rates follow the wholesale metal and scrap sentiment in Mumbai regional trade hubs, but collectors rarely have real-time visibility into these rates.",
    badge: "FIELD OBSERVATION",
    category: "Commercial",
    location: "Vasai–Virar, Maharashtra",
    date: "29 Sep 2026",
  },
];

export const FIELD_PHOTOS: FieldPhoto[] = [
  {
    id: "photo-1",
    title: "Field Interview — Vishwakarma Estate",
    caption:
      "Primary on-site qualitative interview with informal scrap merchant documenting daily aggregation, storage, and transaction practices.",
    tag: "FIELD INTERVIEW",
    location: "Vasai West, Maharashtra",
    date: "29 Sep 2026 · 06:31 PM",
    imageUrl: "/images/field/field-interview-1.jpg",
    aspectRatio: "standard",
  },
  {
    id: "photo-2",
    title: "Using Bhaav — Merchant Trial",
    caption:
      "Informal scrap merchant reviewing Bhaav mobile interface and material rate estimation workflow on smartphone during field testing.",
    tag: "USING BHAAV",
    location: "Vasai West, Maharashtra",
    date: "29 Sep 2026 · 06:34 PM",
    imageUrl: "/images/field/using-bhaav-1.jpg",
    aspectRatio: "standard",
  },
  {
    id: "photo-3",
    title: "Field Interview — Navghar Manikpur",
    caption:
      "Research team investigating informal scrap collection chains, weighing procedures, and dynamic price negotiation dynamics.",
    tag: "FIELD INTERVIEW",
    location: "Vasai West, Maharashtra",
    date: "29 Sep 2026 · 06:11 PM",
    imageUrl: "/images/field/field-interview-2.jpg",
    aspectRatio: "standard",
  },
  {
    id: "photo-4",
    title: "Using Bhaav — Aggregator Testing",
    caption:
      "Local scrap aggregator testing numeric lot entry, material weight recording, and offline receipt generation on mobile device.",
    tag: "USING BHAAV",
    location: "Vasai West, Maharashtra",
    date: "29 Sep 2026 · 06:14 PM",
    imageUrl: "/images/field/using-bhaav-2.jpg",
    aspectRatio: "standard",
  },
];
