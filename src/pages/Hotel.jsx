import { Link } from "react-router-dom";

const MandalaDivider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.5rem auto", justifyContent: "center" }}>
    <div style={{ height: "1px", width: 60, background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" stroke="#C9A84C" strokeWidth="1" />
      <circle cx="11" cy="11" r="4" stroke="#C9A84C" strokeWidth="0.8" />
      <line x1="11" y1="1" x2="11" y2="21" stroke="#C9A84C" strokeWidth="0.6" />
      <line x1="1" y1="11" x2="21" y2="11" stroke="#C9A84C" strokeWidth="0.6" />
    </svg>
    <div style={{ height: "1px", width: 60, background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
  </div>
);

const rooms = [
  {
    title: "Standard Room",
    price: "₹1,499",
    suffix: "/ night",
    color: "#4A0E1A",
    amenities: ["AC & Fan", "Wi-Fi", "TV", "Hot Water", "Daily Housekeeping", "Room Service"],
    highlight: "Ideal for solo travelers & business stays",
  },
  {
    title: "Deluxe Room",
    price: "₹2,299",
    suffix: "/ night",
    color: "#C9A84C",
    textColor: "#2E0810",
    amenities: ["King Bed", "AC & Heating", "Smart TV", "Mini Fridge", "Bathtub", "Complimentary Breakfast"],
    highlight: "Our most popular choice — enhanced comfort",
    badge: "Most Popular",
  },
  {
    title: "Suite",
    price: "₹3,999",
    suffix: "/ night",
    color: "#1C1C1C",
    amenities: ["Master Bedroom", "Living Area", "Jacuzzi", "Premium Bar", "Butler Service", "Airport Drop"],
    highlight: "The pinnacle of luxury at Hotel Anand",
  },
];

const amenities = [
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

export default function Hotel() {
  return (
    <div>
      {/* Page Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0E0305 0%, #4A0E1A 60%, #2E0810 100%)",
        padding: "10rem 2.5rem 5rem",
        textAlign: "center", position: "relative", overflow: "hidden",
        minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "1.1rem", color: "rgba(201,168,76,0.7)", letterSpacing: "0.3em", marginBottom: "0.8rem"
          }}>Rest & Rejuvenate</p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#F5F0E8", fontWeight: 700
          }}>Hotel Anand</h1>
          <MandalaDivider />
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
            Premium accommodations in the heart of Bilaspur — where comfort meets tradition
          </p>
        </div>
      </section>

      {/* About Hotel */}
      <section style={{ background: "#F5F0E8", padding: "5rem 2.5rem" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center"
        }} className="two-col">
          <div>
            <p className="section-eyebrow">About Our Hotel</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#4A0E1A", lineHeight: 1.2, marginBottom: "1rem"
            }}>Your Home Away from Home</h2>
            <MandalaDivider />
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: "#555", marginBottom: "1rem" }}>
              Hotel Anand stands at the prime Central Point location on Old Bus Stand Road, Bilaspur — making us the most conveniently located hotel in the city. Whether you're visiting for business, family occasions, or leisure, we ensure your stay is comfortable, safe, and memorable.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: "#555", marginBottom: "2rem" }}>
              Our rooms are designed with a careful blend of modern amenities and classic Indian hospitality. With 24-hour service, a superb in-house restaurant, and a vibrant bar, Hotel Anand is more than just a place to stay — it's an experience.
            </p>
            <a href="tel:+917869962000" className="btn-primary" style={{ textDecoration: "none" }}>
              📞 Book by Phone
            </a>
          </div>
          <div style={{
            background: "#4A0E1A", padding: "3rem",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem"
          }}>
            {[
              ["📍", "Prime Location", "Central Point, Old Bus Stand Rd"],
              ["🏨", "50+ Rooms", "Standard, Deluxe & Suites"],
              ["⭐", "Top Rated", "Trusted by thousands of guests"],
              ["📞", "24/7 Support", "Always here for you"],
            ].map(([icon, title, sub]) => (
              <div key={title} style={{ color: "#F5F0E8" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#C9A84C", marginBottom: "0.3rem" }}>{title}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.5 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.two-col { @media (max-width: 768px) { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Rooms */}
      <section style={{ background: "#1C1C1C", padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Accommodation</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F5F0E8"
            }}>Choose Your Room</h2>
            <MandalaDivider />
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}>
            {rooms.map((room, i) => (
              <div key={i} style={{
                background: "#0E0305", border: "1px solid rgba(201,168,76,0.15)",
                overflow: "hidden", position: "relative",
                transition: "transform 0.3s, border-color 0.3s"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
              >
                {room.badge && (
                  <div style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    background: "#C9A84C", color: "#2E0810",
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", padding: "0.3rem 0.8rem"
                  }}>{room.badge}</div>
                )}
                <div style={{
                  background: room.color, padding: "2rem 1.5rem",
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.4rem",
                    color: room.textColor || "#F5F0E8",
                    marginBottom: "0.5rem"
                  }}>{room.title}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem", fontWeight: 700,
                      color: room.color === "#C9A84C" ? "#2E0810" : "#C9A84C"
                    }}>{room.price}</span>
                    <span style={{ color: room.textColor || "rgba(245,240,232,0.6)", fontSize: "0.8rem" }}>{room.suffix}</span>
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <p style={{ fontSize: "0.8rem", color: "rgba(201,168,76,0.8)", fontStyle: "italic", marginBottom: "1.2rem" }}>{room.highlight}</p>
                  {room.amenities.map(a => (
                    <div key={a} style={{
                      display: "flex", alignItems: "center", gap: "0.6rem",
                      padding: "0.4rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
                      fontSize: "0.83rem", color: "rgba(245,240,232,0.7)"
                    }}>
                      <span style={{ color: "#C9A84C", fontSize: "0.7rem" }}>✦</span>
                      {a}
                    </div>
                  ))}
                  <a href="tel:+917869962000" style={{
                    display: "block", marginTop: "1.5rem", padding: "0.8rem",
                    textAlign: "center", background: "#C9A84C", color: "#2E0810",
                    fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none",
                    transition: "opacity 0.2s"
                  }}
                    onMouseEnter={e => e.target.style.opacity = "0.85"}
                    onMouseLeave={e => e.target.style.opacity = "1"}
                  >Book This Room</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section style={{ background: "#4A0E1A", padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p className="section-eyebrow">What's Included</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            color: "#F5F0E8", marginBottom: "3rem"
          }}>Hotel Amenities</h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.5rem"
          }}>
            {amenities.map(a => (
              <div key={a.label} style={{
                padding: "1.5rem 1rem", textAlign: "center",
                border: "1px solid rgba(201,168,76,0.15)",
                transition: "all 0.3s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "0.6rem" }}>{a.icon}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.75)", fontWeight: 500 }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F5F0E8", padding: "5rem 2.5rem", textAlign: "center" }}>
        <p className="section-eyebrow">Get in Touch</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          color: "#4A0E1A", marginBottom: "1rem"
        }}>Ready to Book Your Stay?</h2>
        <p style={{ color: "#666", fontSize: "0.95rem", marginBottom: "2rem" }}>
          Call us directly or visit our contact page for reservations and queries
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:+917869962000" className="btn-primary" style={{ textDecoration: "none" }}>📞 Call Now</a>
          <Link to="/contact" className="btn-outline" style={{ textDecoration: "none" }}>Contact Page</Link>
        </div>
      </section>
    </div>
  );
}
