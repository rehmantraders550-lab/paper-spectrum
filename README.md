# Paper Spectrum — Editorial Web System v1.0

A design-engineering package for **Paper Spectrum**, built from a validated editorial/behavioral model inspired by Kinfolk while maintaining an independent visual identity.

## Intent

Paper Spectrum should feel like a carefully paced printed publication translated to the browser: quiet, highly structured, image-led, typographically precise, and materially aware. The system uses Kinfolk as a reference for proportion, rhythm, hierarchy, and restrained interaction — not for copying brand assets, copy, or proprietary typography.

## Package contents

- `DESIGN.md` — AI-readable master design specification
- `src/tokens.css` — core visual and responsive tokens
- `src/layout.css` — grid, rhythm, editorial composition primitives
- `src/motion.css` — motion hierarchy and reduced-motion rules
- `src/behavior.js` — progressive-enhancement behaviors
- `src/parameters.json` — machine-readable parametric model with confidence levels
- `docs/component-specs.md` — component architecture
- `docs/responsive-matrix.md` — breakpoint behavior
- `docs/qa-checklist.md` — visual + behavioral release gates
- `docs/provenance.md` — validation sources and evidence policy
- `prototype/index.html` — minimal reference implementation

## Core system

### Geometry

- Outer editorial frame: `1400px` max
- Inner working grid: `1280px` max
- Desktop grid: `12 columns`
- Standard grid gutter: `20px`
- Core breakpoints: `768px`, `1024px`
- Default page gutter: `clamp(24px, 4vw, 60px)`
- Reading measure: `min(680px, 100%)`

The dual-shell model intentionally reconciles two public extraction results: a 1400px page maximum and a 1280px computed content container. Paper Spectrum treats them as separate outer-frame and working-grid responsibilities.

### Spatial grammar

`4 → 8 → 12 → 20 → 24 → 40 → 60 → 80 → 120 → 170 → 200`

Use this as a rhythm hierarchy rather than a menu of arbitrary spacing choices:

- 4–12px: micro relationships
- 20–24px: component internals
- 40–60px: grouped editorial content
- 80px: normal section rhythm
- 120px: major editorial separation
- 170–200px: deliberate pause / chapter transition

### Type hierarchy

Paper Spectrum uses open-source fonts rather than Kinfolk's proprietary families.

- Editorial serif: `Newsreader`, optical sizing enabled
- Interface sans: `Inter`
- Weight discipline: predominantly `400`

Scale:

- Caption: `13px / 1.2 / +0.06em`
- Body: `15px / 1.5`
- Lead: `20px / 1.33`
- Small heading: `25px / 1.19 / +0.01em`
- Heading: `32px / 1.16 / -0.01em`
- Feature: `50px / 1.04 / -0.01em`
- Display: `clamp(42px, 4.2vw, 60px) / 1 / -0.025em`

### Motion hierarchy

- Micro: `220ms`
- Small: `400ms`
- Medium/editorial: `800ms`
- Primary easing: `cubic-bezier(0.25, 1, 0.5, 1)`
- Entrance displacement: `8px` vertical maximum
- Image scale feedback: `1.01` maximum

Motion must explain state change; it may never become the page's subject.

### Surface language

- No card shadows
- No glassmorphism
- No gradients
- No ornamental borders
- Default card/image radius: `0px`
- Hairline: `1px`
- One quiet full-bleed paper-tone accent may interrupt the otherwise neutral canvas

## Paper Spectrum identity layer

Paper Spectrum deliberately differs from Kinfolk through its own material palette and typography:

- Paper: `#F7F5F0`
- White: `#FFFFFF`
- Ink: `#151514`
- Soft Ink: `#3A3A37`
- Paper Mist: `#ECE9E2`
- Spectrum Wash: `#D9DEE0`
- Rule: `rgba(21,21,20,.24)`

**Spectrum Wash** is not a decorative brand color. It is used only as a large paper-like tonal field or chapter break.

## Page rhythm

Preferred sequencing:

`quiet opening → editorial statement → image evidence → indexed content → tonal passage → long-form reading → full-bleed image → curatorial pause → closing register`

Avoid repeating the same section composition twice in succession.

## Interaction rules

- Hover may enhance; it must never own state.
- No autoplay carousels.
- No scroll hijacking.
- No parallax by default.
- No spring/bounce easing.
- No cursor-follow effects.
- No large zoom transitions.
- Focus must expose the same functionality as hover.
- Reduced-motion users receive identical information with motion removed.
- JavaScript failure must leave all primary content readable and navigable.

## Implementation principle

**Composition before animation.** If a transition cannot be understood from spacing, hierarchy, tone, and alignment alone, fix the composition before adding motion.
