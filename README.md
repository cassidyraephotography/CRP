# Cassidy Rae Photography

A single-page photography website built with semantic HTML, modern CSS, and browser-native JavaScript. It has no build step or runtime dependencies, so it can be hosted on any static web host.

## Run locally

From the project root, start a local server:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Page and assets

- `/` — one continuous page with photography services, three portrait packages, and an inquiry form at the bottom.
- `images/gallery/` — locally stored photographs copied from the previous portfolio; selected images illustrate the packages.
- The hero collage is overlaid with 26 portfolio-photo polaroids that glide in from above at varied angles and settle into an overlapping pile. All cards show photos; none flip or land blank-side-up. The sequence replays after the collage leaves and re-enters view; reduced-motion preferences show the cards without animation.
- The visual theme uses one continuous warm off-white cold-pressed watercolor-paper texture, soft calligraphic headings, and spaced small-size serif copy.
- `images/gallery.json` — retained collection data for the full set of migrated portfolio photographs.
- `/home`, `/gallery-1`, `/portrait-session-pricing`, `/gallery/`, and `/pricing/` — compatibility redirects to the matching section of the single page.

The inquiry form is intentionally not connected to a submission service. Visitors are told that their information will not be sent and are directed to the existing Instagram profile. Connect the form to a chosen email or form endpoint before representing it as a live contact form.

## Deployment

Upload the project files and `images/` directory to a static host. Configure the domain and HTTPS through that host; no Zenfolio account or server-side application is required.
