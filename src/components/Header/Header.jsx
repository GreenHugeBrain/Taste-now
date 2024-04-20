import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../../images/Taste now.svg';
import food from '../../images/food img.svg';

function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.navigation}>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <button>Sign up</button>
          </ul>
        </div>
        <div className={styles.navigation1}>
          <button className={styles.burgerMenu} onClick={toggleMenu}>
            ☰
          </button>
          {menu && (
            <ul className={styles.menu}>
              <li>Home</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <button>Sign up</button>
            </ul>
          )}
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h1>Experience food <span>Delivery</span> like no other</h1>
          <p>We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.</p>
        </div>
        <div className={styles.hero_img}>
          <img className={styles.imageofhero} src={food} alt="food" />
        </div>
      </div>
    </header>
  );
}

export default Header;
