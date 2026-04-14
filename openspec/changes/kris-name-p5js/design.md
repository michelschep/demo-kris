## Context

A static p5.js website with a single page that displays the name "Kris" using the p5.js graphics library. The site has no backend — it is pure HTML/CSS/JavaScript served statically.

## Goals / Non-Goals

**Goals:**
- Display the text "Kris" centered on the canvas using red and blue colors
- Use p5.js for rendering
- Serve as a valid static site (works via `npx serve .`)

**Non-Goals:**
- No interactivity beyond visual presentation
- No backend or build toolchain
- No animations (unless trivially simple)

## Decisions

**p5.js via CDN**
Using the p5.js CDN in `index.html` avoids any npm/build setup. Rationale: simplest possible delivery for a static site; no bundler needed.

**Color split: red left, blue right**
The letter "Kris" will be drawn in two halves — the left side in red (`#E63946`) and the right side in blue (`#457B9D`) — by drawing the text twice, each clipped to its half using `drawingContext`. Alternative considered: single color per letter; rejected as less visually interesting.

**Canvas full-screen**
Canvas fills the browser window using `windowWidth` / `windowHeight`, centered text with `textAlign(CENTER, CENTER)`.

## Risks / Trade-offs

- [Canvas text clipping] p5.js `drawingContext` clipping can be fragile across browsers → Mitigation: test in Chrome and Firefox; fallback is two differently-colored text layers offset to simulate split.
- [Font rendering] Default system fonts vary → Mitigation: use a web-safe bold font (e.g., `'Georgia'` or load a Google Font via `<link>`).
