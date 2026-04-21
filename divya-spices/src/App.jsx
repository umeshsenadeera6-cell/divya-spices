import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Toast from './components/Toast';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './index.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProductId, setCurrentProductId] = useState(null);

  function navigate(page, productId = null) {
    setCurrentPage(page);
    if (productId) setCurrentProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const pages = {
    home: <Home navigate={navigate} />,
    shop: <Shop navigate={navigate} />,
    product: <ProductDetail productId={currentProductId} navigate={navigate} />,
    about: <About navigate={navigate} />,
    blog: <Blog />,
    contact: <Contact />,
  };

  return (
    <>
      <Navbar navigate={navigate} currentPage={currentPage} />
      <main style={{ paddingTop: '68px' }}>
        {pages[currentPage]}
      </main>
      <CartSidebar />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
