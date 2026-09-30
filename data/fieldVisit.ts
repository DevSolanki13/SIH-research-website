/**
 * Content for the Bhaav field-visit report.
 *
 * Sources of truth:
 * - the team's "Research and References" slide (SIH 2026 idea deck) and the
 *   GPS Map Camera stamps on the field photos;
 * - the team's STRATEGY.md for the unit-economics model, sponsor and
 *   existing-player positioning;
 * - the official or published sources named next to each metric.
 * Every figure carries a tag saying where it comes from. Do not add a figure
 * without one.
 */

export const visit = {
  title: "Field Visit & Scrap Dealer Ground Research Report",
  shops: ["Jai Bajrang Bali Metal Mart", "Gokul Old Electronic Buyer"],
  area: "Vasai West, Vasai–Virar, Maharashtra",
  dateLabel: "29 Sept 2026",
  dateShort: "29/09/2026",
};

export type Tone = "go" | "stop" | "neutral";

export const investigationSpecs: { k: string; v: string; tone?: Tone }[] = [
  { k: "Visit date", v: "29 Sept 2026, 6:11 – 6:34 PM" },
  { k: "Shops visited", v: "Jai Bajrang Bali Metal Mart · Gokul Old Electronic Buyer" },
  { k: "Location", v: "Sai Nagar / Navghar Manikpur and Vishwakarma Estate, Vasai West 401202" },
  { k: "GPS (photo stamps)", v: "19.3820° – 19.3883° N, 72.8250° – 72.8263° E" },
  { k: "Investigation focus", v: "First-mile e-waste trade: pricing, weighing and receipts" },
  { k: "Method", v: "On-site interviews + hands-on test of the Bhaav app" },
];

export const marketProfile: { k: string; v: string; tone?: Tone }[] = [
  { k: "Supply chain", v: "Door-to-door hawkers → small aggregators → wholesalers" },
  { k: "Digital payments", v: "~80% of payments already by UPI", tone: "go" },
  { k: "Records kept", v: "None: every trade is verbal", tone: "stop" },
  { k: "EPR paperwork", v: "Zero", tone: "stop" },
  { k: "Volume", v: "~1,800 kg a month, sold as a bulk lot" },
  { k: "Stock cycle", v: "Light items don't sell daily; stock waits 2–4 weeks" },
  { k: "Platform readiness", v: "Open to live prices and direct recycler access; found the app easy to use", tone: "go" },
];

export const photos = [
  {
    src: "/images/field/field-interview-2.jpg",
    tag: "Field interview",
    time: "6:11 PM",
    place: "Sai Nagar, Navghar Manikpur, Vasai West",
    caption: "Team interviewing a scrap-shop worker about how stock is bought, weighed and paid for.",
  },
  {
    src: "/images/field/using-bhaav-2.jpg",
    tag: "App test",
    time: "6:14 PM",
    place: "Sai Nagar Rd, Vasai West",
    caption: "A shop worker trying the Bhaav app on the spot.",
  },
  {
    src: "/images/field/field-interview-1.jpg",
    tag: "Dealer interview",
    time: "6:31 PM",
    place: "Vishwakarma Estate, Vasai West",
    caption: "Research team speaking with the dealer inside his shop.",
  },
  {
    src: "/images/field/using-bhaav-1.jpg",
    tag: "App test",
    time: "6:34 PM",
    place: "Om Nagar, Vasai West",
    caption: "The dealer tapping through the Bhaav category screen.",
  },
];

export const findingsNarrative = [
  "During our field visit on 29/09/2026 to Jai Bajrang Bali Metal Mart and Gokul Old Electronic Buyer in Vasai West, we looked at how e-waste changes hands at the first mile: who sells to whom, how it is priced and weighed, and what record is left behind.",
  "The trade runs in three tiers, from door-to-door hawkers to small aggregators to wholesalers. No records are kept at any step: every trade is verbal, and there is zero EPR paperwork. Yet about 80% of payments already go by UPI, so the phone is already part of the transaction.",
  "Light items don't sell daily. Stock waits 2–4 weeks until it makes up a bulk lot, around 1,800 kg a month. The dealers were open to a platform that gives them live prices and direct access to authorised recyclers, and after trying the Bhaav app on the spot they found it easy to use.",
];

export const bridgeActors = [
  { num: "01", name: "Informal collector", desc: "Door-to-door hawkers and scrap pickers" },
  { num: "02", name: "Bhaav Point", desc: "Partner scrap shops that pool small lots" },
  { num: "03", name: "Authorised recycler", desc: "MPCB-valid recycler or dismantler" },
];

export const designBridge: {
  problem: string;
  observed: string;
  solution: string;
  how: string;
  status: "Built in app" | "Building";
}[] = [
  {
    problem: "No formal bill",
    observed: "Every trade is verbal. The seller walks away with no proof of what was sold, at what weight or price.",
    solution: "Signed receipt",
    how: "Each sale produces a receipt with both signatures, the lot photo, a timestamp and a short receipt code that works offline.",
    status: "Built in app",
  },
  {
    problem: "Negotiated pricing",
    observed: "Rates are agreed by word of mouth and can shift at the final weighing.",
    solution: "Rate lock",
    how: "The per-kg price is locked on the phone by both sides before handover starts, so it can't change silently.",
    status: "Built in app",
  },
  {
    problem: "Weight needs verification",
    observed: "Settlement depends on an agreed weight, and research shows dealers under-weigh pickers (GAIA, 2023).",
    solution: "Dual weight check",
    how: "Bhaav records the seller's stated weight and the buyer's scale reading, and both go on the receipt.",
    status: "Built in app",
  },
  {
    problem: "Small collections, bulk selling",
    observed: "Light items don't sell daily; stock waits 2–4 weeks until it makes a bulk lot (~1,800 kg a month).",
    solution: "Bhaav Point",
    how: "Local scrap shops act as Bhaav Points, taking in small lots and pooling them into batch shipments.",
    status: "Built in app",
  },
  {
    problem: "Bulk sales need formal data",
    observed: "There is zero EPR paperwork, and documenting many unrecorded micro-lots by hand isn't practical.",
    solution: "Pooling + batch record",
    how: "Verified receipts roll up into one batch manifest shaped for recycler intake and CPCB EPR formats, and the recycler's truck weight is checked against the receipts inside it.",
    status: "Built in app",
  },
  {
    problem: "Where did the material go?",
    observed: "Once scrap leaves the collector, the trail ends, and 4 of 7 recyclers we checked had lapsed MPCB registrations.",
    solution: "\"Reached\" traceability",
    how: "When an authorised recycler receives the batch, an arrival confirmation flows back down the chain.",
    status: "Built in app",
  },
];

export const recyclers: { name: string; kind: string; city: string; valid: boolean; status: string }[] = [
  { name: "Eco Reset Pvt Ltd", kind: "Recycler", city: "Nagpur", valid: true, status: "Valid to Feb 2027" },
  { name: "Global E-Recycling Pvt Ltd", kind: "Recycler", city: "Palghar", valid: true, status: "Valid to Feb 2028" },
  { name: "Lilashana Sales", kind: "Dismantler", city: "Buldhana", valid: true, status: "Valid to Feb 2028" },
  { name: "Kohinoor E-Waste Recycling Pvt Ltd", kind: "Dismantler", city: "Raigad", valid: false, status: "Lapsed May 2023" },
  { name: "Aman Trading Co.", kind: "Dismantler", city: "Mumbai", valid: false, status: "Lapsed May 2023" },
  { name: "Go Green Recycling", kind: "Dismantler", city: "Navi Mumbai", valid: false, status: "Lapsed Jun 2024" },
  { name: "New India Scrap Traders", kind: "Dismantler", city: "Aurangabad", valid: false, status: "Lapsed Jun 2024" },
];

export const recyclerQuotes = [
  { quote: "We buy only in tonnes, not a few kilos.", who: "Lilashana Sales" },
  { quote: "Our buying reference is Metal mandi.", who: "Aman Trading Co." },
  { quote: "Our prices update daily and come on our WhatsApp group (informal).", who: "New India Scrap Traders" },
  { quote: "The recyclers agreed to give ₹1–2/kg extra on verified lots.", who: null },
];

/** Where a number comes from. */
export type SourceTag = "VERIFIED" | "FIELD" | "SOURCED" | "ESTIMATED";

export const sourceTagNote: Record<SourceTag, string> = {
  VERIFIED: "our own check against official data",
  FIELD: "reported to us on the 29 Sept field visit",
  SOURCED: "published source, named",
  ESTIMATED: "modelled, with the assumption stated",
};

export const atAGlance: { figure: string; label: string; tag: SourceTag }[] = [
  { figure: "4 of 7", label: "recyclers we contacted had a lapsed MPCB authorisation, and a collector has no way to tell", tag: "VERIFIED" },
  { figure: "74 of 161", label: "MPCB-listed e-waste recyclers and dismantlers are valid today. Bhaav shows only these", tag: "VERIFIED" },
  { figure: "₹1–2/kg", label: "extra that recyclers agreed to pay for verified, geotagged lots", tag: "FIELD" },
  { figure: "0", label: "records kept at the shops we visited: every trade is verbal, with no EPR paperwork", tag: "FIELD" },
];

export const nationalContext =
  "India generated 14.14 lakh MT of e-waste in 2025-26 and recycled 9.79 lakh MT (Lok Sabha). Industry estimates put about three-quarters in the informal chain. The figures disagree because the first mile, where a kabadiwala sells, is never recorded.";

/**
 * Unit economics (STRATEGY.md §10), recomputed with the field-verified bonus.
 * Net ₹/month = V × (g + b − t). V = 60 kg/month is assumed: e-waste is about
 * 10% of what a kabadiwala collects, at about 20 kg a day over 30 days.
 * b = ₹1.5/kg, the midpoint of the ₹1–2/kg recyclers agreed to. t = 0 with a
 * Bhaav Point or pickup.
 */
export const unitEconomics = {
  formula: "Net ₹ per month = V × (g + b − t)",
  terms: [
    { k: "V", v: "kg of e-waste the collector sells per month (assumed 60)" },
    { k: "g", v: "authorised base rate minus what their current buyer pays (field data decides this)" },
    { k: "b", v: "verified-lot bonus: ₹1.5/kg, the midpoint of the ₹1–2/kg recyclers agreed to" },
    { k: "t", v: "extra travel cost per kg (0 with a Bhaav Point or pickup)" },
  ],
  rows: [
    { scenario: "Authorised rate ₹10/kg below the informal buyer", net: "−₹510", loss: true },
    { scenario: "The same rate", net: "+₹90", loss: false },
    { scenario: "Authorised rate ₹10/kg above", net: "+₹690", loss: false },
    { scenario: "₹25/kg above (the observed NGO uplift, ₹40 → ₹65)", net: "+₹1,590", loss: false },
  ],
  shopLine:
    "For a Bhaav Point (partner scrap shop) moving about 1,800 kg a month, the verified-lot bonus alone is worth about ₹2,700 a month at the same base rate.",
  honesty:
    "We show the losing row on purpose. When the authorised rate is lower, the bonus alone does not close the gap. That is why pickup, Bhaav Points and household leads exist. Field data tells us which row a district is in.",
};

export const platformEconomics: { k: string; v: string }[] = [
  { k: "Who pays", v: "Recyclers pay a proposed ₹1.5 per verified kg, for audit-ready purchase evidence they cannot get today" },
  { k: "Running cost", v: "About ₹30,000 per district per month: cloud and SMS about ₹10,000, one field coordinator about ₹20,000" },
  { k: "Break-even", v: "About 20 tonnes verified per district per month" },
  { k: "Other income", v: "Producer provenance fees, CSR collection drives, public funding as digital public infrastructure" },
  { k: "Never pays", v: "The collector and the household" },
];

export const impactMetrics: { figure: string; label: string; tag: SourceTag; source: string }[] = [
  { figure: "4 of 7", label: "recyclers we contacted had lapsed authorisations", tag: "VERIFIED", source: "MPCB register, fetched 31 Aug 2026" },
  { figure: "161 → 74", label: "MPCB-listed recyclers → valid today (87 lapsed, hidden in the app)", tag: "VERIFIED", source: "MPCB register, fetched 31 Aug 2026" },
  { figure: "₹1–2/kg", label: "extra recyclers agreed to pay for verified lots", tag: "FIELD", source: "Recycler calls, Sept 2026" },
  { figure: "~1,800 kg", label: "a month at one Vasai shop, which waits 2–4 weeks to sell in bulk", tag: "FIELD", source: "Field visit, 29 Sept 2026" },
  { figure: "~80%", label: "of payments at the shops already go by UPI", tag: "FIELD", source: "Field visit, 29 Sept 2026" },
  { figure: "₹40 → ₹65/kg", label: "when an NGO linked waste pickers to a formal buyer", tag: "SOURCED", source: "Mongabay India, May 2026" },
  { figure: "14.14 / 9.79", label: "lakh MT of e-waste generated / recycled in India, 2025-26", tag: "SOURCED", source: "Lok Sabha" },
  { figure: "−₹510 to +₹1,590", label: "a collector's monthly change, depending on the rate gap", tag: "ESTIMATED", source: "Model above, V = 60 kg/month" },
  { figure: "~720 kg", label: "a year of e-waste per collector reaching an authorised facility instead of open burning or acid baths", tag: "ESTIMATED", source: "60 kg/month × 12" },
];

export const impactMeasured =
  "Once live, the app reports these from dual-signed receipts, not estimates: kilograms that reached an authorised recycler by category, net ₹/kg against each collector's own baseline, the dispute rate, and the median time per lot.";

export const sponsorFit = {
  title: "Why this matters to JNARDDC",
  body: "JNARDDC is the Ministry of Mines' Project Monitoring Agency for the ₹1,500 crore Critical Mineral Recycling Incentive Scheme, and its nodal agency for circular economy. The scheme needs feedstock, and e-waste feedstock starts with the kabadiwala. Bhaav's dual-signed receipts give the first-mile record the scheme cannot otherwise see: what was paid, where the material went, and which authorised facility received it.",
  source: "pmindia.gov.in (Cabinet, 3 Sep 2025) · ncmm.jnarddc.gov.in",
};

export const afterSih: { k: string; v: string }[] = [
  { k: "Oversight", v: "JNARDDC, as monitoring agency and circular-economy nodal agency" },
  { k: "Data owner", v: "MPCB, whose authorisation register Bhaav already reads on a schedule" },
  { k: "Pilot", v: "One district, three authorised recyclers, collectors reached through a waste-picker collective" },
  { k: "Hosting", v: "A managed API, a static web console and an Android APK. No field hardware" },
];

export const existingPlayers: { name: string; what: string; gap: string }[] = [
  { name: "Recykal.Market, MetalMandi", what: "List rates for businesses with a smartphone, a ledger and a GST number", gap: "The first-mile seller is not their user, and the first-mile record is worth nothing there" },
  { name: "Kabadiwalla Connect", what: "Links households to scrap dealers", gap: "Works on the household side of the trade; Bhaav works on the collector's side of the sale" },
  { name: "NGO bridges (e.g. Chintan)", what: "Link waste pickers to formal buyers; rates moved ₹40 → ₹65/kg", gap: "Works, but only inside a cohort the NGO can reach" },
  { name: "Bhaav", what: "Onboards the person below all of them: icon-first, voice in Marathi and Hindi, works offline", gap: "Routes only to recyclers whose MPCB authorisation is valid today, with a two-signature receipt" },
];
