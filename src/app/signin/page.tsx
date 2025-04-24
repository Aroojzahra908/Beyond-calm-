'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './signin.module.css';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <div className={styles.logo}>
            <span>Beyond</span>
            <span>Ca</span>
            <Image
              src="/images/logo.png"
              alt="Beyond Calm"
              width={40}
              height={40}
              priority
            />
            <span>m</span>
          </div>

          <h1 className={styles.title}>Sign In</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Rameela Mushtaq"
                className={styles.emailInput}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={styles.passwordInput}
                required
              />
            </div>

            <div className={styles.forgotPassword}>
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className={styles.signinButton}>
              Sign in
            </button>
          </form>

          <p className={styles.registerLink}>
            <span>Don't have an account?</span>
            <Link href="/signup">Register</Link>
          </p>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <div className={styles.socialButtons}>
            <button type="button">
              <Image
                src="/images/google.png"
                alt="Google"
                width={24}
                height={24}
              />
              Sign in with Google
            </button>

            <button type="button">
              <Image
                src="/images/apple.png"
                alt="Apple"
                width={28}
                height={28}
              />
              Sign in with Apple
            </button>

            <button type="button">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
              Sign in with Facebook
            </button>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.contentText}>
            <h2>Welcome Back to Calm<span>🌙</span></h2>
            <p>
              Reconnect with your inner peace. Whether you need help unwinding
              before bed, de-stressing from work, or finding clarity in the moment, your
              Calm tools are here—ready whenever you are.
            </p>
            <div className={styles.userCount}>
              <div className={styles.avatars}>
                <Image src="/images/pic 1.png" alt="User" width={32} height={32} />
                <Image src="/images/pic 2.png" alt="User" width={32} height={32} />
                <Image src="/images/pic 3.png" alt="User" width={32} height={32} />
                <Image src="/images/pic 4.png" alt="User" width={32} height={32} />
              </div>
              <p>3k+ Explainability Used, now it's your turn</p>
            </div>
          </div>
          <div className={styles.illustration}>
            <Image
              src="/images/man.png"
              alt="Meditation Illustration"
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
} 