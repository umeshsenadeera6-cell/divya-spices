import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast } = useCart();
  return (
    <div className={`toast ${toast.show ? 'toast--show' : ''}`}>
      {toast.msg}
    </div>
  );
}
