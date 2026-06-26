import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      background: "#0E0305",
      borderTop: "1px solid rgba(201,168,76,0.2)",
      padding: "4rem 2.5rem 2rem",
      color: "rgba(245,240,232,0.7)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem", marginBottom: "3rem"
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.6rem", color: "#C9A84C",
              marginBottom: "0.5rem"
            }}>Hotel Anand</h3>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic", fontSize: "0.9rem",
              color: "rgba(201,168,76,0.6)", letterSpacing: "0.2em",
              textTransform: "uppercase", marginBottom: "1rem"
            }}>& Epicure Restaurant</p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 260 }}>
              A legacy of warm hospitality and culinary excellence at the heart of Bilaspur, Chhattisgarh.
            </p>
            <div style={{ marginTop: "1.2rem", display: "flex", gap: "1rem" }}>
              <a href="https://www.instagram.com/epicure_bypunjabirestaurant" target="_blank" rel="noreferrer"
                style={{
                  width: 38, height: 38, border: "1px solid rgba(201,168,76,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#C9A84C", textDecoration: "none", fontSize: "1rem",
                  transition: "all 0.3s"
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#C9A84C"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"}
              >📸</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem", color: "#C9A84C",
              marginBottom: "1.2rem", letterSpacing: "0.05em"
            }}>Quick Links</h4>
            {[
              { to: "/hotel", label: "Hotel Rooms & Suites" },
              { to: "/epicure", label: "Epicure Restaurant" },
              { to: "/epicure", label: "Bar & Lounge" },
              { to: "/menu", label: "Our Menu" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact Us" },
            ].map(l => (
              <Link key={l.label} to={l.to} style={{
                display: "block", padding: "0.3rem 0",
                color: "rgba(245,240,232,0.6)", textDecoration: "none",
                fontSize: "0.85rem", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "#C9A84C"}
                onMouseLeave={e => e.target.style.color = "rgba(245,240,232,0.6)"}
              >{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem", color: "#C9A84C",
              marginBottom: "1.2rem"
            }}>Contact</h4>
            <div style={{ fontSize: "0.85rem", lineHeight: 2 }}>
              <div>📍 Central Point, Old Bus Stand Road</div>
              <div style={{ paddingLeft: "1.5rem" }}>Bilaspur, Chhattisgarh</div>
              <div style={{ marginTop: "0.5rem" }}>📞 <a href="tel:+917869962000" style={{ color: "#C9A84C", textDecoration: "none" }}>+91 78699 62000</a></div>
              <div style={{ marginTop: "0.5rem" }}>⏰ Restaurant: 11 AM – 11 PM</div>
              <div>🏨 Hotel: 24 × 7 Check-in</div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem", color: "#C9A84C",
              marginBottom: "1.2rem"
            }}>Opening Hours</h4>
            <div style={{ fontSize: "0.83rem", lineHeight: 2.2 }}>
              {[
                ["Restaurant", "11:00 AM – 11:00 PM"],
                ["Bar & Lounge", "12:00 PM – 11:30 PM"],
                ["Hotel Front Desk", "Open 24 Hours"],
                ["Room Service", "7:00 AM – 11:00 PM"],
              ].map(([label, time]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "2px" }}>
                  <span style={{ color: "rgba(245,240,232,0.5)" }}>{label}</span>
                  <span style={{ color: "#C9A84C", whiteSpace: "nowrap" }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid rgba(201,168,76,0.15)",
          paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "1rem",
          fontSize: "0.78rem", color: "rgba(245,240,232,0.4)"
        }}>
          <span>© 2025 Hotel Anand & Epicure Restaurant, Bilaspur. All rights reserved.</span>
          <span style={{ color: "rgba(201,168,76,0.5)" }}>Crafted with ✦ for our guests</span>
        </div>
      </div>
    </footer>
  );
}
