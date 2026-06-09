'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './checkout.module.css';

const cartItems = [
  { id: 1, name: "Ivory Handwoven Silk Set", price: 12500, size: "M", image: "/images/category_kurtas.png" },
  { id: 2, name: "Rose Gold Tissue Saree", price: 18000, size: "Free Size", image: "/images/category_sarees.png" }
];

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.checkoutLayout}`}>
        
        {/* Left Form Section */}
        <div className={styles.checkoutForm}>
          <div className={styles.header}>
            <Link href="/" className={styles.logo}>AAVYA</Link>
            <div className={styles.breadcrumbs}>
              <Link href="/cart">Cart</Link> &gt; <span>Checkout</span>
            </div>
          </div>

          <form className={styles.formContainer}>
            {/* Contact Info */}
            <section className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <h2>Contact Information</h2>
                <Link href="#" className={styles.loginLink}>Already have an account? Log in</Link>
              </div>
              <div className={styles.formRow}>
                <input type="email" placeholder="Email address" required className={styles.inputField} />
              </div>
              <div className={styles.checkboxRow}>
                <input type="checkbox" id="newsletter" defaultChecked />
                <label htmlFor="newsletter">Email me with news and offers</label>
              </div>
            </section>

            {/* Shipping Address */}
            <section className={styles.formSection}>
              <h2>Shipping Address</h2>
              <div className={styles.formRow}>
                <select className={styles.inputField} defaultValue="IN">
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AE">United Arab Emirates</option>
                </select>
              </div>
              <div className={styles.formRowSplit}>
                <input type="text" placeholder="First name" required className={styles.inputField} />
                <input type="text" placeholder="Last name" required className={styles.inputField} />
              </div>
              <div className={styles.formRow}>
                <input type="text" placeholder="Address" required className={styles.inputField} />
              </div>
              <div className={styles.formRow}>
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className={styles.inputField} />
              </div>
              <div className={styles.formRowSplitTriple}>
                <input type="text" placeholder="City" required className={styles.inputField} />
                <select className={styles.inputField} defaultValue="">
                  <option value="" disabled>State</option>
                  <option value="MH">Maharashtra</option>
                  <option value="DL">Delhi</option>
                  <option value="KA">Karnataka</option>
                </select>
                <input type="text" placeholder="PIN code" required className={styles.inputField} />
              </div>
              <div className={styles.formRow}>
                <input type="tel" placeholder="Phone" required className={styles.inputField} />
              </div>
            </section>

            {/* Delivery Options */}
            <section className={styles.formSection}>
              <h2>Delivery Options</h2>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <div className={styles.radioInfo}>
                    <input type="radio" name="delivery" defaultChecked />
                    <div>
                      <span className={styles.radioTitle}>Standard Shipping</span>
                      <span className={styles.radioDesc}>3-5 business days</span>
                    </div>
                  </div>
                  <span className={styles.radioPrice}>Free</span>
                </label>
                <label className={styles.radioLabel}>
                  <div className={styles.radioInfo}>
                    <input type="radio" name="delivery" />
                    <div>
                      <span className={styles.radioTitle}>Express Shipping</span>
                      <span className={styles.radioDesc}>1-2 business days</span>
                    </div>
                  </div>
                  <span className={styles.radioPrice}>₹500</span>
                </label>
              </div>
            </section>

            {/* Payment */}
            <section className={styles.formSection}>
              <h2>Payment</h2>
              <p className={styles.secureText}>All transactions are secure and encrypted.</p>
              
              <div className={styles.paymentMethods}>
                <label className={`${styles.paymentLabel} ${paymentMethod === 'card' ? styles.active : ''}`}>
                  <div className={styles.radioInfo}>
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'card'} 
                      onChange={() => setPaymentMethod('card')} 
                    />
                    <span className={styles.radioTitle}>Credit/Debit Card</span>
                  </div>
                  <div className={styles.cardIcons}>
                    <span className={styles.iconMock}>V</span>
                    <span className={styles.iconMock}>M</span>
                    <span className={styles.iconMock}>A</span>
                  </div>
                </label>
                
                {paymentMethod === 'card' && (
                  <div className={styles.paymentDetails}>
                    <div className={styles.formRow}>
                      <input type="text" placeholder="Card number" className={styles.inputField} />
                    </div>
                    <div className={styles.formRowSplit}>
                      <input type="text" placeholder="Expiration date (MM/YY)" className={styles.inputField} />
                      <input type="text" placeholder="Security code" className={styles.inputField} />
                    </div>
                    <div className={styles.formRow}>
                      <input type="text" placeholder="Name on card" className={styles.inputField} />
                    </div>
                  </div>
                )}
                
                <label className={`${styles.paymentLabel} ${paymentMethod === 'upi' ? styles.active : ''}`}>
                  <div className={styles.radioInfo}>
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'upi'} 
                      onChange={() => setPaymentMethod('upi')} 
                    />
                    <span className={styles.radioTitle}>UPI / QR Code</span>
                  </div>
                </label>
                
                <label className={`${styles.paymentLabel} ${paymentMethod === 'cod' ? styles.active : ''}`}>
                  <div className={styles.radioInfo}>
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'cod'} 
                      onChange={() => setPaymentMethod('cod')} 
                    />
                    <span className={styles.radioTitle}>Cash on Delivery (COD)</span>
                  </div>
                </label>
              </div>
            </section>

            <div className={styles.formActions}>
              <Link href="/cart" className={styles.returnLink}>&lt; Return to cart</Link>
              <button type="button" className={`btn-primary ${styles.submitBtn}`}>Place Order</button>
            </div>
          </form>
        </div>

        {/* Right Summary Section */}
        <div className={styles.orderSummary}>
          <div className={styles.summarySticky}>
            <div className={styles.summaryItems}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.summaryItem}>
                  <div className={styles.summaryItemImage} style={{ position: 'relative' }}>
                    <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover', objectPosition: 'top center', borderRadius: '8px' }} />
                    <span className={styles.itemBadge}>1</span>
                  </div>
                  <div className={styles.summaryItemInfo}>
                    <h4>{item.name}</h4>
                    <p>{item.size}</p>
                  </div>
                  <div className={styles.summaryItemPrice}>
                    ₹{item.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.discountCode}>
              <input type="text" placeholder="Discount code" className={styles.inputField} />
              <button className={styles.applyBtn}>Apply</button>
            </div>

            <div className={styles.costBreakdown}>
              <div className={styles.costRow}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className={styles.costRow}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className={`${styles.costRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span><span className={styles.currency}>INR</span> ₹{subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
