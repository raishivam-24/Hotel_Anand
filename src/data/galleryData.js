import { images } from "./images";

// Gallery data — each item has a category for filtering, a gradient fallback
// (color1/color2) shown only if the image fails to load, and an emoji icon
// shown only when there's no image at all.
export const galleryItems = [
  { cat: "Restaurant", label: "Epicure Dining Hall", sub: "Elegant interiors with warm lighting", color1: "#4A0E1A", color2: "#2E0810", emoji: "🍽️", img: images.gallery.restaurantInterior },
  { cat: "Food", label: "Dal Makhani", sub: "8-hour slow cooked signature dish", color1: "#8B4513", color2: "#5C2A00", emoji: "🫕", img: images.gallery.dalMakhani },
  { cat: "Food", label: "Tandoori Platter", sub: "Fresh from our clay tandoor", color1: "#7B1A1A", color2: "#4A0000", emoji: "🔥", img: images.gallery.tandooriPlatter },
  { cat: "Hotel", label: "Deluxe Room", sub: "Comfort meets classic elegance", color1: "#2C4A6E", color2: "#1A2E45", emoji: "🛏️", img: images.gallery.deluxeRoom },
  { cat: "Bar", label: "Epicure Bar", sub: "Premium spirits & signature cocktails", color1: "#1C1C1C", color2: "#0E0E0E", emoji: "🍹", img: images.gallery.epicureBar },
  { cat: "Food", label: "Epicure Thali", sub: "Complete Punjabi feast", color1: "#C9A84C", color2: "#8B6914", emoji: "🥘", img: images.gallery.epicureThali },
  { cat: "Hotel", label: "Lobby & Reception", sub: "A warm welcome awaits", color1: "#3A2515", color2: "#1C1008", emoji: "🏛️", img: images.gallery.lobbyReception },
  { cat: "Restaurant", label: "Private Dining", sub: "Intimate space for special occasions", color1: "#4A1A2E", color2: "#2E0818", emoji: "🕯️", img: images.gallery.privateDining },
  { cat: "Food", label: "Butter Chicken", sub: "Our most-loved North Indian classic", color1: "#C4600A", color2: "#7A3200", emoji: "🍗", img: images.gallery.butterChicken },
  { cat: "Bar", label: "Cocktail Hour", sub: "Handcrafted drinks by our mixologist", color1: "#1A3A2E", color2: "#0A1E18", emoji: "🥂", img: images.gallery.cocktailHour },
  { cat: "Hotel", label: "Common Area", sub: "A relaxed space to unwind", color1: "#2E2E4A", color2: "#1A1A2E", emoji: "🛋️", img: images.gallery.commonArea },
  { cat: "Restaurant", label: "Festive Decor", sub: "Special setups for every celebration", color1: "#4A3A1A", color2: "#2E2200", emoji: "✨", img: images.gallery.festiveDecor },
];

export const galleryFilters = ["All", "Restaurant", "Food", "Hotel", "Bar"];

export default galleryItems;
