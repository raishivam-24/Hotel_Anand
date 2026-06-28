import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageBox from "../components/ImageBox";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const quickFeatures = [
    { icon: "🛏️", title: "50+ Rooms", sub: "Standard · Deluxe · Suite" },
    { icon: "🅿️", title: "Free Parking", sub: "Secure 24-hour parking" },
    { icon: "🍳", title: "Breakfast", sub: "Fresh daily breakfast" },
    { icon: "📍", title: "Prime Location", sub: "Central Point, Bilaspur" },
    { icon: "🔒", title: "24/7 Security", sub: "Safe & monitored premises" },
    { icon: "📶", title: "Free Wi-Fi", sub: "High-speed throughout" },
  ];

  const roomPreviews = [
    { name: "Standard Room", price: "₹1,499", suffix: "/night", src: null, emoji: "🛏️", tag: "Value Stay" },
    { name: "Deluxe Room", price: "₹2,299", suffix: "/night", src: null, emoji: "🏨", tag: "Most Popular", highlight: true },
    { name: "Premium Suite", price: "₹3,999", suffix: "/night", src: null, emoji: "👑", tag: "Luxury" },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden"
      }}>
        {/* Hero background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/hotel/hotel-main.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          backgroundColor: "#0A1628",
          transform: `translateY(${scrollY * 0.25}px) scale(1.08)`,
        }} />
        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(18,32,64,0.82) 50%, rgba(10,22,40,0.92) 100%)"
        }} />
        {/* Corner ornaments */}
        {["tl","tr","bl","br"].map(p => (
          <svg key={p} width="70" height="70" viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            top: p.includes("t") ? 24 : "auto", bottom: p.includes("b") ? 24 : "auto",
            left: p.includes("l") ? 24 : "auto", right: p.includes("r") ? 24 : "auto",
            opacity: 0.25,
            transform: `rotate(${p==="tr"?90:p==="br"?180:p==="bl"?270:0}deg)`
          }}>
            <path d="M2 2 L28 2 L2 28" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
            <path d="M2 2 L10 2 L2 10" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          </svg>
        ))}

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 1.5rem", maxWidth: 820 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
            fontSize: "1.1rem", color: "rgba(201,168,76,0.75)",
            letterSpacing: "0.3em", marginBottom: "0.8rem",
            animation: "fadeUp 0.6s ease 0.2s both"
          }}>Welcome to</p>

          <h1 style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(3.2rem,9vw,7rem)", fontWeight: 900,
            color: "#FAF7F2", lineHeight: 1, marginBottom: "0.4rem",
            animation: "fadeUp 0.6s ease 0.4s both"
          }}>Hotel Anand</h1>

          <div style={{
            width: 100, height: 1,
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            margin: "1.2rem auto",
            animation: "fadeUp 0.6s ease 0.5s both"
          }} />

          <p style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(1rem,2.5vw,1.4rem)",
            color: "rgba(250,247,242,0.75)", lineHeight: 1.9,
            marginBottom: "2.5rem",
            animation: "fadeUp 0.6s ease 0.7s both"
          }}>
            Bilaspur's finest hotel — where every guest is family.<br />
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Central Point · Old Bus Stand Road · Chhattisgarh</span>
          </p>

          <div style={{
            display: "flex", gap: "1rem", justifyContent: "center",
            flexWrap: "wrap", animation: "fadeUp 0.6s ease 0.9s both"
          }}>
            <Link to="/rooms" className="btn-gold">View Rooms & Prices</Link>
            <a href="tel:+917869962000" className="btn-outline-gold">📞 Call to Book</a>
          </div>

          {/* Quick stats bar */}
          <div style={{
            display: "flex", gap: "2rem", justifyContent: "center",
            marginTop: "3.5rem", flexWrap: "wrap",
            animation: "fadeUp 0.6s ease 1.1s both"
          }}>
            {[["50+","Rooms"],["24/7","Service"],["Free","Parking"],["✓","Breakfast"]].map(([n,l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#C9A84C" }}>{n}</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(250,247,242,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "1.8rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem"
        }}>
          <div style={{ width: 1, height: 44, background: "linear-gradient(to bottom, #C9A84C, transparent)", animation: "fadeUp 1s 1.5s both" }} />
        </div>
      </section>

      {/* ── QUICK FEATURES ── */}
      <section style={{ background: "#0A1628", padding: "3.5rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "1rem" }}>
          {quickFeatures.map(f => (
            <div key={f.title} style={{
              padding: "1.5rem 1rem", textAlign: "center",
              border: "1px solid rgba(201,168,76,0.1)",
              transition: "all 0.3s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.background = "rgba(201,168,76,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"; e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{f.icon}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", color: "#C9A84C", marginBottom: "0.2rem" }}>{f.title}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(250,247,242,0.5)" }}>{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background: "#FAF7F2", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="full-mobile">
          <div>
            <span className="eyebrow">About Hotel Anand</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#0A1628", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              Your Home in the Heart of Bilaspur
            </h2>
            <div className="gold-line" />
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: "#555", marginBottom: "1rem" }}>
              Located at the Central Point of Old Bus Stand Road, Hotel Anand has long been Bilaspur's most trusted address. Whether you're visiting for business, family events, or a relaxing getaway, we offer a warm and professional experience every time.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: "#555", marginBottom: "2rem" }}>
              Our beautifully appointed rooms, spacious lobby, ample parking and in-house dining make us the complete package for the discerning traveller. Our staff are trained to anticipate your needs — from the moment you arrive to the moment you check out.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link to="/rooms" className="btn-gold">See Our Rooms</Link>
              <Link to="/contact" className="btn-outline-gold" style={{ borderColor: "#0A1628", color: "#0A1628" }}
                onMouseEnter={e => { e.target.style.background = "#0A1628"; e.target.style.color = "#C9A84C"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#0A1628"; }}
              >Get Directions</Link>
            </div>
          </div>

          {/* Photo grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: "0.8rem" }}>
            <ImageBox src="/images/hotel/lobby.jpg" emoji="🏛️" label="Hotel Lobby" style={{ gridRow: "span 2" }} aspectRatio="2/3" />
            <ImageBox src="/images/hotel/reception-counter.jpg" emoji="🛎️" label="Reception" aspectRatio="4/3" />
            <ImageBox src="/images/hotel/common-area.jpg" emoji="🛋️" label="Common Area" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      {/* ── ROOM PREVIEW ── */}
      <section style={{ background: "#122040", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="eyebrow">Accommodation</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#FAF7F2" }}>
              Choose Your Room
            </h2>
            <div className="gold-line center" />
            <p style={{ color: "rgba(250,247,242,0.55)", fontSize: "0.88rem", maxWidth: 480, margin: "0 auto" }}>
              Every room crafted for comfort — from our cozy standard rooms to our luxurious suites
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {roomPreviews.map((r, i) => (
              <div key={i} style={{
                background: "#060E1A",
                border: r.highlight ? "2px solid #C9A84C" : "1px solid rgba(201,168,76,0.15)",
                position: "relative", overflow: "hidden",
                transition: "transform 0.3s"
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {r.highlight && (
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    background: "#C9A84C", textAlign: "center",
                    padding: "0.3rem", fontSize: "0.65rem", fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A1628", zIndex: 2
                  }}>★ Most Popular</div>
                )}
                <ImageBox src={r.src} emoji={r.emoji} label={r.name} aspectRatio="16/9" style={{ marginTop: r.highlight ? "1.8rem" : 0 }} />
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                    <div>
                      <div style={{ fontSize: "0.62rem", color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{r.tag}</div>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "#FAF7F2" }}>{r.name}</h3>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#C9A84C" }}>{r.price}</div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(250,247,242,0.45)" }}>{r.suffix}</div>
                    </div>
                  </div>
                  <Link to="/rooms" style={{
                    display: "block", textAlign: "center", padding: "0.7rem",
                    background: r.highlight ? "#C9A84C" : "transparent",
                    border: r.highlight ? "none" : "1px solid rgba(201,168,76,0.35)",
                    color: r.highlight ? "#0A1628" : "#C9A84C",
                    fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none",
                    transition: "all 0.25s"
                  }}>View Details →</Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/rooms" className="btn-gold">See All Rooms & Pricing</Link>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section style={{ background: "#FAF7F2", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow">Hotel Highlights</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#0A1628" }}>A Glimpse Inside Hotel Anand</h2>
            <div className="gold-line center" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "0.8rem" }}>
            {[
              { src: "/images/hotel/standard-room.jpg", emoji: "🛏️", label: "Standard Room" },
              { src: "/images/hotel/deluxe-room.jpg", emoji: "🏨", label: "Deluxe Room" },
              { src: "/images/hotel/washroom.jpg", emoji: "🚿", label: "Bathroom" },
              // { src: "/images/hotel/lobby.jpg", emoji: "🏛️", label: "Hotel Lobby" },
              { src: "/images/hotel/parking-main.jpg", emoji: "🅿️", label: "Parking Area" },
              { src: "/images/hotel/reception-counter.jpg", emoji: "🛎️", label: "Reception" },
            ].map((item, i) => (
              <div key={i} style={{ transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <ImageBox src={item.src} emoji={item.emoji} label={item.label} aspectRatio="4/3" />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/gallery" className="btn-navy">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#C9A84C", padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,3rem)", color: "#0A1628", marginBottom: "0.8rem" }}>
          Ready to Book Your Stay?
        </h2>
        <p style={{ color: "rgba(10,22,40,0.7)", fontSize: "1rem", marginBottom: "2.2rem" }}>
          Call us directly — we're available 24 hours a day, 7 days a week
        </p>
        <a href="tel:+917869962000" style={{
          display: "inline-block", padding: "1rem 3rem",
          background: "#0A1628", color: "#C9A84C",
          fontFamily: "'Inter',sans-serif", fontWeight: 700,
          fontSize: "0.88rem", letterSpacing: "0.15em",
          textTransform: "uppercase", textDecoration: "none",
          transition: "all 0.3s"
        }}
          onMouseEnter={e => { e.target.style.background = "#122040"; }}
          onMouseLeave={e => { e.target.style.background = "#0A1628"; }}
        >📞 +91 78699 62000</a>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
