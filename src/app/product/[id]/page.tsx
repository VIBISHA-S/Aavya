'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './product.module.css';

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState('details');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.productLayout}`}>
        {/* Left: Image Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImageContainer}>
            <Image src="/images/category_ethnic.png" alt="Main Product Image" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
            <div className={styles.zoomLens}>Zoom</div>
          </div>
          <div className={styles.thumbnails}>
            {[1, 2, 3, 4].map((thumb) => (
              <div key={thumb} className={styles.thumbnail} style={{ position: 'relative' }}>
                <Image src="/images/category_ethnic.png" alt={`Thumb ${thumb}`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className={styles.productInfo}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> / <Link href="/categories">Ethnic Wear</Link> / <span>Ivory Handwoven Silk Set</span>
          </div>

          <h1 className={styles.productTitle}>Ivory Handwoven Silk Set</h1>
          <p className={styles.productPrice}>₹12,500</p>
          
          <p className={styles.productDescription}>
            A masterpiece of traditional craftsmanship, this ivory handwoven silk set features intricate embroidery and a contemporary silhouette. Perfect for daytime festivities and intimate celebrations.
          </p>

          <div className={styles.colorSelection}>
            <span className={styles.optionLabel}>Color: <strong>Ivory</strong></span>
            <div className={styles.colorGrid}>
              <button className={`${styles.colorSwatch} ${styles.active}`} style={{ backgroundColor: '#F8F5F0' }}></button>
              <button className={styles.colorSwatch} style={{ backgroundColor: '#E8DFD3' }}></button>
              <button className={styles.colorSwatch} style={{ backgroundColor: '#CDAA8D' }}></button>
            </div>
          </div>

          <div className={styles.sizeSelection}>
            <div className={styles.sizeHeader}>
              <span className={styles.optionLabel}>Size: <strong>{selectedSize}</strong></span>
              <button className={styles.sizeGuideBtn}>Size Guide</button>
            </div>
            <div className={styles.sizeGrid}>
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button 
                  key={size} 
                  className={`${styles.sizeBtn} ${selectedSize === size ? styles.active : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <div className={styles.quantityControl}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            
            <button className={`btn-secondary ${styles.addToCart}`}>Add to Cart</button>
            <button className={`btn-primary ${styles.buyNow}`}>Buy It Now</button>
          </div>

          <div className={styles.tabs}>
            <div className={styles.tabHeaders}>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'details' ? styles.active : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'fabric' ? styles.active : ''}`}
                onClick={() => setActiveTab('fabric')}
              >
                Fabric & Care
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'delivery' ? styles.active : ''}`}
                onClick={() => setActiveTab('delivery')}
              >
                Delivery
              </button>
            </div>
            
            <div className={styles.tabContent}>
              {activeTab === 'details' && (
                <ul>
                  <li>Hand-embroidered details on the yoke</li>
                  <li>Straight cut silhouette</li>
                  <li>Includes matching dupatta and pants</li>
                  <li>Model is 5'8" and wears size S</li>
                </ul>
              )}
              {activeTab === 'fabric' && (
                <ul>
                  <li>100% Pure Handwoven Silk</li>
                  <li>Dry clean only</li>
                  <li>Do not bleach</li>
                  <li>Iron on low heat</li>
                </ul>
              )}
              {activeTab === 'delivery' && (
                <ul>
                  <li>Dispatch within 3-5 business days</li>
                  <li>Free shipping on orders above ₹2000</li>
                  <li>14-day return policy for unused items</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Styled Together */}
      <section className={`container ${styles.relatedSection}`}>
        <h2>Styled Together</h2>
        <div className={styles.relatedGrid}>
          {[1, 2].map((item) => (
            <div key={item} className={styles.relatedCard}>
              <div className={styles.relatedImage} style={{ position: 'relative' }}>
                <Image src="/images/category_sarees.png" alt={`Accessory ${item}`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div className={styles.relatedInfo}>
                <h3>Polki Drop Earrings</h3>
                <p>₹4,500</p>
                <button className={styles.linkBtn}>Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Similar Products */}
      <section className={`container ${styles.relatedSection}`}>
        <h2>You May Also Like</h2>
        <div className={styles.relatedGrid}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={styles.relatedCard}>
              <div className={styles.relatedImage} style={{ position: 'relative' }}>
                <Image src="/images/category_kurtas.png" alt={`Similar ${item}`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div className={styles.relatedInfo}>
                <h3>Ivory Tunic Dress</h3>
                <p>₹8,000</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
