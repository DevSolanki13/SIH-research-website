export type FeatureStatus = "BUILT" | "BUILDING" | "TO_VALIDATE";

export interface ProductFeature {
  id: string;
  name: string;
  group: "Fair Transaction" | "Trust & Fraud Checks" | "Formalisation & Bulk Handling" | "Traceability & Accessibility";
  groupId: "fair-transaction" | "trust-fraud" | "formalisation-bulk" | "traceability-access";
  description: string;
  status: FeatureStatus;
  statusDetail: string;
  evidenceRef: string;
  technicalMechanism: string;
}

export const FEATURE_GROUPS = [
  {
    id: "fair-transaction",
    name: "Fair Transaction",
    code: "A",
    tagline: "Transparent terms, immune to silent downstream renegotiation.",
    summary:
      "Engineered to remove asymmetry in informal transactions by locking rates, validating weight inputs, and publishing realized sale benchmarks.",
  },
  {
    id: "trust-fraud",
    name: "Trust & Fraud Checks",
    code: "B",
    tagline: "Verifiable authenticity without complex cloud dependencies.",
    summary:
      "Protects both micro-sellers and formal recyclers from duplicated lots, fabricated scale inputs, and fictitious inventory claims.",
  },
  {
    id: "formalisation-bulk",
    name: "Formalisation & Bulk Handling",
    code: "C",
    tagline: "Connecting 5 kg daily pickups to 500 kg industrial smelter batches.",
    summary:
      "Streamlines batch aggregation, automated manifest generation, and weighbridge verification for CPCB compliance.",
  },
  {
    id: "traceability-access",
    name: "Traceability & Accessibility",
    code: "D",
    tagline: "Field-hardened for budget smartphones and poor connectivity.",
    summary:
      "Built for vernacular fluency in Marathi, Hindi, and English, reliable offline cryptographically verifiable transactions, and end-to-end recycler arrival status.",
  },
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  // Group A: Fair Transaction
  {
    id: "feat-rate-lock",
    name: "Rate Lock",
    group: "Fair Transaction",
    groupId: "fair-transaction",
    description: "The agreed price per kilogram is digitally sealed before lot handover begins.",
    status: "BUILT",
    statusDetail: "Implemented in app state and offline transaction engine with dual confirmation.",
    evidenceRef: "Collector app transaction creation flow",
    technicalMechanism: "Mutual cryptographic signature over rate parameter; immutable after initial lock.",
  },
  {
    id: "feat-weight-check",
    name: "Weight Check",
    group: "Fair Transaction",
    groupId: "fair-transaction",
    description: "Collector explicitly reviews the registered scale weight before final deal sign-off.",
    status: "BUILT",
    statusDetail: "Implemented with visual threshold comparison and tolerance warnings.",
    evidenceRef: "Transaction review modal with dual weight input",
    technicalMechanism: "Client-side delta calculation against estimated weight; highlights discrepancies >5%.",
  },
  {
    id: "feat-actually-paid",
    name: "Actually Paid Price",
    group: "Fair Transaction",
    groupId: "fair-transaction",
    description: "Displays historical median prices from signed sales rather than misleading advertised quotes.",
    status: "BUILT",
    statusDetail: "Derived from signed transaction feeds stored locally and synced when online.",
    evidenceRef: "Bhaav market index feed on home screen",
    technicalMechanism: "Trimmed median calculation on completed receipts, segmented by material grade and region.",
  },

  // Group B: Trust & Fraud Checks
  {
    id: "feat-two-photo",
    name: "Two-Photo Check",
    group: "Trust & Fraud Checks",
    groupId: "trust-fraud",
    description: "Verifies the second photo (e.g. scale readout) is not merely a re-shot duplicate of the first.",
    status: "BUILT",
    statusDetail: "Integrated visual similarity and EXIF camera timestamp delta validation.",
    evidenceRef: "Lot evidence capture pipeline",
    technicalMechanism: "Local perceptual hashing (pHash) and visual difference threshold comparison.",
  },
  {
    id: "feat-same-photo-alarm",
    name: "Same-Photo Alarm",
    group: "Trust & Fraud Checks",
    groupId: "trust-fraud",
    description: "Flags if a photograph has been previously used in other historical or concurrent lots.",
    status: "BUILT",
    statusDetail: "Local hash database lookup executed before transaction finalization.",
    evidenceRef: "Evidence verification step in collector & recycler apps",
    technicalMechanism: "Cryptographic SHA-256 and dHash match against recent transaction cache.",
  },
  {
    id: "feat-honest-buyer-score",
    name: "Honest-Buyer Score",
    group: "Trust & Fraud Checks",
    groupId: "trust-fraud",
    description: "Aggregates buyer reliability based on weight dispute rates and payout compliance.",
    status: "BUILDING",
    statusDetail: "Score algorithm modeled; live aggregator network calibration in progress.",
    evidenceRef: "Buyer profile summary card",
    technicalMechanism: "Bayesian rating based on rate-lock adherence and dispute frequency over 90 days.",
  },

  // Group C: Formalisation & Bulk Handling
  {
    id: "feat-bhaav-point",
    name: "Bhaav Point Consolidation",
    group: "Formalisation & Bulk Handling",
    groupId: "formalisation-bulk",
    description: "Enables partner scrap shops to aggregate micro-lots into formal 300–500 kg batch shipments.",
    status: "BUILT",
    statusDetail: "Aggregation state machine and batch inventory ledger implemented.",
    evidenceRef: "Aggregator inventory module and pooled lot view",
    technicalMechanism: "Parent batch entity grouping child receipt IDs with preserved origin provenance.",
  },
  {
    id: "feat-invoice-auto",
    name: "Invoice Lot + Auto Invoice",
    group: "Formalisation & Bulk Handling",
    groupId: "formalisation-bulk",
    description: "Generates a consolidated compliant invoice for pooled lots without micro-paperwork.",
    status: "BUILDING",
    statusDetail: "Invoice template and PDF generation engine being finalized for GST standards.",
    evidenceRef: "Consolidated dispatch manifest generator",
    technicalMechanism: "Automated rollup calculation generating itemized manifest matching recycler ERP requirements.",
  },
  {
    id: "feat-truck-weight",
    name: "Truck-Weight Check",
    group: "Formalisation & Bulk Handling",
    groupId: "formalisation-bulk",
    description: "Cross-checks weighbridge gross weight with sum of individual receipts inside consignment.",
    status: "BUILDING",
    statusDetail: "Discrepancy reconciliation engine undergoing test cases.",
    evidenceRef: "Recycler inbound dock verification screen",
    technicalMechanism: "Consignment mass balance calculation with configurable moisture/tare deduction margins.",
  },
  {
    id: "feat-cpcb-receipt",
    name: "CPCB-Ready Receipt",
    group: "Formalisation & Bulk Handling",
    groupId: "formalisation-bulk",
    description: "Formats transaction metadata to align with Central Pollution Control Board EPR guidelines.",
    status: "BUILT",
    statusDetail: "Contains material category code, weights, recycler authorization number, and receipt hash.",
    evidenceRef: "Standard Bhaav electronic transaction receipt",
    technicalMechanism: "Schema-compliant JSON export mirroring CPCB EPR portal filing requirements.",
  },

  // Group D: Traceability & Accessibility
  {
    id: "feat-reached-line",
    name: '"Reached" Traceability Line',
    group: "Traceability & Accessibility",
    groupId: "traceability-access",
    description: "Notifies collector when material physically arrives and is logged at the authorized recycler.",
    status: "BUILT",
    statusDetail: "End-to-end status propagation tested in simulated recycler dock workflows.",
    evidenceRef: "Timeline progress tracking bar on receipt view",
    technicalMechanism: "Recycler barcode/QR scan triggers signed inbound receipt, advancing lifecycle status.",
  },
  {
    id: "feat-offline-confirm",
    name: "Offline Confirmation",
    group: "Traceability & Accessibility",
    groupId: "traceability-access",
    description: "Allows full transaction closure and receipt exchange in zero-connectivity environments.",
    status: "BUILT",
    statusDetail: "Tested in simulated low-signal industrial sheds and remote scrap godowns.",
    evidenceRef: "Offline transaction mode toggle and queue sync drawer",
    technicalMechanism: "Local cryptographic pairing and QR-encoded receipts; queued for sync upon reconnection.",
  },
  {
    id: "feat-multilingual",
    name: "Multilingual Support",
    group: "Traceability & Accessibility",
    groupId: "traceability-access",
    description: "Native support for Marathi (मराठी), Hindi (हिंदी), and English with high-contrast UI.",
    status: "BUILT",
    statusDetail: "All transaction, button, and receipt strings localized and tested.",
    evidenceRef: "Language switch header toggle on all screens",
    technicalMechanism: "Zero-dependency dictionary locale provider with instant client-side switching.",
  },
  {
    id: "feat-formal-bonus",
    name: "Formal Pays More Bonus",
    group: "Traceability & Accessibility",
    groupId: "traceability-access",
    description: "Recycler can set an optional incentive bonus for verified formal lots.",
    status: "TO_VALIDATE",
    statusDetail: "Contract model created; commercial willingness and bonus margins require field validation.",
    evidenceRef: "Recycler pricing incentive configurator",
    technicalMechanism: "Configurable percentage surcharge added by recycler; never presented as guaranteed Bhaav payout.",
  },
];
