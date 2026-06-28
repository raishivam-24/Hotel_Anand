import ImageBox from "../components/ImageBox";

const sections = [
  // {
  //   id: "lobby",
  //   eyebrow: "First Impressions",
  //   title: "Grand Lobby",
  //   desc: "Walk into elegance. Our spacious lobby welcomes you with warm lighting, comfortable seating and our always-ready front desk team. The lobby is a serene space designed to make you feel at home from the very first moment.",
  //   photos: [
  //     { src: "/images/hotel/lobby-main.jpg", label: "Lobby Main", emoji: "🏛️" },
  //     { src: "/images/hotel/lobby-seating.jpg", label: "Lobby Seating", emoji: "🛋️" },
  //     { src: "/images/hotel/lobby-entrance.jpg", label: "Entrance", emoji: "🚪" },
  //   ],
  //   features: ["24-Hour staffed lobby", "Comfortable seating area", "Luggage storage", "Concierge service", "Wi-Fi throughout", "Air-conditioned"],
  //   bg: "#FAF7F2",
  // },
  {
    id: "reception",
    eyebrow: "Guest Services",
    title: "Reception & Front Desk",
    desc: "Our trained reception team is at your service 24 hours a day. From check-in to check-out, room requests to city guidance — we are always just a call or a walk away.",
    photos: [
      { src: "/images/hotel/reception-main.jpg", label: "Reception Desk", emoji: "🛎️" },
      { src: "/images/hotel/reception-counter.jpg", label: "Front Desk", emoji: "📋" },
    ],
    features: ["24/7 front desk", "Multilingual staff", "Local tour assistance", "Cab & transport booking", "Currency exchange help", "Wake-up call service"],
    bg: "#F0EBE0",
    reverse: true,
  },
  {
    id: "common",
    eyebrow: "Shared Spaces",
    title: "Common Areas",
    desc: "Our thoughtfully designed common areas provide a comfortable space to relax, work, or catch up with fellow travellers. With Wi-Fi, seating and a calm atmosphere, it's a space you'll love spending time in.",
    photos: [
      { src: "/images/hotel/common-lift.jpg", label: "Elevator", emoji: "🛗" },
      { src: "/images/hotel/common-seatingarea.jpg", label: "Seating Area", emoji: "🚶" },
      { src: "/images/hotel/common-area.jpg", label: "Common Lounge", emoji: "☕" },
    ],
    features: ["Spacious corridors", "Elevator access", "Lounge seating", "Reading nook", "TV / entertainment area", "Free Wi-Fi zones"],
    bg: "#FAF7F2",
  },
  {
    id: "parking",
    eyebrow: "Vehicle Safety",
    title: "Parking Area",
    desc: "Park with peace of mind. Our dedicated parking area is monitored 24 hours with security coverage. With ample space for cars and two-wheelers, you never have to worry about finding parking.",
    photos: [
      { src: "/images/hotel/parking-main.jpg", label: "Parking Area", emoji: "🅿️" },
      { src: "/images/hotel/parking-entrance.jpg", label: "Parking Entrance", emoji: "🚗" },
    ],
    features: ["Free parking for guests", "24-hour CCTV monitoring", "Covered & open parking", "Security guard on duty", "2-wheeler & 4-wheeler space", "Easy hotel access"],
    bg: "#F0EBE0",
    reverse: true,
  },
];

const allAmenities = [
  { icon: "📶", label: "Free High-Speed Wi-Fi" },
  { icon: "❄️", label: "Central AC" },
  { icon: "🔒", label: "24hr Security & CCTV" },
  { icon: "🅿️", label: "Free Parking" },
  { icon: "🛗", label: "Elevator Access" },
  { icon: "💡", label: "Power Backup" },
  { icon: "🧹", label: "Daily Housekeeping" },
  { icon: "🛎️", label: "24hr Room Service" },
  { icon: "📺", label: "Cable TV" },
  { icon: "🍳", label: "In-House Dining" },
  { icon: "🧴", label: "Premium Toiletries" },
  { icon: "🚗", label: "Airport Transfers" },
  { icon: "📞", label: "24hr Front Desk" },
  { icon: "🔥", label: "Hot Water 24hr" },
  { icon: "👔", label: "Laundry Service" },
  { icon: "🎉", label: "Event Hall" },
];

export default function Amenities() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #060E1A 0%, #122040 100%)",
        padding: "9rem 2rem 5rem", textAlign: "center",
        minHeight: "45vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "18px 18px" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow">Hotel Facilities</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#FAF7F2", fontWeight: 700 }}>Amenities</h1>
          <div className="gold-line center" />
          <p style={{ color: "rgba(250,247,242,0.6)", fontSize: "0.92rem", maxWidth: 480, margin: "0 auto" }}>
            Everything you need for a perfect stay — all under one roof
          </p>
        </div>
      </section>

      {/* All Amenities Grid */}
      <section style={{ background: "#0A1628", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="eyebrow">At a Glance</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#FAF7F2" }}>All Included Amenities</h2>
            <div className="gold-line center" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: "1rem" }}>
            {allAmenities.map(a => (
              <div key={a.label} style={{
                padding: "1.4rem 1rem", textAlign: "center",
                border: "1px solid rgba(201,168,76,0.1)", transition: "all 0.3s"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"; e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{a.icon}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(250,247,242,0.7)", lineHeight: 1.4 }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {sections.map((sec, i) => (
        <section key={sec.id} style={{ background: sec.bg, padding: "5rem 2rem" }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: sec.reverse ? "1fr 1.3fr" : "1.3fr 1fr",
            gap: "4rem", alignItems: "center"
          }} className="full-mobile">

            {/* Photos */}
            <div style={{ order: sec.reverse ? 1 : 0 }}>
              <div style={{ display: "grid", gridTemplateColumns: sec.photos.length === 3 ? "1fr 1fr" : "1fr 1fr", gap: "0.7rem" }}>
                {sec.photos.length === 3 ? (
                  <>
                    <div style={{ gridRow: "span 2" }}>
                      <ImageBox src={sec.photos[0].src} emoji={sec.photos[0].emoji} label={sec.photos[0].label} aspectRatio="3/4" />
                    </div>
                    <ImageBox src={sec.photos[1].src} emoji={sec.photos[1].emoji} label={sec.photos[1].label} aspectRatio="4/3" />
                    <ImageBox src={sec.photos[2].src} emoji={sec.photos[2].emoji} label={sec.photos[2].label} aspectRatio="4/3" />
                  </>
                ) : (
                  sec.photos.map((p, pi) => (
                    <ImageBox key={pi} src={p.src} emoji={p.emoji} label={p.label} aspectRatio="4/3" />
                  ))
                )}
              </div>
            </div>

            {/* Info */}
            <div style={{ order: sec.reverse ? 0 : 1 }}>
              <span className="eyebrow">{sec.eyebrow}</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#0A1628", lineHeight: 1.2, marginBottom: "0.4rem" }}>{sec.title}</h2>
              <div className="gold-line" />
              <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#666", margin: "1rem 0 1.5rem" }}>{sec.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                {sec.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "#555" }}>
                    <span style={{ color: "#C9A84C", fontSize: "0.65rem", flexShrink: 0 }}>✦</span>{f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <style>{`@media(max-width:768px){.full-mobile{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </div>
  );
}
