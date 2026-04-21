import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar({ navigate, currentPage }) {
  const { cartCount, setCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'About', page: 'about' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <div className="navbar__inner">
          <div className="navbar__logo" onClick={() => navigate('home')}>
            <span className="navbar__logo-icon">🌿</span>
            <span>Divya<span className="navbar__logo-accent"> Spices</span></span>
          </div>

          <ul className="navbar__links">
            {navLinks.map(l => (
              <li key={l.page}>
                <button
                  className={`navbar__link ${currentPage === l.page ? 'navbar__link--active' : ''}`}
                  onClick={() => navigate(l.page)}
                >
                  {l.label}
                  {currentPage === l.page && <span className="navbar__link-dot" />}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button className="cart-btn" onClick={() => setCartOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Cart
              {cartCount > 0 && (
                <span className="cart-btn__badge">{cartCount}</span>
              )}
            </button>

            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        {navLinks.map(l => (
          <button
            key={l.page}
            className={`mobile-menu__link ${currentPage === l.page ? 'mobile-menu__link--active' : ''}`}
            onClick={() => { navigate(l.page); setMobileOpen(false); }}
          >
            {l.label}
          </button>
        ))}
      </div>
    </>
  );
}
