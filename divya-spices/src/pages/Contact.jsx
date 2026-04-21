import { useRef } from 'react';
import { useCart } from '../context/CartContext';

export default function Contact() {
  const { showToast } = useCart();

  function handleSubmit(e) {
    e.preventDefault();
    showToast("✅ Message sent! We'll reply within 24 hours.");
    e.target.reset();
  }

  return (
    <div className="page">
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #0a1f0d 0%, #1e3a5f 60%, #2563eb 100%)' }}>
        <div className="page-header__inner">
          <div className="section-tag" style={{ color: '#93c5fd' }}>Reach Out</div>
          <h1 className="page-header__title">Get In Touch</h1>
          <p className="page-header__sub">Questions, bulk orders, or export inquiries — we'd love to hear from you</p>
        </div>
        <div className="page-header__orb page-header__orb--1" />
        <div className="page-header__orb page-header__orb--2" />
      </div>

      <section className="section">
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">Let's Talk Spices</h2>
            <p className="contact-info__desc">
              Whether you're a home cook looking for authentic Ceylon flavours or a business seeking premium spice exports — we're here to help.
            </p>
            {[
              { icon: '📍', label: 'Address', val: 'No. 45, Spice Garden Road\nNegombo, Western Province\nSri Lanka 11500' },
              { icon: '📞', label: 'Phone', val: '+94 31 222 5678\nWhatsApp: +94 77 234 5678' },
              { icon: '✉️', label: 'Email', val: 'hello@divyaspices.lk\nexport@divyaspices.lk' },
              { icon: '⏰', label: 'Hours', val: 'Mon – Fri: 8:00 AM – 6:00 PM IST\nSat: 9:00 AM – 2:00 PM IST' },
            ].map(item => (
              <div key={item.label} className="contact-item">
                <span className="contact-item__icon">{item.icon}</span>
                <div>
                  <div className="contact-item__label">{item.label}</div>
                  <div className="contact-item__val">{item.val.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < item.val.split('\n').length - 1 && <br />}</span>
                  ))}</div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="contact-map">
              <span>🗺️</span>
              <span>Negombo, Sri Lanka</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-card__title">Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Kasun" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Perera" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="kasun@example.com" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Wholesale / Export</option>
                  <option>Order Support</option>
                  <option>Product Question</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us how we can help..." rows="5" required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
