import styles from './Footer.module.css';
import React from 'react';
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
      </div>
      <div>
        <a
          href="https://Www.linkedin.com/in/ariyansahoo212/"
          target="_blank"
          rel="noreferrer"
        >
          Ariyan Sahoo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
