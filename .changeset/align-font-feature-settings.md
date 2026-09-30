---
"@shopwell-ag/meteor-component-library": patch
---

Align the global font feature settings with the brand guidelines. The `body` styles now only enable the Inter-specific features `ss01` and `cv11` instead of the previous `cv02`, `cv03`, `cv04`, `cv05`, `cv08`, `cv09` and `cv10` set, which changes the shape of some glyphs.

`cv10` is deliberately not enabled. In Inter it only adds a spur to the uppercase `G`, but Apple's PingFang — which renders Han glyphs whenever Inter has no CJK coverage — defines `cv10` as its traditional-Chinese variant selector. Enabling it made Chinese text render in traditional forms on macOS. Only enable features that exist in Inter alone and keep `cv08`, `cv09` and `cv10` out of this list.
