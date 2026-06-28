import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#060E1A", borderTop: "1px solid rgba(201,168,76,0.15)", color: "rgba(250,247,242,0.65)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1rem" }}>
              <div style={{ width: 36, height: 36, border: "2px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", fontWeight: 700, color: "#C9A84C" }}>H</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "#FAF7F2", fontWeight: 700 }}>Hotel Anand</div>
                <div style={{ fontSize: "0.6rem", color: "rgba(201,168,76,0.6)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Bilaspur · CG</div>
              </div>
            </div>
            <p style={{ fontSize: "0.83rem", lineHeight: 1.8, maxWidth: 240 }}>
              Bilaspur's premier address for comfort, warmth and exceptional hospitality since our founding.
            </p>
            <div style={{ marginTop: "1.2rem" }}>
              <a href="https://www.instagram.com/epicure_bypunjabirestaurant" target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontSize: "0.75rem", color: "#C9A84C", textDecoration: "none",
                border: "1px solid rgba(201,168,76,0.3)", padding: "0.4rem 0.9rem"
              }}>📸 Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "#C9A84C", marginBottom: "1.2rem" }}>Quick Links</h4>
            {[
              { to: "/", label: "Home" },
              { to: "/rooms", label: "Rooms & Suites" },
              { to: "/amenities", label: "Amenities" },
              { to: "/dining", label: "Breakfast & Dining" },
              { to: "/gallery", label: "Photo Gallery" },
              { to: "/contact", label: "Contact & Location" },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ display: "block", padding: "0.28rem 0", fontSize: "0.83rem", color: "rgba(250,247,242,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#C9A84C"}
                onMouseLeave={e => e.target.style.color = "rgba(250,247,242,0.55)"}
              >{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "#C9A84C", marginBottom: "1.2rem" }}>Contact Us</h4>
            <div style={{ fontSize: "0.83rem", lineHeight: 2.1 }}>
              <div>📍 Central Point, Old Bus Stand Road</div>
              <div style={{ paddingLeft: "1.3rem" }}>Bilaspur, Chhattisgarh</div>
              <div style={{ marginTop: "0.4rem" }}>📞 <a href="tel:+917869962000" style={{ color: "#C9A84C", textDecoration: "none" }}>+91 78699 62000</a></div>
              <div style={{ marginTop: "0.4rem" }}>🕐 Front Desk: 24 × 7</div>
              <div>🍽️ Breakfast: 7 AM – 10:30 AM</div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "#C9A84C", marginBottom: "1.2rem" }}>Hotel Hours</h4>
            {[
              ["Check-In", "12:00 PM"],
              ["Check-Out", "11:00 AM"],
              ["Front Desk", "24 Hours"],
              ["Room Service", "7 AM – 11 PM"],
              ["Parking", "24 Hours"],
            ].map(([l, t]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: "0.28rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "0.81rem" }}>
                <span style={{ color: "rgba(250,247,242,0.45)" }}>{l}</span>
                <span style={{ color: "#C9A84C", whiteSpace: "nowrap" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap",
          gap: "0.8rem", fontSize: "0.75rem", color: "rgba(250,247,242,0.3)"
        }}>
          <span>© 2025 Hotel Anand, Bilaspur. All rights reserved.</span>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>Warm Hospitality · Prime Location · Bilaspur</span>
        </div>
      </div>
    </footer>
  );
}
