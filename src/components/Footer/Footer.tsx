import styles from './Footer.module.css';
import React from 'react';
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
      </div>
      <div>
        <a
          href="https://github.com/uddhavrawal/Todo-list/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        
        <a
          href="https://Www.linkedin.com/in/uddhavrawal/"
          target="_blank"
          rel="noreferrer"
        >
          Uddhav Rawal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
