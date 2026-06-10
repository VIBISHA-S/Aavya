import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* 1. HERO BANNER (Glassmorphism) */}
      <section className={styles.heroBanner}>
        <Image src="/images/hero_campaign_v2.png" alt="New Collection" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} quality={100} priority />
        <div className={styles.glassContainer}>
          <div className={styles.glassOverlay}>
            <h1>The Heritage Edit</h1>
            <p>Where timeless tradition meets modern luxury.</p>
            <Link href="/categories" className="btn-primary">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY (BENTO GRID WITH MODEL IMAGES) */}
      <section className={`container ${styles.shopByCategory}`}>
        <h2 className={styles.sectionTitle}>Shop By Category</h2>
        <div className={styles.bentoGrid}>
          {/* Large Left Block */}
          <Link href="/categories" className={`${styles.bentoBlock} ${styles.bentoLarge}`}>
            <img src="/images/category_ethnic.png" alt="Ethnic Wear" className={styles.bentoImage} />
            <div className={styles.bentoContent}>
              <h3>Ethnic Wear</h3>
            </div>
          </Link>
          {/* Top Right Wide Block */}
          <Link href="/categories" className={`${styles.bentoBlock} ${styles.bentoWide}`}>
            <img src="/images/category_sarees.png" alt="Sarees" className={styles.bentoImage} />
            <div className={styles.bentoContent}>
              <h3>Sarees</h3>
            </div>
          </Link>
          {/* Bottom Right Small Blocks */}
          <Link href="/categories" className={styles.bentoBlock}>
            <img src="/images/category_kurtas.png" alt="Kurtas" className={styles.bentoImage} />
            <div className={styles.bentoContent}>
              <h3>Kurtas</h3>
            </div>
          </Link>
          <Link href="/categories" className={styles.bentoBlock}>
            <img src="/images/category_coords.png" alt="Co-Ords" className={styles.bentoImage} />
            <div className={styles.bentoContent}>
              <h3>Co-Ords</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. SHOP BY OCCASION (MINIMALIST TYPOGRAPHY) - MOVED HERE */}
      <section className={`container ${styles.shopByOccasion}`}>
        <h2 className={styles.sectionTitle}>Curated Edits</h2>
        <div className={styles.occasionList}>
          <Link href="/categories?occasion=wedding" className={styles.occasionLink}>
            <span className={styles.occasionName}>Wedding Guest</span>
            <span className={styles.occasionArrow}>→</span>
          </Link>
          <Link href="/categories?occasion=festive" className={styles.occasionLink}>
            <span className={styles.occasionName}>The Festive Edit</span>
            <span className={styles.occasionArrow}>→</span>
          </Link>
          <Link href="/categories?occasion=workwear" className={styles.occasionLink}>
            <span className={styles.occasionName}>Everyday Elegance</span>
            <span className={styles.occasionArrow}>→</span>
          </Link>
          <Link href="/categories?occasion=resort" className={styles.occasionLink}>
            <span className={styles.occasionName}>Resort Wear</span>
            <span className={styles.occasionArrow}>→</span>
          </Link>
        </div>
      </section>

      {/* 3. NEW ARRIVALS (PRODUCT GRID) */}
      <section className={`container ${styles.newArrivals}`}>
        <h2 className={styles.sectionTitle}>New Arrivals</h2>
        <div className={styles.productGrid}>
          {[
            { id: 1, name: "Ivory Embroidered Lehenga", price: 12500, image: "/images/category_ethnic.png" },
            { id: 2, name: "Rose Gold Silk Saree", price: 9500, image: "/images/category_sarees.png" },
            { id: 3, name: "Brown Zari Work Kurta Set", price: 8000, image: "/images/category_kurtas.png" },
            { id: 4, name: "Cream Embellished Co-ord", price: 7500, image: "/images/category_coords.png" }
          ].map((item) => (
            <div key={item.id} className={styles.productCard}>
              <Link href={`/product/${item.id}`} className={styles.productImageWrapper}>
                <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </Link>
              <div className={styles.productInfo}>
                <Link href={`/product/${item.id}`} className={styles.productName}>{item.name}</Link>
                <div className={styles.productPrice}>₹{item.price}</div>
                <button className={styles.addToCartBtn}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAllWrapper}>
          <Link href="/categories" className="btn-secondary">View All Products</Link>
        </div>
      </section>

      {/* 4. TRENDING NOW (HORIZONTAL CAROUSEL) */}
      <section className={`container ${styles.trendingNow}`}>
        <h2 className={styles.sectionTitle}>Trending Now</h2>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {[
              { id: 101, name: "Midnight Blue Velvet Suit", price: 15000, image: "/images/cat_unsplash_ethnic.jpg" },
              { id: 102, name: "Dusty Rose Silk Saree", price: 11000, image: "/images/cat_unsplash_sarees.jpg" },
              { id: 103, name: "Mint Green Organza Kurta", price: 8500, image: "/images/cat_unsplash_kurtas.jpg" },
              { id: 104, name: "Black Embellished Co-ord", price: 9000, image: "/images/cat_unsplash_coords.jpg" },
              { id: 105, name: "Crimson Red Bridal Lehenga", price: 25000, image: "/images/cat_unsplash_ethnic.jpg" }
            ].map((item, idx) => (
              <div key={idx} className={styles.carouselCard}>
                <Link href={`/product/${item.id}`} className={styles.carouselImageWrapper}>
                  <img src={item.image} alt={item.name} className={styles.carouselImage} />
                </Link>
                <div className={styles.productInfo}>
                  <Link href={`/product/${item.id}`} className={styles.productName}>{item.name}</Link>
                  <div className={styles.productPrice}>₹{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRUST BAR (SCROLLING MARQUEE) - MOVED HERE BETWEEN TWO WHITE SECTIONS */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            <span>✦ PREMIUM QUALITY</span>
            <span>✦ EASY RETURNS</span>
            <span>✦ SECURE PAYMENTS</span>
            <span>✦ FAST DELIVERY</span>
            <span>✦ PREMIUM QUALITY</span>
            <span>✦ EASY RETURNS</span>
            <span>✦ SECURE PAYMENTS</span>
            <span>✦ FAST DELIVERY</span>
          </div>
        </div>
      </section>

      {/* 5.5 FAQ SECTION */}
      <section className={`container ${styles.faqSection}`}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>How long does shipping take?</summary>
            <div className={styles.faqAnswer}>
              <p>For standard delivery within India, expect your order to arrive within 3-5 business days. International shipping takes 7-14 business days.</p>
            </div>
          </details>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Do you offer custom tailoring?</summary>
            <div className={styles.faqAnswer}>
              <p>Yes, we offer complimentary custom sizing on all our ethnic and festive wear. Simply select 'Custom Size' when adding to cart.</p>
            </div>
          </details>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>What is your return policy?</summary>
            <div className={styles.faqAnswer}>
              <p>We accept returns within 14 days of delivery for unworn items in their original condition. Custom-tailored pieces are non-refundable.</p>
            </div>
          </details>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>How do I care for silk garments?</summary>
            <div className={styles.faqAnswer}>
              <p>We recommend dry cleaning only for all our pure silk and zari-embroidered pieces to maintain their luster and delicate handwork.</p>
            </div>
          </details>
        </div>
      </section>

      {/* 6. VIP NEWSLETTER SUBSCRIPTION */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Join The AAVYA Club</h2>
          <p className={styles.newsletterSubtitle}>Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className={styles.newsletterInput} required />
            <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
