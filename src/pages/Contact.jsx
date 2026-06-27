import { useState } from "react";
import MandalaDivider from "../components/MandalaDivider";
import { siteInfo, contactDetails } from "../data/siteData";
import "./Contact.css";

const enquiryTypes = [
  "Hotel Booking",
  "Restaurant Reservation",
  "Bar Reservation",
  "Private Event / Banquet",
  "Catering Enquiry",
  "General Query",
];

const emptyForm = { name: "", phone: "", email: "", type: "Hotel Booking", date: "", guests: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return alert("Please fill in your name and phone number.");
    setSubmitted(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-content">
          <p className="contact-hero-eyebrow">We'd Love to Hear From You</p>
          <h1 className="contact-hero-title">Contact Us</h1>
          <MandalaDivider />
          <p className="contact-hero-desc">{siteInfo.name} & Epicure Restaurant — Bilaspur, Chhattisgarh</p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="contact-main">
        <div className="contact-grid">
          {/* Info Panel */}
          <div>
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="contact-info-heading">Reserve, Enquire or Just Say Hello</h2>
            <MandalaDivider />

            {contactDetails.map((item) => (
              <div key={item.title} className="contact-info-item">
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <div className="contact-info-title">{item.title}</div>
                  {item.lines.map((line) =>
                    item.link ? (
                      <a
                        key={line}
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="contact-info-link"
                      >
                        {line}
                      </a>
                    ) : (
                      <div key={line} className="contact-info-line">{line}</div>
                    )
                  )}
                </div>
              </div>
            ))}

            <a href={siteInfo.phoneHref} className="contact-call-cta">📞 Call Us Now</a>
          </div>

          {/* Booking Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✦</div>
                <h3 className="contact-success-title">Thank You, {form.name}!</h3>
                <p className="contact-success-desc">
                  Your enquiry has been received. Our team will get back to you shortly on{" "}
                  <strong className="contact-success-phone">{form.phone}</strong>.<br />
                  For immediate assistance, call us at {siteInfo.phone}.
                </p>
                <button
                  className="contact-success-btn"
                  onClick={() => { setSubmitted(false); setForm(emptyForm); }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Make a Booking Enquiry</h3>
                <p className="contact-form-subtitle">
                  Fill in the form below and we'll confirm your reservation within 2 hours.
                </p>

                <div className="contact-form-row">
                  <div>
                    <label className="contact-label">Your Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="contact-label">Phone Number *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">Email Address</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">Enquiry Type</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="contact-input contact-select"
                  >
                    {enquiryTypes.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-form-row">
                  <div>
                    <label className="contact-label">Date of Visit</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="contact-label">Number of Guests</label>
                    <input
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      placeholder="e.g. 2 guests"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-group message">
                  <label className="contact-label">Special Requests / Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any dietary requirements, special occasions, or questions..."
                    className="contact-input contact-textarea"
                  />
                </div>

                <button onClick={handleSubmit} className="contact-submit-btn">Send Enquiry ✦</button>

                <p className="contact-privacy-note">
                  We respect your privacy. Your details will only be used for this booking enquiry.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map-section">
        <div className="contact-map">
          <div className="contact-map-grid-pattern" />
          <div className="contact-map-pin">📍</div>
          <div className="contact-map-title">{siteInfo.name}, Bilaspur</div>
          <div className="contact-map-address">
            {siteInfo.address.line1}, {siteInfo.address.line2}
          </div>
          <a href={siteInfo.mapsUrl} target="_blank" rel="noreferrer" className="contact-map-link">
            Open in Google Maps →
          </a>
        </div>
      </section>
    </div>
  );
}
