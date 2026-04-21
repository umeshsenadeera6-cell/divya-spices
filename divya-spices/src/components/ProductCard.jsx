import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onClick }) {
  const { addToCart } = useCart();
  const stars = '★'.repeat(product.stars) + '☆'.repeat(5 - product.stars);

  return (
    <div className="product-card" onClick={() => onClick(product.id)}>
      <div className="product-card__img" style={{ background: product.gradient }}>
        {product.badge === 'organic' && (
          <span className="badge badge--organic">Organic</span>
        )}
        {product.badge === 'hot' && (
          <span className="badge badge--hot">🔥 Best Seller</span>
        )}
        <span className="product-card__emoji">{product.emoji}</span>
        <div className="product-card__glow" />
      </div>
      <div className="product-card__body">
        <p className="product-card__origin">{product.origin}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__stars">
          <span className="stars">{stars}</span>
          <span className="product-card__review-count">({product.reviews})</span>
        </div>
        <div className="product-card__footer">
          <div className="product-card__pricing">
            <span className="price">${product.price}</span>
            {product.oldPrice && (
              <span className="price-old">${product.oldPrice}</span>
            )}
          </div>
          <button
            className="add-cart-btn"
            onClick={e => {
              e.stopPropagation();
              addToCart(product, '100g');
            }}
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
}
