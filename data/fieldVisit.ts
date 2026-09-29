/**
 * Content for the Bhaav field-visit report.
 *
 * Source of truth: the team's "Research and References" slide (SIH 2026 idea
 * deck) and the GPS Map Camera stamps on the field photos. Do not add figures
 * here that are not on the slide or in a photo stamp.
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
    how: "Verified receipts roll up into one batch manifest shaped for recycler intake and CPCB EPR formats.",
    status: "Building",
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
