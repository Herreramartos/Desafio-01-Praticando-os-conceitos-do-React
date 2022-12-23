import styles from './Header.module.css';

import reactLogo from '@/assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header} >
          <img src={reactLogo} className="logo react" alt="React logo" />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  ); 
}