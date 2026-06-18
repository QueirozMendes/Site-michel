---
name: Fixed overlays inside blurred/transformed ancestors break
description: Why a fixed full-screen menu/overlay must be portaled to body, not nested in a header that uses backdrop-blur/transform
---

A `position: fixed` element is positioned relative to the nearest ancestor that has
`transform`, `filter`, `backdrop-filter`, `perspective`, or `will-change` — NOT the
viewport. Such an ancestor establishes a new containing block.

**Symptom seen here:** the mobile nav overlay (`fixed inset-0`) lived inside the
`<header>`. The header only gets `backdrop-blur-md` once scrolled. So the overlay
worked at the top of the page but collapsed to the header's small box after any
scroll — appeared "broken / blank" everywhere except scrollTop=0.

**Rule / How to apply:** Render any full-screen fixed overlay (mobile menu, modal,
drawer) via `createPortal(..., document.body)` so no blurred/transformed header can
become its containing block. Also lock `document.body.style.overflow = "hidden"`
while open to stop background scroll, and close the menu on route change.
