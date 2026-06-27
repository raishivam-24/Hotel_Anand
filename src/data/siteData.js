// Global site information shared across multiple pages
// (Navbar, Footer, Contact page, CTA sections, etc.)

export const siteInfo = {
  name: "Hotel Anand",
  tagline: "& Epicure Restaurant",
  phone: "+91 78699 62000",
  phoneHref: "tel:+917869962000",
  instagramHandle: "@epicure_bypunjabirestaurant",
  instagramUrl: "https://www.instagram.com/epicure_bypunjabirestaurant",
  address: {
    line1: "Central Point, Old Bus Stand Road",
    line2: "Bilaspur, Chhattisgarh — India",
  },
  mapsUrl: "https://maps.google.com/?q=Hotel+Anand+Bilaspur+Chhattisgarh",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/hotel", label: "Hotel" },
  { to: "/epicure", label: "Epicure" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const footerQuickLinks = [
  { to: "/hotel", label: "Hotel Rooms & Suites" },
  { to: "/epicure", label: "Epicure Restaurant" },
  { to: "/epicure", label: "Bar & Lounge" },
  { to: "/menu", label: "Our Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export const openingHours = [
  { label: "Restaurant", time: "11:00 AM – 11:00 PM" },
  { label: "Bar & Lounge", time: "12:00 PM – 11:30 PM" },
  { label: "Hotel Front Desk", time: "Open 24 Hours" },
  { label: "Room Service", time: "7:00 AM – 11:00 PM" },
];

export const contactDetails = [
  { icon: "📍", title: "Address", lines: ["Central Point, Old Bus Stand Road", "Bilaspur, Chhattisgarh — India"] },
  { icon: "📞", title: "Phone", lines: ["+91 78699 62000"], link: "tel:+917869962000" },
  { icon: "📸", title: "Instagram", lines: ["@epicure_bypunjabirestaurant"], link: "https://www.instagram.com/epicure_bypunjabirestaurant" },
  { icon: "⏰", title: "Restaurant Hours", lines: ["11:00 AM – 11:00 PM (All Days)"] },
  { icon: "🏨", title: "Hotel Front Desk", lines: ["Open 24 Hours · 7 Days a Week"] },
  { icon: "🍹", title: "Bar & Lounge", lines: ["12:00 PM – 11:30 PM"] },
];
