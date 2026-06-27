# Images Folder

This folder holds every photo used across the Hotel Anand site, organized by section:

```
public/images/
├── hero/      → homepage hero background
├── about/     → 4 "Our Story" cards on Home
├── rooms/     → Standard / Deluxe / Suite cards on Hotel page
├── food/      → Chef's Specialties cards on Epicure page
├── bar/       → Bar & Lounge section on Epicure page
└── gallery/   → 12 photos on the Gallery page
```

## Current state

Every image right now is an **auto-generated placeholder** — a colored
card with a text label (e.g. "Deluxe Room") — so the site looks complete
and nothing shows a broken-image icon. None of these are real photos yet.

## How to add your real photos

1. Take/collect your photo (see recommended sizes in `src/data/images.js`
   — e.g. room photos look best around 800×600).
2. Save it into the matching folder above, e.g.:
   ```
   public/images/rooms/deluxe-room.jpg
   ```
3. Open `src/data/images.js` and update that one path to match your new
   filename, e.g.:
   ```js
   deluxe: "/images/rooms/deluxe-room.jpg",   // was .svg
   ```
4. Save — the placeholder is now replaced everywhere that image is used,
   with zero other code changes needed.

That's the entire workflow: **one file (`src/data/images.js`) controls
every photo on the whole site.** You never need to touch the page
components (Home.jsx, Hotel.jsx, etc.) to change a photo.

## Tips

- Keep file names lowercase with hyphens (`deluxe-room.jpg`, not `Deluxe Room.JPG`).
- JPG is best for photos (smaller file size); PNG only if you need transparency.
- Compress photos before adding them (e.g. with squoosh.app) so the site stays fast.
- You can delete the placeholder `.svg` once you've added the real photo,
  or just leave it — only the path in `images.js` matters.
