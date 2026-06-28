import { useState } from "react";
import ImageBox from "../components/ImageBox";

const galleryItems = [
  // Rooms
  { cat: "Rooms", label: "Standard Room", src: "/images/rooms/standard-room.jpg", emoji: "🛏️" },
  { cat: "Rooms", label: "Standard Washroom", src: "/images/rooms/standard-washroom.jpg", emoji: "🚿" },
  { cat: "Rooms", label: "Deluxe Room", src: "/images/rooms/deluxe-room.jpg", emoji: "🏨" },
  { cat: "Rooms", label: "Deluxe Bathroom", src: "/images/rooms/deluxe-washroom.jpg", emoji: "🛁" },
  { cat: "Rooms", label: "Premium Suite", src: "/images/rooms/suite-bedroom.jpg", emoji: "👑" },
  { cat: "Rooms", label: "Suite Living Area", src: "/images/rooms/suite-living.jpg", emoji: "🛋️" },
  { cat: "Rooms", label: "Suite Bathroom", src: "/images/rooms/suite-washroom.jpg", emoji: "🛁" },
  { cat: "Rooms", label: "Family Room", src: "/images/rooms/family-room.jpg", emoji: "👨‍👩‍👧‍👦" },

  // Lobby
  // { cat: "Lobby", label: "Main Lobby", src: "/images/hotel/lobby-main.jpg", emoji: "🏛️" },
  // { cat: "Lobby", label: "Lobby Seating", src: "/images/hotel/lobby-seating.jpg", emoji: "🛋️" },
  // { cat: "Lobby", label: "Hotel Entrance", src: "/images/hotel/lobby-entrance.jpg", emoji: "🚪" },

  // Reception
  { cat: "Reception", label: "Reception Desk", src: "/images/hotel/reception-main.jpg", emoji: "🛎️" },
  { cat: "Reception", label: "Front Counter", src: "/images/hotel/reception-counter.jpg", emoji: "📋" },

  // Common Area
  { cat: "Common Area", label: "Guest Lounge", src: "/images/hotel/common-area.jpg", emoji: "☕" },
  { cat: "Common Area", label: "Seating Area", src: "/images/hotel/common-seatingarea.jpg", emoji: "🚶" },
  { cat: "Common Area", label: "Elevator", src: "/images/hotel/common-lift.jpg", emoji: "🛗" },

  // Parking
  { cat: "Parking", label: "Parking Area", src: "/images/hotel/parking-main.jpg", emoji: "🅿️" },
  { cat: "Parking", label: "Parking Entrance", src: "/images/hotel/parking-entrance.jpg", emoji: "🚗" },

  // Dining
  { cat: "Dining", label: "Breakfast Spread", src: "/images/dining/breakfast-spread.jpg", emoji: "🍳" },
  { cat: "Dining", label: "Dining Area", src: "/images/dining/dining-area.jpg", emoji: "🍽️" },
  { cat: "Dining", label: "Lunch Thali", src: "/images/dining/lunch-thali.jpg", emoji: "🥘" },
];

const filters = ["All", "Rooms", "Lobby", "Reception", "Common Area", "Parking", "Dining"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter(g => g.cat === active);

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #060E1A 0%, #122040 100%)",
        padding: "9rem 2rem 5rem", textAlign: "center",
        minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "18px 18px" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow">Visual Tour</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#FAF7F2", fontWeight: 700 }}>Photo Gallery</h1>
          <div className="gold-line center" />
          <p style={{ color: "rgba(250,247,242,0.6)", fontSize: "0.92rem", maxWidth: 440, margin: "0 auto" }}>
            Take a virtual tour of Hotel Anand — rooms, lobby, common areas and more
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "#FAF7F2", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Filter Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{
                padding: "0.55rem 1.4rem",
                background: active === f ? "#0A1628" : "transparent",
                color: active === f ? "#C9A84C" : "#0A1628",
                border: "1.5px solid #0A1628",
                fontFamily: "'Inter',sans-serif", fontSize: "0.75rem",
                fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s"
              }}>{f} {active !== "All" && f !== "All" && f === active ? `(${filtered.length})` : ""}</button>
            ))}
          </div>

          {/* Photo count */}
          <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#999", marginBottom: "2rem", letterSpacing: "0.1em" }}>
            Showing {filtered.length} photo{filtered.length !== 1 ? "s" : ""} {active !== "All" ? `in ${active}` : ""}
          </p>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px,1fr))",
            gap: "0.8rem"
          }}>
            {filtered.map((item, i) => (
              <div key={i} onClick={() => setLightbox(item)} style={{
                cursor: "pointer", position: "relative", overflow: "hidden",
                gridColumn: i === 0 || i % 7 === 0 ? "span 2" : "span 1",
                transition: "transform 0.3s"
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <ImageBox
                  src={item.src} emoji={item.emoji} label={item.label}
                  aspectRatio={i === 0 || i % 7 === 0 ? "16/7" : "4/3"}
                />
                {/* Hover overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(10,22,40,0.65)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: "0.4rem",
                  opacity: 0, transition: "opacity 0.3s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "1"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "0"; }}
                >
                  <div style={{ fontSize: "1.8rem" }}>🔍</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", color: "#C9A84C" }}>{item.label}</div>
                  <div style={{ fontSize: "0.65rem", color: "rgba(250,247,242,0.6)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.cat}</div>
                </div>
                {/* Category badge */}
                <div style={{
                  position: "absolute", top: "0.7rem", left: "0.7rem",
                  padding: "0.2rem 0.6rem",
                  background: "rgba(10,22,40,0.75)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "#C9A84C",
                }}>{item.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.93)",
          zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
          padding: "2rem", backdropFilter: "blur(4px)"
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            maxWidth: 800, width: "100%", position: "relative", overflow: "hidden"
          }}>
            <ImageBox src={lightbox.src} emoji={lightbox.emoji} label={lightbox.label} aspectRatio="16/10" />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "2rem 1.5rem",
              background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)"
            }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "#C9A84C" }}>{lightbox.label}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(250,247,242,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.2rem" }}>{lightbox.cat}</div>
            </div>
            <button onClick={() => setLightbox(null)} style={{
              position: "absolute", top: "1rem", right: "1rem",
              background: "rgba(0,0,0,0.6)", border: "1px solid rgba(201,168,76,0.4)",
              color: "#C9A84C", fontSize: "1rem", width: 34, height: 34,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
            }}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
