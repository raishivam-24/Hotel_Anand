import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", checkin: "", checkout: "", roomType: "Deluxe Room", guests: "1", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    if (!form.name || !form.phone) return alert("Please enter your name and phone number.");
    setSubmitted(true);
  };

  const inp = {
    width: "100%", padding: "0.85rem 1.1rem",
    background: "rgba(250,247,242,0.06)",
    border: "1px solid rgba(201,168,76,0.2)",
    color: "#FAF7F2", fontFamily: "'Inter',sans-serif",
    fontSize: "0.87rem", outline: "none",
    boxSizing: "border-box", transition: "border-color 0.2s"
  };
  const lbl = {
    display: "block", fontSize: "0.68rem", fontWeight: 700,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "rgba(201,168,76,0.7)", marginBottom: "0.45rem"
  };

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg,#060E1A 0%,#122040 100%)",
        padding: "9rem 2rem 5rem", textAlign: "center",
        minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "18px 18px" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow">Reach Out</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#FAF7F2", fontWeight: 700 }}>Contact & Booking</h1>
          <div className="gold-line center" />
          <p style={{ color: "rgba(250,247,242,0.6)", fontSize: "0.92rem" }}>We're ready to welcome you — 24 hours a day</p>
        </div>
      </section>

      {/* Contact + Form */}
      <section style={{ background: "#0A1628", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }} className="full-mobile">

          {/* Info */}
          <div>
            <span className="eyebrow">Hotel Anand</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", color: "#FAF7F2", marginBottom: "0.3rem" }}>Find Us & Reach Us</h2>
            <div className="gold-line" />

            {[
              { icon: "📍", title: "Address", lines: ["Central Point, Old Bus Stand Road", "Bilaspur, Chhattisgarh — India"] },
              { icon: "📞", title: "Phone", lines: ["+91 78699 62000"], link: "tel:+917869962000" },
              { icon: "📸", title: "Instagram", lines: ["@epicure_bypunjabirestaurant"], link: "https://www.instagram.com/epicure_bypunjabirestaurant" },
              { icon: "🕐", title: "Front Desk", lines: ["Open 24 Hours · 7 Days a Week"] },
              { icon: "🍳", title: "Breakfast", lines: ["7:00 AM – 10:30 AM Daily"] },
              { icon: "🅿️", title: "Parking", lines: ["Free for all hotel guests"] },
            ].map(item => (
              <div key={item.title} style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                padding: "1rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{
                  width: 38, height: 38, border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.95rem", flexShrink: 0
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "0.25rem" }}>{item.title}</div>
                  {item.lines.map(line => (
                    item.link
                      ? <a key={line} href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer"
                        style={{ display: "block", fontSize: "0.85rem", color: "rgba(250,247,242,0.65)", textDecoration: "none", lineHeight: 1.7 }}
                        onMouseEnter={e => e.target.style.color = "#C9A84C"}
                        onMouseLeave={e => e.target.style.color = "rgba(250,247,242,0.65)"}
                      >{line}</a>
                      : <div key={line} style={{ fontSize: "0.85rem", color: "rgba(250,247,242,0.55)", lineHeight: 1.7 }}>{line}</div>
                  ))}
                </div>
              </div>
            ))}

            <a href="tel:+917869962000" className="btn-gold" style={{ display: "block", textAlign: "center", marginTop: "2rem" }}>
              📞 Call Now to Book
            </a>

            {/* Map link */}
            <a href="https://maps.google.com/?q=Hotel+Anand+Bilaspur+Chhattisgarh" target="_blank" rel="noreferrer" style={{
              display: "block", textAlign: "center", marginTop: "0.8rem",
              padding: "0.8rem", border: "1px solid rgba(201,168,76,0.25)",
              color: "rgba(201,168,76,0.75)", fontSize: "0.78rem",
              fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", transition: "all 0.25s"
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#C9A84C"; e.target.style.color = "#C9A84C"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(201,168,76,0.25)"; e.target.style.color = "rgba(201,168,76,0.75)"; }}
            >📍 Open in Google Maps →</a>
          </div>

          {/* Booking Form */}
          <div style={{ background: "#060E1A", padding: "2.5rem", border: "1px solid rgba(201,168,76,0.15)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "2.5rem", color: "#C9A84C", marginBottom: "1rem" }}>✦</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", color: "#C9A84C", marginBottom: "0.8rem" }}>Thank You, {form.name}!</h3>
                <p style={{ color: "rgba(250,247,242,0.6)", fontSize: "0.88rem", lineHeight: 1.8 }}>
                  Your booking enquiry has been received. We'll call you on <strong style={{ color: "#C9A84C" }}>{form.phone}</strong> shortly to confirm your reservation.
                </p>
                <p style={{ color: "rgba(250,247,242,0.4)", fontSize: "0.8rem", marginTop: "1rem" }}>
                  For immediate assistance: <a href="tel:+917869962000" style={{ color: "#C9A84C" }}>+91 78699 62000</a>
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", checkin: "", checkout: "", roomType: "Deluxe Room", guests: "1", message: "" }); }} style={{
                  marginTop: "2rem", padding: "0.7rem 2rem",
                  background: "transparent", border: "1.5px solid #C9A84C",
                  color: "#C9A84C", fontFamily: "'Inter',sans-serif",
                  fontSize: "0.76rem", fontWeight: 600, letterSpacing: "0.12em",
                  textTransform: "uppercase", cursor: "pointer"
                }}>Make Another Enquiry</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "#C9A84C", marginBottom: "0.3rem" }}>Room Booking Enquiry</h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(250,247,242,0.4)", marginBottom: "2rem" }}>Fill in your details and we'll confirm within 2 hours</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem", marginBottom: "1.1rem" }}>
                  <div>
                    <label style={lbl}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={inp}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"} />
                  </div>
                  <div>
                    <label style={lbl}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inp}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"} />
                  </div>
                </div>

                <div style={{ marginBottom: "1.1rem" }}>
                  <label style={lbl}>Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inp}
                    onFocus={e => e.target.style.borderColor = "#C9A84C"}
                    onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem", marginBottom: "1.1rem" }}>
                  <div>
                    <label style={lbl}>Check-In Date</label>
                    <input type="date" name="checkin" value={form.checkin} onChange={handleChange} style={{ ...inp, colorScheme: "dark" }}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"} />
                  </div>
                  <div>
                    <label style={lbl}>Check-Out Date</label>
                    <input type="date" name="checkout" value={form.checkout} onChange={handleChange} style={{ ...inp, colorScheme: "dark" }}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem", marginBottom: "1.1rem" }}>
                  <div>
                    <label style={lbl}>Room Type</label>
                    <select name="roomType" value={form.roomType} onChange={handleChange} style={{ ...inp, cursor: "pointer" }}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"}>
                      {["Standard Room", "Deluxe Room", "Premium Suite", "Family Room"].map(r => (
                        <option key={r} value={r} style={{ background: "#0A1628" }}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={lbl}>Number of Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange} style={{ ...inp, cursor: "pointer" }}
                      onFocus={e => e.target.style.borderColor = "#C9A84C"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"}>
                      {["1", "2", "3", "4", "5+"].map(n => (
                        <option key={n} value={n} style={{ background: "#0A1628" }}>{n} Guest{n !== "1" ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "1.8rem" }}>
                  <label style={lbl}>Special Requests</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Early check-in, extra bedding, anniversary setup..."
                    style={{ ...inp, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = "#C9A84C"}
                    onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"} />
                </div>

                <button onClick={handleSubmit} className="btn-gold" style={{ width: "100%", textAlign: "center", border: "none" }}>
                  Send Booking Enquiry ✦
                </button>
                <p style={{ fontSize: "0.7rem", color: "rgba(250,247,242,0.3)", marginTop: "0.9rem", textAlign: "center" }}>
                  Your information is kept private and used only for this reservation.
                </p>
              </>
            )}
          </div>
        </div>
        <style>{`@media(max-width:768px){.full-mobile{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>
      </section>

      {/* Map strip */}
      <section style={{
        height: 280, background: "linear-gradient(135deg,#060E1A,#122040)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: "1rem", position: "relative"
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)", backgroundSize: "35px 35px" }} />
        <div style={{ fontSize: "2rem", position: "relative" }}>📍</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "#C9A84C", position: "relative" }}>Hotel Anand, Bilaspur</div>
        <div style={{ fontSize: "0.82rem", color: "rgba(250,247,242,0.5)", textAlign: "center", position: "relative" }}>Central Point, Old Bus Stand Road, Bilaspur, Chhattisgarh</div>
        <a href="https://maps.google.com/?q=Hotel+Anand+Bilaspur+Chhattisgarh" target="_blank" rel="noreferrer" className="btn-outline-gold" style={{ position: "relative", fontSize: "0.72rem", padding: "0.6rem 1.6rem" }}>
          Open in Google Maps →
        </a>
      </section>
    </div>
  );
}
