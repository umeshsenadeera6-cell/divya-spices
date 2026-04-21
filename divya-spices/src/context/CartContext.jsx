import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: '' });

  const weights = { '50g': 0.6, '100g': 1.0, '250g': 2.2 };

  function addToCart(product, weight = '100g') {
    const w = weight;
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id && i.weight === w);
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.weight === w ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prev,
        {
          ...product,
          weight: w,
          qty: 1,
          unitPrice: parseFloat((product.price * weights[w]).toFixed(2)),
        },
      ];
    });
    showToast(`✅ ${product.name} added to cart!`);
  }

  function removeFromCart(id, weight) {
    setCart(prev => prev.filter(i => !(i.id === id && i.weight === weight)));
  }

  function showToast(msg) {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: '' }), 3000);
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.unitPrice * i.qty, 0).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        showToast,
        toast,
        cartCount,
        cartTotal,
        weights,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
