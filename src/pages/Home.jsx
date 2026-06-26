import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const MandalaDivider = ({ light = false }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: "1rem",
    margin: "1.5rem auto", justifyContent: "center"
  }}>
    <div style={{ height: "1px", width: 60, background: `linear-gradient(90deg, transparent, ${light ? "#C9A84C" : "#C9A84C"})` }} />
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" stroke="#C9A84C" strokeWidth="1" />
      <circle cx="11" cy="11" r="4" stroke="#C9A84C" strokeWidth="0.8" />
      <line x1="11" y1="1" x2="11" y2="21" stroke="#C9A84C" strokeWidth="0.6" />
      <line x1="1" y1="11" x2="21" y2="11" stroke="#C9A84C" strokeWidth="0.6" />
      <line x1="3.5" y1="3.5" x2="18.5" y2="18.5" stroke="#C9A84C" strokeWidth="0.4" />
      <line x1="18.5" y1="3.5" x2="3.5" y2="18.5" stroke="#C9A84C" strokeWidth="0.4" />
    </svg>
    <div style={{ height: "1px", width: 60, background: `linear-gradient(90deg, #C9A84C, transparent)` }} />
  </div>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    { icon: "🏨", title: "Premium Rooms", desc: "Thoughtfully designed rooms with modern amenities and traditional warmth" },
    { icon: "🍽️", title: "Epicure Restaurant", desc: "Authentic Punjabi cuisine and multi-cuisine dining in an elegant setting" },
    { icon: "🍹", title: "Bar & Lounge", desc: "Curated cocktails, fine spirits and a sophisticated lounge ambiance" },
    { icon: "🎪", title: "Event Spaces", desc: "Host your celebrations in our beautifully appointed event halls" },
  ];

  const highlights = [
    { number: "15+", label: "Years of Legacy" },
    { number: "50+", label: "Premium Rooms" },
    { number: "200+", label: "Menu Items" },
    { number: "10K+", label: "Happy Guests" },
  ];

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} style={{
        minHeight: "100vh", position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", background: "#0E0305",
      }}>
        {/* Animated Background */}
        <div style={{
          position: "absolute", inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,14,26,0.9) 0%, #0E0305 70%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(201,168,76,0.03) 40px,
              rgba(201,168,76,0.03) 41px
            )
          `,
          transform: `translateY(${scrollY * 0.3}px)`,
        }} />

        {/* Decorative corner ornaments */}
        {["topleft", "topright", "bottomleft", "bottomright"].map(pos => (
          <svg key={pos} width="80" height="80" viewBox="0 0 80 80" fill="none" style={{
            position: "absolute",
            top: pos.includes("top") ? 20 : "auto",
            bottom: pos.includes("bottom") ? 20 : "auto",
            left: pos.includes("left") ? 20 : "auto",
            right: pos.includes("right") ? 20 : "auto",
            opacity: 0.3,
            transform: `rotate(${pos === "topright" ? 90 : pos === "bottomright" ? 180 : pos === "bottomleft" ? 270 : 0}deg)`,
          }}>
            <path d="M2 2 L30 2 L2 30" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
            <path d="M2 2 L12 2 L2 12" stroke="#C9A84C" strokeWidth="1" fill="none" />
          </svg>
        ))}

        {/* Hero Content */}
        <div style={{ textAlign: "center", zIndex: 2, padding: "0 1.5rem", maxWidth: 800 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic", fontSize: "1.1rem",
            color: "rgba(201,168,76,0.8)", letterSpacing: "0.3em",
            marginBottom: "1rem", animation: "fadeUp 0.7s ease 0.2s both"
          }}>Welcome to</p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700, color: "#F5F0E8",
            lineHeight: 1.05, marginBottom: "0.3rem",
            animation: "fadeUp 0.7s ease 0.4s both"
          }}>Hotel Anand</h1>

          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            color: "#C9A84C", marginBottom: "1.5rem",
            letterSpacing: "0.1em",
            animation: "fadeUp 0.7s ease 0.6s both"
          }}>& Epicure by Punjabi Restaurant</div>

          <MandalaDivider />

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "rgba(245,240,232,0.75)",
            lineHeight: 1.9, marginBottom: "2.5rem",
            animation: "fadeUp 0.7s ease 0.8s both"
          }}>
            At the heart of Bilaspur — where timeless hospitality meets<br />
            the art of Punjabi culinary tradition
          </p>

          <div style={{
            display: "flex", gap: "1rem", justifyContent: "center",
            flexWrap: "wrap", animation: "fadeUp 0.7s ease 1s both"
          }}>
            <Link to="/hotel" className="btn-primary">Explore Rooms</Link>
            <Link to="/epicure" className="btn-outline">Dine with Us</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          animation: "fadeUp 1s ease 1.5s both"
        }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "rgba(201,168,76,0.6)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{
            width: "1px", height: "40px",
            background: "linear-gradient(to bottom, #C9A84C, transparent)",
            animation: "shimmer 2s infinite"
          }} />
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section style={{ background: "#4A0E1A", padding: "4rem 2.5rem" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem"
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              textAlign: "center", padding: "2rem 1rem",
              borderLeft: "1px solid rgba(201,168,76,0.15)",
              transition: "all 0.3s"
            }}
              onMouseEnter={e => e.currentTarget.style.borderLeftColor = "#C9A84C"}
              onMouseLeave={e => e.currentTarget.style.borderLeftColor = "rgba(201,168,76,0.15)"}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.2rem", color: "#C9A84C",
                marginBottom: "0.6rem"
              }}>{f.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: "#F5F0E8", padding: "6rem 2.5rem" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem",
          alignItems: "center"
        }}
          className="about-grid">
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#4A0E1A", lineHeight: 1.2, marginBottom: "1.5rem"
            }}>A Landmark of Bilaspur's Hospitality</h2>
            <MandalaDivider />
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#555", marginBottom: "1.2rem" }}>
              Nestled at the Central Point of Bilaspur's Old Bus Stand Road, Hotel Anand has been the city's trusted address for travelers and food lovers alike. We bring the warmth of Punjabi hospitality to every corner of Chhattisgarh.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#555", marginBottom: "2rem" }}>
              Our Epicure restaurant, helmed by master chefs trained in the finest Punjabi culinary traditions, serves dishes that celebrate the rich heritage of North Indian cuisine — from slow-cooked dal makhani to the finest kebabs, each plate tells a story.
            </p>
            <Link to="/hotel" className="btn-primary" style={{ textDecoration: "none" }}>Discover More</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { bg: "#4A0E1A", label: "Elegant Rooms", sub: "Modern comfort, traditional charm" },
              { bg: "#C9A84C", label: "Fine Dining", sub: "Epicure by Punjabi Restaurant" },
              { bg: "#8B9E7A", label: "Bar & Lounge", sub: "Premium spirits & cocktails" },
              { bg: "#1C1C1C", label: "Prime Location", sub: "Central Point, Bilaspur" },
            ].map((card, i) => (
              <div key={i} style={{
                background: card.bg, padding: "2rem 1.5rem",
                color: card.bg === "#C9A84C" ? "#2E0810" : "#F5F0E8",
                aspectRatio: "1", display: "flex", flexDirection: "column",
                justifyContent: "flex-end",
                transition: "transform 0.3s", cursor: "default"
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.3rem"
                }}>{card.label}</div>
                <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
      </section>

      {/* STATS */}
      <section style={{
        background: "linear-gradient(135deg, #2E0810 0%, #4A0E1A 50%, #2E0810 100%)",
        padding: "5rem 2.5rem"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p className="section-eyebrow">By the Numbers</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#F5F0E8", marginBottom: "3rem"
          }}>Excellence in Every Detail</h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem"
          }}>
            {highlights.map(h => (
              <div key={h.label} style={{ textAlign: "center", padding: "1.5rem" }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
                  color: "#C9A84C", lineHeight: 1
                }}>{h.number}</div>
                <div style={{
                  fontSize: "0.8rem", color: "rgba(245,240,232,0.6)",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  marginTop: "0.5rem"
                }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPICURE PROMO */}
      <section style={{ background: "#1C1C1C", padding: "6rem 2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.05,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(201,168,76,1) 30px, rgba(201,168,76,1) 31px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(201,168,76,1) 30px, rgba(201,168,76,1) 31px)`,
        }} />
        <div style={{
          maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1
        }}>
          <p className="section-eyebrow">Fine Dining</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#F5F0E8", lineHeight: 1.2, marginBottom: "0.5rem"
          }}>Epicure</h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic", fontSize: "1.3rem",
            color: "#C9A84C", marginBottom: "1.5rem", letterSpacing: "0.1em"
          }}>by Punjabi Restaurant</p>
          <MandalaDivider />
          <p style={{
            fontSize: "1rem", color: "rgba(245,240,232,0.75)",
            lineHeight: 1.9, marginBottom: "2.5rem"
          }}>
            Step into a world where every dish is a celebration. From sizzling tandoori platters and rich gravies to refreshing cocktails at our bar — Epicure is where Bilaspur comes to dine in style.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/menu" className="btn-primary" style={{ textDecoration: "none" }}>View Our Menu</Link>
            <Link to="/epicure" className="btn-outline" style={{ textDecoration: "none" }}>About Epicure</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#F5F0E8", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p className="section-eyebrow">Guest Reviews</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            color: "#4A0E1A", marginBottom: "3rem"
          }}>What Our Guests Say</h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem"
          }}>
            {[
              { name: "Rahul S.", role: "Business Traveller", text: "The perfect base in Bilaspur. Clean rooms, fantastic service and the restaurant food is extraordinary — the dal makhani is the best I've had!", stars: 5 },
              { name: "Priya M.", role: "Family Vacation", text: "Epicure's ambience is beautiful and the Punjabi thali is a must-try. The staff treated us like family. Will definitely return!", stars: 5 },
              { name: "Amit K.", role: "Weekend Getaway", text: "The bar is well-stocked and the cocktails are creative. Great location right in the city center. Highly recommended!", stars: 5 },
            ].map((t, i) => (
              <div key={i} style={{
                background: "#FFFFFF", padding: "2.5rem 2rem",
                borderBottom: "3px solid #C9A84C",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                textAlign: "left", transition: "transform 0.3s"
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic", fontSize: "1.05rem",
                  color: "#333", lineHeight: 1.8, marginBottom: "1.5rem"
                }}>"{t.text}"</p>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: "1rem" }}>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#4A0E1A" }}>{t.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "#999", marginTop: "0.2rem" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        background: "#C9A84C", padding: "4rem 2.5rem", textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          color: "#2E0810", marginBottom: "1rem"
        }}>Ready for an Unforgettable Stay?</h2>
        <p style={{ fontSize: "1rem", color: "rgba(30,5,10,0.75)", marginBottom: "2rem" }}>
          Call us directly for bookings and special packages
        </p>
        <a href="tel:+917869962000" style={{
          display: "inline-block", padding: "1rem 3rem",
          background: "#2E0810", color: "#C9A84C",
          fontFamily: "'Inter', sans-serif", fontWeight: 600,
          fontSize: "0.85rem", letterSpacing: "0.15em",
          textTransform: "uppercase", textDecoration: "none",
          transition: "all 0.3s"
        }}
          onMouseEnter={e => { e.target.style.background = "#4A0E1A"; }}
          onMouseLeave={e => { e.target.style.background = "#2E0810"; }}>
          📞 +91 78699 62000
        </a>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
