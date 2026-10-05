# Paper Spectrum — Provenance and Validation Policy

## Objective

Create a measurable editorial website system using Kinfolk as a reference for visual/behavioral grammar while keeping Paper Spectrum legally and visually independent.

## Evidence hierarchy

### A — Source-measured / current computed-style extraction
Highest confidence.

Primary public validation source:
- OpenDesign — Kinfolk design DNA
- OpenDesign extraction repository

OpenDesign states that entries are produced by driving a real browser with Playwright, reading `getComputedStyle()` from the DOM, aggregating measured values, and grounding the visual interpretation against screenshots.

Validated values used by this package include:
- 1280px computed container
- 12 columns
- 20px gutter
- 768 / 1024 breakpoints
- 4px spacing foundation
- 1px dividers
- 220 / 400 / 800ms motion tiers
- cubic-bezier(0.25, 1, 0.5, 1)
- 13 / 20 / 32 / ~56–60px typographic landmarks

### B — Independent extracted/reference system
Strong corroboration.

Design Atlas independently documents:
- 1400px page max-width
- 680px reading measure
- 4 / 8 / 12 / 20 / 24 / 40 / 60 / 80 / 120 / 200px spacing family
- 13 / 15 / 20 / 25 / 32 / 50 / 60px type scale
- weight 400 discipline
- 0px cards/images
- 1px hairline logic

### C — Paper Spectrum adaptation
Values created intentionally for this brand.

Examples:
- warm paper base #F7F5F0
- Spectrum Wash #D9DEE0
- Newsreader + Inter
- 1400px outer frame / 1280px working grid dual-shell model
- 8px editorial reveal displacement
- 1.01 image hover scale

These values are not represented as Kinfolk facts.

## Current live reference

The current Kinfolk homepage remains structured as a magazine/content system, with issue hero, latest stories, issue-specific editorial lists, shop content, category navigation, and subscription calls to action. This confirms that the relevant reference is a content-led editorial architecture, not a generic minimalist landing-page template.

## Source links

- https://www.kinfolk.com/
- https://opendesign.cc/en/sites/kinfolk
- https://github.com/qiuyiwu1989-star/opendesign
- https://geoffreymanda.github.io/design-atlas/styles/kinfolk.html

## Rule

When future direct measurements conflict with this package:
1. Preserve the existing package as a versioned baseline.
2. Record the new measurement and capture date.
3. Update confidence metadata.
4. Change Paper Spectrum only when the change improves its own system; do not chase Kinfolk drift blindly.
