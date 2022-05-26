import { TopRowHamburgerMenu } from "./components/TopRowHamburgerMenu";

import styles from "./HeaderTopRow.module.css";

export const HeaderTopRow = () => {
  return (
    <section className={styles.header__topRow}>
      <nav className={styles.header__topRow__hamburgerMenu}>
        <TopRowHamburgerMenu />
      </nav>
      <h1 className={styles.header__topRow__title}>Stoa</h1>
      <nav className={styles.header__topRow__navIcons}>
        <div className={styles.header__topRow__navIcons__cart}>
          <span className={styles.header__topRow__navIcons__cart__cartCounter}>
            0
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            className={styles.header__topRow__navIcons__cart__cartIcon}
          >
            <circle cx="10" cy="28" r="2" fill="currentColor"></circle>
            <circle cx="24" cy="28" r="2" fill="currentColor"></circle>
            <path
              d="M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7zm-2.8 9H7.62l-1.4-7h20.53z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </nav>
    </section>
  );
};
