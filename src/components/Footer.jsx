import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>PS.</span>
        <p className={styles.copy}>
          © 2025 <span>Priyadharshini Sankar</span> · Crafted with ❤️ in Chennai
        </p>
        <div className={styles.links}>
          <a href="#hero">↑ Top</a>
          <a href="mailto:sankarpriyadharshini13@gmail.com">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
