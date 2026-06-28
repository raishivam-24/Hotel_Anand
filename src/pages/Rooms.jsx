import ImageBox from "../components/ImageBox";

const rooms = [
  {
    type: "Standard Room",
    price: "₹1,499", tax: "per night + taxes",
    tag: "Value Stay", color: "#0A1628",
    emoji: "🛏️",
    photos: [
      { src: "/images/rooms/standard-room.jpg", label: "Standard Room", emoji: "🛏️" },
      { src: "/images/rooms/standard-washroom.jpg", label: "Washroom", emoji: "🚿" },
    ],
    amenities: ["AC Room", "Single / Double Bed", "Hot & Cold Water", "Cable TV", "Wi-Fi", "Daily Housekeeping", "Room Service", "Power Backup"],
    desc: "Our Standard Rooms offer a clean, comfortable stay with all essential amenities. Perfect for solo travellers and short business stays.",
    maxGuests: 2, size: "220 sq ft",
  },
  {
    type: "Deluxe Room",
    price: "₹2,299", tax: "per night + taxes",
    tag: "Most Popular", color: "#C9A84C", textColor: "#0A1628",
    emoji: "🏨", badge: true,
    photos: [
      { src: "/images/rooms/deluxe-room.jpg", label: "Deluxe Room", emoji: "🏨" },
      { src: "/images/rooms/deluxe-washroom.jpg", label: "Deluxe Bathroom", emoji: "🛁" },
    ],
    amenities: ["King-Size Bed", "AC & Heating", "Smart TV", "Mini Fridge", "Premium Toiletries", "Bathtub / Shower", "Complimentary Breakfast", "Power Backup"],
    desc: "Our Deluxe Rooms are the ideal balance of comfort and value. Spacious interiors, plush bedding and a superior bathroom experience await you.",
    maxGuests: 3, size: "320 sq ft",
  },
  {
    type: "Premium Suite",
    price: "₹3,999", tax: "per night + taxes",
    tag: "Luxury", color: "#122040",
    emoji: "👑",
    photos: [
      { src: "/images/rooms/suite-bedroom.jpg", label: "Suite Bedroom", emoji: "👑" },
      { src: "/images/rooms/suite-living.jpg", label: "Living Area", emoji: "🛋️" },
      { src: "/images/rooms/suite-washroom.jpg", label: "Suite Bathroom", emoji: "🛁" },
    ],
    amenities: ["Master Bedroom", "Separate Living Area", "Premium Bar Setup", "Jacuzzi / Bathtub", "Butler Service", "Airport Transfer", "Complimentary Breakfast", "Loyalty Points"],
    desc: "The pinnacle of luxury at Hotel Anand. Our Premium Suites feature a separate living room, premium fixtures and personalised butler service.",
    maxGuests: 4, size: "580 sq ft",
  },
  {
    type: "Family Room",
    price: "₹2,799", tax: "per night + taxes",
    tag: "Family Friendly", color: "#1E3A5F",
    emoji: "👨‍👩‍👧‍👦",
    photos: [
      { src: "/images/rooms/family-room.jpg", label: "Family Room", emoji: "👨‍👩‍👧‍👦" },
      { src: "/images/rooms/family-washroom.jpg", label: "Family Bathroom", emoji: "🚿" },
    ],
    amenities: ["2 Double Beds", "Extra Bedding Available", "AC", "Smart TV", "Mini Fridge", "Hot & Cold Water", "Daily Housekeeping", "Complimentary Breakfast"],
    desc: "Designed for families, our Family Rooms offer generous space, two beds and all the comforts to make your family vacation truly memorable.",
    maxGuests: 5, size: "420 sq ft",
  },
];

export default function Rooms() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #060E1A 0%, #0A1628 50%, #122040 100%)",
        padding: "9rem 2rem 5rem", textAlign: "center",
        minHeight: "45vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow">Accommodation</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#FAF7F2", fontWeight: 700 }}>
            Rooms & Suites
          </h1>
          <div className="gold-line center" />
          <p style={{ color: "rgba(250,247,242,0.6)", fontSize: "0.92rem", maxWidth: 480, margin: "0 auto" }}>
            Every room designed for your comfort — choose the perfect stay for your needs and budget
          </p>
        </div>
      </section>

      {/* Price Summary Strip */}
      <section style={{ background: "#C9A84C", padding: "1.5rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap", alignItems: "center" }}>
          {rooms.map(r => (
            <div key={r.type} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "#0A1628" }}>{r.price}</div>
              <div style={{ fontSize: "0.68rem", color: "rgba(10,22,40,0.65)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{r.type}</div>
            </div>
          ))}
          <a href="tel:+917869962000" style={{
            padding: "0.65rem 1.8rem", background: "#0A1628", color: "#C9A84C",
            fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none"
          }}>📞 Book Now</a>
        </div>
      </section>

      {/* Rooms Detail */}
      <section style={{ background: "#FAF7F2", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {rooms.map((room, i) => (
            <div key={i} style={{
              background: "#FFFFFF", marginBottom: "3rem",
              boxShadow: "0 4px 30px rgba(0,0,0,0.07)",
              border: room.badge ? "2px solid #C9A84C" : "1px solid rgba(201,168,76,0.15)",
              position: "relative", overflow: "hidden"
            }}>
              {/* Badge */}
              {room.badge && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  background: "#C9A84C", textAlign: "center",
                  padding: "0.4rem", fontSize: "0.65rem", fontWeight: 700,
                  letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A1628", zIndex: 3
                }}>★ Most Popular Room</div>
              )}

              <div style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr",
                minHeight: 380
              }} className="full-mobile">

                {/* Photos side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: room.badge ? "1.8rem" : 0 }}>
                  {/* Main photo */}
                  <ImageBox
                    src={room.photos[0].src}
                    emoji={room.photos[0].emoji}
                    label={room.photos[0].label}
                    aspectRatio="16/9"
                    style={{ flex: 2 }}
                  />
                  {/* Secondary photos row */}
                  {room.photos.length > 1 && (
                    <div style={{ display: "flex", gap: "3px", flex: 1 }}>
                      {room.photos.slice(1).map((p, pi) => (
                        <ImageBox key={pi} src={p.src} emoji={p.emoji} label={p.label} aspectRatio="4/3" style={{ flex: 1 }} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Info side */}
                <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 1 : -1 }}>
                  <span className="eyebrow">{room.tag}</span>
                  <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.5rem,2.5vw,2.2rem)",
                    color: "#0A1628", marginBottom: "0.3rem"
                  }}>{room.type}</h2>
                  <div className="gold-line" />

                  {/* Price */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", margin: "0.5rem 0 1.2rem" }}>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C" }}>{room.price}</span>
                    <span style={{ fontSize: "0.78rem", color: "#999" }}>{room.tax}</span>
                  </div>

                  <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.8, marginBottom: "1.5rem" }}>{room.desc}</p>

                  {/* Quick info */}
                  <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                    <div style={{ fontSize: "0.78rem", color: "#888" }}>
                      <span style={{ color: "#C9A84C", marginRight: "0.3rem" }}>👥</span>Max {room.maxGuests} Guests
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#888" }}>
                      <span style={{ color: "#C9A84C", marginRight: "0.3rem" }}>📐</span>{room.size}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem", marginBottom: "2rem" }}>
                    {room.amenities.map(a => (
                      <div key={a} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", color: "#555" }}>
                        <span style={{ color: "#C9A84C", fontSize: "0.6rem" }}>✦</span>{a}
                      </div>
                    ))}
                  </div>

                  <a href="tel:+917869962000" className="btn-gold" style={{ textAlign: "center" }}>
                    Book This Room
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section style={{ background: "#0A1628", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="eyebrow">Hotel Policies</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem,3vw,2rem)", color: "#FAF7F2" }}>Good to Know</h2>
            <div className="gold-line center" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🕐", title: "Check-In", info: "12:00 PM onwards\nEarly check-in on request" },
              { icon: "🚪", title: "Check-Out", info: "11:00 AM\nLate check-out available" },
              { icon: "❌", title: "Cancellation", info: "Free cancellation\nupto 24 hrs before arrival" },
              { icon: "🍳", title: "Breakfast", info: "7:00 AM – 10:30 AM\nComplimentary for Deluxe+" },
              { icon: "🐾", title: "Pets", info: "Pets not allowed\nin hotel premises" },
              { icon: "🚭", title: "Smoking", info: "Smoke-free hotel\nDesignated area available" },
            ].map(p => (
              <div key={p.title} style={{
                padding: "1.5rem", border: "1px solid rgba(201,168,76,0.1)",
                transition: "border-color 0.3s"
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#C9A84C"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>{p.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", color: "#C9A84C", marginBottom: "0.5rem" }}>{p.title}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(250,247,242,0.55)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{p.info}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`.full-mobile { @media(max-width:768px){ grid-template-columns:1fr!important; } }`}</style>
    </div>
  );
}
