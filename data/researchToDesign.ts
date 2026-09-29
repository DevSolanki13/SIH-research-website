export interface ResearchToDesignItem {
  id: string;
  stepNumber: string;
  observedPattern: string;
  observationTag: string;
  groundReality: string;
  builtSolution: string;
  solutionTag: string;
  productMechanism: string;
  rationale: string;
  impactBadge: string;
}

export const RESEARCH_TO_DESIGN_MAPPINGS: ResearchToDesignItem[] = [
  {
    id: "r2d-1",
    stepNumber: "01",
    observedPattern: "NO FORMAL BILL",
    observationTag: "Field Observation",
    groundReality:
      "A formal paper bill or digital receipt was absent in scrap transactions. Handshakes or scribbled diary notes left collectors with zero proof of sale.",
    builtSolution: "SIGNED DIGITAL RECEIPT",
    solutionTag: "Core Architecture",
    productMechanism:
      "Every transaction generates a tamper-evident cryptographic receipt with buyer & seller signatures, lot photo hash, timestamp, and a readable offline receipt code.",
    rationale:
      "Provides undeniable transaction proof without requiring complex paperwork or expensive thermal printers.",
    impactBadge: "BUILT IN APP",
  },
  {
    id: "r2d-2",
    stepNumber: "02",
    observedPattern: "NEGOTIATED PRICING",
    observationTag: "Field Observation",
    groundReality:
      "Prices are renegotiated multiple times; collectors frequently report agreed rates being shaved down at the time of final weighing or unloading.",
    builtSolution: "CRYPTO RATE LOCK",
    solutionTag: "Commercial Trust",
    productMechanism:
      "The accepted price per kilogram is digitally locked on the device by mutual confirmation before handover starts, preventing silent rate changes.",
    rationale:
      "Protects the collector's agreed margin while providing the buyer with clean rate auditing.",
    impactBadge: "BUILT IN APP",
  },
  {
    id: "r2d-3",
    stepNumber: "03",
    observedPattern: "WEIGHT NEEDS VERIFICATION",
    observationTag: "Field Observation",
    groundReality:
      "Bulk transactions depend on an agreed weight before settlement. In-person transactions require mutually confirmed measurement on the platform scale.",
    builtSolution: "DUAL WEIGHT CHECK",
    solutionTag: "Measurement Integrity",
    productMechanism:
      "Bhaav records the seller's stated weight and the buyer's confirmed scale weight to create an agreed, documented weight record on the receipt.",
    rationale:
      "Establishes a mutually agreed record before payment is finalized.",
    impactBadge: "BUILT IN APP",
  },
  {
    id: "r2d-4",
    stepNumber: "04",
    observedPattern: "SMALL COLLECTIONS + BULK SELLING",
    observationTag: "Field Observation",
    groundReality:
      "Individual collectors produce smaller lots, while formal facilities aggregate 300–400 kg before transit to authorised recyclers.",
    builtSolution: "BHAAV POINT (AGGREGATION NODE)",
    solutionTag: "Ecosystem Design",
    productMechanism:
      "Local scrap shops act as Bhaav Points, taking in small lots and automatically pooling them into organized 300–500 kg batch shipments.",
    rationale:
      "Bridges the economic gap between micro-informal collectors and industrial-scale recycling plants.",
    impactBadge: "BUILT IN APP",
  },
  {
    id: "r2d-5",
    stepNumber: "05",
    observedPattern: "BULK SALES REQUIRE FORMAL DATA",
    observationTag: "Field Observation",
    groundReality:
      "Generating formal documentation for multiple unrecorded micro-lots creates high administrative friction for informal handlers.",
    builtSolution: "POOLING + BATCH RECORD",
    solutionTag: "Regulatory Bridge",
    productMechanism:
      "The system rolls multiple verified collector receipts into one consolidated batch manifest structured for authorised recycler ERP intake and CPCB EPR formats.",
    rationale:
      "Enables formal supply-chain integration without requiring complex manual accounting.",
    impactBadge: "BUILDING",
  },
  {
    id: "r2d-6",
    stepNumber: "06",
    observedPattern: "WHERE DID THE MATERIAL GO?",
    observationTag: "Field Observation",
    groundReality:
      "Once scrap leaves the collector's hands, all trace is lost. Material often flows through unrecorded informal channels with no arrival confirmation.",
    builtSolution: '"REACHED" TRACEABILITY LINE',
    solutionTag: "Lifecycle Proof",
    productMechanism:
      "When the bulk consignment is received at an authorised recycler/dismantler facility, an automated status update confirms arrival back down the chain.",
    rationale:
      "Provides transparent end-of-life visibility from informal collection to formal recycling.",
    impactBadge: "BUILT IN APP",
  },
];
