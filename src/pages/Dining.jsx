import ImageBox from "../components/ImageBox";

const breakfast = [
  { name: "Aloo Paratha", sub: "With butter, curd & pickle", veg: true },
  { name: "Poha", sub: "Flattened rice with peanuts & lemon", veg: true },
  { name: "Upma", sub: "Semolina with vegetables", veg: true },
  { name: "Bread & Butter Toast", sub: "With jam, omelette or boiled egg", veg: false },
  { name: "Idli Sambhar", sub: "Steamed rice cakes with lentil soup", veg: true },
  { name: "Puri Bhaji", sub: "Deep-fried bread with potato curry", veg: true },
  { name: "Omelette / Egg Bhurji", sub: "2-egg preparation with toast", veg: false },
  { name: "Fresh Fruit Plate", sub: "Seasonal fruits daily", veg: true },
  { name: "Masala Chai", sub: "Spiced ginger tea", veg: true },
  { name: "Coffee / Milk", sub: "Hot beverages", veg: true },
];

const lunch = [
  { name: "Dal Tadka", sub: "Yellow lentils with cumin & ghee", veg: true },
  { name: "Mix Veg Sabzi", sub: "Seasonal vegetables in masala", veg: true },
  { name: "Paneer Butter Masala", sub: "Cottage cheese in rich gravy", veg: true },
  { name: "Chicken Curry", sub: "Home-style Chhattisgarhi chicken", veg: false },
  { name: "Plain / Jeera Rice", sub: "Basmati rice — steamed or tempered", veg: true },
  { name: "Roti / Paratha", sub: "Freshly made whole wheat bread", veg: true },
  { name: "Raita", sub: "Chilled yogurt with cucumber", veg: true },
  { name: "Salad", sub: "Fresh seasonal salad plate", veg: true },
];

export default function Dining() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #060E1A 0%, #122040 100%)",
        padding: "9rem 2rem 5rem", textAlign: "center",
        minHeight: "45vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "18px 18px" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow">In-House Dining</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#FAF7F2", fontWeight: 700 }}>Breakfast & Dining</h1>
          <div className="gold-line center" />
          <p style={{ color: "rgba(250,247,242,0.6)", fontSize: "0.92rem", maxWidth: 480, margin: "0 auto" }}>
            Start your day right with our hearty breakfast, and enjoy wholesome meals all day
          </p>
        </div>
      </section>

      {/* Breakfast Section */}
      <section style={{ background: "#FAF7F2", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="full-mobile">

            {/* Info */}
            <div>
              <span className="eyebrow">Morning Meal</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#0A1628", lineHeight: 1.2 }}>Hotel Breakfast</h2>
              <div className="gold-line" />

              <div style={{
                background: "#C9A84C", padding: "1rem 1.5rem",
                display: "inline-flex", alignItems: "center", gap: "1rem",
                marginBottom: "1.5rem", marginTop: "0.5rem"
              }}>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(10,22,40,0.65)" }}>Breakfast Time</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "#0A1628" }}>7:00 AM – 10:30 AM</div>
                </div>
                <div style={{ fontSize: "1.5rem" }}>🍳</div>
              </div>

              <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#666", marginBottom: "1.5rem" }}>
                Our in-house breakfast is crafted fresh every morning by our kitchen team. We offer a rotating menu of Indian breakfast favourites — from hot parathas to idli-sambhar, poha and more.
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#666", marginBottom: "2rem" }}>
                <strong style={{ color: "#0A1628" }}>Complimentary</strong> for Deluxe Room and Suite guests. Available at an additional charge for Standard Room guests.
              </p>

              {/* Breakfast items */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                {breakfast.map(item => (
                  <div key={item.name} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.5rem",
                    padding: "0.7rem", background: "#FFFFFF",
                    borderLeft: `3px solid ${item.veg ? "#8B9E7A" : "#C9A84C"}`,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.04)"
                  }}>
                    <span style={{ fontSize: "0.55rem", marginTop: "2px" }}>{item.veg ? "🟢" : "🔴"}</span>
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0A1628" }}>{item.name}</div>
                      <div style={{ fontSize: "0.7rem", color: "#999" }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <ImageBox src="/images/dining/breakfast-spread.jpg" emoji="🍳" label="Breakfast Spread" aspectRatio="16/10" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                <ImageBox src="/images/dining/breakfast-paratha.jpg" emoji="🥙" label="Aloo Paratha" aspectRatio="4/3" />
                <ImageBox src="/images/dining/breakfast-chai.jpg" emoji="☕" label="Masala Chai" aspectRatio="4/3" />
              </div>
              <ImageBox src="/images/dining/dining-area.jpg" emoji="🍽️" label="Dining Area" aspectRatio="16/9" />
            </div>
          </div>
        </div>
      </section>

      {/* Lunch Section */}
      <section style={{ background: "#122040", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="full-mobile">

            {/* Photos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <ImageBox src="/images/dining/lunch-thali.jpg" emoji="🥘" label="Lunch Thali" aspectRatio="16/10" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                <ImageBox src="/images/dining/dal-rice.jpg" emoji="🍚" label="Dal & Rice" aspectRatio="4/3" />
                <ImageBox src="/images/dining/roti-sabzi.jpg" emoji="🫓" label="Roti & Sabzi" aspectRatio="4/3" />
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="eyebrow">Midday Meals</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#FAF7F2", lineHeight: 1.2 }}>Lunch & Room Service</h2>
              <div className="gold-line" />

              <div style={{
                border: "1px solid rgba(201,168,76,0.3)", padding: "1rem 1.5rem",
                display: "inline-flex", alignItems: "center", gap: "1rem",
                marginBottom: "1.5rem", marginTop: "0.5rem"
              }}>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>Lunch Hours</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "#C9A84C" }}>12:00 PM – 3:30 PM</div>
                </div>
                <div style={{ fontSize: "1.5rem" }}>🍛</div>
              </div>

              <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "rgba(250,247,242,0.65)", marginBottom: "1.5rem" }}>
                Our kitchen serves hearty North Indian and Chhattisgarhi meals for lunch. Whether you prefer a full thali or à la carte, our chefs prepare each dish with home-style care and fresh ingredients.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "2rem" }}>
                {lunch.map(item => (
                  <div key={item.name} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.5rem",
                    padding: "0.7rem", background: "rgba(255,255,255,0.04)",
                    borderLeft: `3px solid ${item.veg ? "rgba(139,158,122,0.6)" : "rgba(201,168,76,0.5)"}`,
                  }}>
                    <span style={{ fontSize: "0.55rem", marginTop: "2px" }}>{item.veg ? "🟢" : "🔴"}</span>
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#FAF7F2" }}>{item.name}</div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(250,247,242,0.4)" }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "1.2rem", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div style={{ fontSize: "0.78rem", color: "#C9A84C", fontWeight: 600, marginBottom: "0.3rem" }}>🛎️ Room Service Available</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(250,247,242,0.55)" }}>Order to your room from 7:00 AM – 11:00 PM daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epicure promo */}
      <section style={{ background: "#C9A84C", padding: "4rem 2rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "#0A1628" }}>Attached Restaurant</span>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem,3.5vw,2.5rem)", color: "#0A1628", marginBottom: "0.8rem" }}>
          Also Visit Epicure by Punjabi Restaurant
        </h2>
        <p style={{ color: "rgba(10,22,40,0.7)", fontSize: "0.92rem", maxWidth: 500, margin: "0 auto 2rem" }}>
          For a full fine dining experience with an elaborate menu of Punjabi specialties and a well-stocked bar — visit our attached restaurant, open daily 11 AM – 11 PM
        </p>
        <a href="tel:+917869962000" style={{
          display: "inline-block", padding: "0.9rem 2.5rem",
          background: "#0A1628", color: "#C9A84C",
          fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em",
          textTransform: "uppercase", textDecoration: "none"
        }}>📞 Call for Reservations</a>
      </section>

      <style>{`@media(max-width:768px){.full-mobile{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>
    </div>
  );
}
