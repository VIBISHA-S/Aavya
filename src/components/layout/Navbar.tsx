'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <p>Free standard shipping on all orders over ₹2000</p>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div className={styles.desktopLinks}>
            <Link href="/categories" className={styles.navLink}>New In</Link>
          </div>
        </div>

        <div className={styles.navCenter}>
          <Link href="/" className={styles.logo}>AAVYA</Link>
        </div>

        <div className={styles.navRight}>
          <div className={styles.searchContainer}>
            {isSearchOpen && (
              <input 
                type="text" 
                className={styles.inlineSearchInput} 
                placeholder="Search..." 
                autoFocus 
              />
            )}
            <button 
              className={styles.iconBtn} 
              aria-label="Search"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <SearchIcon />
            </button>
          </div>
          <Link href="/login" className={`${styles.iconBtn} ${styles.desktopIcon}`} aria-label="Account">
            <UserIcon />
          </Link>
          <Link href="/wishlist" className={`${styles.iconBtn} ${styles.desktopIcon}`} aria-label="Wishlist">
            <HeartIcon />
          </Link>
          <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
            <CartIcon />
            <span className={styles.cartCount}>0</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <Link href="/categories" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>New In</Link>
        <Link href="/categories" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
        <Link href="/wishlist" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Wishlist</Link>
        <Link href="/login" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Account</Link>
      </div>
    </header>
  );
}

// Simple SVG Icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);
