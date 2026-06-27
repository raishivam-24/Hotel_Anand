import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MandalaDivider from "../components/MandalaDivider";
import { heroContent, features, highlights, aboutCards, testimonials } from "../data/homeData";
import { images } from "../data/images";
import { siteInfo } from "../data/siteData";
import "./Home.css";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="home-hero">
        {/* Hero background photo — replace public/images/hero/hero-main.jpg with a real shot */}
        <img
          src={images.hero.main}
          alt="Hotel Anand & Epicure Restaurant interior"
          className="home-hero-bg"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        />
        <div className="home-hero-overlay" />

        {/* Decorative corner ornaments */}
        {["topleft", "topright", "bottomleft", "bottomright"].map(pos => (
          <svg key={pos} width="80" height="80" viewBox="0 0 80 80" fill="none" className={`home-hero-corner ${pos}`}>
            <path d="M2 2 L30 2 L2 30" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
            <path d="M2 2 L12 2 L2 12" stroke="#C9A84C" strokeWidth="1" fill="none" />
          </svg>
        ))}

        {/* Hero Content */}
        <div className="home-hero-content">
          <p className="home-hero-eyebrow">{heroContent.eyebrow}</p>
          <h1 className="home-hero-title">{heroContent.title}</h1>
          <div className="home-hero-subtitle">{heroContent.subtitle}</div>

          <MandalaDivider />

          <p className="home-hero-desc">{heroContent.description}</p>

          <div className="home-hero-actions">
            <Link to="/hotel" className="btn-primary">Explore Rooms</Link>
            <Link to="/epicure" className="btn-outline">Dine with Us</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="home-hero-scroll">
          <span className="home-hero-scroll-label">Scroll</span>
          <div className="home-hero-scroll-line" />
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="home-features">
        <div className="home-features-grid">
          {features.map(f => (
            <div key={f.title} className="home-feature-card">
              <div className="home-feature-icon">{f.icon}</div>
              <h3 className="home-feature-title">{f.title}</h3>
              <p className="home-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="home-about">
        <div className="home-about-grid">
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="home-about-heading">A Landmark of Bilaspur's Hospitality</h2>
            <MandalaDivider />
            <p className="home-about-text">
              Nestled at the Central Point of Bilaspur's Old Bus Stand Road, Hotel Anand has been the city's trusted address for travelers and food lovers alike. We bring the warmth of Punjabi hospitality to every corner of Chhattisgarh.
            </p>
            <p className="home-about-text last">
              Our Epicure restaurant, helmed by master chefs trained in the finest Punjabi culinary traditions, serves dishes that celebrate the rich heritage of North Indian cuisine — from slow-cooked dal makhani to the finest kebabs, each plate tells a story.
            </p>
            <Link to="/hotel" className="btn-primary" style={{ textDecoration: "none" }}>Discover More</Link>
          </div>
          <div className="home-about-cards">
            {aboutCards.map((card) => (
              <div
                key={card.label}
                className="home-about-card"
                style={{ "--card-bg": card.bg, "--card-color": card.bg === "#C9A84C" ? "#2E0810" : "#F5F0E8" }}
              >
                {/* Replace card.img path in src/data/homeData.js with a real photo */}
                <img src={card.img} alt={card.label} className="photo-fill" />
                <div className="home-about-card-overlay" />
                <div className="home-about-card-content">
                  <div className="home-about-card-label">{card.label}</div>
                  <div className="home-about-card-sub">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="home-stats">
        <div className="home-stats-inner">
          <p className="section-eyebrow">By the Numbers</p>
          <h2 className="home-stats-heading">Excellence in Every Detail</h2>
          <div className="home-stats-grid">
            {highlights.map(h => (
              <div key={h.label} className="home-stat">
                <div className="home-stat-number">{h.number}</div>
                <div className="home-stat-label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPICURE PROMO */}
      <section className="home-epicure-promo">
        <div className="home-epicure-promo-pattern" />
        <div className="home-epicure-promo-inner">
          <p className="section-eyebrow">Fine Dining</p>
          <h2 className="home-epicure-promo-title">Epicure</h2>
          <p className="home-epicure-promo-subtitle">by Punjabi Restaurant</p>
          <MandalaDivider />
          <p className="home-epicure-promo-desc">
            Step into a world where every dish is a celebration. From sizzling tandoori platters and rich gravies to refreshing cocktails at our bar — Epicure is where Bilaspur comes to dine in style.
          </p>
          <div className="home-epicure-promo-actions">
            <Link to="/menu" className="btn-primary" style={{ textDecoration: "none" }}>View Our Menu</Link>
            <Link to="/epicure" className="btn-outline" style={{ textDecoration: "none" }}>About Epicure</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="home-testimonials">
        <div className="home-testimonials-inner">
          <p className="section-eyebrow">Guest Reviews</p>
          <h2 className="home-testimonials-heading">What Our Guests Say</h2>
          <div className="home-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="home-testimonial-card">
                <div className="home-testimonial-stars">{"★".repeat(t.stars)}</div>
                <p className="home-testimonial-text">"{t.text}"</p>
                <div className="home-testimonial-footer">
                  <div className="home-testimonial-name">{t.name}</div>
                  <div className="home-testimonial-role">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="home-cta">
        <h2 className="home-cta-heading">Ready for an Unforgettable Stay?</h2>
        <p className="home-cta-desc">Call us directly for bookings and special packages</p>
        <a href={siteInfo.phoneHref} className="home-cta-button">
          📞 {siteInfo.phone}
        </a>
      </section>
    </div>
  );
}
