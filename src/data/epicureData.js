import { images } from "./images";

export const philosophyPoints = [
  { icon: "🌿", title: "Fresh & Local", desc: "We source fresh vegetables and spices from local Chhattisgarh markets daily" },
  { icon: "🔥", title: "Tandoor Mastery", desc: "Our clay tandoor has been seasoned over years to give that distinctive smoky char" },
  { icon: "⏳", title: "Slow Cooked", desc: "Signature gravies simmer for hours — no shortcuts, only depth of flavour" },
  { icon: "👨‍🍳", title: "Trained Chefs", desc: "Our kitchen team is trained in authentic North Indian culinary traditions" },
];

export const specialties = [
  { name: "Dal Makhani", origin: "Punjab", desc: "Slow-cooked black lentils in rich tomato butter sauce — simmered for 8 hours", veg: true, img: images.food.dalMakhani },
  { name: "Butter Chicken", origin: "Punjab", desc: "Tender chicken in aromatic tomato-based gravy with house-ground spices", veg: false, img: images.food.butterChicken },
  { name: "Sarson Da Saag", origin: "Haryana/Punjab", desc: "Seasonal mustard greens with makki di roti — a winter classic", veg: true, img: images.food.sarsonDaSaag },
  { name: "Tandoori Platter", origin: "Epicure Special", desc: "Mixed kebab platter with seekh, tikka, and malai kebab from our clay oven", veg: false, img: images.food.tandooriPlatter },
  { name: "Pindi Chole", origin: "Rawalpindi", desc: "Bold, earthy chickpeas slow-cooked in whole spices and tamarind", veg: true, img: images.food.pindiChole },
  { name: "Epicure Thali", origin: "Our Signature", desc: "Complete Punjabi meal — daal, paneer, roti, rice, dessert and more", veg: true, img: images.food.epicureThali },
];

export const barOfferings = [
  { cat: "Signature Cocktails", items: ["Bilaspur Sling", "Punjabi Mule", "Gold Rush", "Tamarind Sour", "Royal Sunset"] },
  { cat: "Imported Spirits", items: ["Single Malt Scotch", "Bourbon Whiskey", "Premium Gin", "Tequila Selections", "Vodka Collection"] },
  { cat: "Domestic Favourites", items: ["Royal Stag", "Blenders Pride", "Old Monk", "Imperial Blue", "Kingfisher Premium"] },
  { cat: "Non-Alcoholic", items: ["Virgin Mojito", "Lassi Bar", "Fresh Juices", "Mocktail Menu", "Masala Chai"] },
];
