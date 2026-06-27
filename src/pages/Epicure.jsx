import { Link } from "react-router-dom";
import MandalaDivider from "../components/MandalaDivider";
import { philosophyPoints, specialties, barOfferings } from "../data/epicureData";
import { images } from "../data/images";
import { siteInfo, openingHours } from "../data/siteData";
import "./Epicure.css";

export default function Epicure() {
  const barHours = openingHours.find((h) => h.label === "Bar & Lounge")?.time;

  return (
    <div>
      {/* HERO */}
      <section className="epicure-hero">
        {/* Replace src/data/images.js -> bar.lounge or add a dedicated hero image here for a real restaurant photo */}
        <img src={images.bar.lounge} alt="Epicure restaurant interior" className="epicure-hero-bg" />
        <div className="epicure-hero-overlay" />
        <div className="epicure-hero-content">
          <p className="epicure-hero-eyebrow">Fine Dining at Hotel Anand</p>
          <h1 className="epicure-hero-title">Epicure</h1>
          <div className="epicure-hero-subtitle">by Punjabi Restaurant</div>
          <MandalaDivider />
          <p className="epicure-hero-desc">
            Where the soulful flavours of Punjab meet the elegance of fine dining
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="epicure-philosophy">
        <div className="epicure-philosophy-grid">
          <div>
            <p className="section-eyebrow">Our Philosophy</p>
            <h2 className="epicure-philosophy-heading">Cooking is an Act of Love</h2>
            <MandalaDivider />
            <p className="epicure-philosophy-text">
              At Epicure, we believe that food is more than sustenance — it's memory, identity, and celebration. Our chefs bring decades of Punjabi culinary tradition to every dish, using hand-ground spices, slow cooking methods, and the freshest local produce.
            </p>
            <p className="epicure-philosophy-text last">
              From the earthy warmth of our dal makhani to the delicate smokiness of our tandoori preparations, every plate at Epicure is crafted to evoke the heartlands of Punjab.
            </p>
            <div className="epicure-philosophy-actions">
              <Link to="/menu" className="btn-primary" style={{ textDecoration: "none" }}>View Full Menu</Link>
              <a href={siteInfo.phoneHref} className="btn-outline" style={{ textDecoration: "none" }}>Reserve a Table</a>
            </div>
          </div>

          <div className="epicure-philosophy-points">
            {philosophyPoints.map((item) => (
              <div key={item.title} className="epicure-philosophy-point">
                <span className="epicure-philosophy-point-icon">{item.icon}</span>
                <div>
                  <div className="epicure-philosophy-point-title">{item.title}</div>
                  <div className="epicure-philosophy-point-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHEF'S SPECIALTIES */}
      <section className="epicure-specialties">
        <div className="epicure-specialties-inner">
          <div className="epicure-specialties-heading-wrap">
            <p className="section-eyebrow">House Signatures</p>
            <h2 className="epicure-specialties-heading">Chef's Specialties</h2>
            <MandalaDivider />
          </div>

          <div className="epicure-specialties-grid">
            {specialties.map((dish) => (
              <div key={dish.name} className="epicure-dish-card">
                <div className="epicure-dish-image">
                  {/* Replace this dish's path in src/data/epicureData.js with a real plated photo */}
                  <img src={dish.img} alt={dish.name} className="photo-fill" />
                  <div className="epicure-dish-image-overlay" />
                  <div className={`epicure-dish-badge ${dish.veg ? "veg" : "nonveg"}`}>
                    {dish.veg ? "VEG" : "NON-VEG"}
                  </div>
                </div>
                <div className="epicure-dish-body">
                  <h3 className="epicure-dish-name">{dish.name}</h3>
                  <p className="epicure-dish-origin">{dish.origin}</p>
                  <p className="epicure-dish-desc">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="epicure-specialties-footer">
            <Link to="/menu" className="btn-outline" style={{ textDecoration: "none" }}>See Full Menu →</Link>
          </div>
        </div>
      </section>

      {/* BAR */}
      <section className="epicure-bar">
        <div className="epicure-bar-inner">
          <div className="epicure-bar-heading-wrap">
            <p className="section-eyebrow">Bar & Lounge</p>
            <h2 className="epicure-bar-heading">The Epicure Bar</h2>
            <p className="epicure-bar-subtitle">Where every evening becomes a story</p>
            <MandalaDivider />
            <p className="epicure-bar-desc">
              Our bar is a curated space for unwinding. Premium spirits, house cocktails crafted with local ingredients, and a lounge setting perfect for business or leisure.
            </p>
          </div>

          {/* Bar ambience photo */}
          <div className="epicure-bar-visual">
            {/* Replace src/data/images.js -> bar.lounge with a real bar/lounge photo */}
            <img src={images.bar.lounge} alt="Epicure bar and lounge" className="photo-fill" />
            <div className="epicure-bar-visual-overlay" />
            <div className="epicure-bar-visual-caption">An evening at Epicure</div>
          </div>

          <div className="epicure-bar-grid">
            {barOfferings.map((section) => (
              <div key={section.cat} className="epicure-bar-category">
                <h3 className="epicure-bar-category-title">{section.cat}</h3>
                {section.items.map((item) => (
                  <div key={item} className="epicure-bar-item">
                    <span className="epicure-bar-item-bullet">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="epicure-bar-info">
            <p className="epicure-bar-info-line">
              🕐 Bar Hours: <span className="epicure-bar-info-gold">{barHours}</span> &nbsp;|&nbsp;
              📞 Reservations: <a href={siteInfo.phoneHref} className="epicure-bar-info-link">{siteInfo.phone}</a>
            </p>
            <p className="epicure-bar-disclaimer">
              LIQUOR CONSUMPTION VALID FOR GUESTS 25 YEARS & ABOVE · DRINK RESPONSIBLY
            </p>
          </div>
        </div>
      </section>

      {/* AMBIENCE / CTA */}
      <section className="epicure-ambience">
        <h2 className="epicure-ambience-heading">An Atmosphere Like No Other</h2>
        <p className="epicure-ambience-desc">
          Our dining room blends warm lighting, traditional craftsmanship, and modern elegance to create a setting worthy of your most special moments.
        </p>
        <div className="epicure-ambience-actions">
          <Link to="/gallery" className="epicure-ambience-btn-solid">View Gallery</Link>
          <a href={siteInfo.phoneHref} className="epicure-ambience-btn-outline">Reserve a Table</a>
        </div>
      </section>
    </div>
  );
}
