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

const menuData = {
  Starters: [
    { name: "Amritsari Fish Tikka", price: "₹280", veg: false, desc: "Ajwain-marinated fish fillets from the tandoor" },
    { name: "Paneer Tikka", price: "₹220", veg: true, desc: "Soft cottage cheese cubes with bell peppers in tandoor" },
    { name: "Seekh Kebab", price: "₹260", veg: false, desc: "Minced lamb with herbs on skewers, served with mint chutney" },
    { name: "Hara Bhara Kebab", price: "₹180", veg: true, desc: "Spinach, pea and potato patties with a crisp crust" },
    { name: "Malai Tikka", price: "₹300", veg: false, desc: "Chicken in cream and cheese marinade, melt-in-mouth texture" },
    { name: "Papdi Chaat", price: "₹120", veg: true, desc: "Classic street-style chaat with chutneys, sev and yoghurt" },
  ],
  "Main Course": [
    { name: "Dal Makhani", price: "₹200", veg: true, desc: "8-hour slow cooked black lentils in rich tomato-butter gravy" },
    { name: "Butter Chicken", price: "₹280", veg: false, desc: "Tender chicken in velvety tomato-based makhani sauce" },
    { name: "Shahi Paneer", price: "₹240", veg: true, desc: "Soft paneer cubes in a royal cashew and cream gravy" },
    { name: "Rogan Josh", price: "₹320", veg: false, desc: "Kashmiri lamb curry with aromatic whole spices" },
    { name: "Pindi Chole", price: "₹180", veg: true, desc: "Bold chickpeas cooked with whole spices and tamarind" },
    { name: "Mutton Korma", price: "₹360", veg: false, desc: "Tender mutton in a fragrant, mild almond-based sauce" },
    { name: "Kadai Paneer", price: "₹230", veg: true, desc: "Paneer with tomatoes and capsicum in a thick kadai masala" },
    { name: "Chicken Biryani", price: "₹300", veg: false, desc: "Fragrant basmati rice cooked with spiced chicken and saffron" },
  ],
  Breads: [
    { name: "Tandoori Roti", price: "₹30", veg: true, desc: "Whole wheat bread from clay tandoor" },
    { name: "Butter Naan", price: "₹50", veg: true, desc: "Leavened bread baked in tandoor, finished with butter" },
    { name: "Garlic Naan", price: "₹60", veg: true, desc: "Naan topped with minced garlic and fresh coriander" },
    { name: "Paratha", price: "₹45", veg: true, desc: "Layered whole wheat flatbread, pan-fried" },
    { name: "Makki di Roti", price: "₹55", veg: true, desc: "Traditional maize flour bread served with sarson da saag" },
    { name: "Kulcha", price: "₹55", veg: true, desc: "Soft stuffed bread, best with Pindi Chole" },
  ],
  Rice: [
    { name: "Plain Basmati Rice", price: "₹90", veg: true, desc: "Aged Basmati rice, perfectly steamed" },
    { name: "Jeera Rice", price: "₹110", veg: true, desc: "Basmati rice tempered with cumin and ghee" },
    { name: "Veg Biryani", price: "₹220", veg: true, desc: "Aromatic biryani with seasonal vegetables and saffron" },
    { name: "Chicken Dum Biryani", price: "₹300", veg: false, desc: "Slow-cooked in the dum style for deep, layered flavour" },
    { name: "Mutton Biryani", price: "₹380", veg: false, desc: "Premium mutton pieces with aged basmati and whole spices" },
  ],
  Desserts: [
    { name: "Gulab Jamun", price: "₹80", veg: true, desc: "Soft milk solids dumplings soaked in rose-cardamom syrup" },
    { name: "Kheer", price: "₹90", veg: true, desc: "Slow-cooked rice pudding with saffron, nuts, and cardamom" },
    { name: "Gajar Halwa", price: "₹110", veg: true, desc: "Caramelized carrot halwa with ghee and dry fruits" },
    { name: "Rasmalai", price: "₹100", veg: true, desc: "Spongy cheese dumplings in sweetened cardamom milk" },
    { name: "Kulfi Falooda", price: "₹130", veg: true, desc: "Traditional Indian ice cream with falooda sev and basil seeds" },
  ],
  "Bar Menu": [
    { name: "Bilaspur Sling", price: "₹220", veg: true, desc: "Our signature cocktail — gin, tamarind, ginger, lime" },
    { name: "Punjabi Mule", price: "₹200", veg: true, desc: "Vodka, ginger beer, amchur and fresh mint" },
    { name: "Whisky Sour", price: "₹250", veg: true, desc: "Premium scotch with lemon juice and honey" },
    { name: "Virgin Mojito", price: "₹100", veg: true, desc: "Refreshing mocktail with mint, lime, and soda" },
    { name: "Mango Lassi", price: "₹80", veg: true, desc: "Sweet yoghurt drink with ripe Alphonso mango" },
    { name: "Masala Chai", price: "₹40", veg: true, desc: "Spiced ginger tea, the perfect close to any meal" },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Starters");
  const [filterVeg, setFilterVeg] = useState("all"); // all | veg | nonveg

  const tabs = Object.keys(menuData);
  const items = menuData[activeTab].filter(item => {
    if (filterVeg === "veg") return item.veg;
    if (filterVeg === "nonveg") return !item.veg;
    return true;
  });

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
          }}>Epicure by Punjabi Restaurant</p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#F5F0E8", fontWeight: 700
          }}>Our Menu</h1>
          <MandalaDivider />
          <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9rem" }}>
            Crafted with tradition, plated with love
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section style={{ background: "#F5F0E8", padding: "4rem 2.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Tab Nav */}
          <div style={{
            display: "flex", gap: "0.5rem", flexWrap: "wrap",
            marginBottom: "1.5rem", justifyContent: "center"
          }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: "0.6rem 1.4rem",
                background: activeTab === tab ? "#4A0E1A" : "transparent",
                color: activeTab === tab ? "#C9A84C" : "#4A0E1A",
                border: "1.5px solid #4A0E1A",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", cursor: "pointer",
                transition: "all 0.2s"
              }}>{tab}</button>
            ))}
          </div>

          {/* Veg filter */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            {[["all", "All Items"], ["veg", "🟢 Veg Only"], ["nonveg", "🔴 Non-Veg"]].map(([val, label]) => (
              <button key={val} onClick={() => setFilterVeg(val)} style={{
                padding: "0.4rem 1rem",
                background: filterVeg === val ? "#C9A84C" : "transparent",
                color: filterVeg === val ? "#2E0810" : "#666",
                border: "1px solid #C9A84C",
                fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s", borderRadius: "0"
              }}>{label}</button>
            ))}
          </div>

          {/* Items Grid */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.2rem"
          }}>
            {items.map((item, i) => (
              <div key={i} style={{
                background: "#FFFFFF", padding: "1.5rem",
                borderLeft: `3px solid ${item.veg ? "#8B9E7A" : "#C9A84C"}`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                display: "flex", justifyContent: "space-between", gap: "1rem",
                transition: "transform 0.2s"
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateX(4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "0.6rem" }}>{item.veg ? "🟢" : "🔴"}</span>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem", color: "#4A0E1A"
                    }}>{item.name}</h3>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "#888", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem", fontWeight: 700,
                  color: "#C9A84C", whiteSpace: "nowrap",
                  alignSelf: "center"
                }}>{item.price}</div>
              </div>
            ))}
          </div>

          {items.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem", color: "#999" }}>
              No items match your filter in this category.
            </div>
          )}

          {/* Disclaimer */}
          <div style={{
            marginTop: "2.5rem", padding: "1.5rem",
            background: "rgba(74,14,26,0.06)", border: "1px solid rgba(74,14,26,0.1)",
            fontSize: "0.78rem", color: "#888", textAlign: "center"
          }}>
            Prices are inclusive of all taxes. Menu items and prices subject to change. For dietary requirements or allergies, please inform our staff. <br />
            📞 For large orders & banquets: <a href="tel:+917869962000" style={{ color: "#4A0E1A" }}>+91 78699 62000</a>
          </div>
        </div>
      </section>

      {/* Thali Banner */}
      <section style={{ background: "#4A0E1A", padding: "4rem 2.5rem", textAlign: "center" }}>
        <p className="section-eyebrow">Our Signature</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#F5F0E8",
          marginBottom: "0.8rem"
        }}>The Epicure Thali</h2>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
          fontSize: "1.1rem", color: "#C9A84C", marginBottom: "1rem"
        }}>A complete Punjabi meal, just ₹350 per person</p>
        <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9rem", maxWidth: 500, margin: "0 auto 2rem" }}>
          Includes dal makhani, seasonal sabzi, paneer curry, rice, 2 rotis, salad, pickle, papad, raita and dessert
        </p>
        <a href="tel:+917869962000" className="btn-primary" style={{ textDecoration: "none" }}>
          Order Now
        </a>
      </section>
    </div>
  );
}
