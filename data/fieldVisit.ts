/**
 * Content for the Bhaav field-visit report.
 *
 * Sources of truth:
 * - the team's "Research and References" slide (SIH 2026 idea deck) and the
 *   GPS Map Camera stamps on the field photos;
 * - the team's notes from the 3 Oct visits in Virar West;
 * - the MPCB authorised register for recycler status.
 */

export const visit = {
  title: "Field Visit & Scrap Dealer Ground Research Report",
  summary: "3 field visits · collectors, an aggregator and recyclers · Vasai West & Virar West",
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
  { k: "Stock cycle", v: "Light items don't sell daily; stock waits 2–4 weeks; a recycler wants 1 tonne" },
  { k: "Platform readiness", v: "Open to live prices and direct recycler access; found the app easy to use", tone: "go" },
];

export type Photo = { src: string; tag: string; time?: string; place: string; caption: string };

export const photos: Photo[] = [
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

/** Visits 2 and 3, both on 3 Oct 2026 in Virar West. */
export const collectorVisit = {
  dateLabel: "3 Oct 2026",
  specs: [
    { k: "Visit date", v: "3 Oct 2026" },
    { k: "Who we met", v: "Three collectors, including Sai Scrap Metal Mart (Tirupati Nagar) and a scrap shop in Bolinj" },
    { k: "Location", v: "Tirupati Nagar and Bolinj, Virar West 401303" },
    { k: "Investigation focus", v: "Who they sell to, how they price, and how they feel about records" },
  ] as { k: string; v: string; tone?: Tone }[],
  profile: [
    { k: "Who buys from them", v: "An aggregator on the Vasai highway; its carts collect from the shop's door" },
    { k: "Lot size", v: "5–10 kg at a time" },
    { k: "Volume", v: "Two of them each sell ~10 kg a week" },
    { k: "Cart collectors", v: "Most wouldn't talk to us; many work for one shop", tone: "stop" },
    { k: "Price reference", v: "MetalMandi: ₹980/kg paid when MetalMandi shows ₹1,000", tone: "go" },
    { k: "Informal share", v: "~70% of the work is informal, ~30% formal", tone: "stop" },
    { k: "Wire", v: "Burnt before selling: 1 kg of 4 mm wire yields ~600 g of metal", tone: "stop" },
    { k: "Licence", v: "A Gumasta (shop) licence from the municipal council" },
    { k: "Would use Bhaav if", v: "It got them the MetalMandi rate", tone: "go" },
  ] as { k: string; v: string; tone?: Tone }[],
  photos: [
    {
      src: "/images/field/virar/sai-scrap-metal-mart.jpg",
      tag: "Collector",
      place: "Tirupati Nagar Phase 2, Virar West",
      caption: "Sai Scrap Metal Mart, a non-ferrous metal merchant: crushed cans, cardboard and sacks waiting at the door.",
    },
  ] as Photo[],
  prices: [
    { item: "Fridge, single door", rate: "₹1,000" },
    { item: "Fridge, double door", rate: "₹1,500" },
    { item: "Copper from burnt wire", rate: "₹980/kg (MetalMandi ₹1,000)" },
  ],
  findings: [
    {
      title: "They sell small, to whoever comes to the door",
      body: "The Bolinj shop sells 5–10 kg at a time to an aggregator on the Vasai highway, whose carts pick up at the shop.",
    },
    {
      title: "Price is the pull, and the reference is MetalMandi",
      body: "The Bolinj shop follows MetalMandi: when it shows ₹1,000/kg for copper, he sells at about ₹980. He said he would use Bhaav if it got him the MetalMandi rate. Wire is burnt to recover the copper, about 600 g from 1 kg of 4 mm wire.",
    },
    {
      title: "Their licence is a Gumasta from the municipal council",
      body: "The shop runs on a Gumasta (Shops and Establishments) licence issued by the nagarpalika. That registers it as a business, not as an MPCB-authorised e-waste handler, so nothing it buys or sells shows up in the e-waste system.",
    },
    {
      title: "Stolen goods reach them, and the shop takes the blame",
      body: "The collectors put their work at about 70% informal and 30% formal. People sometimes sell them goods that turn out to be stolen, claiming they are from their own home. The shop buys on the seller's word, and if the item is later traced, the shop is the one questioned.",
    },
    {
      title: "A record of every sale feels like exposure, not protection",
      body: "If an app stores the seller's number, the shop's details, photos and a receipt, they fear that record makes them easier to blame. Two of the shops said they won't use the app for this reason. They would be more comfortable with a system that protects them and helps verify where material came from, not one that only records every sale.",
    },
  ],
};

export const aggregatorVisit = {
  dateLabel: "3 Oct 2026",
  specs: [
    { k: "Visit date", v: "3 Oct 2026, 11:01 – 11:16 AM" },
    { k: "Who we met", v: "One aggregator: a scrap dealer with a large yard on Datt Mandir Rd" },
    { k: "Location", v: "Doghar Pada, Sheetal Nagar, Virar West 401303" },
    { k: "GPS (photo stamps)", v: "19.4540° – 19.4541° N, 72.8070° – 72.8071° E" },
    { k: "Investigation focus", v: "How stock moves from collectors up to recyclers" },
  ] as { k: string; v: string; tone?: Tone }[],
  profile: [
    { k: "Recycler contract", v: "100 t a year with one recycler" },
    { k: "If the target is missed", v: "The recycler applies a cut (kattai) on the rate", tone: "stop" },
    { k: "Lot size", v: "400–500 kg lots" },
    { k: "Who sells to him", v: "Cart collectors, who sell to anyone who will buy" },
    { k: "Formal buyers nearby", v: "Did not know of any dealer in Vasai he could sell to", tone: "stop" },
  ] as { k: string; v: string; tone?: Tone }[],
  photos: [
    {
      src: "/images/field/virar/dealer-interview-1.jpg",
      tag: "Aggregator interview",
      time: "11:01 AM",
      place: "Doghar Pada, Virar West",
      caption: "Team interviewing the aggregator at his counter about who he buys from and who he sells to.",
    },
    {
      src: "/images/field/virar/dealer-interview-2.jpg",
      tag: "Aggregator interview",
      time: "11:02 AM",
      place: "Datt Mandir Rd, Virar West",
      caption: "The aggregator describing his yearly contract with a recycler.",
    },
    {
      src: "/images/field/virar/scrap-yard.jpg",
      tag: "Stock",
      time: "11:05 AM",
      place: "Datt Mandir Rd, Virar West",
      caption: "Mixed stock waiting behind the shop: metal frames, wire, sacks and appliance parts.",
    },
    {
      src: "/images/field/virar/shop-frontage.jpg",
      tag: "Yard",
      time: "11:16 AM",
      place: "Datt Mandir Rd, Virar West",
      caption: "The yard from the street: drums, grilles and scrap stacked up to the roof line.",
    },
  ] as Photo[],
  prices: [{ item: "TV, sold to a repair shop", rate: "₹200" }],
  findings: [
    {
      title: "Aggregators work on yearly contracts, with a cut for missing them",
      body: "He has a 100 t a year contract with his recycler. If the target is missed, the recycler applies a deduction (kattai) on the rate. Stock moves up in 400–500 kg lots.",
    },
    {
      title: "Below him, material goes wherever it pays",
      body: "Cart collectors sell to anyone who will buy, and a TV can go to a repair shop for ₹200. He did not know of any dealer in Vasai he could sell to.",
    },
  ],
};

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
  {
    problem: "Fear of stolen-goods blame",
    observed: "Two shops won't use the app: they fear a digital record of each sale makes them the ones questioned if a seller's goods turn out to be stolen (3 Oct).",
    solution: "Seller declaration, private receipts",
    how: "Before signing, the seller confirms the scrap is theirs, which is proof the shop bought in good faith. Public receipts never name the seller or the shop.",
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
  { quote: "Our buying reference is MetalMandi.", who: "Aman Trading Co." },
  { quote: "Our prices update daily on our WhatsApp group.", who: "New India Scrap Traders" },
  { quote: "Recyclers agreed to give ₹1–2/kg extra on verified lots with geotag proof.", who: null },
];
