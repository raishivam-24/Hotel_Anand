import { Link } from "react-router-dom";
import { siteInfo, footerQuickLinks, openingHours } from "../data/siteData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <h3 className="footer-brand-title">{siteInfo.name}</h3>
            <p className="footer-brand-subtitle">{siteInfo.tagline}</p>
            <p className="footer-brand-desc">
              A legacy of warm hospitality and culinary excellence at the heart of Bilaspur, Chhattisgarh.
            </p>
            <div className="footer-social-row">
              <a href={siteInfo.instagramUrl} target="_blank" rel="noreferrer" className="footer-social-icon">
                📸
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-heading">Quick Links</h4>
            {footerQuickLinks.map((l, i) => (
              <Link key={`${l.label}-${i}`} to={l.to} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-heading">Contact</h4>
            <div className="footer-contact-block">
              <div>📍 {siteInfo.address.line1}</div>
              <div className="footer-contact-indent">{siteInfo.address.line2}</div>
              <div className="footer-contact-row">
                📞 <a href={siteInfo.phoneHref} className="footer-contact-link">{siteInfo.phone}</a>
              </div>
              <div className="footer-contact-row">⏰ Restaurant: 11 AM – 11 PM</div>
              <div>🏨 Hotel: 24 × 7 Check-in</div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="footer-col-heading">Opening Hours</h4>
            <div className="footer-hours-list">
              {openingHours.map(({ label, time }) => (
                <div key={label} className="footer-hours-row">
                  <span className="footer-hours-label">{label}</span>
                  <span className="footer-hours-time">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span>© 2025 {siteInfo.name} & Epicure Restaurant, Bilaspur. All rights reserved.</span>
          <span className="footer-bottom-tagline">Crafted with ✦ for our guests</span>
        </div>
      </div>
    </footer>
  );
}
