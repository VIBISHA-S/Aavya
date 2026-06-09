'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './login.module.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.authContainer}`}>
        <div className={styles.authBox}>
          <h1 className={styles.title}>{isLogin ? 'Sign In' : 'Create Account'}</h1>
          <p className={styles.subtitle}>
            {isLogin 
              ? 'Enter your details to access your AAVYA account.' 
              : 'Join the AAVYA Club for exclusive access and offers.'}
          </p>

          <form className={styles.form}>
            {!isLogin && (
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required />
              </div>
            )}
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            {isLogin && (
              <div className={styles.forgotPassword}>
                <Link href="#">Forgot your password?</Link>
              </div>
            )}

            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className={styles.toggleText}>
            {isLogin ? (
              <p>Don't have an account? <button onClick={() => setIsLogin(false)}>Sign up</button></p>
            ) : (
              <p>Already have an account? <button onClick={() => setIsLogin(true)}>Log in</button></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
