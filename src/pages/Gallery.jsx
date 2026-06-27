import { useState } from "react";
import MandalaDivider from "../components/MandalaDivider";
import { galleryItems, galleryFilters } from "../data/galleryData";
import { siteInfo } from "../data/siteData";
import "./Gallery.css";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.cat === active);

  return (
    <div>
      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg" />
        <div className="gallery-hero-content">
          <p className="gallery-hero-eyebrow">A Visual Journey</p>
          <h1 className="gallery-hero-title">Gallery</h1>
          <MandalaDivider />
          <p className="gallery-hero-desc">Capturing moments of joy, flavour and elegance</p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-section">
        <div className="gallery-section-inner">
          {/* Filters */}
          <div className="gallery-filters">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`gallery-filter-btn ${active === f ? "active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={item.label}
                onClick={() => setLightbox(item)}
                className={`gallery-item ${i % 5 === 0 ? "aspect-wide" : "aspect-standard"} ${i % 7 === 0 ? "span-2" : ""}`}
                style={{ background: `linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%)` }}
              >
                {/* Replace this item's `img` path in src/data/galleryData.js with a real photo */}
                {item.img && <img src={item.img} alt={item.label} className="photo-fill" />}

                {!item.img && <div className="gallery-item-pattern" />}
                {!item.img && <div className="gallery-item-emoji">{item.emoji}</div>}

                <div className="gallery-item-badge">{item.cat}</div>

                <div className="gallery-item-hover-overlay">
                  <div>
                    <div className="gallery-item-hover-label">{item.label}</div>
                    <div className="gallery-item-hover-sub">{item.sub}</div>
                  </div>
                </div>

                <div className="gallery-item-bottom-label">
                  <div className="gallery-item-bottom-label-text">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="gallery-lightbox-backdrop" onClick={() => setLightbox(null)}>
          <div
            className="gallery-lightbox-box"
            onClick={(e) => e.stopPropagation()}
            style={{ background: `linear-gradient(135deg, ${lightbox.color1}, ${lightbox.color2})` }}
          >
            {lightbox.img ? (
              <img src={lightbox.img} alt={lightbox.label} className="photo-fill" />
            ) : (
              <div className="gallery-lightbox-emoji">{lightbox.emoji}</div>
            )}
            <div className="gallery-lightbox-caption">
              <div className="gallery-lightbox-label">{lightbox.label}</div>
              <div className="gallery-lightbox-sub">{lightbox.sub}</div>
            </div>
            <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}

      {/* FOLLOW US */}
      <section className="gallery-social">
        <p className="section-eyebrow">Social Media</p>
        <h2 className="gallery-social-heading">Follow Us on Instagram</h2>
        <p className="gallery-social-desc">
          {siteInfo.instagramHandle} — See our latest dishes, events and behind-the-scenes moments
        </p>
        <a href={siteInfo.instagramUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: "none" }}>
          📸 View on Instagram
        </a>
      </section>
    </div>
  );
}
