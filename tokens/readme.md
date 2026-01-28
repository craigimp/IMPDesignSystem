# IMP Design Tokens

⚠️ **EXPERIMENTAL USE ONLY** — These tokens are **not yet production-ready** and have **not been design-signed-off**. They are based on current product screens and initial design system research. Use for experimentation and feedback only. Full design validation is pending.

---

This directory contains draft design token definitions for the IMP Design System. These tokens define colour, typography, spacing, and component styles for use across IMP products.

## Overview

Design tokens are the single source of truth for visual design decisions. They ensure consistency across products and make it easy to update the entire system by changing values in one place.

## Important: Read the Design System Foundations First

Before building any UI or implementing these tokens, **read the IMP Design System Foundations document**:

📖 [IMP Design System Foundations](https://impsoftwarecouk-my.sharepoint.com/:w:/r/personal/craig_pugsley_impsoftware_co_uk/_layouts/15/Doc.aspx?sourcedoc=%7BD1A29F57-B595-4280-9470-1F177EE3AD78%7D&file=Document.docx&action=editnew&mobileredirect=true&wdPreviousSession=d894cfed-d7f0-60fd-9e8d-950e2819dbda&wdNewAndOpenCt=1769527428651&wdo=4&wdOrigin=wacFileNew&wdPreviousCorrelation=e229bc30-9995-42d3-8d31-068c73fd7e54&wdnd=1)

This document provides:
- Design philosophy and core principles (Clarity, Accountability, Trust, Inclusive)
- User personas and how to design for each
- Detailed interaction and behaviour guidance
- Accessibility standards and testing approaches
- Context and rationale for these token decisions

**For AI agents:** When building any UI, cross-reference these tokens with the Design System Foundations document. The tokens are values; the Foundations document is philosophy and context. Both are required for making good design decisions.

## File Structure

```
tokens/
├── tokens.json          # Complete token definitions (Phase 1 + Phase 2)
└── README.md           # This file
```

## Token Categories

### Colours
- **Primary system:** Purple (`#7030a0`) for brand elements and main CTAs
- **Secondary system:** Light grey (`#f0f0f0`) for alternative actions
- **Semantic colours:** Green (success/approved), Red (error/rejected), Amber (warning/pending), Blue (info/neutral)
- **Neutral grayscale:** Text, backgrounds, borders, and sidebar colours

See `colors` object in `tokens.json` for full colour scales (50–900 variants).

### Typography
- **Furniture (UI controls, labels):** System font stack for clean, accessible UI
- **Data (table content):** Monospace font for consistent alignment of mixed content (numbers, codes, descriptions)
- **Font sizes:** 12px–32px scale for headings, body text, captions
- **Font weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Line heights:** 1.2 (tight) to 2 (loose) for different content types

### Spacing
Base unit: **8px**

Tokens range from `spacing-4` (4px) to `spacing-64` (64px). Use these for margins, padding, and gaps between components.

**Context-specific spacing:**
- **Compact (data tables):** 8px vertical padding, 40px row height
- **Moderate (forms):** 12px vertical, 16px horizontal field padding
- **Spacious (dashboards):** 24px+ component padding and gaps

### Buttons
Five button styles with consistent padding and border radius:
1. **Primary** — Main CTAs (purple background)
2. **Secondary** — Alternative actions (light grey background)
3. **Tertiary** — De-emphasised actions (transparent, purple text)
4. **Quaternary** — Minimal/ghost actions (transparent, grey text)
5. **Destructive** — Delete/reject actions (red background)

All buttons use `radius-md` (6px) for consistency.

### States & Workflows
Standardised state progression for all workflows:
- **Draft** → Grey
- **Submitted** → Blue
- **Under Review** → Amber
- **Approved** → Green
- **Rejected** → Red
- **Archived** → Grey

Each state includes a label, colour, icon recommendation, and usage guidance.

### Data Formatting
- **Positive numbers:** Normal weight, right-aligned, 2 decimal places (e.g., `£1,500.00`)
- **Negative numbers:** *Italic* style with optional prefix (e.g., `(£1,500.00)` or `–£1,500.00`)
- **Currency:** Pound symbol (£) prefix-adjacent
- **Thousands separator:** Comma (e.g., `£1,000.00`)
- **Totals:** Bold or distinct background colour

**Important:** Colour (red/green) is **not** used to distinguish positive/negative figures. Green and red are reserved exclusively for states (Approved/Rejected). Use italic styling instead.

### Transitions & Animation
- **Fast:** 150ms (quick feedback, error messages)
- **Normal:** 250ms (standard transitions, dropdowns, page changes)
- **Slow:** 350ms (longer operations, loading spins)
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (consistent across all animations)

All animations are functional only — no decorative motion. Respects user's `prefers-reduced-motion` preference.

### Border Radius
- `radius-0`: 0px
- `radius-sm`: 4px (input fields, small components)
- `radius-md`: 6px (buttons, cards, standard components)
- `radius-lg`: 8px (modals, large cards)
- `radius-full`: 9999px (pill buttons, badges — Phase 2 consideration)

### Shadows & Elevation
Minimal shadow scale (borders preferred):
- `xs`: Subtle (dividers, minimal elevation)
- `sm`: Light (card hover states)
- `md`: Moderate (cards, popovers)
- `lg`: Prominent (modals, dropdowns)

## Phase 1 vs Phase 2

⚠️ **Status: EXPERIMENTAL**

These tokens have **not been validated** by design or product teams. They are based on:
- Current product screenshot analysis
- Initial design system research
- Best practices from the DS Foundations document

**Do not use in production or shipped features without explicit design sign-off.**

### Phase 1 (Draft/Current)
These tokens are available for experimentation and feedback:
- ✅ Core colour palette (under review)
- ✅ Typography (system fonts + monospace for data — under review)
- ✅ Spacing scale (under review)
- ✅ Button styles (under review)
- ✅ State progression & indicators (under review)
- ✅ Data formatting rules (under review)
- ✅ Transitions & animations (under review)
- ✅ Border radius & shadows (under review)

**All Phase 1 tokens require design validation before production use.**

### Phase 2 (Deferred to Brand Book)
These enhancements are documented but **not yet implemented**. They'll be revisited once the full brand book is complete:
- ⚠️ **Teal/Cyan accent colour** — Secondary CTA highlights and information elements
- ⚠️ **Brand gradient** — Purple→Pink gradient for dashboard backgrounds and section headers
- ⚠️ **Pill button variant** — radius-full (9999px) option for softer, more expressive secondary CTAs
- ⚠️ **Enhanced typography** — Bolder headings for marketing/dashboard contexts

See `phase2Enhancements` in `tokens.json` for details.

## Using the Tokens

### In Code
The `tokens.json` file can be consumed by:
- **Figma** — Import tokens via Figma Tokens plugin or similar tool
- **Storybook** — Use as basis for component prop definitions
- **CSS/Sass** — Convert to CSS variables or Sass maps using a build tool (e.g., Style Dictionary, Tokens Studio)
- **Component libraries** — Reference token values directly in component styles

### In Design
Import `tokens.json` into your design tool (Figma, etc.) to ensure designers and developers use the same values.

### Updating Tokens
When you need to change a token value:
1. Update it in `tokens.json`
2. Run any build/compile steps to generate platform-specific outputs
3. Commit and version the change
4. Notify the team of the update

## Semantic Colour Rules

### What colours mean (and don't mean)

**Green (`#107c10`)** = Success, Approved, Active, Healthy
- Used for: Approved states, active connections, successful operations
- NOT used for: Positive/gain financial figures

**Red (`#d13438`)** = Error, Rejected, Destructive
- Used for: Error states, rejected approvals, destructive actions
- NOT used for: Negative/deficit financial figures

**Amber (`#ffb900`)** = Warning, Pending, In Progress
- Used for: Pending approvals, warnings, in-progress states, attention needed
- NOT used for: Neutral or informational content

**Blue (`#0078d4`)** = Information, Submitted, Neutral
- Used for: Informational messages, submitted states, draft content
- NOT used for: Data that doesn't need semantic meaning

**Grey (`#6e6e6e`)** = Neutral, Disabled, Archived
- Used for: Disabled states, archived records, neutral placeholder text
- NOT used for: Active or pending actions

### Financial Data (Positive/Negative)
- **Positive numbers:** Normal weight, standard styling (e.g., `£1,500.00`)
- **Negative numbers:** *Italic* styling with optional prefix (e.g., `(£1,500.00)` or `–£1,500.00`)
- **Colour:** Both use neutral text colour (`#1f1f1f`). Do not use red or green.

This prevents semantic conflicts and ensures colour is reserved for state/status information.

## Accessibility

All token definitions follow WCAG 2.1 AAA standards:

- **Colour contrast:** All text/background combinations meet AAA minimums
- **Colour-blind safe:** No status is conveyed by colour alone; always paired with icon + text
- **Motion:** All animations respect `prefers-reduced-motion` user preference
- **Typography:** Font sizes and line heights support readability; monospace for data aids scanning

## Questions?

**For design system philosophy and interaction patterns:** Refer to the [IMP Design System Foundations document](https://impsoftwarecouk-my.sharepoint.com/:w:/r/personal/craig_pugsley_impsoftware_co_uk/_layouts/15/Doc.aspx?sourcedoc=%7BD1A29F57-B595-4280-9470-1F177EE3AD78%7D&file=Document.docx&action=editnew&mobileredirect=true&wdPreviousSession=d894cfed-d7f0-60fd-9e8d-950e2819dbda&wdNewAndOpenCt=1769527428651&wdo=4&wdOrigin=wacFileNew&wdPreviousCorrelation=e229bc30-9995-42d3-8d31-068c73fd7e54&wdnd=1).

**For token-specific questions or feedback:** Contact the design system team or open an issue in the repo.

---

**Document version:** 1.0 (EXPERIMENTAL)  
**Last updated:** January 2025  
**Status:** Draft — Awaiting design sign-off  
**Caution:** Not for production use without explicit validation