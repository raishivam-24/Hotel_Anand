import { images } from "./images";

export const rooms = [
  {
    title: "Standard Non-AC Room",
    price: "₹669",
    suffix: "/ night onwards",
    color: "#4A0E1A",
    img: images.rooms.standard,
    size: "180 sq.ft (17 sq.mt)",
    beds: "1 Double Bed",
    maxGuests: "Max 3 Guests",
    amenities: ["Daily Housekeeping", "24-hour Room Service", "Laundry Service", "Smoking Room", "Wi-Fi", "Attached Bathroom"],
    highlight: "24hrs checkout · Free cancellation till 24hrs before check-in",
    ratePlans: [
      { label: "Breakfast Only", price: "₹669", strikePrice: "₹1,150" },
      { label: "Breakfast + Lunch/Dinner", price: "₹1,003", strikePrice: "₹1,725" },
    ],
  },
  {
    title: "Deluxe Room",
    price: "₹2,299",
    suffix: "/ night",
    color: "#C9A84C",
    img: images.rooms.deluxe,
    amenities: ["King Bed", "AC & Heating", "Smart TV", "Mini Fridge", "Bathtub", "Complimentary Breakfast"],
    highlight: "Our most popular choice — enhanced comfort",
    badge: "Most Popular",
  },
];

export const hotelAmenities = [
  { icon: "🛜", label: "High-Speed Wi-Fi" },
  { icon: "🅿️", label: "Free Parking" },
  { icon: "🍽️", label: "In-House Restaurant" },
  { icon: "🍹", label: "Bar & Lounge" },
  { icon: "📺", label: "Cable TV" },
  { icon: "❄️", label: "Central AC" },
  { icon: "🧹", label: "Daily Housekeeping" },
  { icon: "🔒", label: "24hr Security" },
  { icon: "📞", label: "24hr Front Desk" },
  { icon: "🚐", label: "Airport Transfers" },
  { icon: "🏪", label: "City Center Location" },
  { icon: "💆", label: "Event Spaces" },
];

export const aboutHotelStats = [
  ["📍", "Prime Location", "Central Point, Old Bus Stand Rd"],
  ["🏨", "50+ Rooms", "Standard, Deluxe & Suites"],
  ["⭐", "Top Rated", "Trusted by thousands of guests"],
  ["📞", "24/7 Support", "Always here for you"],
];
