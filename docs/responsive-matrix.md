# Paper Spectrum — Responsive Matrix

| Parameter | Mobile <768 | Tablet 768–1023 | Desktop ≥1024 |
|---|---:|---:|---:|
| Grid columns | 4 | 8 | 12 |
| Page gutter | 24px min | clamp(24–40px) | clamp(40–60px) |
| Grid gap | 20px | 20px | 20px |
| Reading width | fluid | ≤680px | ≤680px |
| Standard section padding | 60px | 80px | 80px |
| Major section padding | 80px | 120px | 120px |
| Curatorial pause | 120px | 120–170px | 170–200px |
| Article grid | 1 col | 2 col | 4 col |
| Split sections | stacked | 3/5 or 4/4 | 5/7, 7/5, 4/8, 8/4 |
| Display title | ~42px | fluid | ≤60px |
| Hover dependency | none | none | enhancement only |
| Image hotspot controls | avoid | avoid unless large | allowed only if nonessential |

## Behavioral rules

### Mobile
- Recompose, do not squeeze desktop.
- Preserve order and whitespace.
- Keep touch targets ≈44px minimum.
- Avoid overlays requiring precision tapping.
- Do not introduce horizontal scrolling unless the component is explicitly a native browse rail.

### Tablet
- Treat as its own composition if split geometry becomes cramped.
- Avoid sudden geometry changes at exactly 768/1024 by using fluid gutters and type clamps.

### Desktop
- Use the 12-column grid as invisible architecture.
- Maintain deliberate asymmetry.
- Do not fill empty columns merely because space exists.
