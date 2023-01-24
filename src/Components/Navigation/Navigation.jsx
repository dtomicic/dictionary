import React from "react";
import styles from "./Navigation.module.css";
import { BiBook } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { UserContext } from "../../App";

const Navigation = () => {
  const [active, setActive] = React.useState(false);
  const { theme, setTheme, font, setFont } = React.useContext(UserContext);
  const fonts = ["Serif", "Sans-Serif", "Monospace"];

  const themeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <BiBook className={styles.icon} />
      </div>
      <div className={styles.nav}>
        <div className={styles.fontPicker}>
          <div
            className={styles.fontPickerTextContainer}
            onMouseOver={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <span className={styles.fontPickerText}>{font}</span>
            <RiArrowDropDownLine
              className={
                active
                  ? `${styles.iconDropdown} ${styles.iconDropdownRotate}`
                  : `${styles.iconDropdown}`
              }
            />
          </div>

          <div
            className={
              active
                ? `${styles.fontDropdown} ${styles.fontDropdownActive}`
                : `${styles.fontDropdown}`
            }
            onMouseOver={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <ul className={styles.fontList}>
              {fonts.map((font) => {
                return (
                  <li
                    className={styles.fontListItem}
                    key={font}
                    onClick={() => setFont(font)}
                  >
                    {font}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr className={styles.divider} />
        {theme === "light" ? (
          <BsMoon className={styles.iconTheme} onClick={themeChange} />
        ) : (
          <BsMoonFill className={styles.iconTheme} onClick={themeChange} />
        )}{" "}
      </div>
    </div>
  );
};
export default Navigation;
