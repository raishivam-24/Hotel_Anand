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

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "Hotel Booking", date: "", guests: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return alert("Please fill in your name and phone number.");
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%", padding: "0.9rem 1.2rem",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(201,168,76,0.25)",
    color: "#F5F0E8",
    fontFamily: "'Inter', sans-serif", fontSize: "0.88rem",
    outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.72rem", fontWeight: 600,
    letterSpacing: "0.15em", textTransform: "uppercase",
    color: "rgba(201,168,76,0.75)", marginBottom: "0.5rem"
  };

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
          background: "radial-gradient(ellipse 60% 70% at 50% 60%, rgba(74,14,26,0.85), #0E0305 70%)"
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "1.1rem", color: "rgba(201,168,76,0.7)", letterSpacing: "0.3em", marginBottom: "0.5rem"
          }}>We'd Love to Hear From You</p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#F5F0E8", fontWeight: 700
          }}>Contact Us</h1>
          <MandalaDivider />
          <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9rem" }}>
            Hotel Anand & Epicure Restaurant — Bilaspur, Chhattisgarh
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section style={{ background: "#1C1C1C", padding: "5rem 2.5rem" }}>
        <div style={{
          maxWidth: 1150, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start"
        }} className="contact-grid">

          {/* Info Panel */}
          <div>
            <p className="section-eyebrow">Get In Touch</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#F5F0E8",
              marginBottom: "0.5rem", lineHeight: 1.2
            }}>Reserve, Enquire or Just Say Hello</h2>
            <MandalaDivider />

            {[
              { icon: "📍", title: "Address", lines: ["Central Point, Old Bus Stand Road", "Bilaspur, Chhattisgarh — India"] },
              { icon: "📞", title: "Phone", lines: ["+91 78699 62000"], link: "tel:+917869962000" },
              { icon: "📸", title: "Instagram", lines: ["@epicure_bypunjabirestaurant"], link: "https://www.instagram.com/epicure_bypunjabirestaurant" },
              { icon: "⏰", title: "Restaurant Hours", lines: ["11:00 AM – 11:00 PM (All Days)"] },
              { icon: "🏨", title: "Hotel Front Desk", lines: ["Open 24 Hours · 7 Days a Week"] },
              { icon: "🍹", title: "Bar & Lounge", lines: ["12:00 PM – 11:30 PM"] },
            ].map(item => (
              <div key={item.title} style={{
                display: "flex", gap: "1.2rem", alignItems: "flex-start",
                padding: "1.2rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)"
              }}>
                <div style={{
                  width: 40, height: 40, border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", flexShrink: 0
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "0.3rem" }}>{item.title}</div>
                  {item.lines.map(line => (
                    item.link
                      ? <a key={line} href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer"
                        style={{ display: "block", fontSize: "0.88rem", color: "rgba(245,240,232,0.75)", textDecoration: "none", lineHeight: 1.7 }}
                        onMouseEnter={e => e.target.style.color = "#C9A84C"}
                        onMouseLeave={e => e.target.style.color = "rgba(245,240,232,0.75)"}
                      >{line}</a>
                      : <div key={line} style={{ fontSize: "0.88rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.7 }}>{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Call CTA */}
            <a href="tel:+917869962000" style={{
              display: "block", marginTop: "2rem", padding: "1rem",
              background: "#C9A84C", color: "#2E0810", textDecoration: "none",
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase",
              textAlign: "center", transition: "opacity 0.2s"
            }}
              onMouseEnter={e => e.target.style.opacity = "0.85"}
              onMouseLeave={e => e.target.style.opacity = "1"}
            >📞 Call Us Now</a>
          </div>

          {/* Booking Form */}
          <div style={{
            background: "#0E0305", padding: "2.5rem",
            border: "1px solid rgba(201,168,76,0.15)"
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✦</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem", color: "#C9A84C", marginBottom: "0.8rem"
                }}>Thank You, {form.name}!</h3>
                <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                  Your enquiry has been received. Our team will get back to you shortly on <strong style={{ color: "#C9A84C" }}>{form.phone}</strong>.<br />
                  For immediate assistance, call us at +91 78699 62000.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", type: "Hotel Booking", date: "", guests: "", message: "" }); }}
                  style={{
                    marginTop: "2rem", padding: "0.8rem 2rem",
                    background: "transparent", border: "1.5px solid #C9A84C",
                    color: "#C9A84C", fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
                    textTransform: "uppercase", cursor: "pointer"
                  }}>Send Another Enquiry</button>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem", color: "#C9A84C", marginBottom: "0.3rem"
                }}>Make a Booking Enquiry</h3>
                <p style={{ fontSize: "0.82rem", color: "rgba(245,240,232,0.5)", marginBottom: "2rem" }}>
                  Fill in the form below and we'll confirm your reservation within 2 hours.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      placeholder="Full Name" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1.2rem" }}>
                  <label style={labelStyle}>Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#C9A84C"}
                    onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                  />
                </div>

                <div style={{ marginBottom: "1.2rem" }}>
                  <label style={labelStyle}>Enquiry Type</label>
                  <select name="type" value={form.type} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={e => e.target.style.borderColor = "#C9A84C"}
                    onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                  >
                    {["Hotel Booking", "Restaurant Reservation", "Bar Reservation", "Private Event / Banquet", "Catering Enquiry", "General Query"].map(opt => (
                      <option key={opt} value={opt} style={{ background: "#1C1C1C" }}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }}>
                  <div>
                    <label style={labelStyle}>Date of Visit</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Number of Guests</label>
                    <input name="guests" value={form.guests} onChange={handleChange}
                      placeholder="e.g. 2 guests" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1.8rem" }}>
                  <label style={labelStyle}>Special Requests / Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="Any dietary requirements, special occasions, or questions..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = "#C9A84C"}
                    onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                  />
                </div>

                <button onClick={handleSubmit} style={{
                  width: "100%", padding: "1rem",
                  background: "#C9A84C", color: "#2E0810",
                  border: "none", fontFamily: "'Inter', sans-serif",
                  fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", cursor: "pointer", transition: "opacity 0.2s"
                }}
                  onMouseEnter={e => e.target.style.opacity = "0.85"}
                  onMouseLeave={e => e.target.style.opacity = "1"}
                >Send Enquiry ✦</button>

                <p style={{ fontSize: "0.73rem", color: "rgba(245,240,232,0.35)", marginTop: "1rem", textAlign: "center" }}>
                  We respect your privacy. Your details will only be used for this booking enquiry.
                </p>
              </>
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          }
        `}</style>
      </section>

      {/* Map placeholder */}
      <section style={{ background: "#0E0305", padding: "0" }}>
        <div style={{
          width: "100%", height: 320,
          background: "linear-gradient(135deg, #1C1C1C 0%, #2E0810 50%, #1C1C1C 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "1rem", position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.05,
            backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          <div style={{ fontSize: "2.5rem" }}>📍</div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem", color: "#C9A84C"
          }}>Hotel Anand, Bilaspur</div>
          <div style={{ fontSize: "0.85rem", color: "rgba(245,240,232,0.55)", textAlign: "center" }}>
            Central Point, Old Bus Stand Road, Bilaspur, Chhattisgarh
          </div>
          <a href="https://maps.google.com/?q=Hotel+Anand+Bilaspur+Chhattisgarh" target="_blank" rel="noreferrer"
            style={{
              marginTop: "0.5rem", padding: "0.65rem 1.8rem",
              background: "transparent", border: "1.5px solid #C9A84C",
              color: "#C9A84C", textDecoration: "none",
              fontFamily: "'Inter', sans-serif", fontSize: "0.75rem",
              fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase"
            }}>Open in Google Maps →</a>
        </div>
      </section>
    </div>
  );
}
