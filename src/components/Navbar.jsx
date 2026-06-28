import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0); }, [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/rooms", label: "Rooms" },
    { to: "/amenities", label: "Amenities" },
    { to: "/dining", label: "Dining" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  const navBg = scrolled ? "rgba(10,22,40,0.97)" : "transparent";
  const borderB = scrolled ? "1px solid rgba(201,168,76,0.2)" : "none";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: navBg, backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: borderB, transition: "all 0.4s ease",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2rem",
        height: scrolled ? "66px" : "82px", transition: "height 0.3s"
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.8rem" }}>
          {/* H Icon */}
          <div style={{
            width: 38, height: 38,
            border: "2px solid #C9A84C",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem", fontWeight: 700, color: "#C9A84C"
          }}>H</div>
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem", fontWeight: 700, color: "#FAF7F2",
              lineHeight: 1, letterSpacing: "0.03em"
            }}>Hotel Anand</div>
            <div style={{
              fontSize: "0.58rem", color: "rgba(201,168,76,0.7)",
              letterSpacing: "0.28em", textTransform: "uppercase",
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic"
            }}>Bilaspur · Chhattisgarh</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.2rem" }} className="desk-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.76rem", fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: location.pathname === l.to ? "#C9A84C" : "rgba(250,247,242,0.82)",
              textDecoration: "none", transition: "color 0.2s",
              borderBottom: location.pathname === l.to ? "1px solid #C9A84C" : "1px solid transparent",
              paddingBottom: "2px"
            }}
              onMouseEnter={e => e.target.style.color = "#C9A84C"}
              onMouseLeave={e => e.target.style.color = location.pathname === l.to ? "#C9A84C" : "rgba(250,247,242,0.82)"}
            >{l.label}</Link>
          ))}
          <a href="tel:+917869962000" style={{
            padding: "0.55rem 1.4rem",
            background: "#C9A84C", color: "#0A1628",
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: "0.72rem", letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none",
            transition: "all 0.3s"
          }}
            onMouseEnter={e => { e.target.style.background = "transparent"; e.target.style.color = "#C9A84C"; e.target.style.outline = "2px solid #C9A84C"; }}
            onMouseLeave={e => { e.target.style.background = "#C9A84C"; e.target.style.color = "#0A1628"; e.target.style.outline = "none"; }}
          >📞 Book Now</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="ham-btn" style={{
          background: "none", border: "none", cursor: "pointer",
          display: "none", flexDirection: "column", gap: "5px", padding: "4px"
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: "25px", height: "2px",
              background: "#C9A84C", transition: "all 0.3s",
              opacity: menuOpen && i === 1 ? 0 : 1,
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none"
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(10,22,40,0.98)", borderTop: "1px solid rgba(201,168,76,0.15)",
          padding: "1rem 2rem 2rem"
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: "block", padding: "0.9rem 0",
              borderBottom: "1px solid rgba(201,168,76,0.08)",
              fontFamily: "'Inter', sans-serif", fontSize: "0.88rem",
              fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
              color: location.pathname === l.to ? "#C9A84C" : "#FAF7F2",
              textDecoration: "none"
            }}>{l.label}</Link>
          ))}
          <a href="tel:+917869962000" style={{
            display: "block", marginTop: "1rem", padding: "0.9rem",
            background: "#C9A84C", color: "#0A1628", textAlign: "center",
            fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em",
            textTransform: "uppercase", textDecoration: "none"
          }}>📞 Call to Book</a>
        </div>
      )}
      <style>{`
        @media(max-width:768px){.desk-nav{display:none!important}.ham-btn{display:flex!important}}
      `}</style>
    </nav>
  );
}
