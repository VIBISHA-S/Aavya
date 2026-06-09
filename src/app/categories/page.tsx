import Link from "next/link";
import Image from "next/image";
import styles from "./categories.module.css";

// Dummy product data
const products = [
  { id: 1, name: "Ivory Handwoven Silk Set", price: "₹12,500", category: "Ethnic Wear", image: "/images/category_ethnic.png", featured: true },
  { id: 2, name: "Rose Gold Tissue Saree", price: "₹18,000", category: "Sarees", image: "/images/category_sarees.png", featured: false },
  { id: 3, name: "Emerald Green Kurta", price: "₹8,500", category: "Kurtas", image: "/images/category_kurtas.png", featured: false },
  { id: 4, name: "Midnight Blue Co-ord", price: "₹10,500", category: "Co-Ord Sets", image: "/images/category_coords.png", featured: true },
  { id: 5, name: "Mustard Silk Dress", price: "₹15,000", category: "Dresses", image: "/images/hero_campaign.png", featured: false },
  { id: 6, name: "Blush Pink Lehenga", price: "₹35,000", category: "Festive Collection", image: "/images/category_ethnic.png", featured: true },
  { id: 7, name: "Sand Georgette Saree", price: "₹14,000", category: "Sarees", image: "/images/category_sarees.png", featured: false },
  { id: 8, name: "Crimson Red Kurti Set", price: "₹9,200", category: "Kurtas", image: "/images/category_kurtas.png", featured: false },
];

export default function CategoriesPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Page Header */}
      <div className={styles.header}>
        <div className="container">
          <h1>New Arrivals</h1>
          <p>Discover our latest collection of premium Indian fashion.</p>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        {/* Sidebar / Filters */}
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3>Categories</h3>
            <ul>
              <li className={styles.active}>New Arrivals</li>
              <li>Ethnic Wear</li>
              <li>Kurtas & Kurti Sets</li>
              <li>Sarees</li>
              <li>Dresses</li>
              <li>Co-Ord Sets</li>
              <li>Office Wear</li>
              <li>Festive Collection</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div className={styles.filterGroup}>
            <h3>Filter By Price</h3>
            <div className={styles.priceFilter}>
              <input type="range" min="0" max="50000" className={styles.rangeSlider} />
              <div className={styles.priceLabels}>
                <span>₹0</span>
                <span>₹50,000+</span>
              </div>
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3>Color</h3>
            <div className={styles.colorGrid}>
              <span className={styles.colorSwatch} style={{ backgroundColor: '#F8F5F0' }}></span>
              <span className={styles.colorSwatch} style={{ backgroundColor: '#E8DFD3' }}></span>
              <span className={styles.colorSwatch} style={{ backgroundColor: '#CDAA8D' }}></span>
              <span className={styles.colorSwatch} style={{ backgroundColor: '#3B2F2F' }}></span>
              <span className={styles.colorSwatch} style={{ backgroundColor: '#222222' }}></span>
              <span className={styles.colorSwatch} style={{ backgroundColor: '#9b2226' }}></span>
              <span className={styles.colorSwatch} style={{ backgroundColor: '#0a9396' }}></span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className={styles.mainContent}>
          <div className={styles.toolbar}>
            <span>Showing {products.length} results</span>
            <div className={styles.sort}>
              <label>Sort by:</label>
              <select>
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <div key={product.id} className={`${styles.productCard} ${product.featured ? styles.featuredCard : ''}`}>
                <div className={styles.imageContainer} style={{ position: 'relative' }}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} className={styles.productImageHover} />
                  
                  {/* Quick Actions */}
                  <div className={styles.quickActions}>
                    <button className={styles.actionBtn}>Quick Add</button>
                  </div>
                  
                  {/* Wishlist Heart */}
                  <button className={styles.wishlistBtn} aria-label="Add to wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
          
          <div className={styles.pagination}>
            <button className={styles.pageBtn}>Previous</button>
            <span className={styles.pageNumber}>1 of 4</span>
            <button className={styles.pageBtn}>Next</button>
          </div>
        </main>
      </div>
    </div>
  );
}
