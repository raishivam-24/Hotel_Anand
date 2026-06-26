import { useState } from "react";

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

// Gallery data with different gradient color themes representing real categories
const galleryItems = [
  { cat: "Restaurant", label: "Epicure Dining Hall", sub: "Elegant interiors with warm lighting", color1: "#4A0E1A", color2: "#2E0810", emoji: "🍽️" },
  { cat: "Food", label: "Dal Makhani", sub: "8-hour slow cooked signature dish", color1: "#8B4513", color2: "#5C2A00", emoji: "🫕" },
  { cat: "Food", label: "Tandoori Platter", sub: "Fresh from our clay tandoor", color1: "#7B1A1A", color2: "#4A0000", emoji: "🔥" },
  { cat: "Hotel", label: "Deluxe Room", sub: "Comfort meets classic elegance", color1: "#2C4A6E", color2: "#1A2E45", emoji: "🛏️" },
  { cat: "Bar", label: "Epicure Bar", sub: "Premium spirits & signature cocktails", color1: "#1C1C1C", color2: "#0E0E0E", emoji: "🍹" },
  { cat: "Food", label: "Epicure Thali", sub: "Complete Punjabi feast", color1: "#C9A84C", color2: "#8B6914", emoji: "🥘" },
  { cat: "Hotel", label: "Lobby & Reception", sub: "A warm welcome awaits", color1: "#3A2515", color2: "#1C1008", emoji: "🏛️" },
  { cat: "Restaurant", label: "Private Dining", sub: "Intimate space for special occasions", color1: "#4A1A2E", color2: "#2E0818", emoji: "🕯️" },
  { cat: "Food", label: "Butter Chicken", sub: "Our most-loved North Indian classic", color1: "#C4600A", color2: "#7A3200", emoji: "🍗" },
  { cat: "Bar", label: "Cocktail Hour", sub: "Handcrafted drinks by our mixologist", color1: "#1A3A2E", color2: "#0A1E18", emoji: "🥂" },
  { cat: "Hotel", label: "Suite Living Area", sub: "Premium suite with modern amenities", color1: "#2E2E4A", color2: "#1A1A2E", emoji: "🛋️" },
  { cat: "Restaurant", label: "Festive Decor", sub: "Special setups for every celebration", color1: "#4A3A1A", color2: "#2E2200", emoji: "✨" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filters = ["All", "Restaurant", "Food", "Hotel", "Bar"];
  const filtered = active === "All" ? galleryItems : galleryItems.filter(g => g.cat === active);

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "#0E0305", padding: "10rem 2.5rem 5rem",
        textAlign: "center", position: "relative", overflow: "hidden",
        minHeight: "45vh", display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 70% at 50% 60%, rgba(28,28,28,0.9), #0E0305 70%)"
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "1.1rem", color: "rgba(201,168,76,0.7)", letterSpacing: "0.3em", marginBottom: "0.5rem"
          }}>A Visual Journey</p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#F5F0E8", fontWeight: 700
          }}>Gallery</h1>
          <MandalaDivider />
          <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9rem" }}>
            Capturing moments of joy, flavour and elegance
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "#1C1C1C", padding: "4rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{
                padding: "0.55rem 1.6rem",
                background: active === f ? "#C9A84C" : "transparent",
                color: active === f ? "#2E0810" : "rgba(245,240,232,0.7)",
                border: `1.5px solid ${active === f ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase", cursor: "pointer",
                transition: "all 0.2s"
              }}>{f}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem"
          }}>
            {filtered.map((item, i) => (
              <div key={i}
                onClick={() => setLightbox(item)}
                style={{
                  aspectRatio: i % 5 === 0 ? "16/9" : "4/3",
                  gridColumn: i % 7 === 0 ? "span 2" : "span 1",
                  background: `linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%)`,
                  position: "relative", overflow: "hidden", cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                {/* Pattern overlay */}
                <div style={{
                  position: "absolute", inset: 0, opacity: 0.06,
                  backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
                  backgroundSize: "15px 15px",
                }} />

                {/* Emoji/Icon */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  opacity: 0.5,
                }}>{item.emoji}</div>

                {/* Category badge */}
                <div style={{
                  position: "absolute", top: "0.8rem", left: "0.8rem",
                  padding: "0.25rem 0.75rem",
                  background: "rgba(201,168,76,0.2)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em",
                  textTransform: "uppercase", color: "#C9A84C",
                  backdropFilter: "blur(4px)"
                }}>{item.cat}</div>

                {/* Hover overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(0,0,0,0.7)",
                  display: "flex", alignItems: "flex-end",
                  padding: "1.5rem",
                  opacity: 0, transition: "opacity 0.3s",
                }}
                  className="hover-overlay"
                >
                  <div>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem", color: "#C9A84C", marginBottom: "0.3rem"
                    }}>{item.label}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.7)" }}>{item.sub}</div>
                  </div>
                </div>

                {/* Bottom label (always visible) */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "0.8rem 1rem",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "#F5F0E8" }}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)",
          zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
          padding: "2rem"
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: `linear-gradient(135deg, ${lightbox.color1}, ${lightbox.color2})`,
            maxWidth: 600, width: "100%",
            aspectRatio: "4/3", position: "relative",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
          }}>
            <div style={{ fontSize: "5rem", opacity: 0.5 }}>{lightbox.emoji}</div>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "2rem", background: "rgba(0,0,0,0.6)"
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#C9A84C", marginBottom: "0.4rem" }}>{lightbox.label}</div>
              <div style={{ fontSize: "0.88rem", color: "rgba(245,240,232,0.75)" }}>{lightbox.sub}</div>
            </div>
            <button onClick={() => setLightbox(null)} style={{
              position: "absolute", top: "1rem", right: "1rem",
              background: "rgba(0,0,0,0.5)", border: "none",
              color: "#C9A84C", fontSize: "1.2rem", width: 36, height: 36,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
            }}>✕</button>
          </div>
        </div>
      )}

      {/* Follow Us */}
      <section style={{ background: "#4A0E1A", padding: "4rem 2.5rem", textAlign: "center" }}>
        <p className="section-eyebrow">Social Media</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", color: "#F5F0E8",
          marginBottom: "1rem"
        }}>Follow Us on Instagram</h2>
        <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9rem", marginBottom: "2rem" }}>
          @epicure_bypunjabirestaurant — See our latest dishes, events and behind-the-scenes moments
        </p>
        <a href="https://www.instagram.com/epicure_bypunjabirestaurant" target="_blank" rel="noreferrer"
          className="btn-primary" style={{ textDecoration: "none" }}>
          📸 View on Instagram
        </a>
      </section>

      <style>{`
        div:hover .hover-overlay { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
