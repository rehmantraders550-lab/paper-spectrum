# Paper Spectrum · Design System

## 0. Identity

**Character:** Quiet editorial intelligence, paper materiality, gallery-level restraint.

Paper Spectrum should feel like a publication rather than a conventional marketing website. The browser is treated as a page sequence. Typography, photography, margins, and tonal changes carry hierarchy; interface chrome stays visually subordinate.

### Primary rules

1. Use space as an active compositional element.
2. Use one dominant visual or typographic idea per viewport.
3. Keep interface chrome under roughly 10% of visual emphasis.
4. Prefer asymmetric editorial composition over centered marketing stacks.
5. Use a strict hidden grid even when the composition looks informal.
6. Let images behave as architecture, not decoration.
7. Make section handoffs legible through rhythm before motion.

## 1. Colors

```css
--ps-paper: #F7F5F0;
--ps-white: #FFFFFF;
--ps-ink: #151514;
--ps-ink-soft: #3A3A37;
--ps-paper-mist: #ECE9E2;
--ps-spectrum-wash: #D9DEE0;
--ps-rule: rgba(21, 21, 20, 0.24);
--ps-rule-strong: rgba(21, 21, 20, 0.72);
```

Rules:
- Keep most surfaces within paper/white/ink.
- Spectrum Wash is for rare full-width chapter transitions only.
- Never use saturated accent colors in core UI.
- Photography may contain color; interface color should not compete with it.

## 2. Typography

### Families
- Serif voice: `Newsreader, Georgia, serif`
- Sans system: `Inter, Arial, sans-serif`

### Weight
- Default and preferred: `400`
- Use `500` only for exceptional utility emphasis; avoid bold editorial headings.

### Scale

| Role | Size | Line-height | Tracking |
|---|---:|---:|---:|
| Caption | 13px | 1.2 | +0.06em |
| Body | 15px | 1.5 | 0 |
| Lead | 20px | 1.33 | 0 |
| Heading S | 25px | 1.19 | +0.01em |
| Heading | 32px | 1.16 | -0.01em |
| Feature | 50px | 1.04 | -0.01em |
| Display | clamp(42px, 4.2vw, 60px) | 1.0 | -0.025em |

### Measure
- Long-form body: `max-width: 680px`
- Intro/deck: `max-width: 760px`
- Display text: constrain by line count, not viewport width alone; target 7–12 words per line.

## 3. Spacing

Base unit: `4px`

Scale:
`4 / 8 / 12 / 20 / 24 / 40 / 60 / 80 / 120 / 170 / 200`

Semantic assignments:
- `--ps-space-micro`: 8px
- `--ps-space-element`: 20px
- `--ps-space-group`: 40px
- `--ps-space-section`: 80px
- `--ps-space-major`: 120px
- `--ps-space-pause`: 170px
- `--ps-space-monumental`: 200px

## 4. Layout

- Outer frame: `1400px`
- Working grid: `1280px`
- Columns: 12 desktop
- Grid gutter: `20px`
- Breakpoints: 768px and 1024px
- Page gutter: `clamp(24px, 4vw, 60px)`

### Editorial ratios
Approved split families:
- 5/7
- 7/5
- 6/6
- 4/8
- 8/4

Do not default every section to 50/50.

### Section choreography
A page should oscillate between composition families:

`centered statement → asymmetric split → modular register → full-bleed image → reading column → quiet pause`

## 5. Surfaces

- Cards: no decorative container by default
- Card radius: 0
- Images: 0 radius
- Inputs: 0 radius
- Buttons: 0 radius
- Inline links may use up to 2px radius only where browser focus treatment requires it
- Dividers: 1px
- Shadows: absent by default

Use elevation only if an object physically overlaps another visual plane and cannot be separated through tone or spacing.

## 6. Imagery

Photography dominates the visual experience.

Preferred:
- full-bleed editorial frames
- controlled crops
- 3:2, 4:5, 1:1, 16:10 depending on narrative role
- low visual clutter
- coherent negative space
- tactile surface evidence

Avoid:
- decorative stock imagery
- overly cinematic color grading
- fake depth effects
- gratuitous image zooming
- rounded image cards

## 7. Motion

```css
--ps-motion-micro: 220ms;
--ps-motion-small: 400ms;
--ps-motion-medium: 800ms;
--ps-ease: cubic-bezier(0.25, 1, 0.5, 1);
```

### Reveal grammar
Default editorial reveal:
- opacity `0 → 1`
- translateY `8px → 0`
- duration `800ms`
- no blur
- no horizontal slide

### Hover grammar
- opacity/color change first
- optional image scale up to `1.01`
- never alter surrounding layout

### Section transitions
Use one of:
1. editorial space
2. 1px rule/index
3. tonal paper passage
4. rare image bridge

Do not use an animated transition merely because a section entered the viewport.

## 8. Interaction

- Click/tap owns persistent state.
- Hover is enhancement only.
- Native scroll remains in control.
- Horizontal rails, if used, use native overflow and proximity snap.
- Avoid autoplay.
- Avoid scroll hijacking.
- Escape closes dismissible/expanded states.
- Arrow keys may navigate indexed registers when the pattern is explicit.

## 9. Responsive behavior

### ≥1024px
- 12-column grid
- full editorial spacing scale
- asymmetric split layouts active
- max content shell applied

### 768–1023px
- 8-column interpretation
- reduce monumental pauses from 200 to 120–170
- preserve hierarchy; avoid simply shrinking desktop

### <768px
- 4-column interpretation
- page gutter minimum 24px
- splits stack into reading order
- long-form measure becomes fluid
- no hover-only affordances
- no tiny over-image hotspots
- headline scale resolves through clamp()

## 10. Components

Approved families:
- Masthead
- Editorial Cover / Hero
- Feature Split
- Article / Project Grid
- Indexed Register
- Full-Bleed Image Passage
- Long-Form Reading Column
- Curatorial Pause
- Quote / Pull Statement
- Minimal Newsletter Field
- Footer Register

Do not proliferate card variants.

## 11. Accessibility

- Semantic HTML first
- Visible `:focus-visible`
- Minimum primary target around 44px
- Do not rely on color alone
- `prefers-reduced-motion` removes transitions/transforms
- JS failure must not hide content
- Images need meaningful alt text unless decorative
- Reading order must remain correct when desktop splits stack

## 12. Don'ts

- no glassmorphism
- no gradients
- no neon or saturated accents
- no heavy drop shadows
- no 3D UI
- no infinite ambient animation
- no bouncy/spring movement
- no excessive parallax
- no carousel autoplay
- no rounded-card dashboard language
- no oversized SaaS hero copy
- no giant pill buttons
- no decorative icon fields
- no animation-driven hierarchy

## 13. Paper Spectrum signature

Kinfolk provides the reference grammar; Paper Spectrum differentiates through:
- warm paper canvas instead of pure white as the dominant base
- blue-grey `Spectrum Wash` rather than sage as the tonal interruption
- Newsreader optical-serif voice
- slightly more visible material-paper relationship
- a dual-shell 1400/1280 geometry
- strong use of folio/index notation for editorial sequencing

The result should feel related in discipline, not derivative in identity.
