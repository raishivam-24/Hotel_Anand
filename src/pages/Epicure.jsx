import { Link } from "react-router-dom";

const MandalaDivider = ({ light = false }) => (
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

const specialties = [
  { name: "Dal Makhani", origin: "Punjab", desc: "Slow-cooked black lentils in rich tomato butter sauce — simmered for 8 hours", veg: true },
  { name: "Butter Chicken", origin: "Punjab", desc: "Tender chicken in aromatic tomato-based gravy with house-ground spices", veg: false },
  { name: "Sarson Da Saag", origin: "Haryana/Punjab", desc: "Seasonal mustard greens with makki di roti — a winter classic", veg: true },
  { name: "Tandoori Platter", origin: "Epicure Special", desc: "Mixed kebab platter with seekh, tikka, and malai kebab from our clay oven", veg: false },
  { name: "Pindi Chole", origin: "Rawalpindi", desc: "Bold, earthy chickpeas slow-cooked in whole spices and tamarind", veg: true },
  { name: "Epicure Thali", origin: "Our Signature", desc: "Complete Punjabi meal — daal, paneer, roti, rice, dessert and more", veg: true },
];

const barOfferings = [
  { cat: "Signature Cocktails", items: ["Bilaspur Sling", "Punjabi Mule", "Gold Rush", "Tamarind Sour", "Royal Sunset"] },
  { cat: "Imported Spirits", items: ["Single Malt Scotch", "Bourbon Whiskey", "Premium Gin", "Tequila Selections", "Vodka Collection"] },
  { cat: "Domestic Favourites", items: ["Royal Stag", "Blenders Pride", "Old Monk", "Imperial Blue", "Kingfisher Premium"] },
  { cat: "Non-Alcoholic", items: ["Virgin Mojito", "Lassi Bar", "Fresh Juices", "Mocktail Menu", "Masala Chai"] },
];

export default function Epicure() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "#0E0305", padding: "10rem 2.5rem 5rem",
        minHeight: "55vh", display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(74,14,26,0.8), #0E0305 70%)"
        }} />
        {/* Decorative grid lines */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "1.1rem", color: "rgba(201,168,76,0.7)", letterSpacing: "0.3em", marginBottom: "0.5rem"
          }}>Fine Dining at Hotel Anand</p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700,
            color: "#F5F0E8", lineHeight: 1
          }}>Epicure</h1>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
            color: "#C9A84C", letterSpacing: "0.15em", marginBottom: "1rem"
          }}>by Punjabi Restaurant</div>
          <MandalaDivider />
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "1rem", lineHeight: 1.8 }}>
            Where the soulful flavours of Punjab meet the elegance of fine dining
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "#F5F0E8", padding: "5rem 2.5rem" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center"
        }} className="two-col">
          <div>
            <p className="section-eyebrow">Our Philosophy</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#4A0E1A", lineHeight: 1.2, marginBottom: "1rem"
            }}>Cooking is an Act of Love</h2>
            <MandalaDivider />
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: "#555", marginBottom: "1rem" }}>
              At Epicure, we believe that food is more than sustenance — it's memory, identity, and celebration. Our chefs bring decades of Punjabi culinary tradition to every dish, using hand-ground spices, slow cooking methods, and the freshest local produce.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: "#555", marginBottom: "2rem" }}>
              From the earthy warmth of our dal makhani to the delicate smokiness of our tandoori preparations, every plate at Epicure is crafted to evoke the heartlands of Punjab.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link to="/menu" className="btn-primary" style={{ textDecoration: "none" }}>View Full Menu</Link>
              <a href="tel:+917869962000" className="btn-outline" style={{ textDecoration: "none" }}>Reserve a Table</a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { icon: "🌿", title: "Fresh & Local", desc: "We source fresh vegetables and spices from local Chhattisgarh markets daily" },
              { icon: "🔥", title: "Tandoor Mastery", desc: "Our clay tandoor has been seasoned over years to give that distinctive smoky char" },
              { icon: "⏳", title: "Slow Cooked", desc: "Signature gravies simmer for hours — no shortcuts, only depth of flavour" },
              { icon: "👨‍🍳", title: "Trained Chefs", desc: "Our kitchen team is trained in authentic North Indian culinary traditions" },
            ].map(item => (
              <div key={item.title} style={{
                display: "flex", gap: "1.2rem", alignItems: "flex-start",
                padding: "1.2rem", background: "#FFFFFF",
                borderLeft: "3px solid #C9A84C",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
              }}>
                <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#4A0E1A", marginBottom: "0.3rem" }}>{item.title}</div>
                  <div style={{ fontSize: "0.83rem", color: "#777", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.two-col { } @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
      </section>

      {/* Chef's Specialties */}
      <section style={{ background: "#2E0810", padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">House Signatures</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F5F0E8"
            }}>Chef's Specialties</h2>
            <MandalaDivider />
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}>
            {specialties.map((dish, i) => (
              <div key={i} style={{
                padding: "2rem", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.15)",
                position: "relative", transition: "all 0.3s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
              >
                <div style={{
                  position: "absolute", top: "1rem", right: "1rem",
                  fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                  padding: "0.2rem 0.6rem",
                  background: dish.veg ? "rgba(139,158,122,0.2)" : "rgba(180,50,50,0.2)",
                  color: dish.veg ? "#8B9E7A" : "#d47a7a",
                  border: `1px solid ${dish.veg ? "rgba(139,158,122,0.4)" : "rgba(180,50,50,0.4)"}`,
                }}>{dish.veg ? "VEG" : "NON-VEG"}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem", color: "#C9A84C",
                  marginBottom: "0.3rem"
                }}>{dish.name}</h3>
                <p style={{ fontSize: "0.72rem", color: "rgba(201,168,76,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.8rem" }}>{dish.origin}</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.7 }}>{dish.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/menu" className="btn-outline" style={{ textDecoration: "none" }}>See Full Menu →</Link>
          </div>
        </div>
      </section>

      {/* BAR */}
      <section style={{ background: "#1C1C1C", padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Bar & Lounge</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F5F0E8",
              marginBottom: "0.5rem"
            }}>The Epicure Bar</h2>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              color: "rgba(201,168,76,0.7)", fontSize: "1.1rem"
            }}>Where every evening becomes a story</p>
            <MandalaDivider />
            <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", maxWidth: 550, margin: "0 auto" }}>
              Our bar is a curated space for unwinding. Premium spirits, house cocktails crafted with local ingredients, and a lounge setting perfect for business or leisure.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem", marginBottom: "3rem"
          }}>
            {barOfferings.map((section, i) => (
              <div key={i} style={{
                background: "#0E0305", padding: "2rem",
                border: "1px solid rgba(201,168,76,0.1)"
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem", color: "#C9A84C",
                  marginBottom: "1.2rem", paddingBottom: "0.8rem",
                  borderBottom: "1px solid rgba(201,168,76,0.2)"
                }}>{section.cat}</h3>
                {section.items.map(item => (
                  <div key={item} style={{
                    fontSize: "0.83rem", color: "rgba(245,240,232,0.65)",
                    padding: "0.4rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)"
                  }}>
                    <span style={{ color: "#C9A84C", marginRight: "0.5rem", fontSize: "0.6rem" }}>✦</span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{
            background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)",
            padding: "2rem", textAlign: "center"
          }}>
            <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.9rem", marginBottom: "1rem" }}>
              🕐 Bar Hours: <span style={{ color: "#C9A84C" }}>12:00 PM – 11:30 PM</span> &nbsp;|&nbsp;
              📞 Reservations: <a href="tel:+917869962000" style={{ color: "#C9A84C", textDecoration: "none" }}>+91 78699 62000</a>
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)", letterSpacing: "0.1em" }}>
              LIQUOR CONSUMPTION VALID FOR GUESTS 25 YEARS & ABOVE · DRINK RESPONSIBLY
            </p>
          </div>
        </div>
      </section>

      {/* Ambience */}
      <section style={{ background: "#C9A84C", padding: "5rem 2.5rem", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2E0810",
          marginBottom: "1rem"
        }}>An Atmosphere Like No Other</h2>
        <p style={{ color: "rgba(30,5,10,0.7)", fontSize: "1rem", maxWidth: 600, margin: "0 auto 2rem" }}>
          Our dining room blends warm lighting, traditional craftsmanship, and modern elegance to create a setting worthy of your most special moments.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/gallery" style={{
            padding: "0.9rem 2.2rem", background: "#2E0810", color: "#C9A84C",
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem",
            letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none"
          }}>View Gallery</Link>
          <a href="tel:+917869962000" style={{
            padding: "0.9rem 2.2rem", background: "transparent",
            border: "2px solid #2E0810", color: "#2E0810",
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem",
            letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none"
          }}>Reserve a Table</a>
        </div>
      </section>
    </div>
  );
}
