# Bhaav --- Research & Product Evidence Website

## Implementation Plan, UI Specification & Locked Technology Stack

**Project:** Bhaav\
**Team:** Error 200\
**Purpose:** SIH 2026 supporting website\
**Document status:** Implementation-ready specification\
**Primary source documents:** `BHAAV-FLOW-AND-FEATURES(1).md`,
`BHAAV-NEW-FLOW.md`\
**Field visit referenced:** Vasai--Virar, Maharashtra --- 29 September
2026

------------------------------------------------------------------------

# 1. Website Objective

The Bhaav website will be a **professional research-and-product evidence
portal**, separate from the main SIH presentation.

The SIH PPT will carry the main pitch and story. The website will
provide the supporting evidence behind the idea:

> **Field Research → Evidence → Research → Design Decisions → Product →
> Proof**

The website should make it easy for a judge, mentor, developer or
visitor to understand:

1.  What Bhaav is.
2.  What was observed during field research.
3.  What additional secondary/local research was studied.
4.  How those observations influenced the product.
5.  What the actual product does.
6.  What is built, what is still being built, and what still needs
    validation.
7.  Where the supporting research comes from.

### The website is NOT intended to be:

-   A second copy of the SIH PPT.
-   A generic startup landing page.
-   A feature-heavy marketing website.
-   A fake representation of field research.
-   A place for unsupported statistics or invented interviews.
-   A place to introduce unnecessary features.

------------------------------------------------------------------------

# 2. Core Design Principle

The visual and information hierarchy should follow:

**PHOTO → FINDING → EVIDENCE → PRODUCT → PROOF**

The website should feel like a combination of:

-   Modern product documentation
-   Field-research report
-   Professional technology showcase
-   Environmental-tech product demo

The visual direction should be:

> **Dark + minimal + documentary + modern + trustworthy**

Reference feel:

-   Linear/Vercel-style cleanliness
-   Maps/evidence-style information presentation
-   Environmental-tech visual language
-   Real photographs and real product screens
-   Strong spacing and typography
-   Subtle motion instead of excessive effects

------------------------------------------------------------------------

# 3. Information Architecture / Sitemap

The website will be a single polished experience with the following
sections:

``` text
BHAAV
│
├── Hero
│
├── 01 / FIELD VISIT
│   ├── Visit metadata
│   ├── Field photographs
│   └── Primary observations
│
├── 02 / LOCAL DESK RESEARCH
│   ├── Local e-waste context
│   ├── Local ecosystem
│   ├── Regulatory context
│   └── Research sources
│
├── 03 / RESEARCH → DESIGN
│   └── What we saw → What we built
│
├── 04 / PRODUCT DEMO
│   ├── Demo video
│   ├── Demo chapters
│   └── Product flow
│
├── 05 / PRODUCT EVIDENCE
│   ├── Collector app
│   ├── Recycler console
│   ├── Receipts
│   ├── Offline flow
│   └── Feature groups
│
├── 06 / PRODUCT STATUS
│   ├── Built
│   ├── Building
│   └── To Validate
│
├── 07 / SOURCES
│
└── Footer
```

------------------------------------------------------------------------

# 4. Navigation

## Desktop Navbar

``` text
BHAAV

Research
Field Visit
Product
Sources

[ ▶ Watch Demo ]
```

The navbar should remain clean and compact.

### Behaviour

-   Transparent/blurred navbar initially.
-   Slight dark background after scrolling.
-   Smooth anchor scrolling.
-   Active section indicator.
-   `Watch Demo` is the primary navigation action.

### Mobile Navbar

Use:

``` text
BHAAV                         ☰
```

with a compact slide-down menu.

------------------------------------------------------------------------

# 5. Hero Section

The hero should be short and visually strong.

### Content

``` text
FIELD RESEARCH × PRODUCT

BHAAV

Understanding how e-waste moves
in Vasai–Virar.

[ Explore Research ]   [ ▶ Watch Demo ]
```

Under the hero, show a compact metadata row:

``` text
FIELD VISIT
Vasai–Virar

DATE
29 Sep 2026

PRODUCT
Bhaav
```

### Hero visual

Use a real field photograph or a carefully composed collage of:

-   Field visit image
-   Product/app screen
-   Receipt/product evidence

Avoid generic stock images.

### Hero rules

Do not use:

-   Long paragraphs
-   Generic environmental slogans
-   Excessive gradients
-   Animated particles
-   Fake environmental imagery

------------------------------------------------------------------------

# 6. Section 01 --- Field Visit

This is one of the most important sections because it demonstrates
actual primary research.

## Header

``` text
01 / FIELD VISIT

What we observed on the ground
```

Supporting line:

> Primary field observations collected during our Vasai--Virar visit.

------------------------------------------------------------------------

## Visit Metadata

Use a compact information bar:

``` text
LOCATION
Vasai–Virar, Maharashtra

DATE
29 September 2026

TYPE
Primary Field Research
```

------------------------------------------------------------------------

# 7. Field Observations

The observations should be displayed as cards rather than a large
paragraph.

### Current field observations

``` text
300–400 kg
Bulk quantities were observed.

NO FORMAL BILL
A formal bill/receipt was not observed in the transaction process.

MATERIAL SEPARATION
Materials are separated before selling.

NEGOTIATION
Prices are negotiated between the parties.

DIRECT / INTERMEDIARY CONTACT
Sales may happen through direct contacts or intermediaries.

MARKET-LINKED PRICING
Prices are influenced by the marketplace where the material is sold.
```

Each card should contain:

-   Small label
-   Main finding
-   One short explanation
-   `FIELD OBSERVATION` badge

Do not convert these observations into broader statistical claims.

------------------------------------------------------------------------

# 8. Field Photo Gallery

Use a documentary-style asymmetric gallery.

Recommended layout:

``` text
┌─────────────────────────────┐
│                             │
│       Large field photo     │
│                             │
└─────────────────────────────┘

┌───────────────┐ ┌───────────┐
│ Photo         │ │ Photo     │
└───────────────┘ └───────────┘
```

### Interaction

-   Hover → image slightly zooms.
-   Show a small caption.
-   Click → fullscreen/lightbox.
-   No excessive carousel behaviour.

### Photo labels

Use labels such as:

-   `FIELD VISIT`
-   `MATERIAL`
-   `SELLING PROCESS`
-   `OBSERVATION`

Only use captions that are supported by the actual image.

------------------------------------------------------------------------

# 9. Research Integrity System

The website MUST clearly distinguish research types.

Use three visual labels:

### 🟢 Primary Research

``` text
OUR FIELD VISIT
```

Information directly observed or collected by the team.

### 🔵 Secondary Research

``` text
LOCAL DESK RESEARCH
```

Information obtained from:

-   Government reports
-   Regulatory databases
-   Academic studies
-   Industry reports
-   Public sources

### 🟡 Reference Research

``` text
REFERENCE FIELD STUDY
```

External field studies or reference projects used to understand the
problem.

The Bengaluru reference website must NEVER be presented as our own field
visit.

------------------------------------------------------------------------

# 10. Section 02 --- Local Desk Research

This section enriches the field visit without pretending that secondary
information was personally observed.

## Header

``` text
02 / LOCAL DESK RESEARCH

What the wider local ecosystem tells us
```

Use compact evidence cards.

------------------------------------------------------------------------

## Research Card A --- Local E-Waste Estimate

### Approx. 60 tonnes/month

VVCMC's Environmental Status Report 2022--23 estimated approximately 60
tonnes of domestic e-waste generation per month in the corporation area,
based on an extrapolation from MPCB-level data.

Badge:

``` text
SECONDARY / MUNICIPAL ESTIMATE
```

Do NOT present this as:

> "Our field research found 60 tonnes/month."

------------------------------------------------------------------------

## Research Card B --- Local E-Waste Ecosystem

Use the MPCB Circular Economy Directory 2025 to show that multiple
e-waste facilities exist in the Vasai--Virar area.

Possible examples include facilities in:

-   Waliv
-   Vasai East
-   Pelhar
-   Nalasopara
-   Gokhiware

The website should show these as a **local ecosystem map/list**, not as
facilities personally verified by the team.

Badge:

``` text
MPCB DIRECTORY — 2025
```

------------------------------------------------------------------------

## Research Card C --- Regulatory Snapshot

Use the MPCB outward registry as a current regulatory snapshot.

Suggested UI:

``` text
LOCAL REGULATORY SNAPSHOT

MPCB e-waste outward registry

Last checked:
29 Sep 2026

[ View Registry ↗ ]
```

This is a snapshot and should not be presented as permanently current.

------------------------------------------------------------------------

## Research Card D --- Local Waste Ecosystem

A local baseline study covering Mira-Bhayander and Vasai--Virar engaged:

-   Aggregators
-   Scrap dealers
-   Formal waste workers
-   Waste pickers
-   Bulk waste generators

Important:

This is broader waste-management research, not an e-waste-specific
survey.

The website must preserve that distinction.

------------------------------------------------------------------------

## Research Card E --- Local Policy Context

VVCMC documentation references integration of waste pickers and informal
waste collectors into waste-management systems.

Bhaav's product interpretation:

> This creates a relevant policy context for exploring how informal
> actors can participate in a more traceable e-waste channel.

The second sentence is a **Bhaav design interpretation**, not a
quotation from VVCMC.

------------------------------------------------------------------------

# 11. Research Tabs

The research section can use three tabs:

``` text
[ Our Field Visit ]
[ Local Desk Research ]
[ Sources ]
```

This makes the distinction between primary and secondary information
immediately visible.

------------------------------------------------------------------------

# 12. Section 03 --- Research → Design Decisions

This should be one of the strongest sections on the website.

Title:

``` text
03 / RESEARCH → DESIGN

What we saw → What we built
```

Use paired cards.

------------------------------------------------------------------------

## Mapping

### Observation → Signed Receipt

``` text
NO FORMAL BILL

↓

SIGNED RECEIPT

Every transaction can produce a signed record.
```

------------------------------------------------------------------------

### Observation → Rate Lock

``` text
NEGOTIATED PRICING

↓

RATE LOCK

The accepted price is recorded instead of being silently changed later.
```

------------------------------------------------------------------------

### Observation → Weight Check

``` text
WEIGHT IS PART OF THE TRANSACTION

↓

WEIGHT CHECK

The collector can review the recorded and final weight before agreeing.
```

------------------------------------------------------------------------

### Observation → Bhaav Point

``` text
SMALL COLLECTIONS + BULK SELLING

↓

BHAAV POINT

Partner collection points can pool smaller lots into bulk quantities.
```

------------------------------------------------------------------------

### Observation → Pooled Route

``` text
BULK SALES

↓

POOLING + ONE INVOICE

Multiple small receipts can form a larger shipment to an authorised recycler.
```

------------------------------------------------------------------------

### Observation → Traceability

``` text
WHERE DID THE MATERIAL GO?

↓

"REACHED" LINE

The collector can see when the material reaches the authorised recycler.
```

------------------------------------------------------------------------

# 13. Product Explanation

Keep the product explanation simple.

### One-line product description

> Every scrap sale gets a fair, signed receipt. Bhaav is designed to
> work on a low-cost phone, offline, with Marathi, Hindi and English
> support.

### Three-person chain

``` text
COLLECTOR
      ↓
BHAAV POINT / DIRECT
      ↓
AUTHORISED RECYCLER
```

Do not over-explain the entire SIH problem statement on the website.

------------------------------------------------------------------------

# 14. Section 04 --- Product Demo

This should be one of the largest visual sections.

Header:

``` text
04 / PRODUCT DEMO

See Bhaav in action
```

Place the actual product/demo video in a large video container.

Recommended aspect ratio:

``` text
16:9
```

Use:

-   Poster frame
-   Large play button
-   Rounded corners
-   Minimal controls
-   Captions if available

------------------------------------------------------------------------

# 15. Demo Chapters

Below the video, show compact chapter markers.

Example:

``` text
01  Create a lot
02  Capture evidence
03  Check weight
04  Lock the price
05  Sign the transaction
06  Handover
07  Recycler confirmation
```

Clicking a chapter should optionally seek the video to that timestamp.

If exact timestamps are not available, do not invent them. Display the
flow without timestamp links.

------------------------------------------------------------------------

# 16. Product Flow Visual

Show the product flow as a horizontal timeline on desktop and vertical
timeline on mobile.

``` text
CREATE LOT
    ↓
PHOTO + WEIGHT
    ↓
BUYER / PRICE
    ↓
RATE LOCK
    ↓
SIGNED RECEIPT
    ↓
HANDOVER
    ↓
RECYCLER
    ↓
REACHED
```

Use short labels only.

------------------------------------------------------------------------

# 17. Section 05 --- Product Evidence

This section should show the actual product rather than explaining it
with large text blocks.

Header:

``` text
05 / PRODUCT EVIDENCE

Built around real transaction proof
```

Use actual application screenshots inside realistic phone/device frames.

Recommended evidence cards:

1.  Collector app
2.  Recycler console
3.  Signed receipt
4.  Offline transaction
5.  Weight verification
6.  Buyer history
7.  Recycler verification

------------------------------------------------------------------------

# 18. Product Feature Groups

Do NOT display all 14 features as 14 large marketing cards.

Group them into four categories.

------------------------------------------------------------------------

## A. Fair Transaction

### Rate Lock

Accepted price is recorded.

### Weight Check

Collector sees the recorded weight before confirming.

### Actually Paid Price

Shows real signed-sale prices rather than only advertised prices.

------------------------------------------------------------------------

## B. Trust & Fraud Checks

### Two-Photo Check

Checks that the second transaction photo is not simply a copy of the
first.

### Same-Photo Alarm

Flags a photo reused across different sales.

### Honest-Buyer Score

Shows buyer behaviour based on recorded transactions.

------------------------------------------------------------------------

## C. Formalisation & Bulk Handling

### Bhaav Point

Partner shops can collect smaller lots and pool them.

### Invoice Lot + Auto Invoice

Pooling can generate a larger invoice instead of creating unnecessary
paperwork for every small sale.

### Truck-Weight Check

Compares truck weight with the receipts inside the shipment.

### CPCB-ready Receipt

Provides transaction information needed for formal recycler
documentation.

------------------------------------------------------------------------

## D. Traceability & Accessibility

### Reached Line

Shows when the material reaches the authorised recycler.

### Offline Confirmation

Allows confirmation without internet connectivity.

### Multilingual Support

Marathi, Hindi and English.

### Formal Pays More Bonus

The recycler can set a bonus for verified material; the bonus is not
presented as a guaranteed Bhaav payment.

------------------------------------------------------------------------

# 19. Feature Status

The website must be honest about implementation status.

Use three statuses:

``` text
BUILT
BUILDING
TO VALIDATE
```

### Built

Use for features currently working in the product/codebase.

### Building

Use for planned or actively implemented functionality that should not be
represented as fully production-ready.

### To Validate

Use for functionality that still needs real-world testing, field
validation or stakeholder confirmation.

------------------------------------------------------------------------

# 20. Current Product Status

The source project documentation states that the major feature set has
been implemented in code/tests, but real-phone testing, live deployment
and some external validation are still required.

Therefore the website should NOT imply that every feature has already
been proven in a live field environment.

Suggested status block:

``` text
PRODUCT STATUS

Built
Core product flow and supporting systems are implemented.

Building
Selected product features are still being finalised.

To Validate
Real-phone testing, recycler/PRO feedback,
language read-through and field validation remain.
```

------------------------------------------------------------------------

# 21. Section 06 --- Product Status

Use a visual progress/status board.

Example:

``` text
┌──────────────────────┐
│ BUILT                │
│ Core product flow    │
└──────────────────────┘

┌──────────────────────┐
│ BUILDING             │
│ Final feature work   │
└──────────────────────┘

┌──────────────────────┐
│ TO VALIDATE          │
│ Field + real device  │
└──────────────────────┘
```

Avoid fake percentage progress bars.

------------------------------------------------------------------------

# 22. Section 07 --- Sources

Sources should be easy to inspect.

Use cards:

``` text
CPCB
Environmental Compensation Guidelines
[ View Source ↗ ]

MPCB
Circular Economy Directory 2025
[ View Source ↗ ]

VVCMC
Environmental Status Report 2022–23
[ View Source ↗ ]

MPCB
E-Waste Outward Registry
[ View Source ↗ ]

Academic / Industry Research
Supporting studies
[ View Source ↗ ]
```

Every secondary claim should have a source.

------------------------------------------------------------------------

# 23. Source Categories

Organise sources into:

### Government / Regulatory

-   CPCB
-   MPCB
-   VVCMC

### Research

-   Academic papers
-   Research reports

### Industry / NGO

-   GIZ
-   GAIA / No-Burn
-   Other relevant reports

### Reference Study

-   Bengaluru reference field study

The reference study must be explicitly labelled as external/reference
research.

------------------------------------------------------------------------

# 24. Visual Design System

## Colour Palette

### Background

``` text
#0B0F0D
```

### Card

``` text
#121815
```

### Primary Text

``` text
#F1F3EF
```

### Secondary Text

``` text
#9AA39D
```

### Border

``` text
#27302A
```

### Primary Green

``` text
#79D47C
```

### Attention / Observation Amber

``` text
#E2B45B
```

Use green sparingly.

Green should communicate:

-   Verified
-   Completed
-   Primary action
-   Positive status

Amber should communicate:

-   Observation
-   Attention
-   Research
-   Needs validation

Do not make the whole website green.

------------------------------------------------------------------------

# 25. Typography

Primary font:

**Inter**

Fallback:

``` text
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Alternative font:

**Manrope**

Do not load multiple unnecessary font families.

### Typography hierarchy

``` text
Hero heading:
56–80px desktop

Section heading:
40–56px

Card heading:
20–28px

Body:
16–18px

Metadata:
12–14px
```

Mobile typography should scale down appropriately.

------------------------------------------------------------------------

# 26. Layout System

Use a consistent maximum content width:

``` text
max-width: 1200–1280px
```

Desktop horizontal padding:

``` text
24–48px
```

Mobile horizontal padding:

``` text
16–20px
```

Use generous vertical spacing.

Sections should feel separated without requiring decorative backgrounds.

------------------------------------------------------------------------

# 27. Card Design

Cards should use:

-   Dark surface
-   1px border
-   12--20px radius
-   Subtle hover elevation
-   Strong internal spacing

Avoid:

-   Heavy shadows
-   Glassmorphism everywhere
-   Excessive gradients
-   Huge border radii
-   Overdecorated cards

------------------------------------------------------------------------

# 28. Motion & Animation

Use motion only where it improves understanding.

Recommended:

-   Fade-in on section entry
-   Slight upward reveal
-   Image hover zoom
-   Navbar transition
-   Active tab transition
-   Timeline reveal
-   Video play pulse
-   Small status transitions

Avoid:

-   Constant floating animations
-   Particle backgrounds
-   Rotating 3D objects
-   Excessive parallax
-   Long loading animations
-   Animations that delay content

Motion should feel like a modern product site, not a gaming website.

------------------------------------------------------------------------

# 29. Responsive Design

The website must be designed mobile-first.

### Desktop

Use:

-   Two-column layouts
-   Horizontal timelines
-   Large image galleries
-   Wide video
-   Side-by-side research cards

### Tablet

Collapse complex grids to 2 columns.

### Mobile

Use:

``` text
Single column
↓
Photo
↓
Finding
↓
Evidence
↓
Product
```

The demo video should remain highly visible.

------------------------------------------------------------------------

# 30. Map Component

A small map may be included in the Field Visit section.

Purpose:

-   Establish the general field-study area.
-   Provide geographic context.

It must NOT display an invented exact field location.

Use only the location information actually collected by the team.

Recommended implementation:

**React Leaflet + OpenStreetMap**

The map should remain secondary to the actual field photographs.

------------------------------------------------------------------------

# 31. Media Strategy

## Images

Use:

1.  Actual field photographs
2.  Actual product screenshots
3.  Actual receipt screenshots
4.  Actual demo/product visuals

Avoid stock photographs wherever possible.

## Video

Use the actual product demo video.

Recommended implementation:

-   Native HTML5 `<video>`
-   MP4/WebM where available
-   Poster image
-   Lazy loading/preload strategy

Do not introduce a video platform dependency unless there is a clear
deployment reason.

------------------------------------------------------------------------

# 32. Locked Technology Stack

## IMPORTANT --- TECH STACK FREEZE

The following technology stack is **locked for implementation**.

The developer should NOT replace a listed technology with another
technology simply because it is personally preferred.

A stack change is allowed only when there is a documented technical
reason.

------------------------------------------------------------------------

## Frontend

### Next.js

**Locked:** Next.js with App Router

Reason:

-   Excellent production-ready React framework.
-   Supports static and dynamic rendering.
-   Good SEO support.
-   Excellent performance.
-   Simple deployment on Vercel.
-   Suitable for a professional documentation/product site.

------------------------------------------------------------------------

## Language

### TypeScript

**Locked**

Reason:

-   Strong typing.
-   Better maintainability.
-   Reduces UI/data integration errors.
-   Appropriate for a structured product showcase.

Do not convert the project to plain JavaScript without a documented
reason.

------------------------------------------------------------------------

## UI

### React

**Locked**

Reason:

-   Native framework foundation for Next.js.
-   Component-based architecture.
-   Suitable for reusable cards, sections, timelines and evidence
    components.

------------------------------------------------------------------------

## Styling

### Tailwind CSS

**Locked**

Reason:

-   Fast and consistent UI implementation.
-   Easy responsive design.
-   Easy enforcement of the predefined design system.
-   Suitable for modern dark product interfaces.

Do not introduce a second major CSS framework.

------------------------------------------------------------------------

## Animation

### Framer Motion

**Locked**

Reason:

-   Lightweight React-friendly animation system.
-   Suitable for subtle section transitions and UI interactions.
-   Better control than manually maintaining multiple animation systems.

Use it only where animation adds value.

------------------------------------------------------------------------

## Icons

### Lucide React

**Locked**

Reason:

-   Consistent modern icon system.
-   Lightweight.
-   Open-source.
-   Avoids mixing multiple icon libraries.

Do not use several competing icon libraries.

------------------------------------------------------------------------

## Map

### React Leaflet + OpenStreetMap

**Locked if map is included**

Reason:

-   Open-source.
-   Suitable for a simple field-location context map.
-   Does not require a proprietary map SDK.

If a map is ultimately unnecessary because the field location cannot be
represented safely/accurately, remove the map rather than adding another
mapping platform.

------------------------------------------------------------------------

## Video

### Native HTML5 Video

**Locked**

Reason:

-   No unnecessary third-party dependency.
-   Full control over poster, playback and responsive layout.
-   Appropriate for a locally hosted product demo.

------------------------------------------------------------------------

## Deployment

### Vercel

**Preferred and locked**

Reason:

-   Native Next.js deployment.
-   Easy preview deployments.
-   Good CDN/performance.
-   Simple production deployment.

------------------------------------------------------------------------

# 33. Final Locked Stack

``` text
Framework       → Next.js
Architecture    → App Router
Language        → TypeScript
UI              → React
Styling         → Tailwind CSS
Animation       → Framer Motion
Icons           → Lucide React
Map             → React Leaflet + OpenStreetMap
Video           → HTML5 Video
Deployment      → Vercel
```

------------------------------------------------------------------------

# 34. Technology Change Rule

## STRICT RULE

**The implementation plan locks the above technology stack.**

A developer may not replace:

``` text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide
React Leaflet
Vercel
```

with another technology simply because:

-   It is familiar.
-   It is personally preferred.
-   It looks easier.
-   It is currently trending.
-   It was used in another project.
-   It reduces a few lines of code.

### A stack change is permitted only if:

1.  The original technology cannot technically support a required
    feature.
2.  A serious deployment/performance/security issue is discovered.
3.  A required integration is incompatible.
4.  The replacement provides a clear technical necessity.

### Required process for a change

The change must be documented as:

``` text
TECH STACK CHANGE REQUEST

Original:
[Technology]

Proposed:
[Technology]

Reason:
[Specific technical problem]

Why the locked technology is insufficient:
[Explanation]

Impact:
[Performance / maintenance / deployment / compatibility]

Decision:
[Approved / Rejected]
```

**No silent stack changes.**

------------------------------------------------------------------------

# 35. Project Architecture

Recommended structure:

``` text
bhaav-site/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   └── components/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── hero/
│   │   └── Hero.tsx
│   │
│   ├── research/
│   │   ├── FieldVisit.tsx
│   │   ├── FieldObservations.tsx
│   │   ├── ResearchTabs.tsx
│   │   ├── LocalResearch.tsx
│   │   └── Sources.tsx
│   │
│   ├── product/
│   │   ├── ProductFlow.tsx
│   │   ├── DemoVideo.tsx
│   │   ├── DemoChapters.tsx
│   │   ├── ProductEvidence.tsx
│   │   ├── FeatureGroups.tsx
│   │   └── ProductStatus.tsx
│   │
│   ├── ui/
│   │   ├── SectionHeader.tsx
│   │   ├── EvidenceCard.tsx
│   │   ├── StatusBadge.tsx
│   │   ├── ImageLightbox.tsx
│   │   └── Button.tsx
│
├── data/
│   ├── research.ts
│   ├── observations.ts
│   ├── features.ts
│   └── sources.ts
│
├── public/
│   ├── images/
│   │   ├── field/
│   │   └── product/
│   │
│   ├── video/
│   │   └── bhaav-demo.mp4
│   │
│   └── icons/
│
├── package.json
├── tsconfig.json
├── tailwind.config.*
└── README.md
```

------------------------------------------------------------------------

# 36. Component Strategy

Build reusable components instead of writing every section
independently.

Important reusable components:

### `SectionHeader`

Used for:

``` text
01 / FIELD VISIT
02 / LOCAL RESEARCH
03 / RESEARCH → DESIGN
...
```

### `EvidenceCard`

Used for field observations and research findings.

### `StatusBadge`

Supports:

``` text
BUILT
BUILDING
TO VALIDATE
FIELD OBSERVATION
SECONDARY RESEARCH
REFERENCE
```

### `ImageLightbox`

Used for field photographs and product screenshots.

### `FeatureCard`

Used inside grouped feature sections.

### `SourceCard`

Used for source links.

------------------------------------------------------------------------

# 37. Content/Data Separation

Research information should not be hardcoded repeatedly inside UI
components.

Example:

``` text
data/
├── observations.ts
├── research.ts
├── features.ts
└── sources.ts
```

This makes it easier to:

-   Update research.
-   Add new evidence.
-   Correct a source.
-   Change a feature status.
-   Maintain consistent UI.

The UI should consume structured data.

------------------------------------------------------------------------

# 38. Research Data Structure

Each research item should contain:

``` text
title
description
type
source
sourceUrl
date
status
```

Example:

``` text
type:
PRIMARY
SECONDARY
REFERENCE
```

This prevents accidental mixing of primary and secondary research.

------------------------------------------------------------------------

# 39. Feature Data Structure

Each feature should contain:

``` text
id
name
group
description
status
```

Status must be one of:

``` text
BUILT
BUILDING
TO_VALIDATE
```

Do not create a new status without updating the design system.

------------------------------------------------------------------------

# 40. Source Data Structure

Each source should contain:

``` text
organisation
title
type
date
url
supports
```

Example types:

``` text
GOVERNMENT
REGULATORY
ACADEMIC
INDUSTRY
REFERENCE
```

------------------------------------------------------------------------

# 41. Accessibility Requirements

The website must include:

-   Semantic HTML.
-   Proper heading hierarchy.
-   Alt text for images.
-   Keyboard-accessible buttons.
-   Visible focus states.
-   Sufficient text contrast.
-   Captions/transcript where practical for the demo.
-   Accessible navigation.
-   No information conveyed only through colour.

Example:

Do not show only:

``` text
🟢
```

Use:

``` text
BUILT
```

as well.

------------------------------------------------------------------------

# 42. Performance Requirements

The site should prioritise performance.

### Images

-   Use Next.js Image.
-   Compress large photographs.
-   Serve responsive image sizes.
-   Lazy-load images outside the first viewport.

### Video

-   Use a poster image.
-   Avoid automatically downloading huge video files before interaction.
-   Use appropriate preload behaviour.

### Code

-   Keep client components limited.
-   Use server components by default where possible.
-   Use client-side rendering only for interactive components.

### Dependencies

Do not install a package for functionality that can be implemented
cleanly with existing stack capabilities.

------------------------------------------------------------------------

# 43. SEO / Metadata

Use proper metadata:

``` text
Title:
Bhaav — Field Research × Product Evidence

Description:
Bhaav is an e-waste transaction and traceability platform designed around field research, fair transactions and formal recycling.
```

Also include:

-   Open Graph image
-   Favicon
-   Social preview metadata
-   Descriptive page title

------------------------------------------------------------------------

# 44. What Should NOT Be Added

To maintain scope and quality, do not add:

-   Login system
-   User registration
-   Admin dashboard for the website
-   Marketplace
-   Bidding
-   Blockchain
-   Games
-   AI chatbot
-   Generic chatbot
-   Fake testimonials
-   Fake user reviews
-   Fake statistics
-   Fake interviews
-   Fake field locations
-   Unverified recycler claims
-   Complex 3D animations
-   Unnecessary particle effects
-   Excessive environmental illustrations

These are not part of the website's purpose.

The product source documentation also explicitly avoids unnecessary
additions such as bidding, marketplace, OTP login, blockchain, trained
image AI, price prediction and games.

------------------------------------------------------------------------

# 45. Product Claims Rule

Every product claim must be classified internally as:

``` text
BUILT
BUILDING
TO VALIDATE
```

Every number must have an internal source/tag:

``` text
VERIFIED
ESTIMATED
DEMO
TO COLLECT
```

Never present an estimate as a measured field result.

------------------------------------------------------------------------

# 46. Important Research Integrity Rules

### Rule 1

Primary field research means only what the team actually
observed/collected.

### Rule 2

Government/academic/industry information must be presented as secondary
research.

### Rule 3

External field studies must be labelled as reference research.

### Rule 4

Never create fictional quotes.

### Rule 5

Never invent recycler interviews.

### Rule 6

Never create fake GPS coordinates.

### Rule 7

Never use secondary statistics as if they were field measurements.

### Rule 8

If evidence is missing, write:

``` text
TO VALIDATE
```

instead of inventing it.

------------------------------------------------------------------------

# 47. Implementation Phases

## Phase 1 --- Project Setup

-   Create Next.js project.
-   Configure TypeScript.
-   Configure Tailwind CSS.
-   Add Framer Motion.
-   Add Lucide React.
-   Add React Leaflet only if the map is required.
-   Configure project metadata.
-   Establish folder structure.

------------------------------------------------------------------------

## Phase 2 --- Design System

Implement:

-   Colours
-   Typography
-   Spacing
-   Buttons
-   Cards
-   Status badges
-   Section headers
-   Navigation
-   Responsive breakpoints

The design system should be established before building all sections.

------------------------------------------------------------------------

## Phase 3 --- Research Sections

Build:

1.  Hero
2.  Field Visit
3.  Field Observations
4.  Field Gallery
5.  Local Desk Research
6.  Research Tabs
7.  Sources

------------------------------------------------------------------------

## Phase 4 --- Product Sections

Build:

1.  Research → Design
2.  Product Flow
3.  Demo Video
4.  Demo Chapters
5.  Product Evidence
6.  Feature Groups
7.  Product Status

------------------------------------------------------------------------

## Phase 5 --- Interaction & Motion

Add:

-   Scroll reveals
-   Tab transitions
-   Gallery interactions
-   Video chapter interaction
-   Hover states
-   Navbar transitions

Keep animation subtle.

------------------------------------------------------------------------

## Phase 6 --- Responsive Implementation

Test:

-   Desktop
-   Laptop
-   Tablet
-   Mobile
-   Small mobile

Pay particular attention to:

-   Hero
-   Photo gallery
-   Video
-   Research cards
-   Feature cards
-   Navigation

------------------------------------------------------------------------

# 48. QA Checklist

Before deployment:

## Content

-   [ ] Every primary observation is genuinely from the field visit.
-   [ ] Secondary research has source labels.
-   [ ] Reference research is clearly labelled.
-   [ ] No unsupported claims.
-   [ ] No fake statistics.
-   [ ] No fake quotes.
-   [ ] Product status is honest.
-   [ ] All numbers are properly classified.

## UI

-   [ ] Navbar works.
-   [ ] All buttons work.
-   [ ] Anchor links work.
-   [ ] Gallery opens correctly.
-   [ ] Video works.
-   [ ] Video poster works.
-   [ ] Research tabs work.
-   [ ] Status badges are consistent.
-   [ ] Mobile layout works.
-   [ ] No horizontal scrolling.

## Technical

-   [ ] TypeScript passes.
-   [ ] Production build passes.
-   [ ] No console errors.
-   [ ] Images are optimised.
-   [ ] Video is reasonably sized.
-   [ ] Metadata is configured.
-   [ ] Accessibility basics are verified.
-   [ ] Deployment works on Vercel.

------------------------------------------------------------------------

# 49. Final Acceptance Criteria

The website is considered complete only when:

### Research

-   Primary and secondary research are clearly separated.
-   Field photographs are prominently displayed.
-   Local research has sources.
-   No information is presented dishonestly.

### Product

-   The actual Bhaav product is clearly shown.
-   Demo video is easy to find.
-   Product flow is understandable in under one minute.
-   Major product capabilities are grouped logically.
-   Built/building/to-validate status is visible.

### UI

-   Modern professional dark UI.
-   Clean typography.
-   Strong visual hierarchy.
-   Responsive layout.
-   Subtle professional animations.
-   No unnecessary visual clutter.

### Technical

-   Locked stack is used.
-   No unapproved framework substitution.
-   Production build passes.
-   Vercel deployment works.
-   No major console/runtime errors.

------------------------------------------------------------------------

# 50. Final Website Experience

The final visitor journey should feel like:

``` text
LAND
  ↓
UNDERSTAND BHAAV
  ↓
SEE REAL FIELD EVIDENCE
  ↓
UNDERSTAND LOCAL RESEARCH
  ↓
SEE WHAT THE RESEARCH CHANGED
  ↓
WATCH THE REAL PRODUCT
  ↓
EXPLORE PRODUCT EVIDENCE
  ↓
CHECK IMPLEMENTATION STATUS
  ↓
VERIFY SOURCES
```

The website should leave the visitor with a clear understanding:

> **Bhaav was shaped by field observations and supporting research, and
> the website shows the evidence behind both the problem understanding
> and the product design.**

------------------------------------------------------------------------

# 51. One-Line Design Brief

> **Build Bhaav as a dark, minimal research-and-product showcase using
> real field photographs, clear evidence cards, sourced local research,
> a simple field-location map where appropriate, a large product demo,
> actual application screens, and honest implementation-status labels
> --- using the locked Next.js + TypeScript + Tailwind CSS + Framer
> Motion + Lucide React + React Leaflet + Vercel stack.**

------------------------------------------------------------------------

# 52. Developer Instruction --- Stack Freeze

## ⚠️ STRICT IMPLEMENTATION RULE

**DO NOT CHANGE THE TECHNOLOGY STACK WITHOUT A DOCUMENTED TECHNICAL
REASON.**

The implementation is locked to:

``` text
Next.js
TypeScript
React
Tailwind CSS
Framer Motion
Lucide React
React Leaflet + OpenStreetMap (if map is used)
HTML5 Video
Vercel
```

If another technology is proposed, the developer must document:

1.  What is being changed.
2.  Why the existing technology cannot fulfil the requirement.
3.  Why the replacement is technically necessary.
4.  What impact the change has.
5.  Why the change does not unnecessarily increase complexity.

**No silent technology substitutions.**

The priority is:

> **Professional UI + maintainable implementation + honest evidence +
> minimal unnecessary complexity.**
