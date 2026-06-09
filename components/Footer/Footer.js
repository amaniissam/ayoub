"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine}></div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>AY</span>
          <span className={styles.logoText}>AYOUB EDITS</span>
        </div>
        <div className={styles.right}>
          <p className={styles.copy}>© 2026 Ayoub Edits. All rights reserved.</p>
          <p className={styles.dev}>
            Built by{" "}
            <a
              href="https://www.instagram.com/issam_m00/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Issam_m00
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}