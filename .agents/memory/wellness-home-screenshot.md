---
name: Home min-h-screen hero blocks below-fold screenshots
description: Why app_preview screenshots can't show lower Home sections on wellness-site, and how to verify them
---

The `wellness-site` Home hero section uses `min-h-screen`, so it always stretches to fill whatever viewport height you request in the `app_preview` screenshot tool. The screenshot is top-anchored (captures from the top down for the given viewport height), so any section below the hero (partners grid, contact CTA, etc.) is always pushed past the captured region — increasing the viewport height just makes the hero taller too.

**How to apply:** To verify below-fold Home content, don't rely on screenshots. Instead:
- `curl` asset URLs through the proxy (`http://localhost:80/<file>`) to confirm images return `200 image/*`.
- Reason about the markup directly, or check an equivalent component on another page whose first section is NOT `min-h-screen` (e.g. `/projetos` header is plain `pt-28 pb-14`, so it screenshots fully).
