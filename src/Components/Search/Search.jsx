import React from "react";
import styles from "./Search.module.css";
import { SlMagnifier } from "react-icons/sl";
import { UserContext } from "../../App";
import classnames from "classnames";

const Search = (props) => {
  const { font } = React.useContext(UserContext);
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={classnames(styles.input, {
          [styles.fontSerif]: font === "Serif",
          [styles.fontSserif]: font === "Sans-Serif",
          [styles.fontMono]: font === "Monospace",
        })}
        placeholder="Search"
        onChange={props.handleSearch}
      />
      <SlMagnifier className={styles.icon} onClick={props.handleClick} />
    </div>
  );
};
export default Search;
