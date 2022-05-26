import * as categoryName from "../../constants/category-names";
import styles from "./HeaderBottomRow.module.css";

export const HeaderBottomRow = () => {
  return (
    <section className={styles.header__bottomRow}>
      <ul className={styles.header__bottomRow__categories}>
        <li className={styles.header__bottomRow__categories__link}>
          {categoryName.EASTERN_PHILOSOPHY}
        </li>
        <li className={styles.header__bottomRow__categories__link}>
          {categoryName.EXISTENTIALISM}
        </li>
        <li className={styles.header__bottomRow__categories__link}>
          {categoryName.GREEK_PHILOSOPHY}
        </li>
        <li className={styles.header__bottomRow__categories__link}>
          {categoryName.POLITICAL_PHILOSOPHY}
        </li>
      </ul>
    </section>
  );
};
