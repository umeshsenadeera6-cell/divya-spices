import { useState } from 'react';
import { products, reviews } from '../data/products';
import { useCart } from '../context/CartContext';

const weightKeys = ['50g', '100g', '250g'];

export default function ProductDetail({ productId, navigate }) {
  const product = products.find(p => p.id === productId);
  const { addToCart, setCartOpen, weights } = useCart();
  const [selectedWeight, setSelectedWeight] = useState('100g');

  if (!product) return null;

  const price = (product.price * weights[selectedWeight]).toFixed(2);
  const oldPrice = product.oldPrice
    ? (product.oldPrice * weights[selectedWeight]).toFixed(2)
    : null;
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const stars = '★'.repeat(product.stars) + '☆'.repeat(5 - product.stars);

  function handleAddCart() {
    addToCart(product, selectedWeight);
    setCartOpen(true);
  }

  return (
    <div className="page">
      <div className="breadcrumb">
        <button onClick={() => navigate('shop')} className="breadcrumb__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Shop
        </button>
      </div>

      <div className="product-detail">
        {/* Left: Image */}
        <div className="product-detail__media">
          <div
            className="product-detail__img"
            style={{ background: product.gradient }}
          >
            <span className="product-detail__emoji">{product.emoji}</span>
            <div className="product-detail__img-glow" />
          </div>
          <div className="product-detail__thumbs">
            <div className="product-detail__thumb product-detail__thumb--active" style={{ background: product.gradient }}>
              {product.emoji}
            </div>
            <div className="product-detail__thumb">📦</div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="product-detail__info">
          <div className="product-detail__origin">
            🌿 Certified Organic · {product.origin}
          </div>
          <h1 className="product-detail__name">{product.name}</h1>

          <div className="product-detail__stars">
            <span className="stars" style={{ fontSize: '1.1rem' }}>{stars}</span>
            <span className="product-detail__review-count">({product.reviews} reviews)</span>
          </div>

          <div className="product-detail__price-row">
            <span className="product-detail__price">${price}</span>
            {oldPrice && <span className="product-detail__old-price">${oldPrice}</span>}
            {discount && (
              <span className="product-detail__discount-badge">🔥 SAVE {discount}%</span>
            )}
          </div>

          <p className="product-detail__desc">{product.desc}</p>

          {/* Weight Selector */}
          <div className="product-detail__section-label">Select Weight</div>
          <div className="weight-selector">
            {weightKeys.map(w => (
              <button
                key={w}
                className={`weight-btn ${selectedWeight === w ? 'weight-btn--active' : ''}`}
                onClick={() => setSelectedWeight(w)}
              >
                {w} — ${(product.price * weights[w]).toFixed(2)}
              </button>
            ))}
          </div>

          {/* Health Benefits */}
          <div className="product-detail__section-label">Health Benefits</div>
          <div className="health-badges">
            {product.benefits.map(b => (
              <span key={b} className="health-badge">✓ {b}</span>
            ))}
          </div>

          {/* How to Use */}
          <div className="product-detail__usage">
            <div className="product-detail__usage-label">How to Use</div>
            <p className="product-detail__usage-text">{product.usage}</p>
          </div>

          {/* Actions */}
          <div className="product-detail__actions">
            <button className="btn-primary product-detail__btn" onClick={handleAddCart}>
              🛒 Add to Cart
            </button>
            <button className="btn-outline product-detail__btn">♡ Wishlist</button>
          </div>

          <div className="product-detail__trust">
            <span>🚚 Free ship over $75</span>
            <span>🔒 Secure checkout</span>
            <span>📦 Ships in 24hrs</span>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews-section">
        <h2 className="reviews-section__title">Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-card__header">
                <div className="review-card__avatar">{r.name[0]}</div>
                <div>
                  <div className="review-card__name">{r.name} · {r.country}</div>
                  <div className="stars" style={{ fontSize: '0.85rem' }}>{'★'.repeat(r.stars)}</div>
                </div>
                <div className="review-card__date">{r.date}</div>
              </div>
              <p className="review-card__text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
