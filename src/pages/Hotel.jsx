import { Link } from "react-router-dom";
import MandalaDivider from "../components/MandalaDivider";
import { rooms, hotelAmenities, aboutHotelStats } from "../data/hotelData";
import { siteInfo } from "../data/siteData";
import "./Hotel.css";

export default function Hotel() {
  return (
    <div>
      {/* HERO */}
      <section className="hotel-hero">
        <div className="hotel-hero-pattern" />
        <div className="hotel-hero-content">
          <p className="section-eyebrow">Rest & Rejuvenate</p>
          <h1 className="hotel-hero-title">Hotel Anand</h1>
          <MandalaDivider light />
          <p className="hotel-hero-desc">
            Premium accommodations in the heart of Bilaspur — where comfort meets tradition
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="hotel-about">
        <div className="hotel-about-grid two-col">
          <div className="hotel-about-text-col">
            <p className="section-eyebrow">About Our Hotel</p>
            <h2 className="hotel-about-heading">Your Home Away from Home</h2>
            <MandalaDivider />
            <p className="hotel-about-copy">
              Hotel Anand stands at the prime Central Point location on Old Bus Stand Road, Bilaspur — making us the most conveniently located hotel in the city. Whether you're visiting for business, family occasions, or leisure, we ensure your stay is comfortable, safe, and memorable.
            </p>
            <p className="hotel-about-copy last">
              Our rooms are designed with a careful blend of modern amenities and classic Indian hospitality. With 24-hour service, a superb in-house restaurant, and a vibrant bar, Hotel Anand is more than just a place to stay — it's an experience.
            </p>
            <a href={siteInfo.phoneHref} className="btn-primary" style={{ textDecoration: "none" }}>
              📞 Book by Phone
            </a>
          </div>
          <div className="hotel-about-stats">
            {aboutHotelStats.map(([icon, title, sub]) => (
              <div key={title}>
                <div className="hotel-about-icon">{icon}</div>
                <div className="hotel-about-title">{title}</div>
                <div className="hotel-about-sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="hotel-rooms">
        <div className="hotel-rooms-inner">
          <div className="hotel-rooms-heading-wrap">
            <p className="section-eyebrow">Accommodation</p>
            <h2 className="hotel-rooms-heading">Choose Your Room</h2>
            <MandalaDivider />
          </div>

          <div className="hotel-rooms-grid">
            {rooms.map((room) => (
              <div key={room.title} className="hotel-room-card">
                <div className="hotel-room-image" style={{ "--room-color": room.color }}>
                  {/* Replace this room's `img` path in src/data/hotelData.js with a real photo */}
                  <img src={room.img} alt={room.title} className="photo-fill" />
                  <div className="hotel-room-image-overlay" />
                  {room.badge && <span className="hotel-room-badge">{room.badge}</span>}
                  <div className="hotel-room-image-title">{room.title}</div>
                </div>

                <div className="hotel-room-body">
                  <div className="hotel-room-price-row">
                    <span className="hotel-room-price">{room.price}</span>
                    <span className="hotel-room-price-suffix">{room.suffix}</span>
                  </div>
                  <p className="hotel-room-highlight">{room.highlight}</p>

                  {(room.size || room.beds || room.maxGuests) && (
                    <div className="hotel-room-specs">
                      {room.size && <span>📐 {room.size}</span>}
                      {room.beds && <span>🛏️ {room.beds}</span>}
                      {room.maxGuests && <span>👥 {room.maxGuests}</span>}
                    </div>
                  )}

                  <ul className="hotel-room-amenities">
                    {room.amenities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>

                  {room.ratePlans && (
                    <div className="hotel-room-rateplans">
                      {room.ratePlans.map((plan) => (
                        <div key={plan.label} className="hotel-room-rateplan">
                          <span className="hotel-room-rateplan-label">{plan.label}</span>
                          <span className="hotel-room-rateplan-prices">
                            {plan.strikePrice && <span className="hotel-room-rateplan-strike">{plan.strikePrice}</span>}
                            <span className="hotel-room-rateplan-price">{plan.price}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a href={siteInfo.phoneHref} className="btn-primary hotel-room-cta">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="hotel-amenities">
        <div className="hotel-amenities-inner">
          <p className="section-eyebrow">What's Included</p>
          <h2 className="hotel-amenities-heading">Hotel Amenities</h2>
          <div className="hotel-amenities-grid">
            {hotelAmenities.map((a) => (
              <div key={a.label} className="hotel-amenity-card">
                <div className="hotel-amenity-icon">{a.icon}</div>
                <div className="hotel-amenity-label">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hotel-cta">
        <p className="section-eyebrow">Get in Touch</p>
        <h2 className="hotel-cta-heading">Ready to Book Your Stay?</h2>
        <p className="hotel-cta-desc">Call us directly or visit our contact page for reservations and queries</p>
        <div className="hotel-cta-actions">
          <a href={siteInfo.phoneHref} className="btn-primary" style={{ textDecoration: "none" }}>📞 Call Now</a>
          <Link to="/contact" className="btn-outline" style={{ textDecoration: "none" }}>Contact Page</Link>
        </div>
      </section>
    </div>
  );
}
