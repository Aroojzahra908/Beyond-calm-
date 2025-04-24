'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './signup.module.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
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

          <h1 className={styles.title}>Sign Up</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rameela Mushtaq"
                className={styles.nameInput}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
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
                placeholder="Password"
                className={styles.passwordInput}
                required
              />
            </div>

            <button type="submit" className={styles.signupButton}>
              Sign Up
            </button>
          </form>

          <p className={styles.loginLink}>
            <span>Already have an account?</span>
            <Link href="/signin">Log In</Link>
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
              Sign up with Google
            </button>

            <button type="button">
              <Image
                src="/images/apple.png"
                alt="Apple"
                width={26}
                height={26}
              />
              Sign up with Apple
            </button>

            <button type="button">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
              Sign up with Facebook
            </button>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.contentText}>
            <h2>Start Your Journey to a Calmer, Happier You 🌿</h2>
            <p>
              Join millions using Calm to reduce stress, sleep better, and improve their
              mental well-being. Explore 500+ Sleep Stories®, guided meditations,
              breathing exercises, and carefully curated music designed for your
              peace of mind.
            </p>
            <div className={styles.userCount}>
              <div className={styles.avatars}>
                <Image src="/images/pic 1.png" alt="User" width={28} height={28} />
                <Image src="/images/pic 2.png" alt="User" width={28} height={28} />
                <Image src="/images/pic 3.png" alt="User" width={28} height={28} />
                <Image src="/images/pic 4.png" alt="User" width={28} height={28} />
              </div>
              <p>3k+ Explainability Used, now it's your turn</p>
            </div>
          </div>
          <div className={styles.illustration}>
            <Image
              src="/images/man.png"
              alt="Meditation Illustration"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
} 