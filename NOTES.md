# Adonai Prophetic Deliverance & Healing Ministry — build notes

**Live URL:** https://adonai-prophetic-deliverance-healing-ministry.wdf.church
(Served from /home/wdf-websites — the full slug is the subdomain, nothing is truncated.)
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

## Phase 2 — refined 2026-07-12: **Void Editorial** (superseded 2026-07-23, see below)
Auto-picked: a prophetic deliverance ministry is dramatic/atmospheric — the dark theatrical editorial fits.
- **Palette:** bg `#050505`, panel `#0A0A0A`, card `#111111`, accent `#FF4500`, hero warm-white `#FFE0E0`.
- **Type:** Playfair Display (hero + headings, italic accent words), Inter body (300/400), JetBrains Mono meta.
- **Signature:** glowing serif hero (masked line reveals + text-shadow glow) with three floating, slowly
  drifting atmospheric images (lg+ only); fixed animated film-grain overlay at 5.5%.
- **Also:** parallax-offset expect cards + gallery (`data-dir` alternating), pinned Luke 4:18 scripture kept,
  giant faded italic "Adonai" footer wordmark (24vw, white/5) with scroll rise, nav shrinks past 50px,
  sharp 2px-radius editorial buttons.
- All church copy, images, tel link, and map kept verbatim from v1. Reduced-motion fallback intact.

## Phase 3 — rebuilt 2026-07-23: exact match to the client's Lovable site
Client already has a live site at **adonaipropheticdeliverance.lovable.app** and asked for this WDF build to
look **identical** to it — not a fresh design pass. The whole "Void Editorial" direction above was replaced.
Client sent 4 screenshots of the Lovable site (hero, vision/mission, pastor, contact/footer); content and
palette were reverse-engineered pixel-by-pixel from those (`convert -format "%[pixel:p{x,y}]"` sampling for
exact colours, cropped the logo crest and pastor photo directly out of the screenshots into `assets/img/`).

- **Structure now matches Lovable's nav exactly:** Vision → Mission → Pastor → Contact (one page, 4 anchors),
  no address/service-times/ministries sections since the Lovable reference has none — **do not invent them**.
- **Palette (sampled from screenshots):** hero/gradient purple `#2B0064` → mid `#4B4AC0` → blue `#3A7DDB`
  (vertical); contact/CTA gradient `#2B0064` → `#33208F` → `#2E3AA0` (diagonal); light section bg `#F6F6FD`;
  purple accent text `#5E3A9C`; gold `#F5D77C` → `#C6892A`; footer black `#0B061D`.
  Tokens live in the Tailwind config block in `index.html` + `:root` in `css/style.css`.
- **Type:** Playfair Display (serif headings/quotes), Inter (nav/body/labels) — no mono font this time.
- **Real assets pulled from the Lovable screenshots:** `assets/img/logo.png` (the ministry crest — cropped
  from the hero screenshot) and `assets/img/pastor.jpg` (Pastor Mashele's actual photo — cropped from the
  pastor screenshot). These are the church's real branding, not stock photography — do not replace with Pexels.
- **Real contact info from the Lovable site** (not the original brief's phone number): **+27 15 023 2043**
  and **info@adonaiministry.org**. The old NOTES-recorded phone `072 939 3553` is no longer used anywhere.
- **No entrance/scroll animation** — deliberately dropped a GSAP fade-in-on-scroll pass after screenshotting it
  mid-transition looked like it could read as "broken" vs. the static reference; client's ask was fidelity over
  the usual WDF motion signature, so the page now renders its final state immediately. `js/main.js` only
  handles nav scroll state + the mobile hamburger menu.
- Verified with Playwright (desktop 1600px + mobile 390px) against the live URL — layout, gradients, and
  copy all matched the reference screenshots; no console errors; mobile menu opens/closes correctly.
- If the client sends more Lovable screenshots later (e.g. they add sections), extend this same structure
  rather than reintroducing the old editorial direction.
