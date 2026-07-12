# Adonai Prophetic Deliverance & Healing Ministry — build notes

**Live URL:** https://adonai-prophetic-deliverance-healin.vercel.app
(⚠️ Vercel truncated the alias because the slug is long — the full-slug URL 404s; use the one above.)
**GitHub:** https://github.com/wdfdev58-hub/adonai-prophetic-deliverance-healing-ministry
**Built:** 2026-07-12 via `generate.py` (v1, template pipeline)

## Brand decisions
- **Palette:** `purple` — prophetic/royal character of the ministry.
- **Short wordmark:** "Adonai".
- **Hero:** "SET FREE, / MADE WHOLE" — deliverance + healing in one line.
- **Scripture:** Luke 4:18 ("…proclaim freedom for the prisoners and to set the oppressed free").
- **Moments heading:** "Set free, made whole".
- **Image theme:** "african worship prayer healing" (6/6 Pexels images fetched).

## Data gaps (from the brief — update when known)
- **City/town not on file** — site uses "Mpumalanga, South Africa" as the location and map query.
  When the town is known, replace `Mpumalanga` in `index.html` (title, meta, hero, visit section, map iframe).
- No address, service times, vision, colours, or logo on file — template defaults in place.
- Pastor phone **072 939 3553** wired into the "Call the church" `tel:` link.

## Phase 2 — refined 2026-07-12: **Void Editorial**
Auto-picked: a prophetic deliverance ministry is dramatic/atmospheric — the dark theatrical editorial fits.
- **Palette:** bg `#050505`, panel `#0A0A0A`, card `#111111`, accent `#FF4500`, hero warm-white `#FFE0E0`.
- **Type:** Playfair Display (hero + headings, italic accent words), Inter body (300/400), JetBrains Mono meta.
- **Signature:** glowing serif hero (masked line reveals + text-shadow glow) with three floating, slowly
  drifting atmospheric images (lg+ only); fixed animated film-grain overlay at 5.5%.
- **Also:** parallax-offset expect cards + gallery (`data-dir` alternating), pinned Luke 4:18 scripture kept,
  giant faded italic "Adonai" footer wordmark (24vw, white/5) with scroll rise, nav shrinks past 50px,
  sharp 2px-radius editorial buttons.
- All church copy, images, tel link, and map kept verbatim from v1. Reduced-motion fallback intact.
