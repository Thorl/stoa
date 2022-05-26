import { HeaderBottomRow } from "./components/BottomRow/HeaderBottomRow";
import { HeaderTopRow } from "./components/TopRow/HeaderTopRow";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderTopRow />
      <HeaderBottomRow />
    </header>
  );
};
