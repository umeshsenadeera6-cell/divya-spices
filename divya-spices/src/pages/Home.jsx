import { useEffect, useRef } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export default function Home({ navigate }) {
  const { showToast } = useCart();
  const emailRef = useRef();
  const featured = products.filter(p => p.popular).slice(0, 4);

  function subscribe() {
    const val = emailRef.current?.value || '';
    if (val && val.includes('@')) {
      showToast('🌿 Subscribed! Welcome to the Divya family.');
      emailRef.current.value = '';
    } else {
      showToast('⚠️ Please enter a valid email address.');
    }
  }

  return (
    <div className="page">
      {/* Urgency Banner */}
      <div className="urgency-banner">
        🌿 Free international shipping on orders over <strong>$75 USD</strong> · Limited stock · Order before <strong>midnight</strong> for same-day dispatch
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="hero__particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
              }}
            />
          ))}
        </div>
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />

        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              🌿 Certified Organic · Export Quality
            </div>
            <h1 className="hero__title">
              Pure <em>Ceylon Spices</em><br />From Heart of Sri Lanka
            </h1>
            <p className="hero__sub">
              Handpicked from the misty highlands and sun-drenched fields of Sri Lanka. Experience the world's finest spices — rich in flavour, steeped in heritage, certified organic.
            </p>
            <div className="hero__btns">
              <button className="btn-primary" onClick={() => navigate('shop')}>
                Shop Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn-outline" onClick={() => navigate('about')}>
                Our Story
              </button>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">18+</span>
                <span className="hero__stat-label">Years</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">40+</span>
                <span className="hero__stat-label">Countries</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">12K+</span>
                <span className="hero__stat-label">Customers</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            {products.slice(0, 4).map((p, i) => (
              <div
                key={p.id}
                className="hero-spice-card"
                style={{
                  background: p.gradient,
                  marginTop: i % 2 !== 0 ? '2rem' : '0',
                  animationDelay: `${i * 0.15}s`,
                }}
                onClick={() => navigate('product', p.id)}
              >
                <span className="hero-spice-card__emoji">{p.emoji}</span>
                <span className="hero-spice-card__label">{p.name}</span>
                <div className="hero-spice-card__shine" />
              </div>
            ))}
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        {[
          { icon: '🌿', label: '100% Certified Organic' },
          { icon: '✈️', label: 'Export to 40+ Countries' },
          { icon: '👐', label: 'Handpicked & Artisan' },
          { icon: '🏆', label: 'Award-Winning Quality' },
          { icon: '🔒', label: 'Secure Payments' },
        ].map((t, i) => (
          <div key={i} className="trust-item">
            <span className="trust-item__icon">{t.icon}</span>
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <section className="section">
        <div className="section__header">
          <div className="section-tag">Our Collection</div>
          <h2 className="section-title">Finest Ceylon Spices</h2>
          <p className="section-sub">Each spice is carefully selected, sun-dried, and packed to preserve maximum freshness and potency.</p>
        </div>
        <div className="products-grid">
          {featured.map(p => (
            <ProductCard key={p.id} product={p} onClick={id => navigate('product', id)} />
          ))}
        </div>
        <div className="section__cta">
          <button className="btn-primary" onClick={() => navigate('shop')}>
            View All Products →
          </button>
        </div>
      </section>

      {/* Benefits */}
      <div className="benefits-section">
        <div className="benefits-section__inner">
          <div className="section__header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ color: '#e8b95c' }}>Why Choose Us</div>
            <h2 className="section-title" style={{ color: '#fff' }}>The Divya Promise</h2>
          </div>
          <div className="benefits-grid">
            {[
              { icon: '🌱', title: 'Certified Organic', desc: 'Grown without pesticides or chemicals, certified by international organic bodies.' },
              { icon: '✋', title: 'Handpicked', desc: 'Every spice is hand-selected by experienced farmers at peak ripeness.' },
              { icon: '🌍', title: 'Export Quality', desc: 'Meeting international food safety standards for global export markets.' },
              { icon: '📦', title: 'Premium Packaging', desc: 'Air-sealed, UV-protected pouches that lock in freshness and aroma.' },
              { icon: '🏔️', title: 'Sri Lankan Heritage', desc: 'From the ancient spice-trading island — Ceylon spices are world-renowned.' },
              { icon: '🚀', title: 'Fast Worldwide Shipping', desc: 'Dispatched within 24 hours. Delivered fresh to your door, anywhere.' },
            ].map((b, i) => (
              <div key={i} className="benefit-card">
                <span className="benefit-card__icon">{b.icon}</span>
                <h3 className="benefit-card__title">{b.title}</h3>
                <p className="benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Marquee */}
      <section className="testimonials-section">
        <div className="section__header" style={{ textAlign: 'center' }}>
          <div className="section-tag">Reviews</div>
          <h2 className="section-title">What Customers Say</h2>
        </div>
        <div className="testimonials-track">
          {[
            { name: 'Emma W.', country: 'UK 🇬🇧', text: 'The chilli powder has an incredible depth of flavour. My curries are completely transformed!', stars: 5 },
            { name: 'Arjun K.', country: 'India 🇮🇳', text: "As someone from India I know my spices — Divya's black pepper is genuinely world-class.", stars: 5 },
            { name: 'Priya S.', country: 'Australia 🇦🇺', text: "I've been ordering for 2 years. The curry powder is exactly like my grandmother made in Colombo.", stars: 5 },
            { name: 'Marco L.', country: 'Italy 🇮🇹', text: 'The cardamom pods are the most aromatic I have ever used. Absolutely stunning quality.', stars: 5 },
            { name: 'Sara H.', country: 'Germany 🇩🇪', text: 'Ceylon tea is now my morning ritual. Nothing compares to the freshness of Divya Spices.', stars: 5 },
          ].map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.name[0]}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__country">{t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <div className="newsletter-section">
        <div className="newsletter-section__inner">
          <div className="newsletter-section__icon">🌿</div>
          <h2 className="newsletter-section__title">Get Recipes & Exclusive Offers</h2>
          <p className="newsletter-section__sub">Join 12,000+ spice lovers. Receive Ceylon recipes, harvest updates, and subscriber-only discounts.</p>
          <div className="newsletter-form">
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter your email address"
              className="newsletter-form__input"
            />
            <button className="btn-primary" onClick={subscribe}>Subscribe</button>
          </div>
          <p className="newsletter-section__note">🔒 No spam, ever. Unsubscribe any time.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__brand-name">🌿 Divya Spices</h3>
            <p className="footer__brand-desc">Pure Ceylon Spices from the heart of Sri Lanka. Handpicked, organic, and exported to the world with love and heritage since 2005.</p>
            <div className="social-links">
              {['f', '📷', '𝕏', '▶'].map((s, i) => (
                <a key={i} className="social-btn" title="Social">{s}</a>
              ))}
            </div>
          </div>
          {[
            {
              heading: 'Shop',
              links: [
                { label: 'All Spices', page: 'shop' },
                { label: 'Chilli Range', page: 'shop' },
                { label: 'Curry Blends', page: 'shop' },
                { label: 'Gift Sets', page: 'shop' },
                { label: 'Bulk Orders', page: 'shop' },
              ],
            },
            {
              heading: 'Company',
              links: [
                { label: 'About Us', page: 'about' },
                { label: 'Blog', page: 'blog' },
                { label: 'Contact', page: 'contact' },
                { label: 'Export Inquiry', page: 'contact' },
                { label: 'Careers', page: 'contact' },
              ],
            },
            {
              heading: 'Support',
              links: [
                { label: 'Shipping Info', page: 'contact' },
                { label: 'Returns', page: 'contact' },
                { label: 'FAQ', page: 'contact' },
                { label: 'Privacy Policy', page: 'contact' },
                { label: 'Terms of Service', page: 'contact' },
              ],
            },
          ].map(col => (
            <div key={col.heading} className="footer__col">
              <h4 className="footer__col-heading">{col.heading}</h4>
              <ul>
                {col.links.map(l => (
                  <li key={l.label}>
                    <button className="footer__link" onClick={() => navigate(l.page)}>{l.label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <div>© 2025 Divya Spices · Negombo, Sri Lanka · All rights reserved.</div>
          <div className="footer__badges">
            {['🌿 Organic Certified', '✈️ Export Quality', '🔒 SSL Secured', '💳 Secure Payments', '🏆 Award Winning'].map(b => (
              <span key={b} className="footer__badge">{b}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
