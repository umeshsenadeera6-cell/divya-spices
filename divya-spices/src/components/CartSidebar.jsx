import { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { cart, cartOpen, setCartOpen, removeFromCart, cartTotal, showToast } = useCart();
  const ref = useRef();

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setCartOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setCartOpen]);

  function checkout() {
    showToast('🔒 Redirecting to secure checkout...');
    setTimeout(() => {
      setCartOpen(false);
      showToast('💳 Payment gateway integration required for live checkout');
    }, 1200);
  }

  return (
    <>
      <div
        className={`cart-overlay ${cartOpen ? 'cart-overlay--open' : ''}`}
        onClick={() => setCartOpen(false)}
      />
      <aside className={`cart-sidebar ${cartOpen ? 'cart-sidebar--open' : ''}`} ref={ref}>
        <div className="cart-sidebar__header">
          <h2 className="cart-sidebar__title">
            <span>🛒</span> Your Cart
          </h2>
          <button className="cart-sidebar__close" onClick={() => setCartOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="cart-sidebar__items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty__icon">🛒</span>
              <p className="cart-empty__title">Your cart is empty</p>
              <p className="cart-empty__sub">Discover our premium spices</p>
              <button
                className="btn-primary"
                style={{ marginTop: '1rem' }}
                onClick={() => setCartOpen(false)}
              >
                Shop Now →
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={`${item.id}-${item.weight}`} className="cart-item">
                <div className="cart-item__img">{item.emoji}</div>
                <div className="cart-item__info">
                  <div className="cart-item__name">{item.name}</div>
                  <div className="cart-item__meta">
                    {item.weight} · Qty: {item.qty}
                  </div>
                </div>
                <div className="cart-item__price">
                  ${(item.unitPrice * item.qty).toFixed(2)}
                </div>
                <button
                  className="cart-item__remove"
                  onClick={() => removeFromCart(item.id, item.weight)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-total">
              <span>Subtotal</span>
              <span className="cart-total__amount">${cartTotal}</span>
            </div>
            <button className="checkout-btn" onClick={checkout}>
              Proceed to Checkout →
            </button>
            <p className="cart-shipping">
              🌍 Free shipping on orders over $75 · Secure checkout
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
