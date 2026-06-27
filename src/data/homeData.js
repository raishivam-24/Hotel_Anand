import { images } from "./images";

export const heroContent = {
  eyebrow: "Welcome to",
  title: "Hotel Anand",
  subtitle: "& Epicure by Punjabi Restaurant",
  description:
    "At the heart of Bilaspur — where timeless hospitality meets the art of Punjabi culinary tradition",
};

export const features = [
  { icon: "🏨", title: "Premium Rooms", desc: "Thoughtfully designed rooms with modern amenities and traditional warmth" },
  { icon: "🍽️", title: "Epicure Restaurant", desc: "Authentic Punjabi cuisine and multi-cuisine dining in an elegant setting" },
  { icon: "🍹", title: "Bar & Lounge", desc: "Curated cocktails, fine spirits and a sophisticated lounge ambiance" },
  { icon: "🎪", title: "Event Spaces", desc: "Host your celebrations in our beautifully appointed event halls" },
];

export const highlights = [
  { number: "15+", label: "Years of Legacy" },
  { number: "50+", label: "Premium Rooms" },
  { number: "200+", label: "Menu Items" },
  { number: "10K+", label: "Happy Guests" },
];

export const aboutCards = [
  { bg: "#4A0E1A", label: "Elegant Rooms", sub: "Modern comfort, traditional charm", img: images.about.rooms },
  { bg: "#C9A84C", label: "Fine Dining", sub: "Epicure by Punjabi Restaurant", img: images.about.dining },
  { bg: "#8B9E7A", label: "Bar & Lounge", sub: "Premium spirits & cocktails", img: images.about.bar },
  { bg: "#1C1C1C", label: "Prime Location", sub: "Central Point, Bilaspur", img: images.about.location },
];

export const testimonials = [
  { name: "Rahul S.", role: "Business Traveller", text: "The perfect base in Bilaspur. Clean rooms, fantastic service and the restaurant food is extraordinary — the dal makhani is the best I've had!", stars: 5 },
  { name: "Priya M.", role: "Family Vacation", text: "Epicure's ambience is beautiful and the Punjabi thali is a must-try. The staff treated us like family. Will definitely return!", stars: 5 },
  { name: "Amit K.", role: "Weekend Getaway", text: "The bar is well-stocked and the cocktails are creative. Great location right in the city center. Highly recommended!", stars: 5 },
];
