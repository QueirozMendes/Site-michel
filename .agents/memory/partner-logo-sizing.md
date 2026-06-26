---
name: Partner logo sizing
description: How to make mixed-aspect-ratio partner logos look uniform in the wellness-site logo grids
---

In the wellness-site partner grids (Home `lg:grid-cols-7`, Parcerias 2-col), logos are sized by `max-h-*` + `max-w-%` with `object-contain`. Square/seal and tall logos (Six seal, Instituto Aguilera) look much smaller than wide wordmarks (Technogym, Tryex...) at the same `max-h`, because a wordmark's "ink" fills its bounding-box height while a circular/tall mark does not.

**Rule:** give square/tall logos a larger `max-h` than the wide wordmarks (boost via `p.src.includes("partner-six") || p.src.includes("partner-aguilera")` conditional), and trim transparent padding from any source PNG that has it (`magick X.png -trim +repage X.png`).

**Why:** the client asked for all logos at "the size standard of Technogym" — visual parity is judged by perceived mark size, not bounding-box height. Square logos need ~1.5x the max-h of wordmarks to read as equal weight.

**How to apply:** when adding a new partner logo, check `magick X.png -format "trimbox=%@" info:` for internal padding, and if the mark is square/tall give it the larger max-h class in both grids.
