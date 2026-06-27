// ============================================================================
// IMAGE PATHS — single source of truth for every photo used on the site.
//
// HOW TO ADD YOUR OWN PHOTOS:
// 1. Drop your real image file (.jpg / .png / .webp) into the matching
//    folder inside `public/images/` — e.g. public/images/rooms/deluxe-room.jpg
// 2. Update the matching path string below so the extension/name matches
//    your new file exactly (e.g. change ".svg" to ".jpg").
// 3. That's it — every page using that image updates automatically.
//
// Right now every path below points to an auto-generated placeholder .svg
// (a colored card with a label) so the site renders cleanly with no broken
// images. Swap in your file and update the path, and the placeholder
// disappears. See public/images/README.md for more detail.
// Recommended sizes are noted next to each entry.
// ============================================================================

export const images = {
  hero: {
    // Full-bleed background for the Home page hero and Epicure page hero.
    // Recommended: 1920x1080 or larger, landscape, well-lit restaurant/hotel shot.
    main: "/images/hero/hero-main.jpg",
  },

  about: {
    // Used in the Home "Our Story" 2x2 grid and Hotel "About" panel.
    // Recommended: 800x800 (square) for each.
    rooms: "/images/about/elegant-rooms.jpg",
    dining: "/images/about/fine-dining.jpg",
    bar: "/images/about/bar-lounge.jpg",
    location: "/images/about/prime-location.jpg",
  },

  rooms: {
    // Used on the Hotel page room cards.
    // Recommended: 800x600 (4:3), one clear photo per room type.
    standard: "/images/rooms/standard-room.jpg",
    deluxe: "/images/rooms/deluxe-room.jpg",
    suite: "/images/rooms/suite.jpg",
  },

  food: {
    // Used on the Epicure "Chef's Specialties" cards.
    // Recommended: 800x600 (4:3), close-up plated shots.
    dalMakhani: "/images/food/dal-makhani.jpg",
    butterChicken: "/images/food/butter-chicken.jpg",
    sarsonDaSaag: "/images/food/sarson-da-saag.jpg",
    tandooriPlatter: "/images/food/tandoori-platter.jpg",
    pindiChole: "/images/food/pindi-chole.jpg",
    epicureThali: "/images/food/epicure-thali.jpg",
  },

  bar: {
    // Used on the Epicure "Bar & Lounge" section.
    // Recommended: 1200x800, ambient bar/cocktail shot.
    lounge: "/images/bar/lounge.jpg",
  },

  gallery: {
    // Used on the Gallery page grid + lightbox. Keys match `galleryData.js` items.
    // Recommended: 1000x750 minimum, mixed orientations look fine in the grid.
    restaurantInterior: "/images/gallery/restaurant-interior.jpg",
    dalMakhani: "/images/gallery/dal-makhani.jpg",
    tandooriPlatter: "/images/gallery/tandoori-platter.jpg",
    deluxeRoom: "/images/gallery/deluxe-room.jpg",
    epicureBar: "/images/gallery/epicure-bar.jpg",
    epicureThali: "/images/gallery/epicure-thali.jpg",
    lobbyReception: "/images/gallery/lobby-reception.jpg",
    privateDining: "/images/gallery/private-dining.jpg",
    butterChicken: "/images/gallery/butter-chicken.jpg",
    cocktailHour: "/images/gallery/cocktail-hour.jpg",
    commonArea: "/images/gallery/common-area.jpg",
    festiveDecor: "/images/gallery/festive-decor.jpg",
  },
};

export default images;
