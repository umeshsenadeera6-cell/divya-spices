import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const filters = [
  { label: 'All Products', key: 'all' },
  { label: 'Chilli', key: 'chilli' },
  { label: 'Pepper', key: 'pepper' },
  { label: 'Curry', key: 'curry' },
  { label: 'Tea', key: 'tea' },
  { label: 'Best Sellers', key: 'popular' },
];

export default function Shop({ navigate }) {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? products
      : active === 'popular'
      ? products.filter(p => p.popular)
      : products.filter(p => p.cat === active);

  return (
    <div className="page">
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #1a0a04 0%, #5c3d1e 60%, #c9953a 100%)' }}>
        <div className="page-header__inner">
          <div className="section-tag" style={{ color: '#e8b95c' }}>Premium Selection</div>
          <h1 className="page-header__title">Our Spice Collection</h1>
          <p className="page-header__sub">Premium organic Ceylon spices, handpicked and export-ready</p>
        </div>
        <div className="page-header__orb page-header__orb--1" />
        <div className="page-header__orb page-header__orb--2" />
      </div>

      <section className="section">
        <div className="shop-filters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${active === f.key ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="products-grid" style={{ marginTop: '2.5rem' }}>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onClick={id => navigate('product', id)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-light)' }}>
            <span style={{ fontSize: '3rem' }}>🔍</span>
            <p style={{ marginTop: '1rem' }}>No products found for this filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}
