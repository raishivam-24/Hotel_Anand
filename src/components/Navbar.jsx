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

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/hotel", label: "Hotel" },
    { to: "/epicure", label: "Epicure" },
    { to: "/menu", label: "Menu" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(30,5,10,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
      transition: "all 0.4s ease",
      padding: "0 2.5rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: scrolled ? "68px" : "80px",
        transition: "height 0.3s ease"
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem", fontWeight: 700,
              color: "#C9A84C", letterSpacing: "0.05em"
            }}>Hotel Anand</span>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.7rem", color: "rgba(201,168,76,0.7)",
              letterSpacing: "0.35em", textTransform: "uppercase", fontStyle: "italic"
            }}>& Epicure Restaurant</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
          className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem", fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: location.pathname === link.to ? "#C9A84C" : "rgba(245,240,232,0.85)",
              textDecoration: "none",
              transition: "color 0.2s",
              borderBottom: location.pathname === link.to ? "1px solid #C9A84C" : "1px solid transparent",
              paddingBottom: "2px",
            }}>{link.label}</Link>
          ))}
          <Link to="/contact" style={{
            padding: "0.6rem 1.5rem",
            background: "#C9A84C", color: "#2E0810",
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase",
            textDecoration: "none", transition: "all 0.3s",
            borderRadius: "0"
          }}
            onMouseEnter={e => { e.target.style.background = "transparent"; e.target.style.color = "#C9A84C"; e.target.style.outline = "2px solid #C9A84C"; }}
            onMouseLeave={e => { e.target.style.background = "#C9A84C"; e.target.style.color = "#2E0810"; e.target.style.outline = "none"; }}>
            Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "none", flexDirection: "column", gap: "5px", padding: "4px",
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: "26px", height: "2px",
              background: "#C9A84C", transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                : i === 1 ? "opacity: 0" : "rotate(-45deg) translate(5px,-5px)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(30,5,10,0.98)", borderTop: "1px solid rgba(201,168,76,0.2)",
          padding: "1rem 2.5rem 2rem",
        }}>
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              display: "block", padding: "0.9rem 0",
              borderBottom: "1px solid rgba(201,168,76,0.1)",
              fontFamily: "'Inter', sans-serif", fontSize: "0.9rem",
              fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
              color: location.pathname === link.to ? "#C9A84C" : "#F5F0E8",
              textDecoration: "none",
            }}>{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
