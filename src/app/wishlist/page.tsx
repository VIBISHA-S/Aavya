'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../categories/categories.module.css';

// Using dummy wishlist data
const initialWishlist = [
  { id: 1, name: "Ivory Handwoven Silk Set", price: "₹12,500", category: "Ethnic Wear", image: "/images/category_ethnic.png" },
  { id: 4, name: "Midnight Blue Co-ord", price: "₹10,500", category: "Co-Ord Sets", image: "/images/category_coords.png" }
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);

  if (wishlistItems.length === 0) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.header}>
          <div className="container">
            <h1>Your Wishlist</h1>
            <p style={{ marginTop: '2rem' }}>You haven't saved any items yet.</p>
            <Link href="/categories" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>
              Discover Collection
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <div className="container">
          <h1>Your Wishlist</h1>
          <p>{wishlistItems.length} items saved</p>
        </div>
      </div>

      <div className={`container`} style={{ paddingBottom: '8rem', paddingTop: '4rem' }}>
        <div className={styles.productGrid}>
          {wishlistItems.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                
                {/* Hover Actions */}
                <div className={styles.quickActions}>
                  <button className={styles.actionBtn}>Move to Cart</button>
                </div>
                
                {/* Remove from wishlist */}
                <button 
                  className={styles.wishlistBtn} 
                  aria-label="Remove from wishlist"
                  onClick={() => setWishlistItems(wishlistItems.filter(item => item.id !== product.id))}
                  style={{ opacity: 1, backgroundColor: 'var(--color-luxury)', color: 'white' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              
              <div className={styles.productInfo}>
                <p className={styles.categoryName}>{product.category}</p>
                <Link href={`/product/${product.id}`} className={styles.productName}>
                  {product.name}
                </Link>
                <p className={styles.price}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
