import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <span className={styles.brandText}>Beyond</span>
        <div className={styles.calmContainer}>
          <span className={styles.brandText}>Ca</span>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo.png"
              alt="Beyond Calm"
              width={70}
              height={70}
              priority
            />
          </div>
          <span className={styles.brandText}>m</span>
        </div>
      </div>
    </main>
  );
}
