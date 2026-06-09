'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './cart.module.css';

// Dummy cart data
const initialCart = [
  { id: 1, name: "Ivory Handwoven Silk Set", price: 12500, size: "M", color: "Ivory", quantity: 1, image: "/images/category_kurtas.png" },
  { id: 2, name: "Rose Gold Tissue Saree", price: 18000, size: "Free Size", color: "Rose Gold", quantity: 1, image: "/images/category_sarees.png" }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.pageWrapper}>
        <div className={`container ${styles.emptyCart}`}>
          <h1>Your Bag is Empty</h1>
          <p>Explore our latest collections and find something you love.</p>
          <Link href="/categories" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className="container">
        <h1 className={styles.pageTitle}>Your Bag ({cartItems.length})</h1>
        
        <div className={styles.cartLayout}>
          {/* Cart Items List */}
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage} style={{ position: 'relative' }}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                </div>
                
                <div className={styles.itemDetails}>
                  <div className={styles.itemHeader}>
                    <h3><Link href={`/product/${item.id}`}>{item.name}</Link></h3>
                    <p className={styles.itemPrice}>₹{item.price.toLocaleString()}</p>
                  </div>
                  
                  <p className={styles.itemVariant}>Color: {item.color} | Size: {item.size}</p>
                  
                  <div className={styles.itemActions}>
                    <div className={styles.quantityControl}>
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    
                    <div className={styles.textActions}>
                      <button className={styles.actionLink}>Save for Later</button>
                      <button className={styles.actionLink} onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>{subtotal > 2000 ? 'Free' : '₹150'}</span>
            </div>
            
            <div className={styles.promoCode}>
              <p>Promo Code</p>
              <div className={styles.promoInput}>
                <input type="text" placeholder="Enter code" />
                <button>Apply</button>
              </div>
            </div>
            
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>₹{(subtotal + (subtotal > 2000 ? 0 : 150)).toLocaleString()}</span>
            </div>
            
            <Link href="/checkout" className={`btn-primary ${styles.checkoutBtn}`}>
              Proceed to Checkout
            </Link>
            
            <div className={styles.secureCheckout}>
              <p>🔒 Secure Checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
