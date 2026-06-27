import { useState } from "react";
import MandalaDivider from "../components/MandalaDivider";
import { menuData } from "../data/menuData";
import { images } from "../data/images";
import { siteInfo } from "../data/siteData";
import "./Menu.css";

const vegFilters = [
  ["all", "All Items"],
  ["veg", "🟢 Veg Only"],
  ["nonveg", "🔴 Non-Veg"],
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Starters");
  const [filterVeg, setFilterVeg] = useState("all");

  const tabs = Object.keys(menuData);
  const items = menuData[activeTab].filter((item) => {
    if (filterVeg === "veg") return item.veg;
    if (filterVeg === "nonveg") return !item.veg;
    return true;
  });

  return (
    <div>
      {/* HERO */}
      <section className="menu-hero">
        <div className="menu-hero-bg" />
        <div className="menu-hero-content">
          <p className="menu-hero-eyebrow">Epicure by Punjabi Restaurant</p>
          <h1 className="menu-hero-title">Our Menu</h1>
          <MandalaDivider />
          <p className="menu-hero-desc">Crafted with tradition, plated with love</p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="menu-section">
        <div className="menu-section-inner">
          {/* Tab Nav */}
          <div className="menu-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`menu-tab-btn ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Veg filter */}
          <div className="menu-veg-filters">
            {vegFilters.map(([val, label]) => (
              <button
                key={val}
                onClick={() => setFilterVeg(val)}
                className={`menu-veg-btn ${filterVeg === val ? "active" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className="menu-items-grid">
            {items.map((item) => (
              <div key={item.name} className={`menu-item-card ${item.veg ? "veg" : ""}`}>
                <div style={{ flex: 1 }}>
                  <div className="menu-item-header">
                    <span className="menu-item-dot">{item.veg ? "🟢" : "🔴"}</span>
                    <h3 className="menu-item-name">{item.name}</h3>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
                <div className="menu-item-price">{item.price}</div>
              </div>
            ))}
          </div>

          {items.length === 0 && (
            <div className="menu-empty-state">No items match your filter in this category.</div>
          )}

          {/* Disclaimer */}
          <div className="menu-disclaimer">
            Prices are inclusive of all taxes. Menu items and prices subject to change. For dietary requirements or allergies, please inform our staff. <br />
            📞 For large orders & banquets: <a href={siteInfo.phoneHref} className="menu-disclaimer-link">{siteInfo.phone}</a>
          </div>
        </div>
      </section>

      {/* THALI BANNER */}
      <section className="menu-thali-banner">
        <div className="menu-thali-grid">
          <div className="menu-thali-image">
            {/* Replace src/data/images.js -> food.epicureThali with a real thali photo */}
            <img src={images.food.epicureThali} alt="The Epicure Thali" className="photo-fill" />
            <div className="menu-thali-image-overlay" />
          </div>
          <div className="menu-thali-text">
            <p className="section-eyebrow">Our Signature</p>
            <h2 className="menu-thali-heading">The Epicure Thali</h2>
            <p className="menu-thali-subtitle">A complete Punjabi meal, just ₹350 per person</p>
            <p className="menu-thali-desc">
              Includes dal makhani, seasonal sabzi, paneer curry, rice, 2 rotis, salad, pickle, papad, raita and dessert
            </p>
            <a href={siteInfo.phoneHref} className="btn-primary" style={{ textDecoration: "none" }}>
              Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
