import { useState } from "react";

import cn from "classnames";

import * as categoryNames from "../../../constants/category-names";
import styles from "./TopRowHamburgerMenu.module.css";

export const TopRowHamburgerMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleToggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
      <nav
        className={styles.header__topRow__hamburgerMenu__hamburger}
        onClick={handleToggleHamburger}
      >
        <div
          className={cn(
            styles.header__topRow__hamburgerMenu__hamburger__burger,
            {
              [styles.header__topRow__hamburgerMenu__hamburger__burger1]:
                isHamburgerOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            styles.header__topRow__hamburgerMenu__hamburger__burger,
            {
              [styles.header__topRow__hamburgerMenu__hamburger__burger2]:
                isHamburgerOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            styles.header__topRow__hamburgerMenu__hamburger__burger,
            {
              [styles.header__topRow__hamburgerMenu__hamburger__burger3]:
                isHamburgerOpen,
            }
          )}
        ></div>
      </nav>
      <ul
        className={cn(styles.header__topRow__hamburgerMenu__dropdownMenu, {
          [styles.header__topRow__hamburgerMenu__dropdownMenu_show]:
            isHamburgerOpen,
        })}
      >
        <li>{categoryNames.EASTERN_PHILOSOPHY}</li>
        <li>{categoryNames.EXISTENTIALISM}</li>
        <li>{categoryNames.GREEK_PHILOSOPHY}</li>
        <li>{categoryNames.POLITICAL_PHILOSOPHY}</li>
      </ul>
    </>
  );
};
