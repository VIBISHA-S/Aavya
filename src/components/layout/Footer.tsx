import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <h2 className={styles.logo}>AAVYA</h2>
          <p className={styles.tagline}>Modern Indian Elegance</p>
          <div className={styles.socials}>
            {/* Simple icons placeholders */}
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Pinterest">PI</a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h3>Shop</h3>
            <ul>
              <li><Link href="/categories">New Arrivals</Link></li>
              <li><Link href="/categories">Ethnic Wear</Link></li>
              <li><Link href="/categories">Festive</Link></li>
              <li><Link href="/categories">Accessories</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>About</h3>
            <ul>
              <li><Link href="#">Our Story</Link></li>
              <li><Link href="#">Sustainability</Link></li>
              <li><Link href="#">Stores</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>Support</h3>
            <ul>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Shipping & Returns</Link></li>
              <li><Link href="#">Size Guide</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h3>Join The AAVYA List</h3>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} AAVYA. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
